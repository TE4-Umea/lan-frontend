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
                <p class="d-inline clickable underline">lanets regler</p>
                <p class="d-inline">innan du anmäler dig, reglerna går även att läsa efter du anmält dig.</p>
            </div>
            <action-button title="TILL ANMÄLAN"></action-button>
        </div>
    </wrapper>
</center-wrapper>
</template>

<script>
import Wrapper from '~/components/layouts/positioning/Wrapper.vue';
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper.vue';
import InputField from '~/components/login/InputField.vue';
import Important from '~/components/event/fields/important';
import ActionButton from '~/components/buttons/ActionButton.vue';

export default {
    components: {
        Wrapper,
        CenterWrapper,
        InputField,
        ActionButton,
        Important
    },
}
</script>

<style>

</style>