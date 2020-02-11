<template>
<center-wrapper>
    <wrapper title="Registrera dig">
        <div :class="{ 'd-none': lastStep }" >
            <div class="form">
                <input-field
                    class="form--short"
                    :tabIndex="1"
                    title="Fullständigt namn"
                    type="fullname"
                    placeholder="John doe"
                    v-model="form.name"
                    name="name"
                    minlength="3"
                    maxlength="64"
                    @onAction="onSubmit"
                />
                <input-field
                    :tabIndex="1"
                    title="E-post"
                    type="email"
                    placeholder="john.doe@example.com"
                    v-model="form.email"
                    name="email"
                    minlength="8"
                    maxlength="64"
                    @onAction="onSubmit"
                />
            </div>
            <div class="">
                <action-button
                    tabIndex="1"
                    @onAction="next"
                    title="Nästa"
                    :disabled="!valid && !sending"
                />
            </div>
        </div>
        <div :class="{ 'd-none': !lastStep }">
            <small>Namn: {{form.name}}</small><br>
            <small>E-post: {{ form.email }}</small><br>
            <small @click="previous" class="clickable underline">Redigera</small>
            <div class="form">
                <input-field
                    :tabIndex="1"
                    title="Lösenord"
                    type="password"
                    placeholder=""
                    v-model="form.password"
                    name="password"
                    minlength="8"
                    maxlength="128"
                    @onAction="onSubmit"
                />
                <input-field
                    :tabIndex="1"
                    title="Bekräfta lösenord"
                    type="password"
                    placeholder=""
                    v-model="form.password_confirmation"
                    name="password_confirm"
                    minlength="8"
                    maxlength="128"
                    @onAction="onSubmit"
                />
            </div>
            <div class="">
                <action-button
                    tabIndex="1"
                    @onAction="onSubmit"
                    title="REGISTRERA DIG"
                    icon="meeting_room"
                    primary="true"
                    :disabled="!passwordvalid  && !sending"
                    :loading="sending"
                />
            </div>
        </div>
    </wrapper>
</center-wrapper>
</template>

<script>
import Wrapper from '~/components/layouts/positioning/Wrapper';
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
import InputField from '~/components/form/InputField.vue';
import ActionButton from '~/components/buttons/ActionButton.vue';
import { login } from '~/assets/login';

export default {
    head() {
        return {
            titleTemplate: 'Registrera dig %s',
        }
    },
    data() {
        return {
            lastStep: false,
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            sending: false,
            valid: false,
            passwordvalid: false,
        }
    },
    methods: {
        next() {
            this.lastStep = true;
        },
        previous() {
            this.lastStep = false;
        },
        onSubmit() {
            if(!this.valid) return;
            this.sending = true;
            this.$axios.post('/auth/register', this.form)
                .then(res => {
                    login(this, this.form);
                    this.sending = false;
                }).catch(err => {
                    console.log(err);
                    this.$snack.danger({
                      text: err,

                    })
                    this.sending = false;
                });
        }
    },
    watch: {
        form: {
            handler(oldVal, newVal) {
                this.valid =
                newVal.email.length >= 8 &&
                newVal.name.length >= 3;

                this.passwordvalid =
                newVal.password.length >=8 &&
                newVal.password_confirmation.length >=8;

            },
        deep: true
        }
    },
    components: {
        Wrapper,
        CenterWrapper,
        InputField,
        ActionButton
    },
}
</script>

<style lang="scss" scoped>
.form--short {
    max-width: 160px;
}
.form {
    margin-top: 53px;
    padding-bottom: 75px;
}
</style>
