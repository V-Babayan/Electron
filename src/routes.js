import { lazy } from "react";
import {
  CART_PAGE,
  LOGIN_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_PAGE,
  PROFILE_PAGE,
  HOME_PAGE,
} from "./helpers/consts";

export const authRotes = [
  {
    path: PROFILE_PAGE,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/profile */ "./pages/Profile")),
  },
];
export const publicRotes = [
  {
    path: CART_PAGE,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/cart' */ "./pages/Cart")),
  },
  {
    path: PRODUCTS_PAGE,
    Component: lazy(() =>
      import(/* webpack-chunk-name: 'pages/products' */ "./pages/products/Products")
    ),
  },
  {
    path: LOGIN_PAGE,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/login */ "./pages/Login")),
  },
  {
    path: PRODUCT_PAGE,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/product' */ "./pages/Product")),
  },
  {
    path: HOME_PAGE,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/ */ "./pages/Home")),
  },
];
