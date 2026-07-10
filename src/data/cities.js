/* ──────────────────────────────────────────────
   cities.js  — 云贵川小城漫游数据
   模板城市：大理（Dali）
   —— 每座小城一个对象，结构固定，方便批量扩展 ——

   数据结构约定（每个城市）：
     spots         景点列表（打卡对象）
     nearbySpots   周边顺游
     itineraryDays 建议行程
     tips          旅行贴士
     foods         必吃美食
     packList      行李清单
     seasonInfo    最佳旅行季节（替代原「花期预报」）
────────────────────────────────────────────── */

/* ════════════════ 大理 ════════════════ */
const daliSpots = [
  {
    id: 'd1',
    name: "大理古城",
    nameEn: "Dali Old Town",
    emoji: "🏯",
    district: "大理镇",
    lat: 25.6988, lng: 100.1611,
    peakTime: "全年皆宜",
    peakDays: "3-5月 / 9-11月最佳",
    difficulty: "easy",
    rating: 4.7,
    reviews: 8620,
    tags: ["必去", "古城慢生活", "免费开放"],
    isHot: true,
    ticket: "免费（部分小院/城楼另收费）",
    description: "大理旅行的原点。青石板路、白族三坊一照壁的民居、洋人街的咖啡与酒吧，苍山为屏、洱海在侧。白天逛人民路的手作小摊，傍晚登南城门看夕阳，夜里听一场民谣，是感受大理「风花雪月」慢生活最方便的一站。",
    tips: "古城很大，建议清晨或黄昏逛，人少光线好。人民路自上而下地势平缓，适合从苍山方向往洱海方向散步。",
    transport: "大理站/大理机场打车约30分钟；古城内步行为主",
    color: "#1CB0F6",
    xp: 120,
  },
  {
    id: 'd2',
    name: "洱海生态廊道",
    nameEn: "Erhai Lake Greenway",
    emoji: "🌊",
    district: "环洱海",
    lat: 25.7160, lng: 100.1985,
    peakTime: "全年（干季最蓝）",
    peakDays: "3-5月 / 10-11月",
    difficulty: "medium",
    rating: 4.9,
    reviews: 12400,
    tags: ["必去", "环海骑行", "日出日落"],
    isHot: true,
    ticket: "免费（廊道）/ 电瓶车·自行车另租",
    description: "环洱海一圈约120公里，生态廊道把最美的湖岸串了起来。清晨在才村、龙龛看日出，海面像镜子；午后风起，苍山云雾翻涌。租一辆电瓶车或包车环海，是大理最经典的体验，随手一拍都是壁纸。",
    tips: "全程骑行较累，建议租电瓶车或包车走西线（才村—喜洲—双廊）。防晒必备，湖边风大带件外套。",
    transport: "古城打车到才村码头约15分钟，沿廊道向北",
    color: "#58CC02",
    xp: 160,
  },
  {
    id: 'd3',
    name: "苍山",
    nameEn: "Cangshan Mountain",
    emoji: "⛰️",
    district: "大理镇西侧",
    lat: 25.6790, lng: 100.1175,
    peakTime: "3-6月杜鹃盛开",
    peakDays: "4-5月高山杜鹃",
    difficulty: "hard",
    rating: 4.6,
    reviews: 5230,
    tags: ["登山", "洗马潭索道", "俯瞰洱海"],
    ticket: "感通索道/洗马潭索道约100-300元",
    description: "十九峰十八溪，海拔最高近4100米。乘感通索道到玉带云游路，可平视洱海全景；洗马潭索道直上高山，4-5月漫山杜鹃盛开。山上气温比山下低10℃以上，云海翻涌时如临仙境。",
    tips: "高海拔注意保暖和缓慢行动，山上比古城冷很多。玉带路徒步适合体力一般者，洗马潭线更硬核。",
    transport: "古城打车到感通索道站约20分钟",
    color: "#7C5CFF",
    xp: 200,
  },
  {
    id: 'd4',
    name: "崇圣寺三塔",
    nameEn: "Three Pagodas",
    emoji: "🛕",
    district: "大理镇北",
    lat: 25.7053, lng: 100.1454,
    peakTime: "全年",
    peakDays: "全年（晴天倒影最佳）",
    difficulty: "easy",
    rating: 4.5,
    reviews: 6180,
    tags: ["地标", "千年古塔", "倒影出片"],
    ticket: "约75元",
    description: "大理的千年地标，始建于南诏国时期。三塔背靠苍山、面朝洱海，主塔高近70米。后方聚影池能拍到三塔倒影与苍山同框，是大理最经典的明信片机位。清晨光线柔和，游客也少。",
    tips: "从聚影池拍倒影最出片。园区较大，可乘园内电瓶车省力。",
    transport: "古城打车约10分钟",
    color: "#FF9600",
    xp: 130,
  },
  {
    id: 'd5',
    name: "喜洲古镇",
    nameEn: "Xizhou Old Town",
    emoji: "🌾",
    district: "喜洲镇",
    lat: 25.8319, lng: 100.1439,
    peakTime: "全年（稻田夏绿秋金）",
    peakDays: "7-8月绿稻 / 9-10月金稻",
    difficulty: "easy",
    rating: 4.7,
    reviews: 4560,
    tags: ["白族建筑", "金色稻田", "喜洲粑粑"],
    ticket: "古镇免费 / 严家大院约60元",
    description: "洱海西岸的白族古镇，保留着最完整的白族「三坊一照壁」大院。镇外的稻田四季变色，夏天翠绿、秋天金黄，田埂上的网红大树是热门机位。刚出炉的喜洲破酥粑粑，咸甜两味都要试。",
    tips: "稻田在镇子外围，骑车或步行10分钟可达。严家大院有白族歌舞和三道茶表演。",
    transport: "古城打车约30分钟；环海线途经",
    color: "#FFC800",
    xp: 140,
  },
  {
    id: 'd6',
    name: "双廊古镇",
    nameEn: "Shuanglang",
    emoji: "⛵",
    district: "双廊镇",
    lat: 25.8781, lng: 100.2601,
    peakTime: "全年",
    peakDays: "干季海景通透",
    difficulty: "easy",
    rating: 4.4,
    reviews: 3890,
    tags: ["洱海东岸", "海景客栈", "看日出"],
    ticket: "免费",
    description: "洱海东岸的渔村小镇，被称为「苍洱风光第一镇」。从这里回望，苍山十九峰一字排开、洱海尽收眼底。海边客栈的无边泳池、玻璃球秋千是出片圣地。清晨的日出与南诏风情岛是招牌。",
    tips: "东岸看日出、西岸看日落。旺季客栈紧张，建议提前订海景房。",
    transport: "古城包车/环海线约1小时",
    color: "#E8409C",
    xp: 150,
  },
  {
    id: 'd7',
    name: "才村码头",
    nameEn: "Caicun Wharf",
    emoji: "📸",
    district: "才村",
    lat: 25.7178, lng: 100.1987,
    peakTime: "全年",
    peakDays: "清晨日出 / 傍晚日落",
    difficulty: "easy",
    rating: 4.3,
    reviews: 2140,
    tags: ["离古城最近", "日出机位", "免费"],
    ticket: "免费",
    description: "距古城最近的洱海码头，环海骑行的经典起点。栈道伸入湖中，清晨可拍到平静如镜的洱海日出，傍晚则是苍山剪影配晚霞。不想跑远又想看海的，从这里开始最省心。",
    tips: "清晨风小水面最平，适合拍倒影。栈道湿滑注意脚下。",
    transport: "古城打车约15分钟",
    color: "#D94F7C",
    xp: 100,
  },
]

const daliNearby = [
  { name: "沙溪古镇", desc: "茶马古道上唯一幸存的集市，安静古朴", emoji: "🏘️", transport: "驾车约2小时" },
  { name: "巍山古城", desc: "南诏发源地，古城慢生活+一根面小吃", emoji: "🍜", transport: "驾车约1.5小时" },
  { name: "诺邓古村", desc: "千年白族村，火腿闻名，山间梯田人家", emoji: "🏔️", transport: "驾车约2.5小时" },
]

const daliItinerary = [
  {
    day: 1, title: "抵达·古城慢生活", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达大理，入住古城或环海客栈" },
      { time: "傍晚", icon: "🏯", text: "大理古城人民路散步，登南城门看夕阳" },
      { time: "晚上", icon: "🎸", text: "洋人街喝一杯 / 听一场民谣，尝白族菜" },
    ]
  },
  {
    day: 2, title: "环洱海一日", date: "Day 2",
    activities: [
      { time: "清晨", icon: "🌅", text: "才村码头看洱海日出" },
      { time: "上午", icon: "🛵", text: "租电瓶车/包车走西线：生态廊道—喜洲" },
      { time: "中午", icon: "🌾", text: "喜洲古镇稻田大树打卡，吃喜洲粑粑" },
      { time: "傍晚", icon: "⛵", text: "双廊看苍洱全景与日落" },
    ]
  },
  {
    day: 3, title: "苍山与古塔", date: "Day 3",
    activities: [
      { time: "上午", icon: "⛰️", text: "感通索道上苍山玉带路，平视洱海" },
      { time: "下午", icon: "🛕", text: "崇圣寺三塔，聚影池拍倒影" },
      { time: "晚上", icon: "🍲", text: "古城吃酸辣鱼 / 汽锅鸡暖身" },
    ]
  },
  {
    day: 4, title: "顺游或返程", date: "Day 4",
    activities: [
      { time: "上午", icon: "🚗", text: "顺游沙溪古镇 或 巍山古城（可选）" },
      { time: "下午", icon: "🎁", text: "古城选购扎染、银器、鲜花饼当伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（丽江、香格里拉）" },
    ]
  },
]

const daliTips = [
  { icon: "📅", title: "最佳季节", content: "3-5月和9-11月最舒服：干季天空通透、洱海最蓝，4-5月苍山高山杜鹃盛开。6-8月为雨季，多阵雨、山路易塌方，苍山高线可能封山，出行前查天气。" },
  { icon: "🌤️", title: "高原天气", content: "大理海拔约2000米，紫外线极强、早晚温差大（白天20℃+，夜里可能10℃以下）。防晒、墨镜、薄外套三件套必备，山上更冷。" },
  { icon: "🛵", title: "环海交通", content: "环洱海约120公里。最省力是包车/拼车环海，其次租电瓶车走西线。骑共享/租赁自行车适合短途。古城内步行即可，打车用高德。" },
  { icon: "📸", title: "拍照机位", content: "洱海日出去才村、龙龛、双廊；三塔倒影在聚影池；喜洲拍稻田大树；苍山玉带路平视洱海。清晨风小水面平，倒影最美。" },
  { icon: "🍽️", title: "美食提醒", content: "必尝喜洲粑粑、乳扇、饵丝、酸辣鱼、汽锅鸡。白族「生皮」为生食猪肉，肠胃敏感者谨慎。三道茶体验一苦二甜三回味。" },
  { icon: "💰", title: "预算参考", content: "人均每天300-600元（客栈150-400元、餐饮80-120元、环海包车/门票100-200元）。旺季（暑期、国庆）房价明显上浮，建议提前订。" },
  { icon: "🙏", title: "民族习俗", content: "大理以白族为主，尊重当地习俗与信仰，参观寺庙、民居时注意礼貌，拍摄当地居民请先征得同意。" },
]

const daliFoods = [
  { name: "喜洲破酥粑粑", emoji: "🥮", desc: "现烤酥皮，咸甜两味都要试" },
  { name: "乳扇", emoji: "🧀", desc: "白族奶制品，烤或炸，撒玫瑰糖" },
  { name: "大理饵丝/饵块", emoji: "🍜", desc: "米做的主食，早餐一碗最地道" },
  { name: "酸辣鱼", emoji: "🐟", desc: "洱海鱼配木瓜酸，开胃下饭" },
  { name: "汽锅鸡", emoji: "🍲", desc: "云南名菜，原汤原味，高原暖身" },
  { name: "雕梅·话梅", emoji: "🍑", desc: "白族酸甜小食，配菜解腻" },
]

const daliPackList = [
  { icon: "🧴", text: "高倍防晒霜（高原紫外线极强）" },
  { icon: "🕶️", text: "墨镜 + 遮阳帽" },
  { icon: "🧥", text: "薄外套/冲锋衣（早晚温差大、山上冷）" },
  { icon: "👟", text: "舒适防滑鞋（环海、登山）" },
  { icon: "🔋", text: "充电宝（拍照耗电快）" },
  { icon: "💳", text: "身份证（客栈入住、景区购票）" },
]

const daliSeason = {
  title: "最佳旅行季节",
  sub: "风花雪月，看天吃饭",
  rows: [
    { dot: "early", label: "🌸 春（3—5月）", date: "苍山杜鹃盛开，气候宜人" },
    { dot: "peak",  label: "☀️ 最佳（3—5 & 9—11月）", date: "干季天空通透，洱海最蓝", badge: "推荐" },
    { dot: "late",  label: "🌧️ 雨季（6—8月）", date: "多阵雨易塌方，苍山或封山" },
  ],
}

/* ════════════════ CITIES 汇总 ════════════════
   扩展新城市：复制上方一整套 daliXxx 常量，改名后
   在下面数组里追加一个对象即可。
   province 字段用于城市选择抽屉的分省分组（云南/贵州/四川）。
──────────────────────────────────────────────── */
export const CITIES = [
  {
    id: 'dali',
    name: '大理',
    nameEn: 'Dali',
    emoji: '🏯',
    country: '云南',
    province: '云南',
    tagline: '风花雪月，苍洱之间',
    heroBadge: '大理 · 云南',
    heroTitle: '苍山洱海',
    heroHighlight: '慢下来吧！',
    heroDesc: '环海骑行、古城漫步，四季皆宜',
    heroGradient: 'linear-gradient(160deg, #1a6e9e 0%, #1CB0F6 55%, #80D8FF 100%)',
    quickTips: [
      { icon: '📅', text: '3-5月 & 9-11月最佳' },
      { icon: '🧴', text: '高原紫外线强，防晒必备' },
      { icon: '🛵', text: '环海推荐包车/电瓶车' },
      { icon: '🧥', text: '早晚温差大，带薄外套' },
    ],
    spots: daliSpots,
    nearbySpots: daliNearby,
    itineraryDays: daliItinerary,
    tips: daliTips,
    foods: daliFoods,
    packList: daliPackList,
    seasonInfo: daliSeason,
  },
]

export default CITIES
