import { useCity } from '../context/CityContext'
import { useUser } from '../context/UserContext'
import CityStamp from './CityStamp'
import './AlbumPage.css'

export default function AlbumPage({ goBack }) {
  const { CITIES, selectCity } = useCity()
  const { user } = useUser()
  const visited = new Set(user?.visitedSpots || [])

  // 一城一枚章：该城主景点或周边顺游任意去过 ≥1 处即点亮
  const isEarned = (c) =>
    [...c.spots, ...(c.nearbySpots || [])].some(s => visited.has(s.id))

  const earnedCount = CITIES.filter(isEarned).length

  // 按省/地区分组，保持 CITIES 原顺序
  const groups = []
  for (const c of CITIES) {
    const key = c.country || c.province || '其他'
    let g = groups.find(x => x.key === key)
    if (!g) { g = { key, cities: [] }; groups.push(g) }
    g.cities.push(c)
  }

  const openCity = (c) => {
    if (!isEarned(c)) return
    selectCity(c.id)
    goBack?.()
  }

  return (
    <div className="album-page">
      <div className="album-header">
        <button className="album-back" onClick={goBack} aria-label="返回">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="album-head-text">
          <h2 className="page-title">集章册</h2>
          <p className="page-sub">走过的地方，一枚枚盖下来</p>
        </div>
        <div className="album-progress">已集 <b>{earnedCount}</b> / {CITIES.length} 城</div>
      </div>

      {groups.map(g => (
        <div key={g.key} className="album-group">
          <div className="album-group-label">{g.key}</div>
          <div className="album-grid">
            {g.cities.map(c => {
              const earned = isEarned(c)
              return (
                <button
                  key={c.id}
                  className={`stamp-cell ${earned ? 'earned' : 'locked'}`}
                  onClick={() => openCity(c)}
                  disabled={!earned}
                >
                  <CityStamp city={c} earned={earned} size={128} />
                  <span className="stamp-cell-name">{c.name}</span>
                  <span className={`stamp-cell-state ${earned ? 'on' : ''}`}>
                    {earned ? '已抵达' : '未抵达'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <p className="album-foot">踏遍云贵川 · 集齐每一枚</p>
    </div>
  )
}
