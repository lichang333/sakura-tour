/* 星探食堂用户数据路由 —— 与 Sakura 共享同一 users 账号（身份/密码/SSO 通用），
   但餐厅打卡/评分/照片等整套数据独立存 users.star_data 单列 JSON，
   与 Sakura 的景点列（checked_spots 等）彻底隔离、互不污染。
   星探前端调 /api/star/user/*，返回形状与 /api/user/* 一致，前端仅改路径前缀。 */
import { Router } from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { existsSync, mkdirSync, unlink, writeFileSync } from 'fs'
import sharp from 'sharp'
import db from '../db.js'
import { auth } from '../config.js'

const router = Router()
const __dirname = dirname(fileURLToPath(import.meta.url))
const UPLOADS_DIR = join(__dirname, '..', 'uploads')
if (!existsSync(UPLOADS_DIR)) mkdirSync(UPLOADS_DIR, { recursive: true })
const MAX_PHOTOS_PER_SPOT = 9

// star_data 的字段与 Sakura toPublic 同名，方便星探前端零改造消费。
// regionLevels 为客户端自管（餐厅→城市由星探自己算），此处不做服务端派生。
const STAR_DEFAULTS = {
  xp: 0, checkedSpots: [], visitedSpots: [], completedActivities: [],
  spotRatings: {}, spotReviews: {}, removedActivities: [],
  recommendedSpots: [], spotPhotos: {}, regionLevels: {},
}
const STAR_FIELDS = Object.keys(STAR_DEFAULTS)

const readStar = (user) => ({ ...STAR_DEFAULTS, ...JSON.parse(user.star_data || '{}') })
const saveStar = (userId, data) =>
  db.prepare('UPDATE users SET star_data = ? WHERE id = ?').run(JSON.stringify(data), userId)

const toPublic = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  streak: user.streak,
  lastActiveDate: user.last_active_date,
  joinedAt: user.created_at,
  ...readStar(user),
})

// GET /api/star/user/me
router.get('/me', auth, (req, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })
  res.json(toPublic(user))
})

// PATCH /api/star/user/me —— 白名单合并进 star_data
router.patch('/me', auth, (req, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })
  const data = readStar(user)
  for (const f of STAR_FIELDS) if (req.body[f] !== undefined) data[f] = req.body[f]
  saveStar(req.userId, data)
  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  res.json(toPublic(updated))
})

// POST /api/star/user/photos —— 上传一张餐厅照片（base64 data URL）
router.post('/photos', auth, async (req, res) => {
  const { spotId, image } = req.body
  if (spotId === undefined || spotId === null || !image) {
    return res.status(400).json({ error: '缺少 spotId 或图片' })
  }
  const m = /^data:image\/[a-zA-Z+]+;base64,(.+)$/.exec(image)
  if (!m) return res.status(400).json({ error: '图片格式不支持' })
  const buffer = Buffer.from(m[1], 'base64')

  // 先把图片处理成内存 buffer，再读改写用户行（await 不能夹在读写之间，
  // 否则并发上传会读到同一份 spotPhotos、最后一次写静默覆盖）
  const key = String(spotId)
  const safeSpot = key.replace(/[^a-zA-Z0-9_-]/g, '')
  const filename = `star-${req.userId}-${safeSpot}-${Date.now()}.webp`
  let webp
  try {
    webp = await sharp(buffer)
      .rotate()
      .resize(1280, 1280, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer()
  } catch {
    return res.status(400).json({ error: '图片处理失败' })
  }

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })
  const data = readStar(user)
  const list = data.spotPhotos[key] || []
  if (list.length >= MAX_PHOTOS_PER_SPOT) {
    return res.status(400).json({ error: `每处最多 ${MAX_PHOTOS_PER_SPOT} 张照片` })
  }
  writeFileSync(join(UPLOADS_DIR, filename), webp)
  data.spotPhotos[key] = [...list, `/uploads/${filename}`]
  saveStar(req.userId, data)
  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  res.json(toPublic(updated))
})

// DELETE /api/star/user/photos —— 删除一张照片
router.delete('/photos', auth, (req, res) => {
  const { spotId, url } = req.body
  if (spotId === undefined || spotId === null || !url) {
    return res.status(400).json({ error: '缺少 spotId 或 url' })
  }
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  if (!user) return res.status(404).json({ error: '用户不存在' })
  const data = readStar(user)
  const key = String(spotId)
  data.spotPhotos[key] = (data.spotPhotos[key] || []).filter(u => u !== url)
  if (data.spotPhotos[key].length === 0) delete data.spotPhotos[key]
  saveStar(req.userId, data)

  const base = url.split('/').pop()
  if (base && /^[a-zA-Z0-9_.-]+$/.test(base)) {
    unlink(join(UPLOADS_DIR, base), () => {})
  }
  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  res.json(toPublic(updated))
})

export default router
