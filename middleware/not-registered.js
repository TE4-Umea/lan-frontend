export default function({ $auth, redirect }) {
    if ($auth.$state.registration == undefined) {
        return redirect('/event/register');
    }
}