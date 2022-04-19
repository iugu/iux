import { create } from '@storybook/theming';
import { typography } from '@storybook/theming';
import iuxLogo from '../stories/assets/logo-iux.png';

export const fontSizes = ['l3', 'l2', 'l1', 'm3', 'm2', 'm1', 's3', 's2', 's1'].map(
  (size) => `${typography.size[size]}px`
);

/*
export const typography = {
  fonts: {
    base: [
      '"Nunito Sans"',
      '-apple-system',
      '".SFNSText-Regular"',
      '"San Francisco"',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(', '),
    mono: [
      'ui-monospace',
      'Menlo',
      'Monaco',
      '"Roboto Mono"',
      '"Oxygen Mono"',
      '"Ubuntu Monospace"',
      '"Source Code Pro"',
      '"Droid Sans Mono"',
      '"Courier New"',
      'monospace',
    ].join(', '),
  },
  weight: {
    regular: 400,
    bold: 700,
    black: 900,
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
};
*/

export default create({
  base: 'light',

  colorPrimary: '#5274FF',
  colorSecondary: '#000',

  // UI
  appBg: '#F3F5F7',
  appContentBg: '#F3F5F7',
  appBorderColor: '#CBCBCA',
  appBorderRadius: 4,

  brandTitle: 'iux',
  brandUrl: '',
  brandImage: iuxLogo,

  // Typography
  fontBase: '"Museo Sans", museo-sans',
  // fontCode: 'monospace',

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