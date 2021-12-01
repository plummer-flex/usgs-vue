import Modal from "./Modal.vue";

import { registerComponent } from "./../../../utils/plugins";

const Plugin = {
  install(vue) {
    registerComponent(vue, Modal);
  },
};

export default Plugin;

export { Modal };
