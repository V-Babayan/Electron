import React from "react";

import * as Styled from "./styled";

const Button = ({ ...props }) => {
  return <Styled.Button {...props} />;
};

export { Button };
