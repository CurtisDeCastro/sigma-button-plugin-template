import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "off",
      "no-eval": "warn"
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];