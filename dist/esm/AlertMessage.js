import { s as script$1 } from './Button-21ccc711.js';
import { s as script$2 } from './Modal-c8c13103.js';
import { resolveComponent, openBlock, createBlock, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import './IconClose-ac068ca3.js';

var script = {
  components: {
    UsaButton: script$1,
    Modal: script$2
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

var _hoisted_1 = /*#__PURE__*/createTextVNode("OK");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_UsaButton = resolveComponent("UsaButton");

  var _component_Modal = resolveComponent("Modal");

  return openBlock(), createBlock(_component_Modal, {
    id: "alert-modal-id",
    ref: "alert-modal-id"
  }, {
    header: withCtx(function () {
      return [createTextVNode(toDisplayString($props.title), 1)];
    }),
    body: withCtx(function () {
      return [createTextVNode(toDisplayString($props.message), 1)];
    }),
    footer: withCtx(function () {
      return [createVNode(_component_UsaButton, {
        tabindex: "0",
        className: "ok-btn",
        variant: "default",
        color: "default",
        onClick: $options.modalOkay
      }, {
        default: withCtx(function () {
          return [_hoisted_1];
        }),
        _: 1
      }, 8, ["onClick"])];
    }),
    _: 1
  }, 512);
}

script.render = render;

export { script as default };
