<template>
  <div class="usa-accordion">
    <!-- Use the accurate heading level to maintain the document outline -->
    <h2 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" :aria-controls="id">
        {{ title }}
      </button>
    </h2>
    <div :id="id" class="usa-accordion__content usa-prose">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'usa-accordion',
  props: {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    toggleIsExpanded() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>
