import * as components from "./components/index";

const install = (instance) => {
  Object.values(components).forEach((component) => {
    instance.use(component);
  });
};

export default install;

export * from "./components";
