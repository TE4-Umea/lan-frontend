<template>
    <center-wrapper >
        <div>
        <image-layout
            icon="checkmark.svg"
            title="Success!"
            paragraph="This was a success!"
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

