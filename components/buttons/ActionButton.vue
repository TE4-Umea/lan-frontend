<template>
<div tabindex=0
    class="clickable outer-box gradient-animation-hover"
    :class="{'p-0': primary, disabled: disabled}"
    @click="onAction()"
>
    <div class="box"
        :class="{
            'animation-disable': disabled,
            'gradient-animation-hover' : primary, 
            'bg-color--background': !primary, 
            'box-padding': primary 
        }"
    >
        <div class="d-flex justify-content-center py-2">
            
            <div>
                <div 
                    :class="primary ? 'white' : 'pink'"
                    class="spinner-border spinner" 
                    v-if="loading"
                    role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <i v-else class="icon material-icons"
                    :class="primary ? 'white' : 'gradient-animation-hover text-primary'"
                    v-text="icon"
                />
                <p
                    class="text d-inline"
                    :class="primary ? 'white' : 'gradient-animation-hover text-primary'"
                >
                {{title}}
                </p>
            </div>
        </div>
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
        },
        'disabled': {
            default: false,
        },
        'loading': {
            default: false,
        }
    },
    methods: {
        onAction() {
            if(!this.disabled)
                this.$emit('onAction');
        }
    }
}
</script>
<style lang="scss" scoped>
.pink {
    color: #D2078F;
}

.pink.hover {
    color: #330B9B;
}
.spinner {
    height: 24px;
    width: 24px;
}
.disabled {
    opacity: 0.65;
}

.animation-disable:hover {
    background-position: 0 0;
    cursor: auto;
}

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
