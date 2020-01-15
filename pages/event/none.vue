<template>
    <center-wrapper>
    <div>
      <image-layout
      icon="404_image.svg"
      alt="Inget event hittades."
      title="Här var det tomt!"
      paragraph="För nuvarande finns det inget event. Kolla tillbaka senare!"
      />
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
