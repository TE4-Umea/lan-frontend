<template>
<div>
    <navbar>
        <nuxt-link to="/admin" class="primrary-color">
        <p class="d-inline p-0">
            Dashboard
        </p>
        </nuxt-link>
        <nuxt-link to="/admin/placement" class="primrary-color">
        <p class="d-inline p-0">
            Placering
        </p>
        </nuxt-link>
        <nuxt-link to="/admin/event/checkin" class="primrary-color">
        <p class="d-inline p-0">
            Incheckning
        </p>
        </nuxt-link>
    </navbar>
    <nuxt />
    <snackbar />
</div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar';
import Snackbar from '~/components/notifications/Snackbar'
export default {
    components: {
        Navbar,
        Snackbar
    }
}
</script>

<style lang="scss" scoped>
</style>