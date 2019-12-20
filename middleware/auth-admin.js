function strToBool(string) {
    switch(string.toLowerCase().trim()){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
    }
}
export default async function({$auth, redirect, store}) {
    let user = $auth.$state.user
    if(user && strToBool(user.admin)) {

    } else {
        // store.dispatch('snackbar/setSnackbar', {color: 'error', text: 'You must be a admin to view this page'})
        redirect('/');
    }
}