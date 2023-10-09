import React, { useEffect } from "react";

import { AppRouter, Footer, Header } from "~/components";
import { useMedia } from "~/hooks";
import { fetchProducts, useAppDispatch } from "~/store";
import { Theme } from "~/styles/";

import { EDeviceNames } from "./helpers";

function App() {
  const dispatch = useAppDispatch();
  const isLargeDisplay = useMedia(EDeviceNames.desktopL);

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
