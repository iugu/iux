export default {
  title: 'IUX/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['micro','small', 'normal', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['default','danger', 'warning', 'success'],
    },
    alternate: {
      control: { type: 'select' },
      options: ['default','secondary', 'outline', 'ghost'],
    },
    disabled: { control: 'boolean' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `<div>${label}</div>`;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  size: 'normal',
  type: 'default',
  alternate: 'default',
  disabled: false
};