export default async function({$auth, redirect, store}) {
    let user = $auth.$state.user;
    if(!(user && user.admin == 1)) {
        redirect('/');
    }
}