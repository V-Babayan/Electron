import React, { useEffect } from "react";
import { useMedia } from "~/hooks";

import { Theme } from "~/styles/";
// import AppRouter from "components/AppRouter";
import { Header } from "~/components/header";
// import { Footer } from "components/footer";

import { asyncGetProducts, useAppDispatch } from "~/store";

function App() {
  const dispatch = useAppDispatch();
  const isLargeDisplay = useMedia("desctopL");

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, [dispatch]);

  return (
    <Theme isLargeDisplay={isLargeDisplay}>
      <Header />
      {/* <main>
        <AppRouter />
      </main>
      <Footer /> */}
    </Theme>
  );
}

export default App;
