import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TablePagingPorps } from './type';
import TablePaging from './index';

export default {
  title: 'Design System/Atoms/Data Display/TablePaging',
  component: TablePaging,
} as Meta;

const Template: Story<TablePagingPorps> = args => <TablePaging {...args} />;

export const Default = Template.bind({});
Default.args = {};
