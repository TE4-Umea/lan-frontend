<template>
    <div class="notification p-2 bg-color--background ">
        <div class="d-flex justify-content-between align-items-center">
            <h4 class="mb-0" v-text="data.title" />
            <small v-text="'5 min'"/>
        </div>
        <p class="mb-0" v-text="data.body"/>
    </div>
</template>

<script>
export default {


props: [
    'data',
]

}
</script>

<style lang="scss" scoped>
    .notification {
        border-radius: 4px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
    p {
        font-size: 16px;
    }
   small {
     font-size: 11px;
   }
</style>
