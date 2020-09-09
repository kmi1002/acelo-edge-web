import React from 'react';
import Icon from '@atoms/Icon';
import * as S from './style';
import * as T from './type';

const TableRow: React.FC<T.TableRowPorps> = ({ ...props }: T.TableRowPorps) => (
  <S.Tbody {...props}>
    {props.rows && props.rows.length ? (
      props.rows.map((row, key) => (
        <S.Tr>
          {Object.keys(row).map((entry, key) => (
            <S.Td key={key}>{row[entry]}</S.Td>
          ))}
        </S.Tr>
      ))
    ) : (
      <S.Tr>데이터가 없습니다</S.Tr>
    )}
  </S.Tbody>
);

export default TableRow;
