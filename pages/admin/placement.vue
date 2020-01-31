<template>
<b-container fluid class="pt-5 px-5">
    <b-row>
        <b-col>
            <registrations-list />
        </b-col>
        <b-col cols="3">
            <room-crud />
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import RegistrationsList from '~/components/admin/placement/RegistrationsList';
import RoomCrud from '~/components/admin/placement/RoomCrud';
export default {
    layout: 'admin',
    middleware: 'auth-admin',
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