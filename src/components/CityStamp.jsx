/* 城市旅行邮戳章 —— 圆形双环 + 沿弧地名 + 中央山水剪影（按 city.id 生成、每城各异）
   + 两侧星章 + 底部省名。已抵达=铜色实盖；未抵达=虚线待盖位。
   与分享卡同一套山水语言，颜色走 --copper 主题变量。 */

const seedOf = (id) => [...String(id)].reduce((a, c) => a + c.charCodeAt(0), 0)

/* 近/远山脊：正弦叠波，返回路径与最高峰（供雪帽贴合） */
function ridge(seed, { x0, x1, base, amp, phase }) {
  let d = `M ${x0} ${base}`
  let peak = { x: (x0 + x1) / 2, y: base }
  for (let x = x0; x <= x1; x += 5) {
    const t = ((x - x0) / (x1 - x0)) * Math.PI * 2
    const y = base - Math.abs(Math.sin(t * 1.5 + phase) * amp + Math.sin(t * 3.2 + phase * 1.6) * amp * 0.35) - 1.5
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`
    if (x > x0 + (x1 - x0) * 0.2 && x < x1 - (x1 - x0) * 0.2 && y < peak.y) peak = { x, y }
  }
  d += ` L ${x1} ${base} Z`
  return { d, peak }
}

export default function CityStamp({ city, earned = false, size = 120 }) {
  const uid = String(city.id)
  const name = city.name
  const region = city.country || city.province || '云南'
  // 名字长度决定弧上字号/字距
  const nmeas = name.length <= 2 ? { fs: 14, ls: 6 } : name.length === 3 ? { fs: 12.5, ls: 3 } : { fs: 11, ls: 1 }

  if (!earned) {
    return (
      <svg width={size} viewBox="0 0 120 116" role="img" style={{ color: 'var(--text-mid)' }}>
        <title>{`${name} · 未抵达`}</title>
        <circle cx="60" cy="56" r="50" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" opacity="0.7" />
        <text x="60" y="61" textAnchor="middle" opacity="0.75"
          fontFamily="var(--font-serif)" fontSize={nmeas.fs} letterSpacing={nmeas.ls}>{name}</text>
      </svg>
    )
  }

  const seed = seedOf(uid)
  const far  = ridge(seed, { x0: 26, x1: 94, base: 68, amp: 7,  phase: seed % 7 })
  const near = ridge(seed, { x0: 24, x1: 96, base: 70, amp: 12, phase: (seed % 5) + 2 })
  const showSun = seed % 2 === 0

  return (
    <svg width={size} viewBox="0 0 120 116" role="img" style={{ color: 'var(--copper)' }}>
      <title>{`${name} 旅行邮戳`}</title>
      <desc>{`${region}${name}，中央山水剪影邮戳，已抵达`}</desc>
      <defs>
        <clipPath id={`clip-${uid}`}><circle cx="60" cy="56" r="43" /></clipPath>
        <path id={`arc-${uid}`} d="M 25.6 39.9 A 38 38 0 0 1 94.4 39.9" fill="none" />
      </defs>

      <circle cx="60" cy="56" r="46" fill="currentColor" opacity="0.09" />
      <circle cx="60" cy="56" r="50" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="60" cy="56" r="44" fill="none" stroke="currentColor" strokeWidth="1" />

      <text fontFamily="var(--font-serif)" fill="currentColor" fontWeight="600" fontSize={nmeas.fs} letterSpacing={nmeas.ls}>
        <textPath href={`#arc-${uid}`} startOffset="50%" textAnchor="middle">{name}</textPath>
      </text>

      <polygon fill="currentColor" points="18,56 15.6,53.6 18,51.2 20.4,53.6" />
      <polygon fill="currentColor" points="102,56 99.6,53.6 102,51.2 104.4,53.6" />

      <g clipPath={`url(#clip-${uid})`}>
        {showSun && <circle cx="76" cy="46" r="5.5" fill="currentColor" opacity="0.65" />}
        <path d={far.d}  fill="currentColor" opacity="0.42" />
        <path d={near.d} fill="currentColor" opacity="0.8" />
        <polygon fill="var(--bg, #101319)"
          points={`${near.peak.x},${near.peak.y - 0.5} ${near.peak.x - 4.5},${near.peak.y + 4} ${near.peak.x + 4.5},${near.peak.y + 4}`} />
      </g>

      <text x="60" y="93" textAnchor="middle" fontFamily="var(--font-serif)" fill="currentColor" fontSize="9" letterSpacing="3">{region}</text>
    </svg>
  )
}
