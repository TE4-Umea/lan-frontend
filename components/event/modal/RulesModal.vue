<template>
    <div class="p-4 overflow-auto overflow-x-hidden">
        
        <div class="parent" v-html="markdown" />
        <div class="d-flex justify-content-center">
            <action-button class="my-2 mt-md-4" primary="true" title="Stäng" @onAction="$emit('close')"/>
        </div>
    
        
    </div>
</template>

<script>
import marked from 'marked';
import ActionButton from '~/components/buttons/ActionButton.vue';

export default {
    data() {
        return {
            text: `Laddar...`
        }
    },
    components: {
        ActionButton
    },
    created() {
        this.$axios.get('/event/rules/' + 1 + '/read').then(res => {
			this.text = res.data.body;
		}).catch(err => {
            console.log(err);
		});
    },
    computed: {
        markdown() {
            return marked(this.text);
        }
    },
}
</script>

<style lang="scss" scoped>
    .parent {
        overflow-y: scroll;
        height: 70vh;
    }
</style>