<template>
    <center-wrapper>

        <wrapper title="Inloggning"> 

            <input-field title="E-post" type="email" placeholder="john.doe@example.com"/>
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
import InputField from '~/components/login/InputField.vue';

export default {
    components: {
        LoginForm,
        SocialLogin,
        Wrapper,
        ActionButton,
        CenterWrapper,
        InputField
    }
}
</script>

<style>

</style>