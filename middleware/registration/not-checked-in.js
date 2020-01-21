export default function({store, redirect }) {
    if (store.state.event.registration.checked_in == 0) {
        return redirect('/event/ticket');
    }
}