<template>
<center-wrapper>
    <wrapper title="Registrera dig">
        <div v-if="!lastStep">
            <div class="form">
                <input-field
                    :tabIndex="1"
                    title="Fullständigt namn" 
                    type="fullname"
                    placeholder="John doe"
                    
                />
                <input-field 
                    :tabIndex="1"
                    title="E-post" 
                    type="email" 
                    placeholder="john.doe@example.com"

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
        <div v-else>
            <small>Namn: John Doe</small><br>
            <small>E-post: typo@example.com</small><br>
            <small @click="previous" class="clickable underline">Redigera</small>
            <div class="form">
                <input-field
                    :tabIndex="1"
                    title="Lösenord" 
                    type="password"
                    placeholder="************" 
                />
                <input-field
                    :tabIndex="1"
                    title="Bekräfta lösenord" 
                    type="password"
                    placeholder="************" 
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
    data() {
        return {
            lastStep: false,
        }
    },
    methods: {
        onClick() {
            console.log("click");
        },
        next() {
            this.lastStep = true;
        },
        previous() {
            this.lastStep = false;
        },
        onSubmit() {
            console.log("sending register request");
        }
    },
    components: {
        LoginForm,
        SocialLogin,
        Wrapper,
        CenterWrapper,
        InputField,
        ActionButton
    },
}
</script>

<style lang="scss" scoped>
.form {
    margin-top: 53px;
    padding-bottom: 75px;
}
</style>