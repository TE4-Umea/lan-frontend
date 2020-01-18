export default function({store, redirect }) {
    
    console.log("this happens", store.state.event.registration)
    if (store.state.event.registration == undefined) {
        return redirect('/event/register');
    }
}