<script>
import {
  KEY_ENTER,
  KEY_ESCAPE,
  KEY_DOWN,
  KEY_SPACE,
  KEY_UP,
} from "@/commonKeyCodes";
import PillBox from "@/lib-components/usgs-pillbox";
import UsaIconSearch from "@/lib-components/uswds-icon/IconSearch.vue";
import { EventBus } from "@/event-bus";

export default {
  name: "select-combo-box",
  components: {
    PillBox,
    UsaIconSearch,
  },
  data() {
    return {
      popupHidden: true,
      selectedValues: [],
      singleSelectedValue: {},
      selectedText: "",
      filteredValues: [],
      lastItem: "",
      firstItem: "",
      focusedElement: "",
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    listType: {
      type: String,
      default: "single",
    },
    classNames: {
      type: String,
      default: "",
    },
    labelText: {
      type: String,
      required: false,
      default: "",
    },
    listLabel: {
      type: String,
      required: false,
      default: "",
    },
    options: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    hintId: {
      type: String,
      required: false,
      default: "",
    },
    hint: {
      type: String,
      required: false,
      default: "",
    },
    pillBox: {
      type: Boolean,
      required: false,
      default: true,
    },
    optionResultsField: {
      type: String,
      required: false,
      default: "value",
    },
    alwaysOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    zIndexOffset: {
      type: Number,
      default: 0,
    },
    hideFilterTextbox: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssProps() {
      return {
        "--z-index-offset": this.zIndexOffset,
        "--top-border-width": this.hideFilterTextbox ? "1px" : "0px",
      };
    },
    cmpOptions: function() {
      return this.options.filter((option) => {
        if (typeof option === "object") {
          return true;
        }
      });
    },
    isSingleSelect: function() {
      return this.listType === "single";
    },
    placeholderText: function() {
      return `Search ${this.placeholder}`;
    },
    currentlySelectedText: function() {
      return "label" in this.singleSelectedValue
        ? this.singleSelectedValue.label
        : "- Select -";
    },
  },
  directives: {
    close: {
      bind(el, binding, vnode) {
        const handleOutsideClick = (event) => {
          event.stopPropagation();

          // Get the handler method name and the exclude array
          // from the object used in v-close
          const { handler, exclude } = binding.value;

          let clickedOnExcludeEl = false;
          exclude.forEach((refName) => {
            // We only run this code if we haven't detected any excluded element yet
            if (!clickedOnExcludeEl) {
              // Get the element using the reference name
              const excludedEl = vnode.context.$refs[refName];
              if (
                excludedEl &&
                typeof excludedEl.contains === "function" &&
                excludedEl.contains(event.target)
              ) {
                clickedOnExcludeEl = true;
              }
            }
          });

          // Make sure the clicked element is not the popup item list and not excluded
          if (!el.contains(event.target) && !clickedOnExcludeEl) {
            vnode.context[handler]();
          }
        };
        el.__vueOutsideClickHandler__ = handleOutsideClick;

        // register click/touchstart event listeners on the whole page
        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);
      },
      unbind(el) {
        document.removeEventListener("click", el.__vueOutsideClickHandler__);
        document.removeEventListener(
          "touchstart",
          el.__vueOutsideClickHandler__
        );
      },
    },
  },
  methods: {
    togglePopup(event) {
      event.stopPropagation();
      if (this.popupHidden) {
        this.popupHidden = false;
        if (this.isSingleSelect) {
          this.$nextTick(() => {
            this.focusInput();
          });
        }
      } else {
        this.popupHidden = true;
      }
    },
    selectKeyDown(event) {
      if (event.keyCode === KEY_ENTER) {
        this.togglePopup(event);
      }
    },
    closePopup() {
      this.popupHidden = true;
    },
    focusInput() {
      this.$refs["search-input"].focus();
      this.focusedElement = "search-input";

      // scroll the list to the top
      this.$refs["option-list-container"].scrollTop = 0;
    },
    searchInputFocus() {
      this.popupHidden = false;
      this.focusedElement = "search-input";
    },
    toggleButtonFocus() {
      this.focusedElement = "toggle-button";
    },
    listItemFocus() {
      this.focusedElement = "list-item";
    },
    blurComboBox() {
      const vue = this;
      setTimeout(() => {
        const activeEl = document.activeElement;
        const comboBox = vue.$refs["select-combo-box"];
        if (!comboBox.contains(activeEl)) {
          vue.$nextTick(() => {
            vue.popupHidden = true;
          });
        }
      }, 200);
    },
    searchInput(event) {
      this.filterOptionList(event.target.value);
      this.popupHidden = false;
    },
    clearSearch() {
      this.$refs["search-input"].value = "";
    },
    searchKeyDown(event) {
      if ([KEY_UP, KEY_DOWN].indexOf(event.keyCode) > -1) {
        //event.stopPropagation()
        event.preventDefault();

        if (this.popupHidden) {
          this.popupHidden = false;
        }
        if (event.keyCode === KEY_DOWN) {
          this.$nextTick(this.focusNextListItem(event, this, 0, true));
        } else if (event.keyCode === KEY_UP) {
          this.$nextTick(
            this.focusPreviousListItem(
              event,
              this,
              this.$refs["list-item"].length - 1,
              true
            )
          );
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
    filterOptionList(value) {
      // we keep a list of values that have been hidden (filtered out), in order to determine if something
      // should be displayed or not.  See isFilteredOut() method.
      this.filteredValues.splice(0);

      // the first and last item in the visible list is used when traversing the list with the keyboard
      // to keep track of when we reach the top or bottom of the list and need to refocus the input field
      let firstItemFound = false;
      this.firstItem = "";
      this.lastItem = "";

      this.cmpOptions.forEach((option) => {
        if (option.label.toLowerCase().search(value.toLowerCase()) < 0) {
          this.filteredValues.push(option.label);
        } else {
          if (!firstItemFound) {
            firstItemFound = true;
            this.firstItem = option.value;
          }
          this.lastItem = option.value;
        }
      });
    },
    isFilteredOut(value) {
      return this.filteredValues.includes(value);
    },
    selectOption(option) {
      if (this.isSingleSelect) {
        if (!this.isSelected(option)) {
          this.singleSelectedValue = this.selectedValues[0] = option;
          // Send more general message to parent to notify them that an option has been selected.
          // This option should be the full option containing all data including the ID, label, and value.
          this.$emit("item-selected", option[this.optionResultsField]);

          this.closePopup();
          this.focusSelect();
        }
      } else {
        if (this.disabled) {
          return;
        }

        const fld = this.optionResultsField;
        const found = this.selectedValues.find((item) => {
          item[fld] === option[fld];
        });
        if (found == null) {
          this.selectedValues.push(option);
          // send message directly to pillbox with a value for display
          EventBus.$emit("pill-update", {
            subscription: this.id,
            option: option[fld],
          });
          // Send more general message to parent to notify them that an option has been selected.
          // This option should be the full option containing all data including the ID, label, and value.
          this.$emit("multi-select-combo-box-select", {
            subscription: this.id,
            option: option,
          });
        }
      }
    },
    selectAll() {
      if (!this.isSingleSelect) {
        let fieldValues;

        if (this.disabled) {
          return;
        }

        this.selectedValues = this.cmpOptions.slice(0);
        fieldValues = this.selectedValues.map(
          (item) => item[this.optionResultsField]
        );
        EventBus.$emit("pill-group-add", {
          subscription: this.id,
          options: fieldValues,
        });
      }
    },
    // Unselect an item
    // @param value - the Label of the item to remove
    unselectOption(value) {
      if (this.isSingleSelect) {
        // emit option to the parent component to notify them that the option has been removed from selection
        if (this.selectedValues[0]) {
          this.$emit("select-combo-box-unselect", {
            subscription: this.id,
            option: this.selectedValues[0],
          });
        }

        this.selectedValues.splice(0);
      } else {
        if (this.disabled) {
          return;
        }

        const idx = this.selectedValues.findIndex((item) => {
          return item[this.optionResultsField] === value;
        });
        const option = this.selectedValues[idx];

        // emit option to the parent component to notify them that the option has been removed from selection
        if (option) {
          this.$emit("multi-select-combo-box-unselect", {
            subscription: this.id,
            option: option,
          });
        }

        this.selectedValues.splice(idx, 1);
      }
    },
    isSelected(value) {
      if (this.selectedValues.length) {
        if (this.isSingleSelect) {
          return value === this.selectedValues[0][this.optionResultsField];
        } else {
          const found = this.selectedValues.find(
            (item) => item[this.optionResultsField] === value
          );
          return typeof found !== "undefined";
        }
      }
      return false;
    },
    focusSelect() {
      this.$refs["main-select-control"].focus();
    },
    focusNextListItem(event, vue, idx) {
      event.preventDefault();
      let li;
      for (; idx < vue.$refs["list-item"].length; idx++) {
        li = vue.$refs["list-item"][idx];
        if (
          !li.classList.contains("filtered-out") &&
          !li.classList.contains("selected")
        )
          break;
      }
      if (idx < vue.$refs["list-item"].length) {
        const el = vue.$refs["list-item"][idx];
        el.focus();
        el.parentNode.scrollTop = 0;
      }
    },
    focusPreviousListItem(event, vue, idx) {
      event.preventDefault();
      let li;
      for (; idx >= 0; idx--) {
        li = vue.$refs["list-item"][idx];
        if (
          !li.classList.contains("filtered-out") &&
          !li.classList.contains("selected")
        )
          break;
      }
      if (idx >= 0) {
        vue.$refs["list-item"][idx].focus();
      }
    },
    optionsListKeyDown(event, idx, option) {
      // add enter key to this to handle selection
      // handle up and down back to input field
      if (
        [KEY_UP, KEY_DOWN, KEY_ENTER, KEY_SPACE, KEY_ESCAPE].indexOf(
          event.keyCode
        ) > -1
      ) {
        event.preventDefault();

        // Handle Down Arrow
        if (event.keyCode === KEY_DOWN) {
          if (
            idx >= this.cmpOptions.length - 1 ||
            option.value === this.lastItem
          ) {
            // focus back on input field
            this.$nextTick(this.focusInput());
          } else {
            // focus on next item in list
            this.$nextTick(this.focusNextListItem(event, this, ++idx));
          }
        }
        // Handle Up Arrow
        else if (event.keyCode === KEY_UP) {
          if (idx <= 0 || option.value === this.firstItem) {
            // focus back on input field
            this.$nextTick(this.focusInput());
          } else {
            // focus on next item in list
            this.$nextTick(this.focusPreviousListItem(event, this, --idx));
          }
        }
        // handle Enter Key or Space Key
        else if (event.keyCode === KEY_ENTER || event.keyCode === KEY_SPACE) {
          if (
            idx >= this.cmpOptions.length - 1 ||
            option.value === this.lastItem
          ) {
            // if this is the last item in the list, then focus the input
            this.$nextTick(this.focusInput());
          } else {
            // otherwise focus the next item in the list
            this.$nextTick(this.focusNextListItem(event, this, ++idx));
          }
          this.selectOption(option);
        }
        // handle escape: close popup and focus input field
        else if (event.keyCode === KEY_ESCAPE) {
          this.$nextTick(async () => {
            await this.focusInput();
            this.popupHidden = true;
            if (this.isSingleSelect) {
              this.focusSelect();
            }
          });
        }
      }
    },
    processPillDisolve(event) {
      if (!this.isSingleSelect && event.subscription === this.id) {
        this.unselectOption(event.option);
      }
    },
    processFocusInput(event) {
      if (event.subscription === this.id) {
        this.focusInput();
      }
    },
    getSelected() {
      return this.selectedValues[0];
    },
    getSelectedList() {
      return this.selectedValues;
    },
    setSelected(selected) {
      if (selected != null) {
        this.selectedValues = [selected];
      }
    },
    setSelectedList(selectedList) {
      if (selectedList != null) {
        this.selectedValues = selectedList;
      }
      EventBus.$emit("pill-group-add", {
        subscription: this.id,
        options: selectedList.map((ob) => ob[this.optionResultsField]),
      });
    },
    clearSelected() {
      this.selectedValues.splice(0);
    },
    clearSelectedList() {
      EventBus.$emit("purge-all-pills", {
        subscription: this.id,
      });
      this.selectedValues.splice(0);
      this.filterOptionList("");
      this.$refs["search-input"].value = "";
    },
  },
  created() {
    if (!this.isSingleSelect) {
      EventBus.$on("pill-disolve", this.processPillDisolve);
      if (this.alwaysOpen) {
        this.popupHidden = false;
      }
    }
    EventBus.$on("focus-input", this.processFocusInput);
  },
  destroyed() {
    if (!this.isSingleSelect) {
      EventBus.$off("pill-disolve", this.processPillDisolve);
    }
    EventBus.$off("focus-input", this.processFocusInput);
  },
};
</script>

<template>
  <div
    class="select-combo-box"
    ref="select-combo-box"
    :style="cssProps"
    :class="classNames"
    v-close="{
      handler: 'closePopup',
      exclude: [],
    }"
  >
    <label class="usa-label" :for="id" :disabled="disabled">
      {{ labelText }}
    </label>
    <span v-if="hint" :id="hintId" class="usa-hint">
      {{ hint }}
    </span>
    <div v-if="!isSingleSelect">
      <PillBox v-if="pillBox" :subscription="id || ''" :disabled="disabled" />
    </div>
    <div class="main-control" :class="{ 'always-open': alwaysOpen }">
      <div
        class="single-select-combo-box__current-selection"
        tabindex="0"
        ref="main-select-control"
        v-if="isSingleSelect"
        @click="togglePopup"
        @keydown="selectKeyDown"
      >
        {{ currentlySelectedText }}
        <div class="single-select-combo-box__input-button-separator"></div>
        <span class="single-select-combo-box__toggle-list__wrapper">
          <span
            class="single-select-combo-box__toggle-list"
            type="button"
            ref="toggle-button"
            aria-label="Toggle option list"
            tabindex="0"
            :class="{ expanded: !popupHidden }"
            :disabled="disabled"
            @focus="toggleButtonFocus"
            @blur="blurComboBox()"
          ></span>
        </span>
      </div>
      <div v-if="!isSingleSelect">
        <input
          v-show="!hideFilterTextbox"
          class="multi-select-combo-box__input multi-select-input"
          ref="search-input"
          tabindex="0"
          :id="id"
          :placeholder="placeholderText"
          :disabled="disabled"
          @input="searchInput($event)"
          @focus="searchInputFocus"
          @keydown="searchKeyDown($event)"
          @blur="blurComboBox()"
        />
        <UsaIconSearch
          classNames="multi-select-combo-box__search-icon"
        ></UsaIconSearch>
        <div
          class="multi-select-combo-box__input-button-separator"
          v-if="!this.alwaysOpen"
        ></div>
        <span
          class="multi-select-combo-box__toggle-list__wrapper"
          v-if="!this.alwaysOpen"
        >
          <button
            class="multi-select-combo-box__toggle-list"
            type="button"
            ref="toggle-button"
            aria-label="Toggle option list"
            tabindex="0"
            :class="{ expanded: !popupHidden }"
            :disabled="disabled"
            v-if="!this.alwaysOpen"
            @click="togglePopup"
            @focus="toggleButtonFocus"
            @blur="blurComboBox()"
          ></button>
        </span>
      </div>
      <div
        class="select-search-popup"
        ref="option-list-container"
        role="listbox"
        tabindex="-1"
        :aria-labelledby="listLabel"
        :hidden="popupHidden"
        :class="
          isSingleSelect
            ? 'single-select-combo-box__list'
            : 'multi-select-combo-box__list'
        "
      >
        <ul class="option-list" ref="option-list" v-if="isSingleSelect">
          <li class="single-select-combo-box__search-field">
            <input
              v-show="!hideFilterTextbox"
              class="single-select-combo-box__input select-input"
              ref="search-input"
              tabindex="0"
              :id="id"
              :placeholder="placeholderText"
              :disabled="disabled"
              @input="searchInput($event)"
              @focus="searchInputFocus"
              @keydown="searchKeyDown($event)"
              @blur="blurComboBox()"
            />
            <UsaIconSearch
              classNames="select-combo-box__search-icon"
            ></UsaIconSearch>
          </li>
          <li
            class="single-select-combo-box__list-option"
            ref="list-item"
            tabindex="-1"
            v-for="(option, idx) in cmpOptions"
            :key="option.id"
            :disabled="disabled"
            :class="{
              selected: isSelected(option[optionResultsField]),
              'filtered-out': isFilteredOut(option.label),
            }"
            :title="option.label"
            @click="selectOption(option)"
            @keydown="optionsListKeyDown($event, idx, option)"
            @focus="listItemFocus"
            @blur="blurComboBox()"
          >
            {{ option.label }}
          </li>
        </ul>
        <ul class="option-list" ref="option-list" v-if="!isSingleSelect">
          <li
            class="multi-select-combo-box__list-option"
            ref="list-item"
            tabindex="-1"
            v-for="(option, idx) in cmpOptions"
            :key="option.id"
            :disabled="disabled"
            :class="{
              selected: isSelected(option[optionResultsField]),
              'filtered-out': isFilteredOut(option.label),
            }"
            :title="option.label"
            @click="selectOption(option)"
            @keydown="optionsListKeyDown($event, idx, option)"
            @focus="listItemFocus"
            @blur="blurComboBox()"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
      <div class="select-combo-box__status usa-sr-only" role="status"></div>
      <span
        id="single-select-combo-box__assistive-hint"
        class="usa-sr-only"
        v-if="isSingleSelect"
      >
        <ul>
          <li>
            Enter a value into the input field to search or filter options.
          </li>
          <li>Navigate to an option using the mouse or keyboard.</li>
          <li>Click or press enter to select an option.</li>
          <li>Only one option may be selected</li>
        </ul>
      </span>
      <span
        id="multi-select-combo-box__assistive-hint"
        class="usa-sr-only"
        v-if="!isSingleSelect"
      >
        <ul>
          <li>
            Enter a value into the input field to search or filter options.
          </li>
          <li>Navigate to an option using the mouse or keyboard.</li>
          <li>Click or press enter to select an option.</li>
          <li>Multiple options may be selected</li>
          <li>
            When an item is selected, it is added to a list above the input
            field.
          </li>
          <li>
            Click or navigate back to the selected options list above the input
            field and click or press delete to remove an item from the selected
            options.
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>
