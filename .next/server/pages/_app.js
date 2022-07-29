/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/navbar.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Navbar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"width-full h-[62.48px] sticky top-0 z-10 border-b-[#e2e8f0] border-b\"\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/navbar.tsx\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQU8sTUFBTUEsTUFBTSxHQUFHLElBQU07SUFDeEIscUJBQ0ksOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFDLHNFQUFzRTs7Ozs7aUJBRS9FLENBQ1o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2V2aWwtbmV4dGpzLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLnRzeD81ZjdmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3aWR0aC1mdWxsIGgtWzYyLjQ4cHhdIHN0aWNreSB0b3AtMCB6LTEwIGJvcmRlci1iLVsjZTJlOGYwXSBib3JkZXItYlwiPlxuXG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsiTmF2YmFyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navbar.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fontsource_nunito_sans_600_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/nunito-sans/600.css */ \"./node_modules/@fontsource/nunito-sans/600.css\");\n/* harmony import */ var _fontsource_nunito_sans_600_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_sans_600_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fontsource_nunito_sans_700_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/nunito-sans/700.css */ \"./node_modules/@fontsource/nunito-sans/700.css\");\n/* harmony import */ var _fontsource_nunito_sans_700_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_sans_700_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_nunito_sans_800_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/nunito-sans/800.css */ \"./node_modules/@fontsource/nunito-sans/800.css\");\n/* harmony import */ var _fontsource_nunito_sans_800_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_sans_800_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_typography_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/typography.css */ \"./src/styles/typography.css\");\n/* harmony import */ var _styles_typography_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_typography_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/navbar */ \"./src/components/navbar.tsx\");\n\n\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n        forcedTheme: \"white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_7__.Navbar, {}, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ0E7QUFDQTtBQUNYO0FBQ0k7QUFHVTtBQUNDO0FBRTdDLE1BQU1FLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLGlCQUMvQyw4REFBQ0osc0RBQWE7UUFBQ0ssV0FBVyxFQUFFLE9BQU87OzBCQUNqQyw4REFBQ0osc0RBQU07Ozs7eUJBQUU7MEJBQ1QsOERBQUNFLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7eUJBQUk7Ozs7OztpQkFDZDtBQUNoQjtBQUVGLGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmlsLW5leHRqcy1ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBmb250c291cmNlL251bml0by1zYW5zLzYwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL251bml0by1zYW5zLzcwMC5jc3NcIjtcbmltcG9ydCBcIkBmb250c291cmNlL251bml0by1zYW5zLzgwMC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvdHlwb2dyYXBoeS5jc3NcIjtcblxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IChcbiAgPFRoZW1lUHJvdmlkZXIgZm9yY2VkVGhlbWU9eyd3aGl0ZSd9PlxuICAgIDxOYXZiYXIvPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9UaGVtZVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIk5hdmJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZm9yY2VkVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@fontsource/nunito-sans/600.css":
/*!******************************************************!*\
  !*** ./node_modules/@fontsource/nunito-sans/600.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito-sans/700.css":
/*!******************************************************!*\
  !*** ./node_modules/@fontsource/nunito-sans/700.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito-sans/800.css":
/*!******************************************************!*\
  !*** ./node_modules/@fontsource/nunito-sans/800.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/typography.css":
/*!***********************************!*\
  !*** ./src/styles/typography.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();