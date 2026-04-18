self.addEventListener("install", event => {
event.waitUntil(
caches.open("mi-cacheeeeeeee").then(cache => {
return cache.addAll([
"./",
"./index.html",
"./styles.css",
"./app.js"
]);
})
);
});
self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});
self.addEventListener('install', (event) => {
// Fuerza al Service Worker nuevo a convertirse en el activo
self.skipWaiting();
});
self.addEventListener('activate', (event) => {
event.waitUntil(clients.claim());
});