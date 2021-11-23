import { s as script$1 } from './Icon-1cb028d0.js';
import { resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createVNode, toDisplayString } from 'vue';

var script = {
  data: function data() {
    return {
      iconId: "my-icon-id-123"
    };
  },
  components: {
    usaIcon: script$1
  },
  props: {
    className: {
      type: String,
      required: true
    },
    imageSource: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    backgroundColor: {
      type: String,
      required: false
    }
  },
  computed: {
    textColor: function textColor() {
      if (this.color === undefined || this.color.length < 1) {
        return "white";
      } else {
        return this.color;
      }
    },
    bgColor: function bgColor() {
      if (this.backgroundColor === undefined || this.backgroundColor.length < 1) {
        return "black";
      } else {
        return this.backgroundColor;
      }
    },
    iconTitle: function iconTitle() {
      if (this.title === undefined || this.title.length < 1) {
        return this.text;
      } else {
        return this.title;
      }
    }
  }
};

var _hoisted_1 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_usa_icon = resolveComponent("usa-icon");

  return openBlock(), createElementBlock("div", {
    class: normalizeClass([$props.className, "round-icon-link"])
  }, [createElementVNode("div", {
    class: "circle-icon",
    style: normalizeStyle({
      backgroundColor: $options.bgColor,
      color: $options.textColor
    })
  }, [createVNode(_component_usa_icon, {
    "class-name": $props.className,
    "image-source": $props.imageSource,
    title: $options.iconTitle,
    link: $props.link,
    "icon-id": $data.iconId,
    color: $options.textColor
  }, null, 8, ["class-name", "image-source", "title", "link", "icon-id", "color"])], 4), createElementVNode("a", {
    href: $props.link
  }, toDisplayString($props.text), 9, _hoisted_1)], 2);
}

script.render = render;

export { script as default };
