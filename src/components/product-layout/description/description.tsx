import React, { FC } from "react";

import * as Styled from "./styled";

const Description: FC<{ description: string }> = ({ description }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Description</Styled.Title>
      <Styled.Text>{description}</Styled.Text>
    </Styled.Wrapper>
  );
};

export { Description };
