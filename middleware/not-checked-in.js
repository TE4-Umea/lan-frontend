export default function({ $auth, redirect }) {
    if (!$auth.$state.registration.checked_in) {
        return redirect('/event/ticket');
    }
}