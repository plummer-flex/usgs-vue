<template>
  <button :class="classes" :type="type" :disabled="disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'usa-button',
  emits: ['click'],
  props: {
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'default',
      validator: function(value) {
        const valid = ['default', 'base', 'secondary', 'accent-cool', 'accent-warm']
        return valid.includes(value)
      },
    },
    variant: {
      type: String,
      default: 'default',
      validator: function(value) {
        const valid = ['default', 'outline', 'inverse', 'unstyled']
        return valid.includes(value)
      },
    },
    size: {
      type: String,
      default: 'regular',
      validator: function(value) {
        const valid = ['regular', 'big']
        return valid.includes(value)
      },
    },
    type: {
      type: String,
      default: 'button',
    },
    optionalAttributes: {
      type: Object,
      default: function() {
        return {}
      },
    },
  },

  computed: {
    classes() {
      let classList = {
        'usa-button': true,
        'usa-button--default': this.color === 'default',
        'usa-button--secondary': this.color === 'secondary',
        'usa-button--accent-warm': this.color === 'accent-warm',
        'usa-button--accent-cool': this.color === 'accent-cool',
        'usa-button--base': this.color === 'base',
        'usa-button--big': this.size === 'big',
        'usa-button--outline': this.variant === 'outline' || this.variant === 'inverse',
        'usa-button--inverse': this.variant === 'inverse',
        'usa-button--unstyled': this.variant === 'unstyled',
      }
      if (this.className.length > 0) {
        let classArr = this.className.split(/\s/)
        classArr.forEach(cls => {
          classList[cls] = true
        })
      }

      return classList
    },
  },

  methods: {
    onClick() {
      this.$emit('click')
    },
  },

  mounted() {
    // if there were optional attributes assigned, then set them on the button
    if (this.optionalAttributes) {
      Object.keys(this.optionalAttributes).forEach(key => {
        this.$el.setAttribute(key, this.optionalAttributes[key])
      })
    }
  },
}
</script>
