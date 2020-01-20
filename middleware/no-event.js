export default function({ $auth, redirect }) {
    if ($auth.$state.event == undefined) {
        return redirect('/event/none');
    }
}