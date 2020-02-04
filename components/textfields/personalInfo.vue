<template>
    <div class="box my-2 p-2 d-contrast bg-color--background w-100">
        <div 
            @click="expanded = !expanded" 
            class="d-flex justify-content-between "
        >
            <h4 class="mb-0">Personlig information</h4>
            <i 
                class="clickable icon material-icons gradient-animation-hover text-primary" 
                v-text="expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'"
            />
        </div>
        <div :class="{'d-none': !expanded}">
            <p 
                v-if="$store.state.event.registration.group_code"
                class="mb-0" 
                v-text="'Din gruppkod är ' + $store.state.event.registration.group_code + '.'"
            />
            <p class="mb-0" v-text="'Din plats är i ' + $store.state.event.registration.room.name + '.'"/>
            <p class="d-inline clickable underline" @click="openRulesModal">Här kommer du åt reglerna!</p>
        </div>
    </div>

</template>

<script>
import important from '~/components/event/fields/important';
import RulesModal from '~/components/event/modal/RulesModal.vue';
export default {
    data() {
        return {
            expanded: false,
        }
    },
    components: {
        important,
    },
    methods: {
        openRulesModal() {
            this.$modal.show(RulesModal, {}, {
                draggable: false,
                resizable: false,
                width: '90%',
                height: 'auto',
                adaptive: false,
            });
        },
    },

}
</script>

<style lang="scss" scoped>
.box {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.icon {
    font-size: 30px;
    vertical-align: sub;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
p {
    font-size: 16px;
}

</style>
