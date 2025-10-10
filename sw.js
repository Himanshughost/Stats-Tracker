self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('stats-tracker-v1').then(cache => {
      return cache.addAll([
        '/blackindex.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});