const CACHE_NAME ="cybersakhi-v1";
const FILES_TO_CACHE = ["index.html","login.html","scam-detector.html","tips.html","report.html","emergency.html","manifest.json"];
self.addEvenetListener("install",event =>
  {
    event.waitUntil(caches.open(CACHE_NAME)
                    .then(cache => cache.addAll(FILES_TO_CACHE)));
  });
self.addEventListener("fetch".event => { event.respondWith(caches.match(event.reuest).then(response => response || fetch(event.request))
                                                           );
                                       });
