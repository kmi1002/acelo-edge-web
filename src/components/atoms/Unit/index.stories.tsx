import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UnitPorps } from './type';
import Unit from './index';

export default {
  title: 'Design System/Atoms/Display/Unit',
  component: Unit,
} as Meta;

const Template: Story<UnitPorps> = args => <Unit {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'count',
  value: 100,
};
