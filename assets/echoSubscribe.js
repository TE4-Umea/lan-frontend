function eventSubScribe($echo, store, $snack) {
    $echo.private('Event.' + store.state.event.details.id)
        .listen('NotificationCreated', e => {
            store.commit("event/ADD_NOTIFICATION", e.notification);
            $snack.success({
                text: 'Notis: ' + e.notification.title + ', ' + e.notification.body
            });   
        });
}
function eventUnsubScribe($echo, store) {
    $echo.private('Event.' + store.state.event.details.id)
        .stopListening('NotificationCreated');
}
function subscribe($auth, $echo, store, $router, $snack) {
    if ($auth.loggedIn) {
        hookProviderHeader($echo);
        $echo.channel('public')
            .listen('NewEventPublished', e => {
                store.commit("event/SET", e.event);
                $router.push({ path: "/event/"});
                $snack.success({
                    text: 'Det har nu publicerats ett nytt event',
                    button: 'Okej'
                });
                eventSubScribe($echo, store, $snack);
            })
            .listen('EventDeleted', () => {
                eventUnsubScribe($echo, store);
                
                store.commit("event/SET", undefined);
                store.commit("event/SET_REGISTRATION", undefined);
                store.commit("event/SET_NOTIFICATIONS", []);
                $router.push({ path: "/event/"});
                $snack.success({
                    text: 'Lanet är nu över, Tack för att du närvarade!',
                    button: 'Okej'
                });
            });
        $echo.private('User.' + $auth.user.id)
            .listen('RegistrationUpdated', e => {
                const oldRegistration = store.state.event.registration;
                store.commit("event/SET_REGISTRATION", e.registration);
                if(!oldRegistration.checked_in && e.registration.checked_in) {
                    $snack.success({
                        text: 'Välkommen till lanet! du är nu inchekad!',
                        button: 'Okej'
                    });
                    $router.push({ path: "/event/"});
                }
        });
        if(store.state.event.details) {
            eventSubScribe($echo, store, $snack);
        }
    }    
}
function hookProviderHeader($echo) {
    let provider = localStorage.getItem('provider');
    if(provider) {
        $echo.connector.pusher.config.auth.headers['provider'] = provider;
        $echo.connector.pusher.config.auth.headers['Accept'] = 'application/json';
    }
}
export {
    eventSubScribe,
    subscribe
};
