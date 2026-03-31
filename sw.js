const CACHE_NAME = 'variant-vault-v1';

// Install the service worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Fetch resources (Network first, then fallback to cache for offline use)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
