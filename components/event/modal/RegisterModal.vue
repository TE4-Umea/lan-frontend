<template>
    <div>
        <div class="shadow" @click="$emit('close')"/>

        <div class="main bg-color--background">
            <div class="py-4 d-flex justify-content-center">
                <div>
                    <h1>ANMÄLAN</h1>
                    <input-field title="Gruppkod" />
                    
                    <input-select title="PlatsTyp"/>
                    <small>Härmed har jag läst och förstått <small class="clickable underline" @click="$emit('openRules')">reglerna.</small></small>
                    <action-button 
                        primary="true" 
                        title="ANMÄL" 
                        icon="done" 
                        @onAction="onSubmit"
                    />        
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from '~/components/buttons/ActionButton.vue';
import InputField from '~/components/form/InputField.vue';

export default {
    components: {
        ActionButton,
        InputField,
    },
    methods: {
        onSubmit() {
            console.log('clicked');
        }
    }
}
</script>

<style lang="scss" scoped>
.shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;  
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}
.main {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
}
</style>