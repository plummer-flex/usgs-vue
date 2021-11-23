(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AlertMessage = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script$3 = {
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

  var _hoisted_1$3 = ["type", "disabled"];
  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass($options.classes),
      type: $props.type,
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = function () {
        return $options.onClick && $options.onClick.apply($options, arguments);
      })
    }, [vue.renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$3);
  }

  script$3.render = render$3;

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

  var script$2 = {
    name: 'usa-icon-close',
    props: {
      classNames: {
        type: String,
        default: ''
      }
    }
  };

  var _hoisted_1$2 = /*#__PURE__*/vue.createElementVNode("path", {
    d: "M451.4 613.7l248.1-248.1c25.6-25.1 26-66.3.8-91.9s-66.3-26-91.9-.8l-.8.8-248.1 248.1-248.1-248.1c-25.4-25.4-66.5-25.4-91.9 0s-25.4 66.5 0 91.9l248.1 248.1L19.5 861.8c-25.6 25.1-26 66.3-.8 91.9s66.3 26 91.9.8l.8-.8 248.1-248.1 248.1 248.1c25.4 25.4 66.5 25.4 91.9 0s25.4-66.5 0-91.9L451.4 613.7z"
  }, null, -1);

  var _hoisted_2$1 = [_hoisted_1$2];
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 718.9 1200",
      class: vue.normalizeClass(["usa-icon-svg usa-icon-close-svg", $props.classNames]),
      onClick: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.$emit('click', $event);
      })
    }, _hoisted_2$1, 2);
  }

  script$2.render = render$2;

  var script$1 = {
    name: "usgs-modal",
    mixins: [Escapable],
    components: {
      UsaIconClose: script$2
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

  var _hoisted_1$1 = ["id", "aria-labelledby"];
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
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
        }, null, 8, ["onClick"])]), vue.createElementVNode("section", _hoisted_4, [vue.renderSlot(_ctx.$slots, "body")]), vue.createElementVNode("footer", _hoisted_5, [vue.renderSlot(_ctx.$slots, "footer")])], 512)], 10, _hoisted_1$1), [[vue.vShow, $data.show]])];
      }),
      _: 3
    });
  }

  script$1.render = render$1;

  var script = {
    components: {
      UsaButton: script$3,
      Modal: script$1
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      message: {
        type: String,
        default: ""
      },
      subscriptionId: {
        type: String,
        required: true
      }
    },
    data: function data() {
      return {};
    },
    methods: {
      openModal: function openModal() {
        this.$refs["alert-modal-id"].openModal();
        this.$emit("opened-alert-message-box", {
          subscription: this.subscriptionId
        });
      },
      modalOkay: function modalOkay() {
        this.$refs["alert-modal-id"].closeModal();
        this.$emit("closed-alert-message-box", {
          subscription: this.subscriptionId
        });
      }
    }
  };

  var _hoisted_1 = /*#__PURE__*/vue.createTextVNode("OK");

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_UsaButton = vue.resolveComponent("UsaButton");

    var _component_Modal = vue.resolveComponent("Modal");

    return vue.openBlock(), vue.createBlock(_component_Modal, {
      id: "alert-modal-id",
      ref: "alert-modal-id"
    }, {
      header: vue.withCtx(function () {
        return [vue.createTextVNode(vue.toDisplayString($props.title), 1)];
      }),
      body: vue.withCtx(function () {
        return [vue.createTextVNode(vue.toDisplayString($props.message), 1)];
      }),
      footer: vue.withCtx(function () {
        return [vue.createVNode(_component_UsaButton, {
          tabindex: "0",
          className: "ok-btn",
          variant: "default",
          color: "default",
          onClick: $options.modalOkay
        }, {
          default: vue.withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])];
      }),
      _: 1
    }, 512);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
