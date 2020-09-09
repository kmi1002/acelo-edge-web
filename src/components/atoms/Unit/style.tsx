import styled, { css } from 'styled-components';
import * as T from './type';

export const Unit = styled.span<T.UnitPorps>`
  ${props =>
    props.strong &&
    css`
      font-weight: bold;
    `}

  ${props =>
    props.value &&
    css`
      color: ${props.value > 0 ? 'red' : 'blue'};
    `}
`;
