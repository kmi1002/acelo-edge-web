import React from 'react';
import * as S from './style';
import * as T from './type';

const Textarea: React.FC<T.TextareaPorps> = ({ ...props }: T.TextareaPorps) => (
  <S.Wrapper {...props}>
    <S.Textarea />
  </S.Wrapper>
);

export default Textarea;
