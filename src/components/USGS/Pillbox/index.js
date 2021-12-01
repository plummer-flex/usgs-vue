import Pillbox from "./Pillbox.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Pillbox);
  },
};

export default Plugin;

export { Pillbox };
