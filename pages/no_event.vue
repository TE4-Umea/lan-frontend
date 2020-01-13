<template>
    <center-wrapper>
    <div>
      <image-layout
      icon="404_image.svg"
      title="Här var det tomt!"
      paragraph="För nuvarande finns det inget event. Kolla tillbaka senare!"
      />
        <!-- <img src="~/assets/icons/404_image.svg" class="logo" alt="Dropdown">
        <h1> Här var det tomt! </h1>
        <p> För nuvarande finns det inget event. Kolla tillbaka senare! </p> -->
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
