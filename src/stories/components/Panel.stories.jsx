import React from 'react';
import { Panel } from '../../js/index.js';

export default {
  title: 'Components/Panel',
  component: Panel
};

const Template = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  wrappedElement: <div className="bp">Hello</div>,
  ...Panel.defaultProps
};

Default.parameters = {
};