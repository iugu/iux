const path = require('path');

module.exports = {
  "core": {
    "builder": 'webpack5',
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html"
  ],
  "features": {
    postcss: false,
  },
  "framework": "@storybook/html",
  managerWebpack: async (config, options) => {
    return config;
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
    );

    // Return the altered config
    return config;
  },
}