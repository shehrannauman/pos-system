self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pos-cache').then((cache) => {
      return cache.addAll([
        './',
        './pos.html',
        './kds.html',
        './dashboard.html',
        './assets/styles.css',
        './assets/scripts.js',
        './assets/icons/icon-192x192.png',
        './assets/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});