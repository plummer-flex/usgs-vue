<script>
export default {
  name: 'usa-select',
  emits: ['input'],
  props: {
    name: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    classNames: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('item-selected', event.target.value)
    },
    focusInput() {
      this.$refs['select-box'].focus()
    },
  },
}
</script>

<template>
  <div class="usa-form-group" :class="classNames">
    <label class="usa-label" :for="id">
      {{ label }}
    </label>
    <select
      class="usa-select"
      ref="select-box"
      :name="name"
      :id="id"
      :value="value"
      :disabled="disabled"
      @change="handleInput"
    >
      <option value="" style="display:none">- Select -</option>
      <option v-for="option in options" :key="option.value" :value="option.value" :selected="option.value === value">{{
        option.label
      }}</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.usa-select[disabled='disabled'] {
  color: #444;
}
</style>
