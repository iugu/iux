import '../global.scss';

export default {
  title: 'IUX/Painel',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    'Cabeçalho': { control: 'boolean' },
    'Rodapé': { control: 'boolean' },
    'Painel Interno': { control: 'boolean' },
    'Flutuante': { control: 'boolean' },
    'Balão': {
      control: { type: 'select' },
      options: ['Esquerda','Centro', 'Direita']
    },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;

  var header = '';
  if (args['Cabeçalho'] == true) {
    header = `
      <div class="header">
        <h3 class="hat">Título Superior</h3>
        <h1>Título Principal</h1>
      </div>
`;
  }

  var footer = '';
  if (args['Rodapé'] == true) {
    footer = `
      <div class="footer">
        <p class="small">Footer</p>
      </div>
`;
  }

  var internal = '';
  if (args['Painel Interno'] == true) {
    internal = `
      <div class="panel">
        <div>
          <p>Parágrafo, Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
`;
  }

  var floating = '';
  if (args['Flutuante'] == true) {
    floating = 'float';
    if (args['Balão'] == 'Esquerda') {
      floating += ' left';
    }
    if (args['Balão'] == 'Direita') {
      floating += ' right';
    }
  }

  return `
    <div class="iux">
      <div class="panel ${floating}">
        ${header}
        <div>
          <p>Parágrafo, Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec id massa interdum, venenatis orci eu, consequat est.
          Cras viverra viverra viverra.</p>
          ${internal}
        </div>
        ${footer}
      </div>
    </div>
  `;
};

export const Padrao = Template.bind({});
Padrao.args = {
  'Cabeçalho': false,
  'Rodapé': false,
  'Painel Interno': false,
  'Flutuante': false,
  'Balão': 'Centro'
};

export const Completo = Template.bind({});
Completo.args = {
  'Cabeçalho': true,
  'Rodapé': true,
  'Painel Interno': false,
  'Flutuante': false,
  'Balão': 'Centro'
};

export const Interno = Template.bind({});
Interno.args = {
  'Cabeçalho': true,
  'Rodapé': true,
  'Painel Interno': true,
  'Flutuante': false,
  'Balão': 'Centro'
};

export const Flutuante = Template.bind({});
Flutuante.args = {
  'Cabeçalho': false,
  'Rodapé': false,
  'Painel Interno': true,
  'Flutuante': true,
  'Balão': 'Centro'
};