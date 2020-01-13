<template>
<div>
  <img :src="url" alt="">
  <h1 v-text="title"/>
  <p v-text="paragraph"/>
  <slot/>
</div>


</template>

<script>

  export default {
    props: {
      url: String,
      title: String,
      paragraph: String
    }
  }
</script>

<style>

</style>
