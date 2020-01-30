<template>
<div>
    <b-form-select class="field primary-color"
        value-field="id"
        text-field="name"
        :options="$store.getters['admin/placement/getRoomsStr']"
        v-model="selected"
        @change="onChange"
        plain
    >  
    </b-form-select>
</div>
</template>

<script>
export default {
    mounted() {
        this.selected = this.row.item.room_id;
    },
    data() {
        return {
            selected: null
        }
    },
    props: [
        'row'
    ],
    methods: {
        onChange(newVal) {
            this.$store.commit('admin/SET_REGISTRATION', {
                index: this.row.index,
                registration: {
                    room_id: newVal,
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
select,select:focus {
    background: unset;
}
</style>