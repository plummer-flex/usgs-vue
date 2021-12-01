<script>
import { EventBus } from "@/event-bus";
import { KEY_ENTER } from "@/utils/commonKeyCodes";

export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab
      tabs: [], // all of the tabs
      tabEls: [],
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: "light",
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.tabs.forEach((tab) => {
      this.tabEls.push(tab.$el);
    });
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      EventBus.$emit("tab-select", {
        subscription: this.id,
        option: {
          index: i,
          name: this.tabEls[i].title,
        },
      });
    },
    tabKeyDown(event, i) {
      if (event.keyCode === KEY_ENTER) {
        this.selectTab(i);
      }
    },
  },
};
</script>

<template>
  <div
    class="tabbed-notebook"
    :class="{ tabs__light: mode === 'light', tabs__dark: mode === 'dark' }"
    :id="id"
  >
    <ul class="tabs__header">
      <li
        tabindex="0"
        v-for="(tab, index) in tabEls"
        :key="tab.title"
        :class="{ tab__selected: index == selectedIndex }"
        @click="selectTab(index)"
        @keydown="tabKeyDown($event, index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot :notebook-id="id"></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/windows.scss";

ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}
ul.tabs__header > li {
  position: relative;
  padding: 10px 30px;
  margin: 0;
  top: 2px;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: none;
  box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.07);
}
ul.tabs__header > li.tab__selected {
  font-weight: bold;
}
.tab {
  display: inline-block;
  background: white;
  color: black;
  padding: 20px;
  min-width: 800px;
  min-height: 400px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.07);
}
.tabs__light .tab {
  background-color: #fff;
}
.tabs__light li {
  background-color: #777;
  color: #fff;
}
.tabs__light li.tab__selected {
  background-color: #fff;
  color: #000;
  border-bottom: 2px solid #fff;
  /*border-top: 4px solid #4cc8f1;*/
  border-top: 4px solid #2491ff;
  box-shadow: 0 4px 0 #fff, 0 0 8px hsla(0, 0%, 0%, 0.07);
}
.tabs__light li:hover,
.tabs__light li:focus {
  background: linear-gradient(#eef, #fff 70%);
  color: #000;
  outline: none;
}
.tabs__dark .tab {
  background-color: #555;
  color: #ffffff;
}
.tabs__dark li {
  background-color: #eee;
  color: #333;
}
.tabs__dark li.tab__selected {
  background-color: #555;
  color: #fff;
  border-bottom: 2px solid #555;
  /*border-top: 4px solid #0c68f1;*/
  border-top: 4px solid #2491ff;
  box-shadow: 0 4px 0 #555, 0 0 8px hsla(0, 0%, 0%, 0.07);
}
.tabs__dark li:hover,
.tabs__dark li:focus {
  background: linear-gradient(#888, #555 70%);
  color: #fff;
  outline: none;
}
</style>
