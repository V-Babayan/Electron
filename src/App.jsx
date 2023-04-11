import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRouter from "components/AppRouter";
import Header from "components/header/";
import Footer from "components/footer";

import { setProducts, setCart, asyncGetProducts, asyncGetCart } from "store/";

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
