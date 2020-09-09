import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TableRowPorps } from './type';
import TableRow from './index';

export default {
  title: 'Design System/Atoms/Data Display/TableRow',
  component: TableRow,
} as Meta;

const Template: Story<TableRowPorps> = args => <TableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    {
      id: 1,
      row1: '데이터1',
      row2: '데이터2',
      row3: '데이터3',
      row4: '데이터4',
      row5: '데이터5',
    },
    {
      id: 2,
      row1: '데이터1',
      row2: '데이터2',
      row3: '데이터3',
      row4: '데이터4',
      row5: '데이터5',
    },
    {
      id: 3,
      row1: '데이터1',
      row2: '데이터2',
      row3: '데이터3',
      row4: '데이터4',
      row5: '데이터5',
    },
  ],
};
