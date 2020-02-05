<template>
    <center-wrapper>
    <div>
      <image-layout
      icon="none"
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
  head () {
      return {
      titleTemplate: 'Inga event %s',
      }
  },
  middleware: [
      'auth',
      // 'event/exists'
  ],
  components: {
      CenterWrapper,
      ImageLayout
  }
}
</script>

<style lang="scss" scoped>

</style>
