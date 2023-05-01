import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "components/core-ui/";

import * as Styled from "./styled";

const Page = ({ product, index }) => {
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/products/${product.id}`);

  return (
    <Styled.Page tabIndex={0}>
      <Styled.PageLeft>
        <Styled.ProductName>{product.title}</Styled.ProductName>
        <Styled.ButtonsContainer>
          <Button color='orange'>Shop now</Button>
          <Button
            outlined
            onClick={clickHandler}
            color='blue'>
            View more
          </Button>
        </Styled.ButtonsContainer>
      </Styled.PageLeft>
      <Styled.PageRight>
        <Styled.ImageBlock price={product.price}>
          <img
            src={product.imageUrl || ""}
            alt={product.title}
            loading={index ? "lazy" : undefined}
          />
        </Styled.ImageBlock>
      </Styled.PageRight>
    </Styled.Page>
  );
};

export default memo(Page);
