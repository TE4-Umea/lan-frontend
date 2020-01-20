<template>
    <div class="container">
        <div class="loader"></div>
        <p>Please wait while we're logging you in...</p>
    </div>
</template>

<script>
export default {
    middleware: ['guest'],
    data() {
        return {
            token: this.$route.query.token ? this.$route.query.token : null,
            provider: this.$route.query.provider ? this.$route.query.provider : null
        }
    },
    mounted() {
        if(this.provider){
            localStorage.setItem("provider", this.provider);
            // console.log("we got so far but we failed so bad");
        }
        this.$auth.setToken('local', 'Bearer ' + this.token);
        this.$auth.setStrategy('local');
        this.$auth.fetchUser().then(res => {}
        ).catch(e => {
            this.$auth.logout();
            localStorage.removeItem('provider');
            this.$router.push(`/`);
        });
    }
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
}
</style>
