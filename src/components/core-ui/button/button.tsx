import React, { FC, HTMLAttributes } from "react";

import * as Styled from "./styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  large?: boolean;
  outlined?: boolean;
  color?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ color, disabled, large, outlined }) => {
  return (
    <Styled.Button
      $color={color}
      $disabled={disabled}
      $large={large}
      $outlined={outlined}
    />
  );
};

export { Button };
