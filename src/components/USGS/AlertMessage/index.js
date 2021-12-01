import AlertMessage from "./AlertMessage.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, AlertMessage);
  },
};

export default Plugin;

export { AlertMessage };
