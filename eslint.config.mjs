import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser, // Поддержка глобальных переменных браузера
    },
    rules: {
      "no-console": "warn", // Предупреждение при использовании console.log
      "no-debugger": "warn", // Предупреждение при использовании debugger
    },
  },
  pluginJs.configs.recommended, // Рекомендации для JavaScript
  ...tseslint.configs.recommended, // Рекомендации для TypeScript
  {
    ...pluginReact.configs.flat.recommended, // Рекомендации для React
    settings: {
      react: {
        version: "detect", // Автоматическое определение версии React
      },
    },
    rules: {
      "react/prop-types": "off", // Отключить проверку prop-types (актуально для TypeScript)
      "react/react-in-jsx-scope": "off", // Не требуется импортировать React для JSX в новых версиях
    },
  },
];
