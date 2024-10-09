"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstore"] = self["webpackChunkstore"] || []).push([["src_pages_products_products_tsx"],{

/***/ "./src/pages/products/products.tsx":
/*!*****************************************!*\
  !*** ./src/pages/products/products.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components */ \"./src/components/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store */ \"./src/store/index.ts\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./src/pages/products/styled.ts\");\n\n\n\n\n\n\nconst Products = () => {\n    const products = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_store__WEBPACK_IMPORTED_MODULE_3__.selectProducts);\n    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        query: location.state?.query || \"\",\n        brands: [],\n        categories: location.state?.categories || [],\n    });\n    const [filteredProducts, brands] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n        const brands = {};\n        const arrayBrands = [];\n        const filteredProducts = !filter\n            ? products\n            : products.filter(product => {\n                if (filter.query &&\n                    !product.title.toLowerCase().includes(filter.query.toLowerCase())) {\n                    return false;\n                }\n                if (filter.categories.length > 0 &&\n                    !filter.categories.includes(product.category)) {\n                    return false;\n                }\n                brands[product.brand]\n                    ? brands[product.brand]++\n                    : (brands[product.brand] = 1);\n                if (filter.brands.length > 0 &&\n                    !filter.brands.includes(product.brand)) {\n                    return false;\n                }\n                return true;\n            });\n        for (const [key, value] of Object.entries(brands))\n            arrayBrands.push({ name: key, count: value });\n        return [filteredProducts, arrayBrands];\n    }, [filter, products]);\n    const resetHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setFilter(prev => ({ ...prev, brands: [] })), []);\n    const searchHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => setFilter(prev => ({ ...prev, query: e.target.value })), []);\n    const changeFilterBrands = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {\n        setFilter(prev => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filterWithProperty)(prev, \"brands\", e.target.value));\n    }, []);\n    const changeFilterCategories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {\n        setFilter(prev => (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filterWithProperty)(prev, \"categories\", e.target.value));\n    }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.Container, null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.Sidebar, null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Brands, { filter: brands, filterTitle: \"Brands\", changeHandler: changeFilterBrands, resetHandler: resetHandler, brands: filter.brands })),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled__WEBPACK_IMPORTED_MODULE_4__.MainContent, null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.SearchForm, { filter: filter, searchHandler: searchHandler, changeFilterCategories: changeFilterCategories }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.List, { products: filteredProducts }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\n\n\n//# sourceURL=webpack://store/./src/pages/products/products.tsx?");

/***/ }),

/***/ "./src/pages/products/styled.ts":
/*!**************************************!*\
  !*** ./src/pages/products/styled.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* binding */ Container),\n/* harmony export */   MainContent: () => (/* binding */ MainContent),\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/helpers */ \"./src/helpers/index.ts\");\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div `\n  @media screen and (${({ theme }) => theme.media(_helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.mobileL)}) {\n    display: flex;\n    align-items: flex-start;\n\n    gap: 20px;\n  }\n`;\nconst MainContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div `\n  @media screen and (${({ theme }) => theme.media(_helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.mobileL)}) {\n    width: 100%;\n\n    & > ul {\n      flex: 1 1 auto;\n\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n  & > ul {\n    @media screen and (${({ theme }) => theme.media(_helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.notebook)}) {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n`;\nconst Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aside `\n  @media screen and (${({ theme }) => theme.media(_helpers__WEBPACK_IMPORTED_MODULE_0__.EDeviceNames.mobileL)}) {\n    flex: 0 2 315px;\n  }\n`;\n\n\n\n//# sourceURL=webpack://store/./src/pages/products/styled.ts?");

/***/ })

}]);