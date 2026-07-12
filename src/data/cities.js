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
]

export default CITIES
