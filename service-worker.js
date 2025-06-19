// service-worker.js

const CACHE_NAME = "quiz-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./quiz.js",
  "./style.css",
  "./manifest.json",
  "./icon-192.png", // include your icons if you use them
  "./icon-512.png"
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Activate immediately
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(
      (cachedResponse) => cachedResponse || fetch(event.request)
    )
  );
});
