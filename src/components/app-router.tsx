import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "~/components";
import { authRotes, publicRotes } from "~/routes";

const AppRouter = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Routes>
      {auth &&
        authRotes.map(({ path, Component }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      {publicRotes.map(({ path, Component, Skeleton }) => (
        <Route
          path={path}
          key={path}
          element={
            <Suspense fallback={Skeleton ? <Skeleton /> : <Loader />}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export { AppRouter };
