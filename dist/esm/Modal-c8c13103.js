import { s as script$1 } from './IconClose-ac068ca3.js';
import { resolveComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, renderSlot, createVNode, vShow } from 'vue';

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
  var _component_UsaIconClose = resolveComponent("UsaIconClose");

  return openBlock(), createBlock(Transition, {
    name: "fade"
  }, {
    default: withCtx(function () {
      return [withDirectives(createElementVNode("div", {
        class: normalizeClass(["wuds-modal", {
          'open fade-in-background': $data.show
        }]),
        "aria-modal": "true",
        tabindex: "-1",
        ref: "modal-window",
        id: $props.id,
        "aria-labelledby": "".concat($props.id, "_label")
      }, [createElementVNode("div", {
        class: "backdrop",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.escapeHandler && $options.escapeHandler.apply($options, arguments);
        })
      }), createElementVNode("div", _hoisted_2, [createElementVNode("header", _hoisted_3, [createElementVNode("h2", null, [renderSlot(_ctx.$slots, "header")]), createVNode(_component_UsaIconClose, {
        classNames: "close-btn float-right",
        onClick: $options.closeModal
      }, null, 8, ["onClick"])]), createElementVNode("section", _hoisted_4, [renderSlot(_ctx.$slots, "body")]), createElementVNode("footer", _hoisted_5, [renderSlot(_ctx.$slots, "footer")])], 512)], 10, _hoisted_1), [[vShow, $data.show]])];
    }),
    _: 3
  });
}

script.render = render;

export { script as s };
