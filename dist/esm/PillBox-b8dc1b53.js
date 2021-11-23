import Vue, { resolveComponent, openBlock, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, createVNode } from 'vue';
import { a as KEY_DELETE, b as KEY_BACKSPACE } from './commonKeyCodes-03ca1dc1.js';
import { s as script$1 } from './IconClose-ac068ca3.js';

var EventBus = new Vue();

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
  var _component_UsaIconClose = resolveComponent("UsaIconClose");

  return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.selectedValues, function (item, index) {
    return openBlock(), createElementBlock("span", {
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
    }, [createTextVNode(toDisplayString(item) + " ", 1), createVNode(_component_UsaIconClose, {
      classNames: "wu-icon icon-close-svg"
    })], 40, _hoisted_2);
  }), 128))], 512);
}

script.render = render;

export { EventBus as E, script as s };
