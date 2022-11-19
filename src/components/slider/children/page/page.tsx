import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "~/components";
import { Product } from "~/store";

import * as Styled from "./styled";

type PageProps = {
  product: Product;
  index: number;
};

const Page: FC<PageProps> = ({ product, index }) => {
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/products/${product.id}`);

  return (
    <Styled.Page tabIndex={0}>
      <Styled.PageLeft>
        <Styled.ProductName>{product.title}</Styled.ProductName>
        <Styled.ButtonsContainer>
          <Button color="orange">Shop now</Button>
          <Button outlined onClick={clickHandler} color="blue">
            View more
          </Button>
        </Styled.ButtonsContainer>
      </Styled.PageLeft>
      <Styled.PageRight>
        <Styled.ImageBlock $price={product.price}>
          <Styled.Image
            src={product.imageUrl || ""}
            alt={product.title}
            loading={index ? "lazy" : undefined}
          />
        </Styled.ImageBlock>
      </Styled.PageRight>
    </Styled.Page>
  );
};

export { Page };
