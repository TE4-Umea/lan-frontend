<template>
<center-wrapper>
    <wrapper title="NU ÄR DET DAGS FÖR LAN!"> 
    <p>Nu är det dags för lan!
        För externer (icke elever) kostar det 50kr
        Lanet öppnar 16:30
        När: 2019-12-12 - 2020-01-01
        Anmälan stänger 2019-12-10 14:05
    </p>

    </wrapper>
</center-wrapper>
</template>

<script>
import Wrapper from '~/components/layouts/positioning/Wrapper.vue';
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper.vue';
import InputField from '~/components/login/InputField.vue';
import ActionButton from '~/components/buttons/ActionButton.vue';

export default {
    components: {
        Wrapper,
        CenterWrapper,
        InputField,
        ActionButton
    },
}
</script>

<style>

</style>