import { create } from '@storybook/theming';
import { typography } from '@storybook/theming';

export const fontSizes = ['l3', 'l2', 'l1', 'm3', 'm2', 'm1', 's3', 's2', 's1'].map(
  (size) => `${typography.size[size]}px`
);

export default create({
  base: 'light',

  colorPrimary: '#5274FF',
  colorSecondary: '#000',

  // UI
  appBg: '#F3F5F7',
  appContentBg: '#F3F5F7',
  appBorderColor: '#CBCBCA',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Museo Sans", museo-sans',
  fontCode: 'monospace',

  // Text colors
  textColor: '#657373',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#5274FF',
  barSelectedColor: '#5274FF',
  barBg: '#FFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#CBCBCA',
  inputTextColor: '#333',
  inputBorderRadius: 4
});