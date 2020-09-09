import React, { FC } from 'react';
import StatusText from '@atoms/StatusText';
import HelpText from '@atoms/HelpText';
import * as S from './style';
import * as T from './type';

const InputFrame: FC<T.InputFramePorps> = ({ ...props }: T.InputFramePorps) => (
  <S.Wrapper>
    {props.title && props.title !== '' && <S.Label status={props.status}>{props.title}</S.Label>}
    <div>
      <S.Input>{props.children}</S.Input>
      <StatusText status={props.status} statusSize={props.statusSize} statusText={props.statusText}></StatusText>
      {/*<HelpText {...props}></HelpText>*/}
    </div>
  </S.Wrapper>
);

export default InputFrame;
