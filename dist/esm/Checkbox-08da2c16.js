import { openBlock, createElementBlock, toDisplayString, createCommentVNode, createElementVNode } from 'vue';

var script = {
  name: 'usa-checkbox',
  emits: ['input'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean
    }
  },
  methods: {
    handleInput: function handleInput(event) {
      this.$emit('input', event.target.checked);
    }
  }
};

var _hoisted_1 = {
  class: "usa-fieldset"
};
var _hoisted_2 = {
  key: 0,
  class: "usa-legend"
};
var _hoisted_3 = {
  class: "usa-checkbox"
};
var _hoisted_4 = ["id", "name", "value", "checked"];
var _hoisted_5 = ["for"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", _hoisted_1, [$props.legend ? (openBlock(), createElementBlock("legend", _hoisted_2, toDisplayString($props.legend), 1)) : createCommentVNode("", true), createElementVNode("div", _hoisted_3, [createElementVNode("input", {
    type: "checkbox",
    class: "usa-checkbox__input",
    id: $props.id,
    name: $props.name,
    value: $props.value,
    checked: $props.value,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.handleInput && $options.handleInput.apply($options, arguments);
    })
  }, null, 40, _hoisted_4), createElementVNode("label", {
    class: "usa-checkbox__label",
    for: $props.id
  }, toDisplayString($props.label), 9, _hoisted_5)])]);
}

script.render = render;

export { script as s };
