<template>
  <fieldset class="usa-fieldset">
    <legend v-if="legend" class="usa-legend">{{ legend }}</legend>
    <div class="usa-checkbox">
      <input
        type="checkbox"
        class="usa-checkbox__input"
        :id="id"
        :name="name"
        :value="value"
        :checked="value"
        @input="handleInput"
      />
      <label class="usa-checkbox__label" :for="id">{{ label }}</label>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'usa-checkbox',
  emits: ['input'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    legend: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.checked)
    },
  },
}
</script>
