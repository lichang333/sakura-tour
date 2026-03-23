# 🌸 Sakura Tour

**赏樱旅行规划助手** — 免费、好玩又实用的赏樱旅行规划 Web App

🔗 **Live Demo**: [https://sakura.digitalvio.shop/](https://sakura.digitalvio.shop/)

---

## 功能特色

- **多城市赏樱地图** — 成都、西雅图、温哥华、武汉、东京，持续更新
- **我的清单 & 行程规划** — 收藏景点、自定义每日行程，已去过景点自动归档
- **实地打卡 & XP 系统** — 标记去过景点获得 XP，连续打卡累积连击天数
- **推荐给朋友** — 用标签（花开正好 / 拍照绝佳 / 人少清净等）推荐喜爱的景点
- **动态今日任务** — 根据用户进度实时生成任务目标
- **旅行攻略** — 每座城市的花期、交通、小贴士一站式汇总
- **深色模式** — 支持深色 / 浅色主题切换
- **移动端优化** — 底部导航栏 + iPhone 安全区适配

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | React 18 + Vite |
| 样式 | CSS 自定义属性（CSS Variables）+ 响应式布局 |
| 后端 | Node.js + Express |
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
cd server && npm install && cd ..
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
│   ├── components/       # 页面组件（HomePage, SpotsPage, PlanPage 等）
│   ├── context/          # React Context（UserContext, CityContext）
│   ├── data/             # 城市 & 景点数据（cities.js, spots.js）
│   └── App.jsx
├── server/
│   ├── db.js             # SQLite 初始化 & 迁移
│   └── routes/           # API 路由（user.js, reviews.js, auth.js）
├── scripts/
│   └── deploy.sh         # 一键部署脚本
└── public/
```

---

## 城市数据

| 城市 | 景点数 | 花期 |
|------|--------|------|
| 🐼 成都 | 7 | 3月中旬 — 4月初 |
| ☕ 西雅图 | 6 | 3月下旬 — 4月中旬 |
| 🍁 温哥华 | 6 | 3月中旬 — 4月中旬 |
| 🌸 武汉 | 6 | 3月中旬 — 4月初 |
| 🗼 东京 | 7 | 3月下旬 — 4月中旬 |
