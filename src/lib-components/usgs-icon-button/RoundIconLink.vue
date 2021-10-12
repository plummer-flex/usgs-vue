<script>
import usaIcon from '@/components/USWDS/Icon/Icon'
export default {
  data() {
    return {
      iconId: 'my-icon-id-123',
    }
  },
  components: {
    usaIcon,
  },
  props: {
    className: {
      type: String,
      required: true,
    },
    imageSource: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
  },
  computed: {
    textColor: function() {
      if (this.color === undefined || this.color.length < 1) {
        return 'white'
      } else {
        return this.color
      }
    },
    bgColor: function() {
      if (this.backgroundColor === undefined || this.backgroundColor.length < 1) {
        return 'black'
      } else {
        return this.backgroundColor
      }
    },
    iconTitle: function() {
      if (this.title === undefined || this.title.length < 1) {
        return this.text
      } else {
        return this.title
      }
    },
  },
}
</script>

<template>
  <div :class="className" class="round-icon-link">
    <div class="circle-icon" :style="{ backgroundColor: bgColor, color: textColor }">
      <usa-icon
        :class-name="className"
        :image-source="imageSource"
        :title="iconTitle"
        :link="link"
        :icon-id="iconId"
        :color="textColor"
      ></usa-icon>
    </div>
    <a :href="link">{{ text }}</a>
  </div>
</template>

<style lang="scss" scoped>
.round-icon-link {
  display: inline-block;
  width: auto;
  height: auto;
  text-align: center;
  .circle-icon {
    display: block;
    padding: 15px;
    border-radius: 100%;
  }
}
</style>
