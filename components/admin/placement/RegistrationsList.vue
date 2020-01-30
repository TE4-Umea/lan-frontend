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
            <room-dropdown :row="row" />
        </template>
        <template v-slot:cell(checked_in)="row">
            <attending-cell :row="row" />
        </template>
    </b-table>
</div>
</template>

<script>
import RoomDropdown from '~/components/admin/placement/registrationslist/RoomDropdown';
import AttendingCell from '~/components/admin/placement/registrationslist/AttendingCell';
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
    components: {
        RoomDropdown,
        AttendingCell
    }
    
}
</script>

<style lang="scss" scoped>
.box {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>