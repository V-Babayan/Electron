import React from "react";

import { SButton } from "./Button.styled";

const Button = ({ ...props }) => {
  return <SButton {...props} />;
};

export default Button;
