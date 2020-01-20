export default function ({$auth, $axios, redirect }) {
    // Temporary solution
    if($auth.loggedIn) {
        
        $axios.onRequest((config) => {
            if (process.browser) {
                console.log("test", $auth.getToken('local'))
                // $axios.setToken($auth.getToken('local'));
            }
        });
    }
}
