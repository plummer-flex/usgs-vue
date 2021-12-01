import Radio from "./Radio.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Radio);
  },
};

export default Plugin;

export { Radio };
