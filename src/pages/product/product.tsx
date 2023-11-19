import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "~/api";
import { Description, Heading, Info, List, ProductSlider } from "~/components";
import { Product, selectRelatedProducts, useAppSelector } from "~/store";

import * as Styled from "./styled";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Product>({} as Product);

  const productsInRating = useAppSelector(selectRelatedProducts);

  const relatedProducts = useMemo(() => productsInRating.slice(0, 4), []);

  useEffect(() => {
    getProduct(Number(id)).then(data => setItem(data as Product));
  }, [id]);

  return (
    <>
      <Styled.Container>
        <ProductSlider images={item.images} title="" />
        <Info product={item} />
      </Styled.Container>

      <Description description={item.description} />

      <Heading>Related product</Heading>
      <List products={relatedProducts} />
    </>
  );
};

export default Product;
