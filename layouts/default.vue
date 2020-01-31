<template>
<div>
    <navbar />
    <nuxt />
    <snackbar />
</div>
</template>
<script>
import Navbar from '~/components/navbar/Navbar.vue';
import Snackbar from '~/components/notifications/Snackbar'
export default {
    components: {
        Navbar,
        Snackbar
    }
}
</script>
<style lang="scss">

</style>
