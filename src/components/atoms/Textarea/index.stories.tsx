import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextareaPorps } from './type';
import Textarea from './index';

export default {
  title: 'Design System/Atoms/Input/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaPorps> = args => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};
