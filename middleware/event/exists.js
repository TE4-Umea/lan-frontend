export default function({store, $auth, redirect }) {
    if (store.state.event.details) {
        let user = $auth.$state.user;

        if((user && user.admin)) {
            return redirect('/admin/event/checkin');
        }
        return redirect('/event/');
    }
}