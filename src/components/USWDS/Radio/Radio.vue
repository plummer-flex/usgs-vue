<template>
  <fieldset class="usa-fieldset">
    <legend v-if="legend" class="usa-legend">{{ legend }}</legend>
    <div class="usa-radio" v-for="(option, i) in options" :key="option.value">
      <input
        class="usa-radio__input"
        :id="`${id}--${i}`"
        type="radio"
        :name="name"
        :value="option.value"
        :checked="option.value === value"
        @input="handleInput"
      />
      <label
        class="usa-radio__label"
        :value="option.value"
        :for="`${id}--${i}`"
      >
        {{ option.label }}
      </label>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: "usa-radio-button",
  emits: ["input"],
  argTypes: { onSubmit: { action: "submit" } },
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    legend: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
