<template>
<div tabindex=0
    class="clickable outer-box gradient-animation-hover"
    :class="{'p-0': primary}"
    @click="onAction()"
>
    <div class="box"
        :class="{'gradient-animation-hover' : primary, 'bg-color--background': !primary, 'box-padding': primary }"
    >
    <!-- <img :src="icon" alt="icon"> -->
    <p
        class="text"
        :class="primary ? 'white' : 'gradient-animation-hover text-primary'"
    >
    <i class="icon material-icons"
        :class="primary ? 'white' : 'gradient-animation-hover text-primary'"
        v-text="icon"
    />
    {{title}}
    </p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        'icon': {
            default:undefined,
        },
        'title': {
            default: undefined,
        },
        'primary': {
            default: false,
        }
    },
    methods: {
        onAction() {
            this.$emit('onAction');
        }
    }
}
</script>
<style lang="scss" scoped>

.icon {
    font-size: 30px;
    vertical-align: sub;
}
.outer-box {
    padding: 4px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 100%;
    max-width: 339px;

}
.box {
    border-radius: 6px;
}
.box-padding {
    padding: 4px;
}
.text {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 37px;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    padding: 10px;

}
.text-primary {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
