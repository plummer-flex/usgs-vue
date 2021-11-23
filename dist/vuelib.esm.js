import { openBlock, createElementBlock, createElementVNode, toDisplayString, renderSlot, createStaticVNode, createTextVNode, normalizeClass, createCommentVNode, normalizeStyle, normalizeProps, guardReactiveProps, resolveComponent, Fragment, renderList, createVNode, withCtx, createBlock } from 'vue';
import iconHttps from 'uswds/src/img/icon-https.svg';
import iconDotGov from 'uswds/src/img/icon-dot-gov.svg';
import iconLock from 'uswds/dist/img/lock.svg';
import iconUsFlagSmall from 'uswds/src/img/us_flag_small.png';
import _imports_0 from 'uswds/dist/img/close.svg';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var script$a = {
  name: 'usa-accordion',
  props: {
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleIsExpanded: function toggleIsExpanded() {
      this.isExpanded = !this.isExpanded;
    }
  }
};

var _hoisted_1$a = {
  class: "usa-accordion"
};
var _hoisted_2$9 = {
  class: "usa-accordion__heading"
};
var _hoisted_3$9 = ["aria-controls"];
var _hoisted_4$8 = ["id"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [createElementVNode("h2", _hoisted_2$9, [createElementVNode("button", {
    class: "usa-accordion__button",
    "aria-expanded": "false",
    "aria-controls": $props.id
  }, toDisplayString($props.title), 9, _hoisted_3$9)]), createElementVNode("div", {
    id: $props.id,
    class: "usa-accordion__content usa-prose"
  }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_4$8)]);
}

script$a.render = render$a;

var script$9 = {
  name: 'usa-banner',
  data: function data() {
    return {
      iconHttps: iconHttps,
      iconDotGov: iconDotGov,
      iconLock: iconLock,
      iconUsFlagSmall: iconUsFlagSmall
    };
  }
};

var _hoisted_1$9 = {
  class: "usa-banner",
  "aria-label": "Official government website"
};
var _hoisted_2$8 = {
  class: "usa-accordion"
};
var _hoisted_3$8 = {
  class: "usa-banner__header"
};
var _hoisted_4$7 = {
  class: "usa-banner__inner"
};
var _hoisted_5$5 = {
  class: "grid-col-auto"
};
var _hoisted_6$2 = ["src"];

var _hoisted_7$1 = /*#__PURE__*/createStaticVNode("<div class=\"grid-col-fill tablet:grid-col-auto\"><p class=\"usa-banner__header-text\"> An official website of the United States government </p><p class=\"usa-banner__header-action\" aria-hidden=\"true\"> Here’s how you know </p></div><button class=\"usa-accordion__button usa-banner__button\" aria-expanded=\"false\" aria-controls=\"gov-banner\"><span class=\"usa-banner__button-text\">Here’s how you know</span></button>", 2);

var _hoisted_9$1 = {
  class: "usa-banner__content usa-accordion__content",
  id: "gov-banner",
  hidden: ""
};
var _hoisted_10$1 = {
  class: "grid-row grid-gap-lg"
};
var _hoisted_11 = {
  class: "usa-banner__guidance tablet:grid-col-6"
};
var _hoisted_12 = ["src"];

var _hoisted_13 = /*#__PURE__*/createElementVNode("div", {
  class: "usa-media-block__body"
}, [/*#__PURE__*/createElementVNode("p", null, [/*#__PURE__*/createElementVNode("strong", null, " Official websites use .gov "), /*#__PURE__*/createElementVNode("br"), /*#__PURE__*/createTextVNode(" A "), /*#__PURE__*/createElementVNode("strong", null, ".gov"), /*#__PURE__*/createTextVNode(" website belongs to an official government organization in the United States. ")])], -1);

var _hoisted_14 = {
  class: "usa-banner__guidance tablet:grid-col-6"
};
var _hoisted_15 = ["src"];
var _hoisted_16 = {
  class: "usa-media-block__body"
};

var _hoisted_17 = /*#__PURE__*/createElementVNode("strong", null, " Secure .gov websites use HTTPS ", -1);

var _hoisted_18 = /*#__PURE__*/createElementVNode("br", null, null, -1);

var _hoisted_19 = /*#__PURE__*/createTextVNode(" A ");

var _hoisted_20 = /*#__PURE__*/createElementVNode("strong", null, "lock", -1);

var _hoisted_21 = /*#__PURE__*/createTextVNode(" ( ");

var _hoisted_22 = {
  class: "icon-lock"
};
var _hoisted_23 = ["src"];

var _hoisted_24 = /*#__PURE__*/createTextVNode(" ) or ");

var _hoisted_25 = /*#__PURE__*/createElementVNode("strong", null, "https://", -1);

var _hoisted_26 = /*#__PURE__*/createTextVNode(" means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites. ");

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1$9, [createElementVNode("div", _hoisted_2$8, [createElementVNode("header", _hoisted_3$8, [createElementVNode("div", _hoisted_4$7, [createElementVNode("div", _hoisted_5$5, [createElementVNode("img", {
    class: "usa-banner__header-flag",
    src: $data.iconUsFlagSmall,
    alt: "U.S. flag"
  }, null, 8, _hoisted_6$2)]), _hoisted_7$1])]), createElementVNode("div", _hoisted_9$1, [createElementVNode("div", _hoisted_10$1, [createElementVNode("div", _hoisted_11, [createElementVNode("img", {
    class: "usa-banner__icon usa-media-block__img",
    src: $data.iconDotGov,
    role: "img",
    alt: "",
    "aria-hidden": "true"
  }, null, 8, _hoisted_12), _hoisted_13]), createElementVNode("div", _hoisted_14, [createElementVNode("img", {
    class: "usa-banner__icon usa-media-block__img",
    src: $data.iconHttps,
    role: "img",
    alt: "",
    "aria-hidden": "true"
  }, null, 8, _hoisted_15), createElementVNode("div", _hoisted_16, [createElementVNode("p", null, [_hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, createElementVNode("span", _hoisted_22, [createElementVNode("img", {
    class: "usa-banner__lock-image",
    src: $data.iconLock,
    role: "img",
    alt: "",
    "aria-hidden": "true"
  }, null, 8, _hoisted_23)]), _hoisted_24, _hoisted_25, _hoisted_26])])])])])])]);
}

script$9.render = render$9;

var script$8 = {
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

var _hoisted_1$8 = ["type", "disabled"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass($options.classes),
    type: $props.type,
    disabled: $props.disabled,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.onClick && $options.onClick.apply($options, arguments);
    })
  }, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$8);
}

script$8.render = render$8;

var script$7 = {
  name: 'usa-checkbox',
  emits: ['input'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean
    }
  },
  methods: {
    handleInput: function handleInput(event) {
      this.$emit('input', event.target.checked);
    }
  }
};

var _hoisted_1$7 = {
  class: "usa-fieldset"
};
var _hoisted_2$7 = {
  key: 0,
  class: "usa-legend"
};
var _hoisted_3$7 = {
  class: "usa-checkbox"
};
var _hoisted_4$6 = ["id", "name", "value", "checked"];
var _hoisted_5$4 = ["for"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", _hoisted_1$7, [$props.legend ? (openBlock(), createElementBlock("legend", _hoisted_2$7, toDisplayString($props.legend), 1)) : createCommentVNode("", true), createElementVNode("div", _hoisted_3$7, [createElementVNode("input", {
    type: "checkbox",
    class: "usa-checkbox__input",
    id: $props.id,
    name: $props.name,
    value: $props.value,
    checked: $props.value,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.handleInput && $options.handleInput.apply($options, arguments);
    })
  }, null, 40, _hoisted_4$6), createElementVNode("label", {
    class: "usa-checkbox__label",
    for: $props.id
  }, toDisplayString($props.label), 9, _hoisted_5$4)])]);
}

script$7.render = render$7;

var script$6 = {
  name: "usa-icon",
  props: {
    className: {
      type: String,
      required: false
    },
    imageSource: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    iconId: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    iconColor: function iconColor() {
      if (this.color === undefined || this.color.length < 1) {
        return "white";
      } else {
        return this.color;
      }
    }
  }
};

var _hoisted_1$6 = ["href"];
var _hoisted_2$6 = ["aria-labelledby", "src"];
var _hoisted_3$6 = ["id"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(["usa-icon", $props.className]),
    href: $props.link,
    style: normalizeStyle({
      color: $options.iconColor
    })
  }, [(openBlock(), createElementBlock("svg", {
    "aria-labelledby": $props.iconId,
    role: "img",
    src: $props.imageSource
  }, [createElementVNode("title", {
    id: $props.iconId
  }, toDisplayString($props.title) + " " + toDisplayString($props.imageSource), 9, _hoisted_3$6), createElementVNode("use", normalizeProps(guardReactiveProps({
    'xlink:href': $props.imageSource
  })), null, 16)], 8, _hoisted_2$6))], 14, _hoisted_1$6);
}

script$6.render = render$6;

var KEY_ENTER = 13;

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
var script$5 = {
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

var _hoisted_1$5 = {
  "aria-label": "Primary navigation",
  class: "usa-nav"
};

var _hoisted_2$5 = /*#__PURE__*/createElementVNode("button", {
  class: "usa-nav__close"
}, [/*#__PURE__*/createElementVNode("img", {
  src: _imports_0,
  role: "img",
  alt: "close"
})], -1);

var _hoisted_3$5 = {
  class: "usa-nav__primary usa-accordion",
  "aria-expanded": "false"
};
var _hoisted_4$5 = ["aria-controls"];
var _hoisted_5$3 = ["id"];
var _hoisted_6$1 = ["role"];
var _hoisted_7 = ["for"];
var _hoisted_8 = ["id", "placeholder", "onInput", "onKeydown"];
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  class: "usa-sr-only"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");

  return openBlock(), createElementBlock("nav", _hoisted_1$5, [_hoisted_2$5, createElementVNode("ul", _hoisted_3$5, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.options.basic, function (option, index) {
    return openBlock(), createElementBlock("li", {
      class: "usa-nav__primary-item",
      key: index
    }, [option.type === 'menu' ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createElementVNode("button", {
      class: "usa-accordion__button usa-nav__link usa-current",
      "aria-expanded": "false",
      "aria-controls": "basic-nav-section-".concat(option.id)
    }, [createElementVNode("span", null, toDisplayString(option.label), 1)], 8, _hoisted_4$5), createElementVNode("ul", {
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
    }), 128))], 8, _hoisted_5$3)], 64)) : createCommentVNode("", true), option.type === 'link' ? (openBlock(), createBlock(_component_router_link, {
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
    }, [createElementVNode("span", _hoisted_10, toDisplayString(form.buttonLabel), 1)], 8, _hoisted_9)], 64)) : createCommentVNode("", true)], 8, _hoisted_6$1);
  }), 128))]);
}

script$5.render = render$5;

var script$4 = {
  name: 'usa-radio-button',
  emits: ['input'],
  argTypes: {
    onSubmit: {
      action: 'submit'
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String
    }
  },
  methods: {
    handleInput: function handleInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};

var _hoisted_1$4 = {
  class: "usa-fieldset"
};
var _hoisted_2$4 = {
  key: 0,
  class: "usa-legend"
};
var _hoisted_3$4 = ["id", "name", "value", "checked"];
var _hoisted_4$4 = ["value", "for"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", _hoisted_1$4, [$props.legend ? (openBlock(), createElementBlock("legend", _hoisted_2$4, toDisplayString($props.legend), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, function (option, i) {
    return openBlock(), createElementBlock("div", {
      class: "usa-radio",
      key: option.value
    }, [createElementVNode("input", {
      class: "usa-radio__input",
      id: "".concat($props.id, "--").concat(i),
      type: "radio",
      name: $props.name,
      value: option.value,
      checked: option.value === $props.value,
      onInput: _cache[0] || (_cache[0] = function () {
        return $options.handleInput && $options.handleInput.apply($options, arguments);
      })
    }, null, 40, _hoisted_3$4), createElementVNode("label", {
      class: "usa-radio__label",
      value: option.value,
      for: "".concat($props.id, "--").concat(i)
    }, toDisplayString(option.label), 9, _hoisted_4$4)]);
  }), 128))]);
}

script$4.render = render$4;

var script$3 = {
  name: "usa-select",
  emits: ["input"],
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
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    handleInput: function handleInput(event) {
      this.$emit("item-selected", event.target.value);
    },
    focusInput: function focusInput() {
      this.$refs["select-box"].focus();
    }
  }
};

var _hoisted_1$3 = ["for"];
var _hoisted_2$3 = ["name", "id", "value", "disabled"];

var _hoisted_3$3 = /*#__PURE__*/createElementVNode("option", {
  value: "",
  style: {
    "display": "none"
  }
}, "- Select -", -1);

var _hoisted_4$3 = ["value", "selected"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["usa-form-group", $props.classNames])
  }, [createElementVNode("label", {
    class: "usa-label",
    for: $props.id
  }, toDisplayString($props.label), 9, _hoisted_1$3), createElementVNode("select", {
    class: "usa-select",
    ref: "select-box",
    name: $props.name,
    id: $props.id,
    value: $props.value,
    disabled: $props.disabled,
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.handleInput && $options.handleInput.apply($options, arguments);
    })
  }, [_hoisted_3$3, (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, function (option) {
    return openBlock(), createElementBlock("option", {
      key: option.value,
      value: option.value,
      selected: option.value === $props.value
    }, toDisplayString(option.label), 9, _hoisted_4$3);
  }), 128))], 40, _hoisted_2$3)], 2);
}

script$3.render = render$3;

var script$2 = {
  name: 'usa-table'
};

var _hoisted_1$2 = {
  class: "usa-table"
};

var _hoisted_2$2 = /*#__PURE__*/createElementVNode("caption", null, " Bordered table ", -1);

var _hoisted_3$2 = /*#__PURE__*/createElementVNode("thead", null, [/*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "col"
}, "Document title"), /*#__PURE__*/createElementVNode("th", {
  scope: "col"
}, "Description"), /*#__PURE__*/createElementVNode("th", {
  scope: "col"
}, "Year")])], -1);

var _hoisted_4$2 = /*#__PURE__*/createElementVNode("tbody", null, [/*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Declaration of Independence"), /*#__PURE__*/createElementVNode("td", null, " Statement adopted by the Continental Congress declaring independence from the British Empire. "), /*#__PURE__*/createElementVNode("td", null, "1776")]), /*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Bill of Rights"), /*#__PURE__*/createElementVNode("td", null, " The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms. "), /*#__PURE__*/createElementVNode("td", null, "1791")]), /*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Declaration of Sentiments"), /*#__PURE__*/createElementVNode("td", null, " A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens. "), /*#__PURE__*/createElementVNode("td", null, "1848")]), /*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Emancipation Proclamation"), /*#__PURE__*/createElementVNode("td", null, " An executive order granting freedom to slaves in designated southern states. "), /*#__PURE__*/createElementVNode("td", null, "1863")])], -1);

var _hoisted_5$2 = [_hoisted_2$2, _hoisted_3$2, _hoisted_4$2];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", _hoisted_1$2, _hoisted_5$2);
}

script$2.render = render$2;

var script$1 = {
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

var _hoisted_1$1 = {
  class: "usa-form-group"
};
var _hoisted_2$1 = ["for"];
var _hoisted_3$1 = ["id"];
var _hoisted_4$1 = ["id", "name", "value", "aria-describedby"];
var _hoisted_5$1 = ["id"];
var _hoisted_6 = ["id"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("label", {
    class: "usa-label",
    for: $props.id
  }, toDisplayString($props.label), 9, _hoisted_2$1), $props.hint ? (openBlock(), createElementBlock("span", {
    key: 0,
    id: $options.hintId,
    class: "usa-hint"
  }, toDisplayString($props.hint), 9, _hoisted_3$1)) : createCommentVNode("", true), createElementVNode("textarea", {
    class: normalizeClass($options.classes),
    id: $props.id,
    name: $props.name,
    value: $props.value,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.handleInput && $options.handleInput.apply($options, arguments);
    }),
    "aria-describedby": $options.ariaDescribedBy
  }, null, 42, _hoisted_4$1), $props.error ? (openBlock(), createElementBlock("span", {
    key: 1,
    class: "usa-error-message",
    id: $options.errorId
  }, toDisplayString($props.error), 9, _hoisted_5$1)) : createCommentVNode("", true), $props.helper && !$props.error ? (openBlock(), createElementBlock("span", {
    key: 2,
    id: $options.helperId,
    class: "usa-hint usa-character-count__message",
    "aria-live": "polite"
  }, toDisplayString($props.helper), 9, _hoisted_6)) : createCommentVNode("", true)]);
}

script$1.render = render$1;

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
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["usa-form-group", $props.classNames])
  }, [createElementVNode("label", {
    class: "usa-label",
    for: $props.id
  }, toDisplayString($props.label), 9, _hoisted_1), $props.hint ? (openBlock(), createElementBlock("span", {
    key: 0,
    id: $options.hintId,
    class: "usa-hint"
  }, toDisplayString($props.hint), 9, _hoisted_2)) : createCommentVNode("", true), createElementVNode("input", {
    maxlength: "25",
    ref: "input-field",
    class: normalizeClass($options.classes),
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
  }, null, 42, _hoisted_3), $props.error ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString($props.error), 1)) : createCommentVNode("", true), $props.helper && !$props.error ? (openBlock(), createElementBlock("span", {
    key: 2,
    id: $options.helperId,
    class: "usa-hint",
    "aria-live": "polite"
  }, toDisplayString($props.helper), 9, _hoisted_5)) : createCommentVNode("", true)], 2);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Accordion: script$a,
  Banner: script$9,
  Button: script$8,
  Checkbox: script$7,
  Icon: script$6,
  Nav: script$5,
  Radio: script$4,
  Select: script$3,
  Table: script$2,
  Textarea: script$1,
  Textinput: script
});

var install = function installUsgsVue(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
};

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  install: install,
  'default': components$1
});

// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== "default") {
    components$1[componentName] = component;
  }
});

export { components$1 as default };
