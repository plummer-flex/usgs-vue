import { openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString } from 'vue';

var script = {
  name: "usa-alert",
  props: {
    title: {
      type: String,
      required: false
    },
    alertId: {
      type: Number,
      required: true
    },
    message: {
      type: String,
      required: false
    },
    variant: {
      type: String,
      default: "info",
      validator: function validator(value) {
        var valid = ["info", "warning", "error", "success"];
        return valid.includes(value);
      }
    },
    size: {
      type: String,
      default: "regular",
      validator: function validator(value) {
        var valid = ["regular", "slim"];
        return valid.includes(value);
      }
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes: function classes() {
      return {
        "usa-alert": true,
        "usa-alert--info": this.variant === "info",
        "usa-alert--warning": this.variant === "warning",
        "usa-alert--error": this.variant === "error",
        "usa-alert--success": this.variant === "success",
        "usa-alert--slim": this.size === "slim",
        "usa-alert--no-icon": this.icon === false
      };
    }
  },
  methods: {}
};

var _hoisted_1 = {
  class: "usa-alert__body"
};
var _hoisted_2 = {
  class: "usa-alert__heading"
};
var _hoisted_3 = {
  class: "usa-alert__text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('alert-click', $props.alertId);
    })
  }, [createElementVNode("div", _hoisted_1, [createElementVNode("h3", _hoisted_2, toDisplayString($props.title), 1), createElementVNode("p", _hoisted_3, toDisplayString($props.message), 1)])], 2);
}

script.render = render;

export { script as default };
