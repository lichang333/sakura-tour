import { useState } from 'react'
import { sakuraSpots, nearbySpots } from '../data/spots'
import { useUser } from '../context/UserContext'
import './SpotsPage.css'

const difficultyLabel = { easy: '轻松', medium: '一般', hard: '需体力' }
const difficultyColor = { easy: '#58CC02', medium: '#FFD900', hard: '#FF4B4B' }

export default function SpotsPage() {
  const [selected, setSelected] = useState(null)
  const { user, toggleSpot, addXP } = useUser()

  // Derive checked state from user data in DB
  const checkedIds = new Set(user?.checkedSpots || [])

  const toggleCheck = (id, e) => {
    e.stopPropagation()
    const wasChecked = checkedIds.has(id)
    toggleSpot(id)
    if (!wasChecked) {
      const spot = sakuraSpots.find(s => s.id === id)
      if (spot) addXP(spot.xp)
    }
  }

  if (selected) {
    const spot = sakuraSpots.find(s => s.id === selected)
    return (
      <div className="spots-page">
        <div className="spot-detail">
          <button className="back-btn" onClick={() => setSelected(null)}>← 返回</button>
          <div className="detail-hero" style={{ background: `linear-gradient(135deg, ${spot.color}CC, ${spot.color}88)` }}>
            {spot.isHot && <div className="detail-hot-banner">🔥 今日正值花期！</div>}
            <div className="detail-emoji">{spot.emoji}</div>
            <h1 className="detail-name">{spot.name}</h1>
            <p className="detail-name-en">{spot.nameEn}</p>
            <div className="detail-district">{spot.district}</div>
          </div>

          <div className="detail-body">
            <div className="detail-stats">
              <div className="detail-stat">
                <span className="ds-icon">⭐</span>
                <span className="ds-val">{spot.rating}</span>
                <span className="ds-sub">{spot.reviews}评</span>
              </div>
              <div className="detail-stat">
                <span className="ds-icon">📅</span>
                <span className="ds-val" style={{ fontSize: 12 }}>{spot.peakDays}</span>
                <span className="ds-sub">最佳花期</span>
              </div>
              <div className="detail-stat">
                <span className="ds-icon">🎫</span>
                <span className="ds-val" style={{ fontSize: 12 }}>{spot.ticket}</span>
                <span className="ds-sub">门票</span>
              </div>
            </div>

            <div className="detail-tags">
              {spot.tags.map(t => (
                <span key={t} className="detail-tag" style={{ background: `${spot.color}22`, color: spot.color }}>{t}</span>
              ))}
            </div>

            <div className="detail-section">
              <h3>关于这里</h3>
              <p>{spot.description}</p>
            </div>

            <div className="detail-section tip-box">
              <h3>💡 小贴士</h3>
              <p>{spot.tips}</p>
            </div>

            <div className="detail-section">
              <h3>🚇 交通</h3>
              <p>{spot.transport}</p>
            </div>

            <div className="xp-reward" style={{ borderColor: spot.color }}>
              <span>打卡获得</span>
              <span className="xp-amount" style={{ color: spot.color }}>+{spot.xp} XP</span>
              <span>🌟</span>
            </div>

            <button
              className="checkin-btn"
              style={{ background: checkedIds.has(spot.id) ? '#58CC02' : spot.color,
                       boxShadow: `0 4px 0 ${checkedIds.has(spot.id) ? '#46A302' : spot.color}AA` }}
              onClick={(e) => toggleCheck(spot.id, e)}
            >
              {checkedIds.has(spot.id) ? '✅ 已加入行程！' : '加入我的行程 +'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="spots-page">
      <div className="spots-header">
        <h2 className="page-title">成都赏樱地图 🌸</h2>
        <p className="page-sub">7个精选赏樱点位，总有一款适合你</p>
        <div className="progress-mini">
          <span>已选 {checkedIds.size}/{sakuraSpots.length} 个地点</span>
          <div className="pm-bar">
            <div className="pm-fill" style={{ width: `${(checkedIds.size / sakuraSpots.length) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Today's Pick */}
      <div className="today-banner">
        <span className="tb-dot" />
        <span>今日（3月21日）正处黄金花期 — 建议工作日清晨出发！</span>
      </div>

      <div className="spots-list">
        {sakuraSpots.map(spot => (
          <div
            key={spot.id}
            className={`spot-card ${checkedIds.has(spot.id) ? 'checked' : ''} ${spot.isHot ? 'hot' : ''}`}
            onClick={() => setSelected(spot.id)}
            style={{ '--spot-color': spot.color }}
          >
            {spot.isHot && <div className="hot-ribbon">🔥 今日花开</div>}
            <div className="spot-left">
              <div className="spot-emoji-wrap" style={{ background: `${spot.color}22` }}>
                <span className="spot-emoji">{spot.emoji}</span>
              </div>
            </div>
            <div className="spot-info">
              <div className="spot-name-row">
                <span className="spot-name">{spot.name}</span>
                <span className="spot-district">{spot.district}</span>
              </div>
              <div className="spot-peak">🌸 {spot.peakTime}</div>
              <div className="spot-ticket">🎫 {spot.ticket}</div>
              <div className="spot-tags">
                {spot.tags.slice(0, 2).map(t => (
                  <span key={t} className="spot-tag" style={{ background: `${spot.color}18`, color: spot.color }}>{t}</span>
                ))}
              </div>
              <div className="spot-bottom">
                <span className="spot-rating">⭐ {spot.rating}</span>
                <span className="spot-diff" style={{ color: difficultyColor[spot.difficulty] }}>
                  {difficultyLabel[spot.difficulty]}
                </span>
                <span className="spot-xp">+{spot.xp} XP</span>
              </div>
            </div>
            <button
              className={`check-btn ${checkedIds.has(spot.id) ? 'done' : ''}`}
              onClick={(e) => toggleCheck(spot.id, e)}
              style={{ background: checkedIds.has(spot.id) ? '#58CC02' : 'transparent',
                       borderColor: checkedIds.has(spot.id) ? '#58CC02' : '#DDD' }}
            >
              {checkedIds.has(spot.id) ? '✓' : '+'}
            </button>
          </div>
        ))}
      </div>

      {/* Nearby Spots */}
      <div className="nearby-section">
        <h3 className="nearby-title">📍 周边小众景点</h3>
        <p className="nearby-sub">适合有额外时间的朋友顺道一游</p>
        <div className="nearby-list">
          {nearbySpots.map((s, i) => (
            <div key={i} className="nearby-card">
              <span className="nearby-emoji">{s.emoji}</span>
              <div className="nearby-info">
                <div className="nearby-name">{s.name}</div>
                <div className="nearby-desc">{s.desc}</div>
                <div className="nearby-transport">🚇 {s.transport}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
