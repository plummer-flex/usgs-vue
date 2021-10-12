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

<style lang="scss" scoped>
@import "../../styles/styles.scss";

.select-combo-box:first-child {
  .usa-label:first-child {
    margin-top: 0;
    margin-bottom: 0.3em;
  }
}
.select-combo-box {
  .main-control {
    display: inline-block;
    position: relative;
    min-width: 280px;
    max-width: units($theme-input-max-width);
    width: 100%;

    .single-select-combo-box--pristine {
      .single-select-combo-box__input {
        padding-right: calc(5em + 4px);

        &::-ms-clear {
          display: none;
        }
      }

      .select-combo-box__clear-input {
        display: block;
      }
    }
    .multi-select-input {
      border-color: #5c5c5c;
      background-color: transparent;
    }
    .multi-select-combo-box--pristine {
      .multi-select-combo-box__input {
        padding-right: calc(5em + 4px);

        &::-ms-clear {
          display: none;
        }
      }

      .multi-select-combo-box__clear-input {
        display: block;
      }
    }

    #single-select-combo-box__assistive-hint,
    #multi-select-combo-box__assistive-hint {
      display: none;
    }

    .single-select-combo-box__current-selection {
      height: 2.5rem;
      border: 1px solid #5c5c5c;
      border-radius: 2px;
      background-color: white;
      line-height: 2rem;
      padding: 2px 10px;
    }

    .single-select-combo-box__input {
      @extend %block-input-general;
      @extend %block-input-styles;
      appearance: none;
      margin: 0 5px;
      max-width: none;
      width: calc(100% - 10px);
      padding-right: calc(2rem + 4px);
      border: units(1px) solid color("base-lighter");
      background-color: white;
    }

    .select-combo-box__search-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 24px;
      height: 24px;
      fill: #8c8c8c;
    }

    .single-select-combo-box__input:focus + svg {
      fill: $colorBlue50;
    }
    .multi-select-combo-box__input {
      @extend %block-input-general;
      @extend %block-input-styles;
      appearance: none;
      margin-bottom: 0;
      margin-top: 0;
      max-width: none;
      padding-right: calc(5em + 3px);
      border-radius: 2px;
    }

    button.multi-select-combo-box__toggle-list,
    button.multi-select-combo-box__clear-input {
      &:focus {
        outline-offset: -4px;
      }
    }
    .select-combo-box__toggle-list,
    .select-combo-box__clear-input {
      width: 40px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      &:focus {
        outline-offset: -4px;
      }
    }

    .single-select-combo-box__toggle-list__wrapper:focus,
    .single-select-combo-box__clear-input__wrapper:focus,
    .multi-select-combo-box__toggle-list__wrapper:focus,
    .multi-select-combo-box__clear-input__wrapper:focus {
      outline: 0;
    }

    .single-select-combo-box__toggle-list,
    .single-select-combo-box__clear-input,
    .multi-select-combo-box__toggle-list,
    .multi-select-combo-box__clear-input {
      background-color: transparent;
      background-position: center;
      background-size: auto units(3);
      border: 0;
      bottom: 1px;
      cursor: pointer;
      margin-bottom: 0;
      opacity: 0.6;
      padding-right: units(4);
      position: absolute;
      top: 13px;
      z-index: calc(100 + var(--z-index-offset));
      width: 30px;
      height: 30px;
    }
    .single-select-combo-box__toggle-list {
      top: 4px;
    }
    .single-select-combo-box__clear-input,
    .multi-select-combo-box__clear-input {
      @include add-background-svg("usa-icons/close");
      display: none;
      right: calc(2.5em + 3px);
    }

    .single-select-combo-box__toggle-list,
    .multi-select-combo-box__toggle-list {
      @include add-background-svg("usa-icons/expand_more");
      background-size: auto units(4);
      right: 4px;
    }
    .single-select-combo-box__toggle-list {
      right: 5px;
    }
    .single-select-combo-box__toggle-list.expanded,
    .multi-select-combo-box__toggle-list.expanded {
      @include add-background-svg("usa-icons/expand_less");
    }

    .multi-select-combo-box__search-icon {
      position: absolute;
      top: 10px;
      right: calc(3rem + 2px);
      width: 24px;
      height: 24px;
      fill: #8c8c8c;
    }

    .multi-select-combo-box__input:focus + svg {
      fill: $colorBlue50;
    }

    .single-select-combo-box__input-button-separator,
    .multi-select-combo-box__input-button-separator {
      background-color: color("gray-cool-20");
      position: absolute;
      top: 8px;
      height: 1.3rem;
      margin-bottom: 8px;
      margin-top: 8px;
      width: 1px;
      right: calc(2.5em + 2px);
      box-sizing: border-box;
      z-index: calc(200 + var(--z-index-offset));
    }

    .single-select-combo-box__input-button-separator {
      top: 0px;
    }
    .single-select-combo-box__list,
    .multi-select-combo-box__list {
      @extend %block-input-general;
      @include u-border(1px, "base-dark");
      background-color: color("white");
      border-radius: 2px;
      border-top-width: var(--top-border-width);
      margin: 0;
      max-height: 12.1em;
      overflow-x: hidden;
      overflow-y: scroll;
      padding: 0;
      position: absolute;
      width: 100%;
      z-index: calc(400 + var(--z-index-offset));

      &:focus {
        outline: 0;
      }
    }

    .single-select-combo-box__list-option,
    .multi-select-combo-box__list-option {
      border-bottom: units(1px) solid color("base-lighter");
      cursor: pointer;
      display: block;
      padding: units(1);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      &:focus {
        @include focus-outline($width: 1px, $offset: -1px, $color: "primary");
        outline-offset: -4px;
        position: relative;
        z-index: calc(100 + var(--z-index-offset));
        background-color: color("primary");
        color: color("white");
        border-color: color("primary");
      }
      &.filtered-out {
        display: none;
      }
      &--no-results {
        cursor: not-allowed;
        display: block;
        padding: units(1);
      }
    }
    .single-select-combo-box__list-option {
      &.selected {
        background-color: $colorBlue50;
        color: white;
      }
    }
    .multi-select-combo-box__list-option {
      &.selected {
        display: none;
      }
    }
    .multi-select-combo-box__list-option:focus[disabled="disabled"] {
      background-color: transparent;
      outline-color: transparent;
    }
    .multi-select-combo-box__list-option[disabled="disabled"] {
      color: #444;
    }
  }
  .always-open {
    .single-select-combo-box__list,
    .multi-select-combo-box__list {
      position: relative;
      display: block;
    }
    .single-select-combo-box__input,
    .multi-select-combo-box__input {
      padding-right: 0;
    }
    .multi-select-combo-box__search-icon {
      right: 0.5rem;
    }
    .multi-select-combo-box__input-button-separator {
      display: none;
    }
  }
}
</style>
