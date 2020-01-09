<template>
    <div>
        <social-login />
        <login-form></login-form>
    </div>
</template>

<script>

import LoginForm from '~/components/LoginForm.vue';
import SocialLogin from '~/components/SocialLogin';

export default {
    components: {
        LoginForm,
        SocialLogin
    }
}
</script>

<style>

</style>