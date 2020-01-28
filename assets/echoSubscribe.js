export default function subscribe($auth, $echo, store, $router, $snack) {
    if ($auth.loggedIn) {
        hookProviderHeader($echo);

        $echo.channel('public')
            .listen('NewEventPublished', e => {
                store.commit("event/SET", e.event);
                $router.push({ path: "/event/"});
        });
        $echo.private('User.' + $auth.user.id)
            .listen('RegistrationUpdated', e => {
                store.commit("event/SET_REGISTRATION", e.registration);
                $router.push({ path: "/event/"});
        });
        $echo.private('Event.' + store.state.event.details.id)
            .listen('NotificationCreated', e => {
                store.commit("event/ADD_NOTIFICATION", e.notification);
                // this.$snack.success({
                //   text: e.notification.title + "\n" + e.notification.body,
                //   button: 'stäng',
                // });
        });
    }
}
function hookProviderHeader($echo) {
    let provider = localStorage.getItem('provider');
    if(provider) {
        $echo.connector.pusher.config.auth.headers['provider'] = provider;
        $echo.connector.pusher.config.auth.headers['Accept'] = 'application/json';
    }
}
