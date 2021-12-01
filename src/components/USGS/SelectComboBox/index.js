import SelectComboBox from "./SelectComboBox.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, SelectComboBox);
  },
};

export default Plugin;

export { SelectComboBox };
