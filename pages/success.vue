<template>
    <center-wrapper>
        <div>
        <img src="~/assets/icons/checkmark.svg" class="image" alt="Dropdown">
        <h1> Här var det tomt! </h1>
        <p> För nuvarande finns det inget event. Kolla tillbaka senare! </p>
        </div>
    </center-wrapper>

</template>
<script>
    import CenterWrapper from '~/components/CenterWrapper.vue';

    export default {
    components: {
        CenterWrapper
        }
    }
</script>

<style lang="scss" scoped>

.image {
  height: 400px;
  width: 400px;
}
</style>

