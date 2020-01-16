export default ({$auth, store}) => {
    if (!$auth.loggedIn) {
        return
    }
    store.dispatch('GET_EVENT');
}