import { randomBytes } from 'crypto'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import jwt from 'jsonwebtoken'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SECRET_FILE = join(__dirname, '.jwt_secret')

// Priority: env var → persisted file → generate & persist.
// Never fall back to a hardcoded secret: a public default lets anyone
// forge tokens for arbitrary user ids.
function loadOrCreateSecret() {
  if (process.env.JWT_SECRET) return process.env.JWT_SECRET
  if (existsSync(SECRET_FILE)) {
    const saved = readFileSync(SECRET_FILE, 'utf8').trim()
    if (saved) return saved
  }
  const secret = randomBytes(48).toString('hex')
  writeFileSync(SECRET_FILE, secret, { mode: 0o600 })
  return secret
}

export const JWT_SECRET = loadOrCreateSecret()

// Shared auth middleware — verifies Bearer token, sets req.userId
export const auth = (req, res, next) => {
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

// Minimal in-memory rate limiter (per IP + path)
const buckets = new Map()
export function rateLimit(max, windowMs) {
  return (req, res, next) => {
    const now = Date.now()
    if (buckets.size > 5000) {
      for (const [k, v] of buckets) if (now > v.resetAt) buckets.delete(k)
    }
    const key = `${req.ip}:${req.path}`
    let rec = buckets.get(key)
    if (!rec || now > rec.resetAt) {
      rec = { count: 0, resetAt: now + windowMs }
      buckets.set(key, rec)
    }
    if (++rec.count > max) {
      return res.status(429).json({ error: '尝试次数过多，请稍后再试' })
    }
    next()
  }
}
