import React from 'react';
import styled, { css } from 'styled-components';

export type IStyledButtonProps = {
  primary?: boolean;
};

export const StyledButton = styled.button<IStyledButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fa0758;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props => props.primary && css`
    background: #090643;
    color: white;
  `}
`;


export type IButtonProps = {
  onClick?: () => void;
};

export const Button: React.FC<IButtonProps> = props => {
  return (
      <StyledButton {...props}>{props.children}</StyledButton>
  );
};