import Textarea from "./Textarea.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Textarea);
  },
};

export default Plugin;

export { Textarea };
