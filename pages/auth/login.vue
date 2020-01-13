<template>
    <center-wrapper>

        <wrapper title="Inloggning"> 

            <h1>test</h1>
        </wrapper>
    </center-wrapper>
        <!-- <social-login /> -->
        <!-- <login-form></login-form> -->
</template>

<script>

import LoginForm from '~/components/LoginForm.vue';
import SocialLogin from '~/components/SocialLogin';
import Wrapper from '~/components/login/Wrapper.vue';
import CenterWrapper from '~/components/CenterWrapper.vue';
import ActionButton from '~/components/buttons/Button.vue';

export default {
    components: {
        LoginForm,
        SocialLogin,
        Wrapper,
        ActionButton,
        CenterWrapper
    }
}
</script>

<style>

</style>