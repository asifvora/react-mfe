import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
  
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    margin: 0px 5px 5px 0px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 50px;
  &:checked + ${CheckBoxLabel} {
    background: #2196f3;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 26px;
      height: 26px;
      margin: 0px 5px 5px 0px;
      margin-left: 23px;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
`;
