/* Sakura Tour · 极简安装型 Service Worker
   目的：只为让 App「可安装到主屏」而存在。
   铁律：绝不缓存 HTML、绝不拦截请求返回旧内容 ——
   历史上正是 SW 缓存了 HTML 导致线上显示旧页，这里从根上杜绝：什么都不缓存。 */

self.addEventListener('install', () => {
  self.skipWaiting() // 新版本立即接管，不等旧标签页关闭
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // 清掉任何历史缓存，确保不残留任何旧资源
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
      await self.clients.claim()
    })()
  )
})

/* 存在 fetch 处理器即满足「可安装」信号；此处纯网络直通，
   不 respondWith、不读写缓存 —— 永远不可能返回过期内容。 */
self.addEventListener('fetch', () => {})
