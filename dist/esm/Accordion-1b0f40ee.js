import { openBlock, createElementBlock, createElementVNode, toDisplayString, renderSlot } from 'vue';

var script = {
  name: 'usa-accordion',
  props: {
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleIsExpanded: function toggleIsExpanded() {
      this.isExpanded = !this.isExpanded;
    }
  }
};

var _hoisted_1 = {
  class: "usa-accordion"
};
var _hoisted_2 = {
  class: "usa-accordion__heading"
};
var _hoisted_3 = ["aria-controls"];
var _hoisted_4 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("h2", _hoisted_2, [createElementVNode("button", {
    class: "usa-accordion__button",
    "aria-expanded": "false",
    "aria-controls": $props.id
  }, toDisplayString($props.title), 9, _hoisted_3)]), createElementVNode("div", {
    id: $props.id,
    class: "usa-accordion__content usa-prose"
  }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_4)]);
}

script.render = render;

export { script as s };
