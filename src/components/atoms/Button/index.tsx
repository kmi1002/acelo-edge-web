import React from 'react';
// import Icon from '@atoms/'
import * as S from './style';
import * as T from './type';

const Button: React.FC<T.ButtonPorps> = ({ ...props }: T.ButtonPorps) => (
  <S.Button {...props}>
    {/*{props.icon && <Icon kind={props.icon} />}*/}
    {props.label !== '' && <S.Label>{props.label}</S.Label>}
  </S.Button>
);

export default Button;
