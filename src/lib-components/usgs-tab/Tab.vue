<script>
import { EventBus } from '@/event-bus'

export default {
  props: {
    notebookId: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Tab',
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    tabSelectDisolve(event) {
      if (event.subscription === this.notebookId) {
        this.isActive = event.option.name === this.title
      }
    },
  },
  created() {
    EventBus.$on('tab-select', this.tabSelectDisolve)
  },
  destroyed() {
    EventBus.$off('tab-select', this.tabSelectDisolve)
  },
}
</script>

<template lang="html">
  <div class="tab" v-show="isActive" :title="title" :notebook-id="notebookId">
    <slot></slot>
  </div>
</template>
