/* 景点 id → 制县州市 code（打卡派生用，与踏印共享同一命名空间）
   语义：某州市任一景点已抵达 → 该州市印记至少「玩过 3」（只升不降）。
   新城市上线时在此登记其景点 id 规则。 */
/* 例外表优先：顺游景点行政区可能不属于所在城市的州市 */
const SPOT_REGION_EXACT = {
  ln1: 'yn-diqing',    // 虎跳峡行政属迪庆香格里拉
}

const SPOT_REGION_RULES = [
  { test: /^dn?\d+$/, region: 'yn-dali' },      // 大理：主景点 d1.. + 周边顺游 dn1..
  { test: /^ln?\d+$/, region: 'yn-lijiang' },   // 丽江：主景点 l1.. + 周边顺游 ln1..
]

export function regionOfSpot(spotId) {
  const s = String(spotId)
  if (SPOT_REGION_EXACT[s]) return SPOT_REGION_EXACT[s]
  for (const r of SPOT_REGION_RULES) {
    if (r.test.test(s)) return r.region
  }
  return null
}

/* 在 merged（regionLevels 对象）上应用打卡派生地板：visited 里每个景点
   对应的州市至少 3。原地修改并返回是否有变化。 */
export function applyVisitDerivation(merged, visitedSpots) {
  let changed = false
  for (const sid of visitedSpots || []) {
    const code = regionOfSpot(sid)
    if (code && (merged[code] || 0) < 3) {
      merged[code] = 3
      changed = true
    }
  }
  return changed
}
