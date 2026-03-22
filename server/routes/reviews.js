import { Router } from 'express'
import db from '../db.js'

const router = Router()

// GET /api/reviews — public, no auth
// Returns aggregated ratings & reviews for every spot across all users
router.get('/', (req, res) => {
  const users = db.prepare(
    'SELECT name, avatar, visited_spots, spot_ratings, spot_reviews, recommended_spots FROM users'
  ).all()

  // spotId (string) → { ratings: number[], reviews: [{name, avatar, rating, text}] }
  const bySpot = {}

  for (const u of users) {
    const visited  = JSON.parse(u.visited_spots      || '[]')
    const ratings  = JSON.parse(u.spot_ratings       || '{}')
    const reviews  = JSON.parse(u.spot_reviews       || '{}')
    const recs     = JSON.parse(u.recommended_spots  || '[]')

    for (const spotId of visited) {
      const key = String(spotId)
      if (!bySpot[key]) bySpot[key] = { ratings: [], reviews: [], recommendCount: 0, recommenders: [], tagCounts: {} }

      const r = ratings[key]
      const t = reviews[key]

      if (r) bySpot[key].ratings.push(r)
      if (t) {
        const text = typeof t === 'string' ? t : t.text
        const at   = typeof t === 'object' ? t.at : null
        bySpot[key].reviews.push({
          name: u.name, avatar: u.avatar, rating: r || 0, text, at,
        })
      }
    }

    // Process recommendations
    for (const rec of recs) {
      const spotId = typeof rec === 'object' ? rec.id : rec
      const tag    = typeof rec === 'object' ? rec.tag : null
      const key    = String(spotId)
      if (!bySpot[key]) bySpot[key] = { ratings: [], reviews: [], recommendCount: 0, recommenders: [], tagCounts: {} }
      bySpot[key].recommendCount += 1
      bySpot[key].recommenders.push({ name: u.name, avatar: u.avatar, tag })
      if (tag) {
        bySpot[key].tagCounts[tag] = (bySpot[key].tagCounts[tag] || 0) + 1
      }
    }
  }

  // Compute averages and top recommend tag
  const result = {}
  for (const [key, data] of Object.entries(bySpot)) {
    const n = data.ratings.length
    const tagEntries = Object.entries(data.tagCounts || {})
    const topTag = tagEntries.length > 0
      ? tagEntries.reduce((a, b) => b[1] > a[1] ? b : a)[0]
      : null
    result[key] = {
      avgRating:      n > 0 ? +(data.ratings.reduce((a, b) => a + b, 0) / n).toFixed(1) : 0,
      ratingCount:    n,
      reviews:        data.reviews,
      recommendCount: data.recommendCount || 0,
      recommenders:   data.recommenders  || [],
      topTag,
    }
  }

  res.json(result)
})

export default router
