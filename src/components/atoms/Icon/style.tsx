import styled from 'styled-components';
import { icon } from '@assets/styles/utils/unit';

import * as T from './type';

export const Icon = styled.i<T.IconPorps>`
  ${props => props.kind === 'eye' && icon(require('@images/ic_eye.svg'), '24px', '24px')}
  ${props => props.kind === 'eye-slash' && icon(require('@images/ic_eye-slash.svg'), '24px', '24px')}
`;
