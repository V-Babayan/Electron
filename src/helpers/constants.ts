export enum ERoutePaths {
  PROFILE_PAGE = "/profile",
  LOGIN_PAGE = "/login",
  HOME_PAGE = "/",
  CART_PAGE = "/cart",
  PRODUCTS_PAGE = "/products",
  PRODUCT_PAGE = "/products/:id",
}

export enum EDeviceNames {
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
