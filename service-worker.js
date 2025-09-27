const CACHE_NAME = 'link-hub-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js', // Asumiendo que el TSX se compila a index.js
  '/manifest.json',
  'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2585&auto=format&fit=crop',
  'https://www.gstatic.com/images/branding/product/1x/google_cloud_192dp.png',
  'https://www.gstatic.com/images/branding/product/1x/google_cloud_512dp.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
