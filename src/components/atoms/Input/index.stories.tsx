import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputPorps } from './type';
import Input from './index';

export default {
  title: 'Design System/Atoms/Input/Input',
  component: Input,
} as Meta;

const Template: Story<InputPorps> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'password',
  name: 'text',
  kind: 'default',
  placeholder: '입력하세요',
};
