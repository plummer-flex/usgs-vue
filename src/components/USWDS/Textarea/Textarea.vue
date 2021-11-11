<template>
  <div class="usa-form-group">
    <label class="usa-label" :for="id">
      {{ label }}
    </label>
    <span v-if="hint" :id="hintId" class="usa-hint">
      {{ hint }}
    </span>
    <textarea
      :class="classes"
      :id="id"
      :name="name"
      :value="value"
      @input="handleInput"
      :aria-describedby="ariaDescribedBy"
    />
    <span v-if="error" class="usa-error-message" :id="errorId">
      {{ error }}
    </span>
    <span v-if="helper && !error" :id="helperId" class="usa-hint usa-character-count__message" aria-live="polite">
      {{ helper }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'usa-textarea',
  props: {
    name: {
      type: String,
      required: false,
    },
    id: {
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
    error: {
      type: String,
      required: false,
    },
    helper: {
      type: String,
      required: false,
    },
    success: {
      type: Boolean,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    rows: {
      type: Number,
      required: false,
      default: 3,
    },
  },
  computed: {
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
        'usa-textarea': true,
        'usa-textarea--error': this.error,
        'usa-input--success': this.success,
      }
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
