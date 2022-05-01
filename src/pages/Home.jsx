import React, { useMemo } from "react";
import { useMedia } from "hooks";
import { useSelector } from "react-redux";

import { selectRelatedProducts } from "store";

import { Slider } from "components/slider";
import { Heading } from "components/core-ui";
import { List } from "components/list";

import { sliceProductsToPages } from "helpers";
import { Page } from "components/slider/children/";

const Home = () => {
  const products = useSelector(selectRelatedProducts);

  const isMobile = useMedia("mobile");
  const isTablet = useMedia("tablet");
  const isNotebook = useMedia("notebook");

  const sliderProducts = products.length ? [...products].slice(0, 4) : [{ id: Date.now() }];

  const listProducts = useMemo(() => {
    if (isNotebook) return sliceProductsToPages(products, 8);

    if (isTablet) return sliceProductsToPages(products, 6);

    if (isMobile) return sliceProductsToPages(products, 4);

    return sliceProductsToPages(products, 1);
  }, [products, isMobile, isTablet, isNotebook]);

  return (
    <>
      <Slider>
        {sliderProducts.map((product) => (
          <Page
            key={product.id}
            product={product}
          />
        ))}
      </Slider>

      <Heading>Popular products</Heading>
      <Slider list>
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
