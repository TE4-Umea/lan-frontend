<template>
<b-container fluid class="pt-5 px-5">
    <b-row>
        <b-col>
            <registrations-list v-if="$store.state.admin.registrations.length != 0" />
            <h2 v-else>Det finns för nuvarande inte några anmälningar, titta tillbaka senare!</h2>
        </b-col>
        <b-col cols="3">
            <b-row>
                <room-crud />
            </b-row>
            <b-row class="mt-3">
                <group-placement v-if="$store.state.admin.registrations.length != 0" />
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
    head () {
        return {
        titleTemplate: 'Placering %s',
        }
    },
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