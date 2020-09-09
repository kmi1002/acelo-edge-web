import React from 'react';
import * as S from './style';
import * as T from './type';

const HelpText: React.FC<T.HelpTextPorps> = ({ ...props }: T.HelpTextPorps) => {
  return (
    <S.List>
      {props.helps.map(help => (
        <S.Item>{help}</S.Item>
      ))}
    </S.List>
  );
};

export default HelpText;
