<template>
	<textarea class="form-control input" rows="24" v-model="model.body"> </textarea>
</template>

<script>
export default {
	middleware: 'auth-admin',
	data() {
		return {
            model: {
                id: this.$store.event.rules_id,
                body: ''  
            },
            typing: {
                timeout: 5000,
                timer: undefined
            }
    	}
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
            clearTimeout(this.timer);
            this.typing.timer = setTimeout(this.doneTyping, this.typing.timeout);
        },
        doneTyping() {
            console.log("done typing");
        }
    }
}
</script>

<style lang="scss" scoped>
.input  {
  box-sizing:border-box;
}
</style>
