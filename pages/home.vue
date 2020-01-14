<template>
    <center-wrapper >
        <div class="text-center">
            <image-layout
                icon="nti_small_black.svg"
                alt="Bild på NTIs logga, Välkommen!"
                title="Välkommen!"
                paragraph="Logga in nedan för att komma vidare i appen."
            />

            <button type="button" class="google" href="#">Log in with google</button>
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

.google {
    width: 343px;
    height: 59px;

    background: #FFFFFF;
    /* Shadow-button */
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

</style>

