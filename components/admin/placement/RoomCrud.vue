<template>
<div>

  <b-table striped hover :dark="$store.state.darkmode.value" :fields="fields" :items="$store.state.admin.placement.rooms">
        <template slot="taken">
            {{ 'value' }}
        </template>
  </b-table>
  <div class="d-flex justify-content-between">
      <b-button>Skick</b-button>
      <b-button>Owo</b-button>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            fields: [
                {key: 'id', thClass: 'd-none', tdClass: 'd-none' },
                {key: 'created_at', thClass: 'd-none', tdClass: 'd-none' },
                {key: 'updated_at', thClass: 'd-none', tdClass: 'd-none' },
                {label: 'Namn', key: 'name', sortable: true},
                {label: 'Platser max', key: 'max_capacity', sortable: true},
                {label: 'Platser kvar', key: 'taken', sortable: true},
                // {key: 'max_capacity', sortable: true},
            ]
        }
    },
    mounted() {
        this.$store.dispatch('admin/placement/GET_ROOMS');
    },
}
</script>

<style>

</style>