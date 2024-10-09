"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstore"] = self["webpackChunkstore"] || []).push([["src_pages_product_product_tsx"],{

/***/ "./src/pages/product/product.tsx":
/*!***************************************!*\
  !*** ./src/pages/product/product.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/api */ \"./src/api/index.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components */ \"./src/components/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store */ \"./src/store/index.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./src/pages/product/styled.ts\");\n\n\n\n\n\n\nconst Product = () => {\n    const { id } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n    const productsInRating = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_store__WEBPACK_IMPORTED_MODULE_3__.selectRelatedProducts);\n    const relatedProducts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => productsInRating.slice(0, 4), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        (0,_api__WEBPACK_IMPORTED_MODULE_1__.getProduct)(Number(id)).then(data => setItem(data));\n    }, [id]);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.Container, null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.ProductSlider, { images: item.images, title: \"\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Info, { product: item })),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Description, { description: item.description }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Heading, null, \"Related product\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.List, { products: relatedProducts })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n\n\n//# sourceURL=webpack://store/./src/pages/product/product.tsx?");

/***/ }),

/***/ "./src/pages/product/styled.ts":
/*!*************************************!*\
  !*** ./src/pages/product/styled.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/helpers */ \"./src/helpers/index.ts\");\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div `\n  display: grid;\n  gap: ${({ theme }) => theme.ratio(10, 40, _helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.mobileS)};\n  margin-bottom: 20px;\n\n  @media screen and (${({ theme }) => theme.media(_helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.tablet)}) {\n    grid-template-columns: 1fr 1fr;\n  }\n`;\n\n\n//# sourceURL=webpack://store/./src/pages/product/styled.ts?");

/***/ })

}]);