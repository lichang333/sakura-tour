import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import db from '../db.js'
import { JWT_SECRET, rateLimit } from '../config.js'

const router = Router()

/* 校验密码 —— 兼容踏印(tayin)迁移账号：
   踏印旧账号密码存为 `scrypt$<salt>$<hash>`（crypto.scryptSync(pw, salt, 32) hex），
   首次登录成功后自动 rehash 成 bcrypt，之后走正常路径。 */
async function verifyAndUpgrade(password, user) {
  const stored = user.password
  if (stored.startsWith('scrypt$')) {
    const [, salt, hash] = stored.split('$')
    if (!salt || !hash) return false
    const actual = crypto.scryptSync(password, salt, 32).toString('hex')
    const ok = actual.length === hash.length &&
      crypto.timingSafeEqual(Buffer.from(actual), Buffer.from(hash))
    if (ok) {
      const rehash = await bcrypt.hash(password, 10)
      db.prepare('UPDATE users SET password = ? WHERE id = ?').run(rehash, user.id)
    }
    return ok
  }
  return bcrypt.compare(password, stored)
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
  visitedSpots: JSON.parse(user.visited_spots || '[]'),
  regionLevels: JSON.parse(user.region_levels || '{}'),   // 踏印印记（与 tayin 共享）
  joinedAt: user.created_at,
})

// POST /api/auth/register — 20 次/小时/IP
router.post('/register', rateLimit(20, 60 * 60 * 1000), async (req, res) => {
  const { name, email, password, avatar } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({ error: '请填写所有必填字段' })
  }
  if (password.length < 6) {
    return res.status(400).json({ error: '密码至少6位' })
  }

  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email)
  if (existing) {
    return res.status(409).json({ error: '该邮箱已注册，请直接登录' })
  }

  const hash = await bcrypt.hash(password, 10)
  const today = new Date().toDateString()

  const result = db.prepare(`
    INSERT INTO users (name, email, password, avatar, streak, last_active_date)
    VALUES (?, ?, ?, ?, 1, ?)
  `).run(name, email, hash, avatar || '🌸', today)

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid)
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '30d' })

  res.json({ token, user: toPublic(user) })
})

// POST /api/auth/login — 10 次/10分钟/IP，防在线暴力破解
router.post('/login', rateLimit(10, 10 * 60 * 1000), async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: '请填写邮箱和密码' })
  }

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
  if (!user) {
    return res.status(401).json({ error: '邮箱或密码错误' })
  }

  const valid = await verifyAndUpgrade(password, user)
  if (!valid) {
    return res.status(401).json({ error: '邮箱或密码错误' })
  }

  // Update streak
  const today = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  let streak = user.streak || 0
  if (user.last_active_date === yesterday) streak += 1
  else if (user.last_active_date !== today) streak = 1

  db.prepare('UPDATE users SET streak = ?, last_active_date = ? WHERE id = ?')
    .run(streak, today, user.id)

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(user.id)
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '30d' })

  res.json({ token, user: toPublic(updated) })
})

export default router
