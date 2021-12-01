import Banner from "./Banner.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Banner);
  },
};

export default Plugin;

export { Banner };
