import { useState, useEffect } from 'react'
import { useCity } from '../context/CityContext'
import './TipsPage.css'

function loadPacked(cityId) {
  try { return JSON.parse(localStorage.getItem(`sakura_pack_${cityId}`) || '[]') } catch { return [] }
}

export default function TipsPage() {
  const [expanded, setExpanded] = useState(null)
  const { currentCity } = useCity()
  const [packed, setPacked] = useState(() => new Set(loadPacked(currentCity.id)))

  useEffect(() => {
    setPacked(new Set(loadPacked(currentCity.id)))
  }, [currentCity.id])

  const togglePacked = (i) => {
    setPacked(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      localStorage.setItem(`sakura_pack_${currentCity.id}`, JSON.stringify([...next]))
      return next
    })
  }

  const { tips, foods, packList, seasonInfo } = currentCity

  return (
    <div className="tips-page">
      <div className="tips-header">
        <h2 className="page-title">{currentCity.name}旅行攻略</h2>
        <p className="page-sub">知己知彼，玩得更爽</p>
      </div>

      {/* Best Season */}
      <div className="bloom-card">
        <div className="bloom-header">
          <span className="bloom-icon">🗓️</span>
          <div>
            <div className="bloom-title">{seasonInfo.title}</div>
            <div className="bloom-sub">{seasonInfo.sub}</div>
          </div>
          <span className="live-badge">TIPS</span>
        </div>
        <div className="bloom-timeline">
          {seasonInfo.rows.map((row, i) => (
            <div key={i} className={`bt-item ${row.dot === 'peak' ? 'peak' : ''}`}>
              <div className={`bt-dot ${row.dot}`} />
              <div className="bt-info">
                <div className="bt-label">{row.label}</div>
                <div className="bt-date">{row.date}</div>
              </div>
              {row.badge && <div className="peak-badge">{row.badge}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Tips Accordion */}
      <div className="section">
        <h3 className="section-title">旅行贴士</h3>
        <div className="tips-list">
          {tips.map((tip, i) => (
            <div key={i} className={`tip-card ${expanded === i ? 'open' : ''}`}>
              <button className="tip-header" onClick={() => setExpanded(expanded === i ? null : i)}>
                <span className="tip-icon">{tip.icon}</span>
                <span className="tip-title">{tip.title}</span>
                <span className="tip-arrow">{expanded === i ? '▲' : '▼'}</span>
              </button>
              {expanded === i && (
                <div className="tip-content">{tip.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Food Section */}
      <div className="section">
        <h3 className="section-title">必吃美食</h3>
        <div className="food-grid">
          {foods.map((food, i) => (
            <div key={i} className="food-card">
              <span className="food-emoji">{food.emoji}</span>
              <span className="food-name">{food.name}</span>
              <span className="food-desc">{food.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Packing List — checkable, persisted per city */}
      <div className="section">
        <div className="pack-head">
          <h3 className="section-title">行李清单</h3>
          <span className="pack-progress">{packed.size} / {packList.length} 已备</span>
        </div>
        <div className="pack-list">
          {packList.map((item, i) => {
            const done = packed.has(i)
            return (
              <button key={i} className={`pack-item ${done ? 'done' : ''}`} onClick={() => togglePacked(i)}>
                <span className="pack-icon">{item.icon}</span>
                <span className="pack-text">{item.text}</span>
                <span className={`pack-check ${done ? 'on' : ''}`}>{done ? '✓' : ''}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
