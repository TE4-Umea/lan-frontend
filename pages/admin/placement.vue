<template>
    <div class="container row">
        <div class="col-md-8">
            <registrations-list />
        </div>
        <div class="col-md-4">
            <room-crud />
        </div>
    </div>
</template>

<script>
import RegistrationsList from '~/components/admin/placement/RegistrationsList';
import RoomCrud from '~/components/admin/placement/RoomCrud';
export default {
    components: {
        RoomCrud,
        RegistrationsList
    },
    mounted() {
        this.$store.dispatch('admin/placement/GET_ROOMS');
        this.$store.dispatch('admin/GET_REGISTRATIONS');
    },
}
</script>

<style lang="scss" scoped>

</style>