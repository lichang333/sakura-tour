import { useState, useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import './PlanPage.css'

/* ── 每天主题色 ── */
const DAY_THEMES = [
  { icon: '✈️', gradient: 'linear-gradient(150deg,#294B6B,#1B3346)', color: '#294B6B' },
  { icon: '🌊', gradient: 'linear-gradient(150deg,#3B6E86,#28495A)', color: '#3B6E86' },
  { icon: '⛰️', gradient: 'linear-gradient(150deg,#4E7A5E,#3A5B46)', color: '#4E7A5E' },
  { icon: '🏮', gradient: 'linear-gradient(150deg,#A9702F,#7E5222)', color: '#A9702F' },
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

/* ── localStorage helpers (custom acts only) ── */
function loadObj(key)    { try { return JSON.parse(localStorage.getItem(key) || '{}') } catch { return {} } }
function saveObj(key, o) { localStorage.setItem(key, JSON.stringify(o)) }

/* 旅行主题 emoji 选择器（点图标弹网格挑选，桌面/手机都可用） */
const EMOJI_CHOICES = ['✈️','🚄','🚗','🚕','🚌','🚲','🛵','⛴️','🚠','⛰️','🏔️','🗻','🌋','🏞️','🏕️','🏖️','🏝️','🏜️','🌅','🌄','🌊','🏯','🏰','⛩️','🛕','⛪','🏛️','🏘️','🏮','🎋','🎎','🌸','🌺','🌼','🌾','🌲','🍃','🐘','🦜','🕊️','🐎','🐟','🦋','🍜','🍲','🍵','☕','🍶','🍢','🥘','🍡','🍑','🔥','💦','♨️','🎫','📸','🎒','🗺️','🧭','🌙','⭐','🏆','📅']

function EmojiPopover({ onPick, onClose }) {
  return (
    <>
      <div className="emoji-backdrop" onClick={(e) => { e.stopPropagation(); onClose() }} />
      <div className="emoji-popover" onClick={e => e.stopPropagation()}>
        {EMOJI_CHOICES.map(em => (
          <button key={em} type="button" className="emoji-opt" onClick={() => onPick(em)}>{em}</button>
        ))}
      </div>
    </>
  )
}

export default function PlanPage({ setActiveTab, goToSpot }) {
  const [picker, setPicker] = useState(null)
  const [planPick, setPlanPick] = useState(null)   // 「排进行程」待选天的景点
  const [mode,      setMode]      = useState('template')
  const [activeDay, setActiveDay] = useState(1)
  const [editMode,  setEditMode]  = useState(false)

  const { user, toggleActivity, toggleSpot, toggleVisited, addXP, setCityItinerary } = useUser()
  const { currentCity } = useCity()

  // Per-city localStorage key (custom acts only)
  const CUSTOM_KEY  = `sakura_custom_acts_${currentCity.id}`

  const itineraryDays = currentCity.itineraryDays
  // 想去清单包含主景点 + 周边顺游
  const citySpots     = [...currentCity.spots, ...(currentCity.nearbySpots || [])]

  /* 我的清单 */
  const checkedIds  = user?.checkedSpots  || []
  const visitedIds  = new Set(user?.visitedSpots || [])
  const mySpots     = citySpots.filter(s => checkedIds.includes(s.id))

  /* 每日行程 — 完成状态（按活动 id 记录；内置活动 id = cityId:day-index，兼容旧数据） */
  const completedSet = new Set(user?.completedActivities || [])
  const removedActs  = new Set(user?.removedActivities || [])
  const [legacyCustom, setLegacyCustom] = useState(() => loadObj(CUSTOM_KEY))
  useEffect(() => { setLegacyCustom(loadObj(`sakura_custom_acts_${currentCity.id}`)) }, [currentCity.id])

  const cityId  = currentCity.id
  const makeKey = (day, i) => `${cityId}:${day}-${i}`

  /* ── 有效行程 ──
     优先用用户自定义覆盖（DB）；否则由内置行程合成（应用旧的隐藏/自定义活动），
     每条活动带稳定 id，一旦编辑就整体 fork 进账号覆盖，之后完全以覆盖为准。 */
  const override = user?.customItineraries?.[cityId] || null
  const isForked = !!override
  const defaultDays = () => itineraryDays.map(d => ({
    day: d.day,
    title: d.title,
    emoji: d.emoji,
    activities: [
      ...d.activities
        .map((a, i) => ({ id: makeKey(d.day, i), time: a.time, icon: a.icon, text: a.text, spotId: a.spotId ?? null }))
        .filter(a => !removedActs.has(a.id)),
      ...((legacyCustom[String(d.day)] || []).map(a => ({ id: a.id, time: a.time || '自定义', icon: a.icon, text: a.text, spotId: a.spotId ?? null }))),
    ],
  }))
  const days = isForked ? override : defaultDays()

  /* ── 编辑：任何结构性改动都 fork 当前视图到账号（DB） ── */
  const forkEdit = (mutate) => {
    const draft = JSON.parse(JSON.stringify(days))
    mutate(draft)
    setCityItinerary(cityId, draft)
  }
  const rid = (p) => `${cityId}:${p}-${Date.now()}-${Math.round(Math.random() * 1e4)}`
  const editDayTitle = (di, v)          => forkEdit(d => { d[di].title = v })
  const editDayEmoji = (di, v)          => forkEdit(d => { d[di].emoji = v })
  const editAct      = (di, ai, f, v)   => forkEdit(d => { d[di].activities[ai][f] = v })
  const addActRow    = (di)             => forkEdit(d => { d[di].activities.push({ id: rid('c'), time: '', icon: '📍', text: '', spotId: null }) })
  const delActRow    = (di, ai)         => forkEdit(d => { d[di].activities.splice(ai, 1) })
  const addSpotRow   = (di, spot)       => forkEdit(d => { d[di].activities.push({ id: rid('s'), time: '', icon: spot.emoji, text: `${spot.name}（${spot.district}）`, spotId: spot.id }) })
  const addDayRow    = ()               => forkEdit(d => { d.push({ day: d.length + 1, title: `Day ${d.length + 1} · 新的一天`, emoji: '📅', activities: [] }) })
  const delDayRow    = (di)             => forkEdit(d => { d.splice(di, 1); d.forEach((x, i) => { x.day = i + 1 }) })
  const resetItin    = () => { if (confirm('恢复为默认行程？你的自定义改动将清除。')) { setCityItinerary(cityId, null); setEditMode(false) } }

  /* 勾选活动：关联景点且未抵达则顺带盖章（+20XP）；取消只扣 XP、不撤销打卡 */
  const completeAct = (act, wasDone) => {
    const sid = act?.spotId
    if (!wasDone) { if (sid != null && !visitedIds.has(sid)) toggleVisited(sid, 20); else addXP(20) }
    else addXP(-20)
  }
  const toggleAct = (act) => {
    if (editMode) return
    const wasDone = completedSet.has(act.id)
    toggleActivity(act.id)
    completeAct(act, wasDone)
  }

  /* 统计 + 可加景点 */
  const allActs        = days.flatMap(d => d.activities)
  const totalAll       = allActs.length
  const completedAll   = allActs.filter(a => completedSet.has(a.id)).length
  const plannedSpotIds = new Set(allActs.map(a => a.spotId).filter(id => id != null))
  const addableSpots   = mySpots.filter(s => !plannedSpotIds.has(s.id) && !visitedIds.has(s.id))

  // 已 fork 时，默认行程里被删掉的活动 → 编辑器内可单独恢复（替代旧的「部分活动已隐藏」条）
  const forkedActIds    = new Set(allActs.map(a => a.id))
  const deletedDefaults = isForked
    ? itineraryDays.flatMap(d => d.activities.map((a, i) => ({ id: makeKey(d.day, i), icon: a.icon, text: a.text, spotId: a.spotId ?? null })))
        .filter(a => !forkedActIds.has(a.id))
    : []
  const restoreDefaultAct = (di, act) => forkEdit(d => { d[di].activities.push({ id: act.id, time: '', icon: act.icon, text: act.text, spotId: act.spotId }) })

  // 删天/切城后，当前选中天可能越界 → 钳回第一天
  useEffect(() => {
    if (days.length && !days.some(d => d.day === activeDay)) setActiveDay(days[0].day)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days.length, cityId])

  return (
    <div className="plan-page">
      {planPick && (
        <div className="plansheet-mask" onClick={() => setPlanPick(null)}>
          <div className="plansheet" onClick={e => e.stopPropagation()}>
            <div className="plansheet-title">把「{planPick.emoji} {planPick.name}」排进哪一天？</div>
            <div className="plansheet-days">
              {days.map((d, di) => (
                <button key={d.day} className="plansheet-day" onClick={() => {
                  addSpotRow(di, planPick)
                  setActiveDay(d.day)
                  setMode('template')
                  setPlanPick(null)
                }}>
                  <span className="psd-emoji">{d.emoji || '📅'}</span>
                  <span className="psd-label">Day {d.day}</span>
                  <span className="psd-title">{d.title.replace(/^Day \d+ ?·? ?/, '')}</span>
                  <span className="psd-count">{d.activities.length} 项</span>
                </button>
              ))}
            </div>
            <button className="plansheet-cancel" onClick={() => setPlanPick(null)}>取消</button>
          </div>
        </div>
      )}
      {/* ── 顶部 Header ── */}
      <div className="plan-header">
        <h2 className="page-title">我的行程</h2>
        <p className="page-sub">{currentCity.emoji} {currentCity.name} · 打卡景点 · 规划路线</p>
        <div className="plan-mode-tabs">
          <button className={`pmt-btn ${mode === 'template' ? 'active' : ''}`} onClick={() => setMode('template')}>
            每日行程
            {completedAll > 0 && <span className="pmt-count pmt-green">{completedAll}/{totalAll}</span>}
          </button>
          <button className={`pmt-btn ${mode === 'myplan' ? 'active' : ''}`} onClick={() => setMode('myplan')}>
            想去清单
            {mySpots.length > 0 && <span className="pmt-count">{mySpots.length}</span>}
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
              <div className="mpe-sub">去「景点」页面点击「加入我的行程」<br />景点就会出现在这里</div>
              <button className="mpe-goto-btn" onClick={() => setActiveTab?.('spots')}>
                去选景点 →
              </button>
            </div>
          ) : (
            <>
              <div className="myplan-progress">
                <div className="mpp-text">
                  <span>已加入 {mySpots.length} 个景点</span>
                  <span className="mpp-xp">共 {mySpots.reduce((a, s) => a + s.xp, 0)} XP</span>
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
                          <div className="msc-row"><span className="msc-icon">🗓️</span><span>{spot.peakTime}</span></div>
                          <div className="msc-row"><span className="msc-icon">🎫</span><span>{spot.ticket}</span></div>
                          <div className="msc-row"><span className="msc-icon">🚇</span><span>{spot.transport}</span></div>
                        </div>
                        <div className="msc-footer">
                          <span className="msc-xp" style={{ color: spot.color }}>+{spot.xp} XP</span>
                          {visitedIds.has(spot.id)
                            ? <span className="msc-visited-badge">✓ 已抵达</span>
                            : spot.isHot && <span className="msc-hot-badge">🔥 必去</span>
                          }
                          <div className="msc-tags">
                            {spot.tags.filter(t => t !== '必去').slice(0, 2).map((t, i) => <span key={i} className="msc-tag">{t}</span>)}
                          </div>
                          {!visitedIds.has(spot.id) && (
                            <button
                              className="msc-plan-btn"
                              onClick={() => setPlanPick(spot)}
                              title="把它排进某一天的行程"
                            >📅 排进行程</button>
                          )}
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

      {/* ════════════ 每日行程 ════════════ */}
      {mode === 'template' && (
        <>
          {/* 编辑开关 */}
          <div className="plan-edit-row">
            <button className={`plan-edit-toggle ${editMode ? 'on' : ''}`} onClick={() => setEditMode(v => !v)}>
              {editMode ? '✓ 完成编辑' : '✏️ 编辑行程'}
            </button>
            {editMode && isForked && (
              <button className="plan-reset-btn" onClick={resetItin}>↺ 恢复默认</button>
            )}
          </div>

          {/* Day Tabs — 含进度环 */}
          <div className="day-tabs-scroll">
            {days.map((day, di) => {
              const theme    = DAY_THEMES[di % DAY_THEMES.length]
              const totalN   = day.activities.length
              const doneN    = day.activities.filter(a => completedSet.has(a.id)).length
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
                  <div className="dtc-icon">{day.emoji || theme.icon}</div>
                  <div className="dtc-title" style={isActive ? { color: 'white' } : {}}>{day.title}</div>
                  {isActive && (
                    <div className="dtc-progress-text" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {doneN}/{totalN} 项
                    </div>
                  )}
                </button>
              )
            })}
            {editMode && (
              <button className="day-tab-card day-add-card" onClick={addDayRow}>
                <div className="dac-plus">＋</div>
                <div className="dac-label">加一天</div>
              </button>
            )}
          </div>

          {/* Active Day 内容 */}
          {days.map((day, di) => {
            if (activeDay !== day.day) return null
            const theme   = DAY_THEMES[di % DAY_THEMES.length]
            const totalN  = day.activities.length
            const doneN   = day.activities.filter(a => completedSet.has(a.id)).length
            const pct     = totalN > 0 ? doneN / totalN : 0

            return (
              <div key={day.day} className="day-content">
                {/* 天主题卡 */}
                <div className="day-hero-card" style={{ background: theme.gradient }}>
                  <div className="dhc-left">
                    <div className="dhc-label">Day {day.day}</div>
                    {editMode ? (
                      <div className="dhc-edit-row">
                        <span className="emoji-pick">
                          <button type="button" className="emoji-pick-btn"
                            onClick={(e) => { e.stopPropagation(); setPicker(p => (p && p.di === di && p.ai == null) ? null : { di, ai: null }) }}
                            aria-label="选择这一天的图标">
                            {day.emoji || theme.icon}
                          </button>
                          {picker && picker.di === di && picker.ai == null && (
                            <EmojiPopover onPick={(em) => { editDayEmoji(di, em); setPicker(null) }} onClose={() => setPicker(null)} />
                          )}
                        </span>
                        <input
                          className="dhc-title-input"
                          value={day.title}
                          onChange={e => editDayTitle(di, e.target.value)}
                          placeholder="这一天的标题"
                          maxLength={30}
                        />
                      </div>
                    ) : (
                      <div className="dhc-title">{day.title}</div>
                    )}
                    <div className="dhc-sub">{doneN}/{totalN} 项已完成</div>
                  </div>
                  <ProgressRing pct={pct} size={56} stroke={5} />
                </div>

                {/* Timeline 活动 */}
                <div className="activities">
                  {day.activities.length === 0 && !editMode && (
                    <div className="day-empty">这一天还没有安排，点上方「编辑行程」添加</div>
                  )}
                  {day.activities.map((act, i) => {
                    const done = completedSet.has(act.id)
                    return (
                      <div key={act.id} className={`activity-card ${done && !editMode ? 'done' : ''}`}
                        onClick={() => toggleAct(act)}>
                        <div className="act-timeline">
                          <div className={`act-dot ${done ? 'done' : ''}`} style={done ? {} : { borderColor: theme.color + '66' }} />
                          {i < day.activities.length - 1 && <div className="act-line" />}
                        </div>
                        <div className="act-body">
                          {!editMode && <div className="act-time">{act.time}</div>}
                          <div className="act-card-inner">
                            {editMode ? (
                              <>
                                <span className="emoji-pick">
                                  <button type="button" className="emoji-pick-btn"
                                    onClick={(e) => { e.stopPropagation(); setPicker(p => (p && p.di === di && p.ai === i) ? null : { di, ai: i }) }}
                                    aria-label="选择图标">
                                    {act.icon}
                                  </button>
                                  {picker && picker.di === di && picker.ai === i && (
                                    <EmojiPopover onPick={(em) => { editAct(di, i, 'icon', em); setPicker(null) }} onClose={() => setPicker(null)} />
                                  )}
                                </span>
                                <input
                                  className="act-text-input"
                                  value={act.text}
                                  onChange={e => editAct(di, i, 'text', e.target.value)}
                                  onClick={e => e.stopPropagation()}
                                  placeholder="活动内容"
                                  maxLength={40}
                                />
                                <button
                                  className="act-remove-btn"
                                  onClick={(e) => { e.stopPropagation(); delActRow(di, i) }}
                                  title="删除此活动"
                                >✕</button>
                              </>
                            ) : (
                              <>
                                <span className="act-icon">{act.icon}</span>
                                <span className="act-text">{act.text}</span>
                                {act.spotId != null && (
                                  <button
                                    className="act-spot-jump"
                                    onClick={(e) => { e.stopPropagation(); goToSpot?.(act.spotId) }}
                                    title="查看对应景点"
                                  >📍</button>
                                )}
                                <div className={`act-check ${done ? 'done' : ''}`} style={!done ? { borderColor: theme.color + '66' } : {}}>
                                  {done ? '✓' : '○'}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {editMode ? (
                  /* 编辑工具：加活动 / 从想去清单加 / 删除本天 */
                  <div className="edit-tools">
                    <button className="et-add-btn" onClick={() => addActRow(di)}>＋ 加一项活动</button>
                    {addableSpots.length > 0 && (
                      <div className="et-spots">
                        <div className="et-spots-label">从想去清单加入</div>
                        <div className="et-spots-list">
                          {addableSpots.map(spot => (
                            <button key={spot.id} className="et-spot-btn" onClick={() => addSpotRow(di, spot)}>
                              <span className="et-spot-emoji">{spot.emoji}</span>
                              <span className="et-spot-name">{spot.name}</span>
                              <span className="et-spot-add">＋</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {deletedDefaults.length > 0 && (
                      <div className="et-spots">
                        <div className="et-spots-label">恢复删掉的默认活动</div>
                        <div className="et-spots-list">
                          {deletedDefaults.map(act => (
                            <button key={act.id} className="et-spot-btn" onClick={() => restoreDefaultAct(di, act)}>
                              <span className="et-spot-emoji">{act.icon}</span>
                              <span className="et-spot-name">{act.text}</span>
                              <span className="et-spot-add">↺</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {days.length > 1 && (
                      <button className="et-del-day" onClick={() => { if (confirm(`删除 Day ${day.day}？这一天的活动会一并删除。`)) delDayRow(di) }}>
                        🗑 删除 Day {day.day}
                      </button>
                    )}
                  </div>
                ) : (
                  /* XP 条 */
                  totalN > 0 && <div className="day-xp-bar">🌟 完成今日行程获得 +250 XP</div>
                )}
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
