import { useUser } from '../context/UserContext'
import { sakuraSpots } from '../data/spots'
import './ProfilePage.css'

export default function ProfilePage() {
  const { user, logout } = useUser()

  const checkedSpots = sakuraSpots.filter(s => user.checkedSpots?.includes(s.id))
  const totalXP = user.xp || 0
  const level = Math.floor(totalXP / 200) + 1
  const xpInLevel = totalXP % 200
  const joinDate = new Date(user.joinedAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })

  const badges = [
    { id: 'first', icon: '🌸', name: '樱花初探', desc: '完成注册', unlocked: true },
    { id: 'spot1', icon: '📍', name: '第一站', desc: '加入第1个地点', unlocked: (user.checkedSpots?.length || 0) >= 1 },
    { id: 'spot3', icon: '🗺️', name: '探索者', desc: '加入3个地点', unlocked: (user.checkedSpots?.length || 0) >= 3 },
    { id: 'spot7', icon: '🏆', name: '赏樱达人', desc: '加入全部7个地点', unlocked: (user.checkedSpots?.length || 0) >= 7 },
    { id: 'xp200', icon: '⭐', name: '积分新星', desc: '累计200 XP', unlocked: totalXP >= 200 },
    { id: 'streak3', icon: '🔥', name: '坚持打卡', desc: '连续3天登录', unlocked: (user.streak || 0) >= 3 },
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
            <span className="ps-val">{user.streak || 0}</span>
            <span className="ps-label">🔥 连续天</span>
          </div>
          <div className="ps-divider" />
          <div className="ps-item">
            <span className="ps-val">{user.checkedSpots?.length || 0}</span>
            <span className="ps-label">打卡地点</span>
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

      {/* Checked Spots */}
      <div className="profile-section">
        <h3 className="section-title">我的行程地点 🌸</h3>
        {checkedSpots.length === 0 ? (
          <div className="empty-spots">
            <span className="empty-icon">🗺️</span>
            <span>还没有加入任何地点，去「赏樱地」页面探索吧！</span>
          </div>
        ) : (
          <div className="checked-spots">
            {checkedSpots.map(spot => (
              <div key={spot.id} className="checked-spot-row" style={{ borderLeftColor: spot.color }}>
                <span className="cs-emoji">{spot.emoji}</span>
                <div className="cs-info">
                  <div className="cs-name">{spot.name}</div>
                  <div className="cs-district">{spot.district} · {spot.peakTime}</div>
                </div>
                <span className="cs-xp" style={{ color: spot.color }}>+{spot.xp} XP</span>
              </div>
            ))}
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
