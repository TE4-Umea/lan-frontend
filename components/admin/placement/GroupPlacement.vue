<template>
<div class="d-contrast box">

    <b-table 
        striped hover 
        :dark="$store.state.darkmode.value" 
        :fields="fields" 
        :items="groupCodes"
        :busy="$store.state.admin.placement.rooms.length == 0"
    >
        <template v-slot:cell(group_members)="row">
            {{ row.item.group_members_index.length }}
        </template>
        <template v-slot:cell(room_id)="row">
            <room-dropdown :key="row.item.room_id" :row="row" @onChange="onDropdownChange" />
        </template>
    </b-table>
</div>
</template>

<script>
import RoomDropdown from '~/components/admin/placement/registrationslist/RoomDropdown';
export default {
    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'admin/SET_REGISTRATIONS') {
                this.groupCodes = this.filterData(state.admin.registrations);
            }
        });
    },
    data() {
        return {
            fields: [
                {label: 'Gruppkod', key: 'name', sortable: true},
                {label: 'Personer', key: 'group_members', sortable: true},
                {label: 'Klassrum', key: 'room_id', sortable: true},
            ],
            groupCodes: [],
        }
    },
    methods: {
        filterData(rows) {
            let objectRows = {};
            for(let i = 0; i < rows.length; i++) {
                const groupName = rows[i].group_code ? rows[i].group_code : 'Ingen Kod';
                if(!objectRows.hasOwnProperty(groupName)) {
                    objectRows[groupName] = {
                        group_members_index: [],
                        name: groupName,
                        room_id: rows[i].room_id,
                    }
                }
                objectRows[groupName].group_members_index.push(i);
            }

            let filteredRows = [];
            for (const [key, value] of Object.entries(objectRows)) {
                filteredRows.push({
                    id: key,
                    ...value
                })
            }
            return filteredRows;
        },
        onDropdownChange({newVal, index}) {
            const group_members = this.groupCodes[index];
            for (let member_index of group_members.group_members_index) {
                this.$store.commit('admin/SET_REGISTRATION', {
                    index: member_index,
                    registration: {
                        room_id: newVal,
                    }
                });
            }
            this.$axios.patch(`admin/placement/room/update`, {
                group_code: group_members.id == 'Ingen Kod' ? null : group_members.id,
                room_id: newVal,
            });
        }
    },
    components: {
        RoomDropdown
    }
}
</script>
<style lang="scss" scoped>
.box {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>