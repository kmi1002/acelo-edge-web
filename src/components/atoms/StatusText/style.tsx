import styled, { css } from 'styled-components';
import { font, color, border } from '@assets/styles/base/variables';

const getStatus = (style?: string) => {
  switch (style) {
    case 'success':
      return css`
        color: ${color.status.green};
      `;

    case 'warning':
      return css`
        color: ${color.status.yellow};
      `;

    case 'error':
      return css`
        color: ${color.status.red};
      `;

    case 'info':
      return css`
        color: ${color.status.grey};
      `;

    default:
      return css`
        color: ${color.status.default};
      `;
  }
};

export const Text = styled.span`
  font-family: Nunito;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.14;
  letter-spacing: 0.5px;

  ${props => getStatus(props.status)};

  display: inline-block;
  margin-left: 8px;
  margin-top: 6px;
`;
