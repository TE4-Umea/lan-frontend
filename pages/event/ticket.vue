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
            Du är anmäld till lanet som elev mellan <p class="d-inline font-weight-bold">2019-12-12 - 2020-01-01</p>, lanet börjar <p class="d-inline font-weight-bold">kl 16:30</p>
        </p>
        </image-layout>
        
        </div>
    </center-wrapper>

</template>
<script>
    import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
    import ImageLayout from '~/components/layouts/ImageLayout'
    export default {
    components: {
            CenterWrapper,
            ImageLayout
        }
    }
</script>

<style lang="scss" scoped>

</style>

