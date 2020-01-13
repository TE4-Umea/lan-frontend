<template>
<div>
  <img :src="url" alt="" class="icon">
  <h1 v-text="title"/>
  <p v-text="paragraph"/>
  <slot/>
</div>


</template>

<script>

  export default {
    props: {
      icon: String,
      title: String,
      paragraph: String,
    },
    computed: {
      url() {
        return require('~/assets/images/' + this.icon);
      }
    }
  }
</script>

<style lang="scss" scoped>
.icon {
  height: 400px;
  width: 400px;
}

</style>
