import { lazy } from "react";

import { HomeSkeleton } from "~/pages/home/HomeSkeleton";

import { ERoutePaths } from "./helpers";

export const authRotes = [
  {
    path: ERoutePaths.PROFILE_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/profile */ "./pages/Profile")
    ),
  },
];
export const publicRotes = [
  {
    path: ERoutePaths.CART_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/cart' */ "./pages/cart/cart")
    ),
  },
  {
    path: ERoutePaths.PRODUCTS_PAGE,
    Component: lazy(
      () =>
        import(
          /* webpack-chunk-name: 'pages/products' */ "./pages/products/products"
        )
    ),
  },
  {
    path: ERoutePaths.LOGIN_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/login */ "./pages/Login")
    ),
  },
  {
    path: ERoutePaths.PRODUCT_PAGE,
    Component: lazy(
      () =>
        import(
          /* webpack-chunk-name: 'pages/product' */ "./pages/product/product"
        )
    ),
  },
  {
    path: ERoutePaths.HOME_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/ */ "./pages/Home")
    ),
    Skeleton: HomeSkeleton,
  },
];
