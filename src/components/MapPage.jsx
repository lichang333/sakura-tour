import { useEffect, useRef, useState } from 'react'
import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import { useTheme } from '../context/ThemeContext'
import { loadAMap } from '../lib/amap'
import './MapPage.css'

const DEFAULT_CENTER = [100.1800, 25.7200] // 大理，找不到任何标记点时的默认中心

const FILTERS = [
  { id: 'all',     label: '全部' },
  { id: 'want',    label: '想去' },
  { id: 'visited', label: '已抵达' },
]

function buildPin(status, spotId) {
  const el = document.createElement('div')
  el.className = `map-pin ${status}`
  el.dataset.spot = spotId
  // 已抵达 = 铜印钤章；想去 = 靛蓝点标
  el.innerHTML = status === 'visited'
    ? '<span class="map-seal">印</span>'
    : '<span class="map-pin-dot"></span>'
  return el
}

function buildPopup(spot, status, onView) {
  const el = document.createElement('div')
  el.className = 'map-popup'
  el.innerHTML = `
    <div class="mp-head">
      <span class="mp-emoji">${spot.emoji}</span>
      <div class="mp-meta">
        <div class="mp-name">${spot.name}</div>
        <div class="mp-city">${spot.cityEmoji} ${spot.cityName} · ${spot.district}</div>
      </div>
    </div>
    <div class="mp-badge ${status}">${status === 'visited' ? '已抵达' : '想去'}</div>
    <button class="mp-btn" type="button">查看详情 →</button>
  `
  el.querySelector('.mp-btn').addEventListener('click', () => onView(spot))
  return el
}

/* 踏印入口卡 —— 全国制县等级由独立站「踏印」承载（同一账号、同一份印记），
   App 内不再维护重复的方格地图，这里只展示进度并导流 */
function TayinCard({ user, mintSsoCode }) {
  const levels = user?.regionLevels || {}
  const score = Object.values(levels).reduce((a, b) => a + b, 0)
  const touched = Object.values(levels).filter(v => v > 0).length

  // 已登录：带一次性 SSO 码跳转，踏印侧自动登录同一账号
  const openWithSso = async (e) => {
    if (!user) return
    e.preventDefault()
    let url = 'https://tayin.digitalvio.shop/'
    try {
      const code = await mintSsoCode?.()
      if (code) url += `#sso=${code}`
    } catch { /* 铸码失败就裸跳 */ }
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <a className="tayin-card" href="https://tayin.digitalvio.shop/" target="_blank" rel="noreferrer" onClick={openWithSso}>
      <span className="tc-seal">印</span>
      <span className="tc-info">
        <span className="tc-title">踏印 · 中国打卡地图</span>
        <span className="tc-sub">
          {touched > 0 ? `已踏 ${touched} 地 · ${score} 分 —— 打卡会自动盖章` : '一地一印，点亮你的全国版图'}
        </span>
      </span>
      <span className="tc-go">去盖章 →</span>
    </a>
  )
}

export default function MapPage({ goToSpot }) {
  const { user, mintSsoCode } = useUser()
  const { CITIES, selectCity } = useCity()
  const { theme } = useTheme()
  const mapElRef = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef([])
  // AMap 脚本加载是异步的：加载期间用户可能切主题，
  // 建图时从 ref 读最新值，而不是 init effect 闭包里的旧值
  const themeRef = useRef(theme)
  themeRef.current = theme
  const [filter, setFilter] = useState('all')
  const [mapError, setMapError] = useState('')
  const [ready, setReady] = useState(false)

  const checkedIds = new Set(user?.checkedSpots || [])
  const visitedIds = new Set(user?.visitedSpots || [])

  const allSpots = CITIES.flatMap(c =>
    [...c.spots, ...(c.nearbySpots || [])]
      .filter(s => typeof s.lat === 'number' && typeof s.lng === 'number')
      .map(s => ({ ...s, cityId: c.id, cityName: c.name, cityEmoji: c.emoji }))
  )

  const withStatus = allSpots
    .map(s => ({ spot: s, status: visitedIds.has(s.id) ? 'visited' : checkedIds.has(s.id) ? 'want' : null }))
    .filter(x => x.status)

  const visitedCount = withStatus.filter(x => x.status === 'visited').length
  const wantCount = withStatus.filter(x => x.status === 'want').length

  const visible = withStatus.filter(x => filter === 'all' || x.status === filter)

  const handleView = (spot) => {
    selectCity(spot.cityId)
    goToSpot?.(spot.id)
  }

  // Init map once. The container has a static CSS height (.map-canvas),
  // so its layout is already settled by the time this effect runs — no
  // need to defer marker creation behind rAF/timeout gimmicks.
  useEffect(() => {
    let cancelled = false
    loadAMap().then(AMap => {
      if (cancelled || !mapElRef.current) return
      mapRef.current = new AMap.Map(mapElRef.current, {
        // Zoomed out wide enough that markers spanning the whole city are
        // created inside the initial viewport — custom DOM-content markers
        // created off-screen don't reposition correctly once setFitView
        // narrows the view, so we start loose and let fitView zoom in.
        center: DEFAULT_CENTER,
        zoom: 9,
        mapStyle: themeRef.current === 'dark' ? 'amap://styles/dark' : 'amap://styles/whitesmoke',
      })
      mapRef.current.resize()
      setReady(true)
    }).catch(err => setMapError(err.message))

    return () => {
      cancelled = true
      mapRef.current?.destroy()
      mapRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // React to theme changes
  useEffect(() => {
    if (!mapRef.current) return
    mapRef.current.setMapStyle(theme === 'dark' ? 'amap://styles/dark' : 'amap://styles/whitesmoke')
  }, [theme])

  // Keep AMap's internal size in sync with responsive breakpoints (mobile 340px → tablet+ 440px)
  useEffect(() => {
    if (!ready || !mapElRef.current) return
    const ro = new ResizeObserver(() => mapRef.current?.resize())
    ro.observe(mapElRef.current)
    return () => ro.disconnect()
  }, [ready])

  // Rebuild markers when filtered data changes
  useEffect(() => {
    if (!ready || !mapRef.current) return
    const AMap = window.AMap
    markersRef.current.forEach(m => m.setMap(null))
    markersRef.current = []

    visible.forEach(({ spot, status }) => {
      const marker = new AMap.Marker({
        position: [spot.lng, spot.lat],
        content: buildPin(status, spot.id),
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
      })
      const infoWindow = new AMap.InfoWindow({
        content: buildPopup(spot, status, handleView),
        offset: new AMap.Pixel(0, -34),
        closeWhenClickMap: true,
      })
      marker.on('click', () => infoWindow.open(mapRef.current, marker.getPosition()))
      marker.setMap(mapRef.current)
      markersRef.current.push(marker)
    })

    if (visible.length > 0) {
      mapRef.current.setFitView(markersRef.current, true, [60, 24, 24, 24])
    } else {
      mapRef.current.setZoomAndCenter(12, DEFAULT_CENTER)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, filter, user?.checkedSpots, user?.visitedSpots])

  return (
    <div className="map-page">
      <div className="map-header">
        <div className="map-eyebrow">Footprints · 云贵川</div>
        <h2 className="page-title">我的地图</h2>
        <p className="page-sub">想去与已抵达的地方，一眼看清</p>
      </div>

      <div className="map-filters">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`map-filter-chip ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <span className="mfc-count">
              {f.id === 'all' ? visitedCount + wantCount : f.id === 'want' ? wantCount : visitedCount}
            </span>
          </button>
        ))}
      </div>

      <div className="map-card">
        {mapError ? (
          <div className="map-fallback">地图加载失败：{mapError}</div>
        ) : (
          <div className="map-canvas" ref={mapElRef} />
        )}
        <div className="map-legend">
          <span className="ml-item"><span className="ml-seal">印</span>已抵达</span>
          <span className="ml-item"><span className="ml-dot want" />想去</span>
        </div>
      </div>

      <TayinCard user={user} mintSsoCode={mintSsoCode} />

      <div className="map-list-section">
        {visible.length === 0 ? (
          <div className="empty-spots">
            <span className="empty-icon">🗺️</span>
            <span>还没有「想去」或「已抵达」的地方<br />在景点页面收藏或打卡后，会出现在地图上</span>
          </div>
        ) : (
          <div className="checked-spots">
            {visible.map(({ spot, status }) => (
              <div
                key={spot.id}
                className={`checked-spot-row clickable-row ${status === 'visited' ? 'visited-row' : ''}`}
                style={{ borderLeftColor: spot.color }}
                onClick={() => handleView(spot)}
              >
                <span className="cs-emoji">{spot.emoji}</span>
                <div className="cs-info">
                  <div className="cs-name">{spot.name}</div>
                  <div className="cs-district">{spot.cityEmoji} {spot.cityName} · {spot.district}</div>
                </div>
                <span className={status === 'visited' ? 'cs-visited-badge' : 'cs-xp'} style={status === 'visited' ? undefined : { color: spot.color }}>
                  {status === 'visited' ? '已抵达' : '想去'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
