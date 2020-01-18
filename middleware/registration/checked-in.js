export default function({store, redirect }) {
    if (store.state.event.registration.checked_in == 1) {
        return redirect('/event/');
    }
}