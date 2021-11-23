(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IconButton = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script$1 = {
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

  var _hoisted_1$1 = ["href"];
  var _hoisted_2 = ["aria-labelledby", "src"];
  var _hoisted_3 = ["id"];
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
    })), null, 16)], 8, _hoisted_2))], 14, _hoisted_1$1);
  }

  script$1.render = render$1;

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
    var _component_usa_icon = vue.resolveComponent("usa-icon");

    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass([$props.className, "round-icon-link"])
    }, [vue.createElementVNode("div", {
      class: "circle-icon",
      style: vue.normalizeStyle({
        backgroundColor: $options.bgColor,
        color: $options.textColor
      })
    }, [vue.createVNode(_component_usa_icon, {
      "class-name": $props.className,
      "image-source": $props.imageSource,
      title: $options.iconTitle,
      link: $props.link,
      "icon-id": $data.iconId,
      color: $options.textColor
    }, null, 8, ["class-name", "image-source", "title", "link", "icon-id", "color"])], 4), vue.createElementVNode("a", {
      href: $props.link
    }, vue.toDisplayString($props.text), 9, _hoisted_1)], 2);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
