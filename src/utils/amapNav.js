/* 一键导航：优先 URL Scheme 直接唤起地图 App（不经网页中转），
   2 秒内页面仍在前台（未装 App / 被拦截）才回退网页版。
   国内城市走高德（GCJ-02，与站内地图同源），海外城市走 Google Maps。 */

const SRC = 'sakuratour'

/* 手机：scheme 唤端 + 前台超时兜底；唤端成功页面转后台即取消兜底 */
function openScheme(scheme, fallback) {
  let cancelled = false
  const cancel = () => { cancelled = true }
  document.addEventListener('visibilitychange', function onVis() {
    if (document.hidden) { cancel(); document.removeEventListener('visibilitychange', onVis) }
  })
  window.addEventListener('pagehide', cancel, { once: true })
  setTimeout(() => { if (!cancelled && !document.hidden) window.location.href = fallback }, 2000)
  window.location.href = scheme
}

const isIOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent)
const isAndroid = () => /Android/i.test(navigator.userAgent)
const inWeChat = () => /MicroMessenger|QQ\//i.test(navigator.userAgent)

export function navToAmap({ lat, lng, name }) {
  const dname = encodeURIComponent(name)
  const h5 = `https://uri.amap.com/navigation?to=${lng},${lat},${dname}&mode=car&src=${SRC}`

  if (!isIOS() && !isAndroid()) { window.open(h5, '_blank', 'noreferrer'); return }
  // 微信/QQ 内置浏览器拦截 scheme，直接走 H5（页内会提示到浏览器打开）
  if (inWeChat()) { window.location.href = h5; return }

  openScheme(
    isIOS()
      ? `iosamap://path?sourceApplication=${SRC}&dlat=${lat}&dlon=${lng}&dname=${dname}&dev=0&t=0`
      : `amapuri://route/plan/?sourceApplication=${SRC}&dlat=${lat}&dlon=${lng}&dname=${dname}&dev=0&t=0`,
    h5,
  )
}

/* 海外城市：Google Maps。iOS 从 JS 打开 https 链接不会触发 universal link
   唤端，必须走 comgooglemaps:// / google.navigation: scheme，网页版兜底 */
export function navToGmaps({ lat, lng, name }) {
  const web = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`

  if (!isIOS() && !isAndroid()) { window.open(web, '_blank', 'noreferrer'); return }
  if (inWeChat()) { window.location.href = web; return }

  openScheme(
    isIOS()
      ? `comgooglemaps://?daddr=${lat},${lng}&directionsmode=walking`
      : `google.navigation:q=${lat},${lng}&mode=w`,
    web,
  )
}
