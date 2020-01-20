<template>
<center-wrapper>
    <wrapper :title="$store.state.event.details.title">
        <div>
            <p v-text="$store.state.event.details.short_info"/>
            <important title="Lanet öppnar: ">{{opensAt}}</important>
            <important title="När:">{{betweenDates}}</important>
            <important title="Anmälan stänger: ">{{closesAt}}</important>
            <div>
                <h3>Innan du anmäler dig</h3>
                <p class="d-inline">Se till att du läser </p>
                <p class="d-inline clickable underline" @click="openRulesModal">lanets regler</p>
                <p class="d-inline">innan du anmäler dig, reglerna går även att läsa efter du anmält dig.</p>
            </div>
            <action-button class="mt-3" title="TILL ANMÄLAN" @onAction="showRegister=true"></action-button>
        </div>
    </wrapper>
    <register-modal :showRegister="showRegister" @openRules="openRulesModal" @close="showRegister=false"/>
</center-wrapper>
</template>

<script>
import Wrapper from '~/components/layouts/positioning/Wrapper.vue';
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper.vue';
import InputField from '~/components/form/InputField.vue';
import Important from '~/components/event/fields/important';
import ActionButton from '~/components/buttons/ActionButton.vue';
import RulesModal from '~/components/event/modal/RulesModal.vue';
import RegisterModal from '~/components/event/modal/RegisterModal';

export default {
    middleware: [
        'event/none',
        'registration/exists'
    ],
    data() {
        return {
            showRegister: false
        }
    },
    components: {
        Wrapper,
        CenterWrapper,
        InputField,
        ActionButton,
        Important,
        RegisterModal
    },
    methods: {
        openRulesModal() {
            this.$modal.show(RulesModal, {}, {
                draggable: false,
                resizable: false,
                width: '90%',
                height: 'auto',
                adaptive: false,
            });
        },
        format_two_digits(n) {
            return n < 10 ? '0' + n : n;
        },
        formatDate(d) {
            return new Date(d).toLocaleDateString('sv-SE');
        }
    },
    computed: {
        opensAt() {
            return new Date(this.$store.state.event.details.start_date).toLocaleTimeString('sv-SE',{hour: '2-digit', minute:'2-digit'});
        },
        betweenDates() {
            return this.formatDate(this.$store.state.event.details.start_date) +
                " - " + this.formatDate(this.$store.state.event.details.end_date);
        },
        closesAt() {
            return new Date(this.$store.state.event.details.registration_closes_at).toLocaleString('sv-SE', {dateStyle: 'short', timeStyle: 'short'});
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
