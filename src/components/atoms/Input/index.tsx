import React, { FC, useEffect, useState } from 'react';
import Icon from '@atoms/Icon';

import * as S from './style';
import * as T from './type';

const Input: FC<T.InputPorps> = ({ ...props }: T.InputPorps) => {
  const [isShowPassword, setShowPassword] = useState(false);

  const customType = () => {
    return isShowPassword ? 'text' : 'password';
  };

  const togglePassword = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <S.Wrapper kind={props.kind}>
      <S.Input type={customType()} kind={props.kind} placeholder={props.placeholder} />
      {props.type === 'password' && (
        <S.ButtonEye
          type="button"
          onClick={() => {
            togglePassword();
          }}
        >
          <Icon kind={isShowPassword ? 'eye-slash' : 'eye'} />
        </S.ButtonEye>
      )}
    </S.Wrapper>
  );
};

export default Input;
