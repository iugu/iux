/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '../addons/addon-html/src',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: [{ from: '../assets', to: '/assets' }],
  docs: {
    autodocs: 'tag',
  },
};
export default config;
