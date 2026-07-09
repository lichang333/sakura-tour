// Loads the AMap (高德地图) JS API v2.0 once and caches the promise so
// multiple map instances on the page don't re-inject the script.
let amapPromise = null

export function loadAMap() {
  if (amapPromise) return amapPromise

  amapPromise = new Promise((resolve, reject) => {
    if (window.AMap) { resolve(window.AMap); return }

    const key = import.meta.env.VITE_AMAP_KEY
    const securityCode = import.meta.env.VITE_AMAP_SECURITY_CODE
    if (!key) { reject(new Error('缺少高德地图 Key（VITE_AMAP_KEY）')); return }

    window._AMapSecurityConfig = { securityJsCode: securityCode || '' }

    const script = document.createElement('script')
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}`
    script.async = true
    script.onload = () => resolve(window.AMap)
    script.onerror = () => reject(new Error('高德地图脚本加载失败'))
    document.head.appendChild(script)
  })

  return amapPromise
}
