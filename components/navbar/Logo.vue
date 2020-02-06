<template>
<div>
    <nuxt-link
          to="/"
    >
        <logo class="logo" />
    </nuxt-link>
</div>
</template>

<script>
import Logo from '~/components/icon/Logo.vue';
export default {
    components: {
        Logo,
    }
}
</script>

<style scoped>
    .logo {
        height: 40px;
        cursor: pointer;
    }
</style>
