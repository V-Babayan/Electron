import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getProduct } from "api";
import { selectRelatedProducts } from "store";

import { Slider, Info, Description } from "components/product-layout";
import { Heading } from "components/core-ui";
import { List } from "components/list";

import * as Styled from "./styled";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const productsInRating = useSelector(selectRelatedProducts);

  const relatedProducts = useMemo(() => productsInRating.slice(0, 4), []);

  useEffect(() => {
    getProduct(id).then((data) => setItem(data));
  }, [id]);

  return (
    <>
      <Styled.Container>
        <Slider images={item.images} />
        <Info product={item} />
      </Styled.Container>

      <Description description={item.description} />

      <Heading>Related product</Heading>
      <List products={relatedProducts} />
    </>
  );
};

export default Product;
