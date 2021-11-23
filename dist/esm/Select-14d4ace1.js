import { openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, Fragment, renderList } from 'vue';

var script = {
  name: "usa-select",
  emits: ["input"],
  props: {
    name: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    },
    classNames: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    handleInput: function handleInput(event) {
      this.$emit("item-selected", event.target.value);
    },
    focusInput: function focusInput() {
      this.$refs["select-box"].focus();
    }
  }
};

var _hoisted_1 = ["for"];
var _hoisted_2 = ["name", "id", "value", "disabled"];

var _hoisted_3 = /*#__PURE__*/createElementVNode("option", {
  value: "",
  style: {
    "display": "none"
  }
}, "- Select -", -1);

var _hoisted_4 = ["value", "selected"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["usa-form-group", $props.classNames])
  }, [createElementVNode("label", {
    class: "usa-label",
    for: $props.id
  }, toDisplayString($props.label), 9, _hoisted_1), createElementVNode("select", {
    class: "usa-select",
    ref: "select-box",
    name: $props.name,
    id: $props.id,
    value: $props.value,
    disabled: $props.disabled,
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.handleInput && $options.handleInput.apply($options, arguments);
    })
  }, [_hoisted_3, (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, function (option) {
    return openBlock(), createElementBlock("option", {
      key: option.value,
      value: option.value,
      selected: option.value === $props.value
    }, toDisplayString(option.label), 9, _hoisted_4);
  }), 128))], 40, _hoisted_2)], 2);
}

script.render = render;

export { script as s };
