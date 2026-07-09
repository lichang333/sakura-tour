import express from 'express'
import cors from 'cors'
import authRoutes    from './routes/auth.js'
import userRoutes, { UPLOADS_DIR } from './routes/user.js'
import reviewRoutes  from './routes/reviews.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: process.env.FRONTEND_URL || true }))
app.use(express.json({ limit: '12mb' }))   // room for base64-encoded photo uploads

// User-uploaded travel photos
app.use('/uploads', express.static(UPLOADS_DIR, { maxAge: '30d', immutable: true }))

app.use('/api/auth',    authRoutes)
app.use('/api/user',    userRoutes)
app.use('/api/reviews', reviewRoutes)

app.get('/api/health', (_, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`🌸 Sakura Tour API running on port ${PORT}`)
})
