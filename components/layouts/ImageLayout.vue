<template>
<div class="wrap px-3 px-md-0">
    <div class="d-flex justify-content-center">
        <img v-if="icon && icon != 'logo'" :src="url" :alt="alt" class="icon">
        <logo-square v-else />
    </div>
    <div class="text-wrap">

        <h1 class="text-center" v-text="title"/>
        <p class="text-center" v-text="paragraph"/>
    </div>
    <slot/>
</div>


</template>

<script>
import LogoSquare from '~/components/logo/LogoSquare';
export default {
    props: {
        icon: String,
        alt: String,
        title: String,
        paragraph: String,
    },
    components: {
        LogoSquare
    },
    computed: {
        url() {
            return require('~/assets/images/' + this.icon);
        }
    }
}
</script>

<style lang="scss" scoped>
.text-wrap {
    padding-top: 34px;
}
.icon {
  width: 60%;
  max-width: 400px;
}
.wrap {
  max-width: 320px;
  margin-top: 128px;
}
</style>

