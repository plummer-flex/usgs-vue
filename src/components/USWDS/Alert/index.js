import Alert from "./Alert.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Alert);
  },
};

export default Plugin;

export { Alert };
