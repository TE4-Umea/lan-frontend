<template>
    <div>
        <i v-if="!loading" class='icon material-icons gradient-animation-hover text-primary'
            v-text="icon"
        />
        <!-- TODO: Lägg till en loading spinner på v-else -->
	    <textarea class="form-control input" rows="24" v-model="model.body" @input="onInput"> </textarea>
    </div>
</template>

<script>
let _  = require('lodash');
export default {
	middleware: 'auth-admin',
	data() {
		return {
            debouncedDoneTyping: undefined,
            icon: 'eco',
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
            this.icon = 'autorenew';
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
</style>