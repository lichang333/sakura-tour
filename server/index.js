import express from 'express'
import cors from 'cors'
import authRoutes    from './routes/auth.js'
import userRoutes, { UPLOADS_DIR } from './routes/user.js'
import reviewRoutes  from './routes/reviews.js'

const app = express()
const PORT = process.env.PORT || 3001

// CORS：只放行配置的前端域名；未配置时仅允许本地开发端口。
// 生产环境前端与 API 同域（nginx 反代），不走 CORS。
app.use(cors({
  origin: process.env.FRONTEND_URL || ['http://localhost:5173', 'http://localhost:5174'],
}))

// 请求体上限：仅照片上传需要大 body（base64 图片），其余接口 1mb 足够
const jsonSmall = express.json({ limit: '1mb' })
const jsonLarge = express.json({ limit: '12mb' })
app.use((req, res, next) =>
  (req.path === '/api/user/photos' ? jsonLarge : jsonSmall)(req, res, next)
)

// User-uploaded travel photos
app.use('/uploads', express.static(UPLOADS_DIR, { maxAge: '30d', immutable: true }))

app.use('/api/auth',    authRoutes)
app.use('/api/user',    userRoutes)
app.use('/api/reviews', reviewRoutes)

app.get('/api/health', (_, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`🌸 Sakura Tour API running on port ${PORT}`)
})
