import { openBlock, createElementBlock, createElementVNode } from 'vue';

var script = {
  name: 'usa-table'
};

var _hoisted_1 = {
  class: "usa-table"
};

var _hoisted_2 = /*#__PURE__*/createElementVNode("caption", null, " Bordered table ", -1);

var _hoisted_3 = /*#__PURE__*/createElementVNode("thead", null, [/*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "col"
}, "Document title"), /*#__PURE__*/createElementVNode("th", {
  scope: "col"
}, "Description"), /*#__PURE__*/createElementVNode("th", {
  scope: "col"
}, "Year")])], -1);

var _hoisted_4 = /*#__PURE__*/createElementVNode("tbody", null, [/*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Declaration of Independence"), /*#__PURE__*/createElementVNode("td", null, " Statement adopted by the Continental Congress declaring independence from the British Empire. "), /*#__PURE__*/createElementVNode("td", null, "1776")]), /*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Bill of Rights"), /*#__PURE__*/createElementVNode("td", null, " The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms. "), /*#__PURE__*/createElementVNode("td", null, "1791")]), /*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Declaration of Sentiments"), /*#__PURE__*/createElementVNode("td", null, " A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens. "), /*#__PURE__*/createElementVNode("td", null, "1848")]), /*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", {
  scope: "row"
}, "Emancipation Proclamation"), /*#__PURE__*/createElementVNode("td", null, " An executive order granting freedom to slaves in designated southern states. "), /*#__PURE__*/createElementVNode("td", null, "1863")])], -1);

var _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", _hoisted_1, _hoisted_5);
}

script.render = render;

export { script as s };
