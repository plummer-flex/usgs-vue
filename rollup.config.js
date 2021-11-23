import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import PostCSS from "rollup-plugin-postcss";
import simplevars from "postcss-simple-vars";
import postcssImport from "postcss-import";
import minimist from "minimist";
import postcssUrl from "postcss-url";
import url from "@rollup/plugin-url";
import nested from "postcss-nested";
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
import sass from "rollup-plugin-sass";

const postcssConfigList = [
  postcssImport({
    resolve(id, basedir) {
      // resolve alias @css, @import '@css/style.css'
      // because @css/ has 5 chars
      if (id.startsWith("@css")) {
        return path.resolve("./src/styles", id.slice(5));
      }

      // resolve node_modules, @import '~normalize.css/normalize.css'
      // similar to how css-loader's handling of node_modules
      if (id.startsWith("~")) {
        return path.resolve("./node_modules", id.slice(1));
      }

      // resolve relative path, @import './src/styles'
      return path.resolve(basedir, id);
    },
  }),
  simplevars,
  nested,
  postcssUrl({ url: "inline" }),
  autoprefixer({
    overrideBrowserslist: "> 1%, IE 6, Explorer >= 10, Safari >= 7",
  }),
];

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, ".");

let postVueConfig = [
  // Process only `<style module>` blocks.
  PostCSS({
    modules: {
      generateScopedName: "[local]___[hash:base64:5]",
    },
    include: /&module=.*\.css$/,
  }),
  // Process all `<style>` blocks except `<style module>`.
  PostCSS({
    include: /(?<!&module=.*)\.css$/,
    plugins: [...postcssConfigList],
  }),
  url({
    include: ["**/*.svg", "**/*.png", "**/*.gif", "**/*.jpg", "**/*.jpeg"],
  }),
];

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: "@",
            replacement: `${path.resolve(projectRoot, "src")}`,
          },
        ],
        customResolver: resolve({
          extensions: [".js", ".jsx", ".vue"],
        }),
      }),
    ],
    replace: {
      "process.env.NODE_ENV": JSON.stringify("production"),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    },
    vue: {
      target: "browser",
      preprocessStyles: process.env.SEP_CSS ? false : true,
      postcssPlugins: [...postcssConfigList],
    },
    postVue: [...postVueConfig],
    babel: {
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".vue"],
      babelHelpers: "bundled",
    },
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  "vue",
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: "Vue",
};

const baseFolder = "./src/";
const componentsFolder = "components/";

const findComponents = (type) => {
  const compPath = `${baseFolder}${componentsFolder}/${type}/`;
  return fs
    .readdirSync(compPath)
    .filter((f) => fs.statSync(path.join(compPath, f)).isDirectory());
};
const usgs = findComponents("USGS");
const uswds = findComponents("USWDS");

const entriespath = {
  index: "./src/index.js",
  ...usgs.reduce((obj, name) => {
    obj[name] = baseFolder + componentsFolder + "USGS/" + name + "/index.js";
    return obj;
  }, {}),
  ...uswds.reduce((obj, name) => {
    obj[name] = baseFolder + componentsFolder + "USWDS/" + name + "/index.js";
    return obj;
  }, {}),
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

let buildFormats = [];

const mapComponent = (name, type) => {
  const compPath = `${type}/${name}`;
  return [
    {
      input: baseFolder + componentsFolder + `${compPath}/index.js`,
      external,
      output: {
        format: "umd",
        name: capitalize(name),
        file: `dist/${compPath}/index.js`,
        exports: "named",
        globals,
      },
      plugins: [
        ...baseConfig.plugins.preVue,
        vue({}),
        ...baseConfig.plugins.postVue,
        sass({ input: "./src/styles/styles.scss", output: "./dist/usgs.css" }),
        babel({
          ...baseConfig.plugins.babel,
          presets: [["@babel/preset-env", { modules: false }]],
        }),
        commonjs(),
      ],
    },
  ];
};

if (!argv.format || argv.format === "es") {
  const esConfig = {
    input: entriespath,
    external,
    output: {
      format: "esm",
      dir: "dist/esm",
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      sass({ input: "./src/styles/styles.scss", output: "./dist/usgs.css" }),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [["@babel/preset-env", { modules: false }]],
      }),
      commonjs(),
    ],
  };

  const merged = {
    input: "src/index.js",
    external,
    output: {
      format: "esm",
      file: "dist/vuelib.esm.js",
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [["@babel/preset-env", { modules: false }]],
      }),
      commonjs(),
    ],
  };
  const ind = [
    ...usgs
      .map((f) => mapComponent(f, "USGS"))
      .reduce((r, a) => r.concat(a), []),
    ...uswds
      .map((f) => mapComponent(f, "USWDS"))
      .reduce((r, a) => r.concat(a), []),
  ];
  buildFormats.push(esConfig);
  buildFormats.push(merged);
  buildFormats = [...buildFormats, ...ind];
}

export default buildFormats;
