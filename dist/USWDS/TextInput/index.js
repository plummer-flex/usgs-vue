(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TextInput = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  /**
   * @param name    :string   Name attribute for traditional form submission
   * @param id      :string   CSS ID
   * @param label   :string   Displayed form label asigned to field
   * @param hint    :string   Help hint string displayed on mouseover or for accessibility
   * @param error   :string   Error message displayed by field when an error is encountered
   * @param helper  :string
   * @param value   :string   Value asigned to input field
   */
  var script = {
    name: 'usa-input-text',
    emits: ['input'],
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
        required: true
      },
      hint: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      error: {
        type: String,
        required: false
      },
      helper: {
        type: String,
        required: false
      },
      value: {
        type: String,
        required: false
      },
      type: {
        type: String,
        required: false,
        default: 'text',
        validator: function validator(value) {
          var values = ['text', 'password'];
          return values.includes(value);
        }
      }
    },
    computed: {
      inputName: function inputName() {
        return this.name ? this.name : '';
      },
      inputValue: function inputValue() {
        return this.value ? this.value : '';
      },
      hintId: function hintId() {
        return "".concat(this.id, "-input-hint");
      },
      errorId: function errorId() {
        return "".concat(this.id, "-input-error");
      },
      helperId: function helperId() {
        return "".concat(this.id, "-input-helper");
      },
      ariaDescribedBy: function ariaDescribedBy() {
        return "".concat(this.id, "-input-hint ").concat(this.id, "-input-helper");
      },
      classes: function classes() {
        return {
          'usa-input': true,
          'usa-input--error': this.error,
          'usa-input--success': this.success
        };
      }
    },
    methods: {
      handleInput: function handleInput(event) {
        this.$emit('input', event.target.value);
      },
      focusInput: function focusInput() {
        this.$refs['input-field'].focus();
      },
      handleKeyUp: function handleKeyUp(event) {
        if (event.key === 'Enter') {
          this.$emit('enter', event.target.value);
        }
      }
    }
  };

  var _hoisted_1 = ["for"];
  var _hoisted_2 = ["id"];
  var _hoisted_3 = ["id", "name", "aria-describedby", "value", "placeholder"];
  var _hoisted_4 = {
    key: 1,
    class: "usa-error-message",
    id: "input-error-message"
  };
  var _hoisted_5 = ["id"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["usa-form-group", $props.classNames])
    }, [vue.createElementVNode("label", {
      class: "usa-label",
      for: $props.id
    }, vue.toDisplayString($props.label), 9, _hoisted_1), $props.hint ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 0,
      id: $options.hintId,
      class: "usa-hint"
    }, vue.toDisplayString($props.hint), 9, _hoisted_2)) : vue.createCommentVNode("", true), vue.createElementVNode("input", {
      maxlength: "25",
      ref: "input-field",
      class: vue.normalizeClass($options.classes),
      id: $props.id,
      name: $options.inputName,
      "aria-describedby": $options.ariaDescribedBy,
      value: $options.inputValue,
      placeholder: $props.placeholder,
      onInput: _cache[0] || (_cache[0] = function () {
        return $options.handleInput && $options.handleInput.apply($options, arguments);
      }),
      onKeyup: _cache[1] || (_cache[1] = function () {
        return $options.handleKeyUp && $options.handleKeyUp.apply($options, arguments);
      })
    }, null, 42, _hoisted_3), $props.error ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, vue.toDisplayString($props.error), 1)) : vue.createCommentVNode("", true), $props.helper && !$props.error ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 2,
      id: $options.helperId,
      class: "usa-hint",
      "aria-live": "polite"
    }, vue.toDisplayString($props.helper), 9, _hoisted_5)) : vue.createCommentVNode("", true)], 2);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
