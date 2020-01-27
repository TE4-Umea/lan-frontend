<template>
<div class="d-contrast outline-border">

    <div class=" header gradient--background d-flex  p-2">
        <p class="align-self-center m-0 ml-3 title white">Skapa ny pushnotis</p>
    </div>
    <div class="p-2">

        <div>
            <input type="text" class="field mb-1 p-1 text-fields" placeholder="Titel....">
            <textarea name="" cols="5" rows="5" class="field text-fields p-1" placeholder="Meddelande...."/>
        </div>
        <div class="d-flex justify-content-between">

            <b-button class="gradient-animation-hover border-0" @click="preview">Förhandsgranska</b-button>
            <b-button class="gradient-animation-hover border-0" @click="send" disabled>Skicka</b-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.outline-border {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.text-fields {
    outline: 1px solid rgba(0, 0, 0, 0.2);
}
.field {
    width: 100%;
    border: none;
    padding: 7px 0;
    background-color: unset;
}
</style>