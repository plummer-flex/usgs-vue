// rollup.config.js
import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import minimist from "minimist";
import image from "@rollup/plugin-image";
import scss from "rollup-plugin-scss";

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs
  .readFileSync("./.browserslistrc")
  .toString()
  .split("\n")
  .filter((entry) => entry && entry.substring(0, 2) !== "ie");

// Extract babel preset-env config, to combine with esbrowserslist
const babelPresetEnvConfig = require("../babel.config").presets.filter(
  (entry) => entry[0] === "@babel/preset-env"
)[0][1];

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, "..");

const PATH_NODE_MODULES = path.resolve(projectRoot, "node_modules");
const PATH_SRC = path.resolve(projectRoot, "src");

const baseConfig = {
  input: "src/entry.js",
  plugins: {
    preVue: [
      image(),
      alias({
        entries: [
          {
            find: "@",
            replacement: PATH_SRC,
          },
        ],
      }),
    ],
    replace: {
      "process.env.NODE_ENV": JSON.stringify("production"),
    },
    vue: {
      customBlocks: ["!docs", "!dev"],
      css: true,
      data: {
        // This helps to inject variables in each <style> tag of every Vue SFC
        scss: () => `@import "@/styles/variables.scss";`,
      },
      style: {
        preprocessOptions: {
          scss: {
            importer: [
              function(url, prev) {
                return {
                  file: url
                    .replace(/^~/, `${PATH_NODE_MODULES}/`)
                    .replace(/^@/, PATH_SRC),
                };
              },
            ],
          },
        },
      },
    },
    scss: {
      output: "dist/usgs-styles.css",
      outputStyle: "compressed",
      include: ["src/styles/styles.scss"],
      includePaths: [PATH_NODE_MODULES],
    },
    postVue: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      }),
      commonjs(),
    ],
    babel: {
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
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

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === "es") {
  const esConfig = {
    ...baseConfig,
    input: "src/entry.esm.js",
    external,
    output: {
      file: "dist/usgs-vue.esm.js",
      format: "esm",
      exports: "named",
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      scss(baseConfig.plugins.scss),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            "@babel/preset-env",
            {
              ...babelPresetEnvConfig,
              targets: esbrowserslist,
            },
          ],
        ],
      }),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === "cjs") {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/usgs-vue.ssr.js",
      format: "cjs",
      name: "UsgsVue",
      exports: "auto",
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      scss(baseConfig.plugins.scss),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
    ],
  };
  buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === "iife") {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/usgs-vue.min.js",
      format: "iife",
      name: "UsgsVue",
      exports: "auto",
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      scss(baseConfig.plugins.scss),
      babel(baseConfig.plugins.babel),
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  };
  buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
