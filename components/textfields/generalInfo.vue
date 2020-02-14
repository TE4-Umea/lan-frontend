<template>
    <div class="notification my-2 p-2 bg-color--background">
        <h4>Lan {{ betweenDates }}</h4>
        <p class="mb-0">Information kring lanet:</p>
        <p class="mb-0" v-text="$store.state.event.details.short_info"/>
    </div>

</template>

<script>
export default {
    methods: {
        formatDate(d) {
            return new Date(d.replace(/ /g, 'T') + 'Z').toLocaleDateString('sv-SE');
        }
    },
    computed: {
        betweenDates() {
            return this.formatDate(this.$store.state.event.details.start_date) +
                " - " + this.formatDate(this.$store.state.event.details.end_date);
        },
    }

}
</script>

<style lang="scss" scoped>
p {
    font-size: 16px;
}
</style>
