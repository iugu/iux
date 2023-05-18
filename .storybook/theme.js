import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'iugu UX',
  brandUrl: '',
  brandImage: 'https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/desativado-1617737004-logo-iugu-4-devs-novopng.png',
  brandTarget: '_self',

  // UI
  appBg: '#F3F5F7',
  appContentBg: '#F3F5F7',
  appBorderColor: '#CBCBCA',
  appBorderRadius: 4,

  // Typography
  // fontBase: '"Museo Sans", museo-sans',
  // fontCode: 'monospace',

  // Text colors
  textColor: '#657373',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barBg: '#FFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#CBCBCA',
  inputTextColor: '#333',
  inputBorderRadius: 4

});