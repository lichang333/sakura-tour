import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import { MiniCityStamp } from './CityStamp'
import './HomePage.css'

// Darken a #RRGGBB color by `amt` (0-1) for the woodcut thumb gradient
function shade(hex, amt = 0.28) {
  const n = parseInt(hex.slice(1), 16)
  const f = c => Math.max(0, Math.round(c * (1 - amt)))
  const [r, g, b] = [n >> 16 & 255, n >> 8 & 255, n & 255].map(f)
  return `rgb(${r},${g},${b})`
}

export default function HomePage({ setActiveTab, goToSpot }) {
  const { user } = useUser()
  const { currentCity } = useCity()

  const spotCount = currentCity.spots.length
  const dayCount  = currentCity.itineraryDays.length
  const tipCount  = currentCity.tips.length

  const stats = [
    { label: '景点',    value: String(spotCount) },
    { label: '行程天数', value: String(dayCount) },
    { label: '旅行攻略', value: String(tipCount) },
  ]

  const peakSeason = currentCity.seasonInfo?.rows?.find(r => r.dot === 'peak')

  // ── User progress for current city ──
  const checkedIds  = user?.checkedSpots  || []
  const visitedIds  = user?.visitedSpots  || []
  const citySpots   = currentCity.spots
  const cityChecked = checkedIds.filter(id => citySpots.some(s => s.id === id)).length
  const cityVisited = visitedIds.filter(id => citySpots.some(s => s.id === id)).length
  // 已抵达景点（按城市顺序）—— 足迹条每枚印章盖各自景点名首字
  const cityVisitedSpots = citySpots.filter(s => visitedIds.includes(s.id))

  // 本地精选 — 发现区，已抵达的不再出现；热门优先、再按评分
  const curated = citySpots
    .filter(s => !visitedIds.includes(s.id))
    .sort((a, b) => (b.isHot ? 1 : 0) - (a.isHot ? 1 : 0) || b.rating - a.rating)
    .slice(0, 3)

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
      glyph: '探',
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
      glyph: '程',
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
      glyph: '印',
      title: '实地打卡纪念',
      desc: cityVisited === 0
        ? `去过景点后在「景点」页标记`
        : `已抵达 ${cityVisited}/${cityChecked || spotCount} 个景点`,
      progress: (cityChecked || spotCount) > 0 ? cityVisited / (cityChecked || spotCount) : 0,
      xp: cityVisited * 150,
      status: status(cityVisited > 0 && cityVisited >= (cityChecked || spotCount), cityVisited > 0),
      action: () => setActiveTab('spots'),
      actionLabel: '去打卡',
    },
    cityVisited > 0 && {
      id: 'review',
      glyph: '记',
      title: '写下旅行记忆',
      desc: reviewedCount === 0
        ? `去过 ${cityVisited} 个景点，写下你的感受`
        : `已记录 ${reviewedCount}/${cityVisited} 个景点`,
      progress: cityVisited > 0 ? reviewedCount / cityVisited : 0,
      xp: reviewedCount * 100,
      status: status(reviewedCount >= cityVisited, reviewedCount > 0),
      action: () => setActiveTab('spots'),
      actionLabel: '去记录',
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
      <button className="footstrip" onClick={() => setActiveTab('album')}>
        <div className="fs-left">
          <div className="fs-label">你的足迹</div>
          <div className="fs-count"><b>{cityVisited}</b> / {spotCount} 已抵达</div>
          <div className="fs-meta">{user?.xp ?? 0} XP · 连续 {user?.streak ?? 0} 天</div>
        </div>
        <div className="fs-right">
          <svg className="fs-ring" width="58" height="58" viewBox="0 0 58 58" aria-hidden="true">
            <circle cx="29" cy="29" r="25" fill="none" stroke="var(--border)" strokeWidth="3.5" />
            <circle cx="29" cy="29" r="25" fill="none" stroke="var(--copper)" strokeWidth="3.5"
              strokeLinecap="round" transform="rotate(-90 29 29)"
              strokeDasharray={`${(spotCount ? cityVisited / spotCount : 0) * 157} 157`} />
            <foreignObject x="12" y="12" width="34" height="34">
              <MiniCityStamp city={currentCity} size={34} />
            </foreignObject>
          </svg>
          <div className="fs-ring-side">
            <div className="fs-remain">
              {cityVisited >= spotCount ? `${currentCity.name} · 已集齐` : `${currentCity.name} · 差 ${spotCount - cityVisited} 处集齐`}
            </div>
            <div className="fs-album">集章册 ›</div>
          </div>
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

      {/* 本地精选 */}
      <div className="section">
        <div className="block-head">
          <h2 className="section-title">本地精选</h2>
          <button className="block-link" onClick={() => setActiveTab('spots')}>全部 →</button>
        </div>
        <div className="curated-list">
          {curated.length === 0 && (
            <div className="curated-empty">这座城的精选都抵达啦 · 换个城继续探索 🎒</div>
          )}
          {curated.map(spot => {
            return (
              <button key={spot.id} className="spot-row" onClick={() => goToSpot?.(spot.id)}>
                <div
                  className="srow-thumb"
                  style={{ background: `linear-gradient(150deg, ${spot.color}, ${shade(spot.color)})` }}
                >
                  <span className="srow-thumb-emoji">{spot.emoji}</span>
                  <span className="srow-thumb-band" />
                </div>
                <div className="srow-meta">
                  <div className="srow-name">
                    {spot.name}
                    {spot.isHot && <span className="tag-must">必去</span>}
                  </div>
                  <div className="srow-sub">{spot.tags?.filter(t => t !== '必去').slice(0, 2).join(' · ')}</div>
                </div>
                <span className="srow-go" aria-hidden="true">›</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Daily Tasks — fully dynamic */}
      <div className="section">
        <h2 className="section-title">今日任务</h2>
        {dailyTasks.map(task => (
          <div key={task.id} className={`task-card ${task.status}`}>
            <div className="task-top">
              <div className={`task-glyph ${task.status}`}>{task.glyph}</div>
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
                  background: task.status === 'done' ? 'var(--jade)' : 'var(--copper)',
                }} />
              </div>
              <span className="task-xp">+{task.xp} XP</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="section">
        <h2 className="section-title">快速提示</h2>
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
