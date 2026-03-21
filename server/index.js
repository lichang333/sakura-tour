import express from 'express'
import cors from 'cors'
import authRoutes    from './routes/auth.js'
import userRoutes    from './routes/user.js'
import reviewRoutes  from './routes/reviews.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: process.env.FRONTEND_URL || true }))
app.use(express.json())

app.use('/api/auth',    authRoutes)
app.use('/api/user',    userRoutes)
app.use('/api/reviews', reviewRoutes)

app.get('/api/health', (_, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`🌸 Sakura Tour API running on port ${PORT}`)
})
