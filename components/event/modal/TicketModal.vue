<template>
<div class="d-flex justify-content-center fadein" ref="ticket">
    <div>
        <div class="p-3">

          <div class="pt-1 pt-md-2 d-flex justify-content-between">
              <h3 class="">DIN BILJETT</h3>
              <i
                  class="pt-2 icon material-icons clickable"
                  @click="$emit('close')"

              >close</i>
          </div>
          <p class="mb-0" v-text="name"/>
          <p class="mb-0" v-text="account_type_str"/>
        </div>
        <hr class="dotted"  />
        <div class="p-2 white--background">
            <qrcode-vue :value="qrCode" :size="size" :foreground="'#1F1F1F'" :background="'#FFF'" level="H"></qrcode-vue>
        </div>


    </div>
</div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
export default {
    data() {
        return {
            color: this.$store.state.darkmode.value ?  '#FFF' : '#1F1F1F',
            bgColor: this.$store.state.darkmode.value ? '#1F1F1F' : '#FFF',
            size: 300,
        }
      },
    components: {
        QrcodeVue,
    },
    mounted() {
        let x = this.$refs.ticket.offsetWidth;
        this.size = Math.floor(x) -60;
    },
    computed: {
        account_type_str() {
            return this.$auth.$state.user.student ? 'Elev' : 'Extern' ;
        },
        name() {
            return this.$auth.$state.user.name;
        },
        qrCode() {
            return "registration_id:" + this.$store.state.event.registration.hashid;
        }
    }
}
</script>

<style lang="scss" scoped>

.dotted {
    position: relative;
    margin: 20px -7.5%;
    border-top: 7px dotted;
    color: gray;
}


.dotted::before, .dotted::after {
    content: "";
    background: gray;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: block;
    position: absolute;
    top: -11px;
    left: -7px;
}

.dotted::after {
    left: auto;
    right: -7px;
}

</style>
