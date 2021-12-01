import Icon from "./Icon.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Icon);
  },
};

export default Plugin;

export { Icon };
