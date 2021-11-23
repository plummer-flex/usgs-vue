(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Button = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'usa-button',
    emits: ['click'],
    props: {
      className: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'default',
        validator: function validator(value) {
          var valid = ['default', 'base', 'secondary', 'accent-cool', 'accent-warm'];
          return valid.includes(value);
        }
      },
      variant: {
        type: String,
        default: 'default',
        validator: function validator(value) {
          var valid = ['default', 'outline', 'inverse', 'unstyled'];
          return valid.includes(value);
        }
      },
      size: {
        type: String,
        default: 'regular',
        validator: function validator(value) {
          var valid = ['regular', 'big'];
          return valid.includes(value);
        }
      },
      type: {
        type: String,
        default: 'button'
      },
      optionalAttributes: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    computed: {
      classes: function classes() {
        var classList = {
          'usa-button': true,
          'usa-button--default': this.color === 'default',
          'usa-button--secondary': this.color === 'secondary',
          'usa-button--accent-warm': this.color === 'accent-warm',
          'usa-button--accent-cool': this.color === 'accent-cool',
          'usa-button--base': this.color === 'base',
          'usa-button--big': this.size === 'big',
          'usa-button--outline': this.variant === 'outline' || this.variant === 'inverse',
          'usa-button--inverse': this.variant === 'inverse',
          'usa-button--unstyled': this.variant === 'unstyled'
        };

        if (this.className.length > 0) {
          var classArr = this.className.split(/\s/);
          classArr.forEach(function (cls) {
            classList[cls] = true;
          });
        }

        return classList;
      }
    },
    methods: {
      onClick: function onClick() {
        this.$emit('click');
      }
    },
    mounted: function mounted() {
      var _this = this;

      // if there were optional attributes assigned, then set them on the button
      if (this.optionalAttributes) {
        Object.keys(this.optionalAttributes).forEach(function (key) {
          _this.$el.setAttribute(key, _this.optionalAttributes[key]);
        });
      }
    }
  };

  var _hoisted_1 = ["type", "disabled"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass($options.classes),
      type: $props.type,
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = function () {
        return $options.onClick && $options.onClick.apply($options, arguments);
      })
    }, [vue.renderSlot(_ctx.$slots, "default")], 10, _hoisted_1);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
