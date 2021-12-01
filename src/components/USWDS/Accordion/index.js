import Accordion from "./Accordion.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Accordion);
  },
};

export default Plugin;

export { Accordion };
