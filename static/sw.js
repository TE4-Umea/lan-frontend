const cacheName = 'static-shell-v1';
const resourcesToPrecache = [
    '/',
];

self.addEventListener('install', (event) => {
    console.log("Service worker installed");
    event.waitUntil(
        caches.open(cacheName)
        .then((cache) => {
            return cache.addAll(resourcesToPrecache);
        })
    );  
});

self.addEventListener('push', (e) => {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        //notifications aren't supported or permission not granted!
        return;
    }
    if (e.data) {
        let msg = e.data.json(); 
        e.waitUntil(self.registration.showNotification(
            msg.title, 
            {
                body: msg.body,
                icon: '/icon.png'
            }
        ));
    }
});

self.addEventListener('notificationclick', (event) => {  
    event.notification.close();

    const urlToOpen = new URL('/event', self.location.origin).href;

    const promiseChain = clients.matchAll({type: 'window', includeUncontrolled: true })
        .then((windowClients) => {
            let matchingClient = null;
            const url = new URL('', self.location.origin).href;

            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                
                if (windowClient.url.includes(url)) {
                    matchingClient = windowClient;
                    break;
                }
            }

            if (matchingClient) {
                return matchingClient.focus();
            } else {
                return clients.openWindow(urlToOpen);
            }
        });

    event.waitUntil(promiseChain);
  }, false);
  