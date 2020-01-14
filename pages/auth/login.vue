<template>
<center-wrapper>
    <wrapper title="Inloggning"> 
        <div class="form">

            <input-field 
                :tabIndex="1"
                title="E-post" 
                type="email" 
                placeholder="john.doe@example.com"
                v-model="form.email"

            />
            <input-field
                :tabIndex="1"
                title="Lösenord" 
                type="password"
                placeholder="********"
                v-model="form.password"
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
                @onAction="onSubmit" 
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
import Wrapper from '~/components/login/Wrapper.vue';
import CenterWrapper from '~/components/CenterWrapper.vue';
import InputField from '~/components/login/InputField.vue';
import ActionButton from '~/components/buttons/ActionButton.vue';

export default {
    components: {
        Wrapper,
        CenterWrapper,
        InputField,
        ActionButton
    },
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit(evt) {
            if(!(this.form.email.length > 0 && this.form.password.length > 0)) {
                return;
            }
            
            this.$auth.loginWith('local', {
                data: this.form
            }).then(res => {

                this.$router.push('/');
                // console.log("this happens");
            });
            // this.$store.dispatch('snackbar/setSnackbar', {text: `Thanks for signing in, ${this.$auth.user.name}`});
      },
    }
}
</script>

<style lang="scss" scoped>


.form {
    margin-top: 53px;
    padding-bottom: 75px;
}
</style>