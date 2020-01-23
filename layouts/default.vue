<template>
  
  <div>
    <navbar />
    <nuxt />
  </div>
</template>
<script>
import Navbar from '~/components/navbar/Navbar.vue';

export default {
    components: {
      Navbar,
    },
    mounted() {
      this.$echo.channel('event')
        .listen('RegistrationChange', (e) => {
            console.log("wow holy shit this works!", e);
        });
    }
}
</script>
<style lang="scss">

</style>
