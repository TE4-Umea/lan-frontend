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
                minlength="8"
                maxlength="64"
                required


            />
            <input-field
                :tabIndex="1"
                title="Lösenord"
                type="password"
                v-model="form.password"
                placeholder="********"
                minlength="8"
                maxlength="128"
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
                :disabled="!valid  && !sending"
            />
        </div>
    </wrapper>
</center-wrapper>
</template>

<script>
import Wrapper from '~/components/layouts/positioning/Wrapper.vue';
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper.vue';
import InputField from '~/components/form/InputField.vue';
import ActionButton from '~/components/buttons/ActionButton.vue';
import { login } from '~/assets/login';

export default {
    head () {
        return {
            titleTemplate: 'Logga in %s',
        }
    },
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
                password: '',
            },
            sending: false,
            valid: false,
        }
    },
    methods: {
        onSubmit(evt) {
            if(!(this.form.email.length > 0 && this.form.password.length > 0)) {
                return;
            }
            this.sending = true;
            login(this, this.form);
        },
    },
    watch: {
        form: {
            handler(oldVal, newVal) {
              this.valid = newVal.email.length >= 8 && newVal.password.length >= 8;
            },
        deep: true
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
