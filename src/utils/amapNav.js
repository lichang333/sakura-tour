/* 一键高德导航：优先 URL Scheme 直接唤起高德 App（不经 H5 中转），
   2 秒内页面仍在前台（未装 App / 被拦截）才回退 H5 导航页。
   桌面端直接开高德网页版。坐标为 GCJ-02（与站内地图同源）。 */

const SRC = 'sakuratour'

export function navToAmap({ lat, lng, name }) {
  const dname = encodeURIComponent(name)
  const h5 = `https://uri.amap.com/navigation?to=${lng},${lat},${dname}&mode=car&src=${SRC}`
  const ua = navigator.userAgent
  const isIOS = /iPhone|iPad|iPod/i.test(ua)
  const isAndroid = /Android/i.test(ua)

  // 桌面：直接网页版
  if (!isIOS && !isAndroid) { window.open(h5, '_blank', 'noreferrer'); return }

  // 微信/QQ 内置浏览器拦截 scheme，直接走 H5（页内会提示到浏览器打开）
  if (/MicroMessenger|QQ\//i.test(ua)) { window.location.href = h5; return }

  const scheme = isIOS
    ? `iosamap://path?sourceApplication=${SRC}&dlat=${lat}&dlon=${lng}&dname=${dname}&dev=0&t=0`
    : `amapuri://route/plan/?sourceApplication=${SRC}&dlat=${lat}&dlon=${lng}&dname=${dname}&dev=0&t=0`

  // 唤端成功页面会转后台 → 取消 H5 兜底；仍在前台则 2 秒后落 H5
  let cancelled = false
  const cancel = () => { cancelled = true }
  document.addEventListener('visibilitychange', function onVis() {
    if (document.hidden) { cancel(); document.removeEventListener('visibilitychange', onVis) }
  })
  window.addEventListener('pagehide', cancel, { once: true })

  setTimeout(() => { if (!cancelled && !document.hidden) window.location.href = h5 }, 2000)
  window.location.href = scheme
}
