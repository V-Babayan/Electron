import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { publicRotes } from "~/routes";

import { Loader } from "./loader";

const AppRouter = () => {
  // const [auth, setAuth] = useState(false);

  return (
    <Routes>
      {/* {auth &&
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
        ))} */}
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
