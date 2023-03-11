import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { setProducts } from "./redux/productsClicer";
import { setCart } from "./redux/cartClicer";
import { asyncGetProducts, asyncGetCart } from "./helpers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts(setProducts()));
    dispatch(asyncGetCart(setCart()));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
