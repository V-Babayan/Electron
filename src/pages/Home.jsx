import React, { useMemo } from "react";
import { useMedia } from "hooks";
import { useSelector } from "react-redux";

import { selectRelatedProducts } from "store";
import { sliceProductsToPages } from "helpers";

import { Slider } from "components/slider";
import { Heading } from "components/core-ui";
import { List } from "components/list";
import { Page } from "components/slider/children/";
import { PageSkeleton } from "components/slider/children/page/skeleton";
import { ListSkeleton } from "components/list/ListSceleton";

const Home = () => {
  const products = useSelector(selectRelatedProducts);

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
        {sliderProducts.map((product) => (
          <Page
            key={product.id}
            product={product}
          />
        ))}
      </Slider>

      <Heading>Popular products</Heading>
      <Slider
        list
        Skeleton={ListSkeleton}>
        {listProducts.map(({ id, products }) => (
          <List
            key={id}
            products={products}
          />
        ))}
      </Slider>
    </>
  );
};

export default Home;
