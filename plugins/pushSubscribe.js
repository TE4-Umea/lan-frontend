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
            askPermission().then(function(){
                subscribeUserToPush().then(function(value){
                    storePushSubscription(value, $axios);
                });
            });
            //storePushSubscription(something, $axios);

        }

    }       
}

function askPermission() {
    return new Promise(function(resolve, reject) {
        const permissionResult = Notification.requestPermission().then(function(result) {
            resolve(result);
        });
  
        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    })
    .then(function(permissionResult) {
        if (permissionResult !== 'granted') {
            throw new Error('We weren\'t granted permission.');
        }
        // if (permissionResult == 'granted') {
        //      var pushSubscription = subscribeUserToPush();
        //     console.log(pushSubscription)
        //      //storePushSubscription(pushSubscription);
        // }
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
  function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function storePushSubscription(pushSubscription, $axios) {
    console.log(pushSubscription)

    $axios.post('/push-notification/subscribe', pushSubscription)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });
}