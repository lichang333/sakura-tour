/* 城市攻略分享卡 v2 —— canvas 绘制竖版 PNG（微信种草卡）
   图文并茂：顶部山水剪影横幅（每城 heroGradient 配色）+ 彩色集章格
   + 行程时间轴 + 必吃 chips + 装饰盖章 + 城市二维码。
   全部 canvas 手绘，与 App 首页山水场景同一套视觉语言，零外部图片。 */

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
  chip: '#F1E8D6',
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

/* 从 heroGradient 字符串抽出色标（深→浅） */
function gradientStops(gradientStr) {
  const hex = gradientStr.match(/#[0-9a-fA-F]{6}/g) || ['#294B6B', '#4B8FA6', '#BFE3EC']
  return hex.slice(0, 3)
}

function shade(hex, f) {  // f<1 变暗, f>1 变亮
  const n = parseInt(hex.slice(1), 16)
  const ch = (v) => Math.max(0, Math.min(255, Math.round(v * f)))
  return `rgb(${ch(n >> 16)},${ch((n >> 8) & 255)},${ch(n & 255)})`
}

/* 铜印方章（微微斜盖） */
function drawSeal(ctx, x, y, size, text, fontSize, opts = {}) {
  ctx.save()
  ctx.translate(x + size / 2, y + size / 2)
  ctx.rotate((opts.deg ?? -5) * Math.PI / 180)
  ctx.fillStyle = opts.bg || C.copperSoft
  ctx.strokeStyle = opts.border || C.copper
  ctx.lineWidth = 2.5
  roundRect(ctx, -size / 2, -size / 2, size, size, size * 0.24)
  ctx.fill(); ctx.stroke()
  ctx.fillStyle = opts.color || C.sealText
  ctx.font = `700 ${fontSize}px ${SERIF}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, 0, size * 0.04)
  ctx.restore()
}

/* 山水剪影横幅：渐变天空 + 太阳 + 三层山 + 雪帽 —— 与首页 hero 同构 */
function drawBanner(ctx, city, x, y, w, h) {
  const [deep, mid2, light] = gradientStops(city.heroGradient)

  // 天空（上浅下深，山前压重利于白字）
  const sky = ctx.createLinearGradient(0, y, 0, y + h)
  sky.addColorStop(0, light)
  sky.addColorStop(0.62, mid2)
  sky.addColorStop(1, deep)
  ctx.fillStyle = sky
  ctx.fillRect(x, y, w, h)

  // 太阳（铜色，右上）
  ctx.fillStyle = 'rgba(200,138,69,0.85)'
  ctx.beginPath()
  ctx.arc(x + w - 92, y + 58, 26, 0, Math.PI * 2)
  ctx.fill()

  // 两层山（正弦叠波，城市 id 决定相位 → 每城山形不同）
  const seed = [...city.id].reduce((a, ch) => a + ch.charCodeAt(0), 0)
  // 返回山脊线上最高点（供雪帽贴合）
  const hill = (base, amp1, amp2, phase, color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(x, y + h)
    let peak = { x: x, y: y + h }
    for (let i = 0; i <= w; i += 6) {
      const t = i / w * Math.PI * 2
      const yy = y + base
        - Math.sin(t * 1.7 + phase) * amp1
        - Math.sin(t * 3.3 + phase * 1.6) * amp2
      ctx.lineTo(x + i, yy)
      // 只在中带取峰（避开边缘，雪帽不会贴到卡边）
      if (i > w * 0.15 && i < w * 0.7 && yy < peak.y) peak = { x: x + i, y: yy }
    }
    ctx.lineTo(x + w, y + h)
    ctx.closePath()
    ctx.fill()
    return peak
  }
  hill(h * 0.62, 26, 10, seed % 7, shade(mid2, 0.72))                    // 远山
  const peak = hill(h * 0.78, 34, 14, seed % 5 + 2, shade(deep, 0.62))   // 近山

  // 近山主峰雪帽（贴合实际山脊）
  ctx.fillStyle = 'rgba(255,250,240,0.85)'
  ctx.beginPath()
  ctx.moveTo(peak.x, peak.y - 1)
  ctx.lineTo(peak.x - 15, peak.y + 13)
  ctx.lineTo(peak.x + 15, peak.y + 13)
  ctx.closePath()
  ctx.fill()

  // 底部压暗，保证白字可读
  const dim = ctx.createLinearGradient(0, y + h * 0.45, 0, y + h)
  dim.addColorStop(0, 'rgba(15,22,32,0)')
  dim.addColorStop(1, 'rgba(15,22,32,0.42)')
  ctx.fillStyle = dim
  ctx.fillRect(x, y, w, h)
}

/* 装饰性「漫游」圆形骑缝章（半透明，盖在横幅右下） */
function drawGhostSeal(ctx, cx, cy, r) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(14 * Math.PI / 180)
  ctx.globalAlpha = 0.4
  ctx.strokeStyle = '#FFF6E8'
  ctx.lineWidth = 3
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke()
  ctx.beginPath(); ctx.arc(0, 0, r - 7, 0, Math.PI * 2); ctx.stroke()
  ctx.fillStyle = '#FFF6E8'
  ctx.font = `700 ${r * 0.62}px ${SERIF}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('漫', 0, -r * 0.34)
  ctx.fillText('游', 0, r * 0.36)
  ctx.restore()
}

export async function renderCityCard(city, user) {
  const W = 750, PAD = 46, S = 2

  let qrImg = null
  try { qrImg = await loadImage(`/qr/${city.id}.png`) } catch { /* 无码出卡 */ }

  const visited = new Set(user?.visitedSpots || [])
  const allSpots = [...city.spots, ...(city.nearbySpots || [])]
  const doneCount = allSpots.filter(s => visited.has(s.id)).length

  // ── 高度预算 ──
  const spotRows = Math.ceil(city.spots.length / 4)
  const foodRows = Math.ceil(city.foods.length / 3)
  const BANNER = 268
  const H = 18 + BANNER
    + 58 + spotRows * 132
    + 58 + city.itineraryDays.length * 46 + 8
    + 58 + foodRows * 50 + 6
    + (doneCount > 0 ? 76 : 20)
    + 192

  const cv = document.createElement('canvas')
  cv.width = W * S
  cv.height = H * S
  const ctx = cv.getContext('2d')
  ctx.scale(S, S)

  // ── 纸底 + 内卡 ──
  ctx.fillStyle = C.paper
  ctx.fillRect(0, 0, W, H)
  roundRect(ctx, 18, 18, W - 36, H - 36, 22)
  ctx.save()
  ctx.clip()
  ctx.fillStyle = C.card
  ctx.fillRect(18, 18, W - 36, H - 36)

  // ── 山水横幅（在卡内裁剪区绘制）──
  drawBanner(ctx, city, 18, 18, W - 36, BANNER)
  drawGhostSeal(ctx, W - 96, 18 + BANNER - 72, 44)

  // 横幅内容：品牌行（左上）
  drawSeal(ctx, PAD, 44, 44, '印', 21)
  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = '#FFF6E8'
  ctx.font = `700 22px ${SERIF}`
  ctx.fillText('Sakura Tour', PAD + 58, 68)
  ctx.fillStyle = 'rgba(255,246,232,0.82)'
  ctx.font = `600 12.5px ${SANS}`
  ctx.fillText('中国小城漫游手册', PAD + 58, 88)

  // 横幅内容：城市名 + 徽章 + tagline（左下）
  const by = 18 + BANNER
  ctx.fillStyle = '#FFFFFF'
  ctx.font = `900 64px ${SERIF}`
  ctx.shadowColor = 'rgba(15,22,32,0.45)'
  ctx.shadowBlur = 10
  ctx.fillText(city.name, PAD, by - 62)
  ctx.shadowBlur = 0
  ctx.font = `700 14px ${SANS}`
  const badge = city.heroBadge
  const bw = ctx.measureText(badge).width + 26
  ctx.strokeStyle = 'rgba(255,246,232,0.9)'
  ctx.lineWidth = 1.5
  roundRect(ctx, PAD + 2, by - 46, bw, 30, 15)
  ctx.stroke()
  ctx.fillStyle = 'rgba(255,246,232,0.95)'
  ctx.fillText(badge, PAD + 15, by - 25)
  ctx.font = `600 18px ${SERIF}`
  ctx.fillText(city.tagline, PAD + bw + 18, by - 25)

  ctx.restore()  // 结束卡片 clip

  let y = by
  const sectionTitle = (label, extra) => {
    y += 46
    ctx.fillStyle = C.ink
    ctx.font = `700 22px ${SERIF}`
    ctx.textAlign = 'left'
    ctx.fillText(label, PAD, y)
    if (extra) {
      ctx.fillStyle = C.copper
      ctx.font = `700 14px ${SANS}`
      ctx.textAlign = 'right'
      ctx.fillText(extra, W - PAD, y)
      ctx.textAlign = 'left'
    }
    y += 12
  }

  // ── 必去景点（彩色集章格）──
  sectionTitle('集章点 · 必去景点', `${city.spots.length} 处`)
  const cellW = (W - PAD * 2) / 4
  city.spots.forEach((s, i) => {
    const col = i % 4, row = Math.floor(i / 4)
    const cx = PAD + col * cellW + cellW / 2
    const cy = y + row * 132 + 42
    // 彩色圆底（景点主题色）
    ctx.fillStyle = s.color + '2E'
    ctx.beginPath(); ctx.arc(cx, cy, 36, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = s.color
    ctx.lineWidth = 2
    ctx.setLineDash(visited.has(s.id) ? [] : [5, 4])   // 已抵达实线，未去虚线
    ctx.beginPath(); ctx.arc(cx, cy, 36, 0, Math.PI * 2); ctx.stroke()
    ctx.setLineDash([])
    ctx.font = `33px ${SANS}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(s.emoji, cx, cy + 2)
    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = C.ink
    ctx.font = `700 16px ${SANS}`
    ctx.fillText(s.name, cx, cy + 64)
    ctx.textAlign = 'left'
  })
  y += spotRows * 132

  // ── 行程（时间轴）──
  sectionTitle('建议行程', `${city.itineraryDays.length} 日`)
  y += 10
  const axisX = PAD + 10
  city.itineraryDays.forEach((d, i) => {
    const rowY = y + 14
    if (i < city.itineraryDays.length - 1) {
      ctx.strokeStyle = C.border
      ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(axisX, rowY + 6); ctx.lineTo(axisX, rowY + 46); ctx.stroke()
    }
    ctx.fillStyle = C.copperSoft
    ctx.strokeStyle = C.copper
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(axisX, rowY, 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke()
    ctx.fillStyle = C.copper
    ctx.font = `800 15px ${SANS}`
    ctx.fillText(`Day ${d.day}`, axisX + 22, rowY + 6)
    ctx.fillStyle = C.ink
    ctx.font = `600 18px ${SANS}`
    ctx.fillText(d.title, axisX + 104, rowY + 6)
    y += 46
  })
  y += 8

  // ── 必吃（chips）──
  sectionTitle('必吃', `${city.foods.length} 味`)
  y += 8
  const foodW = (W - PAD * 2 - 20) / 3
  city.foods.forEach((f, i) => {
    const col = i % 3, row = Math.floor(i / 3)
    const fx = PAD + col * (foodW + 10)
    const fy = y + row * 50
    ctx.fillStyle = C.chip
    roundRect(ctx, fx, fy, foodW, 40, 11)
    ctx.fill()
    ctx.fillStyle = C.ink
    ctx.font = `600 16px ${SANS}`
    ctx.textAlign = 'center'
    ctx.fillText(`${f.emoji} ${f.name}`, fx + foodW / 2, fy + 26)
    ctx.textAlign = 'left'
  })
  y += foodRows * 50 + 6

  // ── 个人印记（可选）──
  if (doneCount > 0) {
    y += 20
    ctx.fillStyle = C.chip
    roundRect(ctx, PAD, y, W - PAD * 2, 52, 12)
    ctx.fill()
    drawSeal(ctx, PAD + 12, y + 9, 34, '抵', 16)
    ctx.fillStyle = C.ink
    ctx.font = `700 17px ${SANS}`
    ctx.fillText(`${user.name} 已抵达 ${doneCount}/${allSpots.length} 处 · 印记盖进踏印地图`, PAD + 60, y + 33)
    y += 56
  }

  // ── 底部：二维码 + 引导 ──
  const footTop = H - 174
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
  ctx.fillText(`扫码打开${city.name}攻略`, PAD, footTop + 58)
  ctx.fillStyle = C.mid
  ctx.font = `600 14px ${SANS}`
  ctx.fillText('景点 · 行程 · 美食 · 集章打卡', PAD, footTop + 86)
  ctx.fillText('打卡自动点亮「踏印」中国地图', PAD, footTop + 108)
  ctx.fillStyle = C.copper
  ctx.font = `700 13px ${SANS}`
  ctx.fillText('sakura.digitalvio.shop', PAD, footTop + 134)

  // 卡片描边最后压一道
  ctx.strokeStyle = C.ink
  ctx.lineWidth = 2
  roundRect(ctx, 18, 18, W - 36, H - 36, 22)
  ctx.stroke()

  return cv
}
