<template>
<div class="">
    <div class="d-flex w-100">
        <v-select 
            class="w-75"
            @search="debouncedfetchOptions"
            :filterable="false"
            :options="options" 
            label="email"
            v-model="vSelected"
            />
        <b-button
            class="ml-1 gradient-animation-hover border-0"
            :disabled="vSelected == null"
            @click="onAddAdmin"
            >Lägg till</b-button>
    </div>
    <div class="mx-2 pt-3">

        <b-table
            striped hover 
            :dark="$store.state.darkmode.value"
            :fields="fields"
            :items="users"
            :busy="users.length == 0"
        >
        <template v-slot:cell(action)="row">
            <i  v-if="shouldBeEnabled(row.item.id)" 
                :key="row.item.id" 
                @click="onDeleteRow(row.index,row.item.id)" 
                class="clickable text-danger material-icons"
                >delete_forever</i>
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
            users: [],
            
            fields: [
                {label: 'Namn', key: 'name', sortable: true},
                {label: 'Email', key: 'email', sortable: true},
                {label: ' ', key: 'action', sortable: false},
            ],
            
            options: [],
            vSelected: null,
            debouncedfetchOptions: undefined,
        }
    },
    created() {
        this.$axios.get('/admins/read').then(res => {
            this.users = res.data;
        });
        this.debouncedfetchOptions = debounce(this.fetchOptions, 250);
    },
    methods: {
        fetchOptions(search, loading) {
            if(search.length == 0) return;
            loading(true);
            this.$axios.get(`/admin/search?query=${search}`)
                .then(res => {
                    this.options = res.data;
                    loading(false);
                });
        },
        onDeleteRow(index, id) {
            if((prompt(`Är du säker att du vill ta bort ${this.users[index].name} som administratör?\n För att fortsätta skriv \"ja\"`))
                .toLowerCase() != "ja") return;
            this.$axios.patch(`/admin/${id}/update`, {admin: 0}).then(res => {
                this.users.splice(index, 1);

            });
        },
        shouldBeEnabled(id) {
            return !(this.$auth.user.id == id);
        },

        onAddAdmin() {
            if((prompt(`Är du säker att du vill lägga till ${this.vSelected.name} som administratör?
                \n För att fortsätta skriv \"ja\"`)).toLowerCase() != "ja") return;
            this.$axios.patch(`/admin/${this.vSelected.id}/update`, {admin: 1}).then(res => {
                this.users.push(this.vSelected);
                this.vSelected = null;
                this.options = [];
            });
        }
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