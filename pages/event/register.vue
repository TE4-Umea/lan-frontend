<template>
<center-wrapper>
    <wrapper title="NU ÄR DET DAGS FÖR LAN!">
        <div>
            <p>Nu är det dags för lan! För externer (icke elever) kostar det 50kr</p>
            <important title="Lanet öppnar: ">16:30</important>
            <important title="När:">2019-12-12 - 2020-01-01</important>
            <important title="Anmälan stänger:">2019-12-10 14:05</important>
            <div>
                <h3>Innan du anmäler dig</h3>
                <p class="d-inline">Se till att du läser </p>
                <p class="d-inline clickable underline" @click="openRulesModal">lanets regler</p>
                <p class="d-inline">innan du anmäler dig, reglerna går även att läsa efter du anmält dig.</p>
            </div>
            <action-button class="mt-3" title="TILL ANMÄLAN" @onAction="showRegister=true"></action-button>
        </div>
    </wrapper>
    <register-modal :class="{'d-none': !showRegister}"  @openRules="openRulesModal" @close="showRegister=false"/>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>