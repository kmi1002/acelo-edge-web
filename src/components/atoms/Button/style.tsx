import styled, { css } from 'styled-components';
import * as T from './type';
import { color, status } from '@styles/base/variables';

const getKind = (style?: string) => {
  switch (style) {
    case 'primary':
      return css`
        border-color: ${color.primary};
      `;

    case 'secondary':
      return css`
        border-color: ${color.secondary};
      `;

    case 'tertiary':
      return css`
        border-color: ${color.tertiary};
      `;

    case 'success':
      return css`
        border-color: ${status.success};
      `;

    case 'danger':
      return css`
        border-color: ${status.danger};
      `;

    case 'warning':
      return css`
        border-color: ${status.warning};
      `;

    case 'info':
      return css`
        border-color: ${status.info};
      `;

    default:
      return css`
        border-color: transparent;
      `;
  }
};

export const Button = styled.button<T.ButtonPorps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  outline: none;
  background: #fff;

  ${props => getKind(props.kind)};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}

  text-align: center;
  text-decoration: none;
  cursor: pointer;

  padding: 0 16px;
  height: 40px;
  font-size: 14px;
  border-radius: 6px;

  ${props =>
    props.transparent &&
    css`
      background: transparent;
      border: 0;
      border-radius: 0 !important;

      &:hover {
        background: transparent;
      }
    `}
`;

export const Label = styled.span``;
