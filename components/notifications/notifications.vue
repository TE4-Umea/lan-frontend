<template>
  <div>
    <notification v-for="(row, i) of data" :key="i" :data="row"/>
  </div>
</template>

<script>
import Notification from '~/components/notifications/notification'
export default {
  data() {
    return {
      data:
       [
        {
          title: 'Öppen Registrering',
          body: 'Lagsregistreringen för CS:GO turneringen är öppen gå till entren för att anmäla erat lag'
        },
      ],

    }
  },

  components: {
      Notification,
  }
}

</script>

<style>

</style>
