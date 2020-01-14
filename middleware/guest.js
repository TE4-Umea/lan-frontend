export default function({ $auth, redirect }) {
    if ($auth.$state.user) {
        return redirect('/event/');
    }
}