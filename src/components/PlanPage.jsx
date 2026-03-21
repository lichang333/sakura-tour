import { useState } from 'react'
import { itineraryDays, sakuraSpots } from '../data/spots'
import { useUser } from '../context/UserContext'
import './PlanPage.css'

/* ── 每天主题色 ── */
const DAY_THEMES = [
  { icon: '✈️', gradient: 'linear-gradient(135deg,#D94F7C,#FF9EC4)', color: '#D94F7C' },
  { icon: '🌸', gradient: 'linear-gradient(135deg,#FF6B9D,#FFB3CC)', color: '#FF6B9D' },
  { icon: '🐼', gradient: 'linear-gradient(135deg,#1CB0F6,#80D8FF)', color: '#1CB0F6' },
  { icon: '🎭', gradient: 'linear-gradient(135deg,#FF9600,#FFD180)', color: '#FF9600' },
]

/* ── SVG 进度环 ── */
function ProgressRing({ pct, size = 48, stroke = 4 }) {
  const r   = (size - stroke) / 2
  const c   = 2 * Math.PI * r
  const off = c * (1 - pct)
  return (
    <svg width={size} height={size} style={{ flexShrink: 0 }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke="rgba(255,255,255,0.3)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke="white" strokeWidth={stroke}
        strokeDasharray={c} strokeDashoffset={off}
        strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="white" fontSize={size * 0.25} fontWeight="900">
        {Math.round(pct * 100)}%
      </text>
    </svg>
  )
}

/* ── localStorage helpers ── */
function loadSet(key)    { try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')) } catch { return new Set() } }
function saveSet(key, s) { localStorage.setItem(key, JSON.stringify([...s])) }
function loadObj(key)    { try { return JSON.parse(localStorage.getItem(key) || '{}') }           catch { return {} } }
function saveObj(key, o) { localStorage.setItem(key, JSON.stringify(o)) }

const REMOVED_KEY = 'sakura_removed_acts'
const CUSTOM_KEY  = 'sakura_custom_acts'

export default function PlanPage({ setActiveTab }) {
  const [mode,      setMode]      = useState('myplan')
  const [activeDay, setActiveDay] = useState(1)
  const [showAdd,   setShowAdd]   = useState(false)

  const { user, toggleActivity, toggleSpot, addXP } = useUser()

  /* 我的清单 */
  const checkedIds = user?.checkedSpots || []
  const mySpots    = sakuraSpots.filter(s => checkedIds.includes(s.id))

  /* 推荐行程 — 完成 */
  const completedSet = new Set(user?.completedActivities || [])

  /* 推荐行程 — 移除 (localStorage) */
  const [removedActs, setRemovedActs] = useState(() => loadSet(REMOVED_KEY))

  /* 推荐行程 — 自定义活动 (localStorage) */
  const [customActs, setCustomActs] = useState(() => loadObj(CUSTOM_KEY))

  /* ── 推荐行程操作 ── */
  const handleToggle = (key) => {
    if (removedActs.has(key)) return
    const wasDone = completedSet.has(key)
    toggleActivity(key)
    if (!wasDone) addXP(20)
  }

  const removeAct = (key, e) => {
    e.stopPropagation()
    const next = new Set(removedActs); next.add(key)
    setRemovedActs(next); saveSet(REMOVED_KEY, next)
  }

  const restoreAll = () => {
    setRemovedActs(new Set()); localStorage.removeItem(REMOVED_KEY)
  }

  /* ── 从清单加入今日 ── */
  const dayCustom = (dayNum) => customActs[String(dayNum)] || []

  const addSpotToDay = (spot) => {
    const id    = `custom-${spot.id}-d${activeDay}`
    const dk    = String(activeDay)
    const exist = customActs[dk] || []
    if (exist.some(a => a.id === id)) return
    const next = { ...customActs, [dk]: [...exist, { id, icon: spot.emoji, text: `${spot.name}（${spot.district}）`, time: '自定义', spotId: spot.id }] }
    setCustomActs(next); saveObj(CUSTOM_KEY, next)
    setShowAdd(false)
  }

  const removeCustomAct = (actId, e) => {
    e.stopPropagation()
    const dk   = String(activeDay)
    const next = { ...customActs, [dk]: (customActs[dk] || []).filter(a => a.id !== actId) }
    setCustomActs(next); saveObj(CUSTOM_KEY, next)
  }

  /* ── 统计（推荐行程） ── */
  const totalAll     = itineraryDays.reduce((a, d) => a + d.activities.filter((_, i) => !removedActs.has(`${d.day}-${i}`)).length, 0)
  const completedAll = itineraryDays.reduce((a, d) => a + d.activities.filter((_, i) => !removedActs.has(`${d.day}-${i}`) && completedSet.has(`${d.day}-${i}`)).length, 0)
  const hasRemoved   = removedActs.size > 0

  /* 当前天可加景点（未加过） */
  const addableSpots = mySpots.filter(s => !dayCustom(activeDay).some(a => a.spotId === s.id))

  return (
    <div className="plan-page">
      {/* ── 顶部 Header ── */}
      <div className="plan-header">
        <h2 className="page-title">我的行程 📅</h2>
        <p className="page-sub">打卡景点 · 规划路线 · 记录足迹</p>
        <div className="plan-mode-tabs">
          <button className={`pmt-btn ${mode === 'myplan' ? 'active' : ''}`} onClick={() => setMode('myplan')}>
            🗺️ 我的清单
            {mySpots.length > 0 && <span className="pmt-count">{mySpots.length}</span>}
          </button>
          <button className={`pmt-btn ${mode === 'template' ? 'active' : ''}`} onClick={() => setMode('template')}>
            📋 推荐行程
            {completedAll > 0 && <span className="pmt-count pmt-green">{completedAll}/{totalAll}</span>}
          </button>
        </div>
      </div>

      {/* ════════════ 我的清单 ════════════ */}
      {mode === 'myplan' && (
        <div className="myplan-section">
          {mySpots.length === 0 ? (
            <div className="myplan-empty">
              <div className="mpe-icon">🗺️</div>
              <div className="mpe-title">还没有加入景点</div>
              <div className="mpe-sub">去「赏樱地」页面点击「加入我的行程」<br />景点就会出现在这里</div>
              <button className="mpe-goto-btn" onClick={() => setActiveTab?.('spots')}>
                去选景点 🌸
              </button>
            </div>
          ) : (
            <>
              <div className="myplan-progress">
                <div className="mpp-text">
                  <span>已加入 {mySpots.length} 个景点</span>
                  <span className="mpp-xp">🌟 共 {mySpots.reduce((a, s) => a + s.xp, 0)} XP</span>
                </div>
                <div className="mpp-dots">
                  {mySpots.map(s => <div key={s.id} className="mpp-dot" style={{ background: s.color }} />)}
                </div>
              </div>

              <div className="myplan-list">
                {mySpots.map((spot, idx) => (
                  <div key={spot.id} className="myspot-card">
                    <div className="msc-timeline">
                      <div className="msc-num" style={{ background: spot.color }}>{idx + 1}</div>
                      {idx < mySpots.length - 1 && <div className="msc-line" />}
                    </div>
                    <div className="msc-body">
                      <div className="msc-card">
                        <div className="msc-head">
                          <div className="msc-emoji-wrap" style={{ background: spot.color + '22' }}>
                            <span className="msc-emoji">{spot.emoji}</span>
                          </div>
                          <div className="msc-info">
                            <div className="msc-name">{spot.name}</div>
                            <div className="msc-district">📍 {spot.district}</div>
                          </div>
                          <button className="msc-remove" onClick={() => toggleSpot(spot.id)} title="从清单移除">✕</button>
                        </div>
                        <div className="msc-details">
                          <div className="msc-row"><span className="msc-icon">🌸</span><span>{spot.peakTime}</span></div>
                          <div className="msc-row"><span className="msc-icon">🎫</span><span>{spot.ticket}</span></div>
                          <div className="msc-row"><span className="msc-icon">🚇</span><span>{spot.transport}</span></div>
                        </div>
                        <div className="msc-footer">
                          <span className="msc-xp" style={{ color: spot.color }}>+{spot.xp} XP</span>
                          {spot.isHot && <span className="msc-hot-badge">🔥 今日花期</span>}
                          <div className="msc-tags">
                            {spot.tags.slice(0, 2).map((t, i) => <span key={i} className="msc-tag">{t}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="myplan-add-btn" onClick={() => setActiveTab?.('spots')}>+ 继续添加景点</button>
            </>
          )}
        </div>
      )}

      {/* ════════════ 推荐行程 ════════════ */}
      {mode === 'template' && (
        <>
          {/* Day Tabs — 含进度环 */}
          <div className="day-tabs-scroll">
            {itineraryDays.map((day, di) => {
              const theme    = DAY_THEMES[di]
              const visible  = day.activities.filter((_, i) => !removedActs.has(`${day.day}-${i}`))
              const done     = visible.filter((_, i) => completedSet.has(`${day.day}-${visible.indexOf(visible[i])}`)).length
              // recalculate properly
              const doneN    = day.activities.filter((_, i) => !removedActs.has(`${day.day}-${i}`) && completedSet.has(`${day.day}-${i}`)).length
              const totalN   = day.activities.filter((_, i) => !removedActs.has(`${day.day}-${i}`)).length
              const pct      = totalN > 0 ? doneN / totalN : 0
              const isActive = activeDay === day.day
              return (
                <button
                  key={day.day}
                  className={`day-tab-card ${isActive ? 'active' : ''}`}
                  style={isActive ? { background: theme.gradient } : {}}
                  onClick={() => setActiveDay(day.day)}
                >
                  <div className="dtc-top">
                    <div className="dtc-day" style={isActive ? { color: 'rgba(255,255,255,0.85)' } : {}}>Day {day.day}</div>
                    {pct > 0 && !isActive && <div className="dtc-dot" style={{ background: theme.color }} />}
                  </div>
                  <div className="dtc-icon">{theme.icon}</div>
                  <div className="dtc-title" style={isActive ? { color: 'white' } : {}}>{day.title}</div>
                  {isActive && (
                    <div className="dtc-progress-text" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {doneN}/{totalN + (dayCustom(day.day).length)} 项
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Active Day 内容 */}
          {itineraryDays.map((day, di) => {
            if (activeDay !== day.day) return null
            const theme   = DAY_THEMES[di]
            const visible  = day.activities.filter((_, i) => !removedActs.has(`${day.day}-${i}`))
            const doneN   = day.activities.filter((_, i) => !removedActs.has(`${day.day}-${i}`) && completedSet.has(`${day.day}-${i}`)).length
            const totalN  = day.activities.filter((_, i) => !removedActs.has(`${day.day}-${i}`)).length + dayCustom(day.day).length
            const pct     = totalN > 0 ? doneN / totalN : 0

            return (
              <div key={day.day} className="day-content">
                {/* 天主题卡 */}
                <div className="day-hero-card" style={{ background: theme.gradient }}>
                  <div className="dhc-left">
                    <div className="dhc-label">Day {day.day}</div>
                    <div className="dhc-title">{day.title}</div>
                    <div className="dhc-sub">{doneN}/{totalN} 项已完成</div>
                  </div>
                  <ProgressRing pct={pct} size={56} stroke={5} />
                </div>

                {/* 恢复提示 */}
                {hasRemoved && (
                  <div className="restore-bar">
                    <span>部分活动已隐藏</span>
                    <button className="restore-btn" onClick={restoreAll}>恢复全部</button>
                  </div>
                )}

                {/* Timeline 活动 */}
                <div className="activities">
                  {day.activities.map((act, i) => {
                    const key  = `${day.day}-${i}`
                    const done = completedSet.has(key)
                    const gone = removedActs.has(key)
                    if (gone) return null
                    return (
                      <div key={i} className={`activity-card ${done ? 'done' : ''}`} onClick={() => handleToggle(key)}>
                        <div className="act-timeline">
                          <div className={`act-dot ${done ? 'done' : ''}`} style={done ? {} : { borderColor: theme.color + '66' }} />
                          {(i < day.activities.length - 1 || dayCustom(day.day).length > 0) && <div className="act-line" />}
                        </div>
                        <div className="act-body">
                          <div className="act-time">{act.time}</div>
                          <div className="act-card-inner">
                            <span className="act-icon">{act.icon}</span>
                            <span className="act-text">{act.text}</span>
                            <button
                              className="act-remove-btn"
                              onClick={(e) => removeAct(key, e)}
                              title="移除此活动"
                            >✕</button>
                            <div className={`act-check ${done ? 'done' : ''}`} style={!done ? { borderColor: theme.color + '66' } : {}}>
                              {done ? '✓' : '○'}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {/* 自定义活动（从景点加入的） */}
                  {dayCustom(day.day).map((act, i) => (
                    <div key={act.id} className="activity-card custom">
                      <div className="act-timeline">
                        <div className="act-dot custom" style={{ borderColor: theme.color, background: theme.color + '33' }} />
                        {i < dayCustom(day.day).length - 1 && <div className="act-line" />}
                      </div>
                      <div className="act-body">
                        <div className="act-time">{act.time}</div>
                        <div className="act-card-inner custom-act">
                          <span className="act-icon">{act.icon}</span>
                          <span className="act-text">{act.text}</span>
                          <span className="custom-badge">自定义</span>
                          <button className="act-remove-btn" onClick={(e) => removeCustomAct(act.id, e)}>✕</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* XP 条 */}
                <div className="day-xp-bar">🌟 完成今日行程获得 +250 XP</div>

                {/* 从清单加入 */}
                {mySpots.length > 0 && (
                  <div className="spots-add-section">
                    <button
                      className="sas-toggle"
                      onClick={() => setShowAdd(v => !v)}
                    >
                      <span>➕ 从我的清单加入今日</span>
                      <span className="sas-arrow">{showAdd ? '▲' : '▼'}</span>
                    </button>
                    {showAdd && (
                      <div className="sas-list">
                        {addableSpots.length === 0 ? (
                          <div className="sas-empty">当前清单景点已全部加入今天 ✓</div>
                        ) : (
                          addableSpots.map(spot => (
                            <button
                              key={spot.id}
                              className="sas-spot-btn"
                              onClick={() => addSpotToDay(spot)}
                            >
                              <span className="sas-emoji">{spot.emoji}</span>
                              <span className="sas-name">{spot.name}</span>
                              <span className="sas-add">+ 加入</span>
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
