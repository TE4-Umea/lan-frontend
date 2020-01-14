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
                    id="name"
                />
                <input-field 
                    :tabIndex="1"
                    title="E-post" 
                    type="email" 
                    placeholder="john.doe@example.com"
                    v-model="form.email"
                    name="email"
                    id="email"
                />
            </div>
            <div class="">
                <action-button
                    tabIndex="1"
                    @onAction="next"  
                    title="Nästa"
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
                    id="password"
                />
                <input-field
                    :tabIndex="1"
                    title="Bekräfta lösenord" 
                    type="password"
                    placeholder=""
                    v-model="form.password_confirmation"
                    name="password_confirm"
                    id="password_confirm"
                />
            </div>
            <div class="">
                <action-button
                    tabIndex="1"
                    @onAction="onSubmit"
                    title="REGISTRERA DIG"
                    icon="meeting_room"
                    primary="true"
                />
            </div>
        </div> 
    </wrapper>
</center-wrapper>
</template>

<script>
import Wrapper from '~/components/login/Wrapper.vue';
import CenterWrapper from '~/components/CenterWrapper.vue';
import InputField from '~/components/login/InputField.vue';
import ActionButton from '~/components/buttons/ActionButton.vue';

export default {
    data() {
        return {
            lastStep: false,
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
        }
    },
    methods: {
        next() {
            this.lastStep = true;
        },
        previous() {
            this.lastStep = false;
        },
        onSubmit(evt) {
            evt.preventDefault();
            this.$axios.post('/auth/register', this.form).then(res => {
                this.$auth.loginWith('local', {
                    data: this.form
                });
            });
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