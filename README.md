# 🌸 Sakura Tour · 云贵川小城漫游

**云贵川小城旅行规划助手** — 最佳季节、景点推荐、行程规划、打卡纪念，一站式搞定

🔗 **Live Demo**: [https://sakura.digitalvio.shop/](https://sakura.digitalvio.shop/)

---

## 功能特色

- **小城旅行地图** — 高德地图展示想去 / 已去景点，支持深浅色地图样式
- **我的清单 & 行程规划** — 收藏景点、自定义每日行程，已去过景点自动归档
- **实地打卡 & XP 系统** — 标记去过景点获得 XP，连续打卡累积连击天数
- **照片纪念** — 为去过的景点上传旅行照片，生成专属回忆
- **推荐给朋友** — 用标签（风景绝佳 / 人少清净等）推荐喜爱的景点
- **动态今日任务** — 根据用户进度实时生成任务目标
- **旅行攻略** — 每座小城的最佳季节、交通、美食、行李清单一站式汇总
- **深色模式** — 支持深色 / 浅色主题切换
- **移动端优化** — 底部导航栏 + iPhone 安全区适配

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | React 19 + Vite |
| 样式 | CSS 自定义属性（CSS Variables）+ 响应式布局 |
| 地图 | 高德地图 JS API v2.0 |
| 后端 | Node.js + Express 5 |
| 数据库 | SQLite（better-sqlite3） |
| 认证 | JWT（存储于 localStorage） |
| 部署 | VPS + PM2 + rsync |

---

## 本地开发

### 前置要求

- Node.js 18+
- npm

### 安装依赖

```bash
npm install
```

### 配置环境变量

复制 `.env.example` 为 `.env`，填入高德地图 Key：

```bash
VITE_AMAP_KEY=你的高德地图 Web JS Key
VITE_AMAP_SECURITY_CODE=你的高德安全密钥
```

### 启动开发服务器

```bash
# 前端（端口 5173）
npm run dev

# 后端（端口 3001）
npm run server
```

### 构建生产版本

```bash
npm run build
```

### 部署到 VPS

```bash
bash scripts/deploy.sh
```

---

## 项目结构

```
sakura-tour/
├── src/
│   ├── components/       # 页面组件（HomePage, SpotsPage, PlanPage, MapPage 等）
│   ├── context/          # React Context（UserContext, CityContext, ThemeContext）
│   ├── data/             # 城市数据（cities.js — 景点/行程/攻略/季节）
│   ├── lib/              # 高德地图加载器
│   └── App.jsx
├── server/
│   ├── db.js             # SQLite 初始化 & 迁移
│   └── routes/           # API 路由（auth.js, user.js, reviews.js）
├── scripts/
│   └── deploy.sh         # 一键部署脚本
└── public/
```

---

## 城市数据

每座小城一个数据对象（`src/data/cities.js`），包含景点、周边顺游、建议行程、旅行贴士、必吃美食、行李清单与最佳季节，结构固定、方便批量扩展。

| 城市 | 景点数 | 最佳季节 |
|------|--------|----------|
| 🏯 大理 | 7 | 3-5月 / 9-11月 |

> 更多云贵川小城（丽江、香格里拉、西江千户苗寨、都江堰…）按大理模板持续添加中。
