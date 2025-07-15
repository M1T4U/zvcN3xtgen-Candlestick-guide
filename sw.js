const CACHE_NAME = 'zvcn3xtgen-candlestick-guide-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/sw-installer.js',
  '/index.tsx', // Caching source files as build step is not part of this environment
  '/App.tsx',
  '/types.ts',
  '/constants.ts',
  // components
  '/components/Sidebar.tsx',
  '/components/PageWrapper.tsx',
  '/components/Illustrations.tsx',
  '/components/Quiz.tsx',
  '/components/Icons.tsx',
  // sections
  '/sections/content/Introduction.tsx',
  '/sections/content/EngulfingCandle.tsx',
  '/sections/content/MomentumCandle.tsx',
  '/sections/content/MultiplePatterns.tsx',
  '/sections/content/DojiCandle.tsx',
  '/sections/content/Hammer.tsx',
  '/sections/content/ShootingStar.tsx',
  '/sections/content/Tweezer.tsx',
  '/sections/content/Marubozu.tsx',
  '/sections/content/ui.tsx',
  // fonts and icons
  'https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap',
  'https://fonts.gstatic.com/s/caveat/v17/WnznHAc5bAfAsKjg_drpHit_.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch(err => {
        console.error('Failed to cache assets during install:', err);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // We only want to handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not in cache - fetch from network
        return fetch(event.request).then(
          (networkResponse) => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200) {
                 if (networkResponse.type !== 'opaque') {
                   return networkResponse;
                 }
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                // We only cache basic and opaque responses, not cors ones from CDNs in dev
                if (event.request.url.startsWith('http')) {
                    cache.put(event.request, responseToCache);
                }
              });

            return networkResponse;
          }
        ).catch(err => {
            console.error('Fetch failed; returning offline page instead.', err);
            // Optionally, return a fallback offline page here
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});