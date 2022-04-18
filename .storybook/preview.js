import styles from '../src/css/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Claro',
    values: [
      {
        name: 'Claro',
        value: '#F3F5F7',
      },
      {
        name: 'Escuro',
        value: '#2C3636',
      },
    ],
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
      order: ['Visão Geral', 'Base'],
    },
  },
}