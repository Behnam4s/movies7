self.addEventListener("install", () => {
    self.skipWaiting();
  });
  
  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Add condition to filter relevant cache names
              // e.g., only cacheName with 'next-pwa-' prefix
              return cacheName.startsWith("next-pwa-");
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });