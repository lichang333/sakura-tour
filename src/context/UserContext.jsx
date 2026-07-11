import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'

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
  // 错误响应可能不是 JSON（如代理 502 的 HTML 页），安全解析
  let data = null
  try { data = await res.json() } catch { /* non-JSON body */ }
  if (!res.ok) {
    const err = new Error(data?.error || `请求失败（${res.status}）`)
    err.status = res.status
    throw err
  }
  return data
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // 同步持有最新 user：mutator 连续调用时（同一 tick 内两次 toggle）
  // 从 ref 读取，避免各自基于过期的渲染快照互相覆盖
  const userRef = useRef(null)
  // 递增序号：只应用最后一次请求的响应，防止乱序响应回滚本地状态
  const seqRef = useRef(0)

  const applyUser = useCallback((u) => {
    userRef.current = u
    setUser(u)
  }, [])

  // On mount: SSO 跳转码优先（从踏印带 #sso=code 跳来自动登录），
  // 否则用本地 token 恢复会话
  useEffect(() => {
    const sso = window.location.hash.match(/^#sso=([a-f0-9]{48})$/)
    if (sso) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
      apiFetch('/api/auth/sso-redeem', { method: 'POST', body: JSON.stringify({ code: sso[1] }) })
        .then((data) => {
          localStorage.setItem(TOKEN_KEY, data.token)
          applyUser(data.user)
        })
        .catch(() => { /* 码过期/已用：静默落回未登录 */ })
        .finally(() => setLoading(false))
      return
    }
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) { setLoading(false); return }
    apiFetch('/api/user/me')
      .then(applyUser)
      .catch((err) => {
        // 只有 token 真的无效才清除；网络故障/服务器 5xx 时保留，
        // 否则离线打开一次 App 就会把有效的 30 天登录态删掉
        if (err.status === 401 || err.status === 403) {
          localStorage.removeItem(TOKEN_KEY)
        }
      })
      .finally(() => setLoading(false))
  }, [applyUser])

  const signup = async ({ name, email, password, avatar }) => {
    const data = await apiFetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, avatar }),
    })
    localStorage.setItem(TOKEN_KEY, data.token)
    applyUser(data.user)
  }

  const login = async (email, password) => {
    const data = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    localStorage.setItem(TOKEN_KEY, data.token)
    applyUser(data.user)
  }

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    applyUser(null)
  }, [applyUser])

  // Optimistically update local state then sync to server
  const syncUser = async (updates) => {
    const base = userRef.current
    if (!base) return
    applyUser({ ...base, ...updates })
    const seq = ++seqRef.current
    try {
      const updated = await apiFetch('/api/user/me', {
        method: 'PATCH',
        body: JSON.stringify(updates),
      })
      if (seq === seqRef.current) applyUser(updated)
    } catch (err) {
      if (err.status === 401) { logout(); return }
      // 回滚：以服务器状态为准（本地快照可能已包含其他成功的更新）
      if (seq === seqRef.current) {
        try {
          const fresh = await apiFetch('/api/user/me')
          if (seq === seqRef.current) applyUser(fresh)
        } catch { /* 网络仍然不可用，保留乐观状态 */ }
      }
    }
  }

  const addXP = (amount) => {
    const u = userRef.current
    if (!u) return
    return syncUser({ xp: Math.max(0, (u.xp || 0) + amount) })
  }

  const toggleSpot = (spotId) => {
    const u = userRef.current
    if (!u || spotId == null) return
    const checked = u.checkedSpots || []
    const next = checked.includes(spotId)
      ? checked.filter(id => id !== spotId)
      : [...checked, spotId]
    return syncUser({ checkedSpots: next })
  }

  const toggleActivity = (key) => {
    const u = userRef.current
    if (!u) return
    const completed = u.completedActivities || []
    const next = completed.includes(key)
      ? completed.filter(k => k !== key)
      : [...completed, key]
    return syncUser({ completedActivities: next })
  }

  const rateSpot = (spotId, rating) => {
    const u = userRef.current
    if (!u) return
    const ratings = { ...(u.spotRatings || {}) }
    if (rating === 0) { delete ratings[String(spotId)] }
    else              { ratings[String(spotId)] = rating }
    return syncUser({ spotRatings: ratings })
  }

  const removeActivity = (key) => {
    const u = userRef.current
    if (!u) return
    const list = u.removedActivities || []
    if (list.includes(key)) return
    return syncUser({ removedActivities: [...list, key] })
  }

  const restoreActivities = (cityId) => {
    const u = userRef.current
    if (!u) return
    const list = u.removedActivities || []
    const next = list.filter(k => !k.startsWith(`${cityId}:`))
    return syncUser({ removedActivities: next })
  }

  const reviewSpot = (spotId, text) => {
    const u = userRef.current
    if (!u) return
    const reviews = { ...(u.spotReviews || {}) }
    if (!text?.trim()) { delete reviews[String(spotId)] }
    else {
      reviews[String(spotId)] = { text: text.trim(), at: new Date().toISOString() }
    }
    return syncUser({ spotReviews: reviews })
  }

  const toggleRecommend = (spotId, tag) => {
    const u = userRef.current
    if (!u) return
    const list = u.recommendedSpots || []
    const exists = list.find(r => (typeof r === 'object' ? r.id : r) === spotId)
    const next = exists
      ? list.filter(r => (typeof r === 'object' ? r.id : r) !== spotId)
      : [...list, { id: spotId, tag, at: new Date().toISOString() }]
    return syncUser({ recommendedSpots: next })
  }

  const toggleVisited = (spotId, xpAmount = 0) => {
    const u = userRef.current
    if (!u || spotId == null) return
    const visited = u.visitedSpots || []
    const isVisited = visited.includes(spotId)
    const nextVisited = isVisited
      ? visited.filter(id => id !== spotId)
      : [...visited, spotId]
    // Also add to checkedSpots (想去) when marking visited
    const checked = u.checkedSpots || []
    const nextChecked = (!isVisited && !checked.includes(spotId))
      ? [...checked, spotId]
      : checked
    const currentXp = u.xp || 0
    const nextXp = xpAmount > 0
      ? isVisited
        ? Math.max(0, currentXp - xpAmount)   // 取消打卡：扣减 XP
        : currentXp + xpAmount                 // 打卡：增加 XP
      : currentXp
    return syncUser({ visitedSpots: nextVisited, checkedSpots: nextChecked, xp: nextXp })
  }

  /* 制县等级：设置某地州市的到访等级（0 = 清除） */
  const setRegionLevel = (code, level) => {
    const u = userRef.current
    if (!u || code == null) return
    const levels = { ...(u.regionLevels || {}) }
    if (!level) delete levels[code]
    else levels[code] = level
    return syncUser({ regionLevels: levels })
  }

  // 「去过 → 清除」：取消去过 + 移出想去 + 扣减 XP，合并为一次 PATCH，
  // 避免两次 syncUser 的 payload 在服务端乱序互相覆盖
  const clearSpot = (spotId, xpAmount = 0) => {
    const u = userRef.current
    if (!u || spotId == null) return
    const nextVisited = (u.visitedSpots || []).filter(id => id !== spotId)
    const nextChecked = (u.checkedSpots || []).filter(id => id !== spotId)
    const nextXp = Math.max(0, (u.xp || 0) - xpAmount)
    return syncUser({ visitedSpots: nextVisited, checkedSpots: nextChecked, xp: nextXp })
  }

  /* SSO：铸一次性跳转码（60 秒单次），跳踏印时带上实现免登 */
  const mintSsoCode = async () => {
    if (!userRef.current) return null
    const { code } = await apiFetch('/api/auth/sso-code', { method: 'POST' })
    return code
  }

  // Upload a travel photo (dataUrl) for a spot. Server stores the file and
  // returns the updated user with the new photo URL merged in.
  const addSpotPhoto = async (spotId, dataUrl) => {
    if (!userRef.current) return
    const updated = await apiFetch('/api/user/photos', {
      method: 'POST',
      body: JSON.stringify({ spotId, image: dataUrl }),
    })
    applyUser(updated)
  }

  const removeSpotPhoto = async (spotId, url) => {
    if (!userRef.current) return
    const updated = await apiFetch('/api/user/photos', {
      method: 'DELETE',
      body: JSON.stringify({ spotId, url }),
    })
    applyUser(updated)
  }

  return (
    <UserContext.Provider value={{ user, loading, signup, login, logout, addXP, toggleSpot, toggleActivity, toggleVisited, clearSpot, setRegionLevel, rateSpot, reviewSpot, removeActivity, restoreActivities, toggleRecommend, addSpotPhoto, removeSpotPhoto, mintSsoCode }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
