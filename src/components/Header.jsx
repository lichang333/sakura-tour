import { useUser } from '../context/UserContext'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

export default function Header({ activeTab, setActiveTab }) {
  const { user } = useUser()
  const { theme, toggle } = useTheme()

  const tabs = [
    { id: 'home', label: '首页', icon: '🏠' },
    { id: 'spots', label: '赏樱地', icon: '🌸' },
    { id: 'plan', label: '行程', icon: '📅' },
    { id: 'tips', label: '攻略', icon: '💡' },
    { id: 'profile', label: '我的', icon: user?.avatar || '👤' },
  ]

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <span className="logo-icon">🌸</span>
          <span className="logo-text">Sakura Tour</span>
        </div>
        <div className="header-right">
          <div className="xp-badge">
            <span>⭐</span>
            <span className="xp-count">{user?.xp ?? 0} XP</span>
          </div>
          <div className="streak-badge">
            <span>🔥</span>
            <span className="streak-count">{user?.streak ?? 0}天</span>
          </div>
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggle}
            aria-label="切换深色/浅色模式"
          >
            <span className="theme-toggle-thumb" />
            <span className="theme-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
          </button>
        </div>
      </div>
      <nav className="nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </header>
  )
}
