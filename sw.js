self.addEventListener('install', e => e.waitUntil(
    caches
        .open('thll-v1.01')
        .then(cache => cache.addAll([
            // '/',
            // '/index.html',
            // '/404.html',
            // '/bundle.js',
            // '/icon-32.png',
            // '/icon-48.png',
            // '/icon-72.png',
            // '/icon-96.png',
            // '/icon-168.png',
            // '/icon-192.png',
            // '/icon-512.png',
            // '/icon.svg',
            // '5cff56b29489a17cc9dbdc36e6732e7e.webp',
            // '903e271c821dcade5e67c08e3c7914be.jpg',
            // 'ee27dc6cf9fb373af11f6b23f0179f5a.jpg',
            // '1a211e1446495c37fa8d8120a2e41b54.png',
            // '3fae18a3d918201b1edae013d92e04a6.png',
            // '7afb9b9cc483b4bb78f98015f5b39d84.png',
            // '96a9a3eb1f99d5133098442dc70e4c34.png',
            // 'bfea0f8bf47d0ad07bb291a957bb8942.png',
            // 'ffb3e73f977272130ac5850c4efaca18.png'
        ]))
));

self.addEventListener('fetch', e => e.respondWith(
    caches
        .match(e.request)
        .then(response => response || fetch(e.request))
));
