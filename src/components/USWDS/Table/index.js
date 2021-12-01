import Table from "./Table.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Table);
  },
};

export default Plugin;

export { Table };
