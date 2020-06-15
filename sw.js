self.addEventListener('install', e => e.waitUntil(
  caches
    .open('thll-v1.00')
    .then(cache => cache.addAll([
      '/',
      '/index.html',
      '/404.html',
      '/bundle.js',
      '/icon-32.png',
      '/icon-192.png',
      '/icon-512.png',
      '/icon.svg'
    ]))
));

self.addEventListener('fetch', e => console.log(e.request.url) && e.respondWith(
  caches
    .match(e.request)
    .then(response => response || fetch(e.request))
));
