import Select from "./Select.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Select);
  },
};

export default Plugin;

export { Select };
