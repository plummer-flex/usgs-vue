<template>
  <div :class="classes" @click="$emit('alert-click', alertId)">
    <div class="usa-alert__body">
      <h3 class="usa-alert__heading">{{ title }}</h3>
      <p class="usa-alert__text">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usa-alert',
  props: {
    title: {
      type: String,
      required: false,
    },
    alertId: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: 'info',
      validator: function(value) {
        const valid = ['info', 'warning', 'error', 'success']
        return valid.includes(value)
      },
    },
    size: {
      type: String,
      default: 'regular',
      validator: function(value) {
        const valid = ['regular', 'slim']
        return valid.includes(value)
      },
    },
    icon: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return {
        'usa-alert': true,
        'usa-alert--info': this.variant === 'info',
        'usa-alert--warning': this.variant === 'warning',
        'usa-alert--error': this.variant === 'error',
        'usa-alert--success': this.variant === 'success',
        'usa-alert--slim': this.size === 'slim',
        'usa-alert--no-icon': this.icon === false,
      }
    },
  },
  methods: {},
}
</script>

<style scoped>
.usa-alert {
  width: 100%;
}
</style>
