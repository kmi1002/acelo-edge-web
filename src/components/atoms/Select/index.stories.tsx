import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SelectPorps } from './type';
import Select from './index';

export default {
  title: 'Design System/Atoms/Input/Select',
  component: Select,
} as Meta;

const Template: Story<SelectPorps> = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'text',
  options: [
    {
      code: 'a',
      label: '값1',
      value: '1',
    },
    {
      code: 'b',
      label: '값2',
      value: '2',
    },
    {
      code: 'c',
      label: '값3',
      value: '3',
    },
  ],
  selected: '1',
};
