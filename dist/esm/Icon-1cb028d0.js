import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, normalizeProps, guardReactiveProps } from 'vue';

var script = {
  name: "usa-icon",
  props: {
    className: {
      type: String,
      required: false
    },
    imageSource: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    iconId: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    iconColor: function iconColor() {
      if (this.color === undefined || this.color.length < 1) {
        return "white";
      } else {
        return this.color;
      }
    }
  }
};

var _hoisted_1 = ["href"];
var _hoisted_2 = ["aria-labelledby", "src"];
var _hoisted_3 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(["usa-icon", $props.className]),
    href: $props.link,
    style: normalizeStyle({
      color: $options.iconColor
    })
  }, [(openBlock(), createElementBlock("svg", {
    "aria-labelledby": $props.iconId,
    role: "img",
    src: $props.imageSource
  }, [createElementVNode("title", {
    id: $props.iconId
  }, toDisplayString($props.title) + " " + toDisplayString($props.imageSource), 9, _hoisted_3), createElementVNode("use", normalizeProps(guardReactiveProps({
    'xlink:href': $props.imageSource
  })), null, 16)], 8, _hoisted_2))], 14, _hoisted_1);
}

script.render = render;

export { script as s };
