"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.ts\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/templates */ \"./src/templates/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useFetch)({\n        url: \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/getSchema\"\n    }), callFetch = ref.callFetch, myRes = ref.myRes, isLoading = ref.isLoading;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        callFetch();\n    }, []);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var _this2 = _this1;\n        myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Item\"\n            }, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 25\n            }, _this2);\n        });\n    }, [\n        myRes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates__WEBPACK_IMPORTED_MODULE_3__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_2__.Meta, {\n            title: \"GoLedger - Challenge\",\n            description: \"Reposit\\xf3rio para o desafio de front-end do processo seletivo de 1/2022\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"apGCM3fibJfEZS5rc62lvtcC0EA=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useFetch\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0Y7QUFDRTtBQUNROztBQUUzQyxJQUFNSyxLQUFLLEdBQUcsV0FBTTs7O0lBQ2xCLElBQXdDTCxHQUV0QyxHQUZzQ0EsZ0RBQVEsQ0FBTTtRQUNwRE0sR0FBRyxFQUFFLHVFQUF1RTtLQUM3RSxDQUFDLEVBRk1DLFNBQVMsR0FBdUJQLEdBRXRDLENBRk1PLFNBQVMsRUFBRUMsS0FBSyxHQUFnQlIsR0FFdEMsQ0FGaUJRLEtBQUssRUFBRUMsU0FBUyxHQUFLVCxHQUV0QyxDQUZ3QlMsU0FBUztJQUluQ04sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RJLFNBQVMsRUFBRSxDQUFDO0tBQ2IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1HLFVBQVUsR0FBR04sOENBQU8sQ0FBQyxXQUFNOztRQUMvQkksS0FBSyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsSUFBSTtpQ0FBSyw4REFBQ0MsR0FBQzswQkFBQyxNQUFJOzs7OztzQkFBSTtTQUFBLENBQUM7S0FDakMsRUFBRTtRQUFDTCxLQUFLO0tBQUMsQ0FBQztJQUVYLHFCQUNFLDhEQUFDTiw0Q0FBSTtRQUNIWSxJQUFJLGdCQUNGLDhEQUFDYiwwQ0FBSTtZQUNIYyxLQUFLLEVBQUMsc0JBQXNCO1lBQzVCQyxXQUFXLEVBQUMsMkVBQXdFO3lDQUNwRjtrQkFHSiwySkFBSzs7Ozs7YUFDQSxDQUNQO0NBQ0g7R0F6QktYLEtBQUs7O1FBQytCTCw0Q0FBUTs7O0FBRDVDSyxLQUFBQSxLQUFLO0FBMkJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZldGNoIH0gZnJvbSBcIkAvaG9va3NcIjtcbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiQC9sYXlvdXRzXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIkAvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FsbEZldGNoLCBteVJlcywgaXNMb2FkaW5nIH0gPSB1c2VGZXRjaDxhbnk+KHtcbiAgICB1cmw6IFwiaHR0cDovL2VjMi0xMDAtMjUtMTM2LTEyOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbS9hcGkvcXVlcnkvZ2V0U2NoZW1hXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FsbEZldGNoKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbXlSZXMubWFwKChpdGVtKSA9PiA8cD5JdGVtPC9wPilcbiAgfSwgW215UmVzXSlcblxuICByZXR1cm4gKFxuICAgIDxNYWluXG4gICAgICBtZXRhPXtcbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT1cIkdvTGVkZ2VyIC0gQ2hhbGxlbmdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9zaXTDs3JpbyBwYXJhIG8gZGVzYWZpbyBkZSBmcm9udC1lbmQgZG8gcHJvY2Vzc28gc2VsZXRpdm8gZGUgMS8yMDIyXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8PjwvPlxuICAgIDwvTWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZUZldGNoIiwiTWV0YSIsIk1haW4iLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiSW5kZXgiLCJ1cmwiLCJjYWxsRmV0Y2giLCJteVJlcyIsImlzTG9hZGluZyIsIm1hcE9wdGlvbnMiLCJtYXAiLCJpdGVtIiwicCIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});