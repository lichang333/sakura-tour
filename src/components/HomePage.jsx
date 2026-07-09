import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import './HomePage.css'

export default function HomePage({ setActiveTab }) {
  const { user } = useUser()
  const { currentCity } = useCity()

  const spots = currentCity.spots
  const spotCount = spots.length
  const dayCount = currentCity.itineraryDays.length

  const checkedIds = user?.checkedSpots || []
  const visitedIds = user?.visitedSpots || []
  const cityChecked = checkedIds.filter(id => spots.some(s => s.id === id)).length
  const cityVisited = visitedIds.filter(id => spots.some(s => s.id === id)).length
  const progressPct = spotCount > 0 ? Math.round((cityChecked / spotCount) * 100) : 0

  const completedActs = (user?.completedActivities || [])
    .filter(k => k.startsWith(`${currentCity.id}:`))
  const totalActs = currentCity.itineraryDays
    .reduce((sum, d) => sum + d.activities.length, 0)

  const reviewedCount = Object.keys(user?.spotReviews || {})
    .filter(id => spots.some(s => String(s.id) === id)).length

  const bloomWindow = currentCity.bloomInfo?.peak?.date || currentCity.heroDesc
  const featuredSpots = [...spots]
    .sort((a, b) => {
      const hotDiff = Number(Boolean(b.isHot)) - Number(Boolean(a.isHot))
      if (hotDiff) return hotDiff
      if (b.rating !== a.rating) return b.rating - a.rating
      return b.reviews - a.reviews
    })
    .slice(0, 3)

  const heroBriefs = [
    { label: '盛花窗口', value: bloomWindow },
    { label: '主推花线', value: featuredSpots[0]?.name || '待挑选' },
    { label: '城市节奏', value: `${dayCount} 天慢游路线` },
  ]

  const metrics = [
    { label: '收藏花线', value: `${cityChecked}/${spotCount}`, note: cityChecked === 0 ? '先收 3 个顺路点' : '已同步到你的路线' },
    { label: '路线完成', value: `${completedActs.length}/${totalActs}`, note: completedActs.length === 0 ? '先开第一天路线' : '继续点亮当天安排' },
    { label: '实地打卡', value: `${cityVisited}`, note: cityVisited === 0 ? '到现场后记得打卡' : '现场体验已开始累计' },
    { label: '旅行笔记', value: `${reviewedCount}`, note: reviewedCount === 0 ? '去过之后再写一句' : '你的体验会留下来' },
  ]

  const routePreview = currentCity.itineraryDays.slice(0, 3)
  const fieldNotes = currentCity.quickTips.slice(0, 4)

  return (
    <div className="home-page">
      <section className="dispatch-hero">
        <div className="hero-backdrop" style={{ background: currentCity.heroGradient }} />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid">
          <span className="hero-kicker">SECOND EDITION · {currentCity.country}</span>
          <div className="hero-headline">
            <div className="hero-seal">{currentCity.emoji}</div>
            <div className="hero-copy-block">
              <div className="hero-brand">Sakura Tour</div>
              <h1 className="hero-title">{currentCity.nameEn} Spring Dispatch</h1>
            </div>
          </div>
          <p className="hero-tagline">{currentCity.tagline}</p>
          <p className="hero-copy">把花期、茶馆、动线和拍照时段收进一张掌心城市通行证。</p>

          <div className="hero-brief-grid">
            {heroBriefs.map(item => (
              <div key={item.label} className="hero-brief-card">
                <span className="hero-brief-label">{item.label}</span>
                <span className="hero-brief-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <button className="hero-btn primary" onClick={() => setActiveTab('spots')}>
              打开花线地图
            </button>
            <button className="hero-btn secondary" onClick={() => setActiveTab('plan')}>
              查看四日路线
            </button>
          </div>
        </div>
      </section>

      <section className="metrics-ribbon">
        {metrics.map(item => (
          <article key={item.label} className="metric-card">
            <span className="metric-card-label">{item.label}</span>
            <span className="metric-card-value">{item.value}</span>
            <span className="metric-card-note">{item.note}</span>
          </article>
        ))}
      </section>

      <section className="home-section">
        <div className="section-head">
          <span className="section-kicker">City Edit</span>
          <div>
            <h2 className="section-title">这一版先去这三站</h2>
            <p className="section-subtitle">按花况、人气和成都旅行节奏排好的优先顺序。</p>
          </div>
        </div>
        <div className="curated-list">
          {featuredSpots.map((spot, index) => (
            <button key={spot.id} className="curated-card" onClick={() => setActiveTab('spots')}>
              <span className="curated-order">0{index + 1}</span>
              <div className="curated-body">
                <div className="curated-topline">
                  <span className="curated-name">{spot.name}</span>
                  <span className="curated-district">{spot.district}</span>
                </div>
                <p className="curated-copy">{spot.description}</p>
                <div className="curated-meta">
                  <span>⭐ {spot.rating}</span>
                  <span>{spot.peakTime}</span>
                  <span>{spot.ticket}</span>
                </div>
              </div>
              <span className="curated-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <span className="section-kicker">Route Rhythm</span>
          <div>
            <h2 className="section-title">四日城市路线预览</h2>
            <p className="section-subtitle">先看节奏，再决定每一天是重花线还是重生活感。</p>
          </div>
        </div>
        <div className="route-list">
          {routePreview.map(day => (
            <button key={day.day} className="route-card" onClick={() => setActiveTab('plan')}>
              <div className="route-day">Day {day.day}</div>
              <div className="route-title">{day.title}</div>
              <div className="route-note">{day.activities[0]?.text}</div>
              <div className="route-meta">{day.activities.length} 项安排</div>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <span className="section-kicker">Trip Status</span>
          <div>
            <h2 className="section-title">你的旅程已推进到哪里</h2>
            <p className="section-subtitle">不是打卡游戏，而是一份会越来越完整的城市记录。</p>
          </div>
        </div>
        <div className="status-board">
          <article className="status-card featured">
            <span className="status-label">花线收藏进度</span>
            <span className="status-value">{progressPct}%</span>
            <div className="status-bar">
              <div className="status-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <p className="status-copy">已挑选 {cityChecked} 个点位，打卡 {cityVisited} 个，获得 {user?.xp ?? 0} XP。</p>
          </article>
          <article className="status-card">
            <span className="status-label">路线完成</span>
            <span className="status-mini">{completedActs.length}/{totalActs}</span>
            <p className="status-copy">如果今天要出门，先开路线页把 Day 1 和 Day 2 过一遍。</p>
          </article>
          <article className="status-card">
            <span className="status-label">旅行笔记</span>
            <span className="status-mini">{reviewedCount} 条</span>
            <p className="status-copy">旅后感受会沉淀到旅档里，也会让后面的人少走弯路。</p>
          </article>
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <span className="section-kicker">Field Notes</span>
          <div>
            <h2 className="section-title">临出发前再看一眼</h2>
            <p className="section-subtitle">把最容易忽略的细节提前记在路书里。</p>
          </div>
        </div>
        <div className="note-grid">
          {fieldNotes.map((tip, index) => (
            <article key={`${tip.text}-${index}`} className="note-card">
              <span className="note-icon">{tip.icon}</span>
              <span className="note-text">{tip.text}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
