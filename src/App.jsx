import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMedia } from "hooks";

import { Theme } from "styles/";
import AppRouter from "components/AppRouter";
import { Header } from "components/header/";
import { Footer } from "components/footer";

import { setProducts, setCart, asyncGetProducts, asyncGetCart } from "store/";

function App() {
  const dispatch = useDispatch();
  const isLargeDisplay = useMedia("desctopL");

  useEffect(() => {
    dispatch(asyncGetProducts(setProducts()));
    dispatch(asyncGetCart(setCart()));
  }, [dispatch]);

  return (
    <Theme isLargeDisplay={isLargeDisplay}>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </Theme>
  );
}

export default App;
