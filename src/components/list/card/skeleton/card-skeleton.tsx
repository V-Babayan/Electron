import React, { FC } from "react";

import { InfoContainer } from "../children/product-info/styled";
import { Container } from "../styled";

import * as Styled from "./styled";

const CardSkeleton: FC = () => {
  return (
    <Container>
      <Styled.ImageSkeleton />

      <InfoContainer>
        <Styled.TitleSkeleton />
        <Styled.PriceSkeleton />
      </InfoContainer>
    </Container>
  );
};

export { CardSkeleton };
