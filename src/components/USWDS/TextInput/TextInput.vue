<script>
/**
 * @param name    :string   Name attribute for traditional form submission
 * @param id      :string   CSS ID
 * @param label   :string   Displayed form label asigned to field
 * @param hint    :string   Help hint string displayed on mouseover or for accessibility
 * @param error   :string   Error message displayed by field when an error is encountered
 * @param helper  :string
 * @param value   :string   Value asigned to input field
 */
export default {
  name: 'usa-input-text',
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
      required: true,
    },
    hint: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    error: {
      type: String,
      required: false,
    },
    helper: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: function(value) {
        const values = ['text', 'password']
        return values.includes(value)
      },
    },
  },
  computed: {
    inputName() {
      return this.name ? this.name : ''
    },
    inputValue() {
      return this.value ? this.value : ''
    },
    hintId() {
      return `${this.id}-input-hint`
    },
    errorId() {
      return `${this.id}-input-error`
    },
    helperId() {
      return `${this.id}-input-helper`
    },
    ariaDescribedBy() {
      return `${this.id}-input-hint ${this.id}-input-helper`
    },
    classes() {
      return {
        'usa-input': true,
        'usa-input--error': this.error,
        'usa-input--success': this.success,
      }
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
    focusInput() {
      this.$refs['input-field'].focus()
    },
    handleKeyUp(event) {
      if (event.key === 'Enter') {
        this.$emit('enter', event.target.value)
      }
    },
  },
}
</script>

<template>
  <div class="usa-form-group" :class="classNames">
    <label class="usa-label" :for="id">
      {{ label }}
    </label>
    <span v-if="hint" :id="hintId" class="usa-hint">
      {{ hint }}
    </span>
    <input
      maxlength="25"
      ref="input-field"
      :class="classes"
      :id="id"
      :name="inputName"
      :aria-describedby="ariaDescribedBy"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleInput"
      @keyup="handleKeyUp"
    />
    <span v-if="error" class="usa-error-message" id="input-error-message">
      {{ error }}
    </span>
    <span v-if="helper && !error" :id="helperId" class="usa-hint" aria-live="polite">
      {{ helper }}
    </span>
  </div>
</template>
