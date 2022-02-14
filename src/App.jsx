import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { fetchCart, fetchDevices } from "./http/index";
import { setProducts } from "./redux/productsClicer";
import { setCart } from "./redux/cartClicer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDevices(setProducts()));
    dispatch(fetchCart(setCart()));
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
