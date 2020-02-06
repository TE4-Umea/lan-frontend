export default function ({$auth, $axios, redirect }) {
    // Temporary solution
    if($auth.loggedIn) {
        if (!('serviceWorker' in navigator)) {
            // Service Worker isn't supported on this browser, disable or hide UI.
            return;
        } else if (!('PushManager' in window)) {
            // Push isn't supported on this browser, disable or hide UI.
            return;
        }else{
            var permission = askPermission();
            console.log([
                "1",
                permission]
                );
        }

    }       
}
function askPermission() {
    return new Promise(function(resolve, reject) {
        const permissionResult = Notification.requestPermission(function(result) {
            resolve(result);
        });
        console.log(permissionResult);
  
        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    })
    .then(function(permissionResult) {
        if (permissionResult !== 'granted') {
            throw new Error('We weren\'t granted permission.');
        }
        if (permissionResult == 'granted') {
            subscribeUserToPush();
        }
    });
}

function subscribeUserToPush() {
    return navigator.serviceWorker.register('/pushSw.js')
    .then(function(registration) {
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
        )
      };
  
      return registration.pushManager.subscribe(subscribeOptions);
    })
    .then(function(pushSubscription) {
      console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
      return pushSubscription;
    });
  }