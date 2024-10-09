"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstore"] = self["webpackChunkstore"] || []).push([["src_pages_cart_cart_tsx"],{

/***/ "./src/pages/cart/cart.tsx":
/*!*********************************!*\
  !*** ./src/pages/cart/cart.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cart_layout___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/cart-layout/ */ \"./src/components/cart-layout/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store */ \"./src/store/index.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./src/pages/cart/styled.ts\");\n\n\n\n\n\nconst Cart = () => {\n    const cart = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_store__WEBPACK_IMPORTED_MODULE_3__.selectCartQuantity);\n    return cart ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.Container, null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cart_layout___WEBPACK_IMPORTED_MODULE_1__.Table, null),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_cart_layout___WEBPACK_IMPORTED_MODULE_1__.Total, null))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.CartEmptyBlock, null,\n        \"Your cart is empty.\",\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.HomeLink, { to: _helpers__WEBPACK_IMPORTED_MODULE_2__.ERoutePaths.HOME_PAGE }, \"Go home form shoping\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n\n\n//# sourceURL=webpack://store/./src/pages/cart/cart.tsx?");

/***/ }),

/***/ "./src/pages/cart/styled.ts":
/*!**********************************!*\
  !*** ./src/pages/cart/styled.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartEmptyBlock: () => (/* binding */ CartEmptyBlock),\n/* harmony export */   Container: () => (/* binding */ Container),\n/* harmony export */   HomeLink: () => (/* binding */ HomeLink)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/helpers */ \"./src/helpers/index.ts\");\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div `\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 20px;\n\n  @media screen and (${({ theme }) => theme.media(_helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.notebook)}) {\n    flex-direction: row;\n\n    & > div {\n      flex: 1 1 70%;\n    }\n    & > section {\n      flex: 1 1 auto;\n    }\n  }\n`;\nconst CartEmptyBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div `\n  width: 100%;\n  height: 20vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n\n  font-size: ${({ theme }) => theme.ratio(16, 16, _helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.mobileS)};\n`;\nconst HomeLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)) `\n  color: #008cff;\n  font-weight: 700;\n\n  &:hover {\n    color: #008cff85;\n  }\n`;\n\n\n//# sourceURL=webpack://store/./src/pages/cart/styled.ts?");

/***/ })

}]);