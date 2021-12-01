import Button from "./Button.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Button);
  },
};

export default Plugin;

export { Button };
