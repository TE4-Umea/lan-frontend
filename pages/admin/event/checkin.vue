<template>
    <center-wrapper>
        <wrapper>
          <h1> Check in </h1>
            <div class ="d-flex">
                <input type="text" class="form-control"   placeholder="Lägg till ID manuellt...." v-model="result">
                <i class="icon material-icons clickable primary-color"
                    v-text="icon"
                    v-on:click= "handleClick"
                />
            </div>
            <qrcode-stream v-if="showCamera" @decode="onDecode"></qrcode-stream>
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
            showCamera: false,
            result: '',
            noStreamApiSupport: false,
            icon: 'camera_enhance'
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
        handleClick: function(event) {
            if(!this.showCamera)  {
                this.showCamera = true;
            }else {
              this.showCamera = false;
            }
        }
    },
  }
</script>

<style lang="scss" scoped>



</style>
