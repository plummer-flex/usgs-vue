(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Icon = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

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
    return vue.openBlock(), vue.createElementBlock("a", {
      class: vue.normalizeClass(["usa-icon", $props.className]),
      href: $props.link,
      style: vue.normalizeStyle({
        color: $options.iconColor
      })
    }, [(vue.openBlock(), vue.createElementBlock("svg", {
      "aria-labelledby": $props.iconId,
      role: "img",
      src: $props.imageSource
    }, [vue.createElementVNode("title", {
      id: $props.iconId
    }, vue.toDisplayString($props.title) + " " + vue.toDisplayString($props.imageSource), 9, _hoisted_3), vue.createElementVNode("use", vue.normalizeProps(vue.guardReactiveProps({
      'xlink:href': $props.imageSource
    })), null, 16)], 8, _hoisted_2))], 14, _hoisted_1);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
