import React from 'react';

export type IButtonProps = {
  onClick?: () => void;
};

export const Button: React.FC<IButtonProps> = props => {
  return (
      <button {...props}>{props.children}</button>
  );
};