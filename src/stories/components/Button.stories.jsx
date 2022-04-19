import React from 'react';
import { Button } from '../../js/index.js';

export default {
  title: 'Components/Button',
  component: Button
};

// return <Button label="Default Button" />;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  ...Button.defaultProps
};