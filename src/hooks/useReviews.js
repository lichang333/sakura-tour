import { useState, useEffect, useRef } from 'react'

// Returns { communityData, loading, refresh }
// communityData shape: { [spotId]: { avgRating, ratingCount, reviews: [{userId,name,avatar,rating,text}] } }
export function useReviews() {
  const [communityData, setCommunityData] = useState({})
  const [loading, setLoading] = useState(true)
  // 只应用最新一次请求的结果，防止乱序响应用旧数据覆盖新数据
  const seqRef = useRef(0)

  const fetch_ = () => {
    const seq = ++seqRef.current
    setLoading(true)
    const token = localStorage.getItem('sakura_token')
    fetch('/api/reviews', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(data => { if (seq === seqRef.current) setCommunityData(data) })
      .catch(() => {})
      .finally(() => { if (seq === seqRef.current) setLoading(false) })
  }

  useEffect(() => { fetch_() }, [])

  return { communityData, loading, refresh: fetch_ }
}
