<template>
    <center-wrapper >
        <div>
            <image-layout
                icon="checkmark.svg"
                alt="Lyckades!"
                title="Lyckades!"
                paragraph=""
            >
            <p class="d-inline ">
            Du är anmäld till lanet som</p>
            <p class="d-inline font-weight-bold" v-text="account_type_str" />
            <p class="d-inline"> mellan </p>
            <p class="d-inline font-weight-bold">{{betweenDates}}</p>
            <p class="d-inline">, lanet börjar </p>
            <p class="d-inline font-weight-bold">{{ 'kl ' + opensAt}}</p>


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
import ActionButton from '~/components/buttons/ActionButton'
export default {
    middleware: [
        'registration/none',
        'registration/checked-in',

    ],
    components: {
        CenterWrapper,
        ImageLayout,
        ActionButton
    },
    data() {
        return {
            modal: undefined,
        }
    },
    methods: {
        openTicket() {
            this.modal = this.$modal.show(TicketModal, {}, {
                draggable: true,
                resizable: false,
                width: '90%',
                height: 'auto',
                maxWidth: 350,
                maxHeight: 500,
                adaptive: true,
            });
        },
        closeTicket() {
            this.$emit('close');
            // this.$modal.close(TicketModal);
        },
        formatDate(d) {
            return new Date(d).toLocaleDateString('sv-SE');
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
            return new Date(this.$store.state.event.details.start_date).toLocaleTimeString('sv-SE',{hour: '2-digit', minute:'2-digit'});
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

