<template>
<div class="main">
    <div>

        <h1 
        v-if="title" 
        v-text="title"
        class="primary-color"
        />
    </div>
    <slot />
</div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style lang="scss" scoped>
.main {
    padding-top: 75px;
}
.title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
}
</style>