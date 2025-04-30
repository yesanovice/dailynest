const CACHE_NAME = 'daily-nest-cache-v1';
const CACHE_FILES = [
  './',
  './index.html',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_FILES))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});