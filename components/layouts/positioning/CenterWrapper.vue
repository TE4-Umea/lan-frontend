<template>
<div class="d-flex  justify-content-center mb-3">
    <div class="flex-grow-1 max-width">
        <slot />
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.max-width {
    max-width: 334px;
}
</style>