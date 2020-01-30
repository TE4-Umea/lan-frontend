<template>
    <div class="container">
        <div class="loader"></div>
        <p>Please wait while we're logging you in...</p>
    </div>
</template>

<script>
import { subscribe } from '~/assets/echoSubscribe';
export default {
    middleware: ['guest'],
    data() {
        return {
            token: this.$route.query.token ? this.$route.query.token : null,
            provider: this.$route.query.provider ? this.$route.query.provider : null
        }
    },
    async mounted()  {
        if(this.provider){
            localStorage.setItem("provider", this.provider);
        }
        this.$auth.setUserToken(this.token)
        .then(async res => {
            
            await this.$store.dispatch('event/GET');
            await this.$store.dispatch('event/GET_REGISTRATION');
            subscribe(this.$auth, this.$echo, this.$store, this.$router, this.$snack);
            this.$router.push({ path: "/event/"});
        }).catch(e => {
            console.log(e, "login error");
        })
    }
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
}
</style>
