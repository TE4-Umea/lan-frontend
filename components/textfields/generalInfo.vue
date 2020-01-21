<template>
    <div class="notification my-2 p-2 bg-color--background">
        <h4> Information kring lanet </h4>
        <p class="mb-0" v-text="$store.state.event.details.short_info"/>
    </div>

</template>

<script>
export default {
  components: {

  }

}
</script>

<style lang="scss" scoped>
    p {
        font-size: 16px;
    }

</style>
