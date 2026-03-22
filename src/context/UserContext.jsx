import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext(null)

const TOKEN_KEY = 'sakura_token'

async function apiFetch(path, options = {}) {
  const token = localStorage.getItem(TOKEN_KEY)
  const res = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || '请求失败')
  return data
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // On mount: restore session from token
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) { setLoading(false); return }
    apiFetch('/api/user/me')
      .then(setUser)
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setLoading(false))
  }, [])

  const signup = async ({ name, email, password, avatar }) => {
    const data = await apiFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, avatar }),
    })
    localStorage.setItem(TOKEN_KEY, data.token)
    setUser(data.user)
  }

  const login = async (email, password) => {
    const data = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    localStorage.setItem(TOKEN_KEY, data.token)
    setUser(data.user)
  }

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setUser(null)
  }

  // Optimistically update local state then sync to server
  const syncUser = async (updates) => {
    const optimistic = { ...user, ...updates }
    setUser(optimistic)
    try {
      const updated = await apiFetch('/api/user/me', {
        method: 'PATCH',
        body: JSON.stringify(updates),
      })
      setUser(updated)
    } catch {
      setUser(user) // revert on failure
    }
  }

  const addXP = (amount) => {
    if (!user) return
    syncUser({ xp: (user.xp || 0) + amount })
  }

  const toggleSpot = (spotId) => {
    if (!user) return
    const checked = user.checkedSpots || []
    const next = checked.includes(spotId)
      ? checked.filter(id => id !== spotId)
      : [...checked, spotId]
    syncUser({ checkedSpots: next })
  }

  const toggleActivity = (key) => {
    if (!user) return
    const completed = user.completedActivities || []
    const next = completed.includes(key)
      ? completed.filter(k => k !== key)
      : [...completed, key]
    syncUser({ completedActivities: next })
  }

  const rateSpot = (spotId, rating) => {
    if (!user) return
    const ratings = { ...(user.spotRatings || {}) }
    if (rating === 0) { delete ratings[String(spotId)] }
    else              { ratings[String(spotId)] = rating }
    syncUser({ spotRatings: ratings })
  }

  const removeActivity = (key) => {
    if (!user) return
    const list = user.removedActivities || []
    if (list.includes(key)) return
    syncUser({ removedActivities: [...list, key] })
  }

  const restoreActivities = (cityId) => {
    if (!user) return
    const list = user.removedActivities || []
    const next = list.filter(k => !k.startsWith(`${cityId}:`))
    syncUser({ removedActivities: next })
  }

  const reviewSpot = (spotId, text) => {
    if (!user) return
    const reviews = { ...(user.spotReviews || {}) }
    if (!text?.trim()) { delete reviews[String(spotId)] }
    else {
      reviews[String(spotId)] = { text: text.trim(), at: new Date().toISOString() }
    }
    syncUser({ spotReviews: reviews })
  }

  const toggleRecommend = (spotId, tag) => {
    if (!user) return
    const list = user.recommendedSpots || []
    const exists = list.find(r => (typeof r === 'object' ? r.id : r) === spotId)
    const next = exists
      ? list.filter(r => (typeof r === 'object' ? r.id : r) !== spotId)
      : [...list, { id: spotId, tag, at: new Date().toISOString() }]
    syncUser({ recommendedSpots: next })
  }

  const toggleVisited = (spotId, xpAmount = 0) => {
    if (!user) return
    const visited = user.visitedSpots || []
    const isVisited = visited.includes(spotId)
    const nextVisited = isVisited
      ? visited.filter(id => id !== spotId)
      : [...visited, spotId]
    // Also add to checkedSpots (想去) when marking visited
    const checked = user.checkedSpots || []
    const nextChecked = (!isVisited && !checked.includes(spotId))
      ? [...checked, spotId]
      : checked
    // Merge XP into same syncUser call to avoid race condition
    const nextXp = (!isVisited && xpAmount > 0)
      ? (user.xp || 0) + xpAmount
      : user.xp
    syncUser({ visitedSpots: nextVisited, checkedSpots: nextChecked, xp: nextXp })
  }

  return (
    <UserContext.Provider value={{ user, loading, signup, login, logout, addXP, toggleSpot, toggleActivity, toggleVisited, rateSpot, reviewSpot, removeActivity, restoreActivities, toggleRecommend }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
