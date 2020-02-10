<template>
<div class="">
    <div class="d-flex w-100">
        <v-select 
            class="w-75"
            @search="debouncedfetchOptions"
            :filterable="false"
            />
        <b-button
            class="ml-1 gradient-animation-hover border-0"
            :disabled="true"
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
import { debounce } from 'lodash';
import vSelect from 'vue-select';
export default {
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
            debouncedfetchOptions: undefined,
        }
    },
    created() {
        this.$axios.get('/admins/read').then(res => {
            this.data = res.data;
        });
        this.debouncedfetchOptions = debounce(this.fetchOptions, 250);
    },
    
    methods: {
        fetchOptions(search, loading) {
            loading(true);
            console.log(search);
            this.$axios.get('/admin/search', { query: search })
                .then(res => {
                    console.log(res);
                    loading(false);
                });
        },
        onDeleteRow(index, id) {
            alert(`admin with id ${id} and index ${index} removed `);

        },
        shouldBeEnabled(id) {
            const user = this.$auth.user;
            return !(user.id == id);
        },
    },
    components: {
        vSelect
    },
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.disabled {
    opacity: 0.6;
}
</style>