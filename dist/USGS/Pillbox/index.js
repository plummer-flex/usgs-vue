(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Pillbox = {}, global.Vue));
})(this, (function (exports, Vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  var EventBus = new Vue__default["default"]();

  var KEY_DELETE = 46;
  var KEY_BACKSPACE = 8;

  var script$1 = {
    name: 'usa-icon-close',
    props: {
      classNames: {
        type: String,
        default: ''
      }
    }
  };

  var _hoisted_1$1 = /*#__PURE__*/Vue.createElementVNode("path", {
    d: "M451.4 613.7l248.1-248.1c25.6-25.1 26-66.3.8-91.9s-66.3-26-91.9-.8l-.8.8-248.1 248.1-248.1-248.1c-25.4-25.4-66.5-25.4-91.9 0s-25.4 66.5 0 91.9l248.1 248.1L19.5 861.8c-25.6 25.1-26 66.3-.8 91.9s66.3 26 91.9.8l.8-.8 248.1-248.1 248.1 248.1c25.4 25.4 66.5 25.4 91.9 0s25.4-66.5 0-91.9L451.4 613.7z"
  }, null, -1);

  var _hoisted_2$1 = [_hoisted_1$1];
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return Vue.openBlock(), Vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 718.9 1200",
      class: Vue.normalizeClass(["usa-icon-svg usa-icon-close-svg", $props.classNames]),
      onClick: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.$emit('click', $event);
      })
    }, _hoisted_2$1, 2);
  }

  script$1.render = render$1;

  var script = {
    components: {
      UsaIconClose: script$1
    },
    data: function data() {
      return {
        selectedValues: []
      };
    },
    props: {
      subscription: {
        type: String,
        required: true
      }
    },
    methods: {
      deletePill: function deletePill(opName) {
        var _this = this;

        if (this.selectedValues.indexOf(opName) >= 0) {
          setTimeout(function () {
            var idx = _this.selectedValues.indexOf(opName);

            var lastIdx = _this.selectedValues.length - 1;

            _this.selectedValues.splice(idx, 1);

            EventBus.$emit("pill-disolve", {
              subscription: _this.subscription,
              option: opName
            });

            if (idx >= lastIdx) {
              EventBus.$emit("focus-input", {
                subscription: _this.subscription,
                option: ""
              });
            } else {
              _this.focusNextElement();
            }
          }, 100);
        }
      },
      pillKeyDown: function pillKeyDown(event, opName) {
        if (event.keyCode === KEY_DELETE || event.keyCode === KEY_BACKSPACE) {
          this.deletePill(opName);
        }
      },
      pillFocus: function pillFocus() {
        this.focusedElement = "multi-select-pill";
      },
      focusNextElement: function focusNextElement() {
        // add all elements we want to include in our selection
        var focussableElements = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';

        if (document.activeElement) {
          var focussable = Array.prototype.filter.call(document.querySelectorAll(focussableElements), function (element) {
            // check for visibility while always include the current activeElement
            return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement;
          });
          var index = focussable.indexOf(document.activeElement);

          if (index > -1) {
            var nextElement = focussable[index] || focussable[0];
            nextElement.focus();
          }
        }
      },
      pillUpdater: function pillUpdater(event) {
        if (this.subscription === event.subscription) {
          this.selectedValues.push(event.option);
        }
      },
      pillRemove: function pillRemove(event) {
        if (this.subscription === event.subscription) {
          this.deletePill(event.option);
        }
      },
      pillGroupAdd: function pillGroupAdd(event) {
        if (this.subscription === event.subscription) {
          this.selectedValues = event.options;
        }
      },
      purgeAllPills: function purgeAllPills(event) {
        if (this.subscription === event.subscription) {
          this.selectedValues = [];
        }
      }
    },
    created: function created() {
      EventBus.$on("pill-update", this.pillUpdater);
      EventBus.$on("pill-remove", this.pillRemove);
      EventBus.$on("pill-group-add", this.pillGroupAdd);
      EventBus.$on("purge-all-pills", this.purgeAllPills);
    },
    destroyed: function destroyed() {
      EventBus.$off("pill-update", this.pillUpdater);
      EventBus.$off("pill-remove", this.pillRemove);
      EventBus.$off("pill-group-add", this.pillGroupAdd);
      EventBus.$off("purge-all-pills", this.purgeAllPills);
    }
  };

  var _hoisted_1 = {
    class: "pills",
    ref: "pills"
  };
  var _hoisted_2 = ["title", "onClick", "onKeydown"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_UsaIconClose = Vue.resolveComponent("UsaIconClose");

    return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [(Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList($data.selectedValues, function (item, index) {
      return Vue.openBlock(), Vue.createElementBlock("span", {
        class: "multi-select-pill",
        tabindex: "0",
        ref: "pill",
        title: item,
        key: index,
        onClick: function onClick($event) {
          return $options.deletePill(item);
        },
        onKeydown: function onKeydown($event) {
          return $options.pillKeyDown($event, item);
        },
        onFocus: _cache[0] || (_cache[0] = function () {
          return $options.pillFocus && $options.pillFocus.apply($options, arguments);
        })
      }, [Vue.createTextVNode(Vue.toDisplayString(item) + " ", 1), Vue.createVNode(_component_UsaIconClose, {
        classNames: "wu-icon icon-close-svg"
      })], 40, _hoisted_2);
    }), 128))], 512);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
