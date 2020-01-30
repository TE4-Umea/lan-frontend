<!-- changed file names and git doesnt allow me to commit it -->
<template>
<div class="w-100 notifications">
    <div v-if="$store.state.event.notifications.length == 0">
        <h4>Laddar..</h4>
        <div class="spinner" />
    </div>
    <notification v-for="(row, i) in notifications" :key="i" :data="row"/>
</div>
</template>

<script>
import Notification from '~/components/notifications/Notification';
export default {
    data() {
        return {
            notifications: [],
        }
    },
    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'event/SET_NOTIFICATIONS' ||
                mutation.type === 'event/ADD_NOTIFICATION'
            ) {
                this.notifications = state.event.notifications.slice().reverse();
            }
        })
    },
    mounted() {
        if(this.$store.state.event.notifications.length == 0) {
            this.$store.dispatch('event/GET_NOTIFICATIONS');
        }
    },
    components: {
        Notification,
    }
}

</script>


<style lang="scss" scoped>
.notifications {
    max-height: 300px;
    overflow-y: scroll;
}
</style>
