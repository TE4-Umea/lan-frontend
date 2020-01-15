<template>
    <center-wrapper >

        <image-layout
            icon="checkmark.svg"
            alt="Lyckades!"
            title="Lyckades!"
            paragraph=""
        >
        <p class="d-inline ">
            Du är anmäld till lanet som elev mellan </p> <p class="d-inline font-weight-bold">2019-12-12 - 2020-01-01</p>, lanet börjar <p class="d-inline font-weight-bold">kl 16:30</p>
        </image-layout>
        <div class="pt-4 d-flex justify-content-center">
            <action-button
                title="Din biljett"
                icon="local_play"
                primary="true"
            />

        </div>

    </center-wrapper>

</template>
<script>
    import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
    import ImageLayout from '~/components/layouts/ImageLayout'
    import ActionButton from '~/components/buttons/ActionButton'
    export default {
    components: {
            CenterWrapper,
            ImageLayout,
            ActionButton,
        }
    }
</script>

<style lang="scss" scoped>

</style>

