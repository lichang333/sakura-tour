import { useState, useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import { useReviews } from '../hooks/useReviews'
import './SpotsPage.css'

export const REC_TAGS = [
  { id: 'bloom',   label: '花开正好', emoji: '🌸' },
  { id: 'photo',   label: '拍照绝佳', emoji: '📸' },
  { id: 'quiet',   label: '人少清净', emoji: '😌' },
  { id: 'transit', label: '交通方便', emoji: '🚇' },
  { id: 'family',  label: '亲子友好', emoji: '👨‍👩‍👧' },
  { id: 'value',   label: '性价比高', emoji: '💰' },
]

const difficultyLabel = { easy: '轻松', medium: '一般', hard: '需体力' }
const difficultyColor = { easy: '#58CC02', medium: '#FFD900', hard: '#FF4B4B' }

const STAR_LABELS = ['', '很一般', '还不错', '值得去', '非常棒', '必须去！']

const formatReviewDate = (iso) => {
  if (!iso) return ''
  const d = new Date(iso)
  const now = new Date()
  const diff = now - d
  const mins  = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days  = Math.floor(diff / 86400000)
  if (mins  <  1) return '刚刚'
  if (mins  < 60) return `${mins}分钟前`
  if (hours < 24) return `${hours}小时前`
  if (days  <  7) return `${days}天前`
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
}

/* ── 星级选择器 ── */
function StarRating({ spotId, current, onRate }) {
  const [hover, setHover] = useState(0)
  const active = hover || current
  return (
    <div className="star-rating-row">
      <span className="star-label-text">
        {active ? STAR_LABELS[active] : '点击评分'}
      </span>
      <div className="stars">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            className={`star-btn ${n <= active ? 'lit' : ''}`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onRate(n === current ? 0 : n)}
            aria-label={`${n}星`}
          >★</button>
        ))}
      </div>
    </div>
  )
}

export default function SpotsPage({ pendingSpot, clearPendingSpot }) {
  const [selected,      setSelected]      = useState(null)
  const [reviewDraft,   setReviewDraft]   = useState('')
  const [reviewSaved,   setReviewSaved]   = useState(false)
  const { user, toggleSpot, toggleVisited, rateSpot, reviewSpot, addXP, toggleRecommend } = useUser()
  const { currentCity } = useCity()
  const { communityData, refresh: refreshReviews } = useReviews()

  // Navigate to spot detail when coming from Profile page
  useEffect(() => {
    if (pendingSpot != null) {
      setSelected(pendingSpot)
      clearPendingSpot?.()
    }
  }, [pendingSpot])

  const spots = currentCity.spots
  const nearby = currentCity.nearbySpots

  const checkedIds  = new Set(user?.checkedSpots  || [])
  const visitedIds  = new Set(user?.visitedSpots  || [])

  const recommendedIds = new Map(
    (user?.recommendedSpots || []).map(r =>
      typeof r === 'object' ? [r.id, r] : [r, { id: r, tag: null }]
    )
  )

  const handleRecommend = (spotId, tag) => {
    toggleRecommend(spotId, tag)
    refreshReviews()
  }

  const handleCheckBtn = (id, e) => {
    e.stopPropagation()
    const wasChecked  = checkedIds.has(id)
    const wasVisited  = visitedIds.has(id)
    const spot = spots.find(s => s.id === id)

    if (wasVisited) {
      // 去过 → 清除（取消去过 + 取消想去，扣减 XP）
      toggleVisited(id, spot?.xp || 0)
      toggleSpot(id)   // remove from checkedSpots too
    } else if (wasChecked) {
      // 想去 → 去过（合并 XP，避免两次 syncUser 竞态）
      if (!wasVisited) {
        toggleVisited(id, spot?.xp || 0)
      }
    } else {
      // 未加入 → 想去
      toggleSpot(id)
    }
  }

  const handleVisitedBtn = (id, e) => {
    e?.stopPropagation()
    const wasVisited = visitedIds.has(id)
    const spot = spots.find(s => s.id === id)
    // 合并 XP 进同一个 syncUser，避免两次 PATCH 竞态覆盖 visited_spots
    toggleVisited(id, spot?.xp || 0)
  }

  /* ── 三态按钮渲染 ── */
  const SpotStateBtn = ({ id, style = {} }) => {
    const visited = visitedIds.has(id)
    const checked = checkedIds.has(id)

    if (visited) return (
      <button
        className="check-btn visited"
        style={{ background: '#58CC02', borderColor: '#58CC02', ...style }}
        onClick={(e) => handleCheckBtn(id, e)}
        title="点击取消"
      >✈️</button>
    )
    if (checked) return (
      <button
        className="check-btn done"
        style={{ background: 'transparent', borderColor: '#1CB0F6', color: '#1CB0F6', ...style }}
        onClick={(e) => handleCheckBtn(id, e)}
        title="点击标记去过"
      >♡</button>
    )
    return (
      <button
        className="check-btn"
        style={{ background: 'transparent', borderColor: '#DDD', ...style }}
        onClick={(e) => handleCheckBtn(id, e)}
        title="加入行程"
      >+</button>
    )
  }

  if (selected !== null) {
    const spot = spots.find(s => s.id === selected)
    if (!spot) { setSelected(null); return null }
    const isVisited      = visitedIds.has(spot.id)
    const isChecked      = checkedIds.has(spot.id)
    const myRating       = (user?.spotRatings  || {})[String(spot.id)] || 0
    const reviewObj      = (user?.spotReviews  || {})[String(spot.id)]
    const savedReview    = typeof reviewObj === 'string' ? reviewObj : (reviewObj?.text || '')

    // Community data for this spot
    const community   = communityData[String(spot.id)] || { avgRating: 0, ratingCount: 0, reviews: [], recommendCount: 0, recommenders: [], topTag: null }
    // Filter out own review from community list to avoid duplicate
    const otherReviews = community.reviews.filter(r => r.name !== user?.name)
    // Recommend state
    const myRec = recommendedIds.get(spot.id)

    const handleSaveReview = () => {
      reviewSpot(spot.id, reviewDraft)
      setReviewSaved(true)
      setTimeout(() => { setReviewSaved(false); refreshReviews() }, 1500)
    }

    return (
      <div className="spots-page">
        <div className="spot-detail">
          <button className="back-btn" onClick={() => { setSelected(null); setReviewDraft(''); setReviewSaved(false) }}>← 返回</button>
          <div className="detail-hero" style={{ background: `linear-gradient(135deg, ${spot.color}CC, ${spot.color}88)` }}>
            {spot.isHot && <div className="detail-hot-banner">🔥 今日正值花期！</div>}
            {isVisited && <div className="detail-visited-banner">✈️ 你已去过这里</div>}
            <div className="detail-emoji">{spot.emoji}</div>
            <h1 className="detail-name">{spot.name}</h1>
            <p className="detail-name-en">{spot.nameEn}</p>
            <div className="detail-district">{spot.district}</div>
          </div>

          <div className="detail-body">
            <div className="detail-stats">
              <div className="detail-stat">
                <span className="ds-icon">⭐</span>
                <span className="ds-val">
                  {community.ratingCount > 0 ? community.avgRating : spot.rating}
                </span>
                <span className="ds-sub">
                  {community.ratingCount > 0
                    ? `${community.ratingCount}人评分`
                    : `${spot.reviews}评`}
                </span>
              </div>
              <div className="detail-stat">
                <span className="ds-icon">📅</span>
                <span className="ds-val" style={{ fontSize: 12 }}>{spot.peakDays}</span>
                <span className="ds-sub">最佳花期</span>
              </div>
              <div className="detail-stat">
                <span className="ds-icon">🎫</span>
                <span className="ds-val" style={{ fontSize: 12 }}>{spot.ticket}</span>
                <span className="ds-sub">门票</span>
              </div>
            </div>

            <div className="detail-tags">
              {spot.tags.map(t => (
                <span key={t} className="detail-tag" style={{ background: `${spot.color}22`, color: spot.color }}>{t}</span>
              ))}
            </div>

            <div className="detail-section">
              <h3>关于这里</h3>
              <p>{spot.description}</p>
            </div>

            <div className="detail-section tip-box">
              <h3>💡 小贴士</h3>
              <p>{spot.tips}</p>
            </div>

            <div className="detail-section">
              <h3>🚇 交通</h3>
              <p>{spot.transport}</p>
            </div>

            {isVisited ? (
              <div className="xp-reward earned">
                <span>✓ 已获得</span>
                <span className="xp-amount earned-amount">+{spot.xp} XP</span>
                <span>🌟</span>
              </div>
            ) : (
              <div className="xp-reward" style={{ borderColor: spot.color }}>
                <span>打卡获得</span>
                <span className="xp-amount" style={{ color: spot.color }}>+{spot.xp} XP</span>
                <span>🌟</span>
              </div>
            )}

            {/* 加入行程按钮 */}
            <button
              className="checkin-btn"
              style={{
                background: isChecked ? (isVisited ? '#58CC02' : '#1CB0F6') : spot.color,
                boxShadow: `0 4px 0 ${isChecked ? (isVisited ? '#46A302' : '#0E86BB') : spot.color}AA`
              }}
              onClick={() => { if (!isChecked) { toggleSpot(spot.id) } }}
            >
              {isVisited ? '✈️ 已去过' : isChecked ? '♡ 已加入行程' : '加入我的行程 +'}
            </button>

            {/* Recommend Section — unified card, only shown after visiting */}
            {isVisited && (
              <div className={`rec-card ${myRec ? 'active' : ''}`}>
                <div className="rec-card-header">
                  <span className="rec-card-icon">{myRec ? '✅' : '👍'}</span>
                  <div className="rec-card-texts">
                    <span className="rec-card-title">{myRec ? '已推荐给朋友' : '推荐给朋友'}</span>
                    <span className="rec-card-sub">
                      {myRec
                        ? (myRec.tag
                            ? `${REC_TAGS.find(t => t.id === myRec.tag)?.emoji} ${REC_TAGS.find(t => t.id === myRec.tag)?.label}`
                            : '感谢你的推荐！')
                        : '选个理由让朋友更了解这里'}
                    </span>
                  </div>
                  {myRec && (
                    <button className="rec-cancel-btn"
                      onClick={() => handleRecommend(spot.id, myRec.tag)}>
                      取消
                    </button>
                  )}
                </div>

                {!myRec && (
                  <>
                    <div className="rec-tag-grid">
                      {REC_TAGS.map(t => (
                        <button key={t.id} className="rec-tag-btn"
                          onClick={() => handleRecommend(spot.id, t.id)}>
                          {t.emoji} {t.label}
                        </button>
                      ))}
                    </div>
                    <button className="rec-tag-skip"
                      onClick={() => handleRecommend(spot.id, null)}>
                      直接推荐 →
                    </button>
                  </>
                )}

                {community.recommendCount > 0 && (
                  <div className="rec-community-row">
                    <div className="rec-chips">
                      {community.recommenders.slice(0, 5).map((r, i) => (
                        <div key={i} className="rec-chip">
                          <span className="rec-chip-avatar">{r.avatar}</span>
                          {r.tag && <span className="rec-chip-tag">
                            {REC_TAGS.find(t => t.id === r.tag)?.emoji}
                          </span>}
                        </div>
                      ))}
                      {community.recommendCount > 5 && (
                        <span className="rec-chip-more">+{community.recommendCount - 5}</span>
                      )}
                    </div>
                    <span className="rec-community-label">
                      {community.recommendCount} 位旅行者推荐
                      {community.topTag && ` · ${REC_TAGS.find(t => t.id === community.topTag)?.label}`}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* 去过按钮 */}
            {isVisited ? (
              <div className="visited-done">
                <div className="visited-done-main">
                  <span className="visited-done-check">✅</span>
                  <span className="visited-done-text">已打卡！</span>
                </div>
                <button className="visited-cancel-btn" onClick={() => handleVisitedBtn(spot.id)}>
                  取消打卡
                </button>
              </div>
            ) : (
              <button
                className="visited-btn"
                style={{ boxShadow: '0 4px 0 #b8325a' }}
                onClick={() => handleVisitedBtn(spot.id)}
              >
                <span className="visited-btn-icon">✈️</span>
                <span>我去过这里</span>
              </button>
            )}

            {/* 社区评价列表 */}
            {community.reviews.length > 0 && (
              <div className="community-reviews">
                <h3 className="cr-title">旅行者评价 ({community.reviews.length})</h3>
                {community.reviews.map((r, i) => (
                  <div key={i} className={`cr-item ${r.name === user?.name ? 'cr-mine' : ''}`}>
                    <div className="cr-header">
                      <span className="cr-avatar">{r.avatar}</span>
                      <span className="cr-name">{r.name === user?.name ? '我' : r.name}</span>
                      {r.rating > 0 && (
                        <span className="cr-stars">
                          {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                        </span>
                      )}
                      {r.at && <span className="cr-date">{formatReviewDate(r.at)}</span>}
                    </div>
                    {r.text && <div className="cr-text">「{r.text}」</div>}
                  </div>
                ))}
              </div>
            )}

            {/* 评分 + 评价 — 仅去过后显示 */}
            {isVisited && (
              <div className="rating-section">
                <div className="rating-title">你的评价 ✍️</div>

                {/* 星级 */}
                <StarRating
                  spotId={spot.id}
                  current={myRating}
                  onRate={(r) => rateSpot(spot.id, r)}
                />

                {/* 文字评价 */}
                <div className="review-box">
                  <textarea
                    className="review-input"
                    placeholder="写下你的感受…（可选）"
                    maxLength={200}
                    defaultValue={savedReview}
                    onChange={e => { setReviewDraft(e.target.value); setReviewSaved(false) }}
                    onFocus={e => { if (!reviewDraft) setReviewDraft(savedReview) }}
                    rows={3}
                  />
                  <div className="review-footer">
                    <span className="review-hint">{(reviewDraft || savedReview).length}/200</span>
                    <button
                      className={`review-save-btn ${reviewSaved ? 'saved' : ''}`}
                      onClick={handleSaveReview}
                    >
                      {reviewSaved ? '✓ 已保存' : '保存'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="spots-page">
      <div className="spots-header">
        <h2 className="page-title">{currentCity.name}赏樱地图 🌸</h2>
        <p className="page-sub">{spots.length}个精选赏樱点位，总有一款适合你</p>
        <div className="progress-mini">
          <div className="pm-row">
            <span>想去 {[...checkedIds].filter(id => spots.some(s => s.id === id)).length}</span>
            <span className="pm-sep">·</span>
            <span>去过 {[...visitedIds].filter(id => spots.some(s => s.id === id)).length}/{spots.length}</span>
          </div>
          <div className="pm-bar">
            <div className="pm-fill visited-fill"
              style={{ width: `${([...visitedIds].filter(id => spots.some(s => s.id === id)).length / spots.length) * 100}%` }} />
            <div className="pm-fill want-fill"
              style={{ width: `${([...checkedIds].filter(id => spots.some(s => s.id === id) && !visitedIds.has(id)).length / spots.length) * 100}%` }} />
          </div>
          <div className="pm-legend">
            <span><span className="pm-dot green" />去过</span>
            <span><span className="pm-dot blue" />想去</span>
          </div>
        </div>
      </div>

      {/* Today's Pick */}
      {spots.some(s => s.isHot) && (
        <div className="today-banner">
          <span className="tb-dot" />
          <span>{spots.find(s => s.isHot)?.name} 现正值花期 — 近期前往正是时候！</span>
        </div>
      )}

      <div className="spots-list">
        {spots.map(spot => {
          const visited = visitedIds.has(spot.id)
          const checked = checkedIds.has(spot.id)
          return (
            <div
              key={spot.id}
              className={`spot-card ${visited ? 'visited' : checked ? 'checked' : ''} ${spot.isHot ? 'hot' : ''}`}
              onClick={() => setSelected(spot.id)}
              style={{ '--spot-color': spot.color }}
            >
              {spot.isHot && !visited && <div className="hot-ribbon">🔥 今日花开</div>}
              {visited && <div className="visited-ribbon">✈️ 去过</div>}
              <div className="spot-left">
                <div className="spot-emoji-wrap" style={{ background: `${spot.color}22` }}>
                  <span className="spot-emoji">{spot.emoji}</span>
                </div>
              </div>
              <div className="spot-info">
                <div className="spot-name-row">
                  <span className="spot-name">{spot.name}</span>
                  <span className="spot-district">{spot.district}</span>
                </div>
                <div className="spot-peak">🌸 {spot.peakTime}</div>
                <div className="spot-ticket">🎫 {spot.ticket}</div>
                <div className="spot-tags">
                  {spot.tags.slice(0, 2).map(t => (
                    <span key={t} className="spot-tag" style={{ background: `${spot.color}18`, color: spot.color }}>{t}</span>
                  ))}
                </div>
                <div className="spot-bottom">
                  <span className="spot-rating">
                    ⭐ {communityData[String(spot.id)]?.ratingCount > 0
                      ? communityData[String(spot.id)].avgRating
                      : spot.rating}
                  </span>
                  <span className="spot-diff" style={{ color: difficultyColor[spot.difficulty] }}>
                    {difficultyLabel[spot.difficulty]}
                  </span>
                  <span className="spot-xp">+{spot.xp} XP</span>
                </div>
                {communityData[String(spot.id)]?.recommendCount > 0 && (
                  <div className="card-rec-badge">
                    👍 {communityData[String(spot.id)].recommendCount}
                    {communityData[String(spot.id)].topTag && (
                      <span className="card-rec-tag">
                        {REC_TAGS.find(t => t.id === communityData[String(spot.id)].topTag)?.emoji}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <SpotStateBtn id={spot.id} />
            </div>
          )
        })}
      </div>

      {/* Nearby Spots */}
      {nearby && nearby.length > 0 && (
        <div className="nearby-section">
          <h3 className="nearby-title">📍 周边小众景点</h3>
          <p className="nearby-sub">适合有额外时间的朋友顺道一游</p>
          <div className="nearby-list">
            {nearby.map((s, i) => (
              <div key={i} className="nearby-card">
                <span className="nearby-emoji">{s.emoji}</span>
                <div className="nearby-info">
                  <div className="nearby-name">{s.name}</div>
                  <div className="nearby-desc">{s.desc}</div>
                  <div className="nearby-transport">🚇 {s.transport}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
