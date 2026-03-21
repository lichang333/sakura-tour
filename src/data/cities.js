/* ──────────────────────────────────────────────
   cities.js  — 多城市数据
   Chengdu / Seattle / Vancouver
────────────────────────────────────────────── */

/* ════════════════ 成都 ════════════════ */
const chengduSpots = [
  {
    id: 1,
    name: "青白江凤凰湖景区",
    nameEn: "Phoenix Lake Scenic Area",
    emoji: "🦢",
    district: "青白江区",
    peakTime: "3月21日 - 4月6日",
    peakDays: "3月21日 - 4月6日",
    difficulty: "easy",
    rating: 4.8,
    reviews: 1204,
    tags: ["今日花开！", "湖光山色", "10个品种"],
    isHot: true,
    ticket: "30元（1.3米以下免票）",
    description: "今日正值花期！1.6万余株樱花盛放，涵盖大岛樱、红粉佳人、八重垂枝樱等10个品种，湖光山色相映成趣。花期跨度约30-40天，是成都目前最值得去的赏樱地！",
    tips: "建议工作日清晨前往，避开周末人流。出发前关注景区官方公众号确认花况。",
    transport: "地铁3号线→成都医学院站，换乘603路公交",
    color: "#FF6B9D",
    xp: 150,
  },
  {
    id: 2,
    name: "成都植物园",
    nameEn: "Chengdu Botanical Garden",
    emoji: "🌿",
    district: "金牛区",
    peakTime: "2月 - 4月",
    peakDays: "2月 - 4月（早晚樱无缝衔接）",
    difficulty: "easy",
    rating: 4.7,
    reviews: 2876,
    tags: ["品种齐全", "市区交通便利", "专业景观"],
    ticket: "免费",
    description: "花期横跨2月至4月，早樱晚樱无缝衔接，品种齐全，景观专业。位于市区，交通极便利，是成都赏樱最方便的选择之一。",
    tips: "品种丰富，可以对比欣赏不同樱花。工作日人少，适合拍照和悠闲漫步。",
    transport: "地铁3号线→成都植物园站，步行约400米",
    color: "#58CC02",
    xp: 100,
  },
  {
    id: 3,
    name: "漫花庄园",
    nameEn: "Manhua Manor",
    emoji: "🌙",
    district: "温江区",
    peakTime: "3月中旬 - 4月初",
    peakDays: "3月15日 - 4月5日",
    difficulty: "easy",
    rating: 4.6,
    reviews: 1543,
    tags: ["夜赏樱", "日夜皆可", "特色活动"],
    ticket: "日间票58元 / 夜赏樱29.9元",
    description: "成都独特的夜赏樱胜地！白天夜晚皆可游览。夜间灯光下的樱花别有浪漫风情，是约会、拍照的绝佳选择。",
    tips: "夜赏樱性价比超高，29.9元起。建议提前在线购票，节假日可能限流。",
    transport: "地铁3号线→动物园站，换乘655路或198路",
    color: "#CE82FF",
    xp: 120,
  },
  {
    id: 4,
    name: "新都绛樱院",
    nameEn: "Xindu Jiangying Garden",
    emoji: "🎋",
    district: "新都区",
    peakTime: "3月中旬 - 4月初",
    peakDays: "3月15日 - 4月5日",
    difficulty: "easy",
    rating: 4.7,
    reviews: 876,
    tags: ["50+品种", "品种控首选", "上万株"],
    ticket: "详询景区",
    description: "50多个品种、上万株樱花，品种之丰富在成都少见！适合爱好植物的朋友，是真正的「樱花博物馆」。",
    tips: "品种控必去！建议带上相机，记录每一种不同品种的樱花。",
    transport: "地铁5号线→华桂路站，换乘X63路公交",
    color: "#FF9600",
    xp: 130,
  },
  {
    id: 5,
    name: "花熳天下景区",
    nameEn: "Huaman Tianxia",
    emoji: "🌊",
    district: "郫都区",
    peakTime: "3月中旬 - 4月中旬",
    peakDays: "3月15日 - 4月15日",
    difficulty: "easy",
    rating: 4.5,
    reviews: 1102,
    tags: ["10万株", "规模壮观", "菊樱关山樱"],
    ticket: "详询景区",
    description: "10万株樱花，规模壮观！菊樱、关山樱等10多种品种，花期约30天。适合喜欢震撼视觉效果的朋友。",
    tips: "规模大，建议穿舒适的鞋，做好走路的准备。花期较长，弹性较大。",
    transport: "可驾车前往，或关注景区公众号了解最新交通方式",
    color: "#1CB0F6",
    xp: 140,
  },
  {
    id: 6,
    name: "人民公园",
    nameEn: "People's Park",
    emoji: "🌸",
    district: "青羊区",
    peakTime: "3月中旬 - 4月初",
    peakDays: "3月15日 - 4月5日",
    difficulty: "easy",
    rating: 4.8,
    reviews: 2341,
    tags: ["人气爆棚", "网红打卡", "茶馆"],
    ticket: "免费",
    description: "成都最热门的赏樱地点，樱花大道长达500米，花期时游人如织。旁边就是著名的鹤鸣茶社，一边喝茶一边赏花，巴适得很！",
    tips: "建议早上8点前到，避开人流高峰。周末特别拥挤。",
    transport: "地铁2/4号线 天府广场站",
    color: "#FF6B9D",
    xp: 100,
  },
  {
    id: 7,
    name: "成都大学·赏樱季",
    nameEn: "Chengdu University",
    emoji: "🎓",
    district: "龙泉驿区",
    peakTime: "3月上旬 - 中旬",
    peakDays: "3月5日 - 3月25日",
    difficulty: "medium",
    rating: 4.9,
    reviews: 3102,
    tags: ["校园赏樱", "樱花节", "最佳拍摄"],
    ticket: "需预约",
    description: "成都最著名的樱花圣地！每年3月都会举办樱花节，校园内千棵樱花树同时盛开，粉色花海壮观无比。是成都赏樱的TOP 1！",
    tips: "需要提前预约进校，关注成都大学官方公众号。人很多，建议工作日前往。",
    transport: "地铁4号线 成都大学站",
    color: "#FF9600",
    xp: 150,
  },
]

const chengduNearby = [
  { name: "崇州街子樱花公园", desc: "3000多株原生樱花，古镇氛围浓郁", emoji: "🏘️", transport: "驾车约1小时" },
  { name: "彭州樱花山", desc: "200多亩樱花，山间赏花别有风味", emoji: "⛰️", transport: "驾车约1小时" },
  { name: "青龙湖湿地公园", desc: "冬樱，花期偏早，免费入园", emoji: "🦢", transport: "地铁4号线 青龙场站" },
]

const chengduItinerary = [
  {
    day: 1, title: "抵达·初探成都", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达成都天府国际机场" },
      { time: "傍晚", icon: "🏨", text: "入住酒店，建议选在春熙路/太古里附近" },
      { time: "晚上", icon: "🍜", text: "宽窄巷子吃地道川菜：担担面、夫妻肺片、钟水饺" },
    ]
  },
  {
    day: 2, title: "赏樱重头戏", date: "Day 2",
    activities: [
      { time: "早上8点", icon: "🌸", text: "成都大学樱花节（提前预约）" },
      { time: "下午", icon: "🍵", text: "人民公园樱花大道 + 鹤鸣茶社喝茶" },
      { time: "晚上", icon: "🏯", text: "锦里夜樱 + 逛夜市" },
    ]
  },
  {
    day: 3, title: "文化与自然", date: "Day 3",
    activities: [
      { time: "上午", icon: "🐼", text: "成都大熊猫繁育研究基地（早8点开园，早去人少）" },
      { time: "下午", icon: "⛰️", text: "塔子山公园小众赏樱" },
      { time: "晚上", icon: "🌶️", text: "海底捞火锅 或 大龙燚火锅" },
    ]
  },
  {
    day: 4, title: "深度体验", date: "Day 4",
    activities: [
      { time: "上午", icon: "🚗", text: "龙泉山·樱桃沟登山赏花" },
      { time: "下午", icon: "🎭", text: "四川博物院了解蜀文化" },
      { time: "晚上", icon: "🎪", text: "观看川剧变脸表演（锦江剧场）" },
    ]
  },
]

const chengduTips = [
  { icon: "📅", title: "最佳时间", content: "3月上旬至4月初，其中3月中下旬是花期最盛的时候。今年（2026年）预计3月15-25日为最佳赏樱窗口期。" },
  { icon: "🌤️", title: "天气提示", content: "成都3月天气多云，气温10-18°C，偶有小雨。带一件薄外套和折叠雨伞，巴适！" },
  { icon: "📸", title: "拍照秘籍", content: "清晨和傍晚光线最柔和，逆光拍樱花有梦幻感。推荐用手机微距模式拍花瓣特写。" },
  { icon: "🍽️", title: "美食推荐", content: "除了火锅，别错过：龙抄手、赖汤圆、韩包子、夫妻肺片。肚子要留够空间！" },
  { icon: "🚇", title: "交通攻略", content: "成都地铁覆盖主要景点，一张天府通卡搞定出行。打滴滴也很方便实惠。" },
  { icon: "💰", title: "预算参考", content: "人均每天200-400元（含住宿约120元、餐饮约80元、门票交通约100元）。" },
]

const chengduFoods = [
  { name: "担担面", emoji: "🍜", desc: "成都必吃，麻辣鲜香" },
  { name: "夫妻肺片", emoji: "🥩", desc: "名字吓人，味道绝佳" },
  { name: "龙抄手", emoji: "🥟", desc: "皮薄馅大，汤底鲜美" },
  { name: "赖汤圆", emoji: "🍡", desc: "甜蜜软糯，正宗老字号" },
  { name: "九宫格火锅", emoji: "🫕", desc: "成都精髓，涮出幸福感" },
  { name: "钵钵鸡", emoji: "🍢", desc: "红油签签，越吃越上头" },
]

const chengduPackList = [
  { icon: "☂️", text: "折叠雨伞（成都多云易雨）" },
  { icon: "🧥", text: "薄外套（早晚温差大）" },
  { icon: "👟", text: "舒适运动鞋（多走路）" },
  { icon: "🔋", text: "充电宝（拍照耗电快）" },
  { icon: "📱", text: "下载高德地图+滴滴" },
  { icon: "💳", text: "医保卡或现金备用" },
]

const chengduBloom = {
  year: "2026",
  early: { label: "早樱", date: "3月1日 — 3月15日" },
  peak:  { label: "🔥 盛花期", date: "3月15日 — 4月5日", badge: "最佳！" },
  late:  { label: "晚樱", date: "4月5日 — 4月20日" },
}

/* ════════════════ 西雅图 ════════════════ */
const seattleSpots = [
  {
    id: 's1',
    name: "华盛顿大学樱花广场",
    nameEn: "UW Cherry Quad",
    emoji: "🎓",
    district: "University District",
    peakTime: "3月下旬 - 4月初",
    peakDays: "3月22日 - 4月5日",
    difficulty: "easy",
    rating: 4.9,
    reviews: 5820,
    tags: ["西雅图NO.1", "30棵吉野樱", "网红圣地"],
    isHot: true,
    ticket: "免费",
    description: "西雅图最著名的赏樱地！华盛顿大学樱花广场种有约30棵吉野樱，全部盛开时如粉色云海。哥特式建筑配上满树粉花，堪称绝景，是每年春季最热门的打卡地。",
    tips: "花期仅约两周，需密切关注UW官网公告。上午光线最佳，工作日人少好拍照。免费进入，停车不便建议乘公交。",
    transport: "Link Light Rail → U District Station，步行10分钟",
    color: "#FF6B9D",
    xp: 160,
  },
  {
    id: 's2',
    name: "日本花园",
    nameEn: "Seattle Japanese Garden",
    emoji: "🏯",
    district: "Madison Valley",
    peakTime: "3月末 - 4月中旬",
    peakDays: "3月28日 - 4月15日",
    difficulty: "easy",
    rating: 4.7,
    reviews: 2134,
    tags: ["禅意日式园林", "锦鲤水景", "传统茶道"],
    ticket: "$8（成人）/ $4（儿童）",
    description: "华盛顿公园植物园内的日式精品园林。枯山水、锦鲤池与盛开的樱花完美融合，营造出浓郁的日本春日氛围。不同于人声鼎沸的UW，这里安静优雅，适合静心赏花。",
    tips: "园内禁止喧哗，建议平日前往感受宁静。每年4月有传统茶道体验活动。",
    transport: "公交11路 → McGilvra Blvd E & E Madison St",
    color: "#CE82FF",
    xp: 120,
  },
  {
    id: 's3',
    name: "华盛顿公园植物园",
    nameEn: "Washington Park Arboretum",
    emoji: "🌿",
    district: "Montlake",
    peakTime: "3月初 - 4月中旬",
    peakDays: "3月10日 - 4月20日",
    difficulty: "easy",
    rating: 4.7,
    reviews: 3456,
    tags: ["230公顷", "多品种樱花", "免费入园"],
    ticket: "免费",
    description: "230公顷的大型植物园，拥有包括大岛樱、染井吉野、关山樱等多品种樱花，花期长达6周。湖边樱花倒影美不胜收，适合悠闲漫步和野餐。",
    tips: "面积大，建议带地图或提前规划路线。沿湖步道是拍照最佳位置。",
    transport: "公交43路 → E Madison St & 29th Ave E",
    color: "#58CC02",
    xp: 110,
  },
  {
    id: 's4',
    name: "志愿公园",
    nameEn: "Volunteer Park",
    emoji: "🏛️",
    district: "Capitol Hill",
    peakTime: "3月末 - 4月初",
    peakDays: "3月25日 - 4月10日",
    difficulty: "easy",
    rating: 4.6,
    reviews: 1876,
    tags: ["城市景观", "水塔眺望", "博物馆"],
    ticket: "公园免费",
    description: "Capital Hill上的都市绿洲，园内樱花盛开时与维多利亚式温室相映成趣。登上水塔可360°俯瞰西雅图全景和樱花海。旁边有西雅图亚洲艺术博物馆值得一游。",
    tips: "爬上水塔（小费制）俯瞰全景效果极佳。公园全天开放，清晨人少。",
    transport: "公交10路 → 15th Ave E & E Galer St",
    color: "#1CB0F6",
    xp: 120,
  },
  {
    id: 's5',
    name: "布鲁姆公园",
    nameEn: "Renton Gene Coulon Park",
    emoji: "💎",
    district: "Renton（近郊）",
    peakTime: "3月末 - 4月中旬",
    peakDays: "3月28日 - 4月18日",
    difficulty: "easy",
    rating: 4.5,
    reviews: 987,
    tags: ["湖边赏樱", "小众秘境", "野餐圣地"],
    ticket: "免费",
    description: "远离市区喧嚣的隐秘赏樱地，华盛顿湖畔盛开的樱花倒映水中，如梦如幻。这里人流比UW少得多，非常适合带家人野餐赏花，享受悠闲春日时光。",
    tips: "驾车最方便，距市中心约25分钟。带上野餐垫，湖边草坪非常适合户外午餐。",
    transport: "驾车约25分钟 / 公交101路终点站",
    color: "#FF9600",
    xp: 100,
  },
  {
    id: 's6',
    name: "西雅图滨水公园",
    nameEn: "Waterfront Park",
    emoji: "⚓",
    district: "Downtown",
    peakTime: "3月中旬 - 4月初",
    peakDays: "3月20日 - 4月5日",
    difficulty: "easy",
    rating: 4.4,
    reviews: 1543,
    tags: ["海湾景观", "市区便利", "日落赏花"],
    ticket: "免费",
    description: "市中心滨水区新改造的公园，樱花配普吉特湾海景，背景是对岸奥林匹克山，景色独一无二。傍晚时分日落将海面染成金红色，与粉色樱花形成绝美色彩。",
    tips: "傍晚日落时分最美，建议提前1小时到达抢占好位置。附近有Pike Place Market，可顺道游览。",
    transport: "Link Light Rail → Westlake Station，步行15分钟",
    color: "#D94F7C",
    xp: 110,
  },
]

const seattleNearby = [
  { name: "塔科马玫瑰花园", desc: "Point Defiance Park内，樱花与郁金香同期盛开", emoji: "🌹", transport: "驾车约45分钟" },
  { name: "贝尔维尤植物园", desc: "Bellevue Botanical Garden，日式园林+樱花", emoji: "🌸", transport: "驾车约20分钟" },
  { name: "伊萨夸樱花节", desc: "每年3月举办，小镇气氛浓厚", emoji: "🏘️", transport: "驾车约30分钟" },
]

const seattleItinerary = [
  {
    day: 1, title: "抵达·探索市区", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达西雅图-塔科马国际机场" },
      { time: "傍晚", icon: "🐟", text: "Pike Place Market：看鱼贩抛鱼+品尝新鲜海鲜" },
      { time: "晚上", icon: "🏙️", text: "Space Needle夜景（建议提前网上购票）" },
    ]
  },
  {
    day: 2, title: "赏樱·校园之美", date: "Day 2",
    activities: [
      { time: "早上9点", icon: "🌸", text: "UW樱花广场赏花拍照（花期短，优先！）" },
      { time: "下午", icon: "🏛️", text: "华盛顿公园植物园漫步" },
      { time: "晚上", icon: "🍣", text: "Capitol Hill日式居酒屋晚餐" },
    ]
  },
  {
    day: 3, title: "园林·山海之间", date: "Day 3",
    activities: [
      { time: "上午", icon: "🏯", text: "西雅图日本花园体验禅意赏樱" },
      { time: "下午", icon: "⛰️", text: "Kerry Park俯瞰城市全景+雷尼尔山" },
      { time: "晚上", icon: "🦞", text: "Ivar's Acres of Clams品尝西北海鲜" },
    ]
  },
  {
    day: 4, title: "咖啡·深度体验", date: "Day 4",
    activities: [
      { time: "上午", icon: "☕", text: "探访星巴克起源1号店（Pike Place原址）" },
      { time: "下午", icon: "💎", text: "Renton湖边公园野餐赏樱" },
      { time: "晚上", icon: "🛒", text: "Amazon Go体验无人超市+购物" },
    ]
  },
]

const seattleTips = [
  { icon: "📅", title: "最佳时间", content: "3月下旬至4月初，UW樱花广场通常在3月22日-4月5日盛开，但每年因气温不同会有变化，建议关注UW官方推特实时更新。" },
  { icon: "🌧️", title: "天气提示", content: "西雅图3-4月多雨，气温7-14°C。一定要带防水外套和伞！但雨后空气清新，樱花水珠效果绝美。" },
  { icon: "📸", title: "拍照秘籍", content: "UW广场建议早上9-11点拍摄，光线从东方斜射进广场效果最佳。阴天扩散光对花朵拍摄也很友好。" },
  { icon: "🍽️", title: "美食推荐", content: "必吃：Dungeness crab（邓杰内斯蟹）、Clam Chowder（蛤蜊浓汤）、Teriyaki（西雅图特色照烧）、Pike Place鲜鱼市场。" },
  { icon: "🚌", title: "交通攻略", content: "Link Light Rail连接机场与市区，Orca Card可乘坐地铁和公交。市区停车费高，建议多用公共交通。" },
  { icon: "💰", title: "预算参考", content: "西雅图消费较高，人均每天约$100-200（住宿$80-150，餐饮$40-60，门票交通$20-30）。" },
]

const seattleFoods = [
  { name: "蟹肉浓汤", emoji: "🦀", desc: "Dungeness Crab Chowder，西雅图招牌" },
  { name: "新鲜生蚝", emoji: "🦪", desc: "Pike Place现开现吃，超级新鲜" },
  { name: "西雅图照烧", emoji: "🍗", desc: "本地特色，比日式更甜更嫩" },
  { name: "三文鱼料理", emoji: "🐟", desc: "太平洋三文鱼，肉质鲜嫩肥美" },
  { name: "精酿啤酒", emoji: "🍺", desc: "西北地区啤酒文化浓厚，必须尝" },
  { name: "星巴克咖啡", emoji: "☕", desc: "去1号店点份特调，值得排队" },
]

const seattlePackList = [
  { icon: "🧥", text: "防水冲锋衣（随时可能下雨）" },
  { icon: "☂️", text: "折叠伞（必备，随身携带）" },
  { icon: "👟", text: "防水运动鞋（地面常湿）" },
  { icon: "🔋", text: "充电宝（拍照耗电快）" },
  { icon: "📱", text: "下载Google Maps + Lyft/Uber" },
  { icon: "💳", text: "ORCA Card（公共交通卡）" },
]

const seattleBloom = {
  year: "2026",
  early: { label: "早樱", date: "Mar 10 — Mar 22" },
  peak:  { label: "🔥 Peak Bloom", date: "Mar 22 — Apr 5", badge: "Best!" },
  late:  { label: "Late Bloom", date: "Apr 5 — Apr 20" },
}

/* ════════════════ 温哥华 ════════════════ */
const vancouverSpots = [
  {
    id: 'v1',
    name: "伊丽莎白女王公园",
    nameEn: "Queen Elizabeth Park",
    emoji: "👑",
    district: "South Cambie",
    peakTime: "3月末 - 4月中旬",
    peakDays: "3月28日 - 4月18日",
    difficulty: "easy",
    rating: 4.8,
    reviews: 4230,
    tags: ["全市制高点", "360°全景", "温哥华No.1"],
    isHot: true,
    ticket: "免费",
    description: "温哥华最著名的赏樱地！公园位于全市最高点，盛开的樱花配上远处白雪覆顶的北岸山脉和城市天际线，景色令人叹为观止。这里是温哥华赏樱的绝对TOP 1。",
    tips: "日出和黄昏时分光线最美。从Cambie Street停车场步行10分钟到山顶。春季周末人很多，建议工作日前往。",
    transport: "公交15路或17路 → 33rd Ave & Cambie St",
    color: "#FF6B9D",
    xp: 160,
  },
  {
    id: 'v2',
    name: "大卫·兰姆公园",
    nameEn: "David Lam Park",
    emoji: "🌊",
    district: "Yaletown",
    peakTime: "3月中旬 - 4月初",
    peakDays: "3月20日 - 4月5日",
    difficulty: "easy",
    rating: 4.7,
    reviews: 2890,
    tags: ["False Creek海湾", "城市倒影", "下城区"],
    ticket: "免费",
    description: "Yaletown海湾边的都市公园，樱花盛开时与False Creek的海水倒影交相辉映。背景是高楼林立的市中心，形成独特的都市春日风情。距离Granville Island步行可达。",
    tips: "落日时分是最佳拍摄时间，海湾上的粉色倒影美得不真实。周末常有瑜伽和户外活动。",
    transport: "Sky Train Canada Line → Yaletown-Roundhouse Station，步行5分钟",
    color: "#1CB0F6",
    xp: 130,
  },
  {
    id: 'v3',
    name: "VanDusen植物园",
    nameEn: "VanDusen Botanical Garden",
    emoji: "🌿",
    district: "Shaughnessy",
    peakTime: "3月中旬 - 4月中旬",
    peakDays: "3月15日 - 4月20日",
    difficulty: "easy",
    rating: 4.7,
    reviews: 1876,
    tags: ["55公顷", "多品种樱花", "专业园林"],
    ticket: "$15（成人）/ $7.75（儿童）",
    description: "55公顷的世界级植物园，收集有来自世界各地的樱花品种。园内春季花卉盛宴从早樱延续到晚樱，花期长达两个月。专业的园艺景观设计使每个角落都是拍照绝佳取景地。",
    tips: "购买年票$65性价比超高，可全年多次入园。早春下午开园人数最少。",
    transport: "公交17路 → W 37th Ave & Oak St，步行5分钟",
    color: "#58CC02",
    xp: 120,
  },
  {
    id: 'v4',
    name: "史丹利公园樱花道",
    nameEn: "Stanley Park Cherry Trail",
    emoji: "🌲",
    district: "Stanley Park",
    peakTime: "3月末 - 4月中旬",
    peakDays: "3月25日 - 4月15日",
    difficulty: "easy",
    rating: 4.8,
    reviews: 3450,
    tags: ["405公顷原始森林", "海边骑行", "樱花隧道"],
    ticket: "免费",
    description: "加拿大最美城市公园之一，405公顷的原始森林与海岸线并存。公园内多条步道沿途栽植樱花树，骑行或步行穿越樱花隧道，远处是英吉利湾和北温哥华山景，景色壮阔。",
    tips: "租自行车沿Seawall骑行最惬意，一圈约10公里。樱花主要集中在公园东侧入口区域。",
    transport: "公交19路 → Robson St & Denman St，步行进入公园",
    color: "#FF9600",
    xp: 140,
  },
  {
    id: 'v5',
    name: "科隆比亚街樱花道",
    nameEn: "Columbia Street Cherry Blossoms",
    emoji: "🏙️",
    district: "New Westminster",
    peakTime: "3月中旬 - 4月初",
    peakDays: "3月18日 - 4月5日",
    difficulty: "easy",
    rating: 4.6,
    reviews: 1234,
    tags: ["街道赏樱", "小众发现", "历史街区"],
    ticket: "免费",
    description: "新威斯敏斯特的历史街道两侧遍植樱花树，花开时节如粉色拱廊，非常适合街头摄影。这里比温哥华市区安静许多，当地人的日常生活与盛开的樱花融为一体，别有情趣。",
    tips: "适合徒步街拍，旁边有众多独立咖啡馆，可以边喝咖啡边赏花。",
    transport: "Sky Train Expo Line → New Westminster Station，步行5分钟",
    color: "#CE82FF",
    xp: 100,
  },
  {
    id: 'v6',
    name: "UBC樱花林",
    nameEn: "UBC Cherry Blossom Walk",
    emoji: "🎓",
    district: "University Endowment Lands",
    peakTime: "3月末 - 4月初",
    peakDays: "3月25日 - 4月8日",
    difficulty: "easy",
    rating: 4.7,
    reviews: 2108,
    tags: ["校园赏樱", "玫瑰园", "博物馆"],
    ticket: "免费",
    description: "不列颠哥伦比亚大学校园内遍布樱花树，与宏伟的大学建筑相映成趣。校园内还有UBC人类学博物馆、Rose Garden等值得游览的景点，可以将赏樱与文化体验完美结合。",
    tips: "UBC Rose Garden俯瞰英吉利湾的景色令人难忘，不要错过。公共停车场车位有限，建议搭公交。",
    transport: "公交99 B-Line → UBC终点站",
    color: "#D94F7C",
    xp: 130,
  },
]

const vancouverNearby = [
  { name: "布查特花园（维多利亚）", desc: "温哥华岛上的世界级花园，春季百花齐放", emoji: "🌺", transport: "渡轮+驾车约2小时" },
  { name: "温哥华岛橡树湾", desc: "Oak Bay Village周边绵延的樱花街道", emoji: "🌸", transport: "渡轮约1.5小时" },
  { name: "里士满中央公园", desc: "华人聚集区，亚洲文化+本地樱花独特体验", emoji: "🏮", transport: "Sky Train约30分钟" },
]

const vancouverItinerary = [
  {
    day: 1, title: "抵达·水城初印象", date: "Day 1",
    activities: [
      { time: "下午", icon: "✈️", text: "抵达温哥华国际机场（YVR）" },
      { time: "傍晚", icon: "🦞", text: "Granville Island公共市场：品尝本地海鲜和烘焙" },
      { time: "晚上", icon: "🌉", text: "Burrard Bridge散步，欣赏False Creek夜景" },
    ]
  },
  {
    day: 2, title: "赏樱·公园探索", date: "Day 2",
    activities: [
      { time: "早上9点", icon: "👑", text: "伊丽莎白女王公园制高点赏樱+远眺雪山" },
      { time: "下午", icon: "🌲", text: "史丹利公园骑行Seawall，穿越樱花道" },
      { time: "晚上", icon: "🍣", text: "Robson Street日本料理晚餐" },
    ]
  },
  {
    day: 3, title: "北温·山海奇遇", date: "Day 3",
    activities: [
      { time: "上午", icon: "🌉", text: "卡皮拉诺吊桥（Capilano Suspension Bridge）" },
      { time: "下午", icon: "🌿", text: "VanDusen植物园漫步各类樱花品种" },
      { time: "晚上", icon: "🍁", text: "Gastown探访，品尝加拿大鹅肉汉堡" },
    ]
  },
  {
    day: 4, title: "海岸·深度体验", date: "Day 4",
    activities: [
      { time: "上午", icon: "🎓", text: "UBC校园赏樱 + 人类学博物馆" },
      { time: "下午", icon: "🌊", text: "David Lam Park海边樱花漫步" },
      { time: "晚上", icon: "🛍️", text: "Robson Street购物，带走枫叶糖等伴手礼" },
    ]
  },
]

const vancouverTips = [
  { icon: "📅", title: "最佳时间", content: "3月下旬至4月初是温哥华樱花最盛时期，通常比西雅图晚约一周。全市约4万棵樱花树，花期集中在2-3周内。" },
  { icon: "🌧️", title: "天气提示", content: "温哥华3-4月气温8-13°C，降雨频繁。防水外套是必备品。雨后空气清澈，北岸雪山轮廓更清晰，是绝佳摄影时机。" },
  { icon: "📸", title: "拍照秘籍", content: "伊丽莎白女王公园山顶是拍摄城市全景+樱花的最佳位置。清晨薄雾效果梦幻，黄昏逆光将樱花染成金色。" },
  { icon: "🍽️", title: "美食推荐", content: "必吃：BC三文鱼、Nanaimo Bar（温哥华甜点）、Richmond猪排饭、Japadog（日式热狗）和各种华人美食。" },
  { icon: "🚇", title: "交通攻略", content: "Sky Train覆盖市区和机场，Compass Card方便刷卡。机场到市区约26分钟。公共自行车Mobi可在各公园间骑行。" },
  { icon: "💰", title: "预算参考", content: "温哥华消费较高，人均每天约CAD $150-250（住宿$80-150，餐饮$50-80，门票交通$20-40）。" },
]

const vancouverFoods = [
  { name: "BC三文鱼", emoji: "🐟", desc: "新鲜野生，各种做法都美味" },
  { name: "Nanaimo Bar", emoji: "🍫", desc: "温哥华标志性甜点，必须尝" },
  { name: "里士满猪排饭", emoji: "🍚", desc: "华人聚居地，正宗亚洲味道" },
  { name: "Japadog", emoji: "🌭", desc: "日式热狗，温哥华发明的混搭" },
  { name: "龙虾卷", emoji: "🦞", desc: "Granville Island现做，超级鲜" },
  { name: "枫叶糖果", emoji: "🍁", desc: "加拿大特产，最佳伴手礼" },
]

const vancouverPackList = [
  { icon: "🧥", text: "防水冲锋衣（随时可能下雨）" },
  { icon: "☂️", text: "折叠伞（Vancouver必备）" },
  { icon: "👟", text: "防水徒步鞋（公园多草坪）" },
  { icon: "🔋", text: "充电宝（拍照耗电快）" },
  { icon: "📱", text: "下载Google Maps + TransLink" },
  { icon: "💳", text: "Compass Card（Sky Train/公交）" },
]

const vancouverBloom = {
  year: "2026",
  early: { label: "Early Bloom", date: "Mar 10 — Mar 25" },
  peak:  { label: "🔥 Peak Bloom", date: "Mar 25 — Apr 8", badge: "Best!" },
  late:  { label: "Late Bloom", date: "Apr 8 — Apr 25" },
}

/* ════════════════ CITIES 汇总 ════════════════ */
export const CITIES = [
  {
    id: 'chengdu',
    name: '成都',
    nameEn: 'Chengdu',
    emoji: '🐼',
    country: '中国',
    tagline: '春来花似锦，蜀都樱正红',
    heroBadge: '成都 · 2026春',
    heroTitle: '樱花盛开时',
    heroHighlight: '去成都吧！',
    heroDesc: '3月中旬 — 4月初，粉色花海等你',
    heroGradient: 'linear-gradient(160deg, #D94F7C 0%, #FF6B9D 50%, #FF9EC4 100%)',
    quickTips: [
      { icon: '📅', text: '3月中下旬花期最佳' },
      { icon: '⏰', text: '早上8点前避开人流' },
      { icon: '🎫', text: '成都大学需提前预约' },
      { icon: '🌤️', text: '带薄外套+折叠雨伞' },
    ],
    spots: chengduSpots,
    nearbySpots: chengduNearby,
    itineraryDays: chengduItinerary,
    tips: chengduTips,
    foods: chengduFoods,
    packList: chengduPackList,
    bloomInfo: chengduBloom,
  },
  {
    id: 'seattle',
    name: '西雅图',
    nameEn: 'Seattle',
    emoji: '☕',
    country: '美国',
    tagline: 'Cherry Blossoms & Coffee Culture',
    heroBadge: 'Seattle · Spring 2026',
    heroTitle: 'Cherry Blossom',
    heroHighlight: 'Season is Here!',
    heroDesc: 'Late March — Early April · UW Quad & Beyond',
    heroGradient: 'linear-gradient(160deg, #1a6e9e 0%, #1CB0F6 50%, #80D8FF 100%)',
    quickTips: [
      { icon: '📅', text: 'UW Quad peaks late March' },
      { icon: '🌧️', text: 'Bring rain gear — always' },
      { icon: '⏰', text: 'Go early on weekdays' },
      { icon: '📱', text: 'Follow @UW on social media' },
    ],
    spots: seattleSpots,
    nearbySpots: seattleNearby,
    itineraryDays: seattleItinerary,
    tips: seattleTips,
    foods: seattleFoods,
    packList: seattlePackList,
    bloomInfo: seattleBloom,
  },
  {
    id: 'vancouver',
    name: '温哥华',
    nameEn: 'Vancouver',
    emoji: '🍁',
    country: '加拿大',
    tagline: 'Cherry Blossoms & Mountain Views',
    heroBadge: 'Vancouver · Spring 2026',
    heroTitle: 'Cherry Blossom',
    heroHighlight: 'Vancouver Blooms!',
    heroDesc: 'Late March — Mid April · 40,000 Trees in Bloom',
    heroGradient: 'linear-gradient(160deg, #c0392b 0%, #e74c3c 50%, #ff8a80 100%)',
    quickTips: [
      { icon: '📅', text: 'Peak: late March to early April' },
      { icon: '🌧️', text: 'Rain gear is essential' },
      { icon: '👑', text: 'Queen Elizabeth Park is #1' },
      { icon: '📱', text: 'Download Compass Card app' },
    ],
    spots: vancouverSpots,
    nearbySpots: vancouverNearby,
    itineraryDays: vancouverItinerary,
    tips: vancouverTips,
    foods: vancouverFoods,
    packList: vancouverPackList,
    bloomInfo: vancouverBloom,
  },
]

export default CITIES
