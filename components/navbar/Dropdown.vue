<template>
    
<div>
    <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content>
            <img src="~/assets/icons/verical_dot.svg" class="dropdown" alt="Dropdown" >
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
        authLogout() {
            localStorage.removeItem('provider');
            this.$auth.logout();
        },
        toggleDarkmode() {
            this.$store.commit('darkmode/toggle');
        }
    },
}
</script>
<style lang="scss" scoped>
    a {
        color: black;
        text-decoration: unset;
    }
    .dropdown {
        cursor: pointer;
    }
</style>