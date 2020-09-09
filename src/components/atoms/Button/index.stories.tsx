import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonPorps } from './type';
import Button from './index';

export default {
  title: 'Design System/Atoms/Input/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonPorps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  kind: 'primary',
  label: 'button',
};
