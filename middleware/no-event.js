export default function({ $auth, redirect }) {
    let user = $auth.$state.user;
    if((user && user.admin)) {
        return redirect('/admin/event/create');
    }
    if ($auth.$state.event == undefined) {
        return redirect('/event/none');
    }
}