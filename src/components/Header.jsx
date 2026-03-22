import { useUser } from '../context/UserContext'
import { useTheme } from '../context/ThemeContext'
import { useCity } from '../context/CityContext'
import './Header.css'

export default function Header() {
  const { user } = useUser()
  const { theme, toggle } = useTheme()
  const { currentCity, selectCity, CITIES } = useCity()

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

      {/* City Selector */}
      <div className="city-selector">
        {CITIES.map(city => (
          <button
            key={city.id}
            className={`city-pill ${currentCity.id === city.id ? 'active' : ''}`}
            onClick={() => selectCity(city.id)}
          >
            <span className="city-pill-emoji">{city.emoji}</span>
            <span className="city-pill-name">{city.name}</span>
          </button>
        ))}
      </div>

    </header>
  )
}
