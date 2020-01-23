export default function subscribe($auth, $echo, store, $router) {
    if ($auth.loggedIn) {
        $echo.channel('public')
            .listen('NewEventPublished', (e) => {
                store.commit("event/SET", e.event);
                $router.push({ path: "/event/"});
            });
    }    
}