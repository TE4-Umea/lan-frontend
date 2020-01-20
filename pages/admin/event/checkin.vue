<template>
    <center-wrapper>
        <wrapper>
          <h1> Check in </h1>
            <div class ="d-flex align-items-center">
                <input type="text" class="form-control"   placeholder="Lägg till ID manuellt...." v-model="result">
                <div class="box gradient-animation-hover box-padding">
                    <i class="icon material-icons clickable primary-color"
                        v-text="icon"
                        v-on:click= "handleClick"
                    />
                </div>
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

.box {
    padding: 5px;
    margin-left: 10px;
    border-radius: 6p;
}

.wrapper {
    margin-top: 25px;
}

.icon {
  color: white;
}


</style>
