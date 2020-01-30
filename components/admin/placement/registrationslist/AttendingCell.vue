<template>
  <b-form-checkbox
      :id="row.index + 'attending'"
      v-model="selected"
      :name="row.index + 'attending'"
      :value="true"
      :unchecked-value="false"
      :disabled="selected"
      @change="onChange"
    >
      {{ selected ? 'Närvarande' : 'Frånvarande' }}
    </b-form-checkbox>
</template>

<script>
export default {
    props: [
        'row'
    ],
    methods: {
        onChange(newVal) {
            this.$store.commit('admin/SET_REGISTRATION', {
                index: this.row.index,
                registration: {
                    checked_in: newVal,
                }
            })
        }
    },
    mounted() {
        console.log(!!+this.row.item.checked_in);
        this.selected = !!+this.row.item.checked_in;
    },
    data() {
        return {
            selected: false,
        }
    },
    props: [
        'row'
    ],
}
</script>

<style lang="scss" scoped>

</style>