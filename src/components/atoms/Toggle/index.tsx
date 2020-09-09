import React from 'react';
import * as S from './style';
import * as T from './type';

const Toggle: React.FC<T.TogglePorps> = ({ ...props }: T.TogglePorps) => (
  <S.Wrapper {...props}>
    <S.Value type="checkbox" id="toggle" />
    <S.Toggle htmlFor="toggle">toggle</S.Toggle>
  </S.Wrapper>
);

export default Toggle;
