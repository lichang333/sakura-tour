import { useState, useEffect, useRef } from 'react'
import { useCity } from '../context/CityContext'
import { useUser } from '../context/UserContext'
import { renderCityCard } from '../lib/shareCard'
import './TipsPage.css'

function loadPacked(cityId) {
  try { return JSON.parse(localStorage.getItem(`sakura_pack_${cityId}`) || '[]') } catch { return [] }
}

function loadTasted(cityId) {
  try { return JSON.parse(localStorage.getItem(`sakura_food_${cityId}`) || '[]') } catch { return [] }
}

export default function TipsPage({ goToSpot }) {
  const [expanded, setExpanded] = useState(null)
  const { currentCity } = useCity()
  const { user } = useUser()
  const [packed, setPacked] = useState(() => new Set(loadPacked(currentCity.id)))
  const [tasted, setTasted] = useState(() => new Set(loadTasted(currentCity.id)))
  const [shareImg, setShareImg] = useState(null)   // dataURL，弹层预览
  const [shareBusy, setShareBusy] = useState(false)
  const [shareToast, setShareToast] = useState('')
  const cardRef = useRef(null)                     // 生成的 canvas，供保存/分享复用

  const openShare = async () => {
    if (shareBusy) return
    setShareBusy(true)
    try {
      const cv = await renderCityCard(currentCity, user)
      cardRef.current = cv
      setShareImg(cv.toDataURL('image/png'))
    } catch {
      setShareToast('生成失败，请重试')
      setTimeout(() => setShareToast(''), 2000)
    } finally {
      setShareBusy(false)
    }
  }

  const cardBlob = () => new Promise(res => cardRef.current.toBlob(res, 'image/png'))
  const cardName = () => `${currentCity.name}攻略-SakuraTour.png`

  const saveCard = async () => {
    const blob = await cardBlob()
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = cardName()
    document.body.appendChild(a); a.click(); a.remove()
    setTimeout(() => URL.revokeObjectURL(a.href), 8000)
    setShareToast('已存图 · 长按图片可发给微信好友')
    setTimeout(() => setShareToast(''), 2500)
  }

  const shareCard = async () => {
    const blob = await cardBlob()
    const file = new File([blob], cardName(), { type: 'image/png' })
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: `${currentCity.name}攻略`, text: `${currentCity.tagline} —— ${currentCity.name}小城攻略` }); return }
      catch (e) { if (e.name === 'AbortError') return }
    }
    saveCard()
  }

  useEffect(() => {
    setPacked(new Set(loadPacked(currentCity.id)))
    setTasted(new Set(loadTasted(currentCity.id)))
  }, [currentCity.id])

  const togglePacked = (i) => {
    setPacked(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      localStorage.setItem(`sakura_pack_${currentCity.id}`, JSON.stringify([...next]))
      return next
    })
  }

  const toggleTasted = (i) => {
    setTasted(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      localStorage.setItem(`sakura_food_${currentCity.id}`, JSON.stringify([...next]))
      return next
    })
  }

  const { tips, foods, packList, seasonInfo } = currentCity

  /* ── 集章：景点章（含周边顺游，已抵达自动盖）+ 美食章（手动盖「尝」） ── */
  const visitedIds = new Set(user?.visitedSpots || [])
  const stampSpots = [...currentCity.spots, ...(currentCity.nearbySpots || [])]
  const spotStampCount = stampSpots.filter(s => visitedIds.has(s.id)).length
  const stampTotal     = stampSpots.length + foods.length
  const stampCollected = spotStampCount + tasted.size

  return (
    <div className="tips-page">
      <div className="tips-header">
        <div className="tips-head-row">
          <div>
            <h2 className="page-title">{currentCity.name}旅行攻略</h2>
            <p className="page-sub">知己知彼，玩得更爽</p>
          </div>
          <button className="share-card-btn" onClick={openShare} disabled={shareBusy}>
            {shareBusy ? '生成中…' : '📤 分享攻略卡'}
          </button>
        </div>
      </div>

      {/* Best Season */}
      <div className="bloom-card">
        <div className="bloom-header">
          <span className="bloom-icon">🗓️</span>
          <div>
            <div className="bloom-title">{seasonInfo.title}</div>
            <div className="bloom-sub">{seasonInfo.sub}</div>
          </div>
          <span className="live-badge">TIPS</span>
        </div>
        <div className="bloom-timeline">
          {seasonInfo.rows.map((row, i) => (
            <div key={i} className={`bt-item ${row.dot === 'peak' ? 'peak' : ''}`}>
              <div className={`bt-dot ${row.dot}`} />
              <div className="bt-info">
                <div className="bt-label">{row.label}</div>
                <div className="bt-date">{row.date}</div>
              </div>
              {row.badge && <div className="peak-badge">{row.badge}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* ── 集章点情报 ── */}
      <div className="section">
        <div className="pack-head">
          <h3 className="section-title">集章点情报</h3>
          <span className="pack-progress">已集 {stampCollected} / {stampTotal} 枚</span>
        </div>
        <p className="stamp-sub">抵达景点自动盖章 · 美食尝过后点击盖章</p>
        <div className="stamp-grid">
          {stampSpots.map(s => {
            const got = visitedIds.has(s.id)
            return (
              <button
                key={s.id}
                className={`stamp-cell ${got ? 'got' : ''}`}
                onClick={() => goToSpot?.(s.id)}
                title={got ? `已抵达 · ${s.name}` : `${s.transport}`}
              >
                <span className="stamp-seal">{got ? s.name.slice(0, 1) : s.emoji}</span>
                <span className="stamp-name">{s.name}</span>
                <span className={`stamp-hint ${got ? 'got' : ''}`}>{got ? '已抵达' : '去打卡 →'}</span>
              </button>
            )
          })}
          {foods.map((f, i) => {
            const got = tasted.has(i)
            return (
              <button
                key={`food-${i}`}
                className={`stamp-cell ${got ? 'got' : ''}`}
                onClick={() => toggleTasted(i)}
                title={f.desc}
              >
                <span className="stamp-seal">{got ? '尝' : f.emoji}</span>
                <span className="stamp-name">{f.name}</span>
                <span className={`stamp-hint ${got ? 'got' : ''}`}>{got ? '已尝' : '尝过？盖章'}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tips Accordion */}
      <div className="section">
        <h3 className="section-title">旅行贴士</h3>
        <div className="tips-list">
          {tips.map((tip, i) => (
            <div key={i} className={`tip-card ${expanded === i ? 'open' : ''}`}>
              <button className="tip-header" onClick={() => setExpanded(expanded === i ? null : i)}>
                <span className="tip-icon">{tip.icon}</span>
                <span className="tip-title">{tip.title}</span>
                <span className="tip-arrow">{expanded === i ? '▲' : '▼'}</span>
              </button>
              {expanded === i && (
                <div className="tip-content">{tip.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Food Section — 点击盖「尝」章，与集章册同步 */}
      <div className="section">
        <div className="pack-head">
          <h3 className="section-title">必吃美食</h3>
          <span className="pack-progress">{tasted.size} / {foods.length} 已尝</span>
        </div>
        <div className="food-grid">
          {foods.map((food, i) => {
            const got = tasted.has(i)
            return (
              <button key={i} className={`food-card ${got ? 'tasted' : ''}`} onClick={() => toggleTasted(i)}>
                {got && <span className="food-stamp">尝</span>}
                <span className="food-emoji">{food.emoji}</span>
                <span className="food-name">{food.name}</span>
                <span className="food-desc">{food.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Packing List — checkable, persisted per city */}
      <div className="section">
        <div className="pack-head">
          <h3 className="section-title">行李清单</h3>
          <span className="pack-progress">{packed.size} / {packList.length} 已备</span>
        </div>
        <div className="pack-list">
          {packList.map((item, i) => {
            const done = packed.has(i)
            return (
              <button key={i} className={`pack-item ${done ? 'done' : ''}`} onClick={() => togglePacked(i)}>
                <span className="pack-icon">{item.icon}</span>
                <span className="pack-text">{item.text}</span>
                <span className={`pack-check ${done ? 'on' : ''}`}>{done ? '✓' : ''}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── 分享卡弹层 ── */}
      {shareImg && (
        <div className="share-mask" onClick={e => { if (e.target === e.currentTarget) setShareImg(null) }}>
          <div className="share-panel">
            <img className="share-preview" src={shareImg} alt={`${currentCity.name}攻略分享卡`} />
            <p className="share-hint">长按图片可直接发给微信好友，或</p>
            <div className="share-actions">
              <button className="share-act" onClick={saveCard}>保存图片</button>
              <button className="share-act primary" onClick={shareCard}>分享</button>
            </div>
            <button className="share-close" onClick={() => setShareImg(null)} aria-label="关闭">✕</button>
          </div>
        </div>
      )}
      {shareToast && <div className="share-toast">{shareToast}</div>}
    </div>
  )
}
