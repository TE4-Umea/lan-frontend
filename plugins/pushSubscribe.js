export default function ({$auth, $axios, redirect }) {
    // Temporary solution
    if($auth.loggedIn) {
        if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
            return;
        }

        askPermission().then(() => {
            subscribeUserToPush().then((value) => {
                storePushSubscription(value, $axios);
            });
        });
    }       
}

function askPermission() {
    return new Promise(function(resolve, reject) {
        Notification.requestPermission().then(function(result) {
            resolve(result);
        });
    })
    .then((permissionResult) => {
        if (permissionResult !== 'granted') {
            throw new Error('We weren\'t granted permission.');
        }
    });
}

function subscribeUserToPush() {
    return navigator.serviceWorker.register('/pushSw.js')
        .then((registration) => {
            return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(process.env.VAPID)
            });
        })
        .then((pushSubscription) => {
            return pushSubscription;
        });
  }
function urlBase64ToUint8Array(base64String) {
    const base64 = (base64String + '='.repeat((4 - base64String.length % 4) % 4))
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    let rawData = window.atob(base64);
    let outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function storePushSubscription(pushSubscription, $axios) {
    $axios.post('/push-notification/subscribe', pushSubscription)
        .then((res) => {
            // console.log(res)
        })
        .catch((err) => {
            // console.log(err)
        });
}