import React from 'react';
import * as S from './style';
import * as T from './type';

const TablePaging: React.FC<T.TablePagingPorps> = ({ ...props }: T.TablePagingPorps) => (
  <S.Paging {...props}>
    <S.Prev />
    <S.Item>1</S.Item>
    <S.Item>2</S.Item>
    <S.Item>3</S.Item>
    <S.Item>4</S.Item>
    <S.Next />
  </S.Paging>
);

export default TablePaging;
