<template>
    <center-wrapper>
        <wrapper>
            <h1> Check in </h1>
            <input type="text" class="form-control"   placeholder="Lägg till ID manuellt...." v-model="result">'
            <qrcode-stream @decode="onDecode"></qrcode-stream>





        </wrapper>
    </center-wrapper>
</template>

<script>
import Wrapper from '~/components/layouts/positioning/Wrapper';
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
    middleware: [
        'auth-admin',
        'event/none'
    ],

    data () {
      return {
        result: '',
        noStreamApiSupport: false
      }
  },

  components: {
      Wrapper,
      CenterWrapper,
      QrcodeStream,
      QrcodeDropZone,
      QrcodeCapture,
  },
  methods: {
    onDecode (result) {
        this.result = result
        },
    }
}
</script>

<style lang="scss" scoped>



</style>
