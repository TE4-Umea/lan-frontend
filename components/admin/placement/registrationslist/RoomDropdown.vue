<template>
<div>
    <b-form-select class="field primary-color"
        value-field="id"
        text-field="name"
        :options="$store.getters['admin/placement/getRoomsStr']"
        v-model="selected"
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
}
</script>

<style>

</style>