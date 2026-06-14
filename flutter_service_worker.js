'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1b60083c3624523cefd30d95a9ad1914",
"version.json": "1157d7f737a85cbf6fbae65a645ed2b0",
"index.html": "4f2955822050b9873701ad9b279475dd",
"/": "4f2955822050b9873701ad9b279475dd",
"main.dart.js": "ebd1b15f1d9b1df466555457b437ec2b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"README.md": "34e9c4cff9c9d5c54639ec3c8850eb9e",
"favicon.png": "1cbf09c997f8a286059e25fafc74de49",
"logo.png": "1cbf09c997f8a286059e25fafc74de49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2279bb02736a9c3f24e8b2ac0be47606",
"assets/AssetManifest.json": "e028738101c78f2fe28cd41fd847d133",
"assets/NOTICES": "acc28a705d4efebeb5f24775115153b2",
"assets/FontManifest.json": "1ebedaea79873f76a56af9313b48830e",
"assets/AssetManifest.bin.json": "04fbf375c9cfe33a3534abf2d63bf73c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "863803722e749cfd2443cf749445316f",
"assets/fonts/Geist-Regular.ttf": "c73f4c729327eae068890e8765bb199d",
"assets/fonts/Geist-Bold.ttf": "d2ec50ce0714c8b3853d2dac8c11cd84",
"assets/fonts/Geist-Thin.ttf": "4e901cbce27d5f5e2bfe2377780f4a79",
"assets/fonts/Geist-Medium.ttf": "42a64eb53a967fa64ab827c3a32bb973",
"assets/fonts/Geist-Light.ttf": "8a1ec6119d4f17c398c65c121dd3e01f",
"assets/fonts/MaterialIcons-Regular.otf": "2af432b4b108d66ec4ce76d061b8b457",
"assets/fonts/Geist-SemiBold.ttf": "196be9d9a220066df3dfbf8bdec91b83",
"assets/assets/svg/message_support.svg": "379ec893c0ae46807a8f525abfe0e5b7",
"assets/assets/USDT_Logo.png": "3990f40e6e9305e0ef83b9493b3b4b61",
"assets/assets/upload_doc.png": "202811b8cf916cd47222145a07ca738a",
"assets/assets/warning.png": "4c7066225f454ec9fa20e5b9b9a7539a",
"assets/assets/plus.png": "6c6949f5c3c67cbd406d1f1140167162",
"assets/assets/gradient.png": "4f201f7947d0452d929c2807850555f7",
"assets/assets/crypto.png": "a2bf9ac494961e457466c33d5db1d026",
"assets/assets/gold_image.png": "cc13eb3e2c399a258552926ba27d7feb",
"assets/assets/app_logout.png": "2d1a0ba68ae204480a2ea0d7e97881f8",
"assets/assets/empty_trnx.png": "21a04a2b25573aa8e1ebc8e574d95eee",
"assets/assets/investments.png": "7b0130317960034a6b9069a7835ecf0e",
"assets/assets/forward_arrow.png": "20feb136809dc048fb77096f76b5584d",
"assets/assets/lock.png": "a116fd12d1aef79c1832995a2e263947",
"assets/assets/betting.png": "977549ce0a480f53bd73a4227989f8a9",
"assets/assets/device_icon.png": "6b68bff05b6b18e7ccbeb62926d72800",
"assets/assets/paid_out.png": "a9ea9860919eea12076bbeace0e25bdc",
"assets/assets/back_arrow.png": "dd23ea9e8fdac5fb78c8ea74f7dae56c",
"assets/assets/tourch.png": "0353d1f25109d7e2c53fd27daddc7354",
"assets/assets/logout.png": "f7a14fa9d23f38626fe4a737c4c8b857",
"assets/assets/onboarding_4.png": "bd3ff30bbdbfc3f1a13449bad83201c7",
"assets/assets/app_referral.png": "8eb77d70b8b1394d9ddb5c64531fd12c",
"assets/assets/home.png": "e655566ac28560b7752592dad4ad7b57",
"assets/assets/real_estate.png": "748d6ff07995b5d6b9e32f5473c73072",
"assets/assets/onboarding_1.png": "5d6eae2281c932fd7009e51bd79f8eb2",
"assets/assets/onboarding_3.png": "7d778589b709f5b7e7e68358d55f1e71",
"assets/assets/onboarding_2.png": "090fe2b763edcd71a5b5ced8366c8003",
"assets/assets/withdraw.png": "756dc4bdc1f080323ce4df7065507590",
"assets/assets/snackbar_success.png": "79a67dadac40a207f353b2bee7ec76c7",
"assets/assets/search.png": "a81b08cf39bec6b269fb98a1cddb6969",
"assets/assets/splash.png": "4e84a0186c08b431251d046c33badd69",
"assets/assets/logo.png": "1cbf09c997f8a286059e25fafc74de49",
"assets/assets/cancel_icon.png": "258fe302d95ca7a9ba0a3b8be4335f75",
"assets/assets/snackbar_error.png": "0f28554dad72e68232aa1f03ddd971ed",
"assets/assets/profile.png": "7952481bb6c24c4972858dd9fa45f613",
"assets/assets/success.png": "a6f693f322cf096ba1923b98a5e9bed0",
"assets/assets/clock.png": "708ee8c0573b50445d5412314f82f8da",
"assets/assets/visibility_on.png": "2e9e02d16f75e236c9abae3f7b9b8529",
"assets/assets/folder_add.png": "b1d7e279c7238741e3f78860560ad109",
"assets/assets/successful.png": "f834c49f1fac142a35b4d87436a72a64",
"assets/assets/visibility_off.png": "4c9a8c31708819d14b383845996abf2e",
"assets/assets/invest.png": "0e68ea126fd8945ecdf7c4fe4b9810c5",
"assets/assets/trash.png": "4b2167a73677aa95a65df09f2cf8434d",
"assets/assets/pwd_success.png": "922e4d4428cf3a7eaf227b03697b4ea2",
"assets/assets/expand_more.png": "254d923392db9b79435d95028835d748",
"assets/assets/redo.png": "45bd928b13ee1e7fcd88e47a731f97a8",
"assets/assets/deposite.png": "bebd37580090955a83353a673b0f19f1",
"assets/assets/send.png": "6c1ffa4c6af63f353f718cfa8a8dff3c",
"assets/assets/copy_icon.png": "bf50f0abe877469302ea6a9f6e36b27c",
"assets/assets/referal.png": "88b4eed34a1c7bff44c354c1608ac885",
"assets/assets/scan.png": "abe88df79c99f82eb1cb351a3d164717",
"assets/assets/gold.png": "a1c6f69b4944fecaf364beceda64652b",
"assets/assets/live.png": "ca3e7a32dad02d91b1da8a0db548e7d6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
