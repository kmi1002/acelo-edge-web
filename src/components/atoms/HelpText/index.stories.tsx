import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HelpTextPorps } from './type';
import HelpText from './index';

export default {
  title: 'Design System/Atoms/Display/HelpText',
  component: HelpText,
} as Meta;

const Template: Story<HelpTextPorps> = args => <HelpText {...args} />;

export const Default = Template.bind({});
Default.args = {
  helps: ['1번을 입력하세요', '2번을 입력하세요', '3번을 입력하세요'],
  helpSize: 'md',
};
