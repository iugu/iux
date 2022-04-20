const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "core": {
    "builder": 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
    "storybook-addon-jsx",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs",
    "storybook-tailwind-dark-mode",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    }
  ],
  "features": {
    postcss: false,
  },
  "framework": "@storybook/react",
  managerWebpack: async (config, options) => {
    return config;
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: '/\.scss$/',
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [
            '@babel/preset-typescript',
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
          plugins: [
          ],
        },
    }
    );

    // Return the altered config
    return config;
  },
}