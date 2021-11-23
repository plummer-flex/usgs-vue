import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, normalizeClass } from 'vue';

var script = {
  name: 'usa-textarea',
  props: {
    name: {
      type: String,
      required: false
    },
    id: {
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
    error: {
      type: String,
      required: false
    },
    helper: {
      type: String,
      required: false
    },
    success: {
      type: Boolean,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    rows: {
      type: Number,
      required: false,
      default: 3
    }
  },
  computed: {
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
        'usa-textarea': true,
        'usa-textarea--error': this.error,
        'usa-input--success': this.success
      };
    }
  },
  methods: {
    handleInput: function handleInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};

var _hoisted_1 = {
  class: "usa-form-group"
};
var _hoisted_2 = ["for"];
var _hoisted_3 = ["id"];
var _hoisted_4 = ["id", "name", "value", "aria-describedby"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("label", {
    class: "usa-label",
    for: $props.id
  }, toDisplayString($props.label), 9, _hoisted_2), $props.hint ? (openBlock(), createElementBlock("span", {
    key: 0,
    id: $options.hintId,
    class: "usa-hint"
  }, toDisplayString($props.hint), 9, _hoisted_3)) : createCommentVNode("", true), createElementVNode("textarea", {
    class: normalizeClass($options.classes),
    id: $props.id,
    name: $props.name,
    value: $props.value,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.handleInput && $options.handleInput.apply($options, arguments);
    }),
    "aria-describedby": $options.ariaDescribedBy
  }, null, 42, _hoisted_4), $props.error ? (openBlock(), createElementBlock("span", {
    key: 1,
    class: "usa-error-message",
    id: $options.errorId
  }, toDisplayString($props.error), 9, _hoisted_5)) : createCommentVNode("", true), $props.helper && !$props.error ? (openBlock(), createElementBlock("span", {
    key: 2,
    id: $options.helperId,
    class: "usa-hint usa-character-count__message",
    "aria-live": "polite"
  }, toDisplayString($props.helper), 9, _hoisted_6)) : createCommentVNode("", true)]);
}

script.render = render;

export { script as s };
