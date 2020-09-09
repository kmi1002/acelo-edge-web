import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconPorps } from './type';
import Icon from './index';

export default {
  title: 'Design System/Atoms/Display/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconPorps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  kind: 'eye',
};
