import { openBlock, createElementBlock, toDisplayString, createCommentVNode, Fragment, renderList, createElementVNode } from 'vue';

var script = {
  name: 'usa-radio-button',
  emits: ['input'],
  argTypes: {
    onSubmit: {
      action: 'submit'
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String
    }
  },
  methods: {
    handleInput: function handleInput(event) {
      this.$emit('input', event.target.value);
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
var _hoisted_3 = ["id", "name", "value", "checked"];
var _hoisted_4 = ["value", "for"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", _hoisted_1, [$props.legend ? (openBlock(), createElementBlock("legend", _hoisted_2, toDisplayString($props.legend), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, function (option, i) {
    return openBlock(), createElementBlock("div", {
      class: "usa-radio",
      key: option.value
    }, [createElementVNode("input", {
      class: "usa-radio__input",
      id: "".concat($props.id, "--").concat(i),
      type: "radio",
      name: $props.name,
      value: option.value,
      checked: option.value === $props.value,
      onInput: _cache[0] || (_cache[0] = function () {
        return $options.handleInput && $options.handleInput.apply($options, arguments);
      })
    }, null, 40, _hoisted_3), createElementVNode("label", {
      class: "usa-radio__label",
      value: option.value,
      for: "".concat($props.id, "--").concat(i)
    }, toDisplayString(option.label), 9, _hoisted_4)]);
  }), 128))]);
}

script.render = render;

export { script as s };
