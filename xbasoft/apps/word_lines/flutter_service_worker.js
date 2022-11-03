'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0ab87715f05dd792941661e9b273d238",
"index.html": "5802567b7dc1b68e83ad2a61abb093b2",
"/": "5802567b7dc1b68e83ad2a61abb093b2",
"main.dart.js": "1d5cdf33e060703bd65d0762bdb41dc9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "0e0f76247713015ec396923a1b7d2719",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "37c77b1a74e9bd8a9a9bc260f203fa3b",
"assets/AssetManifest.json": "4c937a688b665a78ed9a6b7dd95af036",
"assets/NOTICES": "371971f5c5db3a8830872e01ff5619c8",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "b7dcf75ea54c9f47c0350a6b07f7f833",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/words/words_uk_10": "b733d202013000838b1ea5e0efcce3c4",
"assets/assets/words/words_en_10": "7c37461f288f9bdf52b4cc46ae8dce72",
"assets/assets/words/words_uk_5": "a723bd0793bc9de6442f705cd47d0a4c",
"assets/assets/words/words_uk_4": "c0ef6d584d89ad94cbe57c378c5cfcf6",
"assets/assets/words/words_uk_3": "8bcbbd1bbe563370ddbce40608fef26d",
"assets/assets/words/words_en_5": "786caa3d506fd53f923911730f68c445",
"assets/assets/words/words_en_3": "3c0f9f252d3947918e96e294391ff093",
"assets/assets/words/words_en_4": "7e630f3830f03567aaec687bf9cd169b",
"assets/assets/words/words_uk_6": "be38152e4b61cce871e2d541477d931e",
"assets/assets/words/words_uk_8": "8f27b0aff711ae61c4397246d8a5674d",
"assets/assets/words/words_uk_9": "fe098d832016919808d3c46abce48a02",
"assets/assets/words/words_uk_7": "7e1becfe432f12e591322e9bfbdddf8b",
"assets/assets/words/words_en_6": "7eb73f5f670e1ec3812158a2c3c1ee87",
"assets/assets/words/words_en_8": "ab220621eab96c73178fa7985904955b",
"assets/assets/words/words_en_9": "d466c1afd49891c99bff5c5d0e6f3b23",
"assets/assets/words/words_en_7": "9e351d7956e6795b5a1af2090a6f987c",
"assets/assets/images/app_logo_small_uk.png": "ec7de04fff758643045784452a31486c",
"assets/assets/images/app_logo_small.png": "08f6763d5b10047a9a77fdab8de41d26",
"assets/assets/images/intro_en/1word.png": "41cf5a867e708e88f0c606d2a07b85e1",
"assets/assets/images/intro_en/putLetter.png": "d0a0eb27700adf34f96e73b61e7868a0",
"assets/assets/images/intro_en/goal.png": "bf299bf9508c4a39ca3fe362b148e912",
"assets/assets/images/intro_en/clear.png": "799a80b3307aefe9ca3ca47527ff8d0e",
"assets/assets/images/intro_en/2words.png": "c82948ba3d9b237d455ca4ffdf439b71",
"assets/assets/images/intro_en/submit.png": "42d05ec8167f4bb354894599114e73d8",
"assets/assets/images/intro_en/gameover.png": "45bbb42345549158c2a2d5f92431ff68",
"assets/assets/images/intro_en/undo.png": "81548a9dd7b2210a8ca36d4b93ccabde",
"assets/assets/images/app_logo_uk.png": "eed38091fe068b9097958cecd7f513c3",
"assets/assets/images/app_logo.png": "7393e2fff28847760bd97954b6420140",
"assets/assets/images/intro_uk/1word.png": "f8567e42f931727d304799ed02e99e58",
"assets/assets/images/intro_uk/putLetter.png": "aeb615c862cc6e826de72247675f1bc4",
"assets/assets/images/intro_uk/goal.png": "b86adbfb68266a0867bb2ad9e70d04d3",
"assets/assets/images/intro_uk/clear.png": "917fa23d251ae36df28a712455c0310e",
"assets/assets/images/intro_uk/2words.png": "eeddfdac7dbda6fadae02293f70c11c8",
"assets/assets/images/intro_uk/submit.png": "f199e7ee3417605525809c0fbe7f8ed4",
"assets/assets/images/intro_uk/gameover.png": "2e849ba16291e2ab3306d0af3386803b",
"assets/assets/images/intro_uk/undo.png": "58ddc53c0be4059e9a6c5c99e768b8c6",
"assets/assets/languages/uk.json": "544089ef29fbc97a1ae0f541dda4d8d5",
"assets/assets/languages/en.json": "5cb142ac0a27c222210891fb49357704",
"assets/assets/audio/click_2.wav": "28693f0cd58bcf32d3604cb067267759",
"assets/assets/audio/save.wav": "9f253770a98f1e95d800172cf3793ab6",
"assets/assets/audio/positive.wav": "d4d8e1ea4e51a2dcd3a17b546fadaf48",
"assets/assets/audio/negative_2.wav": "22cf96ee5282b2567a2dd7be0476d914",
"assets/assets/audio/menu.ogg": "4472243495cfc7ed80a9ad5e1e5d99fd",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
