import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { Slider } from "components/slider";
import List from "components/list/List";
import { selectRelatedProducts } from "store";

const Home = () => {
  const products = useSelector(selectRelatedProducts);

  const sliderProducts = products.length ? [...products].slice(0, 4) : [{ id: Date.now() }];

  const listProducts = useMemo(() => products.slice(0, 12), [products]);

  return (
    <>
      <Slider products={sliderProducts} />
      <List
        products={listProducts}
        title={"Popular products"}
      />
    </>
  );
};

export default Home;
