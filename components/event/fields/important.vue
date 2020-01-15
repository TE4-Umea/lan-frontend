<template>
  <div class="d-flex">
      <p v-text="title" class="my-1 mr-2"/>
      <p class="font-weight-bold my-1 ">
          <slot/>
      </p>
  </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style>

</style>