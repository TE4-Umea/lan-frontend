<template>
<div class="w-100">
    <div v-if="$store.state.event.notifications == undefined">
        <h4>Laddar..</h4>
        <div class="spinner" />
    </div>
    <notification v-else v-for="(row, i) in $store.state.event.notifications" :key="i" :data="row"/>
</div>
</template>

<script>
import Notification from '~/components/notifications/Notification';
export default {
  mounted() {
        if(this.$store.state.event.notifications == undefined) {
            this.$store.dispatch('event/GET_NOTIFICATIONS');
        }
  },
  components: {
      Notification,
  }
}

</script>

<style>

</style>
