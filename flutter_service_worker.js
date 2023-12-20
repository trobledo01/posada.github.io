'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "818e9712e97fbd95d7bc2616f4fb1d05",
"assets/AssetManifest.bin.json": "315230ff80c26c03194b9c200b56f58c",
"assets/AssetManifest.json": "558bc6bf853b7f365a2ba78370f7ce49",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "da82ef67cc164a498b8dc2f1dbc7356d",
"assets/images/1.png": "635e0ebff2c1940370d56602f7ac6c3a",
"assets/images/10.png": "8e34c363073e0607edd914dcfd73913b",
"assets/images/11.png": "4cc521b6b031a2c8ced3b68e81f7baf2",
"assets/images/12.png": "f573e07ebb97aa518e4b7c60979af7df",
"assets/images/13.png": "35263c7989dfdda528392fdec55dacba",
"assets/images/14.png": "282d7795d556bf30107d0d3b131408ba",
"assets/images/15.png": "737e78dd65201d6fd2c5a826906f08ad",
"assets/images/16.png": "25c0052629831d5ec81f30c17e4b412a",
"assets/images/17.png": "fdbae2171e0fc41ff14e64e8ed5adf51",
"assets/images/18.png": "eea27ee7c1140833a36a86a0a195d368",
"assets/images/19.png": "ca993dbee047f15d637896a929ea9f25",
"assets/images/2.png": "b842922915b4872f6c448086fd62b3ba",
"assets/images/20.png": "96c5923180a5a3a762343c5a3a500ba5",
"assets/images/21.png": "ff8c3455179fd84848f5094993c4e042",
"assets/images/22.png": "2c1493c808b447f8de4d48cda80a028c",
"assets/images/23.png": "5ec21c12f81b466e0635dcebdffd2ac7",
"assets/images/24.png": "8a09c31005c3228cb92213e8a5b7b2b0",
"assets/images/25.png": "9e6ba501d8ed95e1a58c1d26d0e7e897",
"assets/images/26.png": "1563ade239979b1b29ad4ec59d2f4a76",
"assets/images/27.png": "adc963eee4c80763a90d5a21c7a5a541",
"assets/images/28.png": "427989eeebadf88da7d5c91b1b71e4c1",
"assets/images/29.png": "bd488a828e28d92bf6f22af09201ab8d",
"assets/images/3.png": "aa2d36c141efacab068f626b4cb262f8",
"assets/images/30.png": "1c8ae579289bdff034c36d4943f2f53e",
"assets/images/31.png": "a8b9e1e90b6718b5344415a3fa747559",
"assets/images/32.png": "a4139f0183cd423c7c220c929f393062",
"assets/images/33.png": "386e0b34c4a8b16012ba5355a9b8952d",
"assets/images/34.png": "1230820532875f979f2f99c66e70dd54",
"assets/images/35.png": "f16b34edad1b07caa585774811f6608f",
"assets/images/36.png": "1e5d0059d1d01bce4d807af448c4d4ba",
"assets/images/37.png": "0c035a7ba49c45f92b55f778b617a631",
"assets/images/38.png": "a7020af599cfecab87fc8c6634e070b5",
"assets/images/39.png": "aa37d5fc54c701d1e4dc366e9af42166",
"assets/images/4.png": "6ea9299d88a71482b577d0801053b222",
"assets/images/40.png": "7a7adb5c4181704d4cb9165c8ea21567",
"assets/images/41.png": "15978f67081c8a134dc3225989c3ecd8",
"assets/images/42.png": "7c0327a5af18fb59710111a073dbce7c",
"assets/images/43.png": "a558740aaded717118c82015a16851aa",
"assets/images/44.png": "da102136644be0d4aec95dacb6423c28",
"assets/images/45.png": "1c7bea8495931798377187db8298269e",
"assets/images/46.png": "083dff9a86fe2f0ba45a28a7e17cfbcf",
"assets/images/47.png": "ae97a51485a7e60d5c0826bffff7bd90",
"assets/images/48.png": "ca15a8569a772a4f1a671e73d38e2022",
"assets/images/49.png": "c1bf1daa7ef421578b3b9bd89188fe3a",
"assets/images/5.png": "64fb52c2e8f9ca4b1c04d7d7448b66ba",
"assets/images/50.png": "49b4f06c3960d93bd3999167f93edd7d",
"assets/images/51.png": "fea5f064dacbfe8ad2445ab217e35ab8",
"assets/images/52.png": "9ad75810f3417ac4118fbf7fae839e4b",
"assets/images/53.png": "9c375d76424715f59f9166aab8120c36",
"assets/images/54.png": "15d5b806bd077c631ec5b7b6dd2e122f",
"assets/images/6.png": "3e14f1e7ccd4b201bfc61882de71e790",
"assets/images/7.png": "5158ec7cbace493844c0e7282bc71f39",
"assets/images/8.png": "4896753c0165d2435b125523dc9ab5d5",
"assets/images/9.png": "c1f566f6650dd78ee0f4fd25567138df",
"assets/images/logo21.png": "2533d7d426f3afe6ad6ce7cf303de962",
"assets/NOTICES": "8209e68756ce148a5e2d86e2beccc3b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b04cca3da9bc123a385e3adfb7b2e7f",
"/": "4b04cca3da9bc123a385e3adfb7b2e7f",
"main.dart.js": "70677a0161a5b946ceecf07af4643951",
"manifest.json": "494f3477bfe3444d1bfc75294d04aa3b",
"version.json": "79b6d2298555a84dd4a8e3241d19ec30"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
