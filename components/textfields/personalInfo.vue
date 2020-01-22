<template>
    <div>
        <h4> Information kring lanet </h4>
        <p class="mb-0"> Din gruppkod är </p>
        <p class="mb-0" v-text="$store.state.event.registration.group_code"/>
        <p class="mb-0" v-text="$store.state.event.registration.room_id"/>
        <p class="d-inline clickable underline" @click="openRulesModal">Här finns lanets regler.</p>
    </div>

</template>

<script>
import important from '~/components/event/fields/important';
import RulesModal from '~/components/event/modal/RulesModal.vue';
export default {
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
    }
}
</script>

<style lang="scss" scoped>
    p {
        font-size: 16px;
    }

</style>
