import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  // babel: async () => ({
  //   presets: [
  //     [
  //       "@babel/preset-env",
  //       ["@babel/preset-react", {"runtime": "automatic"}]
  //     ],
  //   ],
  // }),
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-css-modules",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
