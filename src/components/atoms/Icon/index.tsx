import React from 'react';
import * as S from './style';
import * as T from './type';

const Icon: React.FC<T.IconPorps> = ({ ...props }: T.IconPorps) => <S.Icon {...props} />;

export default Icon;
