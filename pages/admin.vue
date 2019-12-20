<template>
  <h1>This is the admin page that is currently protected by auth</h1>
</template>

<script>
export default {
    middleware: 'auth-admin'
}
</script>

<style>

</style>