import IconButton from "./IconButton.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, IconButton);
  },
};

export default Plugin;

export { IconButton };
