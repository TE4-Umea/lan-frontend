<template>
<div class="d-contrast danger-zone p-3">
    <div>
        <h1>Farliga zonen</h1>
    </div>
    <div>
        <p>Här kan du lägga till och ta bort administratörer</p>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate minima vel iusto tempora ut. Vitae enim explicabo eligendi sit nisi magnam odit facilis veniam ab quidem, quis aliquid aut!</p>
        <b-button :disabled="!$store.state.event.details" variant="danger" @click="onEventDelete">Ta bort nuvarande event</b-button>
        
    </div>
</div>
</template>

<script>
export default {
    methods: {
        onEventDelete() {
            if(!confirm("Är du säker att du vill ta bort detta event?")) return;
            if(!confirm("Är du HELT säker på att du är medveten om vad det betyder?")) return;
            if(!confirm("Är du HEEEELT säker?")) return;
            const id = this.$store.state.event.details.id;
            this.$axios.delete(`/admin/event/${id}/delete`).then(res => {
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.danger-zone {
    background: unset;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-width: 1px;
    border-style: solid;
    border-color: #D53343;
}
</style>