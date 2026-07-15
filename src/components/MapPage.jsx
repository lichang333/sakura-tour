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

export default function MapPage({ goToSpot, openList }) {
  const { user, mintSsoCode } = useUser()
  const { CITIES, selectCity } = useCity()
  const { theme } = useTheme()
  const mapElRef = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef([])
  const geoRef = useRef(null)          // 高德定位插件实例
  // AMap 脚本加载是异步的：加载期间用户可能切主题，
  // 建图时从 ref 读最新值，而不是 init effect 闭包里的旧值
  const themeRef = useRef(theme)
  themeRef.current = theme
  const [filter, setFilter] = useState('all')
  const [mapError, setMapError] = useState('')
  const [ready, setReady] = useState(false)
  const [locating, setLocating] = useState(false)
  const [geoMsg, setGeoMsg] = useState('')

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

  // 定位到我：插件自动放标记/精度圈并平移缩放到当前位置
  const locateMe = () => {
    if (!geoRef.current) { setGeoMsg('定位未就绪，请稍候再试'); setTimeout(() => setGeoMsg(''), 2500); return }
    setLocating(true)
    geoRef.current.getCurrentPosition((status, result) => {
      setLocating(false)
      if (status !== 'complete') {
        setGeoMsg('定位失败，请在浏览器/系统里允许定位权限')
        setTimeout(() => setGeoMsg(''), 3200)
      }
    })
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

      // GPS 定位插件（返回 GCJ-02，与高德底图对齐；国内不漂移）
      AMap.plugin('AMap.Geolocation', () => {
        if (cancelled || !mapRef.current) return
        geoRef.current = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          showButton: false,      // 用我们自己的定位按钮
          showMarker: true,       // 插件自动放「我的位置」标记
          showCircle: true,       // 精度圈
          panToLocation: true,
          zoomToAccuracy: true,
        })
        mapRef.current.addControl(geoRef.current)
      })
    }).catch(err => setMapError(err.message))

    return () => {
      cancelled = true
      geoRef.current = null
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
        <div className="map-head-row">
          <div>
            <div className="map-eyebrow">Footprints · 中国</div>
            <h2 className="page-title">我的地图</h2>
            <p className="page-sub">想去与已抵达的地方，一眼看清</p>
          </div>
          <button className="view-switch" onClick={openList} aria-label="切换到景点列表">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor"
              strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 6h13M8 12h13M8 18h13" /><circle cx="4" cy="6" r="0.8" /><circle cx="4" cy="12" r="0.8" /><circle cx="4" cy="18" r="0.8" />
            </svg>
            <span>列表</span>
          </button>
        </div>
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
        {!mapError && (
          <button className="map-locate-btn" onClick={locateMe} disabled={locating} aria-label="定位到我的位置" title="定位到我">
            {locating ? (
              <span className="mlb-spin" aria-hidden="true" />
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
                strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3.2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
              </svg>
            )}
          </button>
        )}
        {geoMsg && <div className="map-geo-msg">{geoMsg}</div>}
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
