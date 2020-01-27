<template>
<div class="d-contrast outline-border">

    <div class=" header gradient--background d-flex  p-2">
        <p class="align-self-center m-0 ml-3 title white">Skapa ny pushnotis</p>
    </div>
    <div class="p-2">

        <div>
            <input type="text" 
                class="field mb-1 p-1 text-fields primary-color" 
                placeholder="Titel...."
                v-model="form.title"
            >
            <textarea name="" 
                cols="5" 
                rows="5"
                class="field text-fields p-1 primary-color"
                placeholder="Meddelande...."
                v-model="form.body"
                maxlength="255"
            />
        </div>
        <div class="d-flex justify-content-between flex-wrap">

            <b-button 
                class="gradient-animation-hover border-0" 
                @click="preview"
            >Förhandsgranska</b-button>
            <b-button 
                class="gradient-animation-hover border-0" 
                @click="send" :disabled="!canSend"
            >Skicka</b-button>
        </div>
    </div>
    <modals-container/>
</div>
</template>

<script>
import Notification from '~/components/notifications/Notification';
export default {
    data() {
        return {
            form: {
                title: '',
                body: '',
            },
            canSend: false,
        }
    },
    watch: {
        form: {
            handler(oldVal, newVal) {
                this.canSend = (newVal.title.length > 3 && newVal.body.length > 3)
            },
            deep: true
        }
    },
    methods: {
        preview() {
            this.$modal.show(Notification, {
                "data": {
                    "title": this.form.title,
                    "body": this.form.body,
                    "created_at": (new Date()).getTime(),
                }
            }, {
                draggable: false,
                resizable: false,
                height: 'auto',
                width: '260px',
                maxWidth: 250,
                adaptive: false,
            });
        },
        send() {
            this.canSend = false;
            this.$axios.post("/admin/event/notification/create", 
            {
                ...this.form,
                event_id: this.$store.state.event.details.id, 
            })
                .then(res => {
                    this.form.title = '';
                    this.form.body = '';
                    //TODO: Send snackbar success message
                }).catch(err => {
                    //TODO: Send error snackbar message
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.outline-border {
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.text-fields {
    outline: 1px solid rgba(0, 0, 0, 0.2);
}
.field {
    width: 100%;
    border: none;
    padding: 7px 0;
    background-color: unset;
}
textarea {
  resize: none;
}
</style>