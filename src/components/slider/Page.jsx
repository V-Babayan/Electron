import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PageLeft, PageRight, SPage, ImageBlock, ButtonsContainer } from "./Slider.styled";
import Button from "../core-ui/button/Button";

const Page = ({ page, index }) => {
  const navigate = useNavigate();

  const ClickHandler = useCallback(() => navigate(`/products/${page.id}`), [navigate, page]);

  return (
    <SPage
      key={page.id}
      tabIndex={0}>
      <PageLeft>
        <h5>{page.title}</h5>
        <ButtonsContainer>
          <Button>Shop now</Button>
          <Button
            outlined
            onClick={ClickHandler}
            color={"blue"}>
            View more
          </Button>
        </ButtonsContainer>
      </PageLeft>
      <PageRight>
        <ImageBlock price={page.price}>
          <img
            src={page.imageUrl}
            alt={page.title}
            loading={index ? "lazy" : undefined}
          />
        </ImageBlock>
      </PageRight>
    </SPage>
  );
};

export default memo(Page);
