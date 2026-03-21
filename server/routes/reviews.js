import { Router } from 'express'
import db from '../db.js'

const router = Router()

// GET /api/reviews — public, no auth
// Returns per-spot: avgRating, ratingCount, reviews[], recommendCount, recommenders[]
router.get('/', (req, res) => {
  const users = db.prepare(
    `SELECT name, avatar, visited_spots, spot_ratings,
            spot_reviews, recommended_spots FROM users`
  ).all()

  const bySpot = {}

  const ensure = (key) => {
    if (!bySpot[key]) bySpot[key] = {
      ratings: [], reviews: [], recommenders: []
    }
  }

  for (const u of users) {
    const visited     = JSON.parse(u.visited_spots      || '[]')
    const ratings     = JSON.parse(u.spot_ratings       || '{}')
    const reviews     = JSON.parse(u.spot_reviews       || '{}')
    const recommended = JSON.parse(u.recommended_spots  || '[]')

    for (const spotId of visited) {
      const key = String(spotId)
      ensure(key)
      const r = ratings[key]
      const t = reviews[key]
      if (r) bySpot[key].ratings.push(r)
      if (t) bySpot[key].reviews.push({
        name: u.name, avatar: u.avatar, rating: r || 0, text: t,
      })
    }

    for (const spotId of recommended) {
      const key = String(spotId)
      ensure(key)
      bySpot[key].recommenders.push({ name: u.name, avatar: u.avatar })
    }
  }

  const result = {}
  for (const [key, data] of Object.entries(bySpot)) {
    const n = data.ratings.length
    result[key] = {
      avgRating:      n > 0 ? +(data.ratings.reduce((a, b) => a + b, 0) / n).toFixed(1) : 0,
      ratingCount:    n,
      reviews:        data.reviews,
      recommendCount: data.recommenders.length,
      recommenders:   data.recommenders,
    }
  }

  res.json(result)
})

export default router
