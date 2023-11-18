import React, { FC, ReactNode } from "react";

import * as Styled from "./styled";

type HeadingProps = {
  children?: ReactNode;
};

const Heading: FC<HeadingProps> = props => {
  return <Styled.Heading {...props} />;
};

export { Heading };
