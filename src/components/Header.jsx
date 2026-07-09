import { useUser } from '../context/UserContext'
import { useTheme } from '../context/ThemeContext'
import { useCity } from '../context/CityContext'
import './Header.css'

export default function Header() {
  const { user } = useUser()
  const { theme, toggle } = useTheme()
  const { currentCity, selectCity, CITIES } = useCity()
  const peakWindow = currentCity.bloomInfo?.peak?.date || currentCity.heroDesc

  return (
    <header className="header">
      <div className="header-top">
        <div className="brand-block">
          <span className="brand-overline">SECOND EDITION</span>
          <div className="logo-row">
            <span className="logo-seal">{currentCity.emoji}</span>
            <div className="logo-copy">
              <span className="logo-text">Sakura Tour</span>
              <span className="logo-subtext">{currentCity.nameEn} Spring Dispatch</span>
            </div>
          </div>
        </div>
        <div className="header-tools">
          <div className="metric-stack">
            <div className="metric-pill accent">
              <span className="metric-label">XP</span>
              <span className="metric-value">{user?.xp ?? 0}</span>
            </div>
            <div className="metric-pill">
              <span className="metric-label">STREAK</span>
              <span className="metric-value">{user?.streak ?? 0}D</span>
            </div>
          </div>
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggle}
            aria-label="切换深色/浅色模式"
          >
            <span className="theme-icon">{theme === 'dark' ? '☾' : '☼'}</span>
          </button>
        </div>
      </div>

      <div className="header-rail">
        <div className="rail-copy">
          <span className="rail-label">{currentCity.country} / {currentCity.heroBadge}</span>
          <span className="rail-tagline">{currentCity.tagline}</span>
        </div>
        <span className="rail-chip">{peakWindow}</span>
      </div>

      <div className="city-selector">
        {CITIES.map(city => (
          <button
            key={city.id}
            className={`city-pill ${currentCity.id === city.id ? 'active' : ''}`}
            onClick={() => selectCity(city.id)}
          >
            <span className="city-pill-mark">{city.emoji}</span>
            <span className="city-pill-copy">
              <span className="city-pill-name">{city.name}</span>
              <span className="city-pill-en">{city.nameEn}</span>
            </span>
          </button>
        ))}
      </div>
    </header>
  )
}
