'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "c314d9c61a09ad06f9b8a85cd49cb469",
"/assets/LICENSE": "009442d8aeee0a467653994e6425497e",
"/assets/AssetManifest.json": "a69d6e8d583b63db94c692f5ae55ee07",
"/assets/FontManifest.json": "1187a76de9800c6adf3d8a99e1187bd8",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/img/sunny.png": "cd4af4bb842e61f52fb513dc42383aaf",
"/assets/assets/img/beach3.jpeg": "0953fb3fad442633ccd1017824be460c",
"/assets/assets/img/beach1.jpg": "bd764fdf69ea81a8143a3433ba62b1ba",
"/assets/assets/img/beach2.jpg": "1172ceb230781d93d08e67620cd776ee",
"/assets/assets/img/beach4.jpg": "9a0c6c9c858c51826f7b1fc8d7015d18",
"/assets/assets/fonts/Poppins-Medium.ttf": "28bc024aa3164e0b0ff2d709f17b333f",
"/assets/assets/fonts/Poppins-Regular.ttf": "dd1aed50244d7243b9209dc901c8d1af",
"/assets/assets/fonts/Poppins-Bold.ttf": "922cb3bc86ec0568c82525e315387021"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
