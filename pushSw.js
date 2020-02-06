self.addEventListener('install', function(event) {
    console.log("Tjena SW");
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(resourcesToPrecache);
        })
    )  
})
const cacheName = 'static-shell-v1';
const resourcesToPrecache = [
    '/',
    'components',
    'pages'
];