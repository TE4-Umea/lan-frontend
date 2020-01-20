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
          <p class="mb-0" v-text="client.name"/>
          <p class="mb-0" v-text="client.type"/>
        </div>
        <hr class="dotted"  />
        <div class="py-2">
            <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
        </div>


    </div>
</div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
export default {
    data() {
        return {
            value: 'https://eastereggsuwu.com',
            size: 300,
            client: {
                name:'John Doe',
                type:'Elev',
          }
        }
      },
    components: {
        QrcodeVue,
    },
    mounted() {
        let x = this.$refs.ticket.offsetWidth;
        this.size = Math.floor(x) -60;
    },
}
</script>

<style lang="scss" scoped>

.dotted {
    position: relative;
    margin: 20px -10%;
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
