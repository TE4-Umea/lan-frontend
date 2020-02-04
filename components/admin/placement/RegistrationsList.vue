<template>
<div class="d-contrast box">
  <b-table 
        striped hover 
        :dark="$store.state.darkmode.value" 
        :fields="fields" 
        :items="$store.state.admin.registrations"
        :busy="$store.state.admin.registrations.length == 0"
    >
        <template v-slot:cell(group_code)="row">
            {{ row.item.group_code ? row.item.group_code  : '...' }}
        </template>
        <template v-slot:cell(room_id)="row">
            <room-dropdown :key="row.item.room_id" :row="row" @onChange="onDropdownChange" />
        </template>
        <template v-slot:cell(student)="row">
            {{row.item.student ? 'Elev' : 'Extern'}}
        </template>
        <template v-slot:cell(checked_in)="row">
            <attending-cell :key="row.item.checked_in" :row="row" />
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
                {label: 'Typ', key: 'student', sortable: true},
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
    },
    methods: {
        onDropdownChange({newVal, index}) {
            this.$store.commit('admin/SET_REGISTRATION', {
                index: index,
                registration: {
                    room_id: newVal,
                }
            });
            const id = this.$store.state.admin.registrations[index].id;
            this.$axios.patch(`/admin/event/registration/${id}/update`, {room_id: newVal});
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