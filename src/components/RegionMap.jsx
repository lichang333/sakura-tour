import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { REGIONS, LEVELS, GRID_COLS, CITY_REGION } from '../data/regions'
import { CITIES } from '../data/cities'
import './RegionMap.css'

/* 制县等级 · 云贵川 —— 玩法借鉴「制県等級」(JapanEx)：
   选一个等级刷子，点方格给地州市上色，总分 = 各格等级之和。
   App 内已打卡的城市自动视为至少「玩过」(3)。 */
export default function RegionMap() {
  const { user, setRegionLevel } = useUser()
  const [brush, setBrush] = useState(3)

  const stored = user?.regionLevels || {}
  const visitedIds = new Set(user?.visitedSpots || [])

  // 打卡派生：某城市任一景点已抵达 → 对应区域至少 3（玩过）
  const derived = {}
  for (const city of CITIES) {
    const code = CITY_REGION[city.id]
    if (!code) continue
    const cityAll = [...city.spots, ...(city.nearbySpots || [])]
    if (cityAll.some(s => visitedIds.has(s.id))) derived[code] = 3
  }

  const levelOf = (code) => Math.max(stored[code] || 0, derived[code] || 0)

  const total = REGIONS.reduce((sum, r) => sum + levelOf(r.code), 0)
  const touched = REGIONS.filter(r => levelOf(r.code) > 0).length

  const paint = (r) => {
    const cur = stored[r.code] || 0
    // 同等级再点一次 = 擦除；派生等级（打卡带出）不允许被刷成更低
    const next = cur === brush ? 0 : brush
    if (derived[r.code] && next < derived[r.code]) {
      setRegionLevel(r.code, 0)   // 只清手动部分，显示回落到派生等级
      return
    }
    setRegionLevel(r.code, next)
  }

  return (
    <div className="region-map-section">
      <div className="rm-head">
        <div>
          <h3 className="rm-title">制县等级 · 云贵川</h3>
          <p className="rm-sub">选等级，点亮走过的地州市</p>
        </div>
        <div className="rm-score">
          <span className="rm-score-num">{total}</span>
          <span className="rm-score-label">分 · {touched}/{REGIONS.length} 地</span>
        </div>
      </div>

      {/* 等级刷子 */}
      <div className="rm-brushes">
        {LEVELS.map(l => (
          <button
            key={l.v}
            className={`rm-brush lv${l.v} ${brush === l.v ? 'active' : ''}`}
            onClick={() => setBrush(l.v)}
            title={l.desc}
          >
            <span className="rm-brush-label">{l.label}</span>
            <span className="rm-brush-v">{l.v}</span>
          </button>
        ))}
      </div>

      {/* 方格拼图（近似地理位置） */}
      <div className="rm-grid" style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)` }}>
        {REGIONS.map(r => {
          const lv = levelOf(r.code)
          return (
            <button
              key={r.code}
              className={`rm-cell lv${lv}`}
              style={{ gridColumn: r.x + 1, gridRow: r.y + 1 }}
              onClick={() => paint(r)}
              title={`${r.name}（${r.province}）· ${LEVELS.find(l => l.v === lv)?.label}`}
            >
              {r.name}
            </button>
          )
        })}
      </div>

      <div className="rm-foot">
        <span>川 21 · 黔 9 · 滇 16</span>
        <span>住5 宿4 玩3 经2 落1</span>
      </div>
    </div>
  )
}
