import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { authRotes, publicRotes } from "routes";
import { Loader } from "./loader";

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

export default AppRouter;
