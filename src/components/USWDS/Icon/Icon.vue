<template>
  <a
    class="usa-icon"
    :href="link"
    :class="className"
    :style="{ color: iconColor }"
  >
    <svg :aria-labelledby="iconId" role="img" :src="imageSource">
      <title :id="iconId">{{ title }} {{ imageSource }}</title>
      <use v-bind="{ 'xlink:href': imageSource }"></use>
    </svg>
  </a>
</template>

<script>
export default {
  name: "usa-icon",
  props: {
    className: {
      type: String,
      required: false,
    },
    imageSource: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    iconId: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
  },
  computed: {
    iconColor: function() {
      if (this.color === undefined || this.color.length < 1) {
        return "white";
      } else {
        return this.color;
      }
    },
  },
};
</script>
