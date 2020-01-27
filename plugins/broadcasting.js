import subscribe from '~/assets/echoSubscribe';
export default function ({app}) {
    subscribe(app.$auth, app.$echo, app.store, app.router);
}
