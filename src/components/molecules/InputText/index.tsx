import React, { FC } from 'react';
import InputFrame from '@molecules/InputFrame';
import Input from '@atoms/Input';
import * as S from './style';
import * as T from './type';

const InputText: FC<T.InputTextPorps> = ({ ...props }: T.InputTextPorps) => (
  <InputFrame {...props}>
    <Input {...props}></Input>
  </InputFrame>
);

export default InputText;
