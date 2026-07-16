/* 旅行成就勋章 —— 自绘 SVG 圆形勋章（双环 + 专属图案 + 底部缎带）。
   与集章册的铜色「印章」区分：勋章走靛蓝、记录行为里程碑。
   未解锁 = 灰阶虚线待授位。 */

const C = 'currentColor'

const ICONS = {
  first: (      // 背包
    <g>
      <rect x="15" y="17" width="18" height="16" rx="5" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 19 17 q 5 -7 10 0" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 20 25 h 8 M 24 25 v 5" stroke={C} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  ),
  spot1: (      // 图钉落点
    <g>
      <path d="M 24 13 a 7.5 7.5 0 0 1 7.5 7.5 q 0 5.5 -7.5 12.5 q -7.5 -7 -7.5 -12.5 A 7.5 7.5 0 0 1 24 13 Z" fill="none" stroke={C} strokeWidth="2" />
      <circle cx="24" cy="20.5" r="2.6" fill={C} />
    </g>
  ),
  spot3: (      // 罗盘
    <g>
      <circle cx="24" cy="24" r="10.5" fill="none" stroke={C} strokeWidth="2" />
      <path d="M 28.5 19.5 L 25.8 25.8 L 19.5 28.5 L 22.2 22.2 Z" fill={C} />
      <circle cx="24" cy="24" r="1.4" fill="var(--bg-card, #FBF8F1)" />
    </g>
  ),
  visited1: (   // 出发旗
    <g>
      <path d="M 19 34 V 14" stroke={C} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 19 15 h 12 l -3.5 4 l 3.5 4 h -12 Z" fill={C} />
    </g>
  ),
  visited3: (   // 山峰
    <g>
      <path d="M 13 32 L 21 18 L 26 25 L 30 20 L 35 32 Z" fill="none" stroke={C} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 19.5 21 l 1.5 -3 l 1.8 3" fill="none" stroke={C} strokeWidth="1.5" />
    </g>
  ),
  visited5: (   // 星芒勋标
    <g>
      <path d="M 24 13 l 2.6 5.6 6 0.7 -4.4 4.1 1.2 5.9 -5.4 -3 -5.4 3 1.2 -5.9 -4.4 -4.1 6 -0.7 Z" fill="none" stroke={C} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="24" cy="22.5" r="1.6" fill={C} />
    </g>
  ),
  xp200: (      // 实星
    <g>
      <path d="M 24 12.5 l 3 6.4 7 0.8 -5.2 4.8 1.4 6.9 -6.2 -3.5 -6.2 3.5 1.4 -6.9 -5.2 -4.8 7 -0.8 Z" fill={C} />
    </g>
  ),
  streak3: (    // 火焰
    <g>
      <path d="M 24 12 q 6 6 2.4 11 q 6 -0.6 5 6.5 a 8 8.5 0 1 1 -14.8 0 q -1.6 -7 3.8 -8.8 q -2.6 -5 3.6 -8.7" fill={C} />
    </g>
  ),
  city2: (      // 多点连线
    <g>
      <circle cx="17" cy="29" r="3" fill={C} />
      <circle cx="25" cy="17" r="3" fill={C} />
      <circle cx="32" cy="27" r="3" fill={C} />
      <path d="M 18.7 26.6 L 23.4 19.6 M 26.8 19.2 L 30.4 24.6" stroke={C} strokeWidth="1.7" strokeDasharray="2.6 2.2" strokeLinecap="round" />
    </g>
  ),
}

export default function AchBadge({ kind, unlocked = false, size = 40 }) {
  if (!unlocked) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true"
        style={{ color: 'var(--text-mid)', opacity: 0.55 }}>
        <circle cx="24" cy="24" r="20" fill="none" stroke={C} strokeWidth="1.5" strokeDasharray="3 3.6" />
        <g opacity="0.65">{ICONS[kind] || ICONS.first}</g>
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 54" aria-hidden="true" style={{ color: 'var(--indigo)' }}>
      <path d="M 17 39 L 17 51 L 24 46.5 L 31 51 L 31 39 Z" fill={C} opacity="0.55" />
      <circle cx="24" cy="24" r="21" fill={C} opacity="0.10" />
      <circle cx="24" cy="24" r="21" fill="none" stroke={C} strokeWidth="2.2" />
      <circle cx="24" cy="24" r="17" fill="none" stroke={C} strokeWidth="1" />
      {ICONS[kind] || ICONS.first}
    </svg>
  )
}
