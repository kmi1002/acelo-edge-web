import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatusTextPorps } from './type';
import StatusText from './index';

export default {
  title: 'Design System/Atoms/Display/StatusText',
  component: StatusText,
} as Meta;

const Template: Story<StatusTextPorps> = args => <StatusText {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'success',
  statusText: '정상적인 입력값입니다',
  statusSize: 'md',
};
