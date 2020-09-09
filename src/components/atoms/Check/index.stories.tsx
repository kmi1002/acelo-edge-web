import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CheckPorps } from './type';
import Check from './index';

export default {
  title: 'Design System/Atoms/Input/Check',
  component: Check,
} as Meta;

const Template: Story<CheckPorps> = args => <Check {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'radio',
};
