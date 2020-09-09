import React from 'react';
import * as S from './style';
import * as T from './type';

const Select: React.FC<T.SelectPorps> = ({ ...props }: T.SelectPorps) => {
  return (
    <S.Select>
      {props.options.map(({ label, value }) => (
        <S.Option key={value} value={value}>
          {label}
        </S.Option>
      ))}
    </S.Select>
  );
};

export default Select;
