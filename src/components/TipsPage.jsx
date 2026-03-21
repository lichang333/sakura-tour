import { useState } from 'react'
import { useCity } from '../context/CityContext'
import './TipsPage.css'

export default function TipsPage() {
  const [expanded, setExpanded] = useState(null)
  const { currentCity } = useCity()

  const { tips, foods, packList, bloomInfo } = currentCity

  return (
    <div className="tips-page">
      <div className="tips-header">
        <h2 className="page-title">{currentCity.name}赏樱攻略 💡</h2>
        <p className="page-sub">知己知彼，玩得更爽</p>
      </div>

      {/* Bloom Forecast */}
      <div className="bloom-card">
        <div className="bloom-header">
          <span className="bloom-icon">🌸</span>
          <div>
            <div className="bloom-title">{bloomInfo.year} 花期预报</div>
            <div className="bloom-sub">基于历年数据预测</div>
          </div>
          <span className="live-badge">LIVE</span>
        </div>
        <div className="bloom-timeline">
          <div className="bt-item">
            <div className="bt-dot early" />
            <div className="bt-info">
              <div className="bt-label">{bloomInfo.early.label}</div>
              <div className="bt-date">{bloomInfo.early.date}</div>
            </div>
          </div>
          <div className="bt-item peak">
            <div className="bt-dot peak" />
            <div className="bt-info">
              <div className="bt-label">{bloomInfo.peak.label}</div>
              <div className="bt-date">{bloomInfo.peak.date}</div>
            </div>
            <div className="peak-badge">{bloomInfo.peak.badge}</div>
          </div>
          <div className="bt-item">
            <div className="bt-dot late" />
            <div className="bt-info">
              <div className="bt-label">{bloomInfo.late.label}</div>
              <div className="bt-date">{bloomInfo.late.date}</div>
            </div>
          </div>
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
        <h3 className="section-title">必吃美食 🍽️</h3>
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

      {/* Packing List */}
      <div className="section">
        <h3 className="section-title">行李清单 🎒</h3>
        <div className="pack-list">
          {packList.map((item, i) => (
            <div key={i} className="pack-item">
              <span className="pack-icon">{item.icon}</span>
              <span className="pack-text">{item.text}</span>
              <span className="pack-check">○</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
