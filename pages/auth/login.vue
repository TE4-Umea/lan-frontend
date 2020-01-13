<template>
<center-wrapper>
    <wrapper title="Inloggning"> 
        <div class="form">

            <input-field 
                :tabIndex="1"
                title="E-post" 
                type="email" 
                placeholder="john.doe@example.com"

            />
            <input-field
                :tabIndex="1"
                title="Lösenord" 
                type="password"
                placeholder="********"
                
            />
        </div>
        <div class="">
            <p>Har du ingen användare?

                <nuxt-link class="underline" tabindex=2 to="/auth/register">
                    Registrera dig.
                </nuxt-link>
            </p>
            <action-button
                tabIndex="1"
                @onAction="onClick" 
                icon="meeting_room" 
                title="Logga in" 
                primary="true"
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
import InputField from '~/components/login/InputField.vue';
import ActionButton from '~/components/buttons/ActionButton.vue';

export default {
    components: {
        LoginForm,
        SocialLogin,
        Wrapper,
        CenterWrapper,
        InputField,
        ActionButton
    },
    methods: {
        onClick() {
            console.log("click");
        }
    }
}
</script>

<style lang="scss" scoped>


.form {
    margin-top: 53px;
    padding-bottom: 75px;
}
</style>