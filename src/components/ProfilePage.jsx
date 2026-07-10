import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import { CITIES } from '../data/cities'
import { REC_TAGS } from './SpotsPage'
import './ProfilePage.css'

// Gather all spots across all cities (周边顺游也可想去/打卡)
const allSpots = CITIES.flatMap(c => [...c.spots, ...(c.nearbySpots || [])])

export default function ProfilePage({ goToSpot }) {
  const { user, logout } = useUser()
  const { selectCity } = useCity()

  // 足迹/心愿可能属于其他城市：跳转前先切到该城市，
  // 否则 SpotsPage 在当前城市里找不到该景点会静默回落到列表
  const openSpot = (spot) => {
    const city = CITIES.find(c => c.spots.some(s => s.id === spot.id))
    if (city) selectCity(city.id)
    goToSpot?.(spot.id)
  }

  const checkedSpots = allSpots.filter(s => user.checkedSpots?.includes(s.id))
  const visitedSpots = allSpots.filter(s => user.visitedSpots?.includes(s.id))

  const rawRecs = user?.recommendedSpots || []
  const recommendedList = rawRecs
    .map(r => {
      const recObj = typeof r === 'object' ? r : { id: r, tag: null }
      const spot = allSpots.find(s => s.id === recObj.id || String(s.id) === String(recObj.id))
      return { spot, rec: recObj }
    })
    .filter(({ spot }) => spot)

  const totalXP   = user.xp || 0
  const level     = Math.floor(totalXP / 200) + 1
  const xpInLevel = totalXP % 200
  const joinDate  = new Date(user.joinedAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })

  const visitedCount = visitedSpots.length
  const checkedCount = checkedSpots.length

  const badges = [
    { id: 'first',    seal: '初行', name: '初来乍到',  desc: '完成注册',         unlocked: true },
    { id: 'spot1',    seal: '一站', name: '第一站',    desc: '加入第1个地点',     unlocked: checkedCount >= 1 },
    { id: 'spot3',    seal: '探索', name: '探索者',    desc: '加入3个地点',       unlocked: checkedCount >= 3 },
    { id: 'visited1', seal: '出发', name: '首次出发',  desc: '第1个已抵达',       unlocked: visitedCount >= 1 },
    { id: 'visited3', seal: '达人', name: '旅行达人',  desc: '抵达3个地点',       unlocked: visitedCount >= 3 },
    { id: 'visited5', seal: '资深', name: '资深旅人',  desc: '抵达5个地点',       unlocked: visitedCount >= 5 },
    { id: 'xp200',    seal: '新星', name: '积分新星',  desc: '累计200 XP',        unlocked: totalXP >= 200 },
    { id: 'streak3',  seal: '连日', name: '坚持打卡',  desc: '连续3天登录',       unlocked: (user.streak || 0) >= 3 },
    { id: 'city2',    seal: '多城', name: '多城旅人',  desc: '抵达2个城市',       unlocked: new Set(CITIES.filter(c => c.spots.some(s => user.visitedSpots?.includes(s.id))).map(c => c.id)).size >= 2 },
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
            <span className="ps-label">已抵达</span>
          </div>
          <div className="ps-divider" />
          <div className="ps-item">
            <span className="ps-val">{checkedCount}</span>
            <span className="ps-label">想去</span>
          </div>
          <div className="ps-divider" />
          <div className="ps-item">
            <span className="ps-val">{user.streak || 0}</span>
            <span className="ps-label">连续天</span>
          </div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="level-section">
        <div className="level-row">
          <span className="level-label">Lv.{level} 旅行家</span>
          <span className="level-xp">{xpInLevel} / 200 XP</span>
        </div>
        <div className="level-bar">
          <div className="level-fill" style={{ width: `${(xpInLevel / 200) * 100}%` }} />
        </div>
        <div className="level-next">再获得 {200 - xpInLevel} XP 升至 Lv.{level + 1}</div>
      </div>

      {/* Badges — 圆形钤印 */}
      <div className="profile-section">
        <h3 className="section-title">成就印章</h3>
        <div className="seals-grid">
          {badges.map(b => (
            <div key={b.id} className={`seal-badge ${b.unlocked ? 'unlocked' : 'locked'}`} title={b.desc}>
              <span className="seal-badge-mark">{b.seal.slice(0, 1)}<br />{b.seal.slice(1)}</span>
              <span className="seal-badge-name">{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visited Spots — 足迹 */}
      <div className="profile-section">
        <h3 className="section-title">我的足迹</h3>
        {visitedSpots.length === 0 ? (
          <div className="empty-spots">
            <span className="empty-icon">🗺️</span>
            <span>还没有「去过」的景点<br />在景点页面点击「我去过这里」记录足迹吧！</span>
          </div>
        ) : (
          <div className="checked-spots">
            {visitedSpots.map(spot => {
              const city    = CITIES.find(c => c.spots.some(s => s.id === spot.id))
              const rating  = (user.spotRatings  || {})[String(spot.id)] || 0
              const reviewObj = (user.spotReviews || {})[String(spot.id)]
              const review    = typeof reviewObj === 'string' ? reviewObj : (reviewObj?.text || '')
              const photos    = (user.spotPhotos || {})[String(spot.id)] || []
              return (
                <div key={spot.id} className="checked-spot-row visited-row clickable-row" style={{ borderLeftColor: spot.color }} onClick={() => openSpot(spot)}>
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
                    {photos.length > 0 && (
                      <div className="cs-photos">
                        {photos.slice(0, 4).map((url, i) => (
                          <img key={url} className="cs-photo" src={url} alt="旅行照片" loading="lazy" />
                        ))}
                        {photos.length > 4 && <span className="cs-photo-more">+{photos.length - 4}</span>}
                      </div>
                    )}
                  </div>
                  <span className="cs-stamp">{city?.nameEn?.toUpperCase() || '已抵达'}</span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* 我的推荐 */}
      <div className="profile-section">
        <h3 className="section-title">
          我的推荐
          {recommendedList.length > 0 && <span className="ps-count">{recommendedList.length}</span>}
        </h3>
        {recommendedList.length === 0 ? (
          <div className="empty-spots rec-empty">
            <span className="empty-icon">👍</span>
            <span>还没有推荐过景点<br />觉得好玩的地方，推荐给朋友吧！</span>
          </div>
        ) : (
          <div className="checked-spots">
            {recommendedList.map(({ spot, rec }) => spot && (
              <div key={spot.id} className="checked-spot-row rec-row clickable-row" onClick={() => openSpot(spot)}>
                <span className="cs-emoji">{spot.emoji}</span>
                <div className="cs-info">
                  <div className="cs-name">{spot.name}</div>
                  {rec.tag ? (
                    <div className="cs-rec-tag">
                      {REC_TAGS.find(t => t.id === rec.tag)?.emoji}
                      {' '}{REC_TAGS.find(t => t.id === rec.tag)?.label}
                    </div>
                  ) : (
                    <div className="cs-district">已推荐</div>
                  )}
                </div>
                <span className="cs-visited-badge rec-badge">👍</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Want-to-go Spots — 想去 */}
      <div className="profile-section">
        <h3 className="section-title">我的心愿清单</h3>
        {checkedSpots.filter(s => !user.visitedSpots?.includes(s.id)).length === 0 ? (
          <div className="empty-spots">
            <span className="empty-icon">💭</span>
            <span>还没有「想去」的景点<br />在景点页面加入行程吧！</span>
          </div>
        ) : (
          <div className="checked-spots">
            {checkedSpots.filter(s => !user.visitedSpots?.includes(s.id)).map(spot => {
              const city = CITIES.find(c => c.spots.some(s => s.id === spot.id))
              return (
                <div key={spot.id} className="checked-spot-row clickable-row" style={{ borderLeftColor: spot.color }} onClick={() => openSpot(spot)}>
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

      {/* Logout */}
      <div className="profile-section">
        <button className="logout-btn" onClick={logout}>退出登录</button>
      </div>
    </div>
  )
}
