import iconHttps from 'uswds/src/img/icon-https.svg';
import iconDotGov from 'uswds/src/img/icon-dot-gov.svg';
import iconLock from 'uswds/dist/img/lock.svg';
import iconUsFlagSmall from 'uswds/src/img/us_flag_small.png';
import { openBlock, createElementBlock, createElementVNode, createStaticVNode, createTextVNode } from 'vue';

var script = {
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

var _hoisted_7 = /*#__PURE__*/createStaticVNode("<div class=\"grid-col-fill tablet:grid-col-auto\"><p class=\"usa-banner__header-text\"> An official website of the United States government </p><p class=\"usa-banner__header-action\" aria-hidden=\"true\"> Here’s how you know </p></div><button class=\"usa-accordion__button usa-banner__button\" aria-expanded=\"false\" aria-controls=\"gov-banner\"><span class=\"usa-banner__button-text\">Here’s how you know</span></button>", 2);

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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("header", _hoisted_3, [createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createElementVNode("img", {
    class: "usa-banner__header-flag",
    src: $data.iconUsFlagSmall,
    alt: "U.S. flag"
  }, null, 8, _hoisted_6)]), _hoisted_7])]), createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createElementVNode("div", _hoisted_11, [createElementVNode("img", {
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

script.render = render;

export { script as s };
