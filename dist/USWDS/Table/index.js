(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Table = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'usa-table'
  };

  var _hoisted_1 = {
    class: "usa-table"
  };

  var _hoisted_2 = /*#__PURE__*/vue.createElementVNode("caption", null, " Bordered table ", -1);

  var _hoisted_3 = /*#__PURE__*/vue.createElementVNode("thead", null, [/*#__PURE__*/vue.createElementVNode("tr", null, [/*#__PURE__*/vue.createElementVNode("th", {
    scope: "col"
  }, "Document title"), /*#__PURE__*/vue.createElementVNode("th", {
    scope: "col"
  }, "Description"), /*#__PURE__*/vue.createElementVNode("th", {
    scope: "col"
  }, "Year")])], -1);

  var _hoisted_4 = /*#__PURE__*/vue.createElementVNode("tbody", null, [/*#__PURE__*/vue.createElementVNode("tr", null, [/*#__PURE__*/vue.createElementVNode("th", {
    scope: "row"
  }, "Declaration of Independence"), /*#__PURE__*/vue.createElementVNode("td", null, " Statement adopted by the Continental Congress declaring independence from the British Empire. "), /*#__PURE__*/vue.createElementVNode("td", null, "1776")]), /*#__PURE__*/vue.createElementVNode("tr", null, [/*#__PURE__*/vue.createElementVNode("th", {
    scope: "row"
  }, "Bill of Rights"), /*#__PURE__*/vue.createElementVNode("td", null, " The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms. "), /*#__PURE__*/vue.createElementVNode("td", null, "1791")]), /*#__PURE__*/vue.createElementVNode("tr", null, [/*#__PURE__*/vue.createElementVNode("th", {
    scope: "row"
  }, "Declaration of Sentiments"), /*#__PURE__*/vue.createElementVNode("td", null, " A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens. "), /*#__PURE__*/vue.createElementVNode("td", null, "1848")]), /*#__PURE__*/vue.createElementVNode("tr", null, [/*#__PURE__*/vue.createElementVNode("th", {
    scope: "row"
  }, "Emancipation Proclamation"), /*#__PURE__*/vue.createElementVNode("td", null, " An executive order granting freedom to slaves in designated southern states. "), /*#__PURE__*/vue.createElementVNode("td", null, "1863")])], -1);

  var _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("table", _hoisted_1, _hoisted_5);
  }

  script.render = render;

  exports["default"] = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
