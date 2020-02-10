<template>
<div class="">
    <div class="d-flex w-100">
        <v-select class="w-75"/>
        <b-button
            class="ml-1 gradient-animation-hover border-0"
            :disabled="true"
            @search="fetchOptions"
        >Lägg till</b-button>
    </div>
    <div class="mx-2 pt-3">

        <b-table
            striped hover 
            :dark="$store.state.darkmode.value"
            :fields="fields"
            :items="data"
            :busy="data.length == 0"
        >
        <template v-slot:cell(action)="row">
            <i v-if="shouldBeEnabled(row.item.id)" :key="row.item.id" @click="onDeleteRow(row.index,row.item.id)" class="clickable text-danger material-icons ">delete_forever</i>
        </template>
        </b-table>
    </div>
</div>
</template>

<script>
import vSelect from 'vue-select';
export default {
    created() {
        this.$axios.get('/admins/read').then(res => {
            this.data = res.data;
        });
    },
    components: {
        vSelect
    },
    methods: {
        fetchOptions(search, loading) {
           this.$axios('/admin/') 
        },
        onDeleteRow(index, id) {
            alert(`admin with id ${id} and index ${index} removed `);

        },
        shouldBeEnabled(id) {
            const user = this.$auth.user;
            return !(user.id == id);
        },
    },
     data() {
        return {
            data: [],

            fields: [
                {label: 'Namn', key: 'name', sortable: true},
                {label: 'Email', key: 'email', sortable: true},
                {label: ' ', key: 'action', sortable: false},
            ],
            form: {
                name: '',
                max_capacity: null
            },
        }
    },
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.disabled {
    opacity: 0.6;
}
</style>