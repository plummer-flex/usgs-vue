import Checkbox from "./Checkbox.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Checkbox);
  },
};

export default Plugin;

export { Checkbox };
