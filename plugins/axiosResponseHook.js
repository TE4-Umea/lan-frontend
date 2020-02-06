import { subscribe } from '~/assets/echoSubscribe';
export default function ({app}) {
    app.$axios.onResponse((config) => {
        if (process.browser) {
            if(config.headers.authorization) {
                app.$auth.setUserToken(config.headers.authorization).then(res => {
                    subscribe(app.$auth, app.$echo, app.store, app.router, app.$snack);
                });
            }
        }
    });
}
