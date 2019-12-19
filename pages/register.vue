<template>
  <register-form></register-form>
</template>

<script>

import registerForm from '~/components/RegisterForm.vue';

export default {
    created() {
        if(this.$auth.loggedIn) {
            this.$router.push({
                path: '/'
            })
        }
    },
    components: {
        registerForm
    }
}
</script>

<style>

</style>