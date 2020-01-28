<template>
<div class="d-contrast box">

    <b-table 
        striped hover 
        :dark="$store.state.darkmode.value" 
        :fields="fields" 
        :items="$store.state.admin.placement.rooms"
        :busy="$store.state.admin.placement.rooms.length == 0"
    >
        <template v-slot:cell(used_capcity)="row">
            {{count_used_capcity(row.item.id)}}
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
                {label: 'Platser kvar', key: 'used_capcity', sortable: false},
                {label: 'Platser max', key: 'max_capacity', sortable: true},
                {label: 'åtgärder', key: 'actions', sortable: false},
            ],
            form: {
                name: '',
                max_capacity: null
            },
            validInput: false
        }
    },
    methods: {
        submit() {
            this.canSend = false;
            this.$axios.post("/admin/placement/room/create", this.form)
                .then(res => {
                    this.$store.commit('admin/placement/ADD_ROOM', res.data.data);
                    // this.$snack.success()
                }).catch(err => {
                    //TODO: Send error snackbar message
                })
            this.form.name = '';
            this.form.max_capacity = null;   
        },
        count_used_capcity(id) {
            let counter = 0;
            for (let index of this.$store.state.admin.registrations) {
                console.log(id);
                if(index.room_id == id) {
                    counter ++;
                }
            }
            return counter;
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
.box {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>