<template>
    <center-wrapper>
        <wrapper>
          <h1> Check in </h1>
            <div class ="d-flex align-items-center">
                <input
                    type="text" class="form-control"
                    placeholder="Lägg till ID manuellt...."
                    v-model="result"
                    @blur="sendRequest"
                >
                <div class="box box-padding">
                    <i class="icon material-icons clickable gradient-animation-hover text-primary"
                        v-text="icon"
                        v-on:click= "handleClick"
                    />
                </div>
            </div>
            <qrcode-stream v-if="showCamera" :camera="camera" @decode="onDecode"></qrcode-stream>
        </wrapper>
    </center-wrapper>
</template>

<script>
import Wrapper from '~/components/layouts/positioning/Wrapper';
import CenterWrapper from '~/components/layouts/positioning/CenterWrapper';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
    layout: 'admin',
    middleware: [
        'auth-admin',
        'event/none'
    ],
    data () {
        return {
            showCamera: false,
            result: '',
            noStreamApiSupport: false,
            icon: 'camera_enhance',
            camera: 'auto',
        }
    },
    created() {
        let code = this.$route.query.qr;
        if(code && code.length > 1) {
            this.result = code;
            this.sendRequest();
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
        turnCameraOn () {
            this.camera = 'auto'
        },

        turnCameraOff () {
            this.camera = 'off'
        },
        onDecode (result) {
            this.result = this.parseInput(result);
            if(this.result !== '') {
                this.sendRequest();
            }
        },
        handleClick(event) {
            if(!this.showCamera)  {
                this.showCamera = true;
            }else {
              this.showCamera = false;
            }
        },
        sendRequest() {
            this.turnCameraOff();
            this.$axios.put('/admin/event/registration/' + this.result + '/update').then(res => {
                this.turnCameraOn();
                this.result = '';
                this.$snack.success({
                      text: "Incheckning lyckades!",
                      button: "Stäng",
                })
            }).catch(e => {
                this.turnCameraOn();
                this.result = '';
            })
        },
        parseInput(input) {
            let x = input.split('?qr=');
            if(x.length > 1) {
                return x[1];
            }
            this.$snack.danger({
                      text: "Något gick fel! Biljetten kunde inte läsas!",
                      button: "Stäng",
            });
            return '';
        }
    },
  }
</script>

<style lang="scss" scoped>
.text-primary {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
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
