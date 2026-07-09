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
    { label: '景点',    value: String(spotCount), icon: '📍' },
    { label: '行程天数', value: String(dayCount),  icon: '📅' },
    { label: '旅行攻略', value: String(tipCount),  icon: '💡' },
  ]

  const peakSeason = currentCity.seasonInfo?.rows?.find(r => r.dot === 'peak')

  // ── User progress for current city ──
  const checkedIds  = user?.checkedSpots  || []
  const visitedIds  = user?.visitedSpots  || []
  const citySpots   = currentCity.spots
  const cityChecked = checkedIds.filter(id => citySpots.some(s => s.id === id)).length
  const cityVisited = visitedIds.filter(id => citySpots.some(s => s.id === id)).length
  const progressPct = spotCount > 0 ? Math.round((cityChecked / spotCount) * 100) : 0

  // Completed plan activities for this city
  const completedActs = (user?.completedActivities || [])
    .filter(k => k.startsWith(`${currentCity.id}:`))
  const totalActs = currentCity.itineraryDays
    .reduce((sum, d) => sum + d.activities.length, 0)

  // Reviews written for this city's spots
  const reviewedCount = Object.keys(user?.spotReviews || {})
    .filter(id => citySpots.some(s => String(s.id) === id)).length

  // ── Dynamic task list ──
  const status = (done, active) => done ? 'done' : active ? 'active' : 'idle'

  const dailyTasks = [
    {
      id: 'explore',
      icon: '📍', iconBg: 'var(--nav-active-bg)',
      title: `探索${currentCity.name}景点`,
      desc: cityChecked === 0
        ? `共 ${spotCount} 个景点，加入心愿清单吧`
        : `已加入 ${cityChecked}/${spotCount} 个景点`,
      progress: spotCount > 0 ? cityChecked / spotCount : 0,
      xp: cityChecked * 50,
      status: status(cityChecked >= spotCount, cityChecked > 0),
      action: () => setActiveTab('spots'),
      actionLabel: '继续探索',
    },
    {
      id: 'plan',
      icon: '📅', iconBg: 'var(--bg-yellow-tint)',
      title: '规划行程打卡',
      desc: completedActs.length === 0
        ? `${totalActs} 项行程等你完成`
        : `已完成 ${completedActs.length}/${totalActs} 项活动`,
      progress: totalActs > 0 ? completedActs.length / totalActs : 0,
      xp: completedActs.length * 30,
      status: status(completedActs.length >= totalActs && totalActs > 0, completedActs.length > 0),
      action: () => setActiveTab('plan'),
      actionLabel: '查看行程',
    },
    {
      id: 'visit',
      icon: '✈️', iconBg: 'var(--bg-green-tint)',
      title: '实地打卡纪念',
      desc: cityVisited === 0
        ? `去过景点后在"景点"页标记`
        : `已打卡 ${cityVisited}/${cityChecked || spotCount} 个景点`,
      progress: (cityChecked || spotCount) > 0 ? cityVisited / (cityChecked || spotCount) : 0,
      xp: cityVisited * 150,
      status: status(cityVisited > 0 && cityVisited >= (cityChecked || spotCount), cityVisited > 0),
      action: () => setActiveTab('spots'),
      actionLabel: '去打卡',
    },
    cityVisited > 0 && {
      id: 'review',
      icon: '✍️', iconBg: 'var(--bg-red-tint)',
      title: '分享旅行感受',
      desc: reviewedCount === 0
        ? `去过 ${cityVisited} 个景点，写下你的感受`
        : `已评价 ${reviewedCount}/${cityVisited} 个景点`,
      progress: cityVisited > 0 ? reviewedCount / cityVisited : 0,
      xp: reviewedCount * 100,
      status: status(reviewedCount >= cityVisited, reviewedCount > 0),
      action: () => setActiveTab('spots'),
      actionLabel: '去评价',
    },
  ].filter(Boolean)

  return (
    <div className="home-page">
      {/* Hero — 平涂版画山水卡片 */}
      <div className="hero">
        <div className="scene" aria-hidden="true">
          <div className="scene-sky" />
          <div className="scene-sun" />
          <div className="scene-m m1" />
          <div className="scene-m m2" />
          <div className="scene-m m3" />
          <div className="scene-snow" />
          <div className="scene-lake" />
        </div>
        <div className="hero-copy">
          <div className="hero-badge">{currentCity.heroBadge}</div>
          <h1 className="hero-title">
            {currentCity.heroTitle}<br />
            <span className="hero-highlight">{currentCity.heroHighlight}</span>
          </h1>
          {peakSeason && (
            <div className="season-chip"><span className="sc-dot" />最佳季节 · {peakSeason.date}</div>
          )}
        </div>
      </div>

      {/* 足迹钤印条 */}
      <button className="footstrip" onClick={() => setActiveTab('spots')}>
        <div className="fs-left">
          <div className="fs-label">你的足迹</div>
          <div className="fs-count"><b>{cityVisited}</b> / {spotCount} 已抵达</div>
        </div>
        <div className="stamps">
          {Array.from({ length: Math.min(spotCount, 6) }).map((_, i) => (
            <span key={i} className={`stamp ${i < cityVisited ? 'on' : ''}`}>{i < cityVisited ? '印' : '·'}</span>
          ))}
        </div>
      </button>

      {/* Stats Row */}
      <div className="stats-row">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Daily Tasks — fully dynamic */}
      <div className="section">
        <h2 className="section-title">今日任务 🎯</h2>
        {dailyTasks.map(task => (
          <div key={task.id} className={`task-card ${task.status}`}>
            <div className="task-top">
              <div className="task-icon" style={{ background: task.iconBg }}>{task.icon}</div>
              <div className="task-info">
                <div className="task-title">{task.title}</div>
                <div className="task-desc">{task.desc}</div>
              </div>
              {task.status === 'done'
                ? <div className="task-badge done">✓ 完成</div>
                : task.status === 'active'
                  ? <button className="task-btn active" onClick={task.action}>{task.actionLabel}</button>
                  : <button className="task-btn" onClick={task.action}>去完成</button>
              }
            </div>
            <div className="task-bar-row">
              <div className="task-bar">
                <div className="task-bar-fill" style={{
                  width: `${Math.round(task.progress * 100)}%`,
                  background: task.status === 'done' ? '#58CC02' : 'var(--sakura-pink)',
                }} />
              </div>
              <span className="task-xp">+{task.xp} XP</span>
            </div>
          </div>
        ))}
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
