<template>
  <div>
    <notification v-for="(row, i) in data" :key="i" :data="row"/>
  </div>
</template>

<script>
import Notification from '~/components/notifications/Notification'
export default {

  data() {
    return {
      data:
       [
        {
          title: 'Öppen Registrering',
          body: 'Lagsregistreringen för CS:GO turneringen är öppen gå till entren för att anmäla erat lag',
          created_at: 1579607002000
        },
        {
          title: 'Öppen Registrering',
          body: 'Lagsregistreringen för CS:GO turneringen är öppen gå till entren för att anmäla erat lag',
          created_at: 1579520602000
        },
        {
          title: 'Öppen Registrering',
          body: 'Lagsregistreringen för CS:GO turneringen är öppen gå till entren för att anmäla erat lag',
          created_at: 1579599802000
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
