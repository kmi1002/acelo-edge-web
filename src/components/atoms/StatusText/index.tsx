import React from 'react';
import * as S from './style';
import * as T from './type';

const StatusText: React.FC<T.StatusTextPorps> = ({ ...props }: T.StatusTextPorps) => {
  return <S.Text status={props.status}>{props.statusText}</S.Text>;
};

export default StatusText;
