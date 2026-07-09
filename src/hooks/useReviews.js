import { useState, useEffect } from 'react'
import { buildApiUrl } from '../lib/api'

// Returns { communityData, loading, refresh }
// communityData shape: { [spotId]: { avgRating, ratingCount, reviews: [{name,avatar,rating,text}] } }
export function useReviews() {
  const [communityData, setCommunityData] = useState({})
  const [loading, setLoading] = useState(true)

  const fetch_ = () => {
    setLoading(true)
    fetch(buildApiUrl('/api/reviews'))
      .then(r => r.json())
      .then(data => setCommunityData(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetch_() }, [])

  return { communityData, loading, refresh: fetch_ }
}
