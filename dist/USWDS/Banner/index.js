(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('uswds/src/img/icon-https.svg'), require('uswds/src/img/icon-dot-gov.svg'), require('uswds/dist/img/lock.svg'), require('uswds/src/img/us_flag_small.png'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'uswds/src/img/icon-https.svg', 'uswds/src/img/icon-dot-gov.svg', 'uswds/dist/img/lock.svg', 'uswds/src/img/us_flag_small.png', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Banner = {}, global.iconHttps, global.iconDotGov, global.iconLock, global.iconUsFlagSmall, global.Vue));
})(this, (function (exports, iconHttps, iconDotGov, iconLock, iconUsFlagSmall, vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var iconHttps__default = /*#__PURE__*/_interopDefaultLegacy(iconHttps);
  var iconDotGov__default = /*#__PURE__*/_interopDefaultLegacy(iconDotGov);
  var iconLock__default = /*#__PURE__*/_interopDefaultLegacy(iconLock);
  var iconUsFlagSmall__default = /*#__PURE__*/_interopDefaultLegacy(iconUsFlagSmall);

  var script = {
    name: 'usa-banner',
    data: function data() {
      return {
        iconHttps: iconHttps__default["default"],
        iconDotGov: iconDotGov__default["default"],
        iconLock: iconLock__default["default"],
        iconUsFlagSmall: iconUsFlagSmall__default["default"]
      };
    }
  };

  var _hoisted_1 = {
    class: "usa-banner",
    "aria-label": "Official government website"
  };
  var _hoisted_2 = {
    class: "usa-accordion"
  };
  var _hoisted_3 = {
    class: "usa-banner__header"
  };
  var _hoisted_4 = {
    class: "usa-banner__inner"
  };
  var _hoisted_5 = {
    class: "grid-col-auto"
  };
  var _hoisted_6 = ["src"];

  var _hoisted_7 = /*#__PURE__*/vue.createStaticVNode("<div class=\"grid-col-fill tablet:grid-col-auto\"><p class=\"usa-banner__header-text\"> An official website of the United States government </p><p class=\"usa-banner__header-action\" aria-hidden=\"true\"> Here’s how you know </p></div><button class=\"usa-accordion__button usa-banner__button\" aria-expanded=\"false\" aria-controls=\"gov-banner\"><span class=\"usa-banner__button-text\">Here’s how you know</span></button>", 2);

  var _hoisted_9 = {
    class: "usa-banner__content usa-accordion__content",
    id: "gov-banner",
    hidden: ""
  };
  var _hoisted_10 = {
    class: "grid-row grid-gap-lg"
  };
  var _hoisted_11 = {
    class: "usa-banner__guidance tablet:grid-col-6"
  };
  var _hoisted_12 = ["src"];

  var _hoisted_13 = /*#__PURE__*/vue.createElementVNode("div", {
    class: "usa-media-block__body"
  }, [/*#__PURE__*/vue.createElementVNode("p", null, [/*#__PURE__*/vue.createElementVNode("strong", null, " Official websites use .gov "), /*#__PURE__*/vue.createElementVNode("br"), /*#__PURE__*/vue.createTextVNode(" A "), /*#__PURE__*/vue.createElementVNode("strong", null, ".gov"), /*#__PURE__*/vue.createTextVNode(" website belongs to an official government organization in the United States. ")])], -1);

  var _hoisted_14 = {
    class: "usa-banner__guidance tablet:grid-col-6"
  };
  var _hoisted_15 = ["src"];
  var _hoisted_16 = {
    class: "usa-media-block__body"
  };

  var _hoisted_17 = /*#__PURE__*/vue.createElementVNode("strong", null, " Secure .gov websites use HTTPS ", -1);

  var _hoisted_18 = /*#__PURE__*/vue.createElementVNode("br", null, null, -1);

  var _hoisted_19 = /*#__PURE__*/vue.createTextVNode(" A ");

  var _hoisted_20 = /*#__PURE__*/vue.createElementVNode("strong", null, "lock", -1);

  var _hoisted_21 = /*#__PURE__*/vue.createTextVNode(" ( ");

  var _hoisted_22 = {
    class: "icon-lock"
  };
  var _hoisted_23 = ["src"];

  var _hoisted_24 = /*#__PURE__*/vue.createTextVNode(" ) or ");

  var _hoisted_25 = /*#__PURE__*/vue.createElementVNode("strong", null, "https://", -1);

  var _hoisted_26 = /*#__PURE__*/vue.createTextVNode(" means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites. ");

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("section", _hoisted_1, [vue.createElementVNode("div", _hoisted_2, [vue.createElementVNode("header", _hoisted_3, [vue.createElementVNode("div", _hoisted_4, [vue.createElementVNode("div", _hoisted_5, [vue.createElementVNode("img", {
      class: "usa-banner__header-flag",
      src: $data.iconUsFlagSmall,
      alt: "U.S. flag"
    }, null, 8, _hoisted_6)]), _hoisted_7])]), vue.createElementVNode("div", _hoisted_9, [vue.createElementVNode("div", _hoisted_10, [vue.createElementVNode("div", _hoisted_11, [vue.createElementVNode("img", {
      class: "usa-banner__icon usa-media-block__img",
      src: $data.iconDotGov,
      role: "img",
      alt: "",
      "aria-hidden": "true"
    }, null, 8, _hoisted_12), _hoisted_13]), vue.createElementVNode("div", _hoisted_14, [vue.createElementVNode("img", {
      class: "usa-banner__icon usa-media-block__img",
      src: $data.iconHttps,
      role: "img",
      alt: "",
      "aria-hidden": "true"
    }, null, 8, _hoisted_15), vue.createElementVNode("div", _hoisted_16, [vue.createElementVNode("p", null, [_hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, vue.createElementVNode("span", _hoisted_22, [vue.createElementVNode("img", {
      class: "usa-banner__lock-image",
      src: $data.iconLock,
      role: "img",
      alt: "",
      "aria-hidden": "true"
    }, null, 8, _hoisted_23)]), _hoisted_24, _hoisted_25, _hoisted_26])])])])])])]);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
