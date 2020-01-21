export default async ({$auth, store})  => {
    if ($auth.loggedIn) {
        await store.dispatch('event/GET');
        await store.dispatch('event/GET_REGISTRATION');
    }
}
