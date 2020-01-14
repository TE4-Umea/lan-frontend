<template>
    <center-wrapper >
        <div>
        <image-layout
            icon="checkmark.svg"
            alt="Du är nu anmäld!"
            title="Du är nu anmäld!"
            paragraph="Kolla din mail för att kunna logga in!"
        />
        </div>
    </center-wrapper>

</template>
<script>
    import CenterWrapper from '~/components/CenterWrapper.vue';
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

