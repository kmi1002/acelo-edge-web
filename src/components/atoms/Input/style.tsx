import styled, { css } from 'styled-components';
import { font, color, border } from '@assets/styles/base/variables';
import { btnIcon } from '@assets/styles/utils/unit';

import * as T from './type';

const getKind = (style?: string) => {
  switch (style) {
    case 'success':
      return css`
        border-radius: ${border.focus.radius};
        border: ${border.focus.width} solid ${color.status.green};
        padding: 13px 22px;
      `;

    case 'warning':
      return css`
        border-radius: ${border.focus.radius};
        border: ${border.focus.width} solid ${color.status.yellow};
        padding: 13px 22px;
      `;

    case 'error':
      return css`
        border-radius: ${border.focus.radius};
        border: ${border.focus.width} solid ${color.status.red};
        padding: 13px 22px;
      `;

    case 'info':
      return css`
        border-radius: ${border.focus.radius};
        border: ${border.focus.width} solid ${color.status.grey};
        padding: 13px 22px;
      `;

    default:
      return css`
        border-radius: ${border.default.radius};
        border: ${border.default.width} solid ${color.status.default};
        padding: 14px 23px;
      `;
  }
};

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background: transparent;
  color: ${font.color};
  width: 100%;
  outline: none;
  border: none;
  line-height: 20px;
  ${props => getKind(props.kind)};

  &:focus {
    ${props => props.kind === 'default' && getKind('success')};
  }

  &:disabled {
    color: #9e9e9e;
    background: #f5f5f5;
  }

  &::placeholder {
    color: ${font.placeholderColor};
  }

  &.transparent {
    background: transparent;
  }
`;

export const ButtonEye = styled.button`
  ${btnIcon()};

  position: absolute;
  top: 50%;
  right: 21px;
  transform: translate(0, -50%);
`;
