<template>
  <div >
      <p v-text="title" class="d-inline my-1 mr-2"/>
      <p class="d-inline font-weight-bold my-1 ">
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