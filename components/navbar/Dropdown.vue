<template>
    
<div>
    <b-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content>
            <img src="~/assets/icons/verical_dot.svg" class="dropdown" alt="Dropdown" >
        </template>
        <b-dropdown-item v-if="!darkmode" @click="toggleDarkmode()">
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
    data() {
        return {
            darkmode: localStorage.getItem("darkmode"),
        }
    },
    methods: {
        authLogout() {
            localStorage.removeItem('provider');
            this.$auth.logout();
        },
        toggleDarkmode() {
            //TODO: Darkmode toggle is W.I.P and does not work. And will most likely have to change its persistent storage method.
            if(this.darkmode == null ) {
                localStorage.setItem('darkmode', true);
                this.darkmode = true;  
            } else {
                this.darkmode = !this.darkmode;
                localStorage.setItem('darkmode', this.darkmode);
            }
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