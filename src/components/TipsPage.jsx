import { useState } from 'react'
import { tips } from '../data/spots'
import './TipsPage.css'

const foods = [
  { name: "担担面", emoji: "🍜", desc: "成都必吃，麻辣鲜香" },
  { name: "夫妻肺片", emoji: "🥩", desc: "名字吓人，味道绝佳" },
  { name: "龙抄手", emoji: "🥟", desc: "皮薄馅大，汤底鲜美" },
  { name: "赖汤圆", emoji: "🍡", desc: "甜蜜软糯，正宗老字号" },
  { name: "九宫格火锅", emoji: "🫕", desc: "成都精髓，涮出幸福感" },
  { name: "钵钵鸡", emoji: "🍢", desc: "红油签签，越吃越上头" },
]

export default function TipsPage() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="tips-page">
      <div className="tips-header">
        <h2 className="page-title">成都赏樱攻略 💡</h2>
        <p className="page-sub">知己知彼，玩得更爽</p>
      </div>

      {/* Bloom Forecast */}
      <div className="bloom-card">
        <div className="bloom-header">
          <span className="bloom-icon">🌸</span>
          <div>
            <div className="bloom-title">2026 花期预报</div>
            <div className="bloom-sub">基于历年数据预测</div>
          </div>
          <span className="live-badge">LIVE</span>
        </div>
        <div className="bloom-timeline">
          <div className="bt-item">
            <div className="bt-dot early" />
            <div className="bt-info">
              <div className="bt-label">早樱</div>
              <div className="bt-date">3月1日 — 3月15日</div>
            </div>
          </div>
          <div className="bt-item peak">
            <div className="bt-dot peak" />
            <div className="bt-info">
              <div className="bt-label">🔥 盛花期</div>
              <div className="bt-date">3月15日 — 4月5日</div>
            </div>
            <div className="peak-badge">最佳！</div>
          </div>
          <div className="bt-item">
            <div className="bt-dot late" />
            <div className="bt-info">
              <div className="bt-label">晚樱</div>
              <div className="bt-date">4月5日 — 4月20日</div>
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
          {[
            { icon: "☂️", text: "折叠雨伞（成都多云易雨）" },
            { icon: "🧥", text: "薄外套（早晚温差大）" },
            { icon: "👟", text: "舒适运动鞋（多走路）" },
            { icon: "🔋", text: "充电宝（拍照耗电快）" },
            { icon: "📱", text: "下载高德地图+滴滴" },
            { icon: "💳", text: "医保卡或现金备用" },
          ].map((item, i) => (
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
