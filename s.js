/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.s.js",
    "revision": "73542bd05e25c40acc473c8a25075a2a"
  },
  {
    "url": "2.s.js",
    "revision": "15ea6c7d59ecca3dfa508a4cf28d6d69"
  },
  {
    "url": "3.s.js",
    "revision": "55b18b83f29796ecde71ee21ee656f2a"
  },
  {
    "url": "4.s.js",
    "revision": "b56ddff9f0fc62ba99f4a8524c838c6c"
  },
  {
    "url": "index.html",
    "revision": "a57e880c8e93db3ca4fb49feb20f750d"
  },
  {
    "url": "jquery.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "ossw.js",
    "revision": "ebb63ca15bba16b550232b0b0f66c726"
  },
  {
    "url": "osswu.js",
    "revision": "ebb63ca15bba16b550232b0b0f66c726"
  },
  {
    "url": "style.css",
    "revision": "06f3068d683fa13aef33ef24968637de"
  },
  {
    "url": "workbox-config.js",
    "revision": "4a77be5178b1baf21235fa15b158b920"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
