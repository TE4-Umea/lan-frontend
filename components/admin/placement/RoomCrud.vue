<template>
<div class="d-contrast box">

    <b-table 
        striped hover 
        :dark="$store.state.darkmode.value" 
        :fields="fields" 
        :items="rooms"
        :busy="!rooms && rooms.length == 0"
        :key="'roomTable=' + tableKey"
    >
    <template v-slot:cell(action)="row">
        <i :key="row.item.id" @click="onDeleteRow(row.item.id)" class="clickable text-danger material-icons">delete_forever</i>
    </template>
    </b-table>
    <div class="d-flex justify-content-between p-2">
        <input-field 
            placeholder="namn" 
            class="mx-2"
            v-model="form.name"
            type="text"
        />
        <input-field 
            placeholder="antal platser" 
            class="mx-2"
            v-model="form.max_capacity"
            type="number"
        />
        <b-button
            :disabled="!validInput"
            @click="submit" 
            class="gradient-animation-hover border-0"
        >Lägg till</b-button>
    </div>
</div>
</template>

<script>
import InputField from '~/components/form/InputField.vue';
export default {
    data() {
        return {
            fields: [
                {key: 'id', thClass: 'd-none', tdClass: 'd-none' },
                {key: 'created_at', thClass: 'd-none', tdClass: 'd-none' },
                {key: 'updated_at', thClass: 'd-none', tdClass: 'd-none' },
                {label: 'Namn', key: 'name', sortable: true},
                {label: 'Platser kvar', key: 'used_capcity', sortable: true},
                {label: 'Platser max', key: 'max_capacity', sortable: true},
                {label: ' ', key: 'action', sortable: false},
            ],
            form: {
                name: '',
                max_capacity: null
            },
            validInput: false,
            rooms: [],
            tableKey: 0
        }
    },
    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'admin/placement/SET_ROOMS' || 
                mutation.type === 'admin/SET_REGISTRATIONS' ||
                mutation.type === 'admin/SET_REGISTRATION') {

                this.rooms = this.filterData(state.admin.placement.rooms);
                this.tableKey++;
            }
        });
    },
    methods: {
        filterData(rooms) {
            for (let i = 0; i < rooms.length; i++) {
                rooms[i].used_capcity = this.count_used_capcity(rooms[i].id);
            }
            return rooms;
        },
        submit() {
            this.$axios.post("/admin/placement/room/create", this.form)
                .then(res => {
                    this.$store.commit('admin/placement/ADD_ROOM', res.data.data);
                    this.$snack.success({
                        text: 'Ett rum har lagts till!',
                        button: 'OK',
                    });
                    this.form.name = '';
                    this.form.max_capacity = null;
                }).catch(err => {
                    this.$snack.error({
                        text: 'Något gick fel!',
                        button: 'Försök igen',
                        action: this.submit(),
                    });
                })
            
        },
        count_used_capcity(id) {
            let counter = 0;
            for (let index of this.$store.state.admin.registrations) {
                if(index.room_id == id) {
                    counter ++;
                }
            }
            return counter;
        },
        onDeleteRow(id) {
            if(!confirm("Är du säker att du vill ta bort detta rum?")) return;
            this.$axios.delete(`/admin/placement/room/${id}/delete`)
                .then(res => {
                    this.$store.commit('admin/placement/DELETE_ROOM');
                    this.$snack.success({
                        text: 'Ett rum har tagits bort!',
                        button: 'OK',
                    });
                }).catch(err => {
                    this.$snack.error({
                        text: 'Något gick fel!',
                    });
                });
        }
    },
    watch: {
        form: {
            handler(oldVal, newVal) {
                this.validInput = (newVal.name.length > 3 && newVal.max_capacity != null)
            },
            deep: true
        }
    },
    components: {
        InputField,
    }
}
</script>
<style lang="scss" scoped>
.delete-icon {
    color : red;
}
.box {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>