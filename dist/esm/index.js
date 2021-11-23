import { _ as _slicedToArray } from './_rollupPluginBabelHelpers-854949db.js';
import { s as script } from './Accordion-1b0f40ee.js';
import { s as script$1 } from './Banner-6bbf7943.js';
import { s as script$2 } from './Button-21ccc711.js';
import { s as script$3 } from './Checkbox-08da2c16.js';
import { s as script$4 } from './Icon-1cb028d0.js';
import { s as script$5 } from './PrimaryNav-f0a8e36e.js';
import { s as script$6 } from './RadioButton-ab206d1d.js';
import { s as script$7 } from './Select-14d4ace1.js';
import { s as script$8 } from './Table-30ac0ff7.js';
import { s as script$9 } from './Textarea-6b69d733.js';
import { s as script$a } from './TextInput-532ba4bf.js';
import 'vue';
import 'uswds/src/img/icon-https.svg';
import 'uswds/src/img/icon-dot-gov.svg';
import 'uswds/dist/img/lock.svg';
import 'uswds/src/img/us_flag_small.png';
import './commonKeyCodes-03ca1dc1.js';
import 'uswds/dist/img/close.svg';

/* eslint-disable import/prefer-default-export */

var components$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Accordion: script,
  Banner: script$1,
  Button: script$2,
  Checkbox: script$3,
  Icon: script$4,
  Nav: script$5,
  Radio: script$6,
  Select: script$7,
  Table: script$8,
  Textarea: script$9,
  Textinput: script$a
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
