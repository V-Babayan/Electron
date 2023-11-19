import React, { useMemo } from "react";

import {
  Heading,
  List,
  ListSkeleton,
  Page,
  PageSkeleton,
  Slider,
} from "~/components";
import { sliceProductsToPages } from "~/helpers";
import { useMedia } from "~/hooks";
import { selectRelatedProducts, useAppSelector } from "~/store";

const Home = () => {
  const products = useAppSelector(selectRelatedProducts);

  const isMobile = useMedia("mobile");
  const isTablet = useMedia("tablet");
  const isNotebook = useMedia("notebook");

  const sliderProducts = useMemo(() => [...products].slice(0, 4), [products]);

  const listProducts = useMemo(() => {
    if (products.length === 0) return [];

    if (isNotebook) return sliceProductsToPages(products, 8);

    if (isTablet) return sliceProductsToPages(products, 6);

    if (isMobile) return sliceProductsToPages(products, 4);

    return sliceProductsToPages(products, 1);
  }, [products, isMobile, isTablet, isNotebook]);

  return (
    <>
      <Slider Skeleton={PageSkeleton}>
        {sliderProducts.map((product, index) => (
          <Page key={product.id} product={product} index={index} />
        ))}
      </Slider>

      <Heading>Popular products</Heading>
      <Slider list Skeleton={ListSkeleton}>
        {listProducts.map(({ id, products }) => (
          <List key={id} products={products} />
        ))}
      </Slider>
    </>
  );
};

export default Home;
