import { a as _typeof, b as _asyncToGenerator } from './_rollupPluginBabelHelpers-854949db.js';
import { K as KEY_ENTER, c as KEY_UP, d as KEY_DOWN, e as KEY_ESCAPE, f as KEY_SPACE } from './commonKeyCodes-03ca1dc1.js';
import { s as script$2, E as EventBus } from './PillBox-b8dc1b53.js';
import { openBlock, createElementBlock, normalizeClass, createElementVNode, resolveComponent, resolveDirective, withDirectives, normalizeStyle, toDisplayString, createCommentVNode, createBlock, createTextVNode, vShow, createVNode, Fragment, renderList } from 'vue';
import './IconClose-ac068ca3.js';

var script$1 = {
  name: 'usa-icon-search',
  props: {
    classNames: {
      type: String,
      default: ''
    }
  }
};

var _hoisted_1$1 = /*#__PURE__*/createElementVNode("path", {
  d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}, null, -1);

var _hoisted_2$1 = [_hoisted_1$1];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    class: normalizeClass(["usa-icon-svg usa-icon-search-svg", $props.classNames]),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('click', $event);
    })
  }, _hoisted_2$1, 2);
}

script$1.render = render$1;

var script = {
  name: "select-combo-box",
  components: {
    PillBox: script$2,
    UsaIconSearch: script$1
  },
  data: function data() {
    return {
      popupHidden: true,
      selectedValues: [],
      singleSelectedValue: {},
      selectedText: "",
      filteredValues: [],
      lastItem: "",
      firstItem: "",
      focusedElement: ""
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    listType: {
      type: String,
      default: "single"
    },
    classNames: {
      type: String,
      default: ""
    },
    labelText: {
      type: String,
      required: false,
      default: ""
    },
    listLabel: {
      type: String,
      required: false,
      default: ""
    },
    options: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    hintId: {
      type: String,
      required: false,
      default: ""
    },
    hint: {
      type: String,
      required: false,
      default: ""
    },
    pillBox: {
      type: Boolean,
      required: false,
      default: true
    },
    optionResultsField: {
      type: String,
      required: false,
      default: "value"
    },
    alwaysOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    zIndexOffset: {
      type: Number,
      default: 0
    },
    hideFilterTextbox: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssProps: function cssProps() {
      return {
        "--z-index-offset": this.zIndexOffset,
        "--top-border-width": this.hideFilterTextbox ? "1px" : "0px"
      };
    },
    cmpOptions: function cmpOptions() {
      return this.options.filter(function (option) {
        if (_typeof(option) === "object") {
          return true;
        }
      });
    },
    isSingleSelect: function isSingleSelect() {
      return this.listType === "single";
    },
    placeholderText: function placeholderText() {
      return "Search ".concat(this.placeholder);
    },
    currentlySelectedText: function currentlySelectedText() {
      return "label" in this.singleSelectedValue ? this.singleSelectedValue.label : "- Select -";
    }
  },
  directives: {
    close: {
      bind: function bind(el, binding, vnode) {
        var handleOutsideClick = function handleOutsideClick(event) {
          event.stopPropagation(); // Get the handler method name and the exclude array
          // from the object used in v-close

          var _binding$value = binding.value,
              handler = _binding$value.handler,
              exclude = _binding$value.exclude;
          var clickedOnExcludeEl = false;
          exclude.forEach(function (refName) {
            // We only run this code if we haven't detected any excluded element yet
            if (!clickedOnExcludeEl) {
              // Get the element using the reference name
              var excludedEl = vnode.context.$refs[refName];

              if (excludedEl && typeof excludedEl.contains === "function" && excludedEl.contains(event.target)) {
                clickedOnExcludeEl = true;
              }
            }
          }); // Make sure the clicked element is not the popup item list and not excluded

          if (!el.contains(event.target) && !clickedOnExcludeEl) {
            vnode.context[handler]();
          }
        };

        el.__vueOutsideClickHandler__ = handleOutsideClick; // register click/touchstart event listeners on the whole page

        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);
      },
      unbind: function unbind(el) {
        document.removeEventListener("click", el.__vueOutsideClickHandler__);
        document.removeEventListener("touchstart", el.__vueOutsideClickHandler__);
      }
    }
  },
  methods: {
    togglePopup: function togglePopup(event) {
      var _this = this;

      event.stopPropagation();

      if (this.popupHidden) {
        this.popupHidden = false;

        if (this.isSingleSelect) {
          this.$nextTick(function () {
            _this.focusInput();
          });
        }
      } else {
        this.popupHidden = true;
      }
    },
    selectKeyDown: function selectKeyDown(event) {
      if (event.keyCode === KEY_ENTER) {
        this.togglePopup(event);
      }
    },
    closePopup: function closePopup() {
      this.popupHidden = true;
    },
    focusInput: function focusInput() {
      this.$refs["search-input"].focus();
      this.focusedElement = "search-input"; // scroll the list to the top

      this.$refs["option-list-container"].scrollTop = 0;
    },
    searchInputFocus: function searchInputFocus() {
      this.popupHidden = false;
      this.focusedElement = "search-input";
    },
    toggleButtonFocus: function toggleButtonFocus() {
      this.focusedElement = "toggle-button";
    },
    listItemFocus: function listItemFocus() {
      this.focusedElement = "list-item";
    },
    blurComboBox: function blurComboBox() {
      var vue = this;
      setTimeout(function () {
        var activeEl = document.activeElement;
        var comboBox = vue.$refs["select-combo-box"];

        if (!comboBox.contains(activeEl)) {
          vue.$nextTick(function () {
            vue.popupHidden = true;
          });
        }
      }, 200);
    },
    searchInput: function searchInput(event) {
      this.filterOptionList(event.target.value);
      this.popupHidden = false;
    },
    clearSearch: function clearSearch() {
      this.$refs["search-input"].value = "";
    },
    searchKeyDown: function searchKeyDown(event) {
      if ([KEY_UP, KEY_DOWN].indexOf(event.keyCode) > -1) {
        //event.stopPropagation()
        event.preventDefault();

        if (this.popupHidden) {
          this.popupHidden = false;
        }

        if (event.keyCode === KEY_DOWN) {
          this.$nextTick(this.focusNextListItem(event, this, 0, true));
        } else if (event.keyCode === KEY_UP) {
          this.$nextTick(this.focusPreviousListItem(event, this, this.$refs["list-item"].length - 1, true));
        }
      } else if (event.keyCode === KEY_ESCAPE) {
        event.preventDefault();
        this.popupHidden = true;

        if (this.isSingleSelect) {
          this.focusSelect();
        }
      } else if (event.keyCode === KEY_ENTER) {
        event.preventDefault();
        this.popupHidden = false;
      }
    },
    filterOptionList: function filterOptionList(value) {
      var _this2 = this;

      // we keep a list of values that have been hidden (filtered out), in order to determine if something
      // should be displayed or not.  See isFilteredOut() method.
      this.filteredValues.splice(0); // the first and last item in the visible list is used when traversing the list with the keyboard
      // to keep track of when we reach the top or bottom of the list and need to refocus the input field

      var firstItemFound = false;
      this.firstItem = "";
      this.lastItem = "";
      this.cmpOptions.forEach(function (option) {
        if (option.label.toLowerCase().search(value.toLowerCase()) < 0) {
          _this2.filteredValues.push(option.label);
        } else {
          if (!firstItemFound) {
            firstItemFound = true;
            _this2.firstItem = option.value;
          }

          _this2.lastItem = option.value;
        }
      });
    },
    isFilteredOut: function isFilteredOut(value) {
      return this.filteredValues.includes(value);
    },
    selectOption: function selectOption(option) {
      if (this.isSingleSelect) {
        if (!this.isSelected(option)) {
          this.singleSelectedValue = this.selectedValues[0] = option; // Send more general message to parent to notify them that an option has been selected.
          // This option should be the full option containing all data including the ID, label, and value.

          this.$emit("item-selected", option[this.optionResultsField]);
          this.closePopup();
          this.focusSelect();
        }
      } else {
        if (this.disabled) {
          return;
        }

        var fld = this.optionResultsField;
        var found = this.selectedValues.find(function (item) {
          item[fld] === option[fld];
        });

        if (found == null) {
          this.selectedValues.push(option); // send message directly to pillbox with a value for display

          EventBus.$emit("pill-update", {
            subscription: this.id,
            option: option[fld]
          }); // Send more general message to parent to notify them that an option has been selected.
          // This option should be the full option containing all data including the ID, label, and value.

          this.$emit("multi-select-combo-box-select", {
            subscription: this.id,
            option: option
          });
        }
      }
    },
    selectAll: function selectAll() {
      var _this3 = this;

      if (!this.isSingleSelect) {
        var fieldValues;

        if (this.disabled) {
          return;
        }

        this.selectedValues = this.cmpOptions.slice(0);
        fieldValues = this.selectedValues.map(function (item) {
          return item[_this3.optionResultsField];
        });
        EventBus.$emit("pill-group-add", {
          subscription: this.id,
          options: fieldValues
        });
      }
    },
    // Unselect an item
    // @param value - the Label of the item to remove
    unselectOption: function unselectOption(value) {
      var _this4 = this;

      if (this.isSingleSelect) {
        // emit option to the parent component to notify them that the option has been removed from selection
        if (this.selectedValues[0]) {
          this.$emit("select-combo-box-unselect", {
            subscription: this.id,
            option: this.selectedValues[0]
          });
        }

        this.selectedValues.splice(0);
      } else {
        if (this.disabled) {
          return;
        }

        var idx = this.selectedValues.findIndex(function (item) {
          return item[_this4.optionResultsField] === value;
        });
        var option = this.selectedValues[idx]; // emit option to the parent component to notify them that the option has been removed from selection

        if (option) {
          this.$emit("multi-select-combo-box-unselect", {
            subscription: this.id,
            option: option
          });
        }

        this.selectedValues.splice(idx, 1);
      }
    },
    isSelected: function isSelected(value) {
      var _this5 = this;

      if (this.selectedValues.length) {
        if (this.isSingleSelect) {
          return value === this.selectedValues[0][this.optionResultsField];
        } else {
          var found = this.selectedValues.find(function (item) {
            return item[_this5.optionResultsField] === value;
          });
          return typeof found !== "undefined";
        }
      }

      return false;
    },
    focusSelect: function focusSelect() {
      this.$refs["main-select-control"].focus();
    },
    focusNextListItem: function focusNextListItem(event, vue, idx) {
      event.preventDefault();
      var li;

      for (; idx < vue.$refs["list-item"].length; idx++) {
        li = vue.$refs["list-item"][idx];
        if (!li.classList.contains("filtered-out") && !li.classList.contains("selected")) break;
      }

      if (idx < vue.$refs["list-item"].length) {
        var el = vue.$refs["list-item"][idx];
        el.focus();
        el.parentNode.scrollTop = 0;
      }
    },
    focusPreviousListItem: function focusPreviousListItem(event, vue, idx) {
      event.preventDefault();
      var li;

      for (; idx >= 0; idx--) {
        li = vue.$refs["list-item"][idx];
        if (!li.classList.contains("filtered-out") && !li.classList.contains("selected")) break;
      }

      if (idx >= 0) {
        vue.$refs["list-item"][idx].focus();
      }
    },
    optionsListKeyDown: function optionsListKeyDown(event, idx, option) {
      var _this6 = this;

      // add enter key to this to handle selection
      // handle up and down back to input field
      if ([KEY_UP, KEY_DOWN, KEY_ENTER, KEY_SPACE, KEY_ESCAPE].indexOf(event.keyCode) > -1) {
        event.preventDefault(); // Handle Down Arrow

        if (event.keyCode === KEY_DOWN) {
          if (idx >= this.cmpOptions.length - 1 || option.value === this.lastItem) {
            // focus back on input field
            this.$nextTick(this.focusInput());
          } else {
            // focus on next item in list
            this.$nextTick(this.focusNextListItem(event, this, ++idx));
          }
        } // Handle Up Arrow
        else if (event.keyCode === KEY_UP) {
          if (idx <= 0 || option.value === this.firstItem) {
            // focus back on input field
            this.$nextTick(this.focusInput());
          } else {
            // focus on next item in list
            this.$nextTick(this.focusPreviousListItem(event, this, --idx));
          }
        } // handle Enter Key or Space Key
        else if (event.keyCode === KEY_ENTER || event.keyCode === KEY_SPACE) {
          if (idx >= this.cmpOptions.length - 1 || option.value === this.lastItem) {
            // if this is the last item in the list, then focus the input
            this.$nextTick(this.focusInput());
          } else {
            // otherwise focus the next item in the list
            this.$nextTick(this.focusNextListItem(event, this, ++idx));
          }

          this.selectOption(option);
        } // handle escape: close popup and focus input field
        else if (event.keyCode === KEY_ESCAPE) {
          this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this6.focusInput();

                  case 2:
                    _this6.popupHidden = true;

                    if (_this6.isSingleSelect) {
                      _this6.focusSelect();
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));
        }
      }
    },
    processPillDisolve: function processPillDisolve(event) {
      if (!this.isSingleSelect && event.subscription === this.id) {
        this.unselectOption(event.option);
      }
    },
    processFocusInput: function processFocusInput(event) {
      if (event.subscription === this.id) {
        this.focusInput();
      }
    },
    getSelected: function getSelected() {
      return this.selectedValues[0];
    },
    getSelectedList: function getSelectedList() {
      return this.selectedValues;
    },
    setSelected: function setSelected(selected) {
      if (selected != null) {
        this.selectedValues = [selected];
      }
    },
    setSelectedList: function setSelectedList(selectedList) {
      var _this7 = this;

      if (selectedList != null) {
        this.selectedValues = selectedList;
      }

      EventBus.$emit("pill-group-add", {
        subscription: this.id,
        options: selectedList.map(function (ob) {
          return ob[_this7.optionResultsField];
        })
      });
    },
    clearSelected: function clearSelected() {
      this.selectedValues.splice(0);
    },
    clearSelectedList: function clearSelectedList() {
      EventBus.$emit("purge-all-pills", {
        subscription: this.id
      });
      this.selectedValues.splice(0);
      this.filterOptionList("");
      this.$refs["search-input"].value = "";
    }
  },
  created: function created() {
    if (!this.isSingleSelect) {
      EventBus.$on("pill-disolve", this.processPillDisolve);

      if (this.alwaysOpen) {
        this.popupHidden = false;
      }
    }

    EventBus.$on("focus-input", this.processFocusInput);
  },
  destroyed: function destroyed() {
    if (!this.isSingleSelect) {
      EventBus.$off("pill-disolve", this.processPillDisolve);
    }

    EventBus.$off("focus-input", this.processFocusInput);
  }
};

var _hoisted_1 = ["for", "disabled"];
var _hoisted_2 = ["id"];
var _hoisted_3 = {
  key: 1
};

var _hoisted_4 = /*#__PURE__*/createElementVNode("div", {
  class: "single-select-combo-box__input-button-separator"
}, null, -1);

var _hoisted_5 = {
  class: "single-select-combo-box__toggle-list__wrapper"
};
var _hoisted_6 = ["disabled"];
var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = ["id", "placeholder", "disabled"];
var _hoisted_9 = {
  key: 0,
  class: "multi-select-combo-box__input-button-separator"
};
var _hoisted_10 = {
  key: 1,
  class: "multi-select-combo-box__toggle-list__wrapper"
};
var _hoisted_11 = ["disabled"];
var _hoisted_12 = ["aria-labelledby", "hidden"];
var _hoisted_13 = {
  key: 0,
  class: "option-list",
  ref: "option-list"
};
var _hoisted_14 = {
  class: "single-select-combo-box__search-field"
};
var _hoisted_15 = ["id", "placeholder", "disabled"];
var _hoisted_16 = ["disabled", "title", "onClick", "onKeydown"];
var _hoisted_17 = {
  key: 1,
  class: "option-list",
  ref: "option-list"
};
var _hoisted_18 = ["disabled", "title", "onClick", "onKeydown"];

var _hoisted_19 = /*#__PURE__*/createElementVNode("div", {
  class: "select-combo-box__status usa-sr-only",
  role: "status"
}, null, -1);

var _hoisted_20 = {
  key: 2,
  id: "single-select-combo-box__assistive-hint",
  class: "usa-sr-only"
};

var _hoisted_21 = /*#__PURE__*/createElementVNode("ul", null, [/*#__PURE__*/createElementVNode("li", null, " Enter a value into the input field to search or filter options. "), /*#__PURE__*/createElementVNode("li", null, "Navigate to an option using the mouse or keyboard."), /*#__PURE__*/createElementVNode("li", null, "Click or press enter to select an option."), /*#__PURE__*/createElementVNode("li", null, "Only one option may be selected")], -1);

var _hoisted_22 = [_hoisted_21];
var _hoisted_23 = {
  key: 3,
  id: "multi-select-combo-box__assistive-hint",
  class: "usa-sr-only"
};

var _hoisted_24 = /*#__PURE__*/createElementVNode("ul", null, [/*#__PURE__*/createElementVNode("li", null, " Enter a value into the input field to search or filter options. "), /*#__PURE__*/createElementVNode("li", null, "Navigate to an option using the mouse or keyboard."), /*#__PURE__*/createElementVNode("li", null, "Click or press enter to select an option."), /*#__PURE__*/createElementVNode("li", null, "Multiple options may be selected"), /*#__PURE__*/createElementVNode("li", null, " When an item is selected, it is added to a list above the input field. "), /*#__PURE__*/createElementVNode("li", null, " Click or navigate back to the selected options list above the input field and click or press delete to remove an item from the selected options. ")], -1);

var _hoisted_25 = [_hoisted_24];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PillBox = resolveComponent("PillBox");

  var _component_UsaIconSearch = resolveComponent("UsaIconSearch");

  var _directive_close = resolveDirective("close");

  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["select-combo-box", $props.classNames]),
    ref: "select-combo-box",
    style: normalizeStyle($options.cssProps)
  }, [createElementVNode("label", {
    class: "usa-label",
    for: $props.id,
    disabled: $props.disabled
  }, toDisplayString($props.labelText), 9, _hoisted_1), $props.hint ? (openBlock(), createElementBlock("span", {
    key: 0,
    id: $props.hintId,
    class: "usa-hint"
  }, toDisplayString($props.hint), 9, _hoisted_2)) : createCommentVNode("", true), !$options.isSingleSelect ? (openBlock(), createElementBlock("div", _hoisted_3, [$props.pillBox ? (openBlock(), createBlock(_component_PillBox, {
    key: 0,
    subscription: $props.id || '',
    disabled: $props.disabled
  }, null, 8, ["subscription", "disabled"])) : createCommentVNode("", true)])) : createCommentVNode("", true), createElementVNode("div", {
    class: normalizeClass(["main-control", {
      'always-open': $props.alwaysOpen
    }])
  }, [$options.isSingleSelect ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "single-select-combo-box__current-selection",
    tabindex: "0",
    ref: "main-select-control",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.togglePopup && $options.togglePopup.apply($options, arguments);
    }),
    onKeydown: _cache[3] || (_cache[3] = function () {
      return $options.selectKeyDown && $options.selectKeyDown.apply($options, arguments);
    })
  }, [createTextVNode(toDisplayString($options.currentlySelectedText) + " ", 1), _hoisted_4, createElementVNode("span", _hoisted_5, [createElementVNode("span", {
    class: normalizeClass(["single-select-combo-box__toggle-list", {
      expanded: !$data.popupHidden
    }]),
    type: "button",
    ref: "toggle-button",
    "aria-label": "Toggle option list",
    tabindex: "0",
    disabled: $props.disabled,
    onFocus: _cache[0] || (_cache[0] = function () {
      return $options.toggleButtonFocus && $options.toggleButtonFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function ($event) {
      return $options.blurComboBox();
    })
  }, null, 42, _hoisted_6)])], 544)) : createCommentVNode("", true), !$options.isSingleSelect ? (openBlock(), createElementBlock("div", _hoisted_7, [withDirectives(createElementVNode("input", {
    class: "multi-select-combo-box__input multi-select-input",
    ref: "search-input",
    tabindex: "0",
    id: $props.id,
    placeholder: $options.placeholderText,
    disabled: $props.disabled,
    onInput: _cache[4] || (_cache[4] = function ($event) {
      return $options.searchInput($event);
    }),
    onFocus: _cache[5] || (_cache[5] = function () {
      return $options.searchInputFocus && $options.searchInputFocus.apply($options, arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function ($event) {
      return $options.searchKeyDown($event);
    }),
    onBlur: _cache[7] || (_cache[7] = function ($event) {
      return $options.blurComboBox();
    })
  }, null, 40, _hoisted_8), [[vShow, !$props.hideFilterTextbox]]), createVNode(_component_UsaIconSearch, {
    classNames: "multi-select-combo-box__search-icon"
  }), !this.alwaysOpen ? (openBlock(), createElementBlock("div", _hoisted_9)) : createCommentVNode("", true), !this.alwaysOpen ? (openBlock(), createElementBlock("span", _hoisted_10, [!this.alwaysOpen ? (openBlock(), createElementBlock("button", {
    key: 0,
    class: normalizeClass(["multi-select-combo-box__toggle-list", {
      expanded: !$data.popupHidden
    }]),
    type: "button",
    ref: "toggle-button",
    "aria-label": "Toggle option list",
    tabindex: "0",
    disabled: $props.disabled,
    onClick: _cache[8] || (_cache[8] = function () {
      return $options.togglePopup && $options.togglePopup.apply($options, arguments);
    }),
    onFocus: _cache[9] || (_cache[9] = function () {
      return $options.toggleButtonFocus && $options.toggleButtonFocus.apply($options, arguments);
    }),
    onBlur: _cache[10] || (_cache[10] = function ($event) {
      return $options.blurComboBox();
    })
  }, null, 42, _hoisted_11)) : createCommentVNode("", true)])) : createCommentVNode("", true)])) : createCommentVNode("", true), createElementVNode("div", {
    class: normalizeClass(["select-search-popup", $options.isSingleSelect ? 'single-select-combo-box__list' : 'multi-select-combo-box__list']),
    ref: "option-list-container",
    role: "listbox",
    tabindex: "-1",
    "aria-labelledby": $props.listLabel,
    hidden: $data.popupHidden
  }, [$options.isSingleSelect ? (openBlock(), createElementBlock("ul", _hoisted_13, [createElementVNode("li", _hoisted_14, [withDirectives(createElementVNode("input", {
    class: "single-select-combo-box__input select-input",
    ref: "search-input",
    tabindex: "0",
    id: $props.id,
    placeholder: $options.placeholderText,
    disabled: $props.disabled,
    onInput: _cache[11] || (_cache[11] = function ($event) {
      return $options.searchInput($event);
    }),
    onFocus: _cache[12] || (_cache[12] = function () {
      return $options.searchInputFocus && $options.searchInputFocus.apply($options, arguments);
    }),
    onKeydown: _cache[13] || (_cache[13] = function ($event) {
      return $options.searchKeyDown($event);
    }),
    onBlur: _cache[14] || (_cache[14] = function ($event) {
      return $options.blurComboBox();
    })
  }, null, 40, _hoisted_15), [[vShow, !$props.hideFilterTextbox]]), createVNode(_component_UsaIconSearch, {
    classNames: "select-combo-box__search-icon"
  })]), (openBlock(true), createElementBlock(Fragment, null, renderList($options.cmpOptions, function (option, idx) {
    return openBlock(), createElementBlock("li", {
      class: normalizeClass(["single-select-combo-box__list-option", {
        selected: $options.isSelected(option[$props.optionResultsField]),
        'filtered-out': $options.isFilteredOut(option.label)
      }]),
      ref: "list-item",
      tabindex: "-1",
      key: option.id,
      disabled: $props.disabled,
      title: option.label,
      onClick: function onClick($event) {
        return $options.selectOption(option);
      },
      onKeydown: function onKeydown($event) {
        return $options.optionsListKeyDown($event, idx, option);
      },
      onFocus: _cache[15] || (_cache[15] = function () {
        return $options.listItemFocus && $options.listItemFocus.apply($options, arguments);
      }),
      onBlur: _cache[16] || (_cache[16] = function ($event) {
        return $options.blurComboBox();
      })
    }, toDisplayString(option.label), 43, _hoisted_16);
  }), 128))], 512)) : createCommentVNode("", true), !$options.isSingleSelect ? (openBlock(), createElementBlock("ul", _hoisted_17, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.cmpOptions, function (option, idx) {
    return openBlock(), createElementBlock("li", {
      class: normalizeClass(["multi-select-combo-box__list-option", {
        selected: $options.isSelected(option[$props.optionResultsField]),
        'filtered-out': $options.isFilteredOut(option.label)
      }]),
      ref: "list-item",
      tabindex: "-1",
      key: option.id,
      disabled: $props.disabled,
      title: option.label,
      onClick: function onClick($event) {
        return $options.selectOption(option);
      },
      onKeydown: function onKeydown($event) {
        return $options.optionsListKeyDown($event, idx, option);
      },
      onFocus: _cache[17] || (_cache[17] = function () {
        return $options.listItemFocus && $options.listItemFocus.apply($options, arguments);
      }),
      onBlur: _cache[18] || (_cache[18] = function ($event) {
        return $options.blurComboBox();
      })
    }, toDisplayString(option.label), 43, _hoisted_18);
  }), 128))], 512)) : createCommentVNode("", true)], 10, _hoisted_12), _hoisted_19, $options.isSingleSelect ? (openBlock(), createElementBlock("span", _hoisted_20, _hoisted_22)) : createCommentVNode("", true), !$options.isSingleSelect ? (openBlock(), createElementBlock("span", _hoisted_23, _hoisted_25)) : createCommentVNode("", true)], 2)], 6)), [[_directive_close, {
    handler: 'closePopup',
    exclude: []
  }]]);
}

script.render = render;

export { script as default };
