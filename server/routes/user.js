import { Router } from 'express'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'sakura_tour_secret_change_in_prod'

// Auth middleware
const auth = (req, res, next) => {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: '未登录' })
  }
  try {
    const payload = jwt.verify(header.slice(7), JWT_SECRET)
    req.userId = payload.userId
    next()
  } catch {
    res.status(401).json({ error: 'Token 已过期，请重新登录' })
  }
}

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

  const { xp, checkedSpots, completedActivities } = req.body

  const newXp = xp !== undefined ? xp : user.xp
  const newSpots = checkedSpots !== undefined ? JSON.stringify(checkedSpots) : user.checked_spots
  const newActivities = completedActivities !== undefined ? JSON.stringify(completedActivities) : user.completed_activities

  db.prepare(`
    UPDATE users SET xp = ?, checked_spots = ?, completed_activities = ? WHERE id = ?
  `).run(newXp, newSpots, newActivities, req.userId)

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId)
  res.json(toPublic(updated))
})

export default router
