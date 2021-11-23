import { K as KEY_ENTER } from './commonKeyCodes-03ca1dc1.js';
import { resolveComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString, createVNode, withCtx, createTextVNode, createCommentVNode, createBlock } from 'vue';
import _imports_0 from 'uswds/dist/img/close.svg';

/*
 * The usaPrimaryNav component expects the following parameters
 * @param options Options contains a list of menus, links, and form components
 *
 * Options Example:
 *
      const options = {
        basic: [
          {
            type: 'menu',
            label: 'My Menu 1',
            id: 'my-menu-1',
            subItems: [
              {
                label: 'Subitem 1',
                route: 'subItem1RouteName',
              },
              {
                label: 'Subitem 2',
                route: 'subItem2RouteName',
              },
            ]
          },
          {
            type: 'link',
            label: 'My Link 1',
            id: 'my-link-1',
            route: 'linkRoute1',
          },
        ],
        form: [
          {
            type: 'searchField',
            role: 'search',
            id: 'primary-search-field',
            fieldLabel: '',
            buttonLabel: 'Search',
            placeHolder: 'my placehold text',
            inputEmit: 'search-input',
            submitEmit: 'search-submit',
          },
        ]
      }
 *
 */
var script = {
  name: "usa-primary-nav",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  emits: ["search-input", "search-submit"],
  methods: {
    searchFormInput: function searchFormInput(event, id) {
      this.$emit("search-input", {
        id: id,
        event: event
      });
    },
    searchFormKeyDown: function searchFormKeyDown(event, id) {
      if (event.keyCode === KEY_ENTER) {
        this.$emit("search-submit", {
          id: id,
          event: event
        });
      }
    },
    searchFormSubmit: function searchFormSubmit(event, id) {
      this.$emit("search-submit", {
        id: id,
        event: event
      });
    }
  }
};

var _hoisted_1 = {
  "aria-label": "Primary navigation",
  class: "usa-nav"
};

var _hoisted_2 = /*#__PURE__*/createElementVNode("button", {
  class: "usa-nav__close"
}, [/*#__PURE__*/createElementVNode("img", {
  src: _imports_0,
  role: "img",
  alt: "close"
})], -1);

var _hoisted_3 = {
  class: "usa-nav__primary usa-accordion",
  "aria-expanded": "false"
};
var _hoisted_4 = ["aria-controls"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["role"];
var _hoisted_7 = ["for"];
var _hoisted_8 = ["id", "placeholder", "onInput", "onKeydown"];
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  class: "usa-sr-only"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");

  return openBlock(), createElementBlock("nav", _hoisted_1, [_hoisted_2, createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.options.basic, function (option, index) {
    return openBlock(), createElementBlock("li", {
      class: "usa-nav__primary-item",
      key: index
    }, [option.type === 'menu' ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createElementVNode("button", {
      class: "usa-accordion__button usa-nav__link usa-current",
      "aria-expanded": "false",
      "aria-controls": "basic-nav-section-".concat(option.id)
    }, [createElementVNode("span", null, toDisplayString(option.label), 1)], 8, _hoisted_4), createElementVNode("ul", {
      id: "basic-nav-section-".concat(option.id),
      class: "usa-nav__submenu",
      hidden: ""
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(option.subItems, function (submenu, subindex) {
      return openBlock(), createElementBlock("li", {
        class: "usa-nav__submenu-item",
        key: subindex
      }, [createVNode(_component_router_link, {
        to: {
          name: submenu.route
        }
      }, {
        default: withCtx(function () {
          return [createTextVNode(toDisplayString(submenu.label), 1)];
        }),
        _: 2
      }, 1032, ["to"])]);
    }), 128))], 8, _hoisted_5)], 64)) : createCommentVNode("", true), option.type === 'link' ? (openBlock(), createBlock(_component_router_link, {
      key: 1,
      class: "usa-nav__link",
      to: {
        name: option.route
      },
      id: "usa-nav-link-".concat(option.id)
    }, {
      default: withCtx(function () {
        return [createElementVNode("span", null, toDisplayString(option.label), 1)];
      }),
      _: 2
    }, 1032, ["to", "id"])) : createCommentVNode("", true)]);
  }), 128))]), (openBlock(true), createElementBlock(Fragment, null, renderList($props.options.form, function (form, formIndex) {
    return openBlock(), createElementBlock("div", {
      class: "usa-search usa-search--small",
      key: formIndex,
      role: form.role
    }, [form.type === 'searchField' ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createElementVNode("label", {
      class: "usa-sr-only",
      for: form.id
    }, toDisplayString(form.fieldLabel), 9, _hoisted_7), createElementVNode("input", {
      class: "usa-input",
      type: "search",
      id: form.id,
      placeholder: form.placeHolder,
      onInput: function onInput($event) {
        return $options.searchFormInput($event, form.id);
      },
      onKeydown: function onKeydown($event) {
        return $options.searchFormKeyDown($event, form.id);
      }
    }, null, 40, _hoisted_8), createElementVNode("button", {
      class: "usa-button",
      type: "submit",
      onClick: function onClick($event) {
        return $options.searchFormSubmit($event, form.id);
      }
    }, [createElementVNode("span", _hoisted_10, toDisplayString(form.buttonLabel), 1)], 8, _hoisted_9)], 64)) : createCommentVNode("", true)], 8, _hoisted_6);
  }), 128))]);
}

script.render = render;

export { script as s };
