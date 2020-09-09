import styled, { css } from 'styled-components';

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  font-size: 13px;
  color: #616161;
  text-align: center;

  &:not(:last-child) {
    border-bottom: 1px solid #e6e6e6;
  }
`;

export const Td = styled.td`
  padding: 13px 5px;
`;
