/* 城市攻略分享卡 —— canvas 绘制竖版 PNG（微信种草卡）
   内容：城市名片 + 必去景点集章格 + 4日行程骨架 + 必吃清单
        + （登录时）个人印记行 + 城市二维码
   风格：山水手账（纸色/铜印/衬线），与 App 同一套视觉语言 */

const SERIF = "'Songti SC','Noto Serif SC',serif"
const SANS = "'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif"

const C = {
  paper: '#E7E0D0',
  card: '#FBF8F1',
  ink: '#1B2430',
  mid: '#586572',
  copper: '#A9702F',
  copperSoft: '#C08A45',
  border: '#D8CFBC',
  sealText: '#FFF6E8',
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

/* 铜印方章（微微斜盖） */
function drawSeal(ctx, x, y, size, text, fontSize) {
  ctx.save()
  ctx.translate(x + size / 2, y + size / 2)
  ctx.rotate(-5 * Math.PI / 180)
  ctx.fillStyle = C.copperSoft
  ctx.strokeStyle = C.copper
  ctx.lineWidth = 2.5
  roundRect(ctx, -size / 2, -size / 2, size, size, size * 0.24)
  ctx.fill(); ctx.stroke()
  ctx.fillStyle = C.sealText
  ctx.font = `700 ${fontSize}px ${SERIF}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, 0, size * 0.04)
  ctx.restore()
}

export async function renderCityCard(city, user) {
  const W = 750, PAD = 46
  const S = 2  // 2x 导出，微信里清晰

  // 预载二维码（失败不阻塞出卡）
  let qrImg = null
  try { qrImg = await loadImage(`/qr/${city.id}.png`) } catch { /* 无码出卡 */ }

  // 个人进度（登录且有本城打卡才显示）
  const visited = new Set(user?.visitedSpots || [])
  const allSpots = [...city.spots, ...(city.nearbySpots || [])]
  const doneCount = allSpots.filter(s => visited.has(s.id)).length

  // ── 动态高度预算 ──
  const spotRows = Math.ceil(city.spots.length / 4)
  const H = 356                                   // 头部 + 城市块
    + 56 + spotRows * 128                         // 集章格
    + 56 + city.itineraryDays.length * 44         // 行程
    + 56 + Math.ceil(city.foods.length / 3) * 40  // 必吃
    + (doneCount > 0 ? 72 : 0)                    // 个人印记行
    + 190                                          // 底部二维码区

  const cv = document.createElement('canvas')
  cv.width = W * S
  cv.height = H * S
  const ctx = cv.getContext('2d')
  ctx.scale(S, S)

  // ── 纸底 + 内卡 ──
  ctx.fillStyle = C.paper
  ctx.fillRect(0, 0, W, H)
  ctx.fillStyle = C.card
  ctx.strokeStyle = C.ink
  ctx.lineWidth = 2
  roundRect(ctx, 18, 18, W - 36, H - 36, 22)
  ctx.fill(); ctx.stroke()

  // ── 顶部品牌 ──
  drawSeal(ctx, PAD, 44, 54, '印', 26)
  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = C.ink
  ctx.font = `700 27px ${SERIF}`
  ctx.fillText('Sakura Tour', PAD + 72, 74)
  ctx.fillStyle = C.mid
  ctx.font = `600 14px ${SANS}`
  ctx.fillText('中国小城漫游手册', PAD + 72, 96)

  // ── 城市块 ──
  let y = 196
  ctx.fillStyle = C.ink
  ctx.font = `900 76px ${SERIF}`
  ctx.fillText(city.name, PAD, y)
  // 徽章药丸
  const badge = city.heroBadge
  ctx.font = `700 15px ${SANS}`
  const bw = ctx.measureText(badge).width + 28
  ctx.strokeStyle = C.copper
  ctx.lineWidth = 1.5
  roundRect(ctx, PAD + 4, y + 18, bw, 32, 16)
  ctx.stroke()
  ctx.fillStyle = C.copper
  ctx.fillText(badge, PAD + 18, y + 40)
  // tagline
  ctx.font = `600 21px ${SERIF}`
  ctx.fillStyle = C.mid
  ctx.textAlign = 'right'
  ctx.fillText(city.tagline, W - PAD, y + 42)
  ctx.textAlign = 'left'

  y += 76
  // 虚线分隔
  ctx.strokeStyle = C.border
  ctx.lineWidth = 1.5
  ctx.setLineDash([6, 5])
  ctx.beginPath(); ctx.moveTo(PAD, y); ctx.lineTo(W - PAD, y); ctx.stroke()
  ctx.setLineDash([])

  const sectionTitle = (label, extra) => {
    y += 44
    ctx.fillStyle = C.ink
    ctx.font = `700 22px ${SERIF}`
    ctx.fillText(label, PAD, y)
    if (extra) {
      ctx.fillStyle = C.copper
      ctx.font = `700 14px ${SANS}`
      ctx.textAlign = 'right'
      ctx.fillText(extra, W - PAD, y)
      ctx.textAlign = 'left'
    }
    y += 14
  }

  // ── 必去景点（集章格）──
  sectionTitle('集章点 · 必去景点', `${city.spots.length} 处`)
  const cellW = (W - PAD * 2) / 4
  city.spots.forEach((s, i) => {
    const col = i % 4, row = Math.floor(i / 4)
    const cx = PAD + col * cellW + cellW / 2
    const cy = y + row * 128 + 40
    // 虚线圆章
    ctx.strokeStyle = C.copper
    ctx.lineWidth = 2
    ctx.setLineDash([5, 4])
    ctx.beginPath(); ctx.arc(cx, cy, 34, 0, Math.PI * 2); ctx.stroke()
    ctx.setLineDash([])
    ctx.font = `32px ${SANS}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(s.emoji, cx, cy + 2)
    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = C.ink
    ctx.font = `700 16px ${SANS}`
    ctx.fillText(s.name, cx, cy + 62)
    ctx.textAlign = 'left'
  })
  y += spotRows * 128

  // ── 4日行程 ──
  sectionTitle('建议行程', `${city.itineraryDays.length} 日`)
  y += 8
  city.itineraryDays.forEach(d => {
    ctx.fillStyle = C.copper
    ctx.font = `800 16px ${SANS}`
    ctx.fillText(`Day ${d.day}`, PAD + 4, y + 18)
    ctx.fillStyle = C.ink
    ctx.font = `600 18px ${SANS}`
    ctx.fillText(d.title, PAD + 92, y + 18)
    y += 44
  })

  // ── 必吃 ──
  sectionTitle('必吃', `${city.foods.length} 味`)
  y += 6
  const foodW = (W - PAD * 2) / 3
  city.foods.forEach((f, i) => {
    const col = i % 3, row = Math.floor(i / 3)
    ctx.font = `600 17px ${SANS}`
    ctx.fillStyle = C.ink
    ctx.fillText(`${f.emoji} ${f.name}`, PAD + 4 + col * foodW, y + 20 + row * 40)
  })
  y += Math.ceil(city.foods.length / 3) * 40

  // ── 个人印记（可选）──
  if (doneCount > 0) {
    y += 22
    ctx.fillStyle = '#F1E8D6'
    roundRect(ctx, PAD, y, W - PAD * 2, 50, 12)
    ctx.fill()
    drawSeal(ctx, PAD + 12, y + 8, 34, '抵', 16)
    ctx.fillStyle = C.ink
    ctx.font = `700 17px ${SANS}`
    ctx.fillText(`${user.name} 已抵达 ${doneCount}/${allSpots.length} 处 · 印记盖进踏印地图`, PAD + 60, y + 32)
    y += 50
  }

  // ── 底部：二维码 + 引导 ──
  const footTop = H - 172
  ctx.strokeStyle = C.border
  ctx.lineWidth = 1.5
  ctx.setLineDash([6, 5])
  ctx.beginPath(); ctx.moveTo(PAD, footTop); ctx.lineTo(W - PAD, footTop); ctx.stroke()
  ctx.setLineDash([])

  if (qrImg) {
    const qs = 118
    ctx.fillStyle = '#FFFFFF'
    roundRect(ctx, W - PAD - qs - 12, footTop + 20, qs + 12, qs + 12, 10)
    ctx.fill()
    ctx.drawImage(qrImg, W - PAD - qs - 6, footTop + 26, qs, qs)
  }
  ctx.fillStyle = C.ink
  ctx.font = `700 22px ${SERIF}`
  ctx.fillText(`扫码打开${city.name}攻略`, PAD, footTop + 56)
  ctx.fillStyle = C.mid
  ctx.font = `600 14px ${SANS}`
  ctx.fillText('景点 · 行程 · 美食 · 集章打卡', PAD, footTop + 84)
  ctx.fillText('打卡自动点亮「踏印」中国地图', PAD, footTop + 106)
  ctx.fillStyle = C.copper
  ctx.font = `700 13px ${SANS}`
  ctx.fillText('sakura.digitalvio.shop', PAD, footTop + 132)

  return cv
}
