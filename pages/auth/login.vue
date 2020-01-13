<template>
<center-wrapper>

    <wrapper title="Inloggning"> 
        <div class="form">

            <input-field 
                title="E-post" 
                type="email" 
                placeholder="john.doe@example.com"

            />
            <input-field 
                title="Lösenord" 
                type="password"
                placeholder="********"
                
            />
        </div>
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

<style lang="scss" scoped>
.form {
    margin-top: 53px;
}
</style>