import React from 'react';
import { Button } from '../../js/index.js';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { createTemplate } from '@storybook/react';

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
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  expect(args.onClick).toHaveBeenCalled();
};