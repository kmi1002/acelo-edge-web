import React from 'react';
import * as S from './style';
import * as T from './type';

const Check: React.FC<T.CheckPorps> = ({ ...props }) => (
  <S.Wrapper>
    <S.Check id="check" {...props} />
    {props.label !== '' && <S.Label htmlFor="check">{props.label}</S.Label>}
  </S.Wrapper>
);

export default Check;
