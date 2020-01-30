<template>
<div>
    <admin-navbar />
    <nuxt />
    <snackbar />
</div>
</template>

<script>
import AdminNavbar from '~/components/navbar/AdminNavbar.vue';
import Snackbar from '~/components/notifications/Snackbar'
export default {
    components: {
        AdminNavbar,
        Snackbar
    }
}
</script>

<style>

</style>