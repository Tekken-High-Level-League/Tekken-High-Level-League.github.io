self.addEventListener('install', e => e.waitUntil(
    caches
        .open('thll-v1.01')
        .then(cache => cache.addAll([
            '/',
            '/index.html',
            '/404.html',
            '/bundle.js',
            '/icon-32.png',
            '/icon-48.png',
            '/icon-72.png',
            '/icon-96.png',
            '/icon-168.png',
            '/icon-192.png',
            '/icon-512.png',
            '/icon.svg',
            '5cff56b29489a17cc9dbdc36e6732e7e.webp',
            '903e271c821dcade5e67c08e3c7914be.jpg',
            'ee27dc6cf9fb373af11f6b23f0179f5a.jpg'
        ]))
));

self.addEventListener('fetch', e => console.log(e.request.url) && e.respondWith(
    caches
        .match(e.request)
        .then(response => response || fetch(e.request))
));
