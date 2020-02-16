<template>
    <center-wrapper >
        <div>
            <image-layout
                icon="success"
                alt="Lyckades!"
                title="Lyckades!"
                paragraph=""
            >
            <p class="d-inline ">
            Du är anmäld till lanet som</p>
            <p class="d-inline font-weight-bold" v-text="account_type_str" />
            <p class="d-inline"> mellan </p>
            <p class="d-inline font-weight-bold">{{betweenDates + ','}}</p>
            <p class="d-inline"> lanet börjar </p>
            <p class="d-inline font-weight-bold">{{ 'kl ' + opensAt + '.'}}</p>
            <p class="d-inline">här har du </p>
            <p class="d-inline clickable underline" @click="openRulesModal">lanets regler och info</p>

            </image-layout>
            <div class="pt-4 d-flex justify-content-center">
                <action-button
                    title="Din biljett"
                    icon="local_play"
                    primary="true"
                    @onAction="openTicket"
                />

            </div>
        </div>
    <modals-container/>
    </center-wrapper>

</template>
<script>
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
import ImageLayout from '~/components/layouts/ImageLayout';
import TicketModal from '../../components/event/modal/TicketModal.vue';
import ActionButton from '~/components/buttons/ActionButton';
import RulesModal from '~/components/event/modal/RulesModal.vue';

export default {
    head() {
        return {
            titleTemplate: 'Biljett %s',
        }
    },
    middleware: [
        'registration/none',
        'registration/checked-in',

    ],
    components: {
        CenterWrapper,
        ImageLayout,
        ActionButton
    },
    methods: {
        openTicket() {
            this.modal = this.$modal.show(TicketModal, {}, {
                draggable: false,
                resizable: false,
                width: '90%',
                height: 'auto',
                maxWidth: 350,
                maxHeight: 500,
                adaptive: true,
            });
        },
        openRulesModal() {
            this.$modal.show(RulesModal, {}, {
                draggable: false,
                resizable: false,
                width: '90%',
                height: 'auto',
                adaptive: false,
            });
        },
        closeTicket() {
            this.$emit('close');
        },
        formatDate(d) {
            return (new Date(d.replace(/ /g, 'T') + 'Z')).toLocaleDateString('sv-SE');
        }
    },
    computed: {
        account_type_str() {
            return this.$auth.$state.user.student ? 'Elev' : 'Extern' ;
        },
        name() {
            return this.$auth.$state.user.name;
        },
        opensAt() {
            return new Date(this.$store.state.event.details.start_date.replace(/ /g, 'T') + 'Z').toLocaleTimeString('sv-SE', { hour: '2-digit', minute:'2-digit' });
        },
        betweenDates() {
            return this.formatDate(this.$store.state.event.details.start_date) +
                " - " + this.formatDate(this.$store.state.event.details.end_date);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>

