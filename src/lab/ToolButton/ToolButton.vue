<script>
export default {
  components: {},
  props: {
    id: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
  },
  computed: {
    iconSrc() {
      return `${process.env.BASE_URL}/icons/${this.icon}.svg`
    },
    iconColor() {
      if (!this.color || this.color.length === 0) {
        return '#000'
      } else {
        return this.color
      }
    },
  },
  methods: {
    buttonClick(event) {
      this.$emit('button-click', { event: event, name: this.id })
    },
  },
}
</script>

<template>
  <button :id="id" @click="buttonClick($event)">
    <div class="tool-button-icon"><img :src="iconSrc" :color="iconColor" :title="label" /></div>
    <div class="tool-bar-label">{{ label }}</div>
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 5px;
  margin: 2px;
  cursor: pointer;
}
.tool-button-icon {
  text-align: center;
  padding: 5px;
}
.tool-bar-label {
  text-align: center;
}
</style>
