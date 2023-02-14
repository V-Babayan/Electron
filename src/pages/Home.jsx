import React, { useMemo } from "react";

import Slider from "../components/slider/Slider";
import List from "../components/list/List";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  const sliderProducts = useMemo(
    () => [...products].sort((a, b) => b.rating - a.rating).slice(0, 4),
    [products]
  );

  return (
    <>
      <Slider pages={sliderProducts} />
      <List
        products={products.slice(0, 12)}
        title={"Popular products"}
      />
    </>
  );
};

export default Home;
