import React from 'react';

export default {
  title: 'Components/Panel-OLD',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    'Header': { control: 'boolean' },
    'Footer': { control: 'boolean' },
    'Sub Panel': { control: 'boolean' },
    'Floating': { control: 'boolean' },
    'Baloon Tip': {
      control: { type: 'select' },
      options: ['Left','Center', 'Right']
    },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;

  var header = '';
  if (args['Header'] == true) {
    header = (
      <div class="header">
        <h3 class="hat">Subtitle Hat</h3>
        <h1>Common Title</h1>
      </div>
    );
  }

  var footer = '';
  if (args['Footer'] == true) {
    footer = (
      <div class="footer">
        <p class="small">Footer</p>
      </div>
    );
  }

  var internal = '';
  if (args['Sub Panel'] == true) {
    internal = (
      <div class="panel">
        <div>
          <p>Paragraph, Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    );
  }

  var floating = '';
  if (args['Floating'] == true) {
    floating = 'float';
    if (args['Baloon Tip'] == 'Left') {
      floating += ' left';
    }
    if (args['Baloon Tip'] == 'Right') {
      floating += ' right';
    }
  }

  var classes = 'panel ' + floating

  return (
    <div className={classes}>
      {header}
      <div>
        <p>Paragraph, Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec id massa interdum, venenatis orci eu, consequat est.
        Cras viverra viverra viverra.</p>
        {internal}
      </div>
      {footer}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  'Header': false,
  'Footer': false,
  'Sub Panel': false,
  'Floating': false,
  'Baloon Tip': 'Center'
};

export const Extended = Template.bind({});
Extended.args = {
  'Header': true,
  'Footer': true,
  'Sub Panel': false,
  'Floating': false,
  'Baloon Tip': 'Center'
};

export const Internal = Template.bind({});
Internal.args = {
  'Header': true,
  'Footer': true,
  'Sub Panel': true,
  'Floating': false,
  'Baloon Tip': 'Center'
};

export const Floating = Template.bind({});
Floating.args = {
  'Header': false,
  'Footer': false,
  'Sub Panel': true,
  'Floating': true,
  'Baloon Tip': 'Center'
};