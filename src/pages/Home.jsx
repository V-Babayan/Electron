import React, { useMemo } from "react";

import Slider from "../components/slider/Slider";
import List from "../components/list/List";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  const sliderProducts = useMemo(
    () =>
      products.length
        ? [...products].sort((a, b) => b.rating - a.rating).slice(0, 4)
        : [{ id: Date.now() }],
    [products]
  );

  return (
    <>
      <Slider pages={sliderProducts.length ? sliderProducts : [{ id: 1 }]} />
      <List
        products={products.slice(0, 12)}
        title={"Popular products"}
      />
    </>
  );
};

export default Home;
