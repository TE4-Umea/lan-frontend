<template>
    <div class="container ">
        <b-spinner class="loader my-5" :variant="$store.state.darkmode.value ? 'light' : 'dark'" label="Spinning"></b-spinner>
        <p>Vänligen vänta medans vi loggar in dig...</p>
    </div>
</template>

<script>
import { loginProvider } from '~/assets/login';
export default {
    head() {
        return {
            titleTemplate: 'Loggar in %s',
        }
    },
    middleware: ['guest'],
    data() {
        return {
            token: this.$route.query.token ? this.$route.query.token : null,
            provider: this.$route.query.provider ? this.$route.query.provider : null,
            refreshToken: this.$route.query.provider ? this.$route.query.refreshToken : null
        }
    },
    async mounted()  {
        loginProvider(this, this.provider, this.token, this.refreshToken);
    }
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
}
.loader {
    width: 3rem; 
    height: 3rem;
}
</style>
