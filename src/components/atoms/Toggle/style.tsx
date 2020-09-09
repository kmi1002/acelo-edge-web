import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Value = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
    background: #fbb03b;
  }
`;

export const Toggle = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  background: #fff;
  display: block;
  position: relative;
  border: 1px solid #ededed;

  &:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background: #a9a9a9;
    border-radius: 24px;
    transition: 0.2s;
  }

  &:active:after {
    width: 130px;
  }
`;
