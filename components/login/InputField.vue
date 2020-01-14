<template>
  <div class="y-margin">
      <p class="name" v-text="title" />
      <div class="field-wrapper">

        <input class="field primary-color"
            :tabindex="tabIndex"
            :type="type" 
            :placeholder="placeholder" 
            :maxlength="maxlength"
            v-on:focus="setActive(true)"
            v-on:blur="setActive(false)"
            @input="handleInput"
            v-model="data"
            :name="name"
            :id="id"
            :key="id"
        >
        <div :class='{"active": active}' class="line gradient--background" />
      </div>
  </div>
</template>

<script>
export default {
    props: [
        'value',
        'input',
        'title',
        'type',
        'placeholder',
        'maxlength',
        'tabIndex',
        'name',
        'id'
    ],
    data() {
        return {
            active: false,
            data: '',
        }
    },
    mounted() {
        this.data = this.value;
    },
    methods: {
        setActive(bool) {
            this.active = bool; 
        },
        handleInput(e) {
            // console.log(e);
            this.$emit('input', this.data);
        }
    }
}
</script>

<style lang="scss" scoped>
.active {
    background: #E1259C !important;
}

.y-margin {
    padding: 10px 0;
}
.name {
    margin: 0px;
}

.line {
    width: inherit;
    height: 2px;
}
.field-wrapper {
    width: inherit;
    max-width: 269px;
}
.field {
    width: 100%;
    border: none;
    padding: 7px 0;
}
.field:focus{   
    outline: none;
}
.field::placeholder {
    color: rgba(0, 0, 0, 0.3);
}
</style>