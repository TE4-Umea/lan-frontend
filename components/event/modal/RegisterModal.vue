<template>
    <div>
        <div class="shadow" :class="{'fadein': showRegister}" @click="$emit('close')"/>
        <div class="main bg-color--background register-event" :class="{'slideup': showRegister}">
            <div class="py-4 d-flex justify-content-center">
                <div>
                    <h1>ANMÄLAN</h1>
                    <input-field
                        title="Gruppkod"
                        v-model="form.group_code"
                    />

                    <input-select
                        v-model="form.setup_type"
                        title="Platstyp"
                        :options="['Stationär', 'Laptop', 'Ingen']"
                    />
                    <small>Härmed har jag läst och förstått <small class="clickable underline" @click="$emit('openRules')">reglerna.</small></small>
                    <action-button
                        primary="true"
                        title="ANMÄL"
                        icon="done"
                        @onAction="onSubmit"
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
            form: {
                group_code: '',
                setup_type: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$axios.post(
                '/event/register',
                {
                    event_id: this.$store.event.rules_id,
                    ...this.form
                }
            );
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
