<template>
  <div class="y-margin">
      <p class="name" v-text="title" />
      <div class="field-wrapper">

        <input class="field primary-color"
            :tabindex="tabIndex"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            :maxlength="maxlength"
            :minlength="minlength"
            v-on:focus="setActive(true)"
            v-on:blur="setActive(false)"
            @input="handleInput"
            v-model="data"
            :name="name"
            :id="id"
            :key="id"
        >
        <div :class='{"gradient-animation-active": active, "invalid": required == "" && (data.length < minlength || data.length > maxlength)}' class="line gradient-animation" />
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
        'minlength',
        'tabIndex',
        'name',
        'id',
        'required'
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
            this.$emit('input', this.data);
        }
    }
}
</script>

<style lang="scss" scoped>

.invalid {
    background: #cc0227;
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
    background-color: unset;
}
.field:focus{
    outline: none;
}
.field::placeholder {
    color: rgba(0, 0, 0, 0.3);
}
</style>
