## PWA 
  1. 离线访问：cacheStorage + service-work
  2. 桌面人口: manifest.json
  3. 发送通知: Notification

## web-worker
  1. js单线程。
  2. 能够让我们的js运行在另外一个线程中。

## cacheStorage
  1. 除非明确的更新缓存，否则缓存不会更新。除非删除，否则缓存数据永不过期。
  2. 一个域下面浏览器限制了缓存数据大小。

## 更新
  1. http a.js  a.js?v.1.1
  2. sw. install addAll; fetch  cache.match; 
  3. 不是每次刷新，都会重新 install -> activate。如果serviceWorker内容变了，才会走install - skipWaiting> activate
    skipWaiting 如果用户把页面关了，再进来 才会到activate
    手动调用this.skipWaiting()