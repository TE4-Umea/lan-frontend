<template>
<div class="wrap px-3 px-md-0">
    <div class="d-flex justify-content-center">
        <logo-square v-if="icon && icon == 'logo'" />
        <icon-none v-if="icon && icon == 'none'" />
        <icon-success v-if="icon && icon == 'success'" />
    </div>
    <div class="text-wrap">

        <h1 class="text-center" v-text="title"/>
        <p class="text-center" v-text="paragraph"/>
    </div>
    <slot/>
</div>


</template>

<script>
import LogoSquare from '~/components/icon/LogoSquare';
import IconNone from '~/components/icon/IconNone';
import IconSuccess from '~/components/icon/IconSuccess';
export default {
    props: {
        icon: String,
        alt: String,
        title: String,
        paragraph: String,
    },
    components: {
        LogoSquare,
        IconNone,
        IconSuccess
    },
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

