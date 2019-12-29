console.log('sw   begin     /lll', Date.now());
const CACHE_NAME = 'PWA-v1.1'


this.addEventListener('install', (event) => {
  console.log('安装成功');
  // cacheStorage  缓存内容
  // install -> activated 
  // Promise resolve
  // this.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll([
        '/bundle.js',
        '/TIM图片20191228151823.png',
        '/service-worker.html'
      ])
    })
  )
})

// 监听浏览器的缓存事件
this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then(res => {
      if(res) {
        return res;
      }else {
        // 后续想缓存的内容
        return fetch(event.request).then(res => {
          return caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, res)
            return res;
          })
        })
      }
    })
  )
})

this.addEventListener('activate', (event) => {
  // install -> 阶段
  event.waitUntil(
    caches.keys()
    .then(keyList => {
      console.log('keyList  ', keyList);
      // [1.0, 1.1]
      return Promise.all(keyList.map(
        key => {
          if(key !== CACHE_NAME){
            return caches.delete(key)
          }
          return Promise.resolve()
        }
      ))
    })
  )
})