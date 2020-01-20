export default function({store, $auth, redirect }) {
    console.log(store.state.event)
    if (store.state.event) {
        let user = $auth.$state.user;

        if((user && user.admin)) {
            return redirect('/admin/event/checkin');
        }
        return redirect('/event/');
    }
}