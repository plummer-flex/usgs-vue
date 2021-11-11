<script>
import { EventBus } from "@/event-bus";
import { KEY_DELETE, KEY_BACKSPACE } from "@/commonKeyCodes";
import UsaIconClose from "@/components/USWDS/Icon/IconClose.vue";

export default {
  components: {
    UsaIconClose,
  },
  data() {
    return {
      selectedValues: [],
    };
  },
  props: {
    subscription: {
      type: String,
      required: true,
    },
  },
  methods: {
    deletePill(opName) {
      if (this.selectedValues.indexOf(opName) >= 0) {
        setTimeout(() => {
          const idx = this.selectedValues.indexOf(opName);
          const lastIdx = this.selectedValues.length - 1;
          this.selectedValues.splice(idx, 1);

          EventBus.$emit("pill-disolve", {
            subscription: this.subscription,
            option: opName,
          });

          if (idx >= lastIdx) {
            EventBus.$emit("focus-input", {
              subscription: this.subscription,
              option: "",
            });
          } else {
            this.focusNextElement();
          }
        }, 100);
      }
    },
    pillKeyDown(event, opName) {
      if (event.keyCode === KEY_DELETE || event.keyCode === KEY_BACKSPACE) {
        this.deletePill(opName);
      }
    },
    pillFocus() {
      this.focusedElement = "multi-select-pill";
    },
    focusNextElement() {
      // add all elements we want to include in our selection
      var focussableElements =
        'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';

      if (document.activeElement) {
        var focussable = Array.prototype.filter.call(
          document.querySelectorAll(focussableElements),
          function(element) {
            // check for visibility while always include the current activeElement
            return (
              element.offsetWidth > 0 ||
              element.offsetHeight > 0 ||
              element === document.activeElement
            );
          }
        );
        var index = focussable.indexOf(document.activeElement);
        if (index > -1) {
          var nextElement = focussable[index] || focussable[0];
          nextElement.focus();
        }
      }
    },
    pillUpdater(event) {
      if (this.subscription === event.subscription) {
        this.selectedValues.push(event.option);
      }
    },
    pillRemove(event) {
      if (this.subscription === event.subscription) {
        this.deletePill(event.option);
      }
    },
    pillGroupAdd(event) {
      if (this.subscription === event.subscription) {
        this.selectedValues = event.options;
      }
    },
    purgeAllPills(event) {
      if (this.subscription === event.subscription) {
        this.selectedValues = [];
      }
    },
  },
  created() {
    EventBus.$on("pill-update", this.pillUpdater);
    EventBus.$on("pill-remove", this.pillRemove);
    EventBus.$on("pill-group-add", this.pillGroupAdd);
    EventBus.$on("purge-all-pills", this.purgeAllPills);
  },
  destroyed() {
    EventBus.$off("pill-update", this.pillUpdater);
    EventBus.$off("pill-remove", this.pillRemove);
    EventBus.$off("pill-group-add", this.pillGroupAdd);
    EventBus.$off("purge-all-pills", this.purgeAllPills);
  },
};
</script>

<template>
  <div class="pills" ref="pills">
    <span
      class="multi-select-pill"
      tabindex="0"
      ref="pill"
      :title="item"
      :key="index"
      v-for="(item, index) in selectedValues"
      @click="deletePill(item)"
      @keydown="pillKeyDown($event, item)"
      @focus="pillFocus"
    >
      {{ item }}
      <UsaIconClose classNames="wu-icon icon-close-svg"></UsaIconClose>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.pills {
  margin-bottom: 0;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
  }
  .multi-select-pill {
    cursor: pointer;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    background-color: #1478fc;
    color: white;
    border-radius: 0.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 1.75rem 0 0.5rem;
    margin: 5px;
    .icon-close-svg {
      fill: #d3daeb;
      position: absolute;
      right: 0.5rem;
      height: 1rem;
      width: 1rem;
      line-height: 1.5rem;
      margin-top: 0.25rem;
    }
  }
}
</style>
