/* 城市旅行印章 —— 每城专属图案 × 专属章形（圆/方/八角/椭圆/邮票齿孔/菱形），
   像从不同关口盖回来的一册印章。铜色单色油墨走 --copper 主题变量。
   未抵达 = 对应章形的虚线待盖位（暗示这枚章的模样，等你来盖）。 */

const C = 'currentColor'

/* ── 每城中央图案（以 (60,60) 为中心、±24 范围内的单色小画） ── */
const EMBLEMS = {
  dali: (
    <g>
      <path d={`M 57 42 h 6 l -0.8 4 h -4.4 Z M 55 48 h 10 l -1 22 h -8 Z`} fill={C} />
      <path d="M 41 54 h 7 l -1.2 16 h -4.6 Z M 72 54 h 7 l -1.2 16 h -4.6 Z" fill={C} opacity="0.75" />
      <path d="M 40 78 q 5 -3 10 0 t 10 0 t 10 0 t 10 0" fill="none" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  lijiang: (
    <g>
      <path d="M 38 72 L 50 48 L 57 58 L 64 44 L 72 56 L 82 72 Z" fill={C} opacity="0.8" />
      <path d="M 60 48 l 4 6 h -8 Z" fill="var(--bg-card, #FBF8F1)" />
      <circle cx="79" cy="45" r="4.5" fill="none" stroke={C} strokeWidth="1.5" />
    </g>
  ),
  xishuangbanna: (
    <g>
      <path d="M 58 78 q 1 -16 4 -26" fill="none" stroke={C} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 62 52 q -10 -6 -16 0 q 8 1 16 2 M 62 52 q 10 -6 16 0 q -8 1 -16 2 M 62 52 q -8 -10 -3 -14 q 2 7 4 13 M 62 52 q 8 -10 3 -14 q -2 7 -4 13" fill={C} />
      <path d="M 42 78 h 36" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  baoshan: (
    <g>
      <path d="M 47 56 h 24 v 4 a 12 14 0 0 1 -24 0 Z" fill={C} />
      <path d="M 71 58 q 8 1 0 8" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 52 50 q -2 -4 1 -7 M 59 50 q -2 -4 1 -7 M 66 50 q -2 -4 1 -7" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 48 78 h 22" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  tengchong: (
    <g>
      <path d="M 42 70 L 54 48 h 12 L 78 70 Z" fill={C} opacity="0.8" />
      <path d="M 54 48 q 6 4 12 0" fill="none" stroke="var(--bg-card, #FBF8F1)" strokeWidth="1.6" />
      <circle cx="50" cy="77" r="2" fill={C} /><circle cx="60" cy="79" r="2.6" fill={C} /><circle cx="70" cy="77" r="2" fill={C} />
      <path d="M 56 40 q 2 -4 0 -7 M 64 40 q 2 -4 0 -7" fill="none" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  shangrila: (
    <g>
      <path d="M 54 72 h 12 l -1.5 -8 h -9 Z" fill={C} />
      <circle cx="60" cy="57" r="6.5" fill={C} />
      <path d="M 58.7 50 h 2.6 l -0.6 -8 h -1.4 Z" fill={C} />
      <path d="M 60 42 L 38 56 M 60 42 L 82 56" stroke={C} strokeWidth="1.2" />
      <path d="M 45 47 l 4.5 1 l -1 4 Z M 70.5 48 l 4.5 -1 l -3.5 5 Z" fill={C} opacity="0.8" />
    </g>
  ),
  kunming: (
    <g>
      <circle cx="60" cy="49" r="6" fill={C} opacity="0.7" />
      <path d="M 40 60 q 5 -6 10 0 q 5 -6 10 0 M 60 66 q 5 -6 10 0 q 5 -6 10 0" fill="none" stroke={C} strokeWidth="2" strokeLinecap="round" />
      <path d="M 44 76 q 8 -4 16 0 t 16 0" fill="none" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  yuanyang: (
    <g>
      <circle cx="60" cy="46" r="5" fill={C} opacity="0.7" />
      <path d="M 36 60 q 24 -10 48 0 M 40 67 q 20 -8 40 0 M 44 74 q 16 -6 32 0 M 48 80 q 12 -4 24 0"
        fill="none" stroke={C} strokeWidth="2" strokeLinecap="round" />
    </g>
  ),
  jianshui: (
    <g>
      <path d="M 40 72 h 40 v 6 h -40 Z" fill={C} />
      <path d="M 44 64 h 32 l 2 6 h -36 Z" fill={C} opacity="0.85" />
      <path d="M 48 56 h 24 l 2 6 h -28 Z" fill={C} opacity="0.85" />
      <path d="M 52 47 h 16 l 2 7 h -20 Z" fill={C} opacity="0.85" />
      <path d="M 38 64 l 6 -3 M 82 64 l -6 -3 M 42 56 l 6 -2.5 M 78 56 l -6 -2.5" stroke={C} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="56.5" y="74" width="7" height="4" fill="var(--bg-card, #FBF8F1)" />
    </g>
  ),
  puer: (
    <g>
      <path d="M 60 58 q -1 -12 0 -18 M 60 44 q -9 -3 -13 6 q 8 3 13 -2 M 60 44 q 9 -3 13 6 q -8 3 -13 -2" fill="none" stroke={C} strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="70" r="9" fill="none" stroke={C} strokeWidth="2" />
      <circle cx="60" cy="70" r="3.4" fill={C} />
    </g>
  ),
  dehong: (
    <g>
      <path d="M 60 36 L 66 68 h -12 Z" fill={C} />
      <path d="M 46 52 L 50 68 h -8 Z M 74 52 L 78 68 h -8 Z" fill={C} opacity="0.75" />
      <path d="M 40 70 h 40 v 4 h -40 Z" fill={C} />
      <circle cx="60" cy="33" r="1.8" fill={C} />
    </g>
  ),
  nujiang: (
    <g>
      <path d="M 40 42 L 53 62 L 44 80 M 80 42 L 67 62 L 76 80" fill="none" stroke={C} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M 57 46 q 6 8 -1 15 q -6 8 2 17" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 44 52 q 16 8 32 0" fill="none" stroke={C} strokeWidth="1.3" strokeDasharray="3 2.4" />
    </g>
  ),
  chuxiong: (
    <g>
      <path d="M 60 38 q 8 8 3 15 q 8 -1 7 9 a 12 13 0 1 1 -20 0 q -2 -10 5 -12 q -3 -7 5 -12" fill={C} opacity="0.85" />
      <rect x="57" y="70" width="6" height="12" rx="2" fill={C} />
    </g>
  ),
  yuxi: (
    <g>
      <path d="M 62 42 L 62 62 M 62 44 q 12 6 0 16" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 62 44 q -10 7 0 16 L 62 44" fill={C} opacity="0.5" />
      <path d="M 48 66 h 26 l -4 6 h -18 Z" fill={C} />
      <path d="M 40 78 q 6 -4 12 0 t 12 0 t 12 0" fill="none" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  lincang: (
    <g>
      <ellipse cx="59" cy="64" rx="14" ry="11" fill={C} opacity="0.85" />
      <path d="M 72 60 q 9 -1 6 8 q -3 5 -7 3" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 52 52 q 7 -4 14 0" fill="none" stroke={C} strokeWidth="2" strokeLinecap="round" />
      <circle cx="59" cy="49" r="2.2" fill={C} />
      <path d="M 47 42 q -2 -5 2 -8 M 59 40 q -2 -5 2 -8 M 71 42 q -2 -5 2 -8" fill="none" stroke={C} strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    </g>
  ),
  wenshan: (
    <g>
      <path d="M 60 62 q -8 -4 -8 -14 q 8 2 8 14 q 0 -12 8 -14 q 0 10 -8 14 M 60 62 q -3 -14 0 -20 q 3 6 0 20" fill={C} opacity="0.85" />
      <path d="M 60 62 v 12" stroke={C} strokeWidth="2" />
      <path d="M 42 76 q 9 -6 18 0 q 9 6 18 0" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  ),
  qujing: (
    <g>
      {[[48, 50], [72, 50], [60, 44]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y - 5} r="2.6" fill={C} /><circle cx={x} cy={y + 5} r="2.6" fill={C} />
          <circle cx={x - 5} cy={y} r="2.6" fill={C} /><circle cx={x + 5} cy={y} r="2.6" fill={C} />
          <circle cx={x} cy={y} r="1.6" fill="var(--bg-card, #FBF8F1)" stroke={C} strokeWidth="1" />
        </g>
      ))}
      <path d="M 40 78 L 50 64 L 58 74 L 66 62 L 74 72 L 80 78 Z" fill={C} opacity="0.6" />
    </g>
  ),
  zhaotong: (
    <g>
      <path d="M 40 52 q 14 -12 26 -4 l 12 -6 q -6 10 -14 11 q -10 10 -24 -1" fill={C} opacity="0.85" />
      <path d="M 46 48 q 10 -14 24 -10" fill="none" stroke={C} strokeWidth="2" strokeLinecap="round" />
      <path d="M 58 60 l -3 14 M 64 59 l 2 14" stroke={C} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 44 80 h 32" stroke={C} strokeWidth="1.3" strokeDasharray="3 3" strokeLinecap="round" />
    </g>
  ),
  lanzhou: (
    <g>
      <circle cx="60" cy="58" r="17" fill="none" stroke={C} strokeWidth="2.2" />
      <circle cx="60" cy="58" r="3" fill={C} />
      {[0, 45, 90, 135].map(a => (
        <line key={a} x1={60 - 17 * Math.cos(a * Math.PI / 180)} y1={58 - 17 * Math.sin(a * Math.PI / 180)}
          x2={60 + 17 * Math.cos(a * Math.PI / 180)} y2={58 + 17 * Math.sin(a * Math.PI / 180)}
          stroke={C} strokeWidth="1.6" />
      ))}
      <path d="M 38 80 q 7 -4 14 0 t 14 0 t 14 0" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  ),
  mianyang: (
    <g>
      <path d="M 74 40 a 8 8 0 1 0 4 14 a 6.5 6.5 0 1 1 -4 -14" fill={C} />
      <rect x="42" y="58" width="30" height="18" rx="2" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 40 58 v 18 M 74 58 v 18" stroke={C} strokeWidth="3" strokeLinecap="round" />
      <path d="M 48 64 h 18 M 48 70 h 12" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  shenzhen: (
    <g>
      <path d="M 57 72 V 44 L 60 36 L 63 44 V 72 Z" fill={C} />
      <path d="M 44 72 V 54 h 8 v 18 Z M 68 72 V 50 h 8 v 22 Z M 36 72 v -12 h 6 v 12 Z M 78 72 v -14 h 6 v 14 Z" fill={C} opacity="0.7" />
      <path d="M 34 79 q 6 -3.5 13 0 t 13 0 t 13 0 t 13 0" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),
  hongkong: (
    <g>
      <path d="M 56 66 V 40 M 56 44 q 14 4 0 18 M 56 44 q -11 5 0 16" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 56 44 q 14 6 0 18 Z" fill={C} opacity="0.75" />
      <path d="M 56 44 q -11 5 0 16 Z" fill={C} opacity="0.45" />
      <path d="M 42 68 h 28 l -5 7 h -18 Z" fill={C} />
      <path d="M 34 80 q 6 -3.5 12 0 t 12 0 t 12 0 t 12 0" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 76 62 v -10 h 4 v 10 M 82 62 v -7 h 4 v 7" fill="none" stroke={C} strokeWidth="1.6" />
    </g>
  ),
  chengdu: (
    <g>
      <circle cx="60" cy="60" r="16" fill="none" stroke={C} strokeWidth="2.2" />
      <circle cx="48" cy="46" r="5.5" fill={C} /><circle cx="72" cy="46" r="5.5" fill={C} />
      <ellipse cx="53.5" cy="58" rx="4.2" ry="5.5" transform="rotate(-18 53.5 58)" fill={C} />
      <ellipse cx="66.5" cy="58" rx="4.2" ry="5.5" transform="rotate(18 66.5 58)" fill={C} />
      <ellipse cx="60" cy="67" rx="2.6" ry="2" fill={C} />
    </g>
  ),
}

/* 山水兜底（未来新城未配置图案时自动生成，与分享卡同构） */
function fallbackEmblem(id) {
  const seed = [...String(id)].reduce((a, c2) => a + c2.charCodeAt(0), 0)
  let d = 'M 38 74'
  for (let x = 38; x <= 82; x += 4) {
    const t = ((x - 38) / 44) * Math.PI * 2
    d += ` L ${x} ${74 - Math.abs(Math.sin(t * 1.5 + seed) * 14 + Math.sin(t * 3 + seed) * 5)}`
  }
  d += ' L 82 74 Z'
  return <g><path d={d} fill={C} opacity="0.8" /><circle cx="76" cy="46" r="5" fill={C} opacity="0.6" /></g>
}

/* ── 章形外框（双线 + 淡底），并给出文字/虚线布局参数 ── */
const SHAPE_OF = {
  dali: 'circle', kunming: 'circle', chuxiong: 'circle', wenshan: 'circle',
  zhaotong: 'circle', chengdu: 'circle', lanzhou: 'circle', tengchong: 'circle', yuxi: 'circle',
  jianshui: 'square', baoshan: 'square', lincang: 'square', mianyang: 'square',
  lijiang: 'octagon', shangrila: 'octagon',
  puer: 'oval', yuanyang: 'oval', qujing: 'oval',
  xishuangbanna: 'postage', dehong: 'postage',
  nujiang: 'diamond',
  shenzhen: 'circle',
  hongkong: 'octagon',
}

const OCTA = 'M 60 8 L 96.8 23.2 L 112 60 L 96.8 96.8 L 60 112 L 23.2 96.8 L 8 60 L 23.2 23.2 Z'
const OCTA_IN = 'M 60 15 L 91.8 28.2 L 105 60 L 91.8 91.8 L 60 105 L 28.2 91.8 L 15 60 L 28.2 28.2 Z'
const DIAM = 'M 60 6 L 114 60 L 60 114 L 6 60 Z'
const DIAM_IN = 'M 60 14 L 106 60 L 60 106 L 14 60 Z'

function Frame({ shape, dashed = false }) {
  const sw1 = dashed ? 1.6 : 2.4
  const dash = dashed ? { strokeDasharray: '3 4', opacity: 0.7 } : {}
  const inner = !dashed
  switch (shape) {
    case 'square': return (<g>
      {inner && <rect x="14" y="14" width="92" height="92" rx="12" fill={C} opacity="0.09" />}
      <rect x="12" y="12" width="96" height="96" rx="13" fill="none" stroke={C} strokeWidth={sw1} {...dash} />
      {inner && <rect x="18" y="18" width="84" height="84" rx="9" fill="none" stroke={C} strokeWidth="1" />}
    </g>)
    case 'octagon': return (<g>
      {inner && <path d={OCTA_IN} fill={C} opacity="0.09" />}
      <path d={OCTA} fill="none" stroke={C} strokeWidth={sw1} {...dash} />
      {inner && <path d={OCTA_IN} fill="none" stroke={C} strokeWidth="1" />}
    </g>)
    case 'oval': return (<g>
      {inner && <ellipse cx="60" cy="60" rx="52" ry="43" fill={C} opacity="0.09" />}
      <ellipse cx="60" cy="60" rx="55" ry="46" fill="none" stroke={C} strokeWidth={sw1} {...dash} />
      {inner && <ellipse cx="60" cy="60" rx="48" ry="39" fill="none" stroke={C} strokeWidth="1" />}
    </g>)
    case 'postage': return (<g>
      <rect x="14" y="14" width="92" height="92" rx="3" fill={C} opacity={dashed ? 0 : 0.09} />
      <rect x="14" y="14" width="92" height="92" rx="3" fill="none" stroke={C} strokeWidth={dashed ? 1.4 : 2}
        {...(dashed ? { strokeDasharray: '3 4', opacity: 0.7 } : {})} />
      {!dashed && <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke={C}
        strokeWidth="3.4" strokeDasharray="0.1 9" strokeLinecap="round" />}
      {!dashed && <rect x="20" y="20" width="80" height="80" fill="none" stroke={C} strokeWidth="1" />}
    </g>)
    case 'diamond': return (<g>
      {inner && <path d={DIAM_IN} fill={C} opacity="0.09" />}
      <path d={DIAM} fill="none" stroke={C} strokeWidth={sw1} {...dash} />
      {inner && <path d={DIAM_IN} fill="none" stroke={C} strokeWidth="1" />}
    </g>)
    default: return (<g>
      {inner && <circle cx="60" cy="60" r="48" fill={C} opacity="0.09" />}
      <circle cx="60" cy="60" r="52" fill="none" stroke={C} strokeWidth={sw1} {...dash} />
      {inner && <circle cx="60" cy="60" r="46" fill="none" stroke={C} strokeWidth="1" />}
    </g>)
  }
}

/* 各章形的文字布局：圆/椭圆沿弧，其余顶部横排 */
function StampText({ shape, uid, name, region }) {
  const nm = name.length <= 2 ? { fs: 13, ls: 5 } : name.length === 3 ? { fs: 11.5, ls: 2.5 } : { fs: 10.5, ls: 1 }
  if (shape === 'circle' || shape === 'oval') {
    const arc = shape === 'oval' ? 'M 22 52 A 42 34 0 0 1 98 52' : 'M 24.5 44 A 40 40 0 0 1 95.5 44'
    return (<g>
      <defs><path id={`arc-${uid}`} d={arc} fill="none" /></defs>
      <text fontFamily="var(--font-serif)" fill={C} fontWeight="600" fontSize={nm.fs} letterSpacing={nm.ls}>
        <textPath href={`#arc-${uid}`} startOffset="50%" textAnchor="middle">{name}</textPath>
      </text>
      <text x="60" y={shape === 'oval' ? 92 : 97} textAnchor="middle" fontFamily="var(--font-serif)" fill={C} fontSize="8.5" letterSpacing="3">{region}</text>
    </g>)
  }
  const topY = shape === 'diamond' ? 34 : shape === 'octagon' ? 32 : 30
  const botY = shape === 'diamond' ? 90 : shape === 'octagon' ? 94 : 96
  return (<g>
    <text x="60" y={topY} textAnchor="middle" fontFamily="var(--font-serif)" fill={C} fontWeight="600"
      fontSize={nm.fs} letterSpacing={nm.ls}>{name}</text>
    <text x="60" y={botY} textAnchor="middle" fontFamily="var(--font-serif)" fill={C} fontSize="8.5" letterSpacing="3">{region}</text>
  </g>)
}

export default function CityStamp({ city, earned = false, size = 120 }) {
  const uid = String(city.id)
  const name = city.name
  const region = city.country || city.province || '云南'
  const shape = SHAPE_OF[uid] || 'circle'

  if (!earned) {
    return (
      <svg width={size} viewBox="0 0 120 120" role="img" style={{ color: 'var(--text-mid)' }}>
        <title>{`${name} · 未抵达`}</title>
        <Frame shape={shape} dashed />
        <text x="60" y="64" textAnchor="middle" opacity="0.75" fill={C}
          fontFamily="var(--font-serif)" fontSize={name.length > 3 ? 12 : 14} letterSpacing={name.length > 3 ? 1 : 4}>{name}</text>
      </svg>
    )
  }

  return (
    <svg width={size} viewBox="0 0 120 120" role="img" style={{ color: 'var(--copper)' }}>
      <title>{`${name} 旅行印章`}</title>
      <desc>{`${region}${name}，专属图案${shape}形印章，已抵达`}</desc>
      <Frame shape={shape} />
      <StampText shape={shape} uid={uid} name={name} region={region} />
      {EMBLEMS[uid] || fallbackEmblem(uid)}
    </svg>
  )
}
