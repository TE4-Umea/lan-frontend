<template>
    
<div>
    <b-dropdown text="dark" size="lg" right variant="link" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content class="">
            <i class="material-icons primary-color">more_vert</i>
        </template>
        <b-dropdown-item v-if="!$store.state.darkmode.value" @click="toggleDarkmode()">
           Toggle darkmode
        </b-dropdown-item>
        <b-dropdown-item v-else @click="toggleDarkmode()">
           Toggle Lightmode
        </b-dropdown-item>
        
        <b-dropdown-item v-if="$auth.loggedIn && $auth.user.admin">
            <nuxt-link
            to="/admin"
            class="w-100"
            >
                Admin
            </nuxt-link>
        </b-dropdown-item>
        
        <b-dropdown-item v-if="$auth.loggedIn" @click="authLogout()">Logga ut</b-dropdown-item>
    </b-dropdown>
</div>
</template>

<script>
export default {
    methods: {
        async authLogout() {
            localStorage.removeItem('provider');
            await this.$auth.logout();
            this.$router.push({ path: "/"});
        },
        toggleDarkmode() {
            this.$store.commit('darkmode/toggle');
        }
    },
}
</script>
<style lang="scss" scoped>
    a,a:hover {
        color: inherit;
        text-decoration: none;
    }
    i {
        font-size: 25px;
    }
</style>