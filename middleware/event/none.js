export default function({store, $auth, redirect }) {
    if (store.state.event == undefined) {
        let user = $auth.$state.user;

        if((user && user.admin)) {
            return redirect('/admin/event/create');
        }
        return redirect('/event/none');
    }
}