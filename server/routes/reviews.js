import { Router } from 'express'
import db from '../db.js'

const router = Router()

// GET /api/reviews — public, no auth
// Returns aggregated ratings & reviews for every spot across all users
router.get('/', (req, res) => {
  const users = db.prepare(
    'SELECT name, avatar, visited_spots, spot_ratings, spot_reviews FROM users'
  ).all()

  // spotId (string) → { ratings: number[], reviews: [{name, avatar, rating, text}] }
  const bySpot = {}

  for (const u of users) {
    const visited = JSON.parse(u.visited_spots || '[]')
    const ratings = JSON.parse(u.spot_ratings  || '{}')
    const reviews = JSON.parse(u.spot_reviews  || '{}')

    for (const spotId of visited) {
      const key = String(spotId)
      if (!bySpot[key]) bySpot[key] = { ratings: [], reviews: [] }

      const r = ratings[key]
      const t = reviews[key]

      if (r) bySpot[key].ratings.push(r)
      if (t) bySpot[key].reviews.push({
        name:   u.name,
        avatar: u.avatar,
        rating: r || 0,
        text:   t,
      })
    }
  }

  // Compute averages
  const result = {}
  for (const [key, data] of Object.entries(bySpot)) {
    const n = data.ratings.length
    result[key] = {
      avgRating:   n > 0 ? +(data.ratings.reduce((a, b) => a + b, 0) / n).toFixed(1) : 0,
      ratingCount: n,
      reviews:     data.reviews,
    }
  }

  res.json(result)
})

export default router
