import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputFramePorps } from './type';
import InputFrame from './index';

export default {
  title: 'Design System/Molecules/Input/InputFrame',
  component: InputFrame,
} as Meta;

const Template: Story<InputFramePorps> = args => <InputFrame {...args} />;

export const Default = Template.bind({});
Default.args = {
  inline: false,
  title: '제목',
  titleSize: 'md',
  helps: ['1번을 입력하세요', '2번을 입력하세요', '3번을 입력하세요'],
  helpSize: 'md',
  status: 'success',
  statusText: '정상적인 입력값입니다',
  statusSize: 'md',
};
