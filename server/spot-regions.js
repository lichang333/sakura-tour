/* 景点 id → 制县州市 code（打卡派生用，与踏印共享同一命名空间）
   语义：某州市任一景点已抵达 → 该州市印记至少「玩过 3」（只升不降）。
   新城市上线时在此登记其景点 id 规则。 */
/* 例外表优先：顺游景点行政区可能不属于所在城市的州市 */
const SPOT_REGION_EXACT = {
  ln1:  'yn-diqing',   // 虎跳峡行政属迪庆香格里拉
  lzn2: 'ad620400',    // 黄河石林行政属白银景泰
  lzn3: 'ad622900',    // 刘家峡·炳灵寺行政属临夏永靖
}

/* 注意：云贵川三省沿用 sc-/gz-/yn- 前缀（踏印历史命名），
   其他省份踏印用 adcode 格式（如兰州 ad620100） */
const SPOT_REGION_RULES = [
  { test: /^lzn?\d+$/, region: 'ad620100' },    // 兰州：lz1.. / lzn1..（先于丽江规则不冲突，正则互斥）
  { test: /^dn?\d+$/,  region: 'yn-dali' },     // 大理：d1.. / dn1..
  { test: /^ln?\d+$/,  region: 'yn-lijiang' },  // 丽江：l1.. / ln1..
  { test: /^bnn?\d+$/, region: 'yn-xishuangbanna' },  // 版纳：bn1.. / bnn1..（全在版纳州内）
  { test: /^bsn?\d+$/, region: 'yn-baoshan' },  // 保山：bs1.. / bsn1..（含龙陵/昌宁/施甸，均属保山）
  { test: /^tcn?\d+$/, region: 'yn-baoshan' },  // 腾冲：tc1.. / tcn1..（腾冲是保山下辖县级市，同归保山）
  { test: /^sgn?\d+$/, region: 'yn-diqing' },  // 香格里拉：sg1.. / sgn1..（含德钦，均属迪庆州）
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
