import TextInput from "./TextInput.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, TextInput);
  },
};

export default Plugin;

export { TextInput };
