<template>
  <div>
      <p v-text="title" />
      <div class="field-wrapper">

        <input class="field" :type="type" :placeholder="placeholder" :maxlength="maxlength">
        <div class="line gradient--background" />
      </div>
  </div>
</template>

<script>
export default {
    props: [
        'input',
        'title',
        'type',
        'placeholder',
        'maxlength'
    ],
    
}
</script>

<style lang="scss" scoped>

.line {
    width: inherit;
    height: 2px;
}
.field-wrapper {
    width: inherit;
    max-width: 269px;
}
.field {
    border: none;
    // border-bottom: 2px solid $gradientColor;
}
.field:focus{   
    outline: none;
}
.field::placeholder {
    color: rgba(0, 0, 0, 0.3);
}
</style>