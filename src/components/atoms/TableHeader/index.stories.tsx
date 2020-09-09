import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TableHeaderPorps } from './type';
import TableHeader from './index';

export default {
  title: 'Design System/Atoms/Data Display/TableHeader',
  component: TableHeader,
} as Meta;

const Template: Story<TableHeaderPorps> = args => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: [
    {
      code: 'column1',
      title: '컬럼1',
      sort: 'all',
    },
    {
      code: 'column2',
      title: '컬럼2',
      sort: 'asc',
    },
    {
      code: 'column3',
      title: '컬럼3',
      sort: 'desc',
    },
    {
      code: 'column4',
      title: '컬럼4',
    },
    {
      code: 'column5',
      title: '컬럼5',
    },
    {
      code: 'column6',
      title: '컬럼6',
    },
    {
      code: 'column7',
      title: '컬럼7',
    },
    {
      code: 'column8',
      title: '컬럼8',
    },
  ],
};
