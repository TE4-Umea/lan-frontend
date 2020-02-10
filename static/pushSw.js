const cacheName = 'static-shell-v1';
const resourcesToPrecache = [
    '/',
    'components',
    'pages'
];

self.addEventListener('install', function(event) {
    console.log("Tjena SW");
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(resourcesToPrecache);
        })
    );  
});

self.addEventListener('send', function (e) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        //notifications aren't supported or permission not granted!
        return;
    }

    if (e.data) {
        var msg = e.data;
        console.log(msg)
        e.waitUntil(self.registration.showNotification(msg.title, {
            body: msg.body,
            icon: msg.icon,
            actions: msg.actions
        }));
    }
});
