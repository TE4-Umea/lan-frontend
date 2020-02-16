import { subscribe } from '~/assets/echoSubscribe';

export function login(self, form) {
    
    self.$auth.loginWith('local', {
        data: form
    }).then(async res => {
        await postLogin(self);
    }).catch(err => {
        self.$snack.danger({
            text: "Fel användarnamn / Lösenord.",
            button: "Stäng",
        });
        self.$router.push({ path: "/"});
    });
}

export function loginProvider(self, provider, token, refreshToken) {
    if(provider){
        localStorage.setItem("provider", provider);
    }
    localStorage.setItem("refreshToken", refreshToken);
    
    self.$auth.setUserToken(token)
        .then(async res => {
            await postLogin(self);
        }).catch(e => {
            console.log(e, "login error");
            self.$snack.danger({
                text: 'Något gick fel!',    
            });
            self.$router.push({ path: "/"});
        });
}

export async function logout(self) {
    localStorage.removeItem('provider');
    await self.$auth.logout();
    self.$router.push({ path: "/"});
    self.$store.commit('event/SET_REGISTRATION', undefined);
    self.$store.commit('event/SET_NOTIFICATIONS', []);
}

async function postLogin(self) {
    await self.$store.dispatch('event/GET');
    await self.$store.dispatch('event/GET_REGISTRATION');
    
    subscribe(self.$auth, self.$echo, self.$store, self.$router, self.$snack);
    
    self.$router.push({ path: "/event/"});
}
