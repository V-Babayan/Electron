import { lazy } from "react";

import {
  CART_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  PRODUCT_PAGE,
  PRODUCTS_PAGE,
  PROFILE_PAGE,
} from "~/helpers";
import { HomeSkeleton } from "~/pages/home/HomeSkeleton";

export const authRotes = [
  {
    path: PROFILE_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/profile */ "./pages/Profile")
    ),
  },
];
export const publicRotes = [
  {
    path: CART_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/cart' */ "./pages/cart/cart")
    ),
  },
  {
    path: PRODUCTS_PAGE,
    Component: lazy(
      () =>
        import(
          /* webpack-chunk-name: 'pages/products' */ "./pages/products/products"
        )
    ),
  },
  {
    path: LOGIN_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/login */ "./pages/Login")
    ),
  },
  {
    path: PRODUCT_PAGE,
    Component: lazy(
      () =>
        import(
          /* webpack-chunk-name: 'pages/product' */ "./pages/product/product"
        )
    ),
  },
  {
    path: HOME_PAGE,
    Component: lazy(
      () => import(/* webpack-chunk-name: 'pages/ */ "./pages/Home")
    ),
    Skeleton: HomeSkeleton,
  },
];
