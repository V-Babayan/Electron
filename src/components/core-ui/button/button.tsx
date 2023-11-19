import React, { FC, HTMLAttributes, ReactNode } from "react";

import * as Styled from "./styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  large?: boolean;
  outlined?: boolean;
  color?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  color,
  disabled,
  large,
  outlined,
  ...otherProps
}) => {
  return (
    <Styled.Button
      $color={color}
      $disabled={disabled}
      $large={large}
      $outlined={outlined}
      {...otherProps}
    />
  );
};

export { Button };
