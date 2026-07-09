import { useTheme } from '../context/ThemeContext'
import { useCity } from '../context/CityContext'
import './Header.css'

export default function Header() {
  const { theme, toggle } = useTheme()
  const { currentCity, selectCity, CITIES } = useCity()

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <span className="logo-seal">桜</span>
          <span className="logo-text">Sakura Tour</span>
        </div>

        <div className="header-right">
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
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggle}
            aria-label="切换深色/浅色模式"
          >
            <span className="theme-icon">{theme === 'dark' ? '☾' : '☀'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
