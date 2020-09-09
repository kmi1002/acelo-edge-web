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

export const Wrapper = styled.div``;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 0.5px;

  ${props => getStatus(props.status)};

  margin-bottom: 5px;
  margin-left: 8px;
  display: inline-block;
`;

export const Input = styled.div``;
