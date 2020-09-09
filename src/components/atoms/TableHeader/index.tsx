import React from 'react';
// import Icon from '@atoms/Icon';
import * as S from './style';
import * as T from './type';

const TableHeader: React.FC<T.TableHeaderPorps> = ({ ...props }: T.TableHeaderPorps) => (
  <S.Thead {...props}>
    <S.Tr>
      {props.headers.map(({ code, title, sort }) => (
        <S.Th>
          <span>{title}</span>
          {/*{sort && <Icon kind={`ico-table-sort-${sort}`} />}*/}
        </S.Th>
      ))}
    </S.Tr>
  </S.Thead>
);

export default TableHeader;
