(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Modal = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var Escapable = {
    created: function created() {
      var _this = this;

      var escapeHandler = function escapeHandler(e) {
        if (e.key === 'Escape' && _this.escapableVisible) {
          _this.escapeHandler();
        }
      };

      document.addEventListener('keydown', escapeHandler);
      this.$once('hook:destroyed', function () {
        document.removeEventListener('keydown', escapeHandler);
      });
    }
  };

  var script$1 = {
    name: 'usa-icon-close',
    props: {
      classNames: {
        type: String,
        default: ''
      }
    }
  };

  var _hoisted_1$1 = /*#__PURE__*/vue.createElementVNode("path", {
    d: "M451.4 613.7l248.1-248.1c25.6-25.1 26-66.3.8-91.9s-66.3-26-91.9-.8l-.8.8-248.1 248.1-248.1-248.1c-25.4-25.4-66.5-25.4-91.9 0s-25.4 66.5 0 91.9l248.1 248.1L19.5 861.8c-25.6 25.1-26 66.3-.8 91.9s66.3 26 91.9.8l.8-.8 248.1-248.1 248.1 248.1c25.4 25.4 66.5 25.4 91.9 0s25.4-66.5 0-91.9L451.4 613.7z"
  }, null, -1);

  var _hoisted_2$1 = [_hoisted_1$1];
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 718.9 1200",
      class: vue.normalizeClass(["usa-icon-svg usa-icon-close-svg", $props.classNames]),
      onClick: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.$emit('click', $event);
      })
    }, _hoisted_2$1, 2);
  }

  script$1.render = render$1;

  var script = {
    name: "usgs-modal",
    mixins: [Escapable],
    components: {
      UsaIconClose: script$1
    },
    props: {
      id: {
        type: String,
        required: true
      },
      escapable: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        show: false
      };
    },
    methods: {
      openModal: function openModal() {
        var _this = this;

        this.show = true;
        document.querySelector("body").classList.add("overflow-hidden");
        this.$emit("opened", this.id);
        this.$nextTick(function () {
          var frameRef = _this.$refs["dialog-frame"];
          frameRef.focus();
        });
      },
      closeModal: function closeModal() {
        this.show = false;
        document.querySelector("body").classList.remove("overflow-hidden");
        this.$emit("closed", this.id);
      },
      // Handle Escape key
      escapeHandler: function escapeHandler() {
        if (this.escapable) {
          this.closeModal();
        }
      }
    }
  };

  var _hoisted_1 = ["id", "aria-labelledby"];
  var _hoisted_2 = {
    class: "modal-dialog",
    ref: "dialog-frame",
    tabindex: "-1"
  };
  var _hoisted_3 = {
    class: "modal_header"
  };
  var _hoisted_4 = {
    class: "modal_body"
  };
  var _hoisted_5 = {
    class: "modal_footer"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_UsaIconClose = vue.resolveComponent("UsaIconClose");

    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: "fade"
    }, {
      default: vue.withCtx(function () {
        return [vue.withDirectives(vue.createElementVNode("div", {
          class: vue.normalizeClass(["wuds-modal", {
            'open fade-in-background': $data.show
          }]),
          "aria-modal": "true",
          tabindex: "-1",
          ref: "modal-window",
          id: $props.id,
          "aria-labelledby": "".concat($props.id, "_label")
        }, [vue.createElementVNode("div", {
          class: "backdrop",
          onClick: _cache[0] || (_cache[0] = function () {
            return $options.escapeHandler && $options.escapeHandler.apply($options, arguments);
          })
        }), vue.createElementVNode("div", _hoisted_2, [vue.createElementVNode("header", _hoisted_3, [vue.createElementVNode("h2", null, [vue.renderSlot(_ctx.$slots, "header")]), vue.createVNode(_component_UsaIconClose, {
          classNames: "close-btn float-right",
          onClick: $options.closeModal
        }, null, 8, ["onClick"])]), vue.createElementVNode("section", _hoisted_4, [vue.renderSlot(_ctx.$slots, "body")]), vue.createElementVNode("footer", _hoisted_5, [vue.renderSlot(_ctx.$slots, "footer")])], 512)], 10, _hoisted_1), [[vue.vShow, $data.show]])];
      }),
      _: 3
    });
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
