import { useUser } from '../context/UserContext'
import { CITIES } from '../data/cities'
import './ProfilePage.css'

// Gather all spots across all cities
const allSpots = CITIES.flatMap(c => c.spots)

export default function ProfilePage() {
  const { user, logout } = useUser()

  const checkedSpots    = allSpots.filter(s => user.checkedSpots?.includes(s.id))
  const visitedSpots    = allSpots.filter(s => user.visitedSpots?.includes(s.id))
  const recommendedSpots = allSpots.filter(s => user.recommendedSpots?.includes(s.id))

  const totalXP   = user.xp || 0
  const level     = Math.floor(totalXP / 200) + 1
  const xpInLevel = totalXP % 200
  const joinDate  = new Date(user.joinedAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })

  const visitedCount = visitedSpots.length
  const checkedCount = checkedSpots.length

  const badges = [
    { id: 'first',    icon: '🌸', name: '樱花初探',  desc: '完成注册',         unlocked: true },
    { id: 'spot1',    icon: '📍', name: '第一站',    desc: '加入第1个地点',     unlocked: checkedCount >= 1 },
    { id: 'spot3',    icon: '🗺️', name: '探索者',    desc: '加入3个地点',       unlocked: checkedCount >= 3 },
    { id: 'visited1', icon: '✈️', name: '首次出发',  desc: '标记第1个去过',     unlocked: visitedCount >= 1 },
    { id: 'visited3', icon: '🏅', name: '旅行达人',  desc: '去过3个地点',       unlocked: visitedCount >= 3 },
    { id: 'visited5', icon: '🏆', name: '赏樱大师',  desc: '去过5个地点',       unlocked: visitedCount >= 5 },
    { id: 'xp200',    icon: '⭐', name: '积分新星',  desc: '累计200 XP',        unlocked: totalXP >= 200 },
    { id: 'streak3',  icon: '🔥', name: '坚持打卡',  desc: '连续3天登录',       unlocked: (user.streak || 0) >= 3 },
    { id: 'city2',    icon: '🌍', name: '环球赏樱',  desc: '去过2个城市的景点', unlocked: new Set(CITIES.filter(c => c.spots.some(s => user.visitedSpots?.includes(s.id))).map(c => c.id)).size >= 2 },
  ]

  return (
    <div className="profile-page">
      {/* Profile Card */}
      <div className="profile-hero">
        <div className="profile-avatar">{user.avatar}</div>
        <div className="profile-name">{user.name}</div>
        <div className="profile-email">{user.email}</div>
        <div className="profile-join">加入于 {joinDate}</div>

        <div className="profile-stats">
          <div className="ps-item">
            <span className="ps-val">{totalXP}</span>
            <span className="ps-label">总 XP</span>
          </div>
          <div className="ps-divider" />
          <div className="ps-item">
            <span className="ps-val">{visitedCount}</span>
            <span className="ps-label">✈️ 去过</span>
          </div>
          <div className="ps-divider" />
          <div className="ps-item">
            <span className="ps-val">{checkedCount}</span>
            <span className="ps-label">♡ 想去</span>
          </div>
          <div className="ps-divider" />
          <div className="ps-item">
            <span className="ps-val">{user.streak || 0}</span>
            <span className="ps-label">🔥 连续天</span>
          </div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="level-section">
        <div className="level-row">
          <span className="level-label">Lv.{level} 赏樱旅人</span>
          <span className="level-xp">{xpInLevel} / 200 XP</span>
        </div>
        <div className="level-bar">
          <div className="level-fill" style={{ width: `${(xpInLevel / 200) * 100}%` }} />
        </div>
        <div className="level-next">再获得 {200 - xpInLevel} XP 升至 Lv.{level + 1}</div>
      </div>

      {/* Badges */}
      <div className="profile-section">
        <h3 className="section-title">成就徽章 🏅</h3>
        <div className="badges-grid">
          {badges.map(b => (
            <div key={b.id} className={`badge-card ${b.unlocked ? 'unlocked' : 'locked'}`}>
              <span className="badge-icon">{b.unlocked ? b.icon : '🔒'}</span>
              <span className="badge-name">{b.name}</span>
              <span className="badge-desc">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visited Spots — 足迹 */}
      <div className="profile-section">
        <h3 className="section-title">我的足迹 ✈️</h3>
        {visitedSpots.length === 0 ? (
          <div className="empty-spots">
            <span className="empty-icon">🗺️</span>
            <span>还没有「去过」的景点<br />在赏樱地页面点击「我去过这里」记录足迹吧！</span>
          </div>
        ) : (
          <div className="checked-spots">
            {visitedSpots.map(spot => {
              const city    = CITIES.find(c => c.spots.some(s => s.id === spot.id))
              const rating  = (user.spotRatings  || {})[String(spot.id)] || 0
              const review  = (user.spotReviews  || {})[String(spot.id)] || ''
              return (
                <div key={spot.id} className="checked-spot-row visited-row" style={{ borderLeftColor: spot.color }}>
                  <span className="cs-emoji">{spot.emoji}</span>
                  <div className="cs-info">
                    <div className="cs-name">{spot.name}</div>
                    <div className="cs-district">{city?.emoji} {city?.name} · {spot.district}</div>
                    {rating > 0 && (
                      <div className="cs-rating">
                        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                        <span className="cs-rating-label"> {['','很一般','还不错','值得去','非常棒','必须去！'][rating]}</span>
                      </div>
                    )}
                    {review && <div className="cs-review">「{review}」</div>}
                  </div>
                  <span className="cs-visited-badge">✈️ 去过</span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Want-to-go Spots — 想去 */}
      <div className="profile-section">
        <h3 className="section-title">我的心愿清单 ♡</h3>
        {checkedSpots.filter(s => !user.visitedSpots?.includes(s.id)).length === 0 ? (
          <div className="empty-spots">
            <span className="empty-icon">💭</span>
            <span>还没有「想去」的景点<br />在赏樱地页面加入行程吧！</span>
          </div>
        ) : (
          <div className="checked-spots">
            {checkedSpots.filter(s => !user.visitedSpots?.includes(s.id)).map(spot => {
              const city = CITIES.find(c => c.spots.some(s => s.id === spot.id))
              return (
                <div key={spot.id} className="checked-spot-row" style={{ borderLeftColor: spot.color }}>
                  <span className="cs-emoji">{spot.emoji}</span>
                  <div className="cs-info">
                    <div className="cs-name">{spot.name}</div>
                    <div className="cs-district">{city?.emoji} {city?.name} · {spot.district}</div>
                  </div>
                  <span className="cs-xp" style={{ color: spot.color }}>+{spot.xp} XP</span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Recommended Spots — 我的推荐 */}
      <div className="profile-section">
        <h3 className="section-title">我的推荐 👍</h3>
        {recommendedSpots.length === 0 ? (
          <div className="empty-spots">
            <span className="empty-icon">💌</span>
            <span>还没有推荐过的景点<br />在景点详情页点击「推荐给朋友」吧！</span>
          </div>
        ) : (
          <div className="checked-spots">
            {recommendedSpots.map(spot => {
              const city = CITIES.find(c => c.spots.some(s => s.id === spot.id))
              return (
                <div key={spot.id} className="checked-spot-row rec-row" style={{ borderLeftColor: spot.color }}>
                  <span className="cs-emoji">{spot.emoji}</span>
                  <div className="cs-info">
                    <div className="cs-name">{spot.name}</div>
                    <div className="cs-district">{city?.emoji} {city?.name} · {spot.district}</div>
                  </div>
                  <span className="cs-rec-badge">👍 已推荐</span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Logout */}
      <div className="profile-section">
        <button className="logout-btn" onClick={logout}>退出登录</button>
      </div>
    </div>
  )
}
