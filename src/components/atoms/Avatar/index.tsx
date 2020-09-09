import React, { FC } from 'react';
import * as S from './style';
import * as T from './type';

const Avatar: FC<T.AvatarPorps> = ({ ...props }: T.AvatarPorps) => (
  <S.Wrapper>
    <S.Picture>
      <S.Avatar {...props} />
    </S.Picture>
  </S.Wrapper>
);

export default Avatar;
