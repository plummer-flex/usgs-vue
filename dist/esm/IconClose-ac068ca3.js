import { openBlock, createElementBlock, normalizeClass, createElementVNode } from 'vue';

var script = {
  name: 'usa-icon-close',
  props: {
    classNames: {
      type: String,
      default: ''
    }
  }
};

var _hoisted_1 = /*#__PURE__*/createElementVNode("path", {
  d: "M451.4 613.7l248.1-248.1c25.6-25.1 26-66.3.8-91.9s-66.3-26-91.9-.8l-.8.8-248.1 248.1-248.1-248.1c-25.4-25.4-66.5-25.4-91.9 0s-25.4 66.5 0 91.9l248.1 248.1L19.5 861.8c-25.6 25.1-26 66.3-.8 91.9s66.3 26 91.9.8l.8-.8 248.1-248.1 248.1 248.1c25.4 25.4 66.5 25.4 91.9 0s25.4-66.5 0-91.9L451.4 613.7z"
}, null, -1);

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 718.9 1200",
    class: normalizeClass(["usa-icon-svg usa-icon-close-svg", $props.classNames]),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('click', $event);
    })
  }, _hoisted_2, 2);
}

script.render = render;

export { script as s };
