export const PROFILE_PAGE = "/profile";

export const LOGIN_PAGE = "/login";
export const HOME_PAGE = "/";
export const CART_PAGE = "/cart";
export const PRODUCTS_PAGE = "/products";
export const PRODUCT_PAGE = "/products/:id";

export const BASE_URL = "https://63d254dc1780fd6ab9c1f850.mockapi.io/";

export enum DeviceNames {
  mobileS = "mobileS",
  mobile = "mobile",
  mobileL = "mobileL",
  tablet = "tablet",
  notebook = "notebook",
  desktop = "desktop",
  desktopL = "desktopL",
}

export const devices = {
  mobileS: 320, // mobileSmall
  mobile: 480,
  mobileL: 576, // mobileLarge
  tablet: 768,
  notebook: 992,
  desktop: 1200,
  desktopL: 1440, // desktopLarge
};
