import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import './HomePage.css'

export default function HomePage({ setActiveTab }) {
  const { user } = useUser()
  const { currentCity } = useCity()

  const spotCount = currentCity.spots.length
  const dayCount  = currentCity.itineraryDays.length
  const tipCount  = currentCity.tips.length

  const stats = [
    { label: '赏樱地点', value: String(spotCount), icon: '🌸' },
    { label: '行程天数', value: String(dayCount),  icon: '📅' },
    { label: '旅行攻略', value: String(tipCount),  icon: '💡' },
  ]

  // Calculate progress based on user's checked spots for this city
  const checkedIds = user?.checkedSpots || []
  const cityChecked = checkedIds.filter(id => currentCity.spots.some(s => s.id === id)).length
  const progressPct = spotCount > 0 ? Math.round((cityChecked / spotCount) * 100) : 0

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero" style={{ background: currentCity.heroGradient }}>
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
          <div className="hero-badge">{currentCity.heroBadge}</div>
          <h1 className="hero-title">
            {currentCity.heroTitle}<br />
            <span className="hero-highlight">{currentCity.heroHighlight}</span>
          </h1>
          <p className="hero-desc">{currentCity.heroDesc}</p>

          <div className="progress-section">
            <div className="progress-label">
              <span>行程规划进度</span>
              <span className="progress-pct">{progressPct}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <div className="xp-text">已获得 {user?.xp ?? 0} XP 🌟</div>
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
              <div className="challenge-title">{currentCity.name}赏樱地探索</div>
              <div className="challenge-desc">已选 {cityChecked}/{spotCount} 个景点 · {cityChecked > 0 ? `+${cityChecked * 50} XP` : '快去打卡吧'}</div>
            </div>
          </div>
          <div className={cityChecked > 0 ? 'done-badge' : 'todo-badge'}>{cityChecked > 0 ? '进行中！' : '未开始'}</div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="section">
        <h2 className="section-title">快速提示 ⚡</h2>
        <div className="quick-tips">
          {currentCity.quickTips.map((tip, i) => (
            <div key={i} className="quick-tip">
              <span className="qt-icon">{tip.icon}</span>
              <span>{tip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
