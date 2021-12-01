import PrimaryNav from "./PrimaryNav.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, PrimaryNav);
  },
};

export default Plugin;

export { PrimaryNav };
