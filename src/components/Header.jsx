import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from '../context/ThemeContext'
import { useCity } from '../context/CityContext'
import './Header.css'

const PROVINCE_ORDER = ['云南', '贵州', '四川']

export default function Header() {
  const { theme, toggle } = useTheme()
  const { currentCity, selectCity, CITIES } = useCity()
  const [sheetOpen, setSheetOpen] = useState(false)

  // Group cities by province, keeping a stable 云→贵→川 order
  const groups = PROVINCE_ORDER
    .map(p => ({ province: p, cities: CITIES.filter(c => (c.province || c.country) === p) }))
    .filter(g => g.cities.length > 0)
  const ungrouped = CITIES.filter(c => !PROVINCE_ORDER.includes(c.province || c.country))
  if (ungrouped.length > 0) groups.push({ province: '其他', cities: ungrouped })

  const pick = (cityId) => {
    selectCity(cityId)
    setSheetOpen(false)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <span className="logo-seal">桜</span>
          <span className="logo-text">Sakura Tour</span>
        </div>

        <div className="header-right">
          <button className="city-current" onClick={() => setSheetOpen(true)}>
            <span className="city-current-emoji">{currentCity.emoji}</span>
            <span className="city-current-name">{currentCity.name}</span>
            <svg viewBox="0 0 24 24" className="city-current-chevron" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggle}
            aria-label="切换深色/浅色模式"
          >
            {theme === 'dark' ? (
              <svg className="theme-icon" viewBox="0 0 24 24" width="16" height="16" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" width="16" height="16" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 城市选择抽屉 — 分省分组，可扩展到几十座小城。
          用 portal 挂到 body：header 的 backdrop-filter 会把
          position:fixed 的子元素圈在自己的定位上下文里。 */}
      {sheetOpen && createPortal(
        <div className="city-sheet-overlay" onClick={() => setSheetOpen(false)}>
          <div className="city-sheet" role="dialog" aria-label="选择城市" onClick={e => e.stopPropagation()}>
            <div className="cs-handle" aria-hidden="true" />
            <div className="cs-title">去哪座小城？</div>
            {groups.map(g => (
              <div key={g.province} className="cs-group">
                <div className="cs-province">{g.province}</div>
                <div className="cs-cities">
                  {g.cities.map(city => (
                    <button
                      key={city.id}
                      className={`cs-city ${currentCity.id === city.id ? 'active' : ''}`}
                      onClick={() => pick(city.id)}
                    >
                      <span className="cs-city-emoji">{city.emoji}</span>
                      <span className="cs-city-name">{city.name}</span>
                      <span className="cs-city-tag">{city.tagline}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}
