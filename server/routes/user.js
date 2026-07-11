import { Router } from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { mkdirSync, existsSync, unlink, writeFileSync } from 'fs'
import sharp from 'sharp'
import db from '../db.js'
import { auth } from '../config.js'
import { applyVisitDerivation } from '../spot-regions.js'

const router = Router()

const __dirname = dirname(fileURLToPath(import.meta.url))
export const UPLOADS_DIR = join(__dirname, '..', 'uploads')
if (!existsSync(UPLOADS_DIR)) mkdirSync(UPLOADS_DIR, { recursive: true })

const MAX_PHOTOS_PER_SPOT = 9

const toPublic = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  xp: user.xp,
  streak: user.streak,
  lastActiveDate: user.last_active_date,
  checkedSpots: JSON.parse(user.checked_spots || '[]'),
  completedActivities: JSON.parse(user.completed_activities || '[]'),
  visitedSpots:       JSON.parse(user.visited_spots       || '[]'),
  spotRatings:        JSON.parse(user.spot_ratings        || '{}'),
  spotReviews:        JSON.parse(user.spot_reviews        || '{}'),
  removedActivities:  JSON.parse(user.removed_activities  || '[]'),
  recommendedSpots:   JSON.parse(user.recommended_spots   || '[]'),
  spotPhotos:         JSON.parse(user.spot_photos         || '{}'),
  regionLevels:       JSON.parse(user.region_levels       || '{}'),
  joinedAt: user.created_at,
})

// GET /api/user/me
router.get('/me', auth, (req, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })
  res.json(toPublic(user))
})

// PATCH /api/user/me — update xp, checkedSpots, completedActivities
router.patch('/me', auth, (req, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })

  const { xp, checkedSpots, completedActivities, visitedSpots, spotRatings, spotReviews, removedActivities, recommendedSpots, regionLevels } = req.body

  const newXp               = xp                 !== undefined ? xp                                   : user.xp
  const newSpots            = checkedSpots        !== undefined ? JSON.stringify(checkedSpots)          : user.checked_spots
  const newActivities       = completedActivities !== undefined ? JSON.stringify(completedActivities)   : user.completed_activities
  const newVisited          = visitedSpots        !== undefined ? JSON.stringify(visitedSpots)          : user.visited_spots
  const newRatings          = spotRatings         !== undefined ? JSON.stringify(spotRatings)           : user.spot_ratings
  const newReviews          = spotReviews         !== undefined ? JSON.stringify(spotReviews)           : user.spot_reviews
  const newRemovedActs      = removedActivities   !== undefined ? JSON.stringify(removedActivities)     : user.removed_activities
  const newRecommended      = recommendedSpots    !== undefined ? JSON.stringify(recommendedSpots)      : user.recommended_spots

  // 打卡派生（服务端单一事实源）：已抵达景点所在州市的印记至少「玩过 3」，
  // 只升不降 —— Sakura 打卡会点亮踏印地图，踏印也无法把已打卡州市擦到 3 以下
  let newRegionLevels = user.region_levels
  if (regionLevels !== undefined || visitedSpots !== undefined) {
    const merged  = regionLevels !== undefined ? { ...regionLevels } : JSON.parse(user.region_levels || '{}')
    const visited = visitedSpots !== undefined ? visitedSpots : JSON.parse(user.visited_spots || '[]')
    applyVisitDerivation(merged, visited)
    newRegionLevels = JSON.stringify(merged)
  }

  db.prepare(`
    UPDATE users
    SET xp = ?, checked_spots = ?, completed_activities = ?,
        visited_spots = ?, spot_ratings = ?, spot_reviews = ?,
        removed_activities = ?, recommended_spots = ?, region_levels = ?
    WHERE id = ?
  `).run(newXp, newSpots, newActivities, newVisited, newRatings, newReviews, newRemovedActs, newRecommended, newRegionLevels, req.userId)

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  res.json(toPublic(updated))
})

// POST /api/user/photos — upload one photo for a visited spot
// body: { spotId, image }  where image is a base64 data URL
router.post('/photos', auth, async (req, res) => {
  const { spotId, image } = req.body
  if (spotId === undefined || spotId === null || !image) {
    return res.status(400).json({ error: '缺少 spotId 或图片' })
  }

  // Decode data URL → buffer
  const m = /^data:image\/[a-zA-Z+]+;base64,(.+)$/.exec(image)
  if (!m) return res.status(400).json({ error: '图片格式不支持' })
  const buffer = Buffer.from(m[1], 'base64')

  // Normalize + compress with sharp → webp, cap longest edge at 1280px.
  // Process to an in-memory buffer BEFORE touching the user row: the await
  // must not sit between the row read and the row write, or concurrent
  // uploads read the same spot_photos and the last write silently wins.
  const key = String(spotId)
  const safeSpot = key.replace(/[^a-zA-Z0-9_-]/g, '')
  const filename = `${req.userId}-${safeSpot}-${Date.now()}.webp`
  let webp
  try {
    webp = await sharp(buffer)
      .rotate()                              // respect EXIF orientation
      .resize(1280, 1280, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer()
  } catch {
    return res.status(400).json({ error: '图片处理失败' })
  }

  // Read-check-write with no await in between (better-sqlite3 + writeFileSync
  // are synchronous, so this whole block is atomic per process tick)
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })

  const photos = JSON.parse(user.spot_photos || '{}')
  const list = photos[key] || []
  if (list.length >= MAX_PHOTOS_PER_SPOT) {
    return res.status(400).json({ error: `每个景点最多 ${MAX_PHOTOS_PER_SPOT} 张照片` })
  }
  writeFileSync(join(UPLOADS_DIR, filename), webp)

  const url = `/uploads/${filename}`
  photos[key] = [...list, url]
  db.prepare('UPDATE users SET spot_photos = ? WHERE id = ?').run(JSON.stringify(photos), req.userId)

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  res.json(toPublic(updated))
})

// DELETE /api/user/photos — remove one photo
// body: { spotId, url }
router.delete('/photos', auth, (req, res) => {
  const { spotId, url } = req.body
  if (spotId === undefined || spotId === null || !url) {
    return res.status(400).json({ error: '缺少 spotId 或 url' })
  }

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })

  const photos = JSON.parse(user.spot_photos || '{}')
  const key = String(spotId)
  photos[key] = (photos[key] || []).filter(u => u !== url)
  if (photos[key].length === 0) delete photos[key]
  db.prepare('UPDATE users SET spot_photos = ? WHERE id = ?').run(JSON.stringify(photos), req.userId)

  // Best-effort file cleanup (only files inside our uploads dir)
  const base = url.split('/').pop()
  if (base && /^[a-zA-Z0-9_.-]+$/.test(base)) {
    unlink(join(UPLOADS_DIR, base), () => {})
  }

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  res.json(toPublic(updated))
})

export default router
