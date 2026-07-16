/* 景点 id → 制县州市 code（打卡派生用，与踏印共享同一命名空间）
   语义：某州市任一景点已抵达 → 该州市印记至少「玩过 3」（只升不降）。
   新城市上线时在此登记其景点 id 规则。 */
/* 例外表优先：顺游景点行政区可能不属于所在城市的州市 */
const SPOT_REGION_EXACT = {
  ln1:  'yn-diqing',   // 虎跳峡行政属迪庆香格里拉
  lzn2: 'ad620400',    // 黄河石林行政属白银景泰
  lzn3: 'ad622900',    // 刘家峡·炳灵寺行政属临夏永靖
  cdn3: 'sc-deyang',   // 三星堆行政属德阳广汉
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
  { test: /^kmn?\d+$/, region: 'yn-kunming' },  // 昆明：km1.. / kmn1..（含东川/宜良/禄劝，均属昆明）
  { test: /^yyn?\d+$/, region: 'yn-honghe' },  // 元阳：yy1.. / yyn1..（含蒙自/泸西/红河县，均属红河州）
  { test: /^jsn?\d+$/, region: 'yn-honghe' },  // 建水：js1.. / jsn1..（含石屏/弥勒/泸西，均属红河州；与元阳共享红河格）
  { test: /^pen?\d+$/, region: 'yn-puer' },  // 普洱：pe1.. / pen1..（含澜沧/西盟/景东/江城/孟连/墨江，均属普洱）
  { test: /^dhn?\d+$/, region: 'yn-dehong' },  // 德宏：dh1.. / dhn1..（芒市/瑞丽/盈江/梁河/畹町，均属德宏州）
  { test: /^njn?\d+$/, region: 'yn-nujiang' },  // 怒江：nj1.. / njn1..（含泸水/福贡/贡山/兰坪，均属怒江州）
  { test: /^cxn?\d+$/, region: 'yn-chuxiong' },  // 楚雄：cx1.. / cxn1..（含元谋/禄丰/武定/大姚/姚安/南华，均属楚雄州）
  { test: /^yxn?\d+$/, region: 'yn-yuxi' },  // 玉溪：yx1.. / yxn1..（含澄江/新平/通海/江川/元江/华宁/峨山，均属玉溪）
  { test: /^lcn?\d+$/, region: 'yn-lincang' },  // 临沧：lc1.. / lcn1..（含沧源/凤庆/双江/永德/耿马，均属临沧）
  { test: /^wsn?\d+$/, region: 'yn-wenshan' },  // 文山：ws1.. / wsn1..（含丘北/广南/麻栗坡/西畴/富宁/砚山/马关，均属文山州）
  { test: /^qjn?\d+$/, region: 'yn-qujing' },  // 曲靖：qj1.. / qjn1..（含罗平/陆良/会泽/沾益/师宗/宣威，均属曲靖）
  { test: /^ztn?\d+$/, region: 'yn-zhaotong' },  // 昭通：zt1.. / ztn1..（含盐津/威信/大关/彝良/水富/巧家/镇雄/永善，均属昭通）
  { test: /^myn?\d+$/, region: 'sc-mianyang' },  // 绵阳：my1.. / myn1..（含江油/平武/北川/梓潼/安州/三台，均属绵阳；首座四川城）
  { test: /^cdn?\d+$/, region: 'sc-chengdu' },   // 成都：cd1.. / cdn1..（都江堰/青城山属成都；三星堆走例外表→德阳）
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
