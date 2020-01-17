<template>
	<textarea class="form-control input" rows="24" v-model="model.body" @input="onInput"> </textarea>
</template>

<script>
let _  = require('lodash');
export default {
	middleware: 'auth-admin',
	data() {
		return {
            debouncedDoneTyping: undefined,
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
		this.$axios.get('/event/rules/' + this.model.id + '/get').then(res => {
			this.model = res.data;
		}).catch(err => {
            console.log(err);
		});
		
    },
    methods: {
        onInput() {
            this.debouncedDoneTyping();
        },
        doneTyping() {
            console.log("done typing");
            this.$auth.$axios.patch()
        }
    },
}
</script>

<style lang="scss" scoped>
.input  {
  box-sizing:border-box;
}
</style>
