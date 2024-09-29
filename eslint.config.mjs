import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import js from "@eslint/js";
import i18next from 'eslint-plugin-i18next';
// import hooksPlugin from "eslint-plugin-react-hooks";

export default [
  i18next.configs['flat/recommended'],
  {
    ignores: [
      '**/build/*', '**/node_modules/*', '**/storybook-static/*', '**/json-server/*'
    ]
  },
  js.configs.recommended,
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      // "react-hooks": hooksPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // "react-hooks/rules-of-hooks" : "error",
      // "react-hooks/exhaustive-deps" : "error",
      "react/display-name" : "off"
    }
  }

];