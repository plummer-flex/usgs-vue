(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Accordion = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

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
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createElementVNode("h2", _hoisted_2, [vue.createElementVNode("button", {
      class: "usa-accordion__button",
      "aria-expanded": "false",
      "aria-controls": $props.id
    }, vue.toDisplayString($props.title), 9, _hoisted_3)]), vue.createElementVNode("div", {
      id: $props.id,
      class: "usa-accordion__content usa-prose"
    }, [vue.renderSlot(_ctx.$slots, "default")], 8, _hoisted_4)]);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
