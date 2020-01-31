<template>
    <div style="position: relative;">
        <div class="placement">
            <div 
                :class="{'text-light': $store.state.darkmode.value}"
                class="spinner-border spinner-border-sm" 
                v-if="loading"
                role="status">
                <span class="sr-only">Loading...</span>
            </div>            
            <i v-else 
                class='icon material-icons gradient-animation-hover text-primary placement'
                v-text="icon"
            />
        </div>
        <!-- TODO: Lägg till en loading spinner på v-else -->
	    <textarea class="form-control input primary-color" rows="24" v-model="model.body" @input="onInput"> </textarea>
    </div>
</template>

<script>
let _  = require('lodash');
export default {
	middleware: 'auth-admin',
	data() {
		return {
            debouncedDoneTyping: undefined,
            icon: 'thumb_up',
            loading: false,
            model: {
                id: 1,
                body: ''  
            },
            typing: {
                timeout: 5000,
                timer: undefined
            }
    	}
    },
    created() {
        this.debouncedDoneTyping = _.debounce(this.doneTyping, 500);
    },
	mounted() {
		if(!this.model.id) {
			return;
		}
		this.$axios.get('/event/rules/' + this.model.id + '/read').then(res => {
			this.model = res.data;
		}).catch(err => {
            console.log(err);
		});
		
    },
    methods: {
        onInput() {
            this.loading = true;
            this.debouncedDoneTyping();
        },
        doneTyping() {
            this.$axios.put('/admin/event/rules/update', {
                id: this.model.id,
                body: this.model.body,
            }).then(res => {
                this.icon = 'done';
                this.loading = false;
            }).catch(err =>  {
                this.icon = 'close';
                this.loading = false;
                console.log(err)
            });
        }
    },
}
</script>

<style lang="scss" scoped>
.input {
    box-sizing:border-box;
}
.text-primary {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
textarea,textarea:focus {
    background: unset;
}
.placement {
    position: absolute;
    right: 5px;
    top: 5px;
}
</style>