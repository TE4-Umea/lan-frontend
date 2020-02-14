<!-- changed file names and git doesnt allow me to commit it -->
<template>
    <div class="notification my-2 p-2 d-contrast bg-color--background w-100">
        <div class="d-flex justify-content-between align-items-center">
            <h4 class="mb-0" v-text="data.title" />
            <small v-text="timestamp"/>
        </div>
        <p class="mb-0" v-text="data.body"/>
    </div>
</template>

<script>
export default {
    props: [
        'data',
    ],
    data() {
      return {
          timestamp: undefined,
          interval: undefined,
      }
    },
    created() {
        this.update_timestamp();
        this.interval = setInterval(() => this.update_timestamp(), 60000);
    },
    methods: {
        clickAction() {
            console.log("the close button is clicked!")
        },
        update_timestamp() {
            this.timestamp = this.calculate_timestamp();
        },
        calculate_timestamp() {
            let now = Math.ceil(Date.now() / 1000);
            let past = (new Date((this.data.created_at.replace(/ /g, 'T')) + 'Z')).getTime() / 1000;
            let diff = Math.floor((now - past) / 60);
            if(diff > 1441) {
              let days = Math.floor(diff / 1440);

              return days + ' dag';
            }
            if(diff > 61) {
              let hours = Math.floor(diff / 60);
              return hours + ' tim';
            }
            return diff + ' mins'
        }
    },
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
