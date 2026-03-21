import './HomePage.css'

export default function HomePage({ setActiveTab }) {
  const stats = [
    { label: '赏樱地点', value: '5', icon: '🌸' },
    { label: '行程天数', value: '4', icon: '📅' },
    { label: '旅行攻略', value: '6', icon: '💡' },
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <div className="petals-bg">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="petal" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 16}px`,
            }}>🌸</span>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-badge">成都 · 2026春</div>
          <h1 className="hero-title">
            樱花盛开时<br />
            <span className="hero-highlight">去成都吧！</span>
          </h1>
          <p className="hero-desc">3月中旬 — 4月初，粉色花海等你</p>

          <div className="progress-section">
            <div className="progress-label">
              <span>行程规划进度</span>
              <span className="progress-pct">60%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '60%' }} />
            </div>
            <div className="xp-text">已获得 340 XP 🌟</div>
          </div>

          <button className="cta-btn" onClick={() => setActiveTab('spots')}>
            开始规划旅程 →
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <span className="stat-icon">{s.icon}</span>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Daily Challenge */}
      <div className="section">
        <h2 className="section-title">今日任务 🎯</h2>
        <div className="challenge-card">
          <div className="challenge-left">
            <div className="challenge-icon">📸</div>
            <div>
              <div className="challenge-title">确认出发日期</div>
              <div className="challenge-desc">选择你的旅行时间，解锁专属花期预报</div>
            </div>
          </div>
          <button className="challenge-btn" onClick={() => setActiveTab('plan')}>
            去完成
          </button>
        </div>
        <div className="challenge-card done">
          <div className="challenge-left">
            <div className="challenge-icon">✅</div>
            <div>
              <div className="challenge-title">查看成都大学樱花节</div>
              <div className="challenge-desc">已完成 · +100 XP</div>
            </div>
          </div>
          <div className="done-badge">完成！</div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="section">
        <h2 className="section-title">快速提示 ⚡</h2>
        <div className="quick-tips">
          <div className="quick-tip">
            <span className="qt-icon">📅</span>
            <span>3月中下旬花期最佳</span>
          </div>
          <div className="quick-tip">
            <span className="qt-icon">⏰</span>
            <span>早上8点前避开人流</span>
          </div>
          <div className="quick-tip">
            <span className="qt-icon">🎫</span>
            <span>成都大学需提前预约</span>
          </div>
          <div className="quick-tip">
            <span className="qt-icon">🌤️</span>
            <span>带薄外套+折叠雨伞</span>
          </div>
        </div>
      </div>
    </div>
  )
}
