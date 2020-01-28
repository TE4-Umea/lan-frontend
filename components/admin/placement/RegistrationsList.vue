<template>
<div class="d-contrast box">
  <b-table 
        striped hover 
        :dark="$store.state.darkmode.value" 
        :fields="fields" 
        :items="$store.state.admin.registrations"
        :busy="$store.state.admin.registrations.length == 0"
    >
        <template v-slot:cell(room_id)="row">
            {{ getRoomName(row.item.room_id).name }}
        </template>
    </b-table>
</div>
</template>

<script>
export default {
    data() {
        return {
            fields: [
                {label: 'Namn', key: 'name', sortable: true},
                {label: 'Email', key: 'email', sortable: true},
                {label: 'Gruppkod', key: 'group_code', sortable: true},
                {label: 'Platstyp', key: 'setup_type', sortable: true},
                {label: 'Typ', key: 'user.', sortable: true},
                {label: 'Klassrum', key: 'room_id', sortable: true},
                {label: 'Närvarande', key: 'checked_in', sortable: true},
            ],
            form: {
                name: '',
                max_capacity: null
            },
            validInput: false
        }
    },
    methods: {
        getRoomName(id) {
            return this.$store.state.admin.placement.rooms[this.$store.state.admin.placement.rooms.findIndex(x => x.id === id)]
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>