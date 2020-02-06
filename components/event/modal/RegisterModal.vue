<template>
    <div>
        <div class="shadow" :class="{'fadein': showRegister}" @click="close"/>
        <div class="loading-wrapper" v-if="sending && showRegister">
            <b-spinner class="loading-spinner loader my-5" variant="light" label="Spinning"></b-spinner>
        </div>
        
        <div class="main bg-color--background register-event" :class="{'slideup': showRegister && !sending}">
            <div class="py-4 d-flex justify-content-center">
                <div>
                    <h1>ANMÄLAN</h1>
                    <input-field
                        title="Gruppkod"
                        placeholder="Jörgens änglar"
                        v-model="form.group_code"
                        minlength="3"
                        maxlength="24"
                    />
                    <input-field
                        v-if="!$auth.user.student"
                        title="Ansvarig elev"
                        placeholder="Anders jörgensson"
                        v-model="form.guardian"
                        minlength="3"
                        maxlength="24"
                        required
                    />

                    <input-select
                        v-model="form.setup_type"
                        title="Platstyp"
                        :options="['Stationär', 'Laptop', 'Ingen']"
                    />
                    <small>Härmed har jag läst och förstått <small class="clickable underline" @click="$emit('openRules')">reglerna.</small></small>
                    
                    <action-button
                        class="mt-1"
                        primary="true"
                        title="ANMÄL"
                        icon="done"
                        @onAction="onSubmit"
                        :disabled="!valid  && !sending"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from '~/components/buttons/ActionButton.vue';
import InputField from '~/components/form/InputField.vue';
import InputSelect from '~/components/form/InputSelect.vue';

export default {
    props: {
        showRegister: {
            default: false,
        }
    },
    data() {
        return {
            sending: false,
            form: {
                group_code: '',
                guardian: '',
                setup_type: 'Stationär'
            },
            valid: false,
        }
    },
    methods: {
        close() {
            if(!this.sending)
                this.$emit('close');
        },
        onSubmit() {
            if (!this.sending) {
                this.sending = true;
                this.$axios.post(
                    '/event/register',
                    {
                        event_id: this.$store.state.event.details.id,
                        ...this.form
                    }
                ).then(async res => {
                    await this.$store.commit('event/SET_REGISTRATION', res.data.data);
                    this.$snack.success({
                      text: "Du är registrerad!",
                      button: "Stäng",
                    });
                    this.$router.push({
                        path: '/event/ticket'
                    });
                }).catch(err => {
                    this.$snack.danger({
                      text: "Något gick fel!",
                      button: "Stäng",
                    })
                });
                this.sending = false;
            }
        }
    },
    watch: {
        form: {
            handler(oldVal, newVal) {
                if(!this.$auth.user.student) {
                    this.valid = this.form.guardian.length >= 3 && this.form.setup_type.length >= 3;
                } else {
                    this.valid = this.form.setup_type.length >= 3;
                }
            },
            deep: true
        }
    },
    components: {
        ActionButton,
        InputField,
        InputSelect
    },
}
</script>

<style lang="scss" scoped>

.loading-spinner {
    width: 3rem; 
    height: 3rem;
}

.loading-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.fadein {
  opacity: 1;
  visibility: visible;
}

.main {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
}

.register-event {
  position: fixed;
  left: 0;
  bottom: -100%;
  transition: all 0.3s;

  &.slideup {
    bottom: 0;
  }

}



</style>
