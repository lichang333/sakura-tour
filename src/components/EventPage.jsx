import { useCity } from '../context/CityContext'
import { navToAmap } from '../utils/amapNav'
import './EventPage.css'

/* 限定活动攻略页 —— 渲染 currentCity.specialEvent.guide：
   时间线 / 机位对比（每处一键导航）/ 晚饭动线 / FAQ */
export default function EventPage({ goBack, goToSpot }) {
  const { currentCity } = useCity()
  const ev = currentCity.specialEvent

  if (!ev?.guide) {
    return (
      <div className="event-page">
        <button className="event-back" onClick={goBack}>← 返回</button>
        <p className="event-empty">这座城市暂无限定活动</p>
      </div>
    )
  }
  const g = ev.guide

  return (
    <div className="event-page">
      <button className="event-back" onClick={goBack}>← 返回</button>

      <div className="event-hero">
        <span className="event-hero-emoji">{ev.emoji}</span>
        <h2 className="event-hero-name">{ev.name}<span className="event-hero-badge">限定</span></h2>
        <div className="event-hero-date">{ev.date}</div>
        <div className="event-hero-place">{ev.place}</div>
      </div>

      <p className="event-intro">{g.intro}</p>

      <div className="event-section">
        <h3 className="event-h3">🕐 当晚时间线</h3>
        <div className="event-timeline">
          {g.timeline.map((t, i) => (
            <div key={i} className="etl-row">
              <span className="etl-time">{t.time}</span>
              <span className="etl-dot" />
              <span className="etl-text">{t.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="event-section">
        <h3 className="event-h3">📍 机位对比（星级 = 综合推荐度）</h3>
        <div className="event-vps">
          {g.viewpoints.map((v, i) => (
            <div key={i} className="evp-card">
              <div className="evp-head">
                <span className="evp-name">{v.name}</span>
                <span className="evp-stars">{'★'.repeat(v.stars)}{'☆'.repeat(3 - v.stars)}</span>
              </div>
              <div className="evp-row good">👍 {v.pros}</div>
              <div className="evp-row bad">👎 {v.cons}</div>
              <div className="evp-foot">
                <span className="evp-tip">💡 {v.tip}</span>
                <button className="evp-nav" onClick={() => navToAmap(v)}>🧭 导航</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="event-section">
        <h3 className="event-h3">🍢 晚饭接烟花动线</h3>
        <div className="event-dinner">
          {g.dinner.map((d, i) => (
            <div key={i} className="edn-row">
              <div className="edn-main">
                <span className="edn-name">{d.name}</span>
                <span className="edn-walk">{d.walk}</span>
              </div>
              <div className="edn-desc">{d.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="event-section">
        <h3 className="event-h3">❓ 常见问题</h3>
        {g.faqs.map((f, i) => (
          <div key={i} className="efq">
            <div className="efq-q">{f.q}</div>
            <div className="efq-a">{f.a}</div>
          </div>
        ))}
      </div>

      {ev.spotId && (
        <button className="event-spot-link" onClick={() => goToSpot?.(ev.spotId)}>
          查看关联景点：{currentCity.spots.find(s => s.id === ev.spotId)?.name} ›
        </button>
      )}
    </div>
  )
}
