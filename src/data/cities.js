/* ──────────────────────────────────────────────
   cities.js  — 中国小城漫游数据（始于云贵川）
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

/* 周边顺游 —— 完整景点数据（可想去/打卡/上地图/集章），isNearby 标记保持分区展示 */
const daliNearby = [
  {
    id: 'dn1',
    name: "沙溪古镇",
    nameEn: "Shaxi Ancient Town",
    emoji: "🏘️",
    district: "剑川县",
    lat: 26.3205, lng: 99.8530,
    peakTime: "全年皆宜",
    peakDays: "4-10月 / 周五赶集",
    difficulty: "easy",
    rating: 4.7,
    reviews: 3200,
    tags: ["茶马古道", "古集市", "安静"],
    ticket: "免费",
    desc: "茶马古道上唯一幸存的集市，安静古朴",
    description: "茶马古道上唯一幸存的古集市。寺登四方街的古戏台、兴教寺、玉津桥沿黑潓江铺开，比大理古城安静得多，适合住一晚感受慢时光。",
    tips: "周五是沙溪赶集日最有生活气；黄昏时分的四方街和玉津桥光线最美。",
    transport: "大理古城驾车约2小时；或下关客运站班车到剑川县城转乘",
    color: "#B08968",
    xp: 90,
    isNearby: true,
  },
  {
    id: 'dn2',
    name: "巍山古城",
    nameEn: "Weishan Old Town",
    emoji: "🍜",
    district: "巍山县",
    lat: 25.2270, lng: 100.3070,
    peakTime: "全年皆宜",
    peakDays: "3-11月",
    difficulty: "easy",
    rating: 4.5,
    reviews: 1800,
    tags: ["南诏发源地", "一根面", "慢生活"],
    ticket: "免费（拱辰楼登楼另收费）",
    desc: "南诏发源地，古城慢生活+一根面小吃",
    description: "南诏国发源地，明清古城格局保存完整。登拱辰楼看南北主街车水马龙，街边就是一根面、粑肉饵丝等地道小吃，古城节奏比大理更慢。",
    tips: "适合半日闲逛+扫街小吃；拱辰楼与星拱楼之间的主街最值得慢慢走。",
    transport: "下关驾车约1.5小时",
    color: "#CE6A2B",
    xp: 80,
    isNearby: true,
  },
  {
    id: 'dn3',
    name: "诺邓古村",
    nameEn: "Nuodeng Village",
    emoji: "🏔️",
    district: "云龙县",
    lat: 25.9280, lng: 99.3510,
    peakTime: "全年皆宜",
    peakDays: "秋冬晨雾最美",
    difficulty: "medium",
    rating: 4.6,
    reviews: 1500,
    tags: ["千年白族村", "诺邓火腿", "盐井"],
    ticket: "免费",
    desc: "千年白族村，火腿闻名，山间梯田人家",
    description: "因井盐而兴的千年白族村落，《舌尖上的中国》让诺邓火腿声名远扬。层叠的古民居沿山坡铺开，盐井遗迹与百年老宅间藏着最真实的山村生活。",
    tips: "村内石阶多且陡，穿舒适防滑鞋；建议住一晚，尝火腿宴、看清晨山雾。",
    transport: "大理驾车约2.5小时，山路多请注意驾驶",
    color: "#7A8B5A",
    xp: 80,
    isNearby: true,
  },
]

const daliItinerary = [
  {
    day: 1, title: "抵达·古城慢生活", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达大理，入住古城或环海客栈" },
      { time: "傍晚", icon: "🏯", text: "大理古城人民路散步，登南城门看夕阳", spotId: 'd1' },
      { time: "晚上", icon: "🎸", text: "洋人街喝一杯 / 听一场民谣，尝白族菜" },
    ]
  },
  {
    day: 2, title: "环洱海一日", date: "Day 2",
    activities: [
      { time: "清晨", icon: "🌅", text: "才村码头看洱海日出", spotId: 'd7' },
      { time: "上午", icon: "🛵", text: "租电瓶车/包车走西线：生态廊道—喜洲", spotId: 'd2' },
      { time: "中午", icon: "🌾", text: "喜洲古镇稻田大树打卡，吃喜洲粑粑", spotId: 'd5' },
      { time: "傍晚", icon: "⛵", text: "双廊看苍洱全景与日落", spotId: 'd6' },
    ]
  },
  {
    day: 3, title: "苍山与古塔", date: "Day 3",
    activities: [
      { time: "上午", icon: "⛰️", text: "感通索道上苍山玉带路，平视洱海", spotId: 'd3' },
      { time: "下午", icon: "🛕", text: "崇圣寺三塔，聚影池拍倒影", spotId: 'd4' },
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


/* ════════════════ 丽江 ════════════════ */
const lijiangSpots = [
  {
    id: 'l1',
    name: "丽江古城",
    nameEn: "Lijiang Old Town",
    emoji: "🏮",
    district: "古城区",
    lat: 26.8767, lng: 100.2331,
    peakTime: "全年皆宜",
    peakDays: "10-5月干季最佳",
    difficulty: "easy",
    rating: 4.6,
    reviews: 15200,
    tags: ["必去", "世界遗产", "夜景"],
    isHot: true,
    ticket: "免费（古城维护费 50 元，部分景点查验）",
    description: "世界文化遗产大研古城。四方街的青石板被岁月磨得发亮，木府「北有故宫，南有木府」，登狮子山万古楼可俯瞰满城青瓦。白天巷子安静，入夜酒吧街灯火与雪山轮廓同框，是丽江最经典的一站。",
    tips: "清晨 8 点前的古城几乎无人，拍空镜最好；万古楼看日落金顶雪山，值回票价。夜里酒吧街喧闹，喜静住五一街或文治巷。",
    transport: "丽江站打车约20分钟，三义机场约40分钟；古城内步行",
    color: "#C7592B",
    xp: 120,
  },
  {
    id: 'l2',
    name: "玉龙雪山",
    nameEn: "Jade Dragon Snow Mountain",
    emoji: "🏔️",
    district: "玉龙县",
    lat: 27.1003, lng: 100.1800,
    peakTime: "11-4月雪最厚",
    peakDays: "11-4月观雪 / 全年可上",
    difficulty: "hard",
    rating: 4.8,
    reviews: 18600,
    tags: ["必去", "大索道4506", "蓝月谷"],
    isHot: true,
    ticket: "进山费 100 元 + 大索道约 120 元（需提前预约）",
    description: "纳西人的神山，主峰扇子陡 5596 米终年积雪。大索道直上 4506 米冰川公园，脚下是千年冰川；山脚蓝月谷湖水蓝得不真实，是雪山倒影的最佳前景。",
    tips: "海拔高，备氧气瓶和厚外套（山顶比古城低 15℃+）；大索道票经常售罄，务必提前 1-3 天在官方公众号预约；上午雪山云少，越早越好。",
    transport: "古城包车/景区直通车约1小时；索道分大索道、云杉坪、牦牛坪三线",
    color: "#4B8FA6",
    xp: 200,
  },
  {
    id: 'l3',
    name: "束河古镇",
    nameEn: "Shuhe Ancient Town",
    emoji: "🐎",
    district: "古城区",
    lat: 26.9236, lng: 100.2079,
    peakTime: "全年皆宜",
    peakDays: "全年 · 比大研安静",
    difficulty: "easy",
    rating: 4.7,
    reviews: 9800,
    tags: ["茶马古道", "慢生活", "人少"],
    ticket: "免费",
    description: "茶马古道上的驿站古镇，青龙桥下雪水潺潺。比大研古城安静一个量级，院子咖啡馆和皮匠铺子错落，适合发呆半日，傍晚在九鼎龙潭看雪山倒影。",
    tips: "从大研打车 15 分钟即到，很多人选择住束河、玩大研；九鼎龙潭免费且是雪山倒影机位。",
    transport: "丽江古城打车约15分钟，或骑行前往",
    color: "#7A8B5A",
    xp: 100,
  },
  {
    id: 'l4',
    name: "黑龙潭公园",
    nameEn: "Black Dragon Pool",
    emoji: "⛲",
    district: "古城区北",
    lat: 26.8880, lng: 100.2340,
    peakTime: "全年（晴天早晨）",
    peakDays: "干季晴晨倒影最清",
    difficulty: "easy",
    rating: 4.5,
    reviews: 6400,
    tags: ["雪山倒影", "拍照机位", "免费"],
    ticket: "凭古城维护费票据免费",
    description: "教科书级的玉龙雪山倒影机位：得月楼、五孔桥与雪山同框倒映潭中，人民币背面同款构图。清晨光线最顺、水面最静，出片率极高。",
    tips: "一定赶早——上午 10 点前雪山云少、游客少；带古维费票据入园。",
    transport: "古城北门步行约15分钟",
    color: "#294B6B",
    xp: 80,
  },
  {
    id: 'l5',
    name: "白沙古镇",
    nameEn: "Baisha Village",
    emoji: "🎨",
    district: "玉龙县",
    lat: 26.9552, lng: 100.2040,
    peakTime: "全年皆宜",
    peakDays: "全年 · 原生态",
    difficulty: "easy",
    rating: 4.6,
    reviews: 4200,
    tags: ["纳西发源地", "白沙壁画", "原生态"],
    ticket: "古镇免费（白沙壁画 30 元）",
    description: "纳西族最早的聚居地、木氏土司的发家之处。明代白沙壁画融汉藏纳西三种画风于一壁；主街上老人晒太阳、铜匠敲铜器，是三座古镇里最接近「过去的丽江」的一座。",
    tips: "距雪山最近的古镇，可与玉龙雪山排同一天顺路；镇上文海路尽头直面雪山，拍人像绝佳。",
    transport: "古城打车约25分钟，或束河骑行前往",
    color: "#A9702F",
    xp: 90,
  },
  {
    id: 'l6',
    name: "拉市海",
    nameEn: "Lashi Lake",
    emoji: "🦢",
    district: "玉龙县",
    lat: 26.8530, lng: 100.1300,
    peakTime: "冬季观鸟最佳",
    peakDays: "11-2月候鸟季",
    difficulty: "easy",
    rating: 4.3,
    reviews: 5100,
    tags: ["湿地", "茶马古道骑马", "观鸟"],
    ticket: "湿地公园约 30 元起（骑马划船另计，需砍价）",
    description: "高原湿地湖泊，冬天数万候鸟越冬。环湖是旧时茶马古道，骑马走一段山路、再划船看水鸟，是丽江周边最经典的半日活动。",
    tips: "骑马项目鱼龙混杂，认准正规马场并提前谈好价格路线；冬季清晨观鸟光线最美。",
    transport: "古城打车约30分钟；多为骑马+划船套餐",
    color: "#3B6E86",
    xp: 90,
  },
  {
    id: 'l7',
    name: "泸沽湖",
    nameEn: "Lugu Lake",
    emoji: "🛶",
    district: "宁蒗县",
    lat: 27.7000, lng: 100.7800,
    peakTime: "全年皆宜",
    peakDays: "10-4月湖水最蓝",
    difficulty: "medium",
    rating: 4.9,
    reviews: 11300,
    tags: ["高原明珠", "摩梭文化", "环湖"],
    ticket: "门票 70 元",
    description: "海拔 2690 米的高原深水湖，能见度极高，猪槽船划过里格半岛像漂在果冻上。环湖 60 公里串起摩梭村落，走婚桥、格姆女神山、湖边篝火晚会，值得住上一两晚。",
    tips: "车程约 3.5-4 小时且山路多，强烈建议住 1-2 晚而非当天往返；里格半岛看日出、大落水看日落。",
    transport: "丽江客运站班车/拼车约4小时，环湖包车或租电瓶车",
    color: "#1CB0F6",
    xp: 180,
  },
]

/* 周边顺游 —— 完整景点数据（可想去/打卡/上地图/集章），isNearby 标记保持分区展示 */
const lijiangNearby = [
  {
    id: 'ln1',
    name: "虎跳峡",
    nameEn: "Tiger Leaping Gorge",
    emoji: "🌊",
    district: "香格里拉市",
    lat: 27.1800, lng: 100.0900,
    peakTime: "全年（雨季水最猛）",
    peakDays: "6-9月水量最大",
    difficulty: "medium",
    rating: 4.8,
    reviews: 7600,
    tags: ["世界级峡谷", "徒步", "金沙江"],
    ticket: "上虎跳 45 元",
    desc: "金沙江劈开哈巴与玉龙雪山，世界最深峡谷之一",
    description: "金沙江在玉龙、哈巴两座雪山之间劈出的巨壑，江面最窄处仅 30 余米，虎跳石旁水声如雷。上虎跳栈道轻松可达；徒步爱好者走高路（High Trail）两天一夜，是世界级徒步线。",
    tips: "普通游客走上虎跳栈道即可（往返约1小时）；徒步高路需提前订山上客栈，雨季注意落石。",
    transport: "丽江古城驾车约2小时（行政属迪庆香格里拉）",
    color: "#4E7A5E",
    xp: 110,
    isNearby: true,
  },
  {
    id: 'ln2',
    name: "石鼓·长江第一湾",
    nameEn: "First Bend of the Yangtze",
    emoji: "🌀",
    district: "玉龙县石鼓镇",
    lat: 26.8670, lng: 99.9600,
    peakTime: "全年皆宜",
    peakDays: "晴天观湾最佳",
    difficulty: "easy",
    rating: 4.4,
    reviews: 2100,
    tags: ["长江第一湾", "观景台", "红军渡"],
    ticket: "观景台约 20 元",
    desc: "万里长江在此掉头北上，V 形大湾一眼千年",
    description: "金沙江自青藏高原南下，在石鼓镇突然 180° 掉头北去，成就「长江第一湾」。观景台看 V 形大湾全貌，镇上还有红军渡江纪念碑与老街。",
    tips: "与老君山黎明同方向，可排同一天；下午顺光适合拍湾。",
    transport: "丽江驾车约1小时",
    color: "#B08968",
    xp: 70,
    isNearby: true,
  },
  {
    id: 'ln3',
    name: "老君山黎明",
    nameEn: "Laojun Mountain Liming",
    emoji: "🪨",
    district: "玉龙县黎明乡",
    lat: 26.9000, lng: 99.6600,
    peakTime: "全年皆宜",
    peakDays: "干季登山安全",
    difficulty: "medium",
    rating: 4.6,
    reviews: 1800,
    tags: ["丹霞地貌", "千龟山", "攀岩圣地"],
    ticket: "100 元",
    desc: "滇金丝猴故乡，千龟山丹霞像万龟朝圣",
    description: "三江并流世界遗产核心区，中国攀岩圣地。千龟山的红色丹霞龟裂如万千石龟列队上山，日照金山时整面山壁烧成橙红色，徒步栈道约 2 小时可登顶。",
    tips: "住黎明镇看清晨丹霞最红的时刻；千龟山栈道有些陡，穿防滑鞋。",
    transport: "丽江驾车约2.5小时，山路多注意驾驶",
    color: "#B4472F",
    xp: 100,
    isNearby: true,
  },
]

const lijiangItinerary = [
  {
    day: 1, title: "抵达·古城与夜色", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达丽江，入住大研或束河客栈" },
      { time: "傍晚", icon: "🏮", text: "大研古城四方街漫步，登狮子山万古楼看日落", spotId: 'l1' },
      { time: "晚上", icon: "🎶", text: "酒吧街听一场民谣 / 尝腊排骨火锅" },
    ]
  },
  {
    day: 2, title: "雪山一日", date: "Day 2",
    activities: [
      { time: "清晨", icon: "⛲", text: "黑龙潭拍玉龙雪山倒影（赶早云少）", spotId: 'l4' },
      { time: "上午", icon: "🏔️", text: "玉龙雪山大索道上 4506 冰川公园", spotId: 'l2' },
      { time: "下午", icon: "💧", text: "蓝月谷环湖，雪山做背景随手大片" },
      { time: "傍晚", icon: "🐎", text: "束河古镇晚餐，九鼎龙潭散步", spotId: 'l3' },
    ]
  },
  {
    day: 3, title: "古镇与田园", date: "Day 3",
    activities: [
      { time: "上午", icon: "🎨", text: "白沙古镇看壁画，主街晒太阳", spotId: 'l5' },
      { time: "下午", icon: "🦢", text: "拉市海骑马走茶马古道 + 划船", spotId: 'l6' },
      { time: "晚上", icon: "🍲", text: "回古城吃纳西烤鱼 / 鸡豆凉粉" },
    ]
  },
  {
    day: 4, title: "泸沽湖或返程", date: "Day 4",
    activities: [
      { time: "上午", icon: "🛶", text: "赴泸沽湖（建议加住一晚）或虎跳峡一日游" },
      { time: "下午", icon: "🎁", text: "古城选购鲜花饼、东巴纸、螺旋藻伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（大理、香格里拉）" },
    ]
  },
]

const lijiangTips = [
  { icon: "📅", title: "最佳季节", content: "10-次年5月干季：天空通透、雪山出镜率最高，11-4月雪量最足。6-9月雨季多阵雨，雪山常被云罩，但古城清爽、虎跳峡水量最壮观。" },
  { icon: "⛰️", title: "高原反应", content: "丽江城区海拔 2400 米，多数人无感；玉龙雪山冰川公园 4506 米，行动放慢、备氧气瓶（山下买 30 元左右，山顶翻倍）。上山前一晚别喝酒、睡好。" },
  { icon: "🎫", title: "古城维护费", content: "古维费 50 元（一周有效），进木府、黑龙潭等会查验。玉龙雪山大索道旺季常售罄，务必提前 1-3 天在「玉龙雪山」官方公众号预约。" },
  { icon: "🚕", title: "市内交通", content: "古城内全步行；大研⇄束河打车约 20 元；雪山包车往返约 150-200 元或坐景区直通车。泸沽湖班车 4 小时，晕车备药。" },
  { icon: "📸", title: "拍照机位", content: "黑龙潭五孔桥拍雪山倒影（赶早）；狮子山万古楼俯瞰古城青瓦；白沙文海路正对雪山拍人像；蓝月谷白水台阶地。" },
  { icon: "🍽️", title: "美食提醒", content: "必尝腊排骨火锅、鸡豆凉粉、纳西烤鱼、丽江粑粑。四方街周边溢价高，本地人多去花马街、金凯广场一带。" },
  { icon: "🙏", title: "民族习俗", content: "丽江以纳西族为主，东巴文是仍在使用的象形文字。进入纳西院落、东巴文化场所保持尊重，拍摄老人前先打招呼征得同意。" },
]

const lijiangFoods = [
  { name: "腊排骨火锅", emoji: "🍲", desc: "丽江名片，腌香浓郁，配韭菜根蘸水" },
  { name: "鸡豆凉粉", emoji: "🥗", desc: "丽江特有鸡豆制成，凉拌煎炸两吃" },
  { name: "丽江粑粑", emoji: "🥞", desc: "千层油酥饼，甜咸两味，配酥油茶" },
  { name: "纳西烤鱼", emoji: "🐟", desc: "炭火慢烤，外皮焦香，抹辣椒面" },
  { name: "米灌肠", emoji: "🌭", desc: "糯米猪血灌制，纳西年节味道" },
  { name: "牦牛酸奶", emoji: "🥛", desc: "浓稠扎实，撒糖开吃，解腻神器" },
]

const lijiangPackList = [
  { icon: "🧴", text: "高倍防晒霜（高原紫外线极强）" },
  { icon: "🧥", text: "厚外套/羽绒服（雪山顶比古城低15℃+）" },
  { icon: "💨", text: "氧气瓶/红景天（上玉龙雪山备用）" },
  { icon: "👟", text: "舒适防滑鞋（古城石板路、雪山栈道）" },
  { icon: "🔋", text: "充电宝（低温耗电快）" },
  { icon: "💳", text: "身份证 + 古维费票据（多处查验）" },
]

const lijiangSeason = {
  title: "最佳旅行季节",
  sub: "看雪山的城，看天吃饭",
  rows: [
    { dot: "early", label: "❄️ 冬春（11—4月）", date: "雪量最足，晴天率高，日照金山概率大" },
    { dot: "peak",  label: "☀️ 最佳（10—5月）", date: "干季通透，雪山出镜率最高", badge: "推荐" },
    { dot: "late",  label: "🌧️ 雨季（6—9月）", date: "多阵雨雪山常被云罩，虎跳峡水量最壮" },
  ],
}


/* ════════════════ 兰州 ════════════════ */
const lanzhouSpots = [
  {
    id: 'lz1',
    name: "中山桥",
    nameEn: "Zhongshan Bridge",
    emoji: "🌉",
    district: "城关区",
    lat: 36.0617, lng: 103.8235,
    peakTime: "全年（夜景最佳）",
    peakDays: "夏季傍晚 · 华灯初上",
    difficulty: "easy",
    rating: 4.6,
    reviews: 13400,
    tags: ["必去", "天下黄河第一桥", "夜景"],
    isHot: true,
    ticket: "免费",
    description: "1909 年建成的黄河第一座永久性铁桥，钢架由德国泰来洋行跨洋运来。白天看百年铁骨横跨浊浪，入夜灯带亮起、桥下羊皮筏子灯影摇晃，是兰州最有辨识度的一帧。桥头即黄河风情线，沿滨河路可以一路走到水车园。",
    tips: "傍晚上桥人最多，想拍空镜赶清晨；对岸白塔山视角能拍到桥与黄河同框的全景。",
    transport: "地铁1号线省政府站步行约10分钟；滨河路公交多路可达",
    color: "#C7592B",
    xp: 100,
  },
  {
    id: 'lz2',
    name: "白塔山公园",
    nameEn: "White Pagoda Mountain",
    emoji: "🗼",
    district: "城关区",
    lat: 36.0690, lng: 103.8220,
    peakTime: "全年",
    peakDays: "晴日黄昏俯瞰最佳",
    difficulty: "medium",
    rating: 4.5,
    reviews: 8900,
    tags: ["俯瞰黄河穿城", "元代白塔", "免费"],
    ticket: "免费",
    description: "中山桥正对的山头，元代白塔立于山巅。爬约半小时步道登顶，黄河穿城、两山夹一河的兰州地形一览无余——这座城市为什么长成一条带状，站在这里一眼就懂。",
    tips: "黄昏登顶最值：夕阳下的黄河是真正的「金河」，等到华灯初上再拍中山桥夜景，一次收两景。",
    transport: "中山桥北桥头即入口，步行登山约30分钟；也有索道",
    color: "#294B6B",
    xp: 120,
  },
  {
    id: 'lz3',
    name: "甘肃省博物馆",
    nameEn: "Gansu Provincial Museum",
    emoji: "🐎",
    district: "七里河区",
    lat: 36.0587, lng: 103.7500,
    peakTime: "全年（周一闭馆）",
    peakDays: "全年 · 需提前预约",
    difficulty: "easy",
    rating: 4.8,
    reviews: 16800,
    tags: ["必去", "铜奔马真品", "丝路文明"],
    isHot: true,
    ticket: "免费（公众号预约，周一闭馆）",
    description: "「马踏飞燕」铜奔马的家。丝绸之路文明展从彩陶一路铺到唐三彩，汉简、驿使图画像砖、莲花形玻璃托盏都是教科书级文物。要看懂甘肃为什么是丝路咽喉，这里比任何攻略都直观。",
    tips: "铜奔马真品在二楼丝绸之路展厅，围观人多赶开馆；文创雪糕和「绿马」玩偶是热门伴手礼。",
    transport: "地铁1号线七里河站步行约10分钟",
    color: "#7C5CFF",
    xp: 130,
  },
  {
    id: 'lz4',
    name: "黄河母亲雕塑",
    nameEn: "Yellow River Mother Statue",
    emoji: "🫶",
    district: "七里河区",
    lat: 36.0621, lng: 103.7810,
    peakTime: "全年",
    peakDays: "全年 · 顺路打卡",
    difficulty: "easy",
    rating: 4.3,
    reviews: 5600,
    tags: ["城市地标", "滨河路", "免费"],
    ticket: "免费",
    description: "滨河路上的城市图腾：母亲侧卧、幼子依偎，花岗岩雕出黄河与华夏的隐喻。就在黄河风情线步道边，从中山桥骑行过来十来分钟，顺路合影正好。",
    tips: "适合安排在滨河骑行途中，与水车园、中山桥串成一条线。",
    transport: "滨河中路，中山桥沿河步道向西约2公里",
    color: "#B08968",
    xp: 70,
  },
  {
    id: 'lz5',
    name: "水车博览园",
    nameEn: "Waterwheel Garden",
    emoji: "🎡",
    district: "城关区",
    lat: 36.0660, lng: 103.8630,
    peakTime: "4-10月水量足",
    peakDays: "夏季水车全转",
    difficulty: "easy",
    rating: 4.4,
    reviews: 4700,
    tags: ["黄河水车", "非遗", "亲子友好"],
    ticket: "免费开放（体验项目另计）",
    description: "十几架巨型黄河水车沿岸吱呀转动——明代兰州人就是靠这些木轮把黄河水提上旱塬的。园子不大但声画俱全，水车、羊皮筏子、黄河快闪合影一次集齐。",
    tips: "夏天来水车才有水转；园区东侧滨河段可以近距离看羊皮筏子下水。",
    transport: "滨河东路，中山桥沿河向东约3公里，骑行最顺",
    color: "#3B6E86",
    xp: 80,
  },
  {
    id: 'lz6',
    name: "正宁路夜市",
    nameEn: "Zhengning Road Night Market",
    emoji: "🍢",
    district: "城关区",
    lat: 36.0560, lng: 103.8280,
    peakTime: "晚上7点后",
    peakDays: "全年夜间 · 越晚越热",
    difficulty: "easy",
    rating: 4.5,
    reviews: 9200,
    tags: ["必去", "牛奶鸡蛋醪糟", "烟火气"],
    isHot: true,
    ticket: "免费进入",
    description: "兰州夜生活的浓缩现场：一条街的炭火与吆喝，牛奶鸡蛋醪糟的铜锅当街翻滚，烤羊肉、酿皮、甜醅子一路吃过去。《舌尖》带火的老马家醪糟就在这条街上，排队也值。",
    tips: "牛奶鸡蛋醪糟认准现打蛋花的老摊；人流高峰在 21 点后，肠胃弱少混搭冷热。",
    transport: "地铁1号线西关站步行约8分钟",
    color: "#E8409C",
    xp: 90,
  },
  {
    id: 'lz7',
    name: "五泉山公园",
    nameEn: "Wuquan Mountain",
    emoji: "⛩️",
    district: "城关区",
    lat: 36.0400, lng: 103.8420,
    peakTime: "全年",
    peakDays: "春秋最舒适",
    difficulty: "medium",
    rating: 4.4,
    reviews: 6100,
    tags: ["五眼名泉", "明清古建", "免费"],
    ticket: "免费",
    description: "皋兰山北麓的老公园，因霍去病「鞭插五泉」的传说得名。惠、甘露、掬月、摸子、蒙五眼泉散在山间，明清殿宇层层叠上山坡，本地人晨练喝茶的日常里藏着兰州的旧时光。",
    tips: "上午来最有生活气：茶摊、鸟笼、快板声。登到山顶可远眺城区，体力一般走到中段泉群即可。",
    transport: "地铁1号线五泉广场站步行约15分钟",
    color: "#4E7A5E",
    xp: 90,
  },
]

/* 周边顺游 —— 完整景点数据（可想去/打卡/上地图/集章），isNearby 标记保持分区展示 */
const lanzhouNearby = [
  {
    id: 'lzn1',
    name: "兴隆山",
    nameEn: "Xinglong Mountain",
    emoji: "🌲",
    district: "榆中县",
    lat: 35.7620, lng: 104.0630,
    peakTime: "全年（秋景最盛）",
    peakDays: "9-10月层林尽染",
    difficulty: "medium",
    rating: 4.5,
    reviews: 3300,
    tags: ["陇右名山", "秋色", "森林徒步"],
    ticket: "约40元",
    desc: "黄土高原上的一抹深绿，秋天层林尽染",
    description: "距兰州最近的国家级自然保护区，干旱黄土高原上难得的茂密森林。东西两山夹一条云龙桥，成吉思汗军队曾在此屯驻。秋天桦树杉林染成金红，是兰州人躲城市的后花园。",
    tips: "东山（兴隆）步道成熟适合大众，西山（栖云）更野；秋季周末人多，早出发。",
    transport: "兰州驾车约1小时",
    color: "#4E7A5E",
    xp: 100,
    isNearby: true,
  },
  {
    id: 'lzn2',
    name: "黄河石林",
    nameEn: "Yellow River Stone Forest",
    emoji: "🏜️",
    district: "白银市景泰县",
    lat: 37.0500, lng: 104.2000,
    peakTime: "4-10月",
    peakDays: "春秋清爽，夏避正午",
    difficulty: "medium",
    rating: 4.7,
    reviews: 4100,
    tags: ["丹霞石林", "22道弯", "羊皮筏子"],
    ticket: "门票+观光车约70元",
    desc: "亿年黄河切出的石头森林，22道弯直下河谷",
    description: "黄河在景泰拐出一个大湾，亿万年风蚀水切雕出百米高的土黄色石林。乘车盘下 22 道弯到龙湾村，坐羊皮筏子漂一段黄河、再骑毛驴穿饮马沟大峡谷——西北的粗粝浪漫一次给足。",
    tips: "景区流程固定（观光车+筏子+驴车各自收费），出发前算好组合；夏季正午暴晒，备水防晒。",
    transport: "兰州驾车约2.5小时（行政属白银市景泰县）",
    color: "#B4472F",
    xp: 120,
    isNearby: true,
  },
  {
    id: 'lzn3',
    name: "刘家峡·炳灵寺",
    nameEn: "Liujiaxia & Bingling Temple",
    emoji: "🛥️",
    district: "临夏州永靖县",
    lat: 35.9330, lng: 103.3140,
    peakTime: "5-10月",
    peakDays: "夏秋水库最碧",
    difficulty: "medium",
    rating: 4.6,
    reviews: 3800,
    tags: ["高峡平湖", "石窟艺术", "快艇"],
    ticket: "炳灵寺约50元 + 快艇/游轮船费另计",
    desc: "高峡平湖乘快艇，尽头是千年石窟",
    description: "刘家峡水库把黄河拦成一片碧绿高峡平湖，乘快艇劈浪四十分钟，两岸丹霞石壁渐渐收窄，尽头就是开凿于西秦的炳灵寺石窟——169 窟的西方三圣像比莫高窟纪年还早。水路本身就是风景。",
    tips: "坐快艇比大游轮省时（往返约2小时）；石窟内禁拍照，特窟另收费值得看。",
    transport: "兰州驾车约1.5小时至刘家峡码头，转船（行政属临夏州永靖县）",
    color: "#1CB0F6",
    xp: 130,
    isNearby: true,
  },
]

const lanzhouItinerary = [
  {
    day: 1, title: "抵达·一碗面一条河", date: "Day 1",
    activities: [
      { time: "中午", icon: "🍜", text: "落地先吃头一碗牛肉面（本地人只叫牛肉面）" },
      { time: "下午", icon: "🌉", text: "中山桥+黄河风情线漫步，看羊皮筏子", spotId: 'lz1' },
      { time: "晚上", icon: "🍢", text: "正宁路夜市：牛奶鸡蛋醪糟+烤羊肉", spotId: 'lz6' },
    ]
  },
  {
    day: 2, title: "丝路与黄河", date: "Day 2",
    activities: [
      { time: "上午", icon: "🐎", text: "甘肃省博物馆看铜奔马（提前预约）", spotId: 'lz3' },
      { time: "中午", icon: "🫶", text: "滨河路骑行：黄河母亲→水车博览园", spotId: 'lz4' },
      { time: "下午", icon: "🎡", text: "水车园看黄河水车，河边喝三炮台", spotId: 'lz5' },
      { time: "傍晚", icon: "🗼", text: "白塔山黄昏登顶，俯瞰黄河穿城+桥的夜景", spotId: 'lz2' },
    ]
  },
  {
    day: 3, title: "老兰州的一天", date: "Day 3",
    activities: [
      { time: "上午", icon: "⛩️", text: "五泉山逛老公园，茶摊听快板", spotId: 'lz7' },
      { time: "下午", icon: "🏞️", text: "雁滩/读者大道闲逛，或兴隆山半日" },
      { time: "晚上", icon: "🐑", text: "手抓羊肉+灰豆子收尾" },
    ]
  },
  {
    day: 4, title: "顺游或返程", date: "Day 4",
    activities: [
      { time: "上午", icon: "🚗", text: "顺游黄河石林 或 刘家峡·炳灵寺（可选）" },
      { time: "下午", icon: "🎁", text: "选购百合干、软儿梨、三炮台茶料伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（西宁、张掖、敦煌）" },
    ]
  },
]

const lanzhouTips = [
  { icon: "📅", title: "最佳季节", content: "5-10月最舒服：夏季均温 25℃ 上下，是天然避暑地，黄河风情线夜晚凉风习习。冬季干冷多风，但暖气充足、牛肉面更香。春季偶有浮尘。" },
  { icon: "🍜", title: "牛肉面文化", content: "本地只说「牛肉面」，没有「兰州拉面」。讲究一清二白三红四绿；早上头锅汤最鲜，老店多在中午前售罄。点单黑话：毛细/二细/韭叶是面型，「肉蛋双飞」=加肉加蛋。" },
  { icon: "⛰️", title: "海拔气候", content: "市区海拔约 1500 米，基本无高反。极度干燥——润唇膏、保湿和大量喝水比防晒还重要；昼夜温差大，夏夜也要薄外套。" },
  { icon: "🚇", title: "市内交通", content: "地铁1号线沿黄河贯穿东西，主要景点基本都在沿线。中川机场距市区约 70 公里，城际铁路约 40 分钟直达兰州站，比打车靠谱。" },
  { icon: "📸", title: "拍照机位", content: "白塔山半山拍中山桥+黄河同框（黄昏到夜景）；滨河路水车园段拍羊皮筏子；省博铜奔马展厅侧面 45° 是官方同款角度。" },
  { icon: "🛶", title: "羊皮筏子", content: "夏季黄河风情线有羊皮筏子漂流体验（约20-30分钟），百年摆渡技艺变成了漂流项目。选正规码头上筏，穿好救生衣，贵重物品防水袋。" },
  { icon: "🙏", title: "多元风味", content: "兰州清真餐饮众多，进店尊重习俗、不自带食品酒水。灰豆子、甜醅子、酿皮这些小吃在街边店比景区档口地道得多。" },
]

const lanzhouFoods = [
  { name: "兰州牛肉面", emoji: "🍜", desc: "一清二白三红四绿，早上头锅最香" },
  { name: "牛奶鸡蛋醪糟", emoji: "🥛", desc: "铜锅现打蛋花，正宁路夜市招牌" },
  { name: "手抓羊肉", emoji: "🐑", desc: "白条肉蘸椒盐，鲜嫩无膻" },
  { name: "灰豆子", emoji: "🫘", desc: "麻豌豆熬糖水，绵沙暖胃" },
  { name: "甜醅子", emoji: "🌾", desc: "燕麦发酵微醺甜，夏天冰镇最解暑" },
  { name: "酿皮子", emoji: "🍝", desc: "筋道爽滑，油泼辣子灵魂" },
]

const lanzhouPackList = [
  { icon: "🧴", text: "保湿+润唇膏（极干燥，比防晒还急）" },
  { icon: "🧥", text: "薄外套（昼夜温差大，夏夜也凉）" },
  { icon: "🕶️", text: "墨镜+防晒（高原日照强）" },
  { icon: "👟", text: "舒适鞋（滨河线一走就是几公里）" },
  { icon: "💊", text: "肠胃药（夜市冷热混搭考验肠胃）" },
  { icon: "💳", text: "身份证（省博预约、城际购票）" },
]

const lanzhouSeason = {
  title: "最佳旅行季节",
  sub: "黄河穿城的避暑地",
  rows: [
    { dot: "early", label: "🌸 春（4—5月）", date: "浮尘渐止，滨河线新绿" },
    { dot: "peak",  label: "☀️ 最佳（5—10月）", date: "夏季约25℃天然避暑，夜市黄金季", badge: "推荐" },
    { dot: "late",  label: "❄️ 冬（11—3月）", date: "干冷多风，室内暖气足，面更香" },
  ],
}


/* ════════════════ 西双版纳 ════════════════ */
const bannaSpots = [
  {
    id: 'bn1', name: "中科院热带植物园", nameEn: "Menglun Botanical Garden", emoji: "🌴",
    district: "勐腊县勐仑", lat: 21.9130, lng: 101.2700,
    peakTime: "全年皆宜", peakDays: "干季11-4月最舒适", difficulty: "easy",
    rating: 4.8, reviews: 14200, tags: ["必去", "热带雨林", "王莲·独木成林"],
    isHot: true, ticket: "门票约80元 + 园内电瓶车另计",
    description: "中国面积最大的热带植物园，一座罗梭江环抱的绿岛。上万种热带植物：能坐人的王莲、见血封喉、绞杀榕、跳舞草，夜游还能看昙花与萤火虫。半天到一天都逛不完，是版纳雨林的浓缩课堂。",
    tips: "园区极大务必租电瓶车或坐观光车；西区看棕榈、王莲，东区是原始雨林；夜游需另约。",
    transport: "景洪客运站班车约1.5小时至勐仑",
    color: "#3E9E63", xp: 140,
  },
  {
    id: 'bn2', name: "野象谷", nameEn: "Wild Elephant Valley", emoji: "🐘",
    district: "景洪市", lat: 22.1780, lng: 100.8560,
    peakTime: "全年", peakDays: "清晨/傍晚遇象概率高", difficulty: "easy",
    rating: 4.5, reviews: 11800, tags: ["必去", "亚洲象", "雨林索道"],
    isHot: true, ticket: "门票约65元 + 索道约50元",
    description: "中国唯一的亚洲野象栖息观测地。高架栈道穿行雨林树冠层，运气好能俯瞰到野象群饮水；园区有大象学校表演与蝴蝶园。看不到野象也有雨林和亚洲象博物馆兜底。",
    tips: "野象随缘，别抱必见期望；坐索道进、栈道出最省力；雨林潮湿备防蚊防滑。",
    transport: "景洪驾车约1小时，昆曼公路旁",
    color: "#4E7A5E", xp: 130,
  },
  {
    id: 'bn3', name: "告庄西双景·星光夜市", nameEn: "Gaozhuang Night Market", emoji: "🏮",
    district: "景洪市", lat: 22.0280, lng: 100.8130,
    peakTime: "晚上6点后", peakDays: "全年夜间 · 越晚越旺", difficulty: "easy",
    rating: 4.6, reviews: 16500, tags: ["必去", "东南亚风情", "大金塔夜景"],
    isHot: true, ticket: "免费进入",
    description: "复刻古代景洪「景真」的傣泰风情城。大金塔在夜色里通体金亮，湄公河星光夜市几百个摊位卖傣装、手鼓、热带水果和东南亚小吃，穿一身傣裙拍照、放一盏水灯，是版纳夜生活的中心。",
    tips: "傍晚先上大金塔看日落再逛夜市；周末有泼水与篝火；夜市溢价，水果按斤先问价。",
    transport: "景洪市区，打车/步行可达",
    color: "#E0A82E", xp: 100,
  },
  {
    id: 'bn4', name: "曼听公园", nameEn: "Manting Park", emoji: "🕌",
    district: "景洪市", lat: 21.9840, lng: 100.8100,
    peakTime: "全年", peakDays: "傍晚看歌舞篝火", difficulty: "easy",
    rating: 4.4, reviews: 7300, tags: ["傣王御花园", "泼水广场", "篝火晚会"],
    ticket: "门票约40元（篝火晚会另计）",
    description: "一千三百多年历史的傣王御花园，版纳最古老的公园。周恩来总理泼水节纪念铜像、白象与孔雀雕塑、总佛寺就在一带。傍晚的傣族歌舞、泼水与篝火狂欢晚会是招牌体验。",
    tips: "白天逛园+总佛寺，晚上看《澜沧江·湄公河之夜》篝火晚会需另买票，建议提前订。",
    transport: "景洪市区曼听路，打车可达",
    color: "#C7592B", xp: 90,
  },
  {
    id: 'bn5', name: "橄榄坝傣族园", nameEn: "Ganlanba Dai Park", emoji: "💦",
    district: "景洪市勐罕", lat: 21.9040, lng: 100.9800,
    peakTime: "全年", peakDays: "天天泼水节", difficulty: "easy",
    rating: 4.3, reviews: 5600, tags: ["五个傣寨", "天天泼水", "贝叶经"],
    ticket: "门票约50元",
    description: "由五个原生傣族村寨组成的活态园区，村民就住在里面。曼春满古佛寺的贝叶经、竹楼里的手工织锦、每天下午的泼水广场狂欢，是不等泼水节也能被泼个痛快的地方。",
    tips: "带一套换洗衣物参加泼水；想深度体验可住寨子里的傣家竹楼客栈。",
    transport: "景洪驾车约40分钟至勐罕镇",
    color: "#1CB0F6", xp: 90,
  },
  {
    id: 'bn6', name: "望天树", nameEn: "Wangtianshu Canopy Walk", emoji: "🌳",
    district: "勐腊县", lat: 21.6100, lng: 101.5800,
    peakTime: "全年", peakDays: "干季栈道不滑", difficulty: "medium",
    rating: 4.6, reviews: 4900, tags: ["空中树冠走廊", "补蚌雨林", "望天树"],
    ticket: "门票约75元 + 空中走廊约60元",
    description: "中国唯一能走进热带雨林树冠层的地方。高约40米的空中吊桥走廊在望天树巨冠间摇晃，脚下是密不透光的原始雨林，南腊河可乘船。名副其实的「雨林探险」。",
    tips: "距景洪较远（约2.5小时），建议住勐腊或雨林里的树上旅馆；恐高者空中走廊慎入。",
    transport: "景洪驾车约2.5小时至勐腊",
    color: "#2E8B57", xp: 120,
  },
  {
    id: 'bn7', name: "基诺山寨", nameEn: "Jino Ethnic Village", emoji: "🥁",
    district: "景洪市基诺乡", lat: 22.1000, lng: 101.0500,
    peakTime: "全年", peakDays: "全年 · 民族风情", difficulty: "easy",
    rating: 4.2, reviews: 3100, tags: ["最后确认的民族", "太阳鼓", "普洱古茶"],
    ticket: "门票约100元（含歌舞表演）",
    description: "基诺族是中国最后一个被确认（1979年）的少数民族，全族聚居于此。太阳鼓舞、大鼓迎宾、卓巴长老讲寨史，山上就是普洱茶名产区攸乐古茶山，能喝到最地道的古树茶。",
    tips: "与野象谷同方向可顺路；表演场次固定，进寨先看时间表。",
    transport: "景洪驾车约50分钟，基诺山",
    color: "#8A5A2B", xp: 90,
  },
]

/* 周边顺游 —— 均在版纳州内（勐海/勐腊），派生同归西双版纳 */
const bannaNearby = [
  {
    id: 'bnn1', name: "打洛·独树成林", nameEn: "Daluo Solitary Tree Forest", emoji: "🌲",
    district: "勐海县打洛镇", lat: 21.7200, lng: 100.1200,
    peakTime: "全年", peakDays: "干季边境通行顺", difficulty: "easy",
    rating: 4.3, reviews: 2200, tags: ["中缅边境", "一树成林", "口岸"],
    ticket: "独树成林约50元",
    desc: "一棵大榕树气根落地成林，边境风情",
    description: "中缅边境小镇打洛，一棵百年大青树的气根垂地生根、独木撑成一片小树林。旁边就是国境线与中缅第一寨勐景来，能感受到浓浓的边地口岸风情。",
    tips: "近边境，带好身份证；可与勐景来、界碑一并打卡。",
    transport: "景洪驾车约2小时至打洛镇",
    color: "#4E7A5E", xp: 80, isNearby: true,
  },
  {
    id: 'bnn2', name: "南糯山古茶园", nameEn: "Nannuo Ancient Tea Mountain", emoji: "🍵",
    district: "勐海县", lat: 21.9500, lng: 100.5800,
    peakTime: "全年（春茶3-4月）", peakDays: "3-4月采春茶", difficulty: "medium",
    rating: 4.5, reviews: 1900, tags: ["普洱古茶山", "八百年茶王", "哈尼村寨"],
    ticket: "免费（茶园体验另计）",
    desc: "普洱茶圣地，八百年古茶树与哈尼茶农",
    description: "勐海普洱茶的核心产区，山上有树龄八百余年的栽培型古茶王。云雾缭绕的梯级茶园间散落着哈尼族（爱伲人）村寨，可以住进茶农家，采茶、炒茶、喝一泡最地道的古树生普。",
    tips: "春茶季（3-4月）最热闹但价高；找靠谱茶农深度体验，别在路边高价买茶。",
    transport: "景洪驾车约1小时至勐海南糯山",
    color: "#7A8B5A", xp: 90, isNearby: true,
  },
  {
    id: 'bnn3', name: "中缅第一寨·勐景来", nameEn: "Mengjinglai Village", emoji: "🛕",
    district: "勐海县打洛镇", lat: 21.7050, lng: 100.1350,
    peakTime: "全年", peakDays: "全年 · 边境傣寨", difficulty: "easy",
    rating: 4.2, reviews: 1600, tags: ["中缅边境", "傣族古寨", "佛塔"],
    ticket: "门票约60元",
    desc: "界河边的千年傣寨，塔林与竹楼",
    description: "紧贴中缅界河打洛江的边境傣族古寨，塔林、佛寺、榕树、竹楼、章哈（傣族说唱）俱全。江对岸就是缅甸，走一段国境线、看一眼界碑，是版纳最有边地气息的一站。",
    tips: "与独树成林同在打洛，顺路同游；带身份证过边检。",
    transport: "景洪驾车约2小时至打洛",
    color: "#C08A45", xp: 80, isNearby: true,
  },
]

const bannaItinerary = [
  {
    day: 1, title: "抵达·傣泰夜色", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达景洪，入住告庄或江景客栈" },
      { time: "傍晚", icon: "🏮", text: "告庄大金塔看日落，星光夜市吃喝逛", spotId: 'bn3' },
      { time: "晚上", icon: "💃", text: "曼听公园篝火泼水晚会（或江边喝一杯）", spotId: 'bn4' },
    ]
  },
  {
    day: 2, title: "雨林与野象", date: "Day 2",
    activities: [
      { time: "上午", icon: "🐘", text: "野象谷雨林栈道 + 索道，找野象", spotId: 'bn2' },
      { time: "下午", icon: "🥁", text: "基诺山寨看太阳鼓，喝攸乐古树茶", spotId: 'bn7' },
      { time: "晚上", icon: "🍢", text: "回景洪吃傣味烧烤 + 舂鸡脚" },
    ]
  },
  {
    day: 3, title: "植物园一日", date: "Day 3",
    activities: [
      { time: "上午", icon: "🌴", text: "中科院热带植物园西区：王莲、棕榈", spotId: 'bn1' },
      { time: "下午", icon: "🌿", text: "植物园东区原始雨林，绞杀榕、见血封喉" },
      { time: "傍晚", icon: "💦", text: "橄榄坝傣族园泼水，住傣家竹楼", spotId: 'bn5' },
    ]
  },
  {
    day: 4, title: "深雨林或边境", date: "Day 4",
    activities: [
      { time: "全天", icon: "🌳", text: "望天树空中走廊 或 打洛边境独树成林" },
      { time: "下午", icon: "🎁", text: "选购小粒咖啡、普洱茶、傣族织锦伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（普洱、昆明）" },
    ]
  },
]

const bannaTips = [
  { icon: "📅", title: "最佳季节", content: "11-4月干季最舒服：气候宜人、雨少路好。泼水节（傣历新年，公历4月中旬）是全年最盛的节庆，但机票房价翻倍需极早订。5-10月雨季闷热多阵雨，水果最便宜。" },
  { icon: "🦟", title: "防蚊防晒", content: "热带高温高湿，蚊虫多。长效驱蚊液、防晒、透气长袖是三件套；雨林徒步穿防滑鞋，随身带雨具。" },
  { icon: "🛂", title: "边境证件", content: "打洛、勐景来等中缅边境点务必带身份证过边检。切勿越境或购买来路不明商品。" },
  { icon: "🚕", title: "景点分散", content: "版纳景点散在景洪/勐海/勐腊三地，望天树、打洛距景洪都要2小时以上，建议包车或按片区分天安排，别贪多。" },
  { icon: "🍍", title: "热带水果", content: "菠萝蜜、山竹、莽吉柿、树番茄、鸡蛋果一年四季不断。夜市按斤称先问价；生冷混吃注意肠胃。" },
  { icon: "☕", title: "咖啡与茶", content: "版纳产小粒咖啡与普洱古树茶。南糯山、攸乐山是名产区，找茶农喝一泡，比景区档口地道也划算。" },
  { icon: "🙏", title: "民族习俗", content: "傣族全民信南传佛教，进佛寺脱鞋、不摸僧人头顶、不指佛像。尊重泼水的祝福含义，被泼是受祝福。" },
]

const bannaFoods = [
  { name: "傣味包烧", emoji: "🍃", desc: "香茅芭蕉叶裹烤，鱼/猪肉都香" },
  { name: "菠萝饭", emoji: "🍍", desc: "菠萝盅蒸糯米，酸甜有果香" },
  { name: "香茅草烤鱼", emoji: "🐟", desc: "罗非鱼夹香茅炭烤，外焦里嫩" },
  { name: "舂鸡脚", emoji: "🌶️", desc: "现舂酸辣，版纳夜市顶流" },
  { name: "手抓饭", emoji: "🍛", desc: "一大盘紫米配烤肉时蔬，手抓着吃" },
  { name: "泡鲁达", emoji: "🥥", desc: "椰奶西米面包干，东南亚风冰饮" },
]

const bannaPackList = [
  { icon: "🦟", text: "长效驱蚊液（雨林蚊虫多）" },
  { icon: "🧴", text: "高倍防晒 + 透气长袖" },
  { icon: "🩴", text: "凉鞋/防滑鞋（泼水+雨林两用）" },
  { icon: "🌂", text: "雨具（雨季随时阵雨）" },
  { icon: "👕", text: "泼水节换洗衣物 + 防水袋" },
  { icon: "💳", text: "身份证（边境边检查验）" },
]

const bannaSeason = {
  title: "最佳旅行季节",
  sub: "北回归线上的雨林",
  rows: [
    { dot: "peak",  label: "☀️ 最佳（11—4月）", date: "干季气候宜人，路况最好", badge: "推荐" },
    { dot: "early", label: "💦 泼水节（4月中）", date: "傣历新年最盛，需极早订票" },
    { dot: "late",  label: "🌧️ 雨季（5—10月）", date: "闷热多阵雨，水果最便宜" },
  ],
}


/* ════════════════ 保山 ════════════════ */
const baoshanSpots = [
  {
    id: 'bs1', name: "高黎贡山·百花岭", nameEn: "Gaoligong Baihualing", emoji: "🦜",
    district: "隆阳区", lat: 25.3000, lng: 98.8000,
    peakTime: "全年（观鸟11-4月）", peakDays: "冬春观鸟旺季", difficulty: "medium",
    rating: 4.7, reviews: 5200, tags: ["必去", "观鸟圣地", "生物多样性"],
    isHot: true, ticket: "免费（向导/鸟塘另计）",
    description: "「世界物种基因库」高黎贡山的东坡门户。百花岭是国内顶级观鸟地，五百多种鸟在此栖息，冬春季各地鸟人扛着长炮蹲鸟塘。除了鸟，还有原始森林、瀑布与南方丝绸之路古道，是徒步与自然爱好者的天堂。",
    tips: "观鸟需请当地向导带进鸟塘（付费），清晨最佳；徒步高黎贡穿越线较硬核，量力而行。",
    transport: "保山城区驾车约1小时至百花岭",
    color: "#2E8B57", xp: 140,
  },
  {
    id: 'bs2', name: "潞江坝·咖啡第一村", nameEn: "Lujiangba Coffee Village", emoji: "☕",
    district: "隆阳区潞江镇", lat: 24.9500, lng: 98.8800,
    peakTime: "全年（花季3月）", peakDays: "3月咖啡花开", difficulty: "easy",
    rating: 4.5, reviews: 3100, tags: ["小粒咖啡", "热带河谷", "新寨村"],
    isHot: true, ticket: "免费（庄园体验另计）",
    description: "怒江大峡谷里的热带河谷，中国小粒咖啡的核心产区。新寨村号称「中国咖啡第一村」，漫山咖啡树间能采豆、烘豆、喝一杯从树到杯的手冲。三月咖啡花似雪，河谷还种芒果、香料，暖得像另一个季节。",
    tips: "找正规咖啡庄园做采烘体验；河谷夏季酷热，防晒补水；顺路可看怒江大峡谷。",
    transport: "保山城区驾车约1小时下到潞江坝",
    color: "#8A5A2B", xp: 110,
  },
  {
    id: 'bs3', name: "太保山公园", nameEn: "Taibao Mountain Park", emoji: "⛩️",
    district: "隆阳区", lat: 25.1180, lng: 99.1550,
    peakTime: "全年", peakDays: "全年 · 城市后山", difficulty: "easy",
    rating: 4.3, reviews: 2600, tags: ["城市后山", "玉皇阁", "俯瞰保山坝"],
    ticket: "免费",
    description: "保山城西的后山公园，明代玉皇阁飞檐叠翠，文笔塔立于山巅。爬上去可俯瞰整个保山坝子，是本地人晨练喝茶遛弯的日常去处，古建与市井烟火气都有。",
    tips: "上午本地生活气最浓；玉皇阁的斗拱彩绘值得细看。",
    transport: "保山城区西侧，步行/打车可达",
    color: "#C7592B", xp: 80,
  },
  {
    id: 'bs4', name: "云岩卧佛寺", nameEn: "Wofo Temple", emoji: "🛕",
    district: "隆阳区", lat: 25.1600, lng: 99.0700,
    peakTime: "全年", peakDays: "全年 · 千年石佛", difficulty: "easy",
    rating: 4.4, reviews: 1900, tags: ["唐代卧佛", "崖壁石窟", "古刹"],
    ticket: "免费",
    description: "云岩山崖壁上的千年古刹，主尊是一尊唐代天然崖石雕成的卧佛，是云南少见的早期石窟造像。寺依崖建、林木葱郁，清净幽深，比城里的香火庙多了几分山野气。",
    tips: "与太保山可排同半天；山路石阶，穿舒适鞋。",
    transport: "保山城区驾车约20分钟至云岩山",
    color: "#A9702F", xp: 90,
  },
  {
    id: 'bs5', name: "板桥青龙街", nameEn: "Banqiao Qinglong Street", emoji: "🏮",
    district: "隆阳区板桥镇", lat: 25.2100, lng: 99.2000,
    peakTime: "全年", peakDays: "赶集日最热闹", difficulty: "easy",
    rating: 4.4, reviews: 2300, tags: ["茶马古道", "千年古街", "赶集"],
    ticket: "免费",
    description: "南方丝绸之路与茶马古道上的千年古驿。青龙街一里长的青石板路两旁是明清老铺、马店、手艺人作坊，赶集日更是人声鼎沸。没有过度商业化，是滇西保存最好的古集市之一。",
    tips: "遇赶集日（当地农历逢集）最有生活气；街边小吃、竹编、老秤铺值得逛。",
    transport: "保山城区驾车约25分钟至板桥镇",
    color: "#B08968", xp: 90,
  },
  {
    id: 'bs6', name: "玛御谷温泉", nameEn: "Mayugu Hot Spring", emoji: "♨️",
    district: "隆阳区潞江镇", lat: 24.9800, lng: 98.9200,
    peakTime: "全年（秋冬最惬意）", peakDays: "秋冬泡汤季", difficulty: "easy",
    rating: 4.5, reviews: 3400, tags: ["天然温泉", "河谷度假", "养生"],
    ticket: "门票约128元起",
    description: "潞江坝热带河谷里的温泉度假区，背靠高黎贡、面朝怒江。多个露天汤池掩在棕榈与三角梅间，泡着温泉看河谷落日，是保山最舒服的慢下来方式，尤其秋冬。",
    tips: "带泳衣；旺季周末人多，非节假日更清净；可与咖啡村排同一天。",
    transport: "保山城区驾车约1小时至潞江坝",
    color: "#3B6E86", xp: 90,
  },
  {
    id: 'bs7', name: "金鸡古镇", nameEn: "Jinji Ancient Town", emoji: "🐓",
    district: "隆阳区金鸡乡", lat: 25.1700, lng: 99.2300,
    peakTime: "全年", peakDays: "全年 · 汉营古都", difficulty: "easy",
    rating: 4.2, reviews: 1500, tags: ["哀牢古都", "汉营", "古庙戏台"],
    ticket: "免费",
    description: "两千多年前哀牢国、汉代不韦县的所在地，号称「先有金鸡、后有保山」。古镇里文昌宫、戏台、古庙格局犹存，青石巷子安静少人，藏着保山最古老的一段历史。",
    tips: "与板桥青龙街同方向可顺游；镇上老茶馆能歇脚喝盖碗茶。",
    transport: "保山城区驾车约20分钟至金鸡乡",
    color: "#CE9A2B", xp: 80,
  },
]

/* 周边顺游 —— 均在保山市内（龙陵/昌宁/施甸），派生同归保山 */
const baoshanNearby = [
  {
    id: 'bsn1', name: "龙陵·松山战场遗址", nameEn: "Songshan WWII Battlefield", emoji: "🎖️",
    district: "龙陵县", lat: 24.7000, lng: 98.9500,
    peakTime: "全年", peakDays: "全年 · 抗战纪念", difficulty: "medium",
    rating: 4.8, reviews: 3600, tags: ["滇西抗战", "远征军", "战壕遗址"],
    ticket: "免费",
    description: "滇西抗战最惨烈的战场之一。1944 年中国远征军血战三月收复松山，山上完整保留着战壕、弹坑与工事，402 座远征军雕塑列阵山坡，无声肃穆。是一堂沉重而必要的历史课。",
    tips: "山顶徒步约2小时，庄重瞻仰；与龙陵邦腊掌温泉可排同天。",
    transport: "保山驾车约1.5小时至龙陵松山",
    color: "#6B4E3D", xp: 110, isNearby: true,
  },
  {
    id: 'bsn2', name: "昌宁·右甸茶乡", nameEn: "Changning Tea Town", emoji: "🍵",
    district: "昌宁县", lat: 24.8300, lng: 99.6000,
    peakTime: "全年（春茶3-4月）", peakDays: "3-4月采春茶", difficulty: "easy",
    rating: 4.3, reviews: 1200, tags: ["千年茶乡", "古茶树", "田园"],
    ticket: "免费",
    description: "全国唯一命名的「千年茶乡」，境内古茶树成群。右甸坝子稻田连片、茶山环抱，是滇西红茶与普洱的重要产区。春天采茶、看田园，慢悠悠住一晚很治愈。",
    tips: "春茶季找茶农体验最地道；县城到茶山有距离，自驾方便。",
    transport: "保山驾车约2小时至昌宁",
    color: "#7A8B5A", xp: 80, isNearby: true,
  },
  {
    id: 'bsn3', name: "施甸·善洲林场", nameEn: "Shandian Forest Farm", emoji: "🌲",
    district: "施甸县", lat: 24.7300, lng: 99.1900,
    peakTime: "全年", peakDays: "夏秋林木最盛", difficulty: "medium",
    rating: 4.4, reviews: 900, tags: ["杨善洲精神", "林海", "徒步"],
    ticket: "免费",
    description: "老书记杨善洲退休后带人二十余年种出的一片人工林海，如今五万余亩郁郁葱葱。林场里能徒步、看老场部、听那段「把荒山变绿洲」的故事，是一处朴素动人的精神地标。",
    tips: "海拔较高备薄外套；林间步道适合慢走，庄重感受。",
    transport: "保山驾车约1.5小时至施甸大亮山",
    color: "#4E7A5E", xp: 90, isNearby: true,
  },
]

const baoshanItinerary = [
  {
    day: 1, title: "抵达·古城后山", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达保山，入住城区" },
      { time: "傍晚", icon: "⛩️", text: "太保山公园登玉皇阁，俯瞰保山坝", spotId: 'bs3' },
      { time: "晚上", icon: "🥩", text: "城区吃火瓢牛肉 + 大薄片" },
    ]
  },
  {
    day: 2, title: "咖啡与河谷", date: "Day 2",
    activities: [
      { time: "上午", icon: "☕", text: "潞江坝咖啡第一村采豆手冲", spotId: 'bs2' },
      { time: "下午", icon: "♨️", text: "玛御谷温泉泡汤，看河谷落日", spotId: 'bs6' },
      { time: "晚上", icon: "🍜", text: "回城尝蒲缥甩饵丝 / 下村豆粉" },
    ]
  },
  {
    day: 3, title: "古镇与古佛", date: "Day 3",
    activities: [
      { time: "上午", icon: "🏮", text: "板桥青龙街逛千年茶马古集", spotId: 'bs5' },
      { time: "下午", icon: "🛕", text: "云岩卧佛寺访唐代崖佛", spotId: 'bs4' },
      { time: "傍晚", icon: "🐓", text: "金鸡古镇喝盖碗茶，访哀牢古都", spotId: 'bs7' },
    ]
  },
  {
    day: 4, title: "观鸟或抗战", date: "Day 4",
    activities: [
      { time: "全天", icon: "🦜", text: "高黎贡百花岭观鸟徒步 或 龙陵松山抗战遗址" },
      { time: "下午", icon: "🎁", text: "选购小粒咖啡、永子围棋、昌宁红茶伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（腾冲、大理）" },
    ]
  },
]

const baoshanTips = [
  { icon: "📅", title: "最佳季节", content: "全年温和，11-4月干季晴多路好、是观鸟旺季；3月咖啡花开、潞江坝暖如夏。5-10月雨季山路湿滑，怒江河谷闷热。城区海拔约1650米，气候舒适。" },
  { icon: "🦜", title: "观鸟须知", content: "高黎贡百花岭观鸟需请当地向导带进付费鸟塘，清晨光线与鸟况最好。长焦、迷彩、耐心是三件套；徒步穿越线较硬核需专业向导。" },
  { icon: "☕", title: "咖啡体验", content: "保山是中国小粒咖啡发源地之一。潞江坝新寨村可做采豆、日晒、烘焙、手冲全流程，认准正规庄园；带一包生豆或挂耳当伴手礼。" },
  { icon: "🚕", title: "景点分散", content: "保山景点散在隆阳城区、潞江坝、龙陵、昌宁、施甸，跨度大，强烈建议自驾或包车，按片区分天走，别当天来回硬赶。" },
  { icon: "🎖️", title: "抗战史迹", content: "松山、龙陵是滇西抗战主战场，遗址庄严，请肃穆瞻仰、勿喧哗嬉闹。保山城内还有滇西抗战纪念相关场馆可延伸了解。" },
  { icon: "🍽️", title: "美食提醒", content: "火瓢牛肉（铜瓢现煮）、大薄片、蒲缥甩饵丝是保山名片。街边老店比景区地道；潞江坝的热带水果与手冲咖啡别错过。" },
  { icon: "🪶", title: "永子文化", content: "保山是围棋「永子」的产地，以南红玛瑙、黄龙玉等原料烧制，温润著名。感兴趣可看永子非遗，是有分量的伴手礼。" },
]

const baoshanFoods = [
  { name: "火瓢牛肉", emoji: "🥩", desc: "铜瓢炭火现煮，鲜香滚烫" },
  { name: "大薄片", emoji: "🥓", desc: "猪头肉切透光薄片，蘸水解腻" },
  { name: "蒲缥甩饵丝", emoji: "🍜", desc: "保山早餐顶流，汤鲜饵丝滑" },
  { name: "下村豆粉", emoji: "🫘", desc: "豌豆粉凉热两吃，油辣子灵魂" },
  { name: "潞江芒果", emoji: "🥭", desc: "热带河谷所产，甜糯多汁" },
  { name: "保山小粒咖啡", emoji: "☕", desc: "本土手冲，果酸柔和" },
]

const baoshanPackList = [
  { icon: "🧥", text: "薄外套（昼夜温差，山上更凉）" },
  { icon: "🧴", text: "防晒（河谷日照强）" },
  { icon: "👟", text: "徒步鞋（观鸟/松山山路）" },
  { icon: "🔭", text: "长焦相机/望远镜（观鸟）" },
  { icon: "👕", text: "泳衣（玛御谷温泉）" },
  { icon: "💳", text: "身份证（住宿/购票）" },
]

const baoshanSeason = {
  title: "最佳旅行季节",
  sub: "高黎贡下，咖啡飘香",
  rows: [
    { dot: "peak",  label: "☀️ 最佳（11—4月）", date: "干季晴多路好，观鸟旺季", badge: "推荐" },
    { dot: "early", label: "🌸 春（3月）", date: "咖啡花开，潞江坝暖如夏" },
    { dot: "late",  label: "🌧️ 雨季（5—10月）", date: "山路湿滑，河谷闷热" },
  ],
}


/* ════════════════ 腾冲 ════════════════ */
const tengchongSpots = [
  {
    id: 'tc1', name: "和顺古镇", nameEn: "Heshun Ancient Town", emoji: "🏯",
    district: "腾冲市和顺镇", lat: 25.0000, lng: 98.4500,
    peakTime: "全年皆宜", peakDays: "秋冬晴多光线好", difficulty: "easy",
    rating: 4.7, reviews: 13800, tags: ["必去", "侨乡", "图书馆·洗衣亭"],
    isHot: true, ticket: "古镇门票约55元",
    description: "西南丝路上六百年的侨乡古镇。火山石铺成的巷道、中西合璧的宗祠与老宅、荷塘边的洗衣亭，还有全国最大的乡村图书馆。走马观花半日，慢住可两天，是腾冲最有书卷气的一站。",
    tips: "清晨或黄昏古镇最静最出片；艾思奇纪念馆、弯楼子、图书馆都值得进；住镇内老宅客栈体验最好。",
    transport: "腾冲城区驾车约20分钟",
    color: "#B08968", xp: 120,
  },
  {
    id: 'tc2', name: "热海景区", nameEn: "Rehai Hot Sea", emoji: "♨️",
    district: "腾冲市", lat: 24.9500, lng: 98.4400,
    peakTime: "全年（秋冬泡汤最惬意）", peakDays: "秋冬泡汤季", difficulty: "easy",
    rating: 4.6, reviews: 16200, tags: ["必去", "大滚锅", "地热温泉"],
    isHot: true, ticket: "门票约60元 + 泡池/浴谷另计",
    description: "腾冲火山地热的招牌。九十多度的「大滚锅」翻涌喷雾，蛋能煮熟；热海浴谷的露天温泉群依山而建，边泡汤边听地心轰鸣。这是一座活着的火山给你的免费桑拿。",
    tips: "买景区门票看大滚锅，泡温泉另买浴谷/美女池票；带泳衣，煮温泉蛋是保留项目。",
    transport: "腾冲城区驾车约20分钟",
    color: "#C7592B", xp: 130,
  },
  {
    id: 'tc3', name: "火山地质公园", nameEn: "Volcano Geopark", emoji: "🌋",
    district: "腾冲市马站乡", lat: 25.2200, lng: 98.4700,
    peakTime: "全年", peakDays: "晴天登顶视野好", difficulty: "medium",
    rating: 4.5, reviews: 9800, tags: ["休眠火山", "热气球", "大空山"],
    ticket: "门票约40元（火山锥登顶/热气球另计）",
    description: "腾冲是中国罕见的火山密集区，九十多座休眠火山散布坝子。大空山、小空山火山锥可徒步登顶俯瞰火山口，清晨还能坐热气球升空看火山群与田园——腾冲最出片的画面之一。",
    tips: "热气球仅清晨无风时段飞，需提前预约、看天吃饭；火山锥登顶约半小时，穿舒适鞋。",
    transport: "腾冲城区驾车约40分钟至马站",
    color: "#8B4A3B", xp: 120,
  },
  {
    id: 'tc4', name: "北海湿地", nameEn: "Beihai Wetland", emoji: "🌾",
    district: "腾冲市", lat: 25.1300, lng: 98.5600,
    peakTime: "3-5月草长莺飞", peakDays: "春季浮毯草甸最美", difficulty: "easy",
    rating: 4.4, reviews: 6100, tags: ["浮毯草甸", "划船", "赏花"],
    ticket: "门票约90元（含草排船）",
    description: "云南唯一的国家湿地，一片浮在水上的「草毯」。人能坐草排船划进花海，脚下的草甸随水晃动。三到五月各色野花开满浮毯，是腾冲最清新的一处田园野趣。",
    tips: "春季花最盛；草排船是特色；带防晒防蚊，木栈道慢走。",
    transport: "腾冲城区驾车约25分钟",
    color: "#4E7A5E", xp: 90,
  },
  {
    id: 'tc5', name: "银杏村", nameEn: "Ginkgo Village", emoji: "🍂",
    district: "腾冲市固东镇", lat: 25.4300, lng: 98.4200,
    peakTime: "11月中-12月初", peakDays: "深秋银杏铺金", difficulty: "easy",
    rating: 4.6, reviews: 7400, tags: ["古银杏", "秋色限定", "村居"],
    ticket: "旺季门票约40元",
    description: "固东江东村，三千余株古银杏散在村舍田间。深秋叶黄，金叶铺满屋顶、院落与小巷，村民就在金色里晒着秋。是全国最美的银杏季目的地之一，但只在十一月中到十二月初一小段时间。",
    tips: "花期极短且逐年略变，出发前查当地实时黄叶情况；旺季人多，早去避人潮。",
    transport: "腾冲城区驾车约1小时至固东",
    color: "#E0A82E", xp: 100,
  },
  {
    id: 'tc6', name: "国殇墓园·滇西抗战纪念馆", nameEn: "Guoshang Cemetery", emoji: "🎖️",
    district: "腾冲市", lat: 25.0250, lng: 98.4900,
    peakTime: "全年", peakDays: "全年 · 庄严瞻仰", difficulty: "easy",
    rating: 4.8, reviews: 8600, tags: ["必去", "远征军", "抗战纪念"],
    isHot: true, ticket: "免费（凭证件预约）",
    description: "中国规模最大的抗战英烈陵园。1944 年远征军血战收复腾冲，小团坡上密密麻麻的墓碑按建制排列，旁边的滇西抗战纪念馆用上万件实物讲述那段血火历史。腾冲最厚重的一课。",
    tips: "务必肃穆瞻仰，勿喧哗拍照嬉闹；纪念馆内容极翔实，预留两小时。",
    transport: "腾冲城区来凤山下，打车可达",
    color: "#6B4E3D", xp: 110,
  },
  {
    id: 'tc7', name: "叠水河瀑布·来凤山", nameEn: "Dieshui Waterfall", emoji: "💦",
    district: "腾冲市", lat: 25.0300, lng: 98.4850,
    peakTime: "全年（雨季水最壮）", peakDays: "6-9月水量最大", difficulty: "easy",
    rating: 4.2, reviews: 3200, tags: ["城边瀑布", "来凤山", "免费"],
    ticket: "叠水河约20元 / 来凤山免费",
    description: "城边就有的一挂瀑布，龙川江在此跌落成潭，「不须遥远访匡庐」。旁边来凤山国家森林公园登顶可俯瞰腾冲坝子与火山群，是清晨或傍晚散步的好去处。",
    tips: "与国殇墓园同方向可顺游；雨季瀑布最壮观；来凤山步道适合慢爬。",
    transport: "腾冲城区西南，打车约10分钟",
    color: "#3B6E86", xp: 80,
  },
]

/* 周边顺游 —— 均在腾冲市域内，派生同归保山 */
const tengchongNearby = [
  {
    id: 'tcn1', name: "云峰山", nameEn: "Yunfeng Mountain", emoji: "⛰️",
    district: "腾冲市瑞滇乡", lat: 25.4800, lng: 98.6500,
    peakTime: "全年（晴天云海）", peakDays: "秋冬云海最佳", difficulty: "medium",
    rating: 4.5, reviews: 2100, tags: ["道教名山", "索道", "云海"],
    ticket: "门票+索道约120元",
    desc: "刀削般的道教仙山，绝壁古道上云海",
    description: "一座拔地而起、四面刀削的道教名山。索道半程后要攀几百级绝壁石阶到山顶道观，晴日云海翻涌如临仙境。腾冲香火最盛的求签之处，也是俯瞰高黎贡余脉的观景台。",
    tips: "山顶风大带外套；绝壁段较陡，恐高谨慎；清晨云海概率高。",
    transport: "腾冲城区驾车约1小时至瑞滇",
    color: "#5A897B", xp: 100, isNearby: true,
  },
  {
    id: 'tcn2', name: "固东·滇滩边关", nameEn: "Diantan Border", emoji: "🚩",
    district: "腾冲市滇滩镇", lat: 25.6000, lng: 98.3300,
    peakTime: "全年", peakDays: "干季边境通行顺", difficulty: "easy",
    rating: 4.1, reviews: 800, tags: ["中缅边境", "口岸", "界碑"],
    ticket: "免费",
    desc: "中缅边境小镇，界碑与边地风情",
    description: "腾冲西北的中缅边境镇，猴桥、滇滩口岸一带能看到界碑与边贸市场，感受滇西边地的口岸烟火。与银杏村同方向，赏完金叶顺路到边关走走。",
    tips: "近边境带身份证；勿越境、勿购来路不明商品；与银杏村排同天。",
    transport: "腾冲城区驾车约1.5小时至滇滩",
    color: "#B4472F", xp: 70, isNearby: true,
  },
  {
    id: 'tcn3', name: "樱花谷温泉", nameEn: "Sakura Valley Spring", emoji: "🌸",
    district: "腾冲市界头镇", lat: 25.5500, lng: 98.6800,
    peakTime: "2-3月冬樱 / 全年温泉", peakDays: "2-3月冬樱盛开", difficulty: "medium",
    rating: 4.3, reviews: 1400, tags: ["高黎贡", "冬樱", "野溪温泉"],
    ticket: "门票约60元",
    desc: "高黎贡深处，冬樱与野溪温泉",
    description: "高黎贡山东坡界头的一处秘境，二三月冬樱漫山，山谷里散落着天然野溪温泉。人少景野，是把「赏花+泡汤+雨林」揉在一起的小众玩法，也算和 Sakura 的一点呼应。",
    tips: "路程较远山路多，自驾为宜；冬樱花期短，出发前确认；带泳衣泡野汤。",
    transport: "腾冲城区驾车约2小时至界头",
    color: "#E8409C", xp: 90, isNearby: true,
  },
]

const tengchongItinerary = [
  {
    day: 1, title: "抵达·侨乡慢时光", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达腾冲，入住和顺古镇老宅客栈" },
      { time: "傍晚", icon: "🏯", text: "和顺古镇巷弄、图书馆、洗衣亭散步", spotId: 'tc1' },
      { time: "晚上", icon: "🍲", text: "尝腾冲大救驾 + 土锅子" },
    ]
  },
  {
    day: 2, title: "火山与热海", date: "Day 2",
    activities: [
      { time: "清晨", icon: "🎈", text: "火山公园坐热气球看火山群（看天）", spotId: 'tc3' },
      { time: "上午", icon: "🌋", text: "登大小空山火山锥俯瞰火山口" },
      { time: "下午", icon: "♨️", text: "热海看大滚锅，浴谷泡温泉煮温泉蛋", spotId: 'tc2' },
    ]
  },
  {
    day: 3, title: "湿地与历史", date: "Day 3",
    activities: [
      { time: "上午", icon: "🌾", text: "北海湿地划草排船，赏浮毯花甸", spotId: 'tc4' },
      { time: "下午", icon: "🎖️", text: "国殇墓园+滇西抗战纪念馆肃穆瞻仰", spotId: 'tc6' },
      { time: "傍晚", icon: "💦", text: "叠水河瀑布 / 来凤山散步", spotId: 'tc7' },
    ]
  },
  {
    day: 4, title: "银杏或云峰", date: "Day 4",
    activities: [
      { time: "全天", icon: "🍂", text: "固东银杏村（深秋限定）或 云峰山云海" },
      { time: "下午", icon: "🎁", text: "选购腾药、藤编、玉石、松花糕伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（保山、瑞丽）" },
    ]
  },
]

const tengchongTips = [
  { icon: "📅", title: "最佳季节", content: "全年温和宜人。11月中-12月初银杏金黄（花期极短）；2-3月冬樱、油菜花；秋冬晴多、泡温泉最惬意。6-9月雨季瀑布水量最壮但山路湿滑。城区海拔约1650米，基本无高反。" },
  { icon: "🎈", title: "热气球", content: "火山公园热气球仅清晨无风时段飞，极易因天气取消，务必提前预约并预留弹性时间；系留升空与自由飞价格不同，看清项目。" },
  { icon: "♨️", title: "泡汤须知", content: "热海门票与温泉浴谷/美女池是分开收费的，想泡汤要单买；带泳衣、拖鞋；地热区雾大路滑，跟着栈道走勿靠近沸泉。" },
  { icon: "🍂", title: "银杏花期", content: "固东银杏村黄叶期只有11月中到12月初短短两三周，且逐年略有浮动。计划专程赏银杏务必出发前查当地实时黄叶播报，避免扑空。" },
  { icon: "🎖️", title: "抗战史迹", content: "国殇墓园、滇西抗战纪念馆是庄严的英烈纪念地，请肃穆瞻仰、勿喧哗嬉闹拍照。内容翔实，值得预留充足时间静心参观。" },
  { icon: "🍽️", title: "美食提醒", content: "大救驾（炒饵块）、土锅子、稀豆粉、松花糕是腾冲名片。和顺古镇及城区老店比景区档口地道；腾冲也产小粒咖啡与好茶。" },
  { icon: "💎", title: "玉石提醒", content: "腾冲是古代翡翠集散地，玉石市场繁荣但水深。非专业者切勿冲动高价购玉，谨防以次充好，理性看待「捡漏」故事。" },
]

const tengchongFoods = [
  { name: "大救驾", emoji: "🍳", desc: "腾冲炒饵块，配料丰富，名字有典故" },
  { name: "土锅子", emoji: "🍲", desc: "土陶锅层层码菜，炭火慢炖" },
  { name: "稀豆粉", emoji: "🥣", desc: "豌豆熬糊配油条米线，早餐暖胃" },
  { name: "松花糕", emoji: "🍡", desc: "松花粉裹豆沙，清甜不腻" },
  { name: "饵丝", emoji: "🍜", desc: "腾冲饵丝爽滑，配头脑最地道" },
  { name: "腾冲小粒咖啡", emoji: "☕", desc: "高黎贡余脉所产，风味柔和" },
]

const tengchongPackList = [
  { icon: "🧥", text: "薄外套（昼夜温差，山上更凉）" },
  { icon: "🧴", text: "防晒 + 保湿（高原干燥日照强）" },
  { icon: "👕", text: "泳衣拖鞋（热海泡汤）" },
  { icon: "👟", text: "徒步鞋（火山锥/来凤山）" },
  { icon: "🌂", text: "雨具（雨季随时阵雨）" },
  { icon: "💳", text: "身份证（墓园预约/边境查验）" },
]

const tengchongSeason = {
  title: "最佳旅行季节",
  sub: "火山热海，侨乡秋色",
  rows: [
    { dot: "early", label: "🍂 深秋（11月中-12初）", date: "银杏铺金，限定秋色", badge: "限定" },
    { dot: "peak",  label: "☀️ 最佳（10—4月）", date: "晴多干爽，泡温泉最惬意" },
    { dot: "late",  label: "🌧️ 雨季（6—9月）", date: "瀑布最壮，山路湿滑" },
  ],
}


/* ════════════════ 香格里拉 ════════════════ */
const shangriSpots = [
  {
    id: 'sg1', name: "普达措国家公园", nameEn: "Pudacuo National Park", emoji: "🏞️",
    district: "香格里拉市", lat: 27.9000, lng: 99.9800,
    peakTime: "5-6月杜鹃 / 9-10月秋色", peakDays: "夏绿秋金最美", difficulty: "easy",
    rating: 4.7, reviews: 9200, tags: ["必去", "高原湖泊", "属都湖·碧塔海"],
    isHot: true, ticket: "门票约100元 + 观光车约120元",
    description: "中国第一个国家公园，海拔三千多米的高原湿地。属都湖、碧塔海两泓碧水嵌在杜鹃林与草甸间，栈道绕湖而行，松萝挂树、牦牛低头吃草。夏天绿得发亮、秋天满山金红，是香格里拉最经典的一张明信片。",
    tips: "海拔高、步行多，量力慢走防高反；园区大务必坐观光车，全程约半天。",
    transport: "香格里拉城区驾车约30分钟",
    color: "#3B8A9E", xp: 140,
  },
  {
    id: 'sg2', name: "噶丹·松赞林寺", nameEn: "Ganden Sumtseling", emoji: "🛕",
    district: "香格里拉市", lat: 27.8700, lng: 99.7050,
    peakTime: "全年", peakDays: "清晨诵经最庄严", difficulty: "easy",
    rating: 4.6, reviews: 8100, tags: ["必去", "小布达拉宫", "藏传佛教"],
    isHot: true, ticket: "门票约90元",
    description: "云南规模最大的藏传佛教寺院，有「小布达拉宫」之称。依山而建的金顶群在阳光下熠熠生辉，倒映在拉姆央措湖里。清晨酥油灯与诵经声中，能感受到藏地信仰最厚重的那一面。",
    tips: "尊重僧人与礼仪、勿随意拍摄殿内；转经、绕寺按顺时针；清晨光线与氛围最佳。",
    transport: "香格里拉城区驾车约15分钟",
    color: "#B4472F", xp: 120,
  },
  {
    id: 'sg3', name: "独克宗古城", nameEn: "Dukezong Old Town", emoji: "🏯",
    district: "香格里拉市", lat: 27.8230, lng: 99.7080,
    peakTime: "全年", peakDays: "傍晚转经筒转起", difficulty: "easy",
    rating: 4.4, reviews: 6400, tags: ["月光古城", "世界最大转经筒", "藏式民居"],
    ticket: "免费（龟山公园转经筒另计）",
    description: "一座一千三百年的「月光之城」，茶马古道进藏的重镇。石板路、藏式土掌房层层叠叠，龟山公园顶那座世界最大的转经筒要数人合力才推得动。夜里灯火与远山剪影，安静又有力量。",
    tips: "傍晚上龟山推转经筒、看古城全景；古城 2014 年曾遭火灾，现已修复；住藏式客栈体验最好。",
    transport: "香格里拉城区内，步行可达",
    color: "#C7852B", xp: 100,
  },
  {
    id: 'sg4', name: "纳帕海·依拉草原", nameEn: "Napahai Lake", emoji: "🐎",
    district: "香格里拉市", lat: 27.8800, lng: 99.6300,
    peakTime: "夏绿 / 秋黄 / 冬候鸟", peakDays: "季节性湖泊，随季变脸", difficulty: "easy",
    rating: 4.3, reviews: 4200, tags: ["高原草原", "黑颈鹤", "骑马"],
    description: "香格里拉坝子里的季节性高原湖，夏天是水草丰美的依拉草原、牛马成群，秋天金黄，冬天水面归来成群黑颈鹤。可骑马环湖，是感受藏地草原辽阔最方便的一站。",
    tips: "骑马项目务必先谈好价格与路线，避免临时加价；黑颈鹤冬季（11-3月）才来。",
    transport: "香格里拉城区驾车约15分钟",
    color: "#7A9B4E", xp: 90,
  },
  {
    id: 'sg5', name: "石卡雪山", nameEn: "Shika Snow Mountain", emoji: "🏔️",
    district: "香格里拉市", lat: 27.7500, lng: 99.6000,
    peakTime: "全年（晴天看雪山群）", peakDays: "晴日远眺梅里", difficulty: "medium",
    rating: 4.4, reviews: 3600, tags: ["索道", "高山草甸", "远眺梅里"],
    ticket: "门票+索道约220元",
    description: "香格里拉近郊的雪山，坐两段索道直上海拔四千多米的观景台。晴天极目远眺，能望见梅里、玉龙、哈巴等一众雪山群峰，脚下是杜鹃与高山草甸。上山快、视野大，性价比的观景之选。",
    tips: "索道升得快，高反者放慢节奏、备氧；山顶风大极冷，务必带厚外套。",
    transport: "香格里拉城区驾车约20分钟",
    color: "#5E86AC", xp: 110,
  },
  {
    id: 'sg6', name: "中虎跳峡", nameEn: "Tiger Leaping Gorge", emoji: "🌊",
    district: "香格里拉市", lat: 27.1800, lng: 100.1300,
    peakTime: "全年（雨季水最猛）", peakDays: "6-9月江水最壮", difficulty: "hard",
    rating: 4.6, reviews: 5300, tags: ["世界峡谷", "金沙江", "徒步"],
    description: "世界最深的峡谷之一，金沙江在玉龙与哈巴两座雪山之间夺路狂奔。香格里拉一侧的中虎跳能下到江心巨石「虎跳石」，浪声如雷、水气扑面。高线徒步（Hutiaoxia Trek）更是户外圈的经典。",
    tips: "下中虎跳台阶陡峭、雨季易滑，量力而行；徒步高线需一到两天，请随向导或成熟攻略。",
    transport: "香格里拉城区驾车约2小时至峡谷",
    color: "#3B6E86", xp: 130,
  },
  {
    id: 'sg7', name: "巴拉格宗", nameEn: "Balagezong", emoji: "⛰️",
    district: "香格里拉市", lat: 28.1300, lng: 99.5500,
    peakTime: "5-10月", peakDays: "夏秋峡谷最美", difficulty: "medium",
    rating: 4.5, reviews: 2400, tags: ["香巴拉核心", "大峡谷", "玻璃栈道"],
    ticket: "门票+车约200元",
    description: "传说中「香巴拉」的核心，岗曲河切出的巨大峡谷里藏着雪山、原始森林与千年古村巴拉村。天然佛塔、高空玻璃栈道、通天峡，一路是未被过度开发的秘境风光，人少景野。",
    tips: "距城区较远（约2小时），建议一整天；峡谷内温差大，备外套。",
    transport: "香格里拉城区驾车约2小时至尼西",
    color: "#4E7A5E", xp: 110,
  },
]

/* 周边顺游 —— 深入德钦（属迪庆州），派生同归迪庆 */
const shangriNearby = [
  {
    id: 'sgn1', name: "梅里雪山·飞来寺", nameEn: "Meili Snow Mountain", emoji: "🏔️",
    district: "德钦县", lat: 28.4500, lng: 98.9000,
    peakTime: "10月-次年5月（日照金山）", peakDays: "冬春晴天见金山", difficulty: "easy",
    rating: 4.9, reviews: 6800, tags: ["日照金山", "卡瓦格博", "神山"],
    ticket: "飞来寺观景台约60元",
    desc: "藏区八大神山之首，晨光染金的卡瓦格博",
    description: "藏区八大神山之首，主峰卡瓦格博至今无人登顶、是藏民心中的圣山。飞来寺观景台正对十三座连绵雪峰，运气好能在清晨看到「日照金山」——阳光把峰顶染成一片熔金，是一生难忘的画面。",
    tips: "日照金山看天吃饭，冬春晴天概率高；清晨六七点就位；高海拔极冷，厚羽绒必备。",
    transport: "香格里拉驾车约3.5小时至德钦飞来寺",
    color: "#C08A45", xp: 130, isNearby: true,
  },
  {
    id: 'sgn2', name: "雨崩村", nameEn: "Yubeng Village", emoji: "🥾",
    district: "德钦县", lat: 28.3800, lng: 98.8300,
    peakTime: "5-6月 / 9-10月", peakDays: "春秋徒步最佳", difficulty: "hard",
    rating: 4.8, reviews: 3900, tags: ["徒步圣地", "神瀑冰湖", "秘境村落"],
    ticket: "景区约55元",
    desc: "梅里脚下的世外桃源，徒步者的朝圣地",
    description: "藏在梅里雪山脚下、曾经只能徒步进出的世外村落。神瀑、冰湖、笑农大本营环绕四周，被户外圈奉为「此生必走一次」的朝圣路线。雪山下的青稞地与藏式木屋，美得不真实。",
    tips: "徒步强度大、海拔高，需良好体能与几天时间；跟成熟队伍或向导，量力而行。",
    transport: "香格里拉驾车约4小时至西当，再徒步进村",
    color: "#5E86AC", xp: 130, isNearby: true,
  },
  {
    id: 'sgn3', name: "金沙江月亮湾", nameEn: "First Bend of Yangtze", emoji: "🌙",
    district: "德钦县奔子栏", lat: 28.1300, lng: 99.3500,
    peakTime: "全年", peakDays: "晴日俯瞰大湾", difficulty: "easy",
    rating: 4.4, reviews: 2100, tags: ["长江第一湾", "金沙江", "观景"],
    desc: "金沙江急转出一个巨大的马蹄形大湾",
    description: "去德钦路上的必停观景点。金沙江在奔子栏一带被山体逼得急转，绕出一个近乎闭合的马蹄形大湾，江水碧绿、山峦层叠，气势磅礴。是滇藏线上最出片的弯道之一。",
    tips: "路边观景台停留即可；与梅里同一方向，顺路打卡；山路弯多注意安全。",
    transport: "香格里拉驾车约2.5小时，德钦沿途",
    color: "#3B6E86", xp: 80, isNearby: true,
  },
]

const shangriItinerary = [
  {
    day: 1, title: "抵达·月光古城", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达香格里拉，慢走适应海拔，入住古城" },
      { time: "傍晚", icon: "🏯", text: "独克宗古城，龟山推世界最大转经筒", spotId: 'sg3' },
      { time: "晚上", icon: "🍲", text: "尝牦牛肉火锅 + 酥油茶暖身" },
    ]
  },
  {
    day: 2, title: "神寺与草原", date: "Day 2",
    activities: [
      { time: "上午", icon: "🛕", text: "松赞林寺（小布达拉宫）朝圣", spotId: 'sg2' },
      { time: "下午", icon: "🐎", text: "纳帕海依拉草原，骑马看牛羊", spotId: 'sg4' },
      { time: "傍晚", icon: "🏔️", text: "石卡雪山索道远眺雪山群（或次日）", spotId: 'sg5' },
    ]
  },
  {
    day: 3, title: "普达措一日", date: "Day 3",
    activities: [
      { time: "上午", icon: "🏞️", text: "普达措国家公园，属都湖栈道", spotId: 'sg1' },
      { time: "下午", icon: "🌲", text: "碧塔海草甸、松萝林，慢慢逛" },
      { time: "晚上", icon: "🔥", text: "回城藏式锅庄篝火（或休整备高海拔）" },
    ]
  },
  {
    day: 4, title: "梅里日照金山", date: "Day 4",
    activities: [
      { time: "凌晨", icon: "🚗", text: "早出发赴德钦（约3.5小时山路）" },
      { time: "清晨", icon: "🏔️", text: "飞来寺守候梅里「日照金山」", spotId: 'sgn1' },
      { time: "全天", icon: "🥾", text: "深度可徒步雨崩，或月亮湾顺游返程" },
    ]
  },
]

const shangriTips = [
  { icon: "⛰️", title: "高原反应", content: "香格里拉城区海拔约3300米，德钦、雨崩更高。抵达当天别剧烈运动、别洗澡、多休息；备红景天（提前吃）、葡萄糖与便携氧气；有严重心肺疾病者慎行。感觉不适及时下撤就医。" },
  { icon: "📅", title: "最佳季节", content: "5-6月杜鹃与草甸新绿、9-10月秋色金黄最美。梅里「日照金山」冬春（10月-次年5月）晴天概率高。雨季6-8月草甸最绿但山路易塌方、日照金山难见。" },
  { icon: "🧥", title: "保暖防晒", content: "高原昼夜温差极大，即便夏天也需厚外套，冬春去梅里要羽绒。紫外线极强，高倍防晒、墨镜、唇膏必备；空气干燥多补水。" },
  { icon: "🙏", title: "藏地礼俗", content: "尊重藏传佛教习俗：转经、转寺顺时针；不摸佛像佛塔、不踩经幡门槛；殿内一般禁摄；给人物拍照先征得同意。神山圣湖是信仰所在，勿喧哗嬉戏。" },
  { icon: "🚗", title: "路况与包车", content: "景点分散、多为盘山路（尤其去德钦），强烈建议包车或跟车，别自驾走夜路。雨季注意塌方与封路信息，行程留足弹性。" },
  { icon: "🍲", title: "饮食适应", content: "藏餐口味厚重（牦牛肉、酥油、青稞），肠胃敏感者循序适应；高原水温低不易煮熟，慎食生冷。松茸等菌类为夏秋季节限定。" },
  { icon: "🎫", title: "门票与时间", content: "普达措、石卡等大景区门票+车费较高且耗时，建议一景一天、别贪多。深度玩梅里、雨崩要单独安排 2-3 天，别塞进四日常规行程硬赶。" },
]

const shangriFoods = [
  { name: "牦牛肉火锅", emoji: "🍲", desc: "高原牦牛肉久炖，鲜香暖身" },
  { name: "酥油茶", emoji: "🍵", desc: "酥油打茶，咸香抗寒抗高反" },
  { name: "青稞酒", emoji: "🍶", desc: "青稞酿造，藏家待客的暖酒" },
  { name: "尼西土陶鸡", emoji: "🍗", desc: "尼西黑陶锅慢煨土鸡，原汁原味" },
  { name: "藏式糌粑", emoji: "🥣", desc: "青稞炒面拌酥油茶，藏家主食" },
  { name: "松茸", emoji: "🍄", desc: "夏秋限定，炭烤或炖鸡皆鲜" },
]

const shangriPackList = [
  { icon: "💊", text: "红景天/葡萄糖 + 便携氧气（防高反）" },
  { icon: "🧥", text: "厚外套/羽绒（昼夜温差极大）" },
  { icon: "🧴", text: "高倍防晒 + 墨镜 + 唇膏" },
  { icon: "👟", text: "防滑徒步鞋（虎跳峡/雨崩）" },
  { icon: "🧢", text: "保暖帽手套（雪山观景台极冷）" },
  { icon: "💳", text: "身份证（住宿/购票/边检）" },
]

const shangriSeason = {
  title: "最佳旅行季节",
  sub: "云之南，雪山之上",
  rows: [
    { dot: "peak",  label: "🌿 夏（5—6月）", date: "杜鹃盛开，草甸新绿", badge: "推荐" },
    { dot: "early", label: "🍂 秋（9—10月）", date: "秋色金黄，天高云净" },
    { dot: "late",  label: "🏔️ 冬春（10—次年5月）", date: "梅里日照金山概率最高" },
  ],
}


/* ════════════════ 昆明 ════════════════ */
const kunmingSpots = [
  {
    id: 'km1', name: "石林", nameEn: "Stone Forest", emoji: "🪨",
    district: "石林彝族自治县", lat: 24.7700, lng: 103.3300,
    peakTime: "全年", peakDays: "春秋气候最舒适", difficulty: "easy",
    rating: 4.6, reviews: 15600, tags: ["必去", "世界自然遗产", "喀斯特·阿诗玛"],
    isHot: true, ticket: "门票约130元 + 电瓶车另计",
    description: "世界自然遗产、地球上最壮观的喀斯特石林之一。两亿多年前的海底石灰岩被抬升、溶蚀成一片剑指苍穹的石头森林，「阿诗玛」的传说就藏在其中。撑天石、望峰亭、剑峰池，步步是奇观。",
    tips: "园区极大，租电瓶车省力；避开正午暴晒；彝族「阿诗玛」文化与火把节值得了解。",
    transport: "昆明市区驾车约1.5小时，或高铁至石林西站",
    color: "#8A7A66", xp: 140,
  },
  {
    id: 'km2', name: "滇池·海埂大坝", nameEn: "Dianchi Lake", emoji: "🕊️",
    district: "西山区", lat: 24.9600, lng: 102.6500,
    peakTime: "11-3月红嘴鸥", peakDays: "冬季万鸥齐飞", difficulty: "easy",
    rating: 4.5, reviews: 11200, tags: ["必去", "高原明珠", "红嘴鸥"],
    isHot: true, ticket: "免费",
    description: "云南最大的高原湖泊，昆明的母亲湖。海埂大坝隔水正对西山「睡美人」，每年冬天数万只红嘴鸥从西伯利亚飞来越冬，人一喂食便漫天翻飞，是春城冬日最治愈的画面。",
    tips: "红嘴鸥仅冬季（约11月-次年3月）在；备鸥粮别喂面包；日落时西山剪影最美。",
    transport: "昆明市区驾车约30分钟",
    color: "#3B8AA6", xp: 100,
  },
  {
    id: 'km3', name: "西山龙门", nameEn: "Xishan Dragon Gate", emoji: "⛩️",
    district: "西山区", lat: 24.9600, lng: 102.6300,
    peakTime: "全年", peakDays: "晴日俯瞰滇池", difficulty: "medium",
    rating: 4.5, reviews: 8400, tags: ["悬崖石窟", "俯瞰滇池", "睡美人山"],
    ticket: "门票约40元 + 索道另计",
    description: "「睡美人」西山临滇池的一段悬崖，古人在近乎垂直的崖壁上一凿一斧开出栈道与石窟，直抵龙门。凭栏俯瞰，整个滇池与昆明城尽收眼底，是俯看高原明珠的最佳阳台。",
    tips: "可坐索道上、栈道下；龙门栈道窄且陡，错峰避人流；与滇池、民族村同一片可连游。",
    transport: "昆明市区驾车约40分钟至西山脚",
    color: "#4E7A5E", xp: 110,
  },
  {
    id: 'km4', name: "翠湖公园", nameEn: "Green Lake Park", emoji: "🦆",
    district: "五华区", lat: 25.0500, lng: 102.7000,
    peakTime: "全年（冬季红嘴鸥）", peakDays: "冬日鸥满湖", difficulty: "easy",
    rating: 4.4, reviews: 6900, tags: ["城中湖", "老昆明", "讲武堂"],
    ticket: "免费",
    description: "镶在昆明老城里的一泓碧水，垂柳画桥、荷塘水榭，是最有老昆明味道的地方。冬天红嘴鸥也来这里，市民遛弯、票友唱曲，慢生活气息十足。旁边就是云南陆军讲武堂旧址。",
    tips: "清晨最静最出片；顺路可看讲武堂（黄色回廊建筑，多为免费）、云大老校区、文林街。",
    transport: "昆明市区内，地铁/打车可达",
    color: "#5E9B7E", xp: 80,
  },
  {
    id: 'km5', name: "官渡古镇", nameEn: "Guandu Ancient Town", emoji: "🏯",
    district: "官渡区", lat: 24.9700, lng: 102.7500,
    peakTime: "全年", peakDays: "全年 · 小吃烟火", difficulty: "easy",
    rating: 4.2, reviews: 5100, tags: ["千年古镇", "金刚塔", "官渡粑粑"],
    ticket: "免费",
    description: "滇池边一座上千年的古渡口小镇，妙湛寺前的金刚宝座塔是国宝级石塔。青石巷里满是官渡粑粑、饵块、米线的香气，古庙、戏台、螺蛳壳堆成的老墙都还在，市井味浓。",
    tips: "以吃为主的古镇，尝官渡粑粑、烧饵块；金刚塔值得细看；离市区近，半日足够。",
    transport: "昆明市区驾车约20分钟",
    color: "#C7852B", xp: 80,
  },
  {
    id: 'km6', name: "云南民族村", nameEn: "Yunnan Nationalities Village", emoji: "🪘",
    district: "西山区", lat: 24.9600, lng: 102.6600,
    peakTime: "全年（节庆最热闹）", peakDays: "泼水节/火把节最盛", difficulty: "easy",
    rating: 4.1, reviews: 4300, tags: ["民族风情", "滇池畔", "歌舞"],
    ticket: "门票约90元",
    description: "滇池边把云南二十多个世居民族的村寨浓缩在一起：傣家竹楼、白族三坊一照壁、藏式碉房、彝族土掌房……歌舞表演与泼水、火把等节庆轮番上演。一天看遍云南的民族万花筒。",
    tips: "适合初来云南、时间有限想快速了解民族文化者；与滇池、西山连成一片同游。",
    transport: "昆明市区驾车约30分钟，滇池畔",
    color: "#B4472F", xp: 80,
  },
  {
    id: 'km7', name: "斗南花市", nameEn: "Dounan Flower Market", emoji: "💐",
    district: "呈贡区", lat: 24.9000, lng: 102.7600,
    peakTime: "全年（夜市最旺）", peakDays: "全年 · 每晚开市", difficulty: "easy",
    rating: 4.5, reviews: 6200, tags: ["亚洲最大花市", "论斤卖花", "夜市"],
    ticket: "免费",
    description: "亚洲最大的鲜切花交易市场，中国每十枝鲜花就有七枝出自这里。夜幕下的交易大厅里，玫瑰、绣球、满天星按斤论把地卖，几块钱抱走一大束。爱花的人来这里会疯掉，是最「昆明」的浪漫。",
    tips: "对手零售夜市傍晚后最热闹；论斤/论扎买极便宜；带张报纸或买包装护花带走。",
    transport: "昆明市区驾车约30分钟至呈贡",
    color: "#C85C8E", xp: 90,
  },
]

/* 周边顺游 —— 均在昆明辖区（东川/宜良/禄劝），派生同归昆明 */
const kunmingNearby = [
  {
    id: 'kmn1', name: "东川红土地", nameEn: "Dongchuan Red Land", emoji: "🎨",
    district: "东川区", lat: 26.1000, lng: 103.1800,
    peakTime: "5-6月 / 9-12月", peakDays: "春播秋收色彩最浓", difficulty: "easy",
    rating: 4.6, reviews: 3400, tags: ["大地调色板", "摄影圣地", "红土梯田"],
    ticket: "免费（各观景点自由停）",
    desc: "红土、绿苗、油菜拼成的大地油画",
    description: "地球上最像调色盘的土地之一。铁红色的土壤配上不同季节的青稞、油菜、荞麦，在山坡上铺成一块块浓烈的色带，云影掠过时明暗流动。落霞沟、七彩坡是摄影人心中的圣地。",
    tips: "自驾串联各观景点最方便；晨昏光线最出片；距昆明约3小时，建议住一晚拍日出日落。",
    transport: "昆明市区驾车约3小时至东川",
    color: "#B4472F", xp: 100, isNearby: true,
  },
  {
    id: 'kmn2', name: "九乡溶洞", nameEn: "Jiuxiang Caves", emoji: "🕳️",
    district: "宜良县", lat: 24.9300, lng: 103.3600,
    peakTime: "全年", peakDays: "全年 · 洞中恒温", difficulty: "easy",
    rating: 4.4, reviews: 2600, tags: ["喀斯特溶洞", "地下峡谷", "荫翠峡"],
    ticket: "门票约90元 + 索道",
    desc: "地下的喀斯特奇观，与石林上下呼应",
    description: "「上有石林、下有九乡」。九乡是规模宏大的喀斯特溶洞群，坐船穿过幽绿的荫翠峡进洞，里面是雄狮厅、神女宫、地下瀑布与钟乳石林，是石林之外的另一半地质奇观。",
    tips: "与石林同方向可一并安排；洞内恒温凉爽、地面湿滑，穿防滑鞋带件外套。",
    transport: "昆明市区驾车约2小时至宜良九乡",
    color: "#3B6E86", xp: 90, isNearby: true,
  },
  {
    id: 'kmn3', name: "轿子雪山", nameEn: "Jiaozi Snow Mountain", emoji: "❄️",
    district: "禄劝县", lat: 26.0800, lng: 102.8500,
    peakTime: "12-3月雪 / 4-5月杜鹃", peakDays: "冬雪春杜鹃", difficulty: "medium",
    rating: 4.4, reviews: 2100, tags: ["昆明最高峰", "雾凇冰瀑", "高山杜鹃"],
    ticket: "门票+索道约150元",
    desc: "离昆明最近的雪山，冬雪春杜鹃",
    description: "昆明第一高峰、离城市最近能看雪的地方。冬天云海雾凇、冰瀑高悬，四五月漫山高山杜鹃盛开。栈道与索道直上四千余米，一日之内从春城到雪原，落差惊人。",
    tips: "冬季山上极冷防滑、备厚衣；高海拔慢行防高反；路程约3.5小时，宜早出发或住一晚。",
    transport: "昆明市区驾车约3.5小时至禄劝",
    color: "#5E86AC", xp: 100, isNearby: true,
  },
]

const kunmingItinerary = [
  {
    day: 1, title: "抵达·老城慢逛", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达昆明，入住市区" },
      { time: "傍晚", icon: "🦆", text: "翠湖公园遛弯，讲武堂、文林街", spotId: 'km4' },
      { time: "晚上", icon: "🍜", text: "尝正宗过桥米线 + 汽锅鸡" },
    ]
  },
  {
    day: 2, title: "滇池与西山", date: "Day 2",
    activities: [
      { time: "上午", icon: "⛩️", text: "西山龙门凿壁栈道，俯瞰滇池", spotId: 'km3' },
      { time: "下午", icon: "🕊️", text: "海埂大坝喂红嘴鸥（冬），民族村", spotId: 'km2' },
      { time: "晚上", icon: "💐", text: "斗南花市论斤抱花回", spotId: 'km7' },
    ]
  },
  {
    day: 3, title: "石林一日", date: "Day 3",
    activities: [
      { time: "上午", icon: "🪨", text: "石林喀斯特奇观，寻阿诗玛", spotId: 'km1' },
      { time: "下午", icon: "🕳️", text: "顺游九乡溶洞（上石林下九乡）" },
      { time: "傍晚", icon: "🏯", text: "返程官渡古镇吃粑粑、烧饵块", spotId: 'km5' },
    ]
  },
  {
    day: 4, title: "红土地或雪山", date: "Day 4",
    activities: [
      { time: "全天", icon: "🎨", text: "东川红土地大地油画 或 轿子雪山" },
      { time: "下午", icon: "🎁", text: "选购鲜花饼、普洱茶、菌菇干货伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（大理、建水）" },
    ]
  },
]

const kunmingTips = [
  { icon: "📅", title: "最佳季节", content: "「春城」四季如春、全年可玩。冬季（11-3月）红嘴鸥来滇池、翠湖越冬；春季（3-4月）圆通樱花、郊野杜鹃；夏秋是野生菌季。海拔约1900米，偶有轻微高原反应。" },
  { icon: "🍄", title: "野生菌须知", content: "夏秋（6-9月）是野生菌季，见手青、鸡枞、干巴菌鲜美但部分有毒。务必去正规餐馆，菌子必须炒熟炒透、不混食、不喝酒，切勿自采自食。" },
  { icon: "🕊️", title: "红嘴鸥", content: "红嘴鸥只在冬季（约11月-次年3月）到昆明越冬，滇池海埂、翠湖是最佳观赏点。请买专用鸥粮、勿喂面包等，勿惊扰抓捕。" },
  { icon: "🌂", title: "紫外线与温差", content: "高原日照强、紫外线高，防晒墨镜必备；昼夜温差大，早晚加件外套。天气「一雨成冬」，随身带把伞。" },
  { icon: "🚄", title: "交通枢纽", content: "昆明是云南的门户与交通枢纽，长水机场、高铁通达大理/丽江/西双版纳等地，适合作为云南之行的第一站或中转站。市内地铁较便利。" },
  { icon: "🍲", title: "滇味必尝", content: "过桥米线是招牌（生片汆汤，注意烫）、汽锅鸡清鲜、小锅米线市井、鲜花饼当伴手礼。老店比景区地道，官渡粑粑值得一试。" },
  { icon: "🌸", title: "花与季节", content: "昆明是「亚洲花都」，斗南花市全年鲜花论斤卖。若逢圆通樱潮（3月）、郊野杜鹃（4-5月）、坝美荷花等花期，行程可顺势安排。" },
]

const kunmingFoods = [
  { name: "过桥米线", emoji: "🍜", desc: "滚汤汆生片，昆明头牌，注意烫" },
  { name: "汽锅鸡", emoji: "🍲", desc: "汽锅蒸出原汁，清鲜滋补" },
  { name: "小锅米线", emoji: "🥘", desc: "铜锅现煮，酸浆米线市井味" },
  { name: "野生菌", emoji: "🍄", desc: "夏秋限定，见手青/鸡枞须炒透" },
  { name: "鲜花饼", emoji: "🌹", desc: "玫瑰入酥皮，云南头号伴手礼" },
  { name: "烧饵块", emoji: "🫓", desc: "炭烤糯米饵块裹酱，街头早餐" },
]

const kunmingPackList = [
  { icon: "🧥", text: "外套（昼夜温差，早晚偏凉）" },
  { icon: "🧴", text: "高倍防晒 + 墨镜（高原日照强）" },
  { icon: "🌂", text: "折叠伞（一雨成冬）" },
  { icon: "👟", text: "舒适步行鞋（石林/西山多走）" },
  { icon: "🕊️", text: "冬季备鸥粮零钱（喂红嘴鸥）" },
  { icon: "💳", text: "身份证（高铁/景区实名）" },
]

const kunmingSeason = {
  title: "最佳旅行季节",
  sub: "四季如春的春城",
  rows: [
    { dot: "peak",  label: "🌸 春（3—4月）", date: "樱花杜鹃，气候最宜人", badge: "推荐" },
    { dot: "early", label: "🕊️ 冬（11—3月）", date: "红嘴鸥越冬，滇池翠湖" },
    { dot: "late",  label: "🍄 夏秋（6—9月）", date: "野生菌季，需吃熟吃对" },
  ],
}


/* ════════════════ 元阳 ════════════════ */
const yuanyangSpots = [
  {
    id: 'yy1', name: "多依树梯田", nameEn: "Duoyishu Terraces", emoji: "🌅",
    district: "元阳县", lat: 23.1000, lng: 102.7700,
    peakTime: "11月-次年4月灌水期", peakDays: "冬春日出云海最美", difficulty: "easy",
    rating: 4.8, reviews: 7600, tags: ["必去", "日出圣地", "云海"],
    isHot: true, ticket: "梯田景区联票约100元",
    description: "元阳梯田看日出的头号机位。天未亮时守在观景台上，云海在山谷间翻涌，太阳跃出的一刻，万亩水田被染成金红与靛蓝交错的镜面，哈尼村寨的炊烟浮在其间——这是元阳最负盛名的画面。",
    tips: "看日出需摸黑早到占位，冬春晴天概率高；联票通打多依树/坝达/老虎嘴；备保暖衣，山里清晨很冷。",
    transport: "新街镇驾车约40分钟",
    color: "#C77E4A", xp: 140,
  },
  {
    id: 'yy2', name: "老虎嘴梯田", nameEn: "Laohuzui Terraces", emoji: "🌄",
    district: "元阳县", lat: 23.0500, lng: 102.6500,
    peakTime: "11月-次年4月", peakDays: "冬春日落最壮", difficulty: "easy",
    rating: 4.7, reviews: 5900, tags: ["必去", "日落名机位", "大气磅礴"],
    isHot: true, ticket: "含于梯田联票",
    description: "元阳看日落的王牌。山势在这里陡然下切，成千上万块梯田顺着深谷层层跌落，落日把水面烧成一片流金，气势磅礴到令人失语。晴天傍晚，整个观景台挤满了长枪短炮。",
    tips: "傍晚日落前一小时到位；地势陡峭沿栈道走勿翻越护栏；与坝达同在一条日落线上。",
    transport: "新街镇驾车约50分钟",
    color: "#B4472F", xp: 130,
  },
  {
    id: 'yy3', name: "坝达梯田", nameEn: "Bada Terraces", emoji: "🏞️",
    district: "元阳县", lat: 23.0900, lng: 102.7200,
    peakTime: "11月-次年4月", peakDays: "冬春连片最广", difficulty: "easy",
    rating: 4.7, reviews: 4800, tags: ["万亩连片", "日落", "层层叠叠"],
    description: "元阳三大观景区里连片面积最大的一处，上千级梯田从山顶一路铺到谷底，视野极开阔。日落时分整片山坡随光线由金转红再入靛蓝，层次感是三个机位里最丰富的。",
    tips: "与多依树、老虎嘴联票通打；日落机位，午后到傍晚最佳；带长焦拍层叠肌理。",
    transport: "新街镇驾车约30分钟",
    color: "#C08A45", xp: 120,
  },
  {
    id: 'yy4', name: "阿者科村", nameEn: "Azheke Village", emoji: "🍄",
    district: "元阳县", lat: 23.0900, lng: 102.7600,
    peakTime: "全年", peakDays: "全年 · 世遗古村", difficulty: "easy",
    rating: 4.5, reviews: 2900, tags: ["世界遗产", "哈尼蘑菇房", "传统村落"],
    ticket: "门票约30元（含向导）",
    description: "哈尼梯田世界文化遗产的核心村落，完整保留着蘑菇房——蘑菇状茅草顶的哈尼族传统民居。村子被梯田与森林环抱，人、田、林、水四素同构的哈尼农耕智慧，在这里活生生地延续着。",
    tips: "村子实行分红旅游、需请村向导带（含门票）；请尊重村民生活、勿闯入民居；雨后石板路滑。",
    transport: "新街镇驾车约40分钟",
    color: "#8A6A3B", xp: 100,
  },
  {
    id: 'yy5', name: "箐口民俗村", nameEn: "Qingkou Hani Village", emoji: "🏘️",
    district: "元阳县", lat: 23.1500, lng: 102.7400,
    peakTime: "全年", peakDays: "全年 · 哈尼风情", difficulty: "easy",
    rating: 4.2, reviews: 1800, tags: ["哈尼民俗", "蘑菇房", "近新街"],
    description: "离新街镇最近的哈尼民俗村，成片的蘑菇房沿山坡而建，村前就是层层梯田。有哈尼民俗展示与歌舞，是时间紧、想就近感受哈尼村寨与梯田关系的便捷一站。",
    tips: "离新街近、适合作为梯田日出日落之间的过渡；尊重村民、拍照先问；结合胜村一带同游。",
    transport: "新街镇驾车约15分钟",
    color: "#7A8B5A", xp: 80,
  },
  {
    id: 'yy6', name: "哈尼小镇·新街", nameEn: "Xinjie Hani Town", emoji: "🏮",
    district: "元阳县", lat: 23.2200, lng: 102.7500,
    peakTime: "全年（长街宴农历十月）", peakDays: "哈尼长街宴最盛", difficulty: "easy",
    rating: 4.1, reviews: 1500, tags: ["集散小镇", "长街宴", "红米集市"],
    description: "元阳梯田游的大本营，客栈、餐馆、车站都在这一带。哈尼长街宴（农历十月哈尼年）时，家家把菜端上长桌连成一条街，路人也被热情邀入同席，是感受哈尼待客之道最生动的时刻。",
    tips: "住这里方便调度日出日落两头跑；赶集日能买到梯田红米、哈尼刺绣；长街宴需赶上哈尼年（约公历11月）。",
    transport: "元阳梯田游客集散中心",
    color: "#C7852B", xp: 80,
  },
  {
    id: 'yy7', name: "龙树坝·蓝调梯田", nameEn: "Longshuba Terraces", emoji: "💙",
    district: "元阳县", lat: 23.2000, lng: 102.7300,
    peakTime: "11月-次年3月傍晚", peakDays: "冬春蓝调倒影", difficulty: "easy",
    rating: 4.4, reviews: 1300, tags: ["蓝调梯田", "倒影", "小众机位"],
    description: "近年走红的小众机位。傍晚天光转为蓝调时，村舍、树影、云天倒映在灌满水的梯田里，像一块块打翻的蓝墨镜。人比三大观景区少，能安静地拍到不一样的元阳。",
    tips: "蓝调时段短（日落后半小时），提前到位；灌水期（冬春）才有倒影；机位在村道边，勿踩踏田埂。",
    transport: "新街镇驾车约20分钟",
    color: "#3B6E86", xp: 90,
  },
]

/* 周边顺游 —— 均在红河州内（蒙自/泸西/红河县），派生同归红河 */
const yuanyangNearby = [
  {
    id: 'yyn1', name: "蒙自碧色寨", nameEn: "Bisezhai Station", emoji: "🚂",
    district: "蒙自市", lat: 23.4200, lng: 103.3300,
    peakTime: "全年", peakDays: "全年 · 法式老站", difficulty: "easy",
    rating: 4.4, reviews: 3200, tags: ["滇越铁路", "法式车站", "芳华取景"],
    ticket: "门票约30元",
    desc: "百年滇越铁路的法式小站，电影《芳华》取景地",
    description: "百年前滇越铁路上的法式车站，米黄色站房、法国钟、寸轨老铁道原样保留。电影《芳华》让它再度走红，站台上摆拍民国风的人络绎不绝，是一处凝固了时光的边地遗迹。蒙自还是过桥米线的发源地。",
    tips: "与元阳梯田一南一北，可搭配蒙自过夜；顺尝正宗蒙自过桥米线；租民国服装拍照是特色。",
    transport: "元阳驾车约2小时至蒙自",
    color: "#B08968", xp: 90, isNearby: true,
  },
  {
    id: 'yyn2', name: "阿庐古洞", nameEn: "Alu Cave", emoji: "🕳️",
    district: "泸西县", lat: 24.5300, lng: 103.7600,
    peakTime: "全年", peakDays: "全年 · 洞中恒温", difficulty: "easy",
    rating: 4.3, reviews: 1600, tags: ["喀斯特溶洞", "地下河", "钟乳石"],
    desc: "云南名洞，坐船穿行地下河与钟乳石宫",
    description: "云南著名的喀斯特溶洞群，泸西县城西的地下奇观。三个溶洞相连、暗河贯通，能坐船在地下河上穿行，两岸钟乳石、石笋千姿百态。距昆明石林仅约80公里，可与石林、元阳串成一线。",
    tips: "洞内恒温凉爽、地滑，带外套穿防滑鞋；位置在红河北部，靠近石林方向可顺路。",
    transport: "元阳驾车约3小时至泸西（近石林）",
    color: "#3B6E86", xp: 80, isNearby: true,
  },
  {
    id: 'yyn3', name: "撒玛坝梯田", nameEn: "Samaba Terraces", emoji: "🌾",
    district: "红河县", lat: 23.3700, lng: 102.4200,
    peakTime: "11月-次年3月", peakDays: "冬春灌水期最美", difficulty: "medium",
    rating: 4.5, reviews: 1100, tags: ["万亩连片", "人少", "哈尼梯田"],
    desc: "号称连片最广的哈尼梯田，游人稀少",
    description: "红河县宝华镇的一片哈尼梯田，号称单片连片面积最大，气势不输元阳三大观景区，却因交通稍远而游人稀少。想避开人潮、安静看一整面山坡的梯田倒影，这里是行家之选。",
    tips: "路程较元阳更远、设施更简，自驾为宜；灌水期（冬春）观感最佳；备干粮，餐饮选择少。",
    transport: "元阳驾车约2小时至红河县宝华",
    color: "#7A8B5A", xp: 90, isNearby: true,
  },
]

const yuanyangItinerary = [
  {
    day: 1, title: "抵达·哈尼小镇", date: "Day 1",
    activities: [
      { time: "下午", icon: "🚗", text: "抵达元阳新街，入住梯田观景客栈", spotId: 'yy6' },
      { time: "傍晚", icon: "🌄", text: "坝达或老虎嘴守日落，看流金梯田", spotId: 'yy2' },
      { time: "晚上", icon: "🍚", text: "尝梯田红米饭 + 哈尼蘸水鸡" },
    ]
  },
  {
    day: 2, title: "日出与古村", date: "Day 2",
    activities: [
      { time: "清晨", icon: "🌅", text: "多依树摸黑守日出云海", spotId: 'yy1' },
      { time: "上午", icon: "🍄", text: "阿者科世遗村，看哈尼蘑菇房", spotId: 'yy4' },
      { time: "下午", icon: "🏘️", text: "箐口民俗村，感受人田林水共生", spotId: 'yy5' },
    ]
  },
  {
    day: 3, title: "蓝调与慢逛", date: "Day 3",
    activities: [
      { time: "上午", icon: "🏮", text: "新街赶集，买红米、哈尼刺绣", spotId: 'yy6' },
      { time: "下午", icon: "🚶", text: "梯田村道慢走，走访麻栗寨、全福庄" },
      { time: "傍晚", icon: "💙", text: "龙树坝守蓝调梯田倒影", spotId: 'yy7' },
    ]
  },
  {
    day: 4, title: "顺游红河", date: "Day 4",
    activities: [
      { time: "全天", icon: "🚂", text: "蒙自碧色寨法式老站 + 过桥米线，或撒玛坝梯田" },
      { time: "下午", icon: "🎁", text: "选购梯田红米、哈尼刺绣、紫陶伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（建水、昆明）" },
    ]
  },
]

const yuanyangTips = [
  { icon: "📅", title: "最佳季节", content: "元阳梯田最美在灌水期——11月到次年4月，水田如镜、云海翻涌、日出日落最出彩，也是哈尼长街宴（约11月哈尼年）时节。6-9月插秧后是绿色梯田、雨多云海也多但路湿。5月前后收割后较素。" },
  { icon: "🌅", title: "追光机位", content: "看日出去多依树、看日落去老虎嘴/坝达，是雷打不动的搭配。都要提前一小时占位，尤其冬春晴天的周末人极多。云海看天吃饭，晴后转阴或雨后初晴概率高。" },
  { icon: "🧥", title: "早晚保暖", content: "梯田海拔较高，看日出的清晨很冷、湿气重，务必带厚外套、帽子。白天太阳下又晒，注意防晒。山路多雾湿滑，穿防滑鞋。" },
  { icon: "🙏", title: "尊重哈尼村寨", content: "阿者科、箐口等是村民真实生活的村落，不是布景。勿擅入民居、勿踩踏田埂稻田；给村民拍照先征得同意；阿者科按规矩请向导、买门票（村民分红）。" },
  { icon: "🚗", title: "交通与包车", content: "各观景区之间是盘山村道、彼此有距离，日出日落两头跑，强烈建议包车或跟当地车，别自己摸黑开夜路。梯田景区实行联票，进出各点核验。" },
  { icon: "🍚", title: "梯田味道", content: "梯田红米是这里的主角，饭香有嚼劲。哈尼蘸水鸡、焖锅酒、竹筒饭都值得尝；顺游蒙自别错过过桥米线（发源地）。" },
  { icon: "📷", title: "摄影准备", content: "日出日落光比大，带上长焦拍层叠肌理、广角拍云海全景；三脚架在弱光下很有用。尊重机位秩序、别为取景踩踏田埂。" },
]

const yuanyangFoods = [
  { name: "梯田红米饭", emoji: "🍚", desc: "哈尼梯田所产红米，饭香有嚼劲" },
  { name: "哈尼蘸水鸡", emoji: "🍗", desc: "土鸡配哈尼特调蘸水，鲜辣" },
  { name: "焖锅酒", emoji: "🍶", desc: "哈尼自酿米酒，待客的暖酒" },
  { name: "竹筒烤鱼", emoji: "🐟", desc: "梯田鱼夹香料竹筒炭烤" },
  { name: "长街宴", emoji: "🍲", desc: "哈尼年家家出菜连成一条街" },
  { name: "蒙自过桥米线", emoji: "🍜", desc: "过桥米线发源地，汤鲜料足" },
]

const yuanyangPackList = [
  { icon: "🧥", text: "厚外套帽子（看日出清晨很冷）" },
  { icon: "🧴", text: "防晒墨镜（白天梯田反光强）" },
  { icon: "👟", text: "防滑鞋（田埂村道湿滑）" },
  { icon: "📷", text: "长焦+广角+三脚架（追光拍摄）" },
  { icon: "🔦", text: "头灯/手电（摸黑赶日出机位）" },
  { icon: "💳", text: "身份证 + 现金（村寨小店）" },
]

const yuanyangSeason = {
  title: "最佳旅行季节",
  sub: "哈尼梯田，一山镜天",
  rows: [
    { dot: "peak",  label: "💧 灌水期（11—次年4月）", date: "水田如镜，日出云海最美", badge: "推荐" },
    { dot: "early", label: "🌱 插秧（5—6月）", date: "梯田新绿，线条清晰" },
    { dot: "late",  label: "🌧️ 雨季（6—9月）", date: "绿意浓、云海多但路湿" },
  ],
}


/* ════════════════ 建水 ════════════════ */
const jianshuiSpots = [
  {
    id: 'js1', name: "建水古城·朝阳楼", nameEn: "Jianshui Ancient Town", emoji: "🏯",
    district: "建水县", lat: 23.6300, lng: 102.8300,
    peakTime: "全年", peakDays: "全年 · 文献名邦", difficulty: "easy",
    rating: 4.7, reviews: 9800, tags: ["必去", "千年临安", "朝阳楼"],
    isHot: true, ticket: "古城免费（朝阳楼登楼另计）",
    description: "一座一千二百年的滇南古城，旧称临安，「文献名邦」。城东的朝阳楼建于明初，形制酷似缩小版天安门，是古城的门面。青石街巷里书院、老宅、古井、紫陶铺子错落，市井与斯文并存，比多数古镇都更有生活底气。",
    tips: "古城本身免费、可随意逛；朝阳楼、各家花园单独收票；紫陶街淘一把建水紫陶壶；用古井水做的烧豆腐随处可尝。",
    transport: "昆明南站高铁约1.5小时至建水站",
    color: "#8A6A66", xp: 130,
  },
  {
    id: 'js2', name: "朱家花园", nameEn: "Zhu's Family Garden", emoji: "🏛️",
    district: "建水县", lat: 23.6300, lng: 102.8200,
    peakTime: "全年", peakDays: "全年 · 滇南大观园", difficulty: "easy",
    rating: 4.6, reviews: 7100, tags: ["必去", "清代宅院", "滇南大观园"],
    isHot: true, ticket: "门票约40元",
    description: "清末富商朱氏的家宅与祠堂，「滇南大观园」。四十二个天井、两百多间房环环相扣，水榭亭台、雕梁画栋精致到极致，布局复杂却井然。走在里头能真切摸到滇南士绅当年的排场与讲究。",
    tips: "院子大、格局绕，慢慢逛约一小时；园内设客栈，住客免门票；与文庙、朝阳楼同在古城内可连游。",
    transport: "建水古城内，步行可达",
    color: "#7A5E52", xp: 110,
  },
  {
    id: 'js3', name: "建水文庙", nameEn: "Confucius Temple", emoji: "🎓",
    district: "建水县", lat: 23.6200, lng: 102.8200,
    peakTime: "全年", peakDays: "周末有古乐表演", difficulty: "easy",
    rating: 4.6, reviews: 5600, tags: ["必去", "全国第三大文庙", "大成殿"],
    ticket: "门票约60元",
    description: "有六百多年历史，规模仅次于曲阜、北京两座孔庙，全国第三大。学海（泮池）浩渺，大成殿飞檐叠拱、祀奉孔子，历代崇文重教的匾额碑刻满目。建水「文献名邦」的底气，一半在这里。",
    tips: "每逢周末上午9:00、下午14:00有免费古乐表演（约两小时），可掐点去；殿宇多、碑刻值得细看。",
    transport: "建水古城内，步行可达",
    color: "#B4472F", xp: 100,
  },
  {
    id: 'js4', name: "建水古城小火车", nameEn: "Vintage Meter-gauge Train", emoji: "🚂",
    district: "建水县", lat: 23.6300, lng: 102.8000,
    peakTime: "全年", peakDays: "全年 · 复古米轨", difficulty: "easy",
    rating: 4.5, reviews: 6300, tags: ["必去", "百年米轨", "临安—团山"],
    isHot: true, ticket: "往返约120元（含各站停留）",
    description: "沿着百年滇越铁路支线跑的复古观光小火车，从临安站出发，一路停靠双龙桥、乡会桥、团山。绿皮车厢、米轨窄道、田园与古桥掠过窗外，是把建水几处精华串成一线的最惬意方式。",
    tips: "班次固定、需提前订票；各站有停留时间下车逛（双龙桥、团山）；旺季一票难求，尽早预订。",
    transport: "建水古城临安站发车",
    color: "#4E7A5E", xp: 100,
  },
  {
    id: 'js5', name: "双龙桥（十七孔桥）", nameEn: "Double Dragons Bridge", emoji: "🌉",
    district: "建水县", lat: 23.6500, lng: 102.7800,
    peakTime: "全年（黄昏最美）", peakDays: "日落逆光最出片", difficulty: "easy",
    rating: 4.5, reviews: 4200, tags: ["十七孔石桥", "三阁楼", "日落"],
    ticket: "免费",
    description: "泸江与塌冲河交汇处的清代大石桥，十七个桥孔一字排开、桥上叠起三座阁楼，是云南现存最大的多孔连拱古桥。黄昏时逆光成剪影，与水面倒影连成一体，古意十足，也是小火车的一站。",
    tips: "小火车会停靠，也可单独打车来；傍晚逆光与倒影最美；桥面可走，注意脚下石阶。",
    transport: "建水城区驾车约15分钟，或乘小火车",
    color: "#C08A45", xp: 90,
  },
  {
    id: 'js6', name: "团山民居", nameEn: "Tuanshan Village", emoji: "🏘️",
    district: "建水县", lat: 23.6800, lng: 102.7200,
    peakTime: "全年", peakDays: "全年 · 古村大宅", difficulty: "easy",
    rating: 4.4, reviews: 3100, tags: ["古民居群", "张家花园", "青砖白墙"],
    ticket: "门票约50元",
    description: "小火车终点的一座古村，保存着大片汉、彝合璧的清代民居。青瓦白墙、坐东朝西，天井是每户的中心，门窗上的木雕、彩绘、书法精细讲究。张家花园等大宅气派不输城里，却更多了村野的安静。",
    tips: "多为小火车终点站顺游；村内大宅需门票，慢逛约一小时；尊重仍在居住的村民。",
    transport: "建水城区驾车约25分钟，或乘小火车终点",
    color: "#8A7A66", xp: 90,
  },
  {
    id: 'js7', name: "燕子洞", nameEn: "Swallow Cave", emoji: "🕊️",
    district: "建水县", lat: 23.6800, lng: 103.0000,
    peakTime: "5-7月看群燕", peakDays: "春夏百万雨燕", difficulty: "easy",
    rating: 4.3, reviews: 2600, tags: ["亚洲第一溶洞", "百万雨燕", "采燕窝"],
    ticket: "门票约80元",
    description: "号称「亚洲第一溶洞」，分干、湿两洞，钟乳石笋成林、暗河穿流。每年五到七月，上百万只雨燕在洞中筑巢，清晨与傍晚成群进出、遮天蔽日。每年还有徒手攀岩采燕窝、悬崖挂匾的绝技表演。",
    tips: "看群燕要赶五到七月、清晨约9点或傍晚约5点；采燕窝表演在8月8日前后；洞内凉滑带外套。",
    transport: "建水城区驾车约30分钟",
    color: "#3B6E86", xp: 90,
  },
]

/* 周边顺游 —— 均在红河州内（石屏/弥勒/泸西），派生同归红河 */
const jianshuiNearby = [
  {
    id: 'jsn1', name: "石屏古城·异龙湖", nameEn: "Shiping & Yilong Lake", emoji: "🌊",
    district: "石屏县", lat: 23.7100, lng: 102.4900,
    peakTime: "全年（夏荷）", peakDays: "夏季荷花满湖", difficulty: "easy",
    rating: 4.3, reviews: 1700, tags: ["状元故里", "石屏豆腐", "高原湖"],
    ticket: "古城免费 / 异龙湖低价",
    desc: "状元之乡的古城与万亩荷花湖",
    description: "云南出过状元的书香古城，文庙、袁嘉谷故居、老街都还在，比建水更清净。城外的异龙湖是滇南大湖，夏天万亩荷花铺展。石屏豆腐用天然碱水点制，是与建水豆腐齐名的一绝。",
    tips: "与建水同一方向可顺游；夏季看异龙湖荷花；尝石屏豆腐、八面煎鱼。",
    transport: "建水驾车约1小时至石屏",
    color: "#3B8AA6", xp: 80, isNearby: true,
  },
  {
    id: 'jsn2', name: "弥勒·东风韵", nameEn: "Mile Dongfengyun", emoji: "🍷",
    district: "弥勒市", lat: 24.4100, lng: 103.4300,
    peakTime: "全年", peakDays: "全年 · 艺术小镇", difficulty: "easy",
    rating: 4.4, reviews: 2800, tags: ["红砖艺术", "网红打卡", "温泉葡萄酒"],
    desc: "红砖曲线堆出的艺术小镇，温泉与葡萄酒",
    description: "以罗旦设计的红砖曲线建筑群走红的艺术小镇，万花筒般的拱洞与酒瓶塔极出片。弥勒还是云南的温泉与葡萄酒之乡，可邑小镇的阿细跳月、湖泉温泉都在附近，是慢生活度假的好去处。",
    tips: "偏北、靠昆明方向，可作建水—昆明之间的过渡；泡温泉、尝弥勒葡萄酒；东风韵拍照人多趁早。",
    transport: "建水驾车约2小时至弥勒",
    color: "#B4472F", xp: 80, isNearby: true,
  },
  {
    id: 'jsn3', name: "泸西城子古村", nameEn: "Chengzi Ancient Village", emoji: "🏚️",
    district: "泸西县", lat: 24.3500, lng: 103.6600,
    peakTime: "全年", peakDays: "全年 · 土掌房", difficulty: "medium",
    rating: 4.2, reviews: 900, tags: ["彝族土掌房", "叠层古村", "人少"],
    desc: "层层叠叠的彝族土掌房，云南布达拉宫",
    description: "一座依山而建的彝族土掌房古村，上千间黄土平顶房顺着山坡层层叠压、屋顶连成通道，被称作「土掌房博物馆」「小布达拉宫」。人少、原始、光影极佳，是摄影与人文爱好者的秘境。",
    tips: "路稍远、设施简朴，自驾为宜；晨昏光影最佳；尊重仍居住的村民，勿擅入院落。",
    transport: "建水驾车约2小时至泸西城子",
    color: "#B08968", xp: 80, isNearby: true,
  },
]

const jianshuiItinerary = [
  {
    day: 1, title: "抵达·古城斯文", date: "Day 1",
    activities: [
      { time: "下午", icon: "🚄", text: "高铁抵建水，入住古城客栈" },
      { time: "傍晚", icon: "🏯", text: "朝阳楼、临安古街，紫陶铺子闲逛", spotId: 'js1' },
      { time: "晚上", icon: "🍢", text: "古井烧豆腐配草芽米线，数玉米粒吃豆腐" },
    ]
  },
  {
    day: 2, title: "宅院与文庙", date: "Day 2",
    activities: [
      { time: "上午", icon: "🏛️", text: "朱家花园（滇南大观园）", spotId: 'js2' },
      { time: "下午", icon: "🎓", text: "建水文庙，赶周末古乐表演", spotId: 'js3' },
      { time: "傍晚", icon: "🍲", text: "尝正宗汽锅鸡 + 糯米揣莲藕" },
    ]
  },
  {
    day: 3, title: "米轨小火车", date: "Day 3",
    activities: [
      { time: "上午", icon: "🚂", text: "临安站坐复古小火车", spotId: 'js4' },
      { time: "上午", icon: "🌉", text: "双龙桥下车，十七孔桥漫步", spotId: 'js5' },
      { time: "下午", icon: "🏘️", text: "团山古村访清代大宅", spotId: 'js6' },
    ]
  },
  {
    day: 4, title: "燕子洞或顺游", date: "Day 4",
    activities: [
      { time: "全天", icon: "🕊️", text: "燕子洞看群燕（5-7月）或 石屏/弥勒顺游" },
      { time: "下午", icon: "🎁", text: "选购建水紫陶壶、草芽、汽锅伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（元阳、昆明）" },
    ]
  },
]

const jianshuiTips = [
  { icon: "📅", title: "最佳季节", content: "亚热带气候、全年温和，春秋（3-5月、9-11月）最舒适。看燕子洞百万雨燕要赶5-7月。夏季（6-8月）多雨偏热，冬季温和少严寒，随时可来。" },
  { icon: "🍢", title: "烧豆腐文化", content: "建水烧豆腐用城中古井水点制，小块炭火现烤，蘸干/湿两种蘸水。老店用玉米粒给你计数、吃几块数几粒，是建水最有仪式感的市井小吃，别错过板井一带的老摊。" },
  { icon: "🚂", title: "小火车订票", content: "古城米轨小火车班次固定、旺季常满，务必提前订票；各站有停留时间下车游双龙桥、团山，算好车次衔接，别误了返程班次。" },
  { icon: "🎓", title: "文庙古乐", content: "文庙周末上午9:00、下午14:00有免费古乐表演，想看请掐点前往。文庙、朱家花园等各家单独收票，古城本身免费，可按兴趣挑着进。" },
  { icon: "🏺", title: "建水紫陶", content: "建水紫陶是中国四大名陶之一，以细腻紫泥、书画刻填、无釉磨光著称，做茶壶茶器尤佳。紫陶街可看制作、选购，认准手工正品，别买机制仿品。" },
  { icon: "🍲", title: "临安味道", content: "汽锅鸡（此地为发源地之一）、草芽（建水独有的水生嫩蔬）、糯米揣莲藕、过桥米线都值得尝。老城小馆比景区地道。" },
  { icon: "🚄", title: "交通便利", content: "昆明南站有高铁直达建水站约1.5小时，是滇南古城里最好到的一座。建水—元阳约80公里、车程1.5小时，两地常一并安排（古城+梯田）。" },
]

const jianshuiFoods = [
  { name: "建水烧豆腐", emoji: "🍢", desc: "古井水点制，炭火现烤数粒计数" },
  { name: "汽锅鸡", emoji: "🍲", desc: "汽锅蒸出原汁，滇味名菜发源地" },
  { name: "草芽", emoji: "🌱", desc: "建水独有水生嫩蔬，清甜爽脆" },
  { name: "糯米揣莲藕", emoji: "🪷", desc: "藕孔塞糯米油炸，外脆内糯" },
  { name: "过桥米线", emoji: "🍜", desc: "滇南做法，汤鲜料足" },
  { name: "曲江烤鸭", emoji: "🦆", desc: "建水曲江镇名产，皮脆肉香" },
]

const jianshuiPackList = [
  { icon: "👟", text: "舒适步行鞋（古城青石街多走）" },
  { icon: "🧥", text: "薄外套（燕子洞凉、早晚温差）" },
  { icon: "🎫", text: "提前订小火车票（旺季常满）" },
  { icon: "🧴", text: "防晒（滇南日照强）" },
  { icon: "🫖", text: "余量行李空间（带紫陶壶回家）" },
  { icon: "💳", text: "身份证 + 现金（老摊小店）" },
]

const jianshuiSeason = {
  title: "最佳旅行季节",
  sub: "千年临安，文献名邦",
  rows: [
    { dot: "peak",  label: "🌤️ 春秋（3—5 / 9—11月）", date: "气候宜人，古城最舒适", badge: "推荐" },
    { dot: "early", label: "🕊️ 燕子季（5—7月）", date: "燕子洞百万雨燕进出" },
    { dot: "late",  label: "🌧️ 夏（6—8月）", date: "多雨偏热，绿意最浓" },
  ],
}


/* ════════════════ 普洱 ════════════════ */
const puerSpots = [
  {
    id: 'pe1', name: "景迈山古茶林", nameEn: "Jingmai Ancient Tea Forests", emoji: "🍃",
    district: "澜沧县", lat: 22.1800, lng: 100.0200,
    peakTime: "春茶3-4月 / 全年", peakDays: "春采茶、干季云海", difficulty: "medium",
    rating: 4.8, reviews: 5400, tags: ["必去", "世界遗产", "千年古茶林"],
    isHot: true, ticket: "景区约80元起（含向导/接驳）",
    description: "2023 年列入世界文化遗产的「普洱景迈山古茶林文化景观」——世界上保存最完整、连片最大的人工栽培古茶林。布朗族、傣族在森林里种茶上千年，茶树与大树混生、寨子藏在林间。翁基古寨的千年古柏、清晨的茶山云海，都美得不真实。",
    tips: "山上寨子分散，请当地向导带最省心；春茶季（3-4月）最热闹价也高；喝一泡古树普洱、看螃蟹脚（寄生茶树的名贵草药）。",
    transport: "普洱市区驾车约3小时至澜沧景迈",
    color: "#3E8A6A", xp: 140,
  },
  {
    id: 'pe2', name: "那柯里茶马古道", nameEn: "Nakeli Ancient Tea Road", emoji: "🐴",
    district: "宁洱县", lat: 22.9000, lng: 101.2000,
    peakTime: "全年", peakDays: "全年 · 古道驿站", difficulty: "easy",
    rating: 4.4, reviews: 3200, tags: ["茶马古道", "马帮驿站", "石板古道"],
    ticket: "免费",
    description: "普洱是茶马古道的起点之一，那柯里是保存完好的一处古驿站。风雨桥、马店、被马蹄磨出凹痕的石板路都还在，当年马帮驮着普洱茶从这里出发，走向西藏与南亚。如今是安静的古道小村，可歇脚喝茶。",
    tips: "距普洱市区不远、适合半日；石板路上还能看到马蹄印；配一杯烤茶感受古道气息。",
    transport: "普洱市区驾车约40分钟至宁洱那柯里",
    color: "#8A6A3B", xp: 90,
  },
  {
    id: 'pe3', name: "中华普洱茶博览苑", nameEn: "Pu'er Tea Expo Garden", emoji: "🍵",
    district: "思茅区", lat: 22.8000, lng: 100.9500,
    peakTime: "全年", peakDays: "全年 · 万亩茶园", difficulty: "easy",
    rating: 4.3, reviews: 2600, tags: ["万亩茶园", "采茶制茶", "茶文化"],
    ticket: "门票约60元",
    description: "营盘山万亩生态茶园里的茶文化园区，梯级茶垄一望无际，云雾缭绕。能亲手采茶、看杀青揉捻、压饼，系统了解普洱茶从鲜叶到茶饼、生普熟普的门道，是入门普洱茶的最佳一课。",
    tips: "适合想搞懂普洱茶的人，采制体验需预约；茶园观景与拍照都好；离市区近可半日。",
    transport: "普洱市区驾车约30分钟至营盘山",
    color: "#4E7A5E", xp: 90,
  },
  {
    id: 'pe4', name: "太阳河国家公园", nameEn: "Sun River National Park", emoji: "🐾",
    district: "思茅区", lat: 22.6000, lng: 101.1000,
    peakTime: "全年", peakDays: "全年 · 雨林萌宠", difficulty: "easy",
    rating: 4.4, reviews: 3100, tags: ["热带雨林", "小熊猫", "犀牛坪"],
    ticket: "门票约100元",
    description: "普洱近郊的热带雨林公园，也叫犀牛坪。原始森林里能近距离看到小熊猫、蜂猴、犀鸟等萌宠，林间栈道、树屋酒店掩在绿荫里。是亲子与自然爱好者感受普洱「绿三角」雨林的便捷一站。",
    tips: "适合带娃；小熊猫互动有固定时段；雨林潮湿备防蚊防滑；可住林中树屋。",
    transport: "普洱市区驾车约1小时",
    color: "#2E8B57", xp: 100,
  },
  {
    id: 'pe5', name: "墨江北回归线标志园", nameEn: "Tropic of Cancer Park", emoji: "☀️",
    district: "墨江县", lat: 23.4300, lng: 101.6900,
    peakTime: "全年（夏至立竿无影）", peakDays: "夏至正午无影奇观", difficulty: "easy",
    rating: 4.2, reviews: 1900, tags: ["北回归线", "双胞之乡", "太阳广场"],
    ticket: "门票约60元",
    description: "北回归线正好从墨江穿过，标志园用太阳广场、回归塔等把这条看不见的纬线具象化，夏至正午能看到「立竿无影」的天文奇观。墨江还是著名的「双胞胎之乡」，每年双胞胎节热闹非凡。",
    tips: "夏至前后来能碰上立竿无影；墨江在普洱—玉溪高速沿线，适合路过顺游；了解北回归线的天文地理很有意思。",
    transport: "普洱市区驾车约1.5小时至墨江",
    color: "#C69A4C", xp: 80,
  },
  {
    id: 'pe6', name: "澜沧老达保", nameEn: "Laodabao Lahu Village", emoji: "🎸",
    district: "澜沧县", lat: 22.5500, lng: 99.9300,
    peakTime: "全年", peakDays: "全年 · 拉祜歌舞", difficulty: "easy",
    rating: 4.3, reviews: 1400, tags: ["拉祜族", "会唱歌的村寨", "芦笙吉他"],
    ticket: "免费（表演/体验另计）",
    description: "「快乐拉祜」的发源地，一个人人会弹吉他、会唱歌的拉祜族村寨。村民自组乐队、把芦笙与吉他玩到一起，《快乐拉祜》唱遍全国。夜里篝火边的歌舞不是表演给游客的，是他们真实的生活方式。",
    tips: "与景迈山同在澜沧，可一并安排；听拉祜弹唱、看芦笙舞；尊重村民、别打赏式围观。",
    transport: "普洱市区驾车约2.5小时至澜沧老达保",
    color: "#B4472F", xp: 90,
  },
  {
    id: 'pe7', name: "西盟龙摩爷圣地", nameEn: "Wa Longmoye Sacred Land", emoji: "🐃",
    district: "西盟县", lat: 22.7000, lng: 99.6000,
    peakTime: "全年（木鼓节最盛）", peakDays: "佤族木鼓节最震撼", difficulty: "medium",
    rating: 4.3, reviews: 1100, tags: ["佤族", "牛头祭祀", "木鼓·甩发"],
    ticket: "门票约40元",
    description: "阿佤山深处的佤族圣地，山谷两侧密密麻麻挂满祭祀用的牛头，透着古老而神秘的原始气息。佤族的木鼓、甩发舞、司岗里传说在这里代代相传，是感受中国最后原始部落之一佤文化的震撼之地。",
    tips: "路程较远、山路多，自驾或包车为宜；木鼓节（约5月）最盛大；尊重佤族祭祀习俗，勿嬉闹。",
    transport: "普洱市区驾车约3.5小时至西盟",
    color: "#6B4E3D", xp: 100,
  },
]

/* 周边顺游 —— 均在普洱市辖区（景东/江城/孟连），派生同归普洱 */
const puerNearby = [
  {
    id: 'pen1', name: "景东无量山樱花谷", nameEn: "Wuliang Cherry Valley", emoji: "🌸",
    district: "景东县", lat: 24.4500, lng: 100.7800,
    peakTime: "11月底-12月中", peakDays: "冬樱与茶园同框", difficulty: "easy",
    rating: 4.5, reviews: 2200, tags: ["冬樱", "茶园", "无量山"],
    ticket: "免费（茶庄自由参观）",
    desc: "冬日茶园里粉樱盛开，一年一会",
    description: "无量山深处的一片茶园，每年冬至前后，成片的冬樱在墨绿茶垄间粉白盛开，樱红衬着茶绿、云雾缭绕，是全国最独特的冬樱景观之一。花期极短，只在十一月底到十二月中的那么两三周。",
    tips: "花期短且逐年略变，出发前查实时花况；清晨云雾中最美；山路较远，自驾住一晚拍晨光。",
    transport: "普洱市区驾车约3小时至景东无量山",
    color: "#C85C8E", xp: 90, isNearby: true,
  },
  {
    id: 'pen2', name: "江城三国界碑", nameEn: "Three-Country Border", emoji: "🚩",
    district: "江城县", lat: 22.5800, lng: 101.8600,
    peakTime: "全年", peakDays: "全年 · 一城连三国", difficulty: "easy",
    rating: 4.1, reviews: 700, tags: ["中老越交界", "界碑", "边境"],
    desc: "一眼望中老越三国的边境小城",
    description: "江城是全国唯一同时与老挝、越南接壤的县，「一城连三国」。中老越三国交界的十字界碑立在山间，站在这里一眼能望向三个国家。边境小城安静质朴，带着浓浓的东南亚边地气息。",
    tips: "近边境带好身份证；界碑区域勿越境；与勐野江、整董傣寨可顺游。",
    transport: "普洱市区驾车约3小时至江城",
    color: "#B4472F", xp: 70, isNearby: true,
  },
  {
    id: 'pen3', name: "孟连娜允古镇", nameEn: "Nayun Ancient Town", emoji: "🛕",
    district: "孟连县", lat: 22.3300, lng: 99.5800,
    peakTime: "全年", peakDays: "全年 · 傣族土司古镇", difficulty: "easy",
    rating: 4.2, reviews: 900, tags: ["傣族土司", "宣抚司署", "边地古镇"],
    desc: "中国最后的傣族古镇，土司衙署犹存",
    description: "被称为「中国最后一个傣族古镇」，曾是孟连宣抚司（傣族土司）的治所。金色的宣抚司署、佛寺、傣家竹楼层层而上，泼水节、神鱼节等傣族节庆保留完整，边地风情浓郁而少商业气。",
    tips: "与澜沧、西盟同一片区可串游；看宣抚司署古建、赶傣族集市；尊重南传佛教习俗。",
    transport: "普洱市区驾车约3小时至孟连",
    color: "#C7852B", xp: 80, isNearby: true,
  },
]

const puerItinerary = [
  {
    day: 1, title: "抵达·茶城慢时光", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达普洱，入住市区" },
      { time: "傍晚", icon: "🐴", text: "那柯里茶马古道驿站，走石板古道", spotId: 'pe2' },
      { time: "晚上", icon: "🍵", text: "尝佤族鸡肉烂饭 + 一泡古树普洱" },
    ]
  },
  {
    day: 2, title: "茶园与雨林", date: "Day 2",
    activities: [
      { time: "上午", icon: "🍵", text: "普洱茶博园采茶制茶，读懂普洱", spotId: 'pe3' },
      { time: "下午", icon: "🐾", text: "太阳河国家公园看小熊猫、雨林", spotId: 'pe4' },
      { time: "晚上", icon: "🔥", text: "普洱茶马古城闲逛，喝烤茶" },
    ]
  },
  {
    day: 3, title: "景迈山古茶林", date: "Day 3",
    activities: [
      { time: "上午", icon: "🍃", text: "景迈山世遗古茶林，翁基古寨", spotId: 'pe1' },
      { time: "下午", icon: "☁️", text: "茶林云海、喝古树普洱、看螃蟹脚" },
      { time: "傍晚", icon: "🎸", text: "澜沧老达保听拉祜弹唱", spotId: 'pe6' },
    ]
  },
  {
    day: 4, title: "阿佤山或边境", date: "Day 4",
    activities: [
      { time: "全天", icon: "🐃", text: "西盟龙摩爷佤族圣地 或 墨江北回归线" },
      { time: "下午", icon: "🎁", text: "选购普洱茶饼、咖啡、螃蟹脚伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（西双版纳、临沧）" },
    ]
  },
]

const puerTips = [
  { icon: "📅", title: "最佳季节", content: "普洱四季温暖、号称「天然氧吧」，全年可来。春茶季（3-4月）茶山最热闹；景东无量山冬樱在11月底-12月中；雨季（6-9月）湿热多雨、茶林云海多但山路湿滑。海拔适中，基本无高反。" },
  { icon: "🍵", title: "普洱茶入门", content: "普洱分生茶（清苦回甘、越陈越香）与熟茶（渥堆发酵、温润）。景迈、易武、老班章等山头各有风味。想买茶找正规茶庄、试喝再买，警惕「古树」「老班章」低价陷阱与做旧茶。" },
  { icon: "🛂", title: "边境证件", content: "江城、西盟、孟连等靠近中老越缅边境，务必带身份证过边检；界碑区域勿越境、勿购来路不明商品。" },
  { icon: "🦟", title: "雨林防护", content: "普洱地处热带边缘，雨林湿热蚊虫多。长效驱蚊液、防晒、透气长袖必备；雨季路滑穿防滑鞋、带雨具。" },
  { icon: "🚗", title: "景点分散", content: "景迈、西盟、孟连、景东都在偏远县，距市区常2-3小时山路，跨度大。强烈建议按片区分天、包车或自驾，别当天来回硬赶。" },
  { icon: "🙏", title: "民族礼俗", content: "普洱是拉祜、佤、傣、哈尼等多民族聚居地。进佤寨尊重祭祀圣地、进傣寺脱鞋不摸佛像；听拉祜弹唱是分享而非表演，别居高临下地围观。" },
  { icon: "☕", title: "茶与咖啡", content: "普洱不只有茶，也是云南小粒咖啡的重要产区。找一家茶庄或咖啡庄园坐下来，从一杯到一饼慢慢喝，是普洱最对的打开方式。" },
]

const puerFoods = [
  { name: "普洱烤茶", emoji: "🍵", desc: "陶罐火上烤香再冲，焦香浓酽" },
  { name: "鸡肉烂饭", emoji: "🍚", desc: "佤族名菜，鸡肉米饭同煮软糯" },
  { name: "竹筒饭", emoji: "🎋", desc: "香米入竹筒炭烤，带竹清香" },
  { name: "思茅米干", emoji: "🍜", desc: "米浆蒸成薄粉，配帽子鲜香" },
  { name: "火烧干巴", emoji: "🥩", desc: "牛干巴炭火烤香撕食，越嚼越香" },
  { name: "普洱咖啡", emoji: "☕", desc: "本土小粒咖啡，果酸柔和" },
]

const puerPackList = [
  { icon: "🦟", text: "长效驱蚊液（热带雨林蚊虫多）" },
  { icon: "🧴", text: "防晒 + 透气长袖" },
  { icon: "🌂", text: "雨具（雨季随时阵雨）" },
  { icon: "👟", text: "防滑鞋（茶山/雨林湿滑）" },
  { icon: "🫖", text: "行李余量（带茶饼咖啡回家）" },
  { icon: "💳", text: "身份证（边境边检查验）" },
]

const puerSeason = {
  title: "最佳旅行季节",
  sub: "茶马古道，天然氧吧",
  rows: [
    { dot: "peak",  label: "🍃 春（3—4月）", date: "春茶飘香，茶山最活", badge: "推荐" },
    { dot: "early", label: "🌸 冬（11底—12中）", date: "景东无量山冬樱盛开" },
    { dot: "late",  label: "🌧️ 雨季（6—9月）", date: "湿热多雨，茶林云海多" },
  ],
}


/* ════════════════ 德宏 ════════════════ */
const dehongSpots = [
  {
    id: 'dh1', name: "勐焕大金塔", nameEn: "Mangshi Golden Pagoda", emoji: "🛕",
    district: "芒市", lat: 24.4200, lng: 98.6000,
    peakTime: "全年", peakDays: "傍晚金光最盛", difficulty: "easy",
    rating: 4.6, reviews: 6100, tags: ["必去", "傣族金塔", "芒市地标"],
    isHot: true, ticket: "门票约30元",
    description: "立在芒市雷牙让山顶的傣王金塔，是德宏的地标。通体金黄的塔身高七十余米，在阳光下熠熠生辉，是国内最大的singhala式佛塔之一。登塔可俯瞰整个芒市坝子，傍晚金光与晚霞相映，最是壮观。",
    tips: "傍晚金塔最上镜；与不远处的银塔可一并看；进塔脱鞋、着装得体、尊重佛门礼仪。",
    transport: "芒市城区驾车约15分钟",
    color: "#C79A3E", xp: 120,
  },
  {
    id: 'dh2', name: "一寨两国", nameEn: "One Village Two Countries", emoji: "🚩",
    district: "瑞丽市", lat: 24.0200, lng: 97.7500,
    peakTime: "全年", peakDays: "全年 · 中缅同寨", difficulty: "easy",
    rating: 4.4, reviews: 4800, tags: ["必去", "中缅边境", "银井·芒秀"],
    isHot: true, ticket: "门票约50元",
    description: "国境线正好从村寨中间穿过——中国的银井与缅甸的芒秀，本是一个村。一条田埂、一道竹篱就是两国，寨子里同赶一个集、同做一堂佛事，鸡犬之声相闻。「一寨两国」的秋千、水井、界碑，是感受边境最直观的地方。",
    tips: "带身份证过边检；国境线立牌处勿越境；能看到跨国上学的孩子、跨国的市集。",
    transport: "瑞丽市区驾车约20分钟至银井",
    color: "#B4472F", xp: 100,
  },
  {
    id: 'dh3', name: "莫里热带雨林瀑布", nameEn: "Moli Rainforest Waterfall", emoji: "💦",
    district: "瑞丽市", lat: 24.1000, lng: 97.9500,
    peakTime: "全年（雨季水最壮）", peakDays: "6-9月水量最大", difficulty: "medium",
    rating: 4.3, reviews: 2700, tags: ["热带雨林", "瀑布", "扎朵温泉"],
    ticket: "门票约50元",
    description: "瑞丽近郊的一片原始热带雨林，沿溪徒步约半小时，尽头是从崖顶飞泻近百米的莫里瀑布，水气蒸腾、彩虹时现。林中古木参天、藤萝缠绕，还有相传释迦牟尼留下脚印的圣迹，清凉幽静。",
    tips: "徒步进瀑约半小时、路面湿滑穿防滑鞋；雨季瀑布最壮观；备防蚊，林中蚊虫多。",
    transport: "瑞丽市区驾车约30分钟",
    color: "#2E8B57", xp: 100,
  },
  {
    id: 'dh4', name: "树包塔", nameEn: "Tree-wrapped Pagoda", emoji: "🌳",
    district: "芒市", lat: 24.4300, lng: 98.5900,
    peakTime: "全年", peakDays: "全年 · 塔树共生", difficulty: "easy",
    rating: 4.2, reviews: 2300, tags: ["塔树奇观", "菩提缠塔", "傣族古塔"],
    ticket: "免费",
    description: "芒市城中一处奇观：一棵大菩提树的根须从塔顶一路缠绕包裹住整座傣族古塔，塔树合为一体、生生不息，被视为吉祥的象征。二百多年过去，树越长越茂，塔仍稳稳立着，成了芒市最有故事的角落。",
    tips: "在芒市城区、免费，顺路即可看；与勐巴娜西珍奇园相距不远可连游。",
    transport: "芒市城区内，步行/打车可达",
    color: "#4E7A5E", xp: 80,
  },
  {
    id: 'dh5', name: "姐告口岸·瑞丽玉城", nameEn: "Jiegao Port & Jade City", emoji: "💎",
    district: "瑞丽市", lat: 23.9800, lng: 97.8500,
    peakTime: "全年", peakDays: "全年 · 边贸玉市", difficulty: "easy",
    rating: 4.1, reviews: 3400, tags: ["国门口岸", "翡翠珠宝", "中缅边贸"],
    ticket: "免费（国门参观区另计）",
    description: "瑞丽是中缅边贸重镇，姐告是深入缅甸方向的国家级口岸，国门、界碑就在这里。周边的珠宝玉城、翡翠直播街是全国翡翠原石与成品的重要集散地，热闹喧腾，是感受边境商贸脉搏的地方。",
    tips: "翡翠水深，非专业者切勿冲动高价购玉、谨防赌石与做假；国门区域按规定参观、勿越境。",
    transport: "瑞丽市区驾车约15分钟至姐告",
    color: "#3B8A9E", xp: 80,
  },
  {
    id: 'dh6', name: "勐巴娜西珍奇园", nameEn: "Mengbanaxi Garden", emoji: "🌴",
    district: "芒市", lat: 24.4300, lng: 98.5700,
    peakTime: "全年", peakDays: "全年 · 奇木古树", difficulty: "easy",
    rating: 4.2, reviews: 1800, tags: ["奇树古木", "傣族园林", "根雕盆景"],
    ticket: "门票约50元",
    description: "「勐巴娜西」在傣语里是「向往的好地方」。园子里收集了大量奇形古木、根雕与热带珍稀植物，配上傣式亭台水景，浓缩了德宏的热带风情与傣族园林审美，适合悠闲地逛一逛、拍拍照。",
    tips: "在芒市城区、与树包塔顺路；园内古木根雕值得细看；适合慢逛半日。",
    transport: "芒市城区内，打车可达",
    color: "#7A8B5A", xp: 70,
  },
  {
    id: 'dh7', name: "姐勒金塔", nameEn: "Jiele Golden Pagoda", emoji: "🏯",
    district: "瑞丽市", lat: 24.0200, lng: 97.8800,
    peakTime: "全年", peakDays: "全年 · 德宏最古金塔", difficulty: "easy",
    rating: 4.2, reviews: 1500, tags: ["傣族古塔", "群塔", "南传佛教"],
    ticket: "免费",
    description: "瑞丽东郊的傣族古佛塔群，相传已有数百上千年，是德宏最古老的佛塔之一。主塔金黄、周围众多小塔簇拥，塔尖风铃在风中叮当作响。是当地傣族重要的礼佛之地，庄严而清净。",
    tips: "免费、可与一寨两国、姐告同片区顺游；进塔区尊重礼佛习俗、着装得体。",
    transport: "瑞丽市区驾车约15分钟",
    color: "#C7852B", xp: 70,
  },
]

/* 周边顺游 —— 均在德宏州内（盈江/梁河/畹町），派生同归德宏 */
const dehongNearby = [
  {
    id: 'dhn1', name: "盈江犀鸟谷·石梯", nameEn: "Yingjiang Hornbill Valley", emoji: "🦜",
    district: "盈江县", lat: 24.7000, lng: 97.7000,
    peakTime: "全年（观鸟11-5月）", peakDays: "冬春观鸟旺季", difficulty: "medium",
    rating: 4.6, reviews: 1600, tags: ["中国观鸟之乡", "犀鸟", "热带雨林"],
    ticket: "免费（鸟塘/向导另计）",
    desc: "中国观鸟胜地，看得到珍稀犀鸟",
    description: "盈江是「中国犀鸟谷」，石梯村一带的热带雨林里栖息着五种犀鸟和数百种鸟类，是国内少有能稳定拍到野生犀鸟的地方。冬春观鸟季，各地鸟人扛着长炮进驻鸟塘，是观鸟与自然爱好者的圣地。",
    tips: "观鸟需请当地向导带进付费鸟塘、清晨最佳；雨林潮湿备防蚊防滑；盈江还有榕树王、凯邦亚湖可顺游。",
    transport: "芒市驾车约2.5小时至盈江石梯",
    color: "#2E8B57", xp: 100, isNearby: true,
  },
  {
    id: 'dhn2', name: "梁河南甸宣抚司署", nameEn: "Nandian Chieftain Mansion", emoji: "🏛️",
    district: "梁河县", lat: 24.8000, lng: 98.3000,
    peakTime: "全年", peakDays: "全年 · 傣族土司衙门", difficulty: "easy",
    rating: 4.3, reviews: 800, tags: ["傣族土司", "衙署古建", "滇西土司文化"],
    desc: "滇西保存最完整的傣族土司衙署",
    description: "梁河的南甸宣抚司署是滇西规模最大、保存最完整的傣族土司衙门，五进四院、层层递进，融合了汉式官衙与傣族风格。走进去能读到明清以来中央与边地土司的一段治理史，古建考究、少有人挤。",
    tips: "在芒市—腾冲之间，可作过渡顺游；古建群慢逛约一小时；了解滇西土司制度很有意思。",
    transport: "芒市驾车约1.5小时至梁河",
    color: "#8A6A3B", xp: 80, isNearby: true,
  },
  {
    id: 'dhn3', name: "畹町·滇缅公路终点", nameEn: "Wanding Border Town", emoji: "🎖️",
    district: "畹町", lat: 24.0800, lng: 98.0700,
    peakTime: "全年", peakDays: "全年 · 抗战边关", difficulty: "easy",
    rating: 4.2, reviews: 900, tags: ["滇缅公路", "南侨机工", "边境小城"],
    desc: "滇缅公路终点，南洋华侨机工的抗战记忆",
    description: "中缅边境上的袖珍小城，滇缅公路的终点、抗战时国际援华物资的入境口。畹町桥、南洋华侨机工回国抗日纪念碑记录着那段热血历史。小城安静，一桥connect两国，带着厚重的抗战边关记忆。",
    tips: "近边境带身份证；畹町桥、纪念碑庄重瞻仰；与瑞丽同片区可顺游。",
    transport: "瑞丽驾车约30分钟至畹町",
    color: "#6B4E3D", xp: 80, isNearby: true,
  },
]

const dehongItinerary = [
  {
    day: 1, title: "抵达·芒市金塔", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达芒市（德宏门户），入住城区" },
      { time: "傍晚", icon: "🛕", text: "勐焕大金塔看金光晚霞，俯瞰芒市坝", spotId: 'dh1' },
      { time: "晚上", icon: "🍢", text: "尝傣味撒撇 + 过手米线" },
    ]
  },
  {
    day: 2, title: "芒市城中奇观", date: "Day 2",
    activities: [
      { time: "上午", icon: "🌳", text: "树包塔看塔树共生奇观", spotId: 'dh4' },
      { time: "上午", icon: "🌴", text: "勐巴娜西珍奇园赏奇木古树", spotId: 'dh6' },
      { time: "下午", icon: "🚗", text: "转往瑞丽（约1.5小时），入住边城" },
    ]
  },
  {
    day: 3, title: "瑞丽边境风情", date: "Day 3",
    activities: [
      { time: "上午", icon: "🚩", text: "一寨两国，脚踏中缅同一村", spotId: 'dh2' },
      { time: "上午", icon: "🏯", text: "姐勒金塔、姐告口岸国门", spotId: 'dh7' },
      { time: "下午", icon: "💦", text: "莫里热带雨林瀑布徒步", spotId: 'dh3' },
    ]
  },
  {
    day: 4, title: "观鸟或土司", date: "Day 4",
    activities: [
      { time: "全天", icon: "🦜", text: "盈江犀鸟谷观鸟 或 梁河南甸宣抚司署" },
      { time: "下午", icon: "🎁", text: "选购傣族织锦、咖啡、坚果伴手礼（翡翠谨慎）" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（腾冲、保山）" },
    ]
  },
]

const dehongTips = [
  { icon: "📅", title: "最佳季节", content: "亚热带气候、全年温暖，干季（11-4月）晴多路好最舒适。傣族泼水节在4月中、景颇族目瑙纵歌节在1月，是最盛大的节庆但食宿紧张需早订。雨季（5-10月）湿热多雨。海拔低无高反。" },
  { icon: "🛂", title: "边境证件", content: "瑞丽、畹町、盈江、一寨两国等紧邻中缅边境，务必带身份证过边检；国境线、界碑处勿越境；不参与、不购买任何跨境违禁物品。" },
  { icon: "💎", title: "翡翠谨慎", content: "瑞丽是全国翡翠集散地，玉市繁荣但陷阱多。非专业者切勿冲动高价购玉、切勿参与赌石，谨防做假与直播套路。理性看待「捡漏」，量力而为。" },
  { icon: "🦟", title: "防蚊防晒", content: "德宏热带湿热、蚊虫多，长效驱蚊液、防晒、透气长袖必备；雨林徒步穿防滑鞋、带雨具；注意防范蚊媒疾病。" },
  { icon: "🙏", title: "傣景礼俗", content: "德宏是傣族、景颇族聚居地，全民信南传佛教。进佛寺脱鞋、不摸佛像与僧人头顶、不指佛塔；泼水节被泼是受祝福；尊重目瑙纵歌等民族节庆。" },
  { icon: "🍜", title: "边地味道", content: "傣味撒撇（苦撒）、景颇过手米线、鬼鸡、火烧猪、泡鲁达都极具特色，口味偏酸辣生鲜，肠胃敏感者循序尝试、选正规店。" },
  { icon: "🚗", title: "芒市瑞丽两城", content: "德宏以芒市（州府、机场所在）和瑞丽（边贸口岸）为两大中心，相距约1.5小时车程。行程可芒市进、瑞丽玩，盈江/梁河/畹町按兴趣顺游，建议自驾或包车。" },
]

const dehongFoods = [
  { name: "傣味撒撇", emoji: "🥗", desc: "苦撒/柠檬撒，酸苦生鲜的傣家凉拌" },
  { name: "过手米线", emoji: "🍜", desc: "景颇/阿昌名吃，米线托手上拌料吃" },
  { name: "景颇鬼鸡", emoji: "🍗", desc: "凉拌手撕鸡配香料，鲜辣开胃" },
  { name: "火烧猪", emoji: "🐷", desc: "稻草燎皮现片，蘸水解腻" },
  { name: "泡鲁达", emoji: "🥥", desc: "椰奶西米面包干，东南亚风冰饮" },
  { name: "泼水粑粑", emoji: "🍡", desc: "糯米红糖包芭蕉叶蒸，软糯清甜" },
]

const dehongPackList = [
  { icon: "🦟", text: "长效驱蚊液（热带蚊虫多）" },
  { icon: "🧴", text: "高倍防晒 + 透气长袖" },
  { icon: "🩴", text: "凉鞋/防滑鞋（雨林瀑布）" },
  { icon: "🌂", text: "雨具（雨季随时阵雨）" },
  { icon: "🔭", text: "长焦（盈江观鸟）" },
  { icon: "💳", text: "身份证（边境边检必查）" },
]

const dehongSeason = {
  title: "最佳旅行季节",
  sub: "孔雀之乡，一寨两国",
  rows: [
    { dot: "peak",  label: "☀️ 干季（11—4月）", date: "晴多路好，气候最舒适", badge: "推荐" },
    { dot: "early", label: "💦 泼水节（4月中）", date: "傣族新年最盛，需早订" },
    { dot: "late",  label: "🌧️ 雨季（5—10月）", date: "湿热多雨，瀑布最壮" },
  ],
}


/* ════════════════ 怒江 ════════════════ */
const nujiangSpots = [
  {
    id: 'nj1', name: "丙中洛", nameEn: "Bingzhongluo", emoji: "⛰️",
    district: "贡山县", lat: 27.9500, lng: 98.6000,
    peakTime: "11-4月 / 3月桃花", peakDays: "干季路好、春看桃花", difficulty: "medium",
    rating: 4.8, reviews: 4600, tags: ["必去", "人神共居", "三江并流"],
    isHot: true, ticket: "免费（各点自由停）",
    description: "怒江大峡谷深处的一片开阔坝子，雪山环抱、田园宁静，被称为「人神共居之地」。怒族、藏族、傈僳族与多种宗教在此和睦相处，教堂、喇嘛寺、田园炊烟同框。三月桃花开时，整个坝子如世外桃源。",
    tips: "路远（六库到此约5-6小时山路），建议住一两晚慢玩；干季（11-4月）路况最安全；沿途注意落石。",
    transport: "六库驾车约5-6小时至贡山丙中洛",
    color: "#3E7E76", xp: 140,
  },
  {
    id: 'nj2', name: "怒江第一湾", nameEn: "First Bend of Nujiang", emoji: "🌀",
    district: "贡山县", lat: 27.8800, lng: 98.6000,
    peakTime: "全年", peakDays: "晴日俯瞰大湾", difficulty: "easy",
    rating: 4.6, reviews: 3200, tags: ["怒江大拐弯", "桃花岛", "观景台"],
    description: "怒江在丙中洛附近被王箐大悬崖逼得几乎绕成一个圆，江心一块半岛就是「桃花岛」（扎那桶），上面住着几户人家、种着桃树。观景台上俯瞰这道气势磅礴的大拐弯，是怒江最经典的一张明信片。",
    tips: "在丙中洛去秋那桶路上，观景台停留即可；三月桃花岛桃花最美；护栏外勿逾越。",
    transport: "丙中洛驾车约15分钟",
    color: "#3B6E86", xp: 100,
  },
  {
    id: 'nj3', name: "独龙江", nameEn: "Dulongjiang", emoji: "🏔️",
    district: "贡山县独龙江乡", lat: 27.7500, lng: 98.3500,
    peakTime: "5-10月（雨季易封路）", peakDays: "隧道通后可达，看天进", difficulty: "hard",
    rating: 4.7, reviews: 1900, tags: ["独龙族秘境", "纹面女", "原始峡谷"],
    ticket: "免费（需登记）",
    description: "中国人口最少民族之一独龙族的聚居地，曾因大雪封山半年与世隔绝，2014 年隧道通车才结束「孤岛」历史。峡谷里原始森林、飞瀑、独龙族的纹面女（最后几位老人）与神秘文化，是探秘者心中的终极秘境。",
    tips: "路极险、雨季（6-10月）常塌方封路，务必查路况、量力而行；尊重纹面老人、拍照先征得同意、勿打扰；需边境/进乡登记。",
    transport: "贡山驾车约3-4小时经独龙江隧道",
    color: "#5E86AC", xp: 130,
  },
  {
    id: 'nj4', name: "老姆登·知子罗", nameEn: "Laomudeng & Zhizhiluo", emoji: "⛪",
    district: "福贡县", lat: 26.9000, lng: 98.8500,
    peakTime: "全年（云海秋冬多）", peakDays: "晨昏云海皇冠山", difficulty: "medium",
    rating: 4.6, reviews: 2400, tags: ["怒族村", "记忆之城", "皇冠山"],
    description: "半山上的怒族村老姆登，正对巍峨的皇冠山，云海翻涌时如临仙境，村里那座小小的基督教堂是怒江的名片之一。旁边的知子罗是废弃的老州府，时间在此凝固成一座「记忆之城」，苍凉而动人。",
    tips: "住老姆登客栈守云海日出；知子罗老城可慢走怀旧；山路弯多，自驾小心。",
    transport: "福贡驾车约1小时盘山上老姆登",
    color: "#4E7A5E", xp: 110,
  },
  {
    id: 'nj5', name: "石月亮", nameEn: "Stone Moon", emoji: "🌙",
    district: "福贡县", lat: 26.9500, lng: 98.8700,
    peakTime: "全年（晴日可见）", peakDays: "晴天远眺天生洞", difficulty: "easy",
    rating: 4.3, reviews: 1600, tags: ["天生石洞", "高黎贡山", "傈僳圣物"],
    description: "高黎贡山脊上一个天然贯通的巨大石洞，远看就像嵌在山峰上的一轮明月，傈僳语称「亚哈巴」。它是傈僳族心中的圣物与发源象征，也是怒江峡谷里最奇特的地质奇观，公路边即可远眺。",
    tips: "公路观景点远眺即可，晴天能看清；作为怒江北上途中的一站顺路打卡；徒步近观强度较大。",
    transport: "福贡县城以北，怒江公路沿途",
    color: "#8A7A66", xp: 90,
  },
  {
    id: 'nj6', name: "雾里村", nameEn: "Wuli Village", emoji: "🏚️",
    district: "贡山县", lat: 27.9000, lng: 98.6200,
    peakTime: "全年", peakDays: "晨雾中最仙", difficulty: "medium",
    rating: 4.5, reviews: 1400, tags: ["隐世古村", "挂壁茶马古道", "怒族"],
    description: "怒江对岸山坡上的怒族小村，没有公路，只能走一段凿在悬崖上的茶马古道挂壁路进出。田垄、木屋、炊烟散在山间，晨雾一起，宛如遗世独立的仙境。是丙中洛徒步线上最动人的一站。",
    tips: "需徒步挂壁古道进村、注意脚下与落石；晨雾时最美；尊重村民生活、轻声慢行。",
    transport: "丙中洛徒步或驾车至对岸再步行进村",
    color: "#7A8B5A", xp: 100,
  },
  {
    id: 'nj7', name: "登埂澡塘会", nameEn: "Lisu Spring Bathing Fair", emoji: "♨️",
    district: "泸水市", lat: 25.8500, lng: 98.8600,
    peakTime: "春节前后（澡塘会）", peakDays: "正月傈僳澡塘会", difficulty: "easy",
    rating: 4.2, reviews: 1100, tags: ["傈僳族", "温泉澡塘会", "怒江大峡谷"],
    ticket: "免费",
    description: "怒江边的天然温泉，每年春节前后，傈僳族群众从峡谷各处赶来，露天泡温泉、对歌、上刀山下火海，成就热闹的「澡塘会」，是傈僳族最盛大的传统聚会之一。平日则是感受怒江大峡谷与傈僳风情的近城之地。",
    tips: "澡塘会在正月（春节后），最热闹；平日可泡温泉、看峡谷；尊重当地泡汤习俗。",
    transport: "六库（泸水）驾车约30分钟",
    color: "#3B8A9E", xp: 80,
  },
]

/* 周边顺游 —— 均在怒江州内（泸水/贡山/兰坪），派生同归怒江 */
const nujiangNearby = [
  {
    id: 'njn1', name: "片马", nameEn: "Pianma Border", emoji: "🎖️",
    district: "泸水市", lat: 25.9800, lng: 98.6300,
    peakTime: "全年", peakDays: "全年 · 抗战边关", difficulty: "medium",
    rating: 4.2, reviews: 800, tags: ["中缅边境", "驼峰航线", "抗英"],
    desc: "高黎贡西坡的边境重镇，驼峰航线纪念地",
    description: "翻过高黎贡山到西坡的中缅边境小镇，历史上「片马事件」抗英、二战「驼峰航线」坠机纪念都在这里。人民抗英胜利纪念馆、驼峰航线纪念馆记录着这段边地热血，风光与历史都厚重。",
    tips: "翻越高黎贡的山路险要、多雾，注意安全；近边境带身份证；纪念馆庄重瞻仰。",
    transport: "六库驾车约3小时翻高黎贡至片马",
    color: "#6B4E3D", xp: 90, isNearby: true,
  },
  {
    id: 'njn2', name: "秋那桶", nameEn: "Qiunatong Village", emoji: "🥾",
    district: "贡山县", lat: 28.0500, lng: 98.5800,
    peakTime: "11-4月 / 3月", peakDays: "干季徒步最佳", difficulty: "hard",
    rating: 4.5, reviews: 900, tags: ["峡谷尽头", "怒族村", "徒步"],
    desc: "怒江大峡谷最北的怒族村，徒步线终点",
    description: "怒江大峡谷云南段最北的村子，再往前就是西藏。石板房、木楞屋依山而建，田园安静，教堂钟声在谷中回响。从丙中洛到秋那桶的徒步线，被誉为怒江最经典的一段，一路是峡谷、村寨与信仰。",
    tips: "徒步强度较大、需体能与干季好天气；可请向导；尊重怒族村民生活。",
    transport: "丙中洛驾车约1小时或徒步至秋那桶",
    color: "#4E7A5E", xp: 100, isNearby: true,
  },
  {
    id: 'njn3', name: "兰坪罗古箐", nameEn: "Laoguqing Meadow", emoji: "🌼",
    district: "兰坪县", lat: 26.4500, lng: 99.4000,
    peakTime: "5-8月（杜鹃草甸）", peakDays: "夏季高山杜鹃盛开", difficulty: "hard",
    rating: 4.3, reviews: 600, tags: ["高山草甸", "杜鹃", "普米族"],
    desc: "高山草甸与杜鹃花海，普米族情人坝",
    description: "兰坪县的高山秘境，云岭深处的大羊场草甸与罗古箐峡谷，夏天高山杜鹃漫山、牛羊散落，普米族的「情人坝」传说流传于此。人少景野，是徒步与露营爱好者的小众之选。",
    tips: "海拔高、夏季（5-8月）杜鹃最盛；徒步露营需装备与体能；兰坪在怒江东南、澜沧江畔，可与大理方向衔接。",
    transport: "六库驾车约3小时至兰坪罗古箐",
    color: "#7A9B4E", xp: 90, isNearby: true,
  },
]

const nujiangItinerary = [
  {
    day: 1, title: "溯峡谷北上", date: "Day 1",
    activities: [
      { time: "全天", icon: "🚗", text: "六库出发沿怒江大峡谷北上，看石月亮", spotId: 'nj5' },
      { time: "下午", icon: "⛪", text: "登老姆登、访知子罗记忆之城", spotId: 'nj4' },
      { time: "晚上", icon: "🍲", text: "老姆登住宿，尝漆油鸡 + 手抓饭" },
    ]
  },
  {
    day: 2, title: "人神共居丙中洛", date: "Day 2",
    activities: [
      { time: "上午", icon: "🚗", text: "继续北上抵丙中洛，一路峡谷村寨", spotId: 'nj1' },
      { time: "下午", icon: "🌀", text: "怒江第一湾观景，看桃花岛", spotId: 'nj2' },
      { time: "傍晚", icon: "🌾", text: "丙中洛坝子田园慢走，看炊烟雪山" },
    ]
  },
  {
    day: 3, title: "挂壁古道秘境", date: "Day 3",
    activities: [
      { time: "上午", icon: "🏚️", text: "徒步挂壁古道进雾里村", spotId: 'nj6' },
      { time: "下午", icon: "🥾", text: "深入秋那桶，峡谷尽头怒族村" },
      { time: "晚上", icon: "🔥", text: "丙中洛住宿，围炉喝同心酒" },
    ]
  },
  {
    day: 4, title: "独龙江或返程", date: "Day 4",
    activities: [
      { time: "全天", icon: "🏔️", text: "深度探独龙江秘境（看天进）或南返" },
      { time: "途中", icon: "♨️", text: "泸水登埂泡温泉，感受傈僳风情", spotId: 'nj7' },
      { time: "傍晚", icon: "✈️", text: "返六库 / 前往下一站（大理、保山）" },
    ]
  },
]

const nujiangTips = [
  { icon: "📅", title: "最佳季节", content: "干季（11-4月）路况最安全、是主游季；三月丙中洛桃花、怒江第一湾桃花岛最美。雨季（6-10月）峡谷公路常塌方、独龙江易封路，风险大。出发前务必查路况天气，留足弹性。" },
  { icon: "🚗", title: "路况与车程", content: "怒江是狭长的大峡谷，景点沿江一线排开，六库到丙中洛就要5-6小时盘山路、独龙江更险。强烈建议包车或跟成熟车队、别自驾走夜路；随时可能落石塌方，谨慎慢行。" },
  { icon: "🥾", title: "徒步与体能", content: "雾里村、秋那桶、丙中洛徒步线需要一定体能，挂壁古道临崖、注意脚下与落石。独龙江属高强度探险，务必结伴、请向导、量力而行。" },
  { icon: "🙏", title: "尊重民族信仰", content: "怒江是傈僳、怒、独龙、普米等民族聚居地，基督教、天主教、藏传佛教、原始信仰并存。进教堂、寺庙守礼；独龙族纹面老人是活的文化遗产，拍照务必先征得同意、勿围观打扰。" },
  { icon: "🧥", title: "峡谷气候", content: "峡谷海拔落差大、天气多变，一日之内可能晴雨交替，昼夜温差大。备防水冲锋衣、保暖层与防滑徒步鞋；高海拔点（独龙江、草甸）注意保暖与轻微高反。" },
  { icon: "🛂", title: "边境登记", content: "独龙江、片马等靠近中缅边境，需带身份证、按规定登记，勿越境。偏远地区通讯、补给有限，备足现金、常用药与干粮。" },
  { icon: "🍲", title: "峡谷味道", content: "傈僳手抓饭（簸箕饭）、漆油炖鸡、石板粑粑、侠辣、老窝火腿都是峡谷特色，就地取材、质朴够味。做客常有「同心酒」，量力而饮。" },
]

const nujiangFoods = [
  { name: "傈僳手抓饭", emoji: "🍚", desc: "簸箕盛饭配烤肉时蔬，手抓着吃" },
  { name: "漆油鸡", emoji: "🍲", desc: "漆油炖土鸡，暖身滋补的峡谷味" },
  { name: "石板粑粑", emoji: "🫓", desc: "天然石板上烙的荞麦粑粑" },
  { name: "侠辣", emoji: "🍶", desc: "肉与酒同焖，傈僳待客硬菜" },
  { name: "老窝火腿", emoji: "🍖", desc: "泸水老窝高山腌制，咸香醇厚" },
  { name: "漆油茶", emoji: "🍵", desc: "漆油打茶，峡谷人家的暖饮" },
]

const nujiangPackList = [
  { icon: "🧥", text: "防水冲锋衣 + 保暖层（峡谷多变）" },
  { icon: "👟", text: "防滑徒步鞋（挂壁古道临崖）" },
  { icon: "💊", text: "常用药 + 少量氧气（偏远高海拔）" },
  { icon: "🔦", text: "头灯 + 充电宝（补给通讯有限）" },
  { icon: "💵", text: "足量现金（山区移动支付不稳）" },
  { icon: "💳", text: "身份证（独龙江/片马边境登记）" },
]

const nujiangSeason = {
  title: "最佳旅行季节",
  sub: "三江并流，人神共居",
  rows: [
    { dot: "peak",  label: "☀️ 干季（11—4月）", date: "路况最安全，主游季", badge: "推荐" },
    { dot: "early", label: "🌸 春（3月）", date: "丙中洛桃花、第一湾桃花岛" },
    { dot: "late",  label: "⚠️ 雨季（6—10月）", date: "易塌方，独龙江常封路" },
  ],
}


/* ════════════════ 楚雄 ════════════════ */
const chuxiongSpots = [
  {
    id: 'cx1', name: "元谋土林", nameEn: "Yuanmou Earth Forest", emoji: "🏜️",
    district: "元谋县", lat: 25.7000, lng: 101.8700,
    peakTime: "全年（晨昏光影）", peakDays: "干季晨昏最出片", difficulty: "easy",
    rating: 4.6, reviews: 4200, tags: ["必去", "土林奇观", "物茂·浪巴铺"],
    isHot: true, ticket: "物茂/浪巴铺各约50元",
    description: "流水千百年冲刷雕蚀出的土柱森林，成片黄土峰林如刀削斧劈，气势磅礴又光怪陆离。物茂土林规整壮观、浪巴铺土林色彩最丰富，晨昏斜光下土柱泛出金红，是摄影与探秘的奇景，也是多部影视的取景地。",
    tips: "晨昏光影最美、正午暴晒；物茂、浪巴铺、班果几片各有特色；干季来路好，戴帽防晒备水。",
    transport: "元谋县城驾车约30-40分钟至各土林",
    color: "#B85A3A", xp: 130,
  },
  {
    id: 'cx2', name: "彝人古镇", nameEn: "Yiren Ancient Town", emoji: "🔥",
    district: "楚雄市", lat: 25.0300, lng: 101.5300,
    peakTime: "全年（火把节最盛）", peakDays: "火把节狂欢最热闹", difficulty: "easy",
    rating: 4.4, reviews: 6800, tags: ["必去", "彝族风情", "火把广场·夜景"],
    isHot: true, ticket: "免费",
    description: "楚雄城里一座大型彝族风情古镇，青瓦飞檐、水系环绕，夜里灯火璀璨、酒吧歌舞热闹。彝族的火把、左脚舞、服饰、美食在这里集中呈现，尤其火把节时篝火冲天、万人打跳，是感受彝族文化最方便的窗口。",
    tips: "免费开放、夜景最美；火把节（农历六月廿四）来最震撼；德江城楼、毕摩广场值得看。",
    transport: "楚雄市区内，打车可达",
    color: "#C7452F", xp: 100,
  },
  {
    id: 'cx3', name: "世界恐龙谷", nameEn: "Lufeng Dinosaur Valley", emoji: "🦕",
    district: "禄丰市", lat: 25.1500, lng: 102.0800,
    peakTime: "全年", peakDays: "全年 · 侏罗纪现场", difficulty: "easy",
    rating: 4.4, reviews: 3900, tags: ["必去", "恐龙化石", "侏罗纪"],
    isHot: true, ticket: "门票约100元",
    description: "禄丰是「恐龙之乡」，出土了大量侏罗纪恐龙化石。世界恐龙谷里，遗址馆内原址埋藏的成群恐龙化石震撼陈列，另有恐龙骨架、复原景观与主题游乐，把一亿多年前的侏罗纪世界搬到眼前，是亲子科普的绝佳去处。",
    tips: "适合带娃；遗址馆的原址化石群最值得看；离昆明也近，可作昆明—大理途中一站。",
    transport: "楚雄市区驾车约1小时至禄丰恐龙谷",
    color: "#4E7A5E", xp: 100,
  },
  {
    id: 'cx4', name: "元谋人遗址", nameEn: "Yuanmou Man Site", emoji: "🦴",
    district: "元谋县", lat: 25.7000, lng: 101.8800,
    peakTime: "全年", peakDays: "全年 · 东方人类摇篮", difficulty: "easy",
    rating: 4.2, reviews: 1600, tags: ["元谋人", "170万年", "人类摇篮"],
    ticket: "博物馆约低价/免费",
    description: "元谋人是迄今中国发现的最早的古人类之一，距今约170万年。元谋人博物馆与东方人类祭祖坛展示着那两枚著名的门齿化石与旧石器，讲述人类起源的一段远古史，与近旁的元谋土林可一并安排。",
    tips: "与元谋土林同一县，可连游；博物馆内容偏科普人文；适合对历史考古感兴趣者。",
    transport: "元谋县城内，近土林",
    color: "#8A6A3B", xp: 80,
  },
  {
    id: 'cx5', name: "紫溪山", nameEn: "Zixi Mountain", emoji: "🌸",
    district: "楚雄市", lat: 25.0000, lng: 101.4500,
    peakTime: "2-4月花海", peakDays: "春樱茶花杜鹃盛开", difficulty: "medium",
    rating: 4.3, reviews: 2100, tags: ["森林公园", "茶花杜鹃", "彝族赛装"],
    ticket: "门票约低价",
    description: "楚雄城郊的国家森林公园，古木参天、云雾缭绕。春天山茶、樱花、杜鹃次第盛开，漫山花海；山间还有紫顶寺古刹与彝族赛装节的传说。是楚雄人踏青避暑、赏花礼佛的后花园。",
    tips: "2-4月花期最盛；山上凉爽适合避暑；可徒步或自驾环山，带件外套。",
    transport: "楚雄市区驾车约40分钟",
    color: "#C85C8E", xp: 90,
  },
  {
    id: 'cx6', name: "武定狮子山", nameEn: "Wuding Lion Mountain", emoji: "🦁",
    district: "武定县", lat: 25.5300, lng: 102.4000,
    peakTime: "3-4月牡丹", peakDays: "春季牡丹盛开", difficulty: "medium",
    rating: 4.3, reviews: 1700, tags: ["佛教名山", "建文帝", "牡丹"],
    ticket: "门票约60元",
    description: "形如伏狮的佛教名山，正续禅寺古柏参天，相传明代建文帝曾在此出家避难，留下诸多遗迹与传说。每年三四月牡丹盛放，「西南第一山」的古刹在花海古木间格外清幽，是礼佛赏花的好去处。",
    tips: "3-4月牡丹花期最美；山上古寺清幽，慢逛半日；从楚雄或昆明方向可达。",
    transport: "楚雄市区驾车约1.5小时至武定",
    color: "#B4472F", xp: 90,
  },
  {
    id: 'cx7', name: "黑井古镇", nameEn: "Heijing Ancient Town", emoji: "🧂",
    district: "禄丰市", lat: 25.1500, lng: 101.7500,
    peakTime: "全年", peakDays: "全年 · 千年盐都", difficulty: "easy",
    rating: 4.4, reviews: 2300, tags: ["千年盐都", "盐马古道", "红砂石古镇"],
    ticket: "门票约30元",
    description: "龙川江畔一座因盐而兴的千年古镇，明清时富甲一方。红砂石铺就的老街、节孝坊、古盐井、大龙祠还在，游人稀少、原汁原味。可看古法制盐、尝一口盐焖鸡，感受盐马古道上曾经的繁华与如今的沉静。",
    tips: "有小火车/绿皮车可达，别有情调；游人少、适合慢逛住一晚；尝黑井盐焖鸡、看古盐井。",
    transport: "楚雄/禄丰驾车约1.5小时，或乘小火车至黑井",
    color: "#8A5A3B", xp: 90,
  },
]

/* 周边顺游 —— 均在楚雄州内（大姚/姚安/南华），派生同归楚雄 */
const chuxiongNearby = [
  {
    id: 'cxn1', name: "大姚石羊古镇", nameEn: "Shiyang Ancient Town", emoji: "🏛️",
    district: "大姚县", lat: 25.7200, lng: 101.3200,
    peakTime: "全年", peakDays: "全年 · 盐都孔庙", difficulty: "easy",
    rating: 4.2, reviews: 900, tags: ["千年盐都", "孔庙大铜像", "古镇"],
    desc: "盐都古镇，供着全国最大孔子铜像",
    description: "大姚的石羊古镇也是一座因盐而兴的千年古镇，最有名的是孔庙里那尊全国最大的孔子铜坐像，庄严古朴。青石老街、古盐井、七宝楼散落其间，文脉与盐脉在此交织，安静少商业气。",
    tips: "与大姚、姚安一片可串游；看孔庙铜像、古盐井；尝石羊豆腐。",
    transport: "楚雄市区驾车约2小时至大姚石羊",
    color: "#8A6A3B", xp: 80, isNearby: true,
  },
  {
    id: 'cxn2', name: "姚安光禄古镇", nameEn: "Guanglu Ancient Town", emoji: "🪷",
    district: "姚安县", lat: 25.5500, lng: 101.2800,
    peakTime: "夏季荷花 / 全年", peakDays: "夏季荷塘最盛", difficulty: "easy",
    rating: 4.2, reviews: 700, tags: ["历史名镇", "高氏土司", "荷花"],
    desc: "高氏土司故里，夏日荷塘环绕的古镇",
    description: "姚安光禄是国家历史文化名镇，曾是高氏土司的世居之地，「一座姚州城，半部云南史」。古镇格局完整，文昌宫、高雪君祠、德丰寺古朴，夏天四周荷塘连片、荷香满镇，是滇中少见的静美古镇。",
    tips: "夏季看荷花最美；古镇慢逛半日；与大姚、楚雄可串成滇中古镇线。",
    transport: "楚雄市区驾车约1.5小时至姚安光禄",
    color: "#5E9B7E", xp: 80, isNearby: true,
  },
  {
    id: 'cxn3', name: "南华咪依噜·菌乡", nameEn: "Nanhua Mushroom Town", emoji: "🍄",
    district: "南华县", lat: 25.1900, lng: 101.2800,
    peakTime: "6-9月野生菌季", peakDays: "夏秋菌子上市最旺", difficulty: "easy",
    rating: 4.3, reviews: 1000, tags: ["野生菌之乡", "咪依噜风情谷", "彝族"],
    desc: "中国野生菌之乡，夏秋满市松茸鸡枞",
    description: "南华是「中国野生菌之乡」，夏秋菌子季，松茸、鸡枞、牛肝菌堆满交易市场，鲜香四溢。咪依噜风情谷里彝族风情浓郁，可看歌舞、住彝家。想吃最地道最新鲜的云南菌子，这里是源头。",
    tips: "野生菌季（6-9月）来最对；菌子务必吃熟吃对、不混食不喝酒；市场买菌先认清品种。",
    transport: "楚雄市区驾车约40分钟至南华",
    color: "#7A8B5A", xp: 80, isNearby: true,
  },
]

const chuxiongItinerary = [
  {
    day: 1, title: "抵达·彝乡火风情", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达楚雄，入住市区" },
      { time: "傍晚", icon: "🔥", text: "彝人古镇看夜景，火把广场打跳", spotId: 'cx2' },
      { time: "晚上", icon: "🍖", text: "尝彝家坨坨肉 + 全羊汤锅" },
    ]
  },
  {
    day: 2, title: "恐龙与花山", date: "Day 2",
    activities: [
      { time: "上午", icon: "🦕", text: "世界恐龙谷，看侏罗纪化石群", spotId: 'cx3' },
      { time: "下午", icon: "🌸", text: "紫溪山赏茶花杜鹃（春），避暑徒步", spotId: 'cx5' },
      { time: "晚上", icon: "🍄", text: "回城尝野生菌火锅（夏秋）" },
    ]
  },
  {
    day: 3, title: "元谋土林", date: "Day 3",
    activities: [
      { time: "清晨", icon: "🏜️", text: "元谋土林晨光土柱峰林", spotId: 'cx1' },
      { time: "上午", icon: "🦴", text: "元谋人遗址，探东方人类摇篮", spotId: 'cx4' },
      { time: "傍晚", icon: "🌇", text: "浪巴铺土林守日落金光" },
    ]
  },
  {
    day: 4, title: "盐都或名山", date: "Day 4",
    activities: [
      { time: "全天", icon: "🧂", text: "黑井千年盐都古镇 或 武定狮子山" },
      { time: "下午", icon: "🎁", text: "选购牟定油腐乳、菌子干货、彝绣伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（昆明、大理）" },
    ]
  },
]

const chuxiongTips = [
  { icon: "🔥", title: "火把节", content: "彝族火把节（农历六月廿四，约公历7-8月）是楚雄一年最盛大的狂欢——篝火冲天、万人打跳、斗牛赛装。想体验请早订食宿。此外彝族赛装节（正月）被誉为「世界最古老的乡村T台」，也很值得赶。" },
  { icon: "📅", title: "最佳季节", content: "楚雄气候温和、全年可玩。春（2-4月）紫溪山、狮子山花海最盛；夏秋（6-9月）是野生菌季；火把节在盛夏。海拔适中、无高反。" },
  { icon: "🍄", title: "野生菌须知", content: "南华是野生菌之乡，夏秋菌子鲜美但部分有毒。务必去正规餐馆，菌子炒熟炒透、不混食、不喝酒，切勿自采自食，出现不适立即就医。" },
  { icon: "🏜️", title: "土林攻略", content: "元谋土林晨昏斜光下最出片、正午暴晒难受。物茂、浪巴铺、班果几片风格不同，可挑一到两片；干季路好，戴帽、防晒、备足水。" },
  { icon: "🚄", title: "区位便利", content: "楚雄正处昆明与大理之间，高铁、高速穿境，是滇中旅游的中转站。恐龙谷、黑井离昆明方向近，元谋土林在北往攀枝花方向，按路线顺势安排。" },
  { icon: "🍖", title: "彝家味道", content: "彝家坨坨肉（大块煮肉蘸料）、全羊汤锅、荞粑粑蘸蜂蜜、牟定油腐乳都是特色，质朴够味。火塘边的彝家饭与「敬酒歌」很有氛围，量力而饮。" },
  { icon: "🧵", title: "彝绣之乡", content: "楚雄是彝绣的重要产地，纹样绚烂、针法讲究，近年频登时装周。彝人古镇、赛装节可淘到手工彝绣，是有分量又好看的伴手礼。" },
]

const chuxiongFoods = [
  { name: "彝家坨坨肉", emoji: "🍖", desc: "大块煮肉蘸辣料，彝家硬菜" },
  { name: "全羊汤锅", emoji: "🍲", desc: "整羊下锅慢炖，鲜香暖身" },
  { name: "荞粑粑蘸蜂蜜", emoji: "🥞", desc: "苦荞烙饼蘸蜂蜜，粗粮清香" },
  { name: "野生菌", emoji: "🍄", desc: "南华菌乡所产，须炒熟吃对" },
  { name: "牟定油腐乳", emoji: "🧈", desc: "牟定名产，红亮咸香下饭" },
  { name: "元谋凉鸡", emoji: "🍗", desc: "元谋土鸡白斩凉拌，皮脆肉嫩" },
]

const chuxiongPackList = [
  { icon: "🧢", text: "遮阳帽 + 防晒（土林暴晒）" },
  { icon: "🧥", text: "薄外套（紫溪山/狮子山凉）" },
  { icon: "👟", text: "舒适步行鞋（土林/古镇多走）" },
  { icon: "📷", text: "相机（土林晨昏光影）" },
  { icon: "💧", text: "足量饮水（土林无遮荫）" },
  { icon: "💳", text: "身份证（高铁/景区实名）" },
]

const chuxiongSeason = {
  title: "最佳旅行季节",
  sub: "彝州火乡，土林恐龙",
  rows: [
    { dot: "peak",  label: "🔥 火把节（农历六月廿四·约7—8月）", date: "彝族狂欢，篝火打跳", badge: "推荐" },
    { dot: "early", label: "🌸 春（2—4月）", date: "紫溪山、狮子山花海" },
    { dot: "late",  label: "🍄 夏秋（6—9月）", date: "野生菌季，须吃熟吃对" },
  ],
}


/* ════════════════ 玉溪 ════════════════ */
const yuxiSpots = [
  {
    id: 'yx1', name: "抚仙湖", nameEn: "Fuxian Lake", emoji: "🏊",
    district: "澄江市", lat: 24.5500, lng: 102.9000,
    peakTime: "6-9月戏水", peakDays: "夏季亲水避暑最佳", difficulty: "easy",
    rating: 4.7, reviews: 12800, tags: ["必去", "最深高原湖", "透明水质"],
    isHot: true, ticket: "环湖免费（部分泳场/景点收费）",
    description: "中国蓄水量最大的深水高原湖泊之一，最深处百余米，湖水清澈见底、蓝得晃眼。禄充、樱花谷、广龙小镇沿岸而列，夏天可游泳、划船、环湖骑行，尝一锅铜锅煮的抗浪鱼。是滇中最治愈的一片蓝。",
    tips: "夏季（6-9月）戏水最佳；水深湾陡，务必在正规泳场、注意安全；环湖公路骑行、自驾都很美。",
    transport: "玉溪市区驾车约50分钟至澄江抚仙湖",
    color: "#2E93A6", xp: 130,
  },
  {
    id: 'yx2', name: "澄江化石地·帽天山", nameEn: "Chengjiang Fossil Site", emoji: "🦐",
    district: "澄江市", lat: 24.6700, lng: 102.9800,
    peakTime: "全年", peakDays: "全年 · 寒武纪现场", difficulty: "easy",
    rating: 4.5, reviews: 3600, tags: ["必去", "世界自然遗产", "寒武纪大爆发"],
    isHot: true, ticket: "化石博物馆免费（需预约）",
    description: "2012 年列入世界自然遗产的澄江化石地，帽天山埋藏着距今 5.3 亿年的寒武纪生命大爆发化石群——那是地球动物门类几乎一夜间集体登场的关键时刻。澄江化石地自然博物馆用海量标本把远古海洋搬到眼前，震撼又长知识。",
    tips: "博物馆免费但需提前预约；展陈极丰富、适合亲子科普，可预留半天；与抚仙湖同在澄江可连游。",
    transport: "澄江市区驾车约20分钟至帽天山",
    color: "#4E7A5E", xp: 100,
  },
  {
    id: 'yx3', name: "哀牢山", nameEn: "Ailao Mountain", emoji: "🌲",
    district: "新平县", lat: 24.1000, lng: 101.6000,
    peakTime: "秋冬云海 / 春杜鹃", peakDays: "晴后云海、春看杜鹃", difficulty: "hard",
    rating: 4.5, reviews: 4100, tags: ["原始森林", "石门峡", "云海"],
    description: "横亘滇中的巨大山系，保存着大片原始常绿阔叶林，云雾常年缭绕、神秘幽深。石门峡飞瀑深潭、茶马古道遗迹藏在林间，秋冬云海翻涌、春天杜鹃满山。近年因其原始与野性走红，但也因此更要敬畏自然。",
    tips: "原始林区易起雾迷路、气温骤变，务必走成熟路线、结伴或请向导、勿擅自深入；备保暖防水衣物与充足补给。",
    transport: "玉溪市区驾车约2.5小时至新平哀牢山",
    color: "#2E6E4A", xp: 120,
  },
  {
    id: 'yx4', name: "聂耳故居·聂耳公园", nameEn: "Nie Er's Former Residence", emoji: "🎼",
    district: "红塔区", lat: 24.3500, lng: 102.5400,
    peakTime: "全年", peakDays: "全年 · 国歌之乡", difficulty: "easy",
    rating: 4.3, reviews: 2200, tags: ["国歌作曲者", "聂耳故乡", "城市公园"],
    ticket: "免费",
    description: "《义勇军进行曲》（国歌）的作曲者聂耳祖籍玉溪，城中的聂耳故居、聂耳公园、聂耳文化广场纪念着这位人民音乐家。玉溪因此被称为「国歌之乡」。公园临水、市民休闲，是了解这座城人文底色的地方。",
    tips: "免费、在市区，散步顺游即可；聂耳故居可了解其生平；与玉溪老城、米线店连成半日。",
    transport: "玉溪红塔区市区内",
    color: "#B4472F", xp: 70,
  },
  {
    id: 'yx5', name: "通海秀山古城", nameEn: "Tonghai Xiushan", emoji: "🏯",
    district: "通海县", lat: 24.1100, lng: 102.7600,
    peakTime: "全年", peakDays: "全年 · 匾联之山", difficulty: "easy",
    rating: 4.4, reviews: 2600, tags: ["江南园林", "古建群", "匾联"],
    ticket: "秀山门票约50元 / 古城免费",
    description: "通海秀山是滇中名山，山上古建楼阁层叠、古木参天，遍布历代名家匾额楹联，被誉为「匾山联海」，文气极重。山下的通海古城格局完整、街巷古朴、生活气浓，是一座被低估的滇中江南小城。",
    tips: "秀山登山赏古建匾联约半日；古城慢逛、尝豆末糖甜白酒；离通海杞麓湖也近。",
    transport: "玉溪市区驾车约50分钟至通海",
    color: "#5E9B7E", xp: 90,
  },
  {
    id: 'yx6', name: "新平戛洒·花腰傣", nameEn: "Gasa Huayao Dai", emoji: "🌺",
    district: "新平县", lat: 24.0700, lng: 101.8500,
    peakTime: "全年（花街节最盛）", peakDays: "花街节彩衣如潮", difficulty: "easy",
    rating: 4.2, reviews: 1300, tags: ["花腰傣", "秧箩饭", "哀牢河谷"],
    ticket: "免费（村寨/体验另计）",
    description: "哀牢山下红河谷里的戛洒，是「花腰傣」的聚居地。花腰傣服饰绚烂如彩蝶、腰间层层束花而得名，至今保留着秧箩饭、花街节等古朴习俗。热坝气候暖热、瓜果丰饶，是一处色彩浓烈的傣家秘境。",
    tips: "花街节（约农历正月）彩衣如潮最好看；尝花腰傣秧箩饭、鳝鱼汤锅；尊重村寨习俗、拍照先问。",
    transport: "玉溪市区驾车约2小时至新平戛洒",
    color: "#C85C8E", xp: 90,
  },
  {
    id: 'yx7', name: "界鱼石·星云湖", nameEn: "Jieyu Rock & Xingyun Lake", emoji: "🐟",
    district: "江川区", lat: 24.3000, lng: 102.7500,
    peakTime: "全年", peakDays: "全年 · 两湖一石", difficulty: "easy",
    rating: 4.1, reviews: 1200, tags: ["两湖相连", "鱼不往来", "古滇文化"],
    ticket: "低价",
    description: "抚仙湖与星云湖之间由一条河相连，交界处一块「界鱼石」立于水中。奇的是两湖各产的鱼游到此石便掉头折返、互不越界，「两湖相交，鱼不往来」成了千古奇观。江川还是古滇青铜文化（李家山）的重要发源地。",
    tips: "看界鱼石奇观、了解古滇青铜（李家山出土牛虎铜案）；与抚仙湖一并顺游；适合半日。",
    transport: "玉溪市区驾车约40分钟至江川",
    color: "#3B8A9E", xp: 80,
  },
]

/* 周边顺游 —— 均在玉溪辖区（元江/华宁/峨山），派生同归玉溪 */
const yuxiNearby = [
  {
    id: 'yxn1', name: "元江那诺梯田", nameEn: "Yuanjiang Nanuo Terraces", emoji: "🌾",
    district: "元江县", lat: 23.6000, lng: 101.9900,
    peakTime: "11月-次年3月 / 云海", peakDays: "冬春灌水云海最美", difficulty: "medium",
    rating: 4.3, reviews: 800, tags: ["哈尼梯田", "云海日出", "太阳城"],
    desc: "太阳城里的哈尼梯田，云海日出小众版",
    description: "元江是云南著名的「太阳城」，全年高温、瓜果飘香。那诺乡的哈尼梯田层层叠叠、云海翻涌，晨光中不输元阳，却少有人知。热坝与高山梯田在这里奇妙并存，是喜欢清静的追光者之选。",
    tips: "冬春灌水期看云海日出；山路较远自驾为宜；元江河谷酷热、山上凉，备两季衣物。",
    transport: "玉溪市区驾车约2.5小时至元江那诺",
    color: "#C08A45", xp: 90, isNearby: true,
  },
  {
    id: 'yxn2', name: "华宁象鼻温泉", nameEn: "Huaning Hot Spring", emoji: "♨️",
    district: "华宁县", lat: 24.1900, lng: 102.9300,
    peakTime: "秋冬泡汤 / 全年", peakDays: "秋冬泡汤最惬意", difficulty: "easy",
    rating: 4.2, reviews: 900, tags: ["天然温泉", "泉乡", "柑橘"],
    desc: "滇中泉乡，泡汤加吃华宁柑橘",
    description: "华宁被称作「泉乡」，象鼻温泉一带水质温润、露天汤池掩在绿意里，是滇中泡汤度假的去处。华宁柑橘（尤其是冬季的华宁桔）皮薄多汁、闻名云南，泡完温泉抱一箱柑橘回家最惬意。",
    tips: "秋冬泡汤最舒服、顺买华宁柑橘；带泳衣；离抚仙湖不远可与澄江连游。",
    transport: "玉溪市区驾车约1小时至华宁",
    color: "#3B8A9E", xp: 70, isNearby: true,
  },
  {
    id: 'yxn3', name: "峨山嶍峨古镇", nameEn: "Eshan Ancient Town", emoji: "🪘",
    district: "峨山县", lat: 24.1700, lng: 102.4000,
    peakTime: "全年（火把节）", peakDays: "彝族火把节最盛", difficulty: "easy",
    rating: 4.1, reviews: 700, tags: ["第一个彝族自治县", "花鼓舞", "彝族"],
    desc: "全国第一个彝族自治县，花鼓舞之乡",
    description: "峨山是全国第一个彝族自治县，嶍峨古镇里彝族风情浓郁，花鼓舞、火把节热闹非凡。古镇仿古却也有市井烟火，是了解滇中彝族文化、离玉溪最近的一站，可与玉溪城区顺路串游。",
    tips: "火把节（约农历六月廿四）最热闹；看彝族花鼓舞、尝彝味；离玉溪近可半日顺游。",
    transport: "玉溪市区驾车约30分钟至峨山",
    color: "#C7452F", xp: 70, isNearby: true,
  },
]

const yuxiItinerary = [
  {
    day: 1, title: "抵达·抚仙湖蓝", date: "Day 1",
    activities: [
      { time: "下午", icon: "🏊", text: "抵达澄江，抚仙湖畔戏水/环湖骑行", spotId: 'yx1' },
      { time: "傍晚", icon: "🌅", text: "禄充、樱花谷看湖上日落" },
      { time: "晚上", icon: "🐟", text: "尝抚仙湖铜锅煮鱼 + 玉溪凉米线" },
    ]
  },
  {
    day: 2, title: "寒武纪与国歌", date: "Day 2",
    activities: [
      { time: "上午", icon: "🦐", text: "澄江化石地博物馆，看寒武纪大爆发", spotId: 'yx2' },
      { time: "下午", icon: "🐟", text: "界鱼石看两湖一石奇观", spotId: 'yx7' },
      { time: "傍晚", icon: "🎼", text: "回玉溪城逛聂耳公园、老城", spotId: 'yx4' },
    ]
  },
  {
    day: 3, title: "秀山与古城", date: "Day 3",
    activities: [
      { time: "上午", icon: "🏯", text: "通海秀山赏匾山联海古建", spotId: 'yx5' },
      { time: "下午", icon: "🏘️", text: "通海古城慢逛，尝豆末糖甜白酒" },
      { time: "傍晚", icon: "♨️", text: "华宁象鼻温泉泡汤（顺路）" },
    ]
  },
  {
    day: 4, title: "哀牢山或花腰傣", date: "Day 4",
    activities: [
      { time: "全天", icon: "🌲", text: "哀牢山原始森林云海 或 新平戛洒花腰傣" },
      { time: "下午", icon: "🎁", text: "选购华宁柑橘、通海豆末糖、云烟伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（昆明、建水）" },
    ]
  },
]

const yuxiTips = [
  { icon: "📅", title: "最佳季节", content: "玉溪气候温和、四季如春，全年可玩。夏季（6-9月）是抚仙湖戏水避暑的旺季；秋冬哀牢山云海最盛；花腰傣花街节、彝族火把节各有时令。海拔适中、无高反。" },
  { icon: "🏊", title: "抚仙湖安全", content: "抚仙湖是深水湖，近岸也可能骤然变深、暗流较多。务必在正规泳场、救生范围内游泳，勿逞能深入；带娃看护到位；不熟水性者环湖骑行、乘船同样很美。" },
  { icon: "🌲", title: "哀牢山敬畏", content: "哀牢山是原始林区，易起浓雾、气温骤降、手机常无信号，深入有迷路失温风险。务必走成熟景区路线、结伴或请向导，勿擅自穿越；备保暖防水衣物、充足补给与充电宝。" },
  { icon: "🦐", title: "化石地预约", content: "澄江化石地自然博物馆免费但需提前网上预约、带证件入馆。展陈极丰富，适合带孩子做寒武纪生命科普，建议预留半天慢看。" },
  { icon: "🚄", title: "区位便利", content: "玉溪紧邻昆明（约1小时车程/高铁直达），抚仙湖、化石地是昆明周边周末游的热门，也可作滇南、滇中环线的一站，交通方便。" },
  { icon: "🐟", title: "湖鲜与米线", content: "抚仙湖铜锅煮鱼（抗浪鱼名贵、多为养殖品）、玉溪凉米线、澄江藕粉、通海豆末糖都是特色。湖边农家乐现煮湖鱼最鲜，认准正规店。" },
  { icon: "🌺", title: "民族节庆", content: "花腰傣的花街节、彝族的火把节是玉溪最绚烂的时刻。若能赶上，戛洒、峨山一带的彩衣歌舞非常值得一看；尊重村寨习俗、拍照先征得同意。" },
]

const yuxiFoods = [
  { name: "抚仙湖铜锅鱼", emoji: "🐟", desc: "铜锅清煮湖鱼，鲜到掉眉毛" },
  { name: "玉溪凉米线", emoji: "🍜", desc: "酸辣爽口，滇中夏日经典" },
  { name: "澄江藕粉", emoji: "🥣", desc: "澄江莲藕磨粉冲糊，滑润清甜" },
  { name: "通海豆末糖", emoji: "🍬", desc: "豆面白糖层层压制，酥香化口" },
  { name: "花腰傣秧箩饭", emoji: "🍱", desc: "秧箩盛饭配傣味，田间美味" },
  { name: "元江芒果", emoji: "🥭", desc: "太阳城热坝所产，甜糯多汁" },
]

const yuxiPackList = [
  { icon: "🩱", text: "泳衣（抚仙湖戏水，正规泳场）" },
  { icon: "🧥", text: "保暖防水衣（哀牢山雾冷多变）" },
  { icon: "🧴", text: "防晒 + 驱蚊（湖畔河谷）" },
  { icon: "🔋", text: "充电宝（哀牢山信号弱）" },
  { icon: "🎫", text: "证件（化石地博物馆需预约）" },
  { icon: "💳", text: "身份证（高铁/景区实名）" },
]

const yuxiSeason = {
  title: "最佳旅行季节",
  sub: "抚仙湖蓝，四季如春",
  rows: [
    { dot: "peak",  label: "🏊 夏（6—9月）", date: "抚仙湖戏水避暑旺季", badge: "推荐" },
    { dot: "early", label: "🌲 秋冬", date: "哀牢山云海最盛" },
    { dot: "late",  label: "🌺 春（2—3月）", date: "花腰傣花街节、哀牢杜鹃" },
  ],
}


/* ════════════════ 临沧 ════════════════ */
const lincangSpots = [
  {
    id: 'lc1', name: "翁丁佤寨", nameEn: "Wengding Wa Village", emoji: "🛖",
    district: "沧源县", lat: 23.2000, lng: 99.2000,
    peakTime: "全年（云海秋冬多）", peakDays: "晨雾佤山云海", difficulty: "medium",
    rating: 4.5, reviews: 2600, tags: ["必去", "佤族村寨", "佤山云海"],
    isHot: true, ticket: "门票约40元",
    description: "阿佤山深处的佤族村寨，曾被称为「中国最后一个原始部落」，茅草木楞房、寨门木鼓、人头桩透着古老气息。2021 年 2 月老寨大部毁于火灾，如今按原貌重建、佤族村民仍在此生活。晨雾中的佤山云海与木鼓声，依旧动人。",
    tips: "老寨 2021 火灾后为重建village，心里有数；清晨看佤山云海最美；尊重佤族习俗、拍照先问、勿嬉闹祭祀区。",
    transport: "临沧市区驾车约3.5小时至沧源翁丁",
    color: "#6B4E3D", xp: 120,
  },
  {
    id: 'lc2', name: "沧源崖画", nameEn: "Cangyuan Rock Paintings", emoji: "🖼️",
    district: "沧源县", lat: 23.1500, lng: 99.2500,
    peakTime: "全年", peakDays: "全年 · 三千年古画", difficulty: "easy",
    rating: 4.3, reviews: 1400, tags: ["必去", "三千年崖画", "远古岩画"],
    isHot: true, ticket: "门票约30元",
    description: "距今约三千年、中国最古老的崖画之一。十余处红色岩画散落在沧源各处的崖壁上（多在海拔约1500米处），描绘着远古先民狩猎、放牧、舞蹈、祭祀的生活。据说画色还会随光线、天气变化，神秘古朴，是解读阿佤先民的活化石。",
    tips: "崖画分散在几处、可选主要一两处看；结合翁丁、广允缅寺同游沧源；崖壁远观、勿触摸攀爬。",
    transport: "沧源县城驾车约20分钟",
    color: "#B4472F", xp: 100,
  },
  {
    id: 'lc3', name: "凤庆·锦绣茶祖", nameEn: "Fengqing Ancient Tea King", emoji: "🍵",
    district: "凤庆县", lat: 24.5800, lng: 99.9200,
    peakTime: "春茶3-4月 / 全年", peakDays: "春采滇红最活", difficulty: "medium",
    rating: 4.5, reviews: 1900, tags: ["必去", "滇红之乡", "3200年茶王"],
    isHot: true, ticket: "香竹箐景区约低价",
    description: "凤庆是「滇红」（云南红茶）的发源地，也是普洱茶的重要原料基地。香竹箐那株「锦绣茶祖」树龄约三千二百年，是世界上最古老的栽培型古茶树之一，一人难以合抱。走进凤庆的古茶园与红茶厂，能读懂云南茶的半部历史。",
    tips: "春茶季（3-4月）茶山最热闹；参观锦绣茶祖、逛滇红茶厂、买一罐凤庆红茶；山路较远宜自驾。",
    transport: "临沧市区驾车约2小时至凤庆香竹箐",
    color: "#8A6A3B", xp: 110,
  },
  {
    id: 'lc4', name: "广允缅寺", nameEn: "Guangyun Buddhist Temple", emoji: "🛕",
    district: "沧源县", lat: 23.1500, lng: 99.2400,
    peakTime: "全年", peakDays: "全年 · 国宝南传佛寺", difficulty: "easy",
    rating: 4.2, reviews: 800, tags: ["国宝古寺", "南传佛教", "傣式壁画"],
    ticket: "免费",
    description: "沧源县城里一座清代南传上座部佛寺，全国重点文物保护单位。融合傣、汉建筑之美，大殿的木雕、金水漏印与彩色壁画精美绝伦，尤其壁画内容生动、笔法细腻，是滇西南南传佛教艺术的瑰宝，静立在闹市一隅。",
    tips: "在沧源县城、免费，与崖画、翁丁同片区顺游；进殿脱鞋、尊重礼佛习俗；壁画值得细看。",
    transport: "沧源县城内，步行可达",
    color: "#C7852B", xp: 80,
  },
  {
    id: 'lc5', name: "勐库大雪山古茶园", nameEn: "Mengku Ancient Tea Forest", emoji: "🌿",
    district: "双江县", lat: 23.7500, lng: 99.8500,
    peakTime: "春茶3-4月", peakDays: "春采冰岛茶最盛", difficulty: "hard",
    rating: 4.5, reviews: 1200, tags: ["野生古茶群落", "冰岛茶", "普洱名山"],
    ticket: "免费（茶山体验另计）",
    description: "双江勐库大雪山上，生长着连片的万亩野生型古茶树群落，是普洱茶的重要基因宝库。山脚的冰岛、坝糯等寨子出产的普洱茶名震天下、一饼难求。云雾缭绕的古茶山间，藏着云南茶最顶级的味道与最原始的模样。",
    tips: "冰岛茶名贵、水深，认准正规渠道、试喝再买；登野生古茶群落属硬核徒步、需向导；春茶季最热闹。",
    transport: "临沧市区驾车约2小时至双江勐库",
    color: "#4E7A5E", xp: 100,
  },
  {
    id: 'lc6', name: "茶文化风情园·五老山", nameEn: "Tea Culture Garden", emoji: "🍃",
    district: "临翔区", lat: 23.9000, lng: 100.0800,
    peakTime: "全年", peakDays: "全年 · 采茶体验", difficulty: "easy",
    rating: 4.1, reviews: 1000, tags: ["万亩茶园", "采茶制茶", "五老山"],
    ticket: "低价/免费",
    description: "临沧城郊的茶文化风情园坐落在万亩茶园与五老山森林间，是云南红茶产量最大的园区之一。可以亲手采茶、看制茶、听茶歌，系统了解滇红与普洱的门道。园区依山傍绿、空气清新，是离城最近的一片茶香绿意。",
    tips: "适合想了解滇红茶的人，采制体验可预约；五老山森林公园可徒步；离市区近、半日足够。",
    transport: "临沧市区驾车约30分钟",
    color: "#5E9B7E", xp: 80,
  },
  {
    id: 'lc7', name: "沧源葫芦小镇", nameEn: "Cangyuan Hulu Town", emoji: "🎃",
    district: "沧源县", lat: 23.1500, lng: 99.2600,
    peakTime: "全年（摸你黑狂欢5月）", peakDays: "摸你黑狂欢节最疯", difficulty: "easy",
    rating: 4.2, reviews: 1100, tags: ["佤族文化", "司岗里", "摸你黑"],
    ticket: "免费",
    description: "沧源县城旁的佤族文化小镇，以佤族创世史诗「司岗里」（人从葫芦/山洞中走出）为主题，佤山风情浓郁。每年五月的「摸你黑」狂欢节，人们互相涂抹黑色的天然颜料以求祝福，全城陷入欢乐的黑色狂欢，是佤文化最热烈的表达。",
    tips: "摸你黑狂欢节（约5月）最疯最有意思，参与需带可弄脏的衣物；平日可看佤族歌舞、木鼓；尊重佤族习俗。",
    transport: "沧源县城旁，步行/打车可达",
    color: "#3E5A3A", xp: 80,
  },
]

/* 周边顺游 —— 均在临沧辖区（凤庆/永德/耿马），派生同归临沧 */
const lincangNearby = [
  {
    id: 'lcn1', name: "凤庆鲁史古镇", nameEn: "Lushi Ancient Town", emoji: "🐴",
    district: "凤庆县", lat: 24.8000, lng: 100.0200,
    peakTime: "全年", peakDays: "全年 · 茶马古道古镇", difficulty: "easy",
    rating: 4.3, reviews: 700, tags: ["茶马古道", "古驿重镇", "四合院"],
    desc: "澜沧江畔的茶马古道古镇，滇红外运重镇",
    description: "凤庆北部澜沧江畔的千年古镇，曾是茶马古道上滇红外运的咽喉。三街七巷、四合院、马店与被马蹄磨亮的石板路都还在，古镇格局完整、游人稀少，安静得能听见旧时光。老街上还能喝到地道的凤庆红茶。",
    tips: "与凤庆茶山可一并安排；古镇慢逛、住老院子；山路较远自驾为宜。",
    transport: "临沧市区驾车约3小时至凤庆鲁史",
    color: "#8A6A3B", xp: 80, isNearby: true,
  },
  {
    id: 'lcn2', name: "永德大雪山", nameEn: "Yongde Snow Mountain", emoji: "🏔️",
    district: "永德县", lat: 24.0200, lng: 99.2500,
    peakTime: "3-5月杜鹃 / 全年", peakDays: "春季高山杜鹃盛开", difficulty: "hard",
    rating: 4.2, reviews: 500, tags: ["自然保护区", "高山杜鹃", "原始森林"],
    desc: "国家级保护区，春季万亩高山杜鹃",
    description: "永德大雪山国家级自然保护区，横断山余脉的一片原始秘境，森林垂直分布、生物多样。春天万亩高山杜鹃在山脊铺展，云海翻涌，人迹罕至。是徒步与自然爱好者的小众之选，也是重要的动植物基因库。",
    tips: "属硬核徒步、需向导与体能，勿擅自深入；春季（3-5月）杜鹃最盛；备保暖防水衣物。",
    transport: "临沧市区驾车约3小时至永德大雪山",
    color: "#5E86AC", xp: 90, isNearby: true,
  },
  {
    id: 'lcn3', name: "耿马孟定边境", nameEn: "Mengding Border", emoji: "🚩",
    district: "耿马县", lat: 23.5500, lng: 99.1000,
    peakTime: "全年", peakDays: "全年 · 中缅口岸", difficulty: "easy",
    rating: 4.0, reviews: 400, tags: ["中缅边境", "孟定口岸", "傣族热坝"],
    desc: "中缅边境傣族热坝，孟定口岸边贸",
    description: "耿马孟定是临沧的中缅边境热坝，清水河口岸是通往缅甸的重要通道，边贸与傣族风情交织。热坝气候暖热、盛产芒果甘蔗，傣家竹楼、佛寺散落其间，是感受临沧边地口岸烟火的地方。",
    tips: "近边境带身份证、勿越境；热坝湿热备防蚊防晒；傣族节庆时最热闹。",
    transport: "临沧市区驾车约2.5小时至耿马孟定",
    color: "#C79A3E", xp: 70, isNearby: true,
  },
]

const lincangItinerary = [
  {
    day: 1, title: "抵达·茶城茶香", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达临沧，入住市区" },
      { time: "傍晚", icon: "🍃", text: "茶文化风情园采茶，五老山透气", spotId: 'lc6' },
      { time: "晚上", icon: "🍚", text: "尝佤族鸡肉烂饭 + 一杯凤庆滇红" },
    ]
  },
  {
    day: 2, title: "阿佤山佤文化", date: "Day 2",
    activities: [
      { time: "上午", icon: "🚗", text: "南下沧源（约3.5小时），入住佤乡" },
      { time: "下午", icon: "🖼️", text: "沧源崖画看三千年岩画", spotId: 'lc2' },
      { time: "傍晚", icon: "🛕", text: "广允缅寺赏国宝壁画，葫芦小镇", spotId: 'lc4' },
    ]
  },
  {
    day: 3, title: "最后的原始部落", date: "Day 3",
    activities: [
      { time: "清晨", icon: "🛖", text: "翁丁佤寨守佤山云海、看木鼓", spotId: 'lc1' },
      { time: "上午", icon: "🎃", text: "葫芦小镇感受司岗里佤文化", spotId: 'lc7' },
      { time: "下午", icon: "🚗", text: "返临沧或转双江方向" },
    ]
  },
  {
    day: 4, title: "古茶山与滇红", date: "Day 4",
    activities: [
      { time: "全天", icon: "🍵", text: "双江勐库冰岛古茶山 或 凤庆锦绣茶祖" },
      { time: "下午", icon: "🎁", text: "选购滇红茶、坚果、佤族筒帕伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（普洱、西双版纳）" },
    ]
  },
]

const lincangTips = [
  { icon: "📅", title: "最佳季节", content: "北回归线穿城，亚热带气候、年均约17℃，四季温和、全年皆宜。春茶季（3-4月）茶山最活；佤族「摸你黑」狂欢节在5月最热烈；永德大雪山杜鹃3-5月盛开。海拔适中、无高反。" },
  { icon: "🛖", title: "翁丁现状", content: "翁丁老寨在 2021 年 2 月遭遇火灾、大部分茅草房被毁，现已按原貌重建、佤族村民仍在生活。前往时心里有数、以平常心看待「重建的原始部落」，尊重村民真实生活，勿把村寨当纯布景。" },
  { icon: "🍵", title: "茶乡与买茶", content: "临沧是滇红发源地、普洱名山（冰岛、昔归）所在，也是全国最大红茶产区。买茶认准正规渠道、试喝再买，冰岛/昔归等名山茶价高陷阱多，警惕低价「名山古树」。" },
  { icon: "🛂", title: "边境证件", content: "沧源、耿马、镇康紧邻中缅边境，孟定等口岸需带身份证、按规定通行，勿越境、勿购来路不明商品。偏远地区备足现金与常用药。" },
  { icon: "🚗", title: "路远景散", content: "临沧景点散在沧源、凤庆、双江、永德等偏远县，距市区常2-3.5小时山路，昆明到临沧更要约9小时。强烈建议飞临沧机场进、再包车按片区分天走，别贪多。" },
  { icon: "🙏", title: "佤族礼俗", content: "临沧是佤族的主要聚居地（云南三分之二佤族在此）。尊重佤族的木鼓、祭祀等习俗，拍照先征得同意；「摸你黑」被涂黑是受祝福，别抗拒；进佛寺守南传佛教礼仪。" },
  { icon: "🥭", title: "山货特产", content: "滇红茶、坚果（临沧种植面积全国第一）、蔗糖、芒果都是临沧特产。佤族的筒帕（挎包）手工织就、纹样古朴，是很有味道的伴手礼。" },
]

const lincangFoods = [
  { name: "佤族鸡肉烂饭", emoji: "🍚", desc: "鸡肉与米同煮软糯，佤家名菜" },
  { name: "凤庆滇红", emoji: "🍵", desc: "滇红发源地，汤色红艳香高" },
  { name: "佤王宴", emoji: "🍖", desc: "佤家长桌宴，烤肉山珍摆满席" },
  { name: "牛撒撇", emoji: "🥗", desc: "苦撒凉拌，酸苦生鲜的边地味" },
  { name: "木瓜鸡", emoji: "🍲", desc: "酸木瓜炖鸡，开胃解腻" },
  { name: "竹筒茶", emoji: "🎋", desc: "茶叶入竹筒烤制，带竹清香" },
]

const lincangPackList = [
  { icon: "🧥", text: "薄外套（茶山早晚凉、大雪山冷）" },
  { icon: "🦟", text: "驱蚊 + 防晒（热坝湿热）" },
  { icon: "👟", text: "防滑徒步鞋（茶山/大雪山）" },
  { icon: "👕", text: "可弄脏衣物（摸你黑狂欢节）" },
  { icon: "💵", text: "足量现金（偏远山区支付不稳）" },
  { icon: "💳", text: "身份证（边境边检查验）" },
]

const lincangSeason = {
  title: "最佳旅行季节",
  sub: "滇红茶乡，阿佤山寨",
  rows: [
    { dot: "peak",  label: "🍃 春（3—4月）", date: "春茶飘香，茶山最活", badge: "推荐" },
    { dot: "early", label: "🎃 摸你黑（约5月）", date: "佤族狂欢，全城涂黑" },
    { dot: "late",  label: "☁️ 秋冬", date: "佤山云海、气候温和" },
  ],
}


/* ════════════════ 文山 ════════════════ */
const wenshanSpots = [
  {
    id: 'ws1', name: "普者黑", nameEn: "Puzhehei", emoji: "🪷",
    district: "丘北县", lat: 24.1700, lng: 104.0500,
    peakTime: "6-9月荷花", peakDays: "盛夏万亩荷花最美", difficulty: "easy",
    rating: 4.7, reviews: 9200, tags: ["必去", "喀斯特水乡", "万亩荷花"],
    isHot: true, ticket: "门票约100元 + 船费",
    description: "三百多座喀斯特孤峰散落在湖泊、田园与荷塘之间，坐一叶小船穿行其中，青峰倒影、荷叶接天。夏天万亩荷花盛开，泼水与打水仗的欢闹响彻湖面。《三生三世十里桃花》让它红遍全国，是滇东南最灵动的一片山水。",
    tips: "荷花季（6-9月）最美；坐船游湖会「打水仗」，带好防水袋、可弄湿的衣物；仙人洞彝寨就在湖边可住。",
    transport: "文山市区驾车约2小时至丘北普者黑",
    color: "#3E9A86", xp: 130,
  },
  {
    id: 'ws2', name: "坝美", nameEn: "Bamei Village", emoji: "🚣",
    district: "广南县", lat: 24.2000, lng: 105.3000,
    peakTime: "全年", peakDays: "全年 · 世外桃源", difficulty: "medium",
    rating: 4.5, reviews: 3600, tags: ["必去", "世外桃源", "水洞进村"],
    isHot: true, ticket: "门票约90元（含船）",
    description: "现实版的「桃花源」——三面环山的壮族村寨，进出只能乘小船穿过幽暗的水洞。船一出洞，豁然开朗：田畴、水牛、壮家竹楼、鸡犬相闻，仿佛与世隔绝的另一个时空。陶渊明笔下的意境，在这里活生生地存在着。",
    tips: "坐船穿水洞是核心体验；村里可慢住一晚感受宁静；尊重村民真实生活、勿喧闹。",
    transport: "文山市区驾车约2.5小时至广南坝美",
    color: "#4E7A5E", xp: 120,
  },
  {
    id: 'ws3', name: "广南八宝", nameEn: "Bao Ba Fields", emoji: "🌾",
    district: "广南县", lat: 24.0500, lng: 105.3000,
    peakTime: "全年（秋收金黄）", peakDays: "稻熟时田园最美", difficulty: "easy",
    rating: 4.3, reviews: 1400, tags: ["贡米之乡", "田园山水", "三腊瀑布"],
    ticket: "低价/免费",
    description: "「八宝贡米」的产地，一片被喀斯特峰丛环抱的坝子，稻田、河流、小桥、壮寨如一幅缩小版的桂林山水田园画。三腊瀑布飞泻、河上竹排悠悠，秋收时金黄稻浪铺满坝子，宁静得让人忘了时间。",
    tips: "与坝美同在广南可连游；秋收季稻田最美；尝一碗八宝贡米饭。",
    transport: "文山市区驾车约2.5小时至广南八宝",
    color: "#C69A4C", xp: 90,
  },
  {
    id: 'ws4', name: "文山三七之乡", nameEn: "Sanqi Town", emoji: "🌿",
    district: "文山市", lat: 23.3700, lng: 104.2400,
    peakTime: "全年", peakDays: "全年 · 道地药材", difficulty: "easy",
    rating: 4.1, reviews: 1100, tags: ["三七之乡", "田七文化", "药膳"],
    ticket: "三七园低价",
    description: "文山是「三七之乡」，这里出产的三七（田七）是驰名中外的道地名贵药材。三七园、三七博物馆、三七交易市场里，能了解从种植到入药的门道，尝一锅三七汽锅鸡药膳，把云南人「药食同源」的养生智慧吃进肚子里。",
    tips: "在文山市区，适合了解三七文化、选购道地三七（认准正规市场与检测）；三七药膳滋补，适量食用。",
    transport: "文山市区内",
    color: "#5E9B7E", xp: 70,
  },
  {
    id: 'ws5', name: "仙人洞彝寨", nameEn: "Xianrendong Yi Village", emoji: "🏘️",
    district: "丘北县", lat: 24.1700, lng: 104.0600,
    peakTime: "6-9月 / 花脸节", peakDays: "荷花季与花脸节最热闹", difficulty: "easy",
    rating: 4.2, reviews: 1500, tags: ["撒尼彝寨", "普者黑畔", "花脸节"],
    ticket: "含于普者黑",
    description: "普者黑湖畔的撒尼（彝族支系）村寨，青瓦土墙的民居临水而建，是游普者黑最好的住宿与生活体验地。每年的「花脸节」上，人们互相往脸上抹锅烟墨以求吉祥，与水上狂欢一起，是这片水乡最欢腾的节庆。",
    tips: "住仙人洞彝寨客栈、清晨划船看晨雾荷塘最惬意；花脸节（约农历二三月）最有意思；尊重彝族习俗。",
    transport: "普者黑景区内湖畔",
    color: "#B4472F", xp: 80,
  },
  {
    id: 'ws6', name: "麻栗坡老山", nameEn: "Laoshan Battlefield", emoji: "🎖️",
    district: "麻栗坡县", lat: 22.9800, lng: 104.7000,
    peakTime: "全年", peakDays: "全年 · 边境纪念", difficulty: "medium",
    rating: 4.5, reviews: 900, tags: ["老山战役", "烈士陵园", "中越边境"],
    ticket: "免费",
    description: "中越边境上的老山，是上世纪边境作战的主战场之一。麻栗坡烈士陵园里长眠着近千名烈士，老山主峰的战壕、猫耳洞遗迹与纪念馆无声诉说着那段历史。庄严肃穆，是一堂沉重而深刻的爱国主义课。",
    tips: "陵园与遗址请庄重肃穆瞻仰、勿喧闹嬉戏；近边境带身份证；山路较险，注意安全。",
    transport: "文山市区驾车约2小时至麻栗坡老山",
    color: "#6B4E3D", xp: 100,
  },
  {
    id: 'ws7', name: "西畴石漠公园", nameEn: "Xichou Karst Park", emoji: "🪨",
    district: "西畴县", lat: 23.4500, lng: 104.6800,
    peakTime: "全年", peakDays: "全年 · 石漠奇观", difficulty: "easy",
    rating: 4.0, reviews: 500, tags: ["喀斯特石漠", "石漠化治理", "香坪山"],
    ticket: "低价",
    description: "西畴曾是石漠化最严重的地区之一，当地人「搬石造地、绿化荒山」创造了著名的「西畴精神」。国家石漠公园里，嶙峋的喀斯特石林与后来种出的绿意并存，香坪山林场郁郁葱葱，是一处兼具地质奇观与人文精神的地方。",
    tips: "了解「西畴精神」与石漠化治理很有意义；香坪山可徒步透气；小众、适合顺游。",
    transport: "文山市区驾车约1.5小时至西畴",
    color: "#8A7A66", xp: 70,
  },
]

/* 周边顺游 —— 均在文山州内（富宁/砚山/马关），派生同归文山 */
const wenshanNearby = [
  {
    id: 'wsn1', name: "富宁驮娘江·坡芽", nameEn: "Funing Tuoniang River", emoji: "🎶",
    district: "富宁县", lat: 23.6200, lng: 105.6300,
    peakTime: "全年", peakDays: "全年 · 壮乡情歌", difficulty: "easy",
    rating: 4.2, reviews: 400, tags: ["壮族坡芽歌书", "驮娘江", "田园"],
    desc: "壮族坡芽歌书之乡，碧绿驮娘江漂流",
    description: "富宁是壮族「坡芽歌书」的故乡——用图画符号记录情歌的古老文字，被称为「活着的图画文字」。碧绿的驮娘江穿峡而过，可漂流可乘船，两岸青山壮寨、田园如画，是滇桂交界处一处清静的壮乡秘境。",
    tips: "了解坡芽歌书这一独特文化遗产；驮娘江漂流看两岸风光；富宁在滇桂交界、可与广西方向衔接。",
    transport: "文山市区驾车约3小时至富宁",
    color: "#3B8A9E", xp: 80, isNearby: true,
  },
  {
    id: 'wsn2', name: "砚山听湖", nameEn: "Yanshan Ting Lake", emoji: "🌊",
    district: "砚山县", lat: 23.6000, lng: 104.3300,
    peakTime: "全年", peakDays: "全年 · 城郊湖景", difficulty: "easy",
    rating: 4.0, reviews: 500, tags: ["高原湖", "湿地", "休闲"],
    desc: "砚山城郊的宁静湖泊与湿地",
    description: "砚山县城边的一处高原湖泊与湿地，水面开阔、水鸟栖息，环湖绿道适合骑行慢跑。砚山是文山的交通与农业重镇（三七、辣椒集散），听湖是当地人休闲的后花园，路过文山北部时可歇脚透气。",
    tips: "适合作为途经砚山时的休憩点；环湖散步骑行；砚山也是三七、丘北辣椒的集散地。",
    transport: "文山市区驾车约40分钟至砚山",
    color: "#3B8AA6", xp: 60, isNearby: true,
  },
  {
    id: 'wsn3', name: "马关古林箐", nameEn: "Malin Gulinqing Reserve", emoji: "🌿",
    district: "马关县", lat: 22.9000, lng: 104.1000,
    peakTime: "全年", peakDays: "全年 · 雨林保护区", difficulty: "medium",
    rating: 4.1, reviews: 300, tags: ["季雨林", "自然保护区", "中越边境"],
    desc: "滇东南的季雨林秘境，生物多样",
    description: "马关古林箐省级自然保护区，滇东南少有的季风常绿阔叶林与热带季雨林，藏着桫椤、蜂猴等珍稀动植物，溪流瀑布幽深清凉。马关地处中越边境，边地风情与原始雨林交织，是自然与探秘爱好者的小众之选。",
    tips: "属自然保护区，徒步需向导、勿破坏植被；近边境带身份证；雨林潮湿备防蚊防滑。",
    transport: "文山市区驾车约1.5小时至马关古林箐",
    color: "#2E8B57", xp: 70, isNearby: true,
  },
]

const wenshanItinerary = [
  {
    day: 1, title: "抵达·三七之乡", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达文山，了解三七之乡" , spotId: 'ws4' },
      { time: "傍晚", icon: "🌿", text: "三七园、三七市场，选道地田七" },
      { time: "晚上", icon: "🍲", text: "尝三七汽锅鸡药膳 + 壮乡酸汤" },
    ]
  },
  {
    day: 2, title: "普者黑荷花水乡", date: "Day 2",
    activities: [
      { time: "上午", icon: "🚗", text: "北上丘北普者黑（约2小时）" },
      { time: "下午", icon: "🪷", text: "泛舟普者黑，穿孤峰荷塘、打水仗", spotId: 'ws1' },
      { time: "晚上", icon: "🏘️", text: "住仙人洞彝寨，看湖畔晚霞", spotId: 'ws5' },
    ]
  },
  {
    day: 3, title: "世外桃源坝美", date: "Day 3",
    activities: [
      { time: "上午", icon: "🚣", text: "广南坝美，坐船穿水洞进桃源", spotId: 'ws2' },
      { time: "下午", icon: "🌾", text: "广南八宝田园山水，尝贡米", spotId: 'ws3' },
      { time: "晚上", icon: "🌙", text: "广南或坝美住宿，享壮乡宁静" },
    ]
  },
  {
    day: 4, title: "边关或石漠", date: "Day 4",
    activities: [
      { time: "全天", icon: "🎖️", text: "麻栗坡老山缅怀 或 西畴石漠公园" },
      { time: "下午", icon: "🎁", text: "选购文山三七、丘北辣椒、壮锦伴手礼" },
      { time: "傍晚", icon: "✈️", text: "返程 / 前往下一站（昆明、广西）" },
    ]
  },
]

const wenshanTips = [
  { icon: "📅", title: "最佳季节", content: "亚热带气候、四季温和。普者黑荷花在盛夏（6-9月）最盛、也是水上狂欢最欢腾的时节；坝美、八宝田园全年皆宜，秋收时稻田金黄；彝族花脸节在农历二三月。海拔适中、无高反。" },
  { icon: "🪷", title: "普者黑玩水", content: "普者黑坐船游湖会有「打水仗」的欢闹传统，务必带防水袋收好手机相机、穿可弄湿的衣物、备换洗。荷花季人多，早出游船、避开正午暴晒。" },
  { icon: "🌿", title: "三七选购", content: "文山三七是道地名贵药材，市场繁荣但等级、真假差别大。非行家请在正规市场、认准检测与产地，别贪便宜买到劣质或掺假；三七药膳滋补，孕妇等特殊人群食用前咨询医嘱。" },
  { icon: "🛂", title: "边境肃穆", content: "麻栗坡、马关地处中越边境，需带身份证、勿越境。老山、烈士陵园是庄严的纪念地，请肃穆瞻仰、勿喧闹嬉戏拍照。" },
  { icon: "🚗", title: "景点分散", content: "文山景点散在丘北（普者黑）、广南（坝美/八宝）、麻栗坡等县，彼此距离较远（常2-3小时）。建议按片区分天、自驾或包车，普者黑与坝美通常分开两片安排。" },
  { icon: "🙏", title: "壮苗彝风情", content: "文山是壮族、苗族、彝族聚居地，坡芽歌书、花脸节、壮锦等民族文化独特。尊重村寨真实生活，拍照先征得同意；节庆时的歌舞与习俗是分享而非表演。" },
  { icon: "🌶️", title: "壮乡味道", content: "三七汽锅鸡、八宝贡米、壮家五色花糯米饭、荷叶包饭、丘北辣椒都是特色，色彩丰富、够味养生。壮苗人家的酸汤、糯食别有风味。" },
]

const wenshanFoods = [
  { name: "三七汽锅鸡", emoji: "🍲", desc: "田七入汽锅炖鸡，滋补清鲜" },
  { name: "八宝贡米", emoji: "🍚", desc: "广南贡米，粒长饭香，曾为贡品" },
  { name: "五色花糯米饭", emoji: "🌈", desc: "植物染色的壮家糯米，喜庆好看" },
  { name: "丘北辣椒", emoji: "🌶️", desc: "云南名椒，香辣醇厚，做菜提味" },
  { name: "荷叶包饭", emoji: "🪷", desc: "普者黑荷叶裹饭蒸香，清新" },
  { name: "壮乡酸汤", emoji: "🥣", desc: "壮苗酸汤煮鱼煮菜，开胃解腻" },
]

const wenshanPackList = [
  { icon: "🎒", text: "防水袋（普者黑打水仗必备）" },
  { icon: "👕", text: "可弄湿衣物 + 换洗（游船戏水）" },
  { icon: "🧴", text: "防晒 + 驱蚊（荷塘湖畔）" },
  { icon: "👟", text: "舒适步行鞋（田园古寨多走）" },
  { icon: "🌂", text: "雨具（夏季多阵雨）" },
  { icon: "💳", text: "身份证（边境边检查验）" },
]

const wenshanSeason = {
  title: "最佳旅行季节",
  sub: "三七之乡，桃源水寨",
  rows: [
    { dot: "peak",  label: "🪷 夏（6—9月）", date: "普者黑万亩荷花盛开", badge: "推荐" },
    { dot: "early", label: "🚣 全年", date: "坝美世外桃源、八宝田园" },
    { dot: "late",  label: "🎭 花脸节（农历二三月）", date: "彝族抹黑水上狂欢" },
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
  {
    id: 'lijiang',
    name: '丽江',
    nameEn: 'Lijiang',
    emoji: '🏔️',
    country: '云南',
    tagline: '雪山之下，柔软时光',
    heroBadge: '丽江 · 云南',
    heroTitle: '玉龙雪山',
    heroHighlight: '慢慢走吧！',
    heroDesc: '古城巷陌、雪山冰川，泸沽湖在远方',
    heroGradient: 'linear-gradient(160deg, #2E5A6B 0%, #4B8FA6 55%, #BFE3EC 100%)',
    quickTips: [
      { icon: '📅', text: '10-5月干季雪山最清晰' },
      { icon: '⛰️', text: '雪山4506米，备氧气瓶' },
      { icon: '🎫', text: '大索道需提前1-3天预约' },
      { icon: '🧥', text: '山顶比古城低15℃+' },
    ],
    spots: lijiangSpots,
    nearbySpots: lijiangNearby,
    itineraryDays: lijiangItinerary,
    tips: lijiangTips,
    foods: lijiangFoods,
    packList: lijiangPackList,
    seasonInfo: lijiangSeason,
  },
  {
    id: 'lanzhou',
    name: '兰州',
    nameEn: 'Lanzhou',
    emoji: '🍜',
    country: '甘肃',
    tagline: '一碗面，一条河',
    heroBadge: '兰州 · 甘肃',
    heroTitle: '黄河穿城',
    heroHighlight: '吃碗面吧！',
    heroDesc: '中山桥头看大河，夜市喝一碗醪糟',
    heroGradient: 'linear-gradient(160deg, #8C5A2B 0%, #C08A45 55%, #F0DDBA 100%)',
    quickTips: [
      { icon: '🍜', text: '早上头锅牛肉面最香' },
      { icon: '💧', text: '极干燥，保湿润唇必备' },
      { icon: '🚇', text: '地铁1号线串起黄河沿线' },
      { icon: '✈️', text: '中川机场远，城际铁路进城' },
    ],
    spots: lanzhouSpots,
    nearbySpots: lanzhouNearby,
    itineraryDays: lanzhouItinerary,
    tips: lanzhouTips,
    foods: lanzhouFoods,
    packList: lanzhouPackList,
    seasonInfo: lanzhouSeason,
  },
  {
    id: 'xishuangbanna',
    name: '版纳',
    nameEn: 'Xishuangbanna',
    emoji: '🌴',
    country: '云南',
    tagline: '雨林、傣寨与泼水',
    heroBadge: '西双版纳 · 云南',
    heroTitle: '热带雨林',
    heroHighlight: '泼一场水吧！',
    heroDesc: '野象出没、金塔夜市，北回归线上的绿洲',
    heroGradient: 'linear-gradient(160deg, #1B5E3A 0%, #3E9E63 55%, #BFE8C6 100%)',
    quickTips: [
      { icon: '📅', text: '11-4月干季最舒适' },
      { icon: '🦟', text: '雨林蚊虫多，驱蚊必备' },
      { icon: '🛂', text: '边境点需带身份证' },
      { icon: '🍍', text: '热带水果全年不断' },
    ],
    spots: bannaSpots,
    nearbySpots: bannaNearby,
    itineraryDays: bannaItinerary,
    tips: bannaTips,
    foods: bannaFoods,
    packList: bannaPackList,
    seasonInfo: bannaSeason,
  },
  {
    id: 'baoshan',
    name: '保山',
    nameEn: 'Baoshan',
    emoji: '☕',
    country: '云南',
    tagline: '高黎贡下，咖啡飘香',
    heroBadge: '保山 · 云南',
    heroTitle: '高黎贡山',
    heroHighlight: '慢慢品吧！',
    heroDesc: '观鸟徒步、河谷咖啡、茶马古道',
    heroGradient: 'linear-gradient(160deg, #22463C 0%, #4F7E6C 55%, #C6DED4 100%)',
    quickTips: [
      { icon: '📅', text: '11-4月干季观鸟旺季' },
      { icon: '🦜', text: '百花岭观鸟请当地向导' },
      { icon: '🚕', text: '景点分散，建议自驾' },
      { icon: '☕', text: '潞江坝小粒咖啡产区' },
    ],
    spots: baoshanSpots,
    nearbySpots: baoshanNearby,
    itineraryDays: baoshanItinerary,
    tips: baoshanTips,
    foods: baoshanFoods,
    packList: baoshanPackList,
    seasonInfo: baoshanSeason,
  },
  {
    id: 'tengchong',
    name: '腾冲',
    nameEn: 'Tengchong',
    emoji: '🌋',
    country: '云南',
    tagline: '火山热海，侨乡秋色',
    heroBadge: '腾冲 · 云南',
    heroTitle: '火山热海',
    heroHighlight: '泡个汤吧！',
    heroDesc: '古镇侨乡、地热温泉、深秋银杏',
    heroGradient: 'linear-gradient(160deg, #6B3320 0%, #B25A38 55%, #F0CDB6 100%)',
    quickTips: [
      { icon: '🍂', text: '11月中-12初银杏限定' },
      { icon: '🎈', text: '火山热气球需清晨预约' },
      { icon: '♨️', text: '热海泡汤需另购浴谷票' },
      { icon: '🎖️', text: '国殇墓园肃穆瞻仰' },
    ],
    spots: tengchongSpots,
    nearbySpots: tengchongNearby,
    itineraryDays: tengchongItinerary,
    tips: tengchongTips,
    foods: tengchongFoods,
    packList: tengchongPackList,
    seasonInfo: tengchongSeason,
  },
  {
    id: 'shangrila',
    name: '香格里拉',
    nameEn: 'Shangri-La',
    emoji: '🏔️',
    country: '云南',
    tagline: '云之南，雪山之上',
    heroBadge: '迪庆 · 云南',
    heroTitle: '香格里拉',
    heroHighlight: '慢慢升吧！',
    heroDesc: '雪山草甸、藏传古寺、日照金山',
    heroGradient: 'linear-gradient(160deg, #1C3F5A 0%, #3E7A99 55%, #CFE6EE 100%)',
    quickTips: [
      { icon: '⛰️', text: '海拔3300m+，防高反' },
      { icon: '📅', text: '5-6月杜鹃 / 9-10月秋色' },
      { icon: '🏔️', text: '梅里日照金山看冬春晴天' },
      { icon: '🙏', text: '藏地圣寺，尊重礼俗' },
    ],
    spots: shangriSpots,
    nearbySpots: shangriNearby,
    itineraryDays: shangriItinerary,
    tips: shangriTips,
    foods: shangriFoods,
    packList: shangriPackList,
    seasonInfo: shangriSeason,
  },
  {
    id: 'kunming',
    name: '昆明',
    nameEn: 'Kunming',
    emoji: '🌸',
    country: '云南',
    tagline: '四季如春的春城',
    heroBadge: '昆明 · 云南',
    heroTitle: '春城昆明',
    heroHighlight: '慢慢逛吧！',
    heroDesc: '石林滇池、红嘴鸥与满城鲜花',
    heroGradient: 'linear-gradient(160deg, #1E5E70 0%, #3E93A6 55%, #CDE9E4 100%)',
    quickTips: [
      { icon: '📅', text: '四季如春，全年可玩' },
      { icon: '🕊️', text: '冬季滇池翠湖看红嘴鸥' },
      { icon: '🍄', text: '夏秋野生菌须吃熟吃对' },
      { icon: '🚄', text: '云南门户，中转枢纽' },
    ],
    spots: kunmingSpots,
    nearbySpots: kunmingNearby,
    itineraryDays: kunmingItinerary,
    tips: kunmingTips,
    foods: kunmingFoods,
    packList: kunmingPackList,
    seasonInfo: kunmingSeason,
  },
  {
    id: 'yuanyang',
    name: '元阳',
    nameEn: 'Yuanyang',
    emoji: '🌅',
    country: '云南',
    tagline: '哈尼梯田，一山镜天',
    heroBadge: '红河 · 云南',
    heroTitle: '元阳梯田',
    heroHighlight: '慢慢等光吧！',
    heroDesc: '千年哈尼梯田，日出云海与蘑菇房',
    heroGradient: 'linear-gradient(160deg, #6B4326 0%, #BC8149 55%, #EEDCBE 100%)',
    quickTips: [
      { icon: '📅', text: '11-次年4月灌水期最美' },
      { icon: '🌅', text: '多依树日出/老虎嘴日落' },
      { icon: '🧥', text: '看日出清晨很冷，带厚衣' },
      { icon: '🙏', text: '哈尼村寨，尊重生活' },
    ],
    spots: yuanyangSpots,
    nearbySpots: yuanyangNearby,
    itineraryDays: yuanyangItinerary,
    tips: yuanyangTips,
    foods: yuanyangFoods,
    packList: yuanyangPackList,
    seasonInfo: yuanyangSeason,
  },
  {
    id: 'jianshui',
    name: '建水',
    nameEn: 'Jianshui',
    emoji: '🏯',
    country: '云南',
    tagline: '千年临安，文献名邦',
    heroBadge: '红河 · 云南',
    heroTitle: '临安建水',
    heroHighlight: '慢慢品吧！',
    heroDesc: '古城书院、朱家花园与米轨小火车',
    heroGradient: 'linear-gradient(160deg, #43323C 0%, #86685E 55%, #E6D8CC 100%)',
    quickTips: [
      { icon: '🚄', text: '昆明高铁直达约1.5小时' },
      { icon: '🍢', text: '古井烧豆腐数粒计数' },
      { icon: '🚂', text: '米轨小火车提前订票' },
      { icon: '🏺', text: '建水紫陶四大名陶之一' },
    ],
    spots: jianshuiSpots,
    nearbySpots: jianshuiNearby,
    itineraryDays: jianshuiItinerary,
    tips: jianshuiTips,
    foods: jianshuiFoods,
    packList: jianshuiPackList,
    seasonInfo: jianshuiSeason,
  },
  {
    id: 'puer',
    name: '普洱',
    nameEn: "Pu'er",
    emoji: '🍵',
    country: '云南',
    tagline: '茶马古道，天然氧吧',
    heroBadge: '普洱 · 云南',
    heroTitle: '普洱茶乡',
    heroHighlight: '慢慢泡吧！',
    heroDesc: '千年古茶林、茶马古道与雨林萌宠',
    heroGradient: 'linear-gradient(160deg, #1F4A3E 0%, #3E8A6E 55%, #C8E4D6 100%)',
    quickTips: [
      { icon: '🍃', text: '景迈山古茶林 2023 世遗' },
      { icon: '🍵', text: '生普熟普，试喝再买' },
      { icon: '🛂', text: '边境县需带身份证' },
      { icon: '🚗', text: '茶山分散，建议自驾' },
    ],
    spots: puerSpots,
    nearbySpots: puerNearby,
    itineraryDays: puerItinerary,
    tips: puerTips,
    foods: puerFoods,
    packList: puerPackList,
    seasonInfo: puerSeason,
  },
  {
    id: 'dehong',
    name: '德宏',
    nameEn: 'Dehong',
    emoji: '🦚',
    country: '云南',
    tagline: '孔雀之乡，一寨两国',
    heroBadge: '德宏 · 云南',
    heroTitle: '边地傣乡',
    heroHighlight: '泼场水吧！',
    heroDesc: '傣族金塔、中缅边境与热带雨林',
    heroGradient: 'linear-gradient(160deg, #5A3E1A 0%, #B98A3E 55%, #ECDCB4 100%)',
    quickTips: [
      { icon: '📅', text: '11-4月干季最舒适' },
      { icon: '🛂', text: '边境点需带身份证' },
      { icon: '💎', text: '瑞丽翡翠水深，谨慎购玉' },
      { icon: '🦜', text: '盈江观鸟看犀鸟' },
    ],
    spots: dehongSpots,
    nearbySpots: dehongNearby,
    itineraryDays: dehongItinerary,
    tips: dehongTips,
    foods: dehongFoods,
    packList: dehongPackList,
    seasonInfo: dehongSeason,
  },
  {
    id: 'nujiang',
    name: '怒江',
    nameEn: 'Nujiang',
    emoji: '⛰️',
    country: '云南',
    tagline: '三江并流，人神共居',
    heroBadge: '怒江 · 云南',
    heroTitle: '怒江大峡谷',
    heroHighlight: '慢慢走吧！',
    heroDesc: '丙中洛、独龙江与挂壁茶马古道',
    heroGradient: 'linear-gradient(160deg, #1A413E 0%, #3E7E74 55%, #CBE2DA 100%)',
    quickTips: [
      { icon: '📅', text: '干季11-4月路况最安全' },
      { icon: '🚗', text: '峡谷盘山路，建议包车' },
      { icon: '⚠️', text: '雨季易塌方，独龙江封路' },
      { icon: '🙏', text: '纹面老人，拍照先征得同意' },
    ],
    spots: nujiangSpots,
    nearbySpots: nujiangNearby,
    itineraryDays: nujiangItinerary,
    tips: nujiangTips,
    foods: nujiangFoods,
    packList: nujiangPackList,
    seasonInfo: nujiangSeason,
  },
  {
    id: 'chuxiong',
    name: '楚雄',
    nameEn: 'Chuxiong',
    emoji: '🔥',
    country: '云南',
    tagline: '彝州火乡，土林恐龙',
    heroBadge: '楚雄 · 云南',
    heroTitle: '彝州楚雄',
    heroHighlight: '打跳起来吧！',
    heroDesc: '元谋土林、侏罗纪恐龙与彝族火把',
    heroGradient: 'linear-gradient(160deg, #6B2E1E 0%, #B85A3A 55%, #EDD2BC 100%)',
    quickTips: [
      { icon: '🔥', text: '火把节7-8月最盛' },
      { icon: '🏜️', text: '土林晨昏光影最美' },
      { icon: '🦕', text: '禄丰恐龙谷亲子科普' },
      { icon: '🍄', text: '南华野生菌须吃熟吃对' },
    ],
    spots: chuxiongSpots,
    nearbySpots: chuxiongNearby,
    itineraryDays: chuxiongItinerary,
    tips: chuxiongTips,
    foods: chuxiongFoods,
    packList: chuxiongPackList,
    seasonInfo: chuxiongSeason,
  },
  {
    id: 'yuxi',
    name: '玉溪',
    nameEn: 'Yuxi',
    emoji: '🏊',
    country: '云南',
    tagline: '抚仙湖蓝，四季如春',
    heroBadge: '玉溪 · 云南',
    heroTitle: '抚仙玉溪',
    heroHighlight: '慢慢泡吧！',
    heroDesc: '最深高原湖、寒武纪化石与哀牢云海',
    heroGradient: 'linear-gradient(160deg, #0E4E60 0%, #2E93A6 55%, #C6E8EA 100%)',
    quickTips: [
      { icon: '🏊', text: '夏季抚仙湖戏水最佳' },
      { icon: '🦐', text: '澄江化石地世遗，需预约' },
      { icon: '🌲', text: '哀牢山原始林，勿擅入' },
      { icon: '🚄', text: '紧邻昆明，周末可达' },
    ],
    spots: yuxiSpots,
    nearbySpots: yuxiNearby,
    itineraryDays: yuxiItinerary,
    tips: yuxiTips,
    foods: yuxiFoods,
    packList: yuxiPackList,
    seasonInfo: yuxiSeason,
  },
  {
    id: 'lincang',
    name: '临沧',
    nameEn: 'Lincang',
    emoji: '🍵',
    country: '云南',
    tagline: '滇红茶乡，阿佤山寨',
    heroBadge: '临沧 · 云南',
    heroTitle: '茶乡临沧',
    heroHighlight: '慢慢品吧！',
    heroDesc: '滇红发源、佤族村寨与三千年崖画',
    heroGradient: 'linear-gradient(160deg, #2A4A2A 0%, #5A7E44 55%, #D2E0BC 100%)',
    quickTips: [
      { icon: '🍵', text: '滇红发源，冰岛名山茶' },
      { icon: '🛖', text: '翁丁老寨2021火灾后重建' },
      { icon: '🛂', text: '沧源耿马边境需身份证' },
      { icon: '🚗', text: '景散路远，建议飞机进+包车' },
    ],
    spots: lincangSpots,
    nearbySpots: lincangNearby,
    itineraryDays: lincangItinerary,
    tips: lincangTips,
    foods: lincangFoods,
    packList: lincangPackList,
    seasonInfo: lincangSeason,
  },
  {
    id: 'wenshan',
    name: '文山',
    nameEn: 'Wenshan',
    emoji: '🪷',
    country: '云南',
    tagline: '三七之乡，桃源水寨',
    heroBadge: '文山 · 云南',
    heroTitle: '壮苗文山',
    heroHighlight: '慢慢划吧！',
    heroDesc: '普者黑荷花、坝美桃源与三七药乡',
    heroGradient: 'linear-gradient(160deg, #1C544E 0%, #3E9A84 55%, #CCE8DA 100%)',
    quickTips: [
      { icon: '🪷', text: '普者黑荷花夏季最盛' },
      { icon: '🎒', text: '游船打水仗，带防水袋' },
      { icon: '🌿', text: '三七道地，正规渠道选购' },
      { icon: '🛂', text: '麻栗坡马关边境带身份证' },
    ],
    spots: wenshanSpots,
    nearbySpots: wenshanNearby,
    itineraryDays: wenshanItinerary,
    tips: wenshanTips,
    foods: wenshanFoods,
    packList: wenshanPackList,
    seasonInfo: wenshanSeason,
  },
]

export default CITIES
