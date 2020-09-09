import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TogglePorps } from './type';
import Toggle from './index';

export default {
  title: 'Design System/Atoms/Input/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<TogglePorps> = args => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'text',
  value: 'tmp',
};
