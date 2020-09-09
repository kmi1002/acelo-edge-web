import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputTextPorps } from './type';
import InputText from './index';

export default {
  title: 'Design System/Molecules/Input/InputText',
  component: InputText,
} as Meta;

const Template: Story<InputTextPorps> = args => <InputText {...args} />;

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
