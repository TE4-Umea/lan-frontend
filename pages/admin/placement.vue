<template>
<b-container fluid class="pt-5 px-5">
    <b-row>
        <b-col>
            <registrations-list />
        </b-col>
        <b-col cols="3">
            <b-row>
                <room-crud />
            </b-row>
            <b-row class="mt-3">
                <group-placement />
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import RegistrationsList from '~/components/admin/placement/RegistrationsList';
import RoomCrud from '~/components/admin/placement/RoomCrud';
import GroupPlacement from '~/components/admin/placement/GroupPlacement';
export default {
    layout: 'admin',
    middleware: 'auth-admin',
    components: {
        RoomCrud,
        RegistrationsList,
        GroupPlacement
    },
    mounted() {
        this.$store.dispatch('admin/placement/GET_ROOMS');
        this.$store.dispatch('admin/GET_REGISTRATIONS');
    },
}
</script>

<style lang="scss" scoped>

</style>