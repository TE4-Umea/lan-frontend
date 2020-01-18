export default function({store, redirect }) {
    if (store.state.event.registration == undefined) {
        return redirect('/event/register');
    }
}