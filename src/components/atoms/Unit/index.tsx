import React from 'react';
import { UnitHelper } from '@helpers/UnitHelper';
import * as S from './style';
import * as T from './type';

const Unit: React.FC<T.UnitPorps> = ({ ...props }: T.UnitPorps) => {
  return (
    <S.Unit {...props}>{UnitHelper.rateText(props.value, props.symbol) + UnitHelper.renderUnit(props.type)}</S.Unit>
  );
};

export default Unit;
