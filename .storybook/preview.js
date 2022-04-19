import styles from '../src/css/index.scss';
import { Meta, Typeset } from '@storybook/addon-docs/blocks';
import iux from './iux';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: true,
    grid: {
      cellSize: 20,
      opacity: 0.2,
      cellAmount: 0,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
  options: {
    storySort: {
      order: ['Core',['Overview', 'Colours','Layout',],'Components'],
    },
  },
  docs: {
    theme: iux,
  },
}