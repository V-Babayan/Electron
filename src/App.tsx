import React, { useEffect } from "react";

import { AppRouter, Footer, Header } from "~/components";
import { useMedia } from "~/hooks";
import { fetchProducts, useAppDispatch } from "~/store";
import { Theme } from "~/styles/";

function App() {
  const dispatch = useAppDispatch();
  const isLargeDisplay = useMedia("desctopL");

  useEffect(() => {
    dispatch(fetchProducts());
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
