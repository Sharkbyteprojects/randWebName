importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [
  {
    "url": "1.js",
    "revision": "73542bd05e25c40acc473c8a25075a2a"
  },
  {
    "url": "2.js",
    "revision": "15ea6c7d59ecca3dfa508a4cf28d6d69"
  },
  {
    "url": "3.js",
    "revision": "55b18b83f29796ecde71ee21ee656f2a"
  },
  {
    "url": "4.js",
    "revision": "b56ddff9f0fc62ba99f4a8524c838c6c"
  },
  {
    "url": "index.html",
    "revision": "5532729e517d7237e0ed6eaacba6c6f2"
  },
  {
    "url": "jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "style.css",
    "revision": "b934ecd96e604d9e2be63f278a29d691"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
