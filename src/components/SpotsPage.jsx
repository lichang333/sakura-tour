import { useState, useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useCity } from '../context/CityContext'
import { useReviews } from '../hooks/useReviews'
import { compressImage } from '../utils/image'
import { navToAmap } from '../utils/amapNav'
import './SpotsPage.css'

export const REC_TAGS = [
  { id: 'scenery', label: '风景绝美', emoji: '🏔️' },
  { id: 'photo',   label: '拍照绝佳', emoji: '📸' },
  { id: 'quiet',   label: '人少清净', emoji: '😌' },
  { id: 'transit', label: '交通方便', emoji: '🚇' },
  { id: 'family',  label: '亲子友好', emoji: '👨‍👩‍👧' },
  { id: 'value',   label: '性价比高', emoji: '💰' },
]

const difficultyLabel = { easy: '轻松', medium: '一般', hard: '需体力' }
const difficultyColor = { easy: 'var(--jade)', medium: 'var(--copper)', hard: '#B4472F' }

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

export default function SpotsPage({ pendingSpot, clearPendingSpot, openMap, detailOrigin, onDetailBack, clearOrigin }) {
  const [selected,      setSelected]      = useState(null)
  // 「只看未去」筛选 —— 记住选择，刷新不丢（视图偏好存本机）
  const [hideVisited, setHideVisited] = useState(() => localStorage.getItem('sakura_only_unvisited') === '1')
  const toggleHideVisited = () => setHideVisited(v => {
    const next = !v
    localStorage.setItem('sakura_only_unvisited', next ? '1' : '0')
    return next
  })
  const [reviewDraft,   setReviewDraft]   = useState('')
  const [reviewSaved,   setReviewSaved]   = useState(false)
  const [uploadingPhoto, setUploadingPhoto] = useState(false)
  const [photoErr,       setPhotoErr]       = useState('')
  const { user, toggleSpot, toggleVisited, clearSpot, rateSpot, reviewSpot, addXP, toggleRecommend, addSpotPhoto, removeSpotPhoto } = useUser()
  const { currentCity } = useCity()
  const { communityData, refresh: refreshReviews } = useReviews()

  // Navigate to spot detail when coming from Profile page
  useEffect(() => {
    if (pendingSpot != null) {
      setSelected(pendingSpot)
      clearPendingSpot?.()
    }
  }, [pendingSpot])

  // 打开景点详情时，把已保存的游记填进草稿（受控输入，
  // 否则直接点保存会把旧游记以空字符串覆盖删除）
  useEffect(() => {
    if (selected == null) return
    const obj = (user?.spotReviews || {})[String(selected)]
    setReviewDraft(typeof obj === 'string' ? obj : (obj?.text || ''))
    setReviewSaved(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const spots = currentCity.spots
  const nearby = currentCity.nearbySpots || []
  // 周边顺游也可想去/打卡：查找与操作都走合并列表
  const allCitySpots = [...spots, ...nearby]

  const checkedIds  = new Set(user?.checkedSpots  || [])
  const visitedIds  = new Set(user?.visitedSpots  || [])

  // 「只看未去」筛选：开启时收起已抵达的景点（默认全显示，保留集章成就感）
  const visitedCount  = spots.filter(s => visitedIds.has(s.id)).length
  const visibleSpots  = hideVisited ? spots.filter(s => !visitedIds.has(s.id)) : spots
  const visibleNearby = hideVisited ? nearby.filter(s => !visitedIds.has(s.id)) : nearby

  const recommendedIds = new Map(
    (user?.recommendedSpots || []).map(r =>
      typeof r === 'object' ? [r.id, r] : [r, { id: r, tag: null }]
    )
  )

  const handleRecommend = (spotId, tag) => {
    // 等 PATCH 落库后再刷新社区数据，否则拉到的还是旧计数
    Promise.resolve(toggleRecommend(spotId, tag)).then(() => refreshReviews())
  }

  const handleCheckBtn = (id, e) => {
    e.stopPropagation()
    const wasChecked  = checkedIds.has(id)
    const wasVisited  = visitedIds.has(id)
    const spot = allCitySpots.find(s => s.id === id)

    if (wasVisited) {
      // 去过 → 清除（取消去过 + 移出想去 + 扣减 XP，单次 PATCH）
      clearSpot(id, spot?.xp || 0)
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
    const spot = allCitySpots.find(s => s.id === id)
    // 合并 XP 进同一个 syncUser，避免两次 PATCH 竞态覆盖 visited_spots
    toggleVisited(id, spot?.xp || 0)
  }

  /* ── 三态按钮渲染 ── */
  /* 盖章式三态：未加入（描边「想去」）→ 想去（实心靛蓝）→ 已抵达（铜色圆印） */
  const SpotStateBtn = ({ id }) => {
    const visited = visitedIds.has(id)
    const checked = checkedIds.has(id)

    if (visited) return (
      <button
        className="check-btn visited"
        onClick={(e) => handleCheckBtn(id, e)}
        title="已抵达 · 点击清除"
      >抵</button>
    )
    if (checked) return (
      <button
        className="check-btn done"
        onClick={(e) => handleCheckBtn(id, e)}
        title="想去 · 点击标记已抵达"
      >♡ 想去</button>
    )
    return (
      <button
        className="check-btn"
        onClick={(e) => handleCheckBtn(id, e)}
        title="加入想去清单"
      >＋ 想去</button>
    )
  }

  if (selected !== null) {
    const spot = allCitySpots.find(s => s.id === selected)
    if (!spot) { setSelected(null); return null }
    const isVisited      = visitedIds.has(spot.id)
    const isChecked      = checkedIds.has(spot.id)
    const myRating       = (user?.spotRatings  || {})[String(spot.id)] || 0
    const reviewObj      = (user?.spotReviews  || {})[String(spot.id)]
    const savedReview    = typeof reviewObj === 'string' ? reviewObj : (reviewObj?.text || '')
    const myPhotos       = (user?.spotPhotos   || {})[String(spot.id)] || []

    // Community data for this spot
    const community   = communityData[String(spot.id)] || { avgRating: 0, ratingCount: 0, reviews: [], recommendCount: 0, recommenders: [], topTag: null }
    // Filter out own review from community list to avoid duplicate
    const otherReviews = community.reviews.filter(r => r.userId !== user?.id)
    // Recommend state
    const myRec = recommendedIds.get(spot.id)

    const handleSaveReview = () => {
      reviewSpot(spot.id, reviewDraft)
      setReviewSaved(true)
      setTimeout(() => { setReviewSaved(false); refreshReviews() }, 1500)
    }

    const handleAddPhoto = async (e) => {
      const file = e.target.files?.[0]
      e.target.value = ''            // allow re-selecting the same file
      if (!file) return
      setPhotoErr('')
      setUploadingPhoto(true)
      try {
        const dataUrl = await compressImage(file)
        await addSpotPhoto(spot.id, dataUrl)
      } catch (err) {
        setPhotoErr(err.message || '上传失败')
      } finally {
        setUploadingPhoto(false)
      }
    }

    return (
      <div className="spots-page">
        <div className="spot-detail">
          <button className="back-btn" onClick={() => {
            setSelected(null); setReviewDraft(''); setReviewSaved(false)
            // 从地图点进来的，返回地图而非列表
            if (detailOrigin === 'map') onDetailBack?.()
          }}>← 返回</button>
          <div className="detail-hero" style={{ background: `linear-gradient(155deg, ${spot.color} -20%, #16283A 120%)` }}>
            <div className="detail-chips">
              {spot.isHot && <span className="detail-chip must">必去</span>}
              {isVisited && <span className="detail-chip arrived">已抵达</span>}
            </div>
            <div className="detail-emoji" aria-hidden="true">{spot.emoji}</div>
            <div className="detail-cap">
              <div className="detail-eyebrow">{spot.district} · {spot.nameEn}</div>
              <h1 className="detail-name">{spot.name}</h1>
            </div>
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
                <span className="ds-sub">最佳季节</span>
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
              <h3>小贴士</h3>
              <p>{spot.tips}</p>
            </div>

            <div className="detail-section">
              <h3>🚇 交通</h3>
              <p>{spot.transport}</p>
              {spot.lat && spot.lng && (
                /* Scheme 直接唤起高德 App，未装 2 秒后回退 H5（见 utils/amapNav） */
                <button className="nav-amap-btn" onClick={() => navToAmap(spot)}>
                  🧭 高德导航去这里
                </button>
              )}
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
                background: isVisited ? 'var(--jade)' : 'var(--indigo)',
                boxShadow: `0 3px 0 ${isVisited ? '#3C6350' : 'var(--indigo-deep)'}`
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
                  <span className="visited-done-seal">印</span>
                  <span className="visited-done-text">已抵达</span>
                </div>
                <button className="visited-cancel-btn" onClick={() => handleVisitedBtn(spot.id)}>
                  取消打卡
                </button>
              </div>
            ) : (
              <button
                className="visited-btn"
                style={{ boxShadow: '0 3px 0 var(--indigo-deep)' }}
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
                  <div key={i} className={`cr-item ${r.userId === user?.id ? 'cr-mine' : ''}`}>
                    <div className="cr-header">
                      <span className="cr-avatar">{r.avatar}</span>
                      <span className="cr-name">{r.userId === user?.id ? '我' : r.name}</span>
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

            {/* 打卡纪念 — 仅去过后显示 */}
            {isVisited && (
              <div className="rating-section">
                <div className="mem-head">
                  <div className="mem-seal" aria-hidden="true">已<br />抵达</div>
                  <div className="mem-head-info">
                    <div className="rating-title">我的旅行记忆</div>
                    {(typeof reviewObj === 'object' && reviewObj?.at) && (
                      <div className="mem-date">{formatReviewDate(reviewObj.at)} 记</div>
                    )}
                  </div>
                </div>

                {/* 星级 */}
                <StarRating
                  spotId={spot.id}
                  current={myRating}
                  onRate={(r) => rateSpot(spot.id, r)}
                />

                {/* 照片纪念 */}
                <div className="photo-memory">
                  <div className="pm-label">旅行照片 {myPhotos.length > 0 && <span className="pm-count">{myPhotos.length}/9</span>}</div>
                  <div className="photo-grid">
                    {myPhotos.map(url => (
                      <div key={url} className="photo-thumb">
                        <img src={url} alt="旅行照片" loading="lazy" />
                        <button
                          className="photo-del"
                          onClick={() => removeSpotPhoto(spot.id, url)}
                          aria-label="删除照片"
                        >×</button>
                      </div>
                    ))}
                    {myPhotos.length < 9 && (
                      <label className={`photo-add ${uploadingPhoto ? 'uploading' : ''}`}>
                        {uploadingPhoto ? <span className="photo-spinner">⏳</span> : <span className="photo-add-plus">＋</span>}
                        <input type="file" accept="image/*" hidden disabled={uploadingPhoto} onChange={handleAddPhoto} />
                      </label>
                    )}
                  </div>
                  {photoErr && <div className="photo-err">⚠️ {photoErr}</div>}
                </div>

                {/* 文字游记 */}
                <div className="review-box">
                  <textarea
                    className="review-input"
                    placeholder="写下这次旅行的记忆…（可选）"
                    maxLength={200}
                    value={reviewDraft}
                    onChange={e => { setReviewDraft(e.target.value); setReviewSaved(false) }}
                    rows={3}
                  />
                  <div className="review-footer">
                    <span className="review-hint">{reviewDraft.length}/200</span>
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
        <div className="spots-head-row">
          <div>
            <h2 className="page-title">{currentCity.name}景点</h2>
            <p className="page-sub">{spots.length}个精选景点，总有一款适合你</p>
          </div>
          <button className="view-switch" onClick={openMap} aria-label="切换到地图视图">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor"
              strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" />
            </svg>
            <span>地图</span>
          </button>
        </div>
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
            {visitedCount > 0 && (
              <button
                className={`only-unvisited ${hideVisited ? 'on' : ''}`}
                onClick={toggleHideVisited}
                aria-pressed={hideVisited}
              >
                <span className="ou-check" aria-hidden="true">{hideVisited ? '✓' : ''}</span>
                只看未去
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Today's Pick */}
      {spots.some(s => s.isHot) && (
        <div className="today-banner">
          <span className="tb-dot" />
          <span>{spots.find(s => s.isHot)?.name} 编辑力荐 — 到{currentCity.name}别错过！</span>
        </div>
      )}

      <div className="spots-list">
        {visibleSpots.length === 0 && (
          <div className="spots-empty">
            <span className="se-seal">抵</span>
            <p className="se-title">这座城的景点都打卡啦</p>
            <p className="se-sub">关掉「只看未去」可回看你的印记</p>
          </div>
        )}
        {visibleSpots.map(spot => {
          const visited = visitedIds.has(spot.id)
          const checked = checkedIds.has(spot.id)
          return (
            <div
              key={spot.id}
              className={`spot-card ${visited ? 'visited' : checked ? 'checked' : ''} ${spot.isHot ? 'hot' : ''}`}
              onClick={() => { clearOrigin?.(); setSelected(spot.id) }}
              style={{ '--spot-color': spot.color }}
            >
              {spot.isHot && !visited && <div className="hot-ribbon">必去</div>}
              {visited && <div className="visited-ribbon">已抵达</div>}
              <div className="spot-left">
                <div className="spot-emoji-wrap" style={{ background: `linear-gradient(150deg, ${spot.color}, ${spot.color}99), linear-gradient(#16283A, #16283A)` }}>
                  <span className="spot-emoji">{spot.emoji}</span>
                </div>
              </div>
              <div className="spot-info">
                <div className="spot-name-row">
                  <span className="spot-name">{spot.name}</span>
                  <span className="spot-district">{spot.district}</span>
                </div>
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

      {/* Nearby Spots — 点按在高德地图搜索 */}
      {visibleNearby.length > 0 && (
        <div className="nearby-section">
          <h3 className="nearby-title">周边小众景点</h3>
          <p className="nearby-sub">顺道一游 · 可加入想去清单，点卡片看详情</p>
          <div className="nearby-list">
            {visibleNearby.map((s) => (
              <div
                key={s.id}
                className="nearby-card"
                onClick={() => { clearOrigin?.(); setSelected(s.id) }}
              >
                <span className="nearby-emoji">{s.emoji}</span>
                <div className="nearby-info">
                  <div className="nearby-name">{s.name}</div>
                  <div className="nearby-desc">{s.desc}</div>
                  <div className="nearby-transport">{s.transport}</div>
                </div>
                <div className="nearby-actions">
                  <SpotStateBtn id={s.id} />
                  <a
                    className="nearby-go"
                    href={`https://uri.amap.com/search?keyword=${encodeURIComponent(s.name)}&city=${encodeURIComponent(currentCity.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >地图 ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
