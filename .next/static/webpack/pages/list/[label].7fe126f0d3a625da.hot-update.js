"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list/[label]",{

/***/ "./src/pages/list/[label].tsx":
/*!************************************!*\
  !*** ./src/pages/list/[label].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.ts\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/templates */ \"./src/templates/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var label = router.query.label;\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch)(), callSearch = ref.callSearch, myRes = ref.myRes, isLoading = ref.isLoading;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        callSearch(label);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        return console.log(myRes);\n    }, [\n        myRes\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function() {\n        var _this2 = _this1;\n        return !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: item.tag\n            }, item.tag, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                lineNumber: 22,\n                columnNumber: 44\n            }, _this2);\n        })) || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }, [\n        myRes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates__WEBPACK_IMPORTED_MODULE_3__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_2__.Meta, {\n            title: \"GoLedger - Challenge\",\n            description: \"Reposit\\xf3rio para o desafio de front-end do processo seletivo de 1/2022\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: mapOptions\n        }, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"+VWuZKEvw5yUlo/9BucsQQQFjv8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGlzdC9bbGFiZWxdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW9DO0FBQ0g7QUFDRTtBQUVLO0FBQ0c7O0FBRTNDLElBQU1NLEtBQUssR0FBRyxXQUFNOzs7SUFDbEIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQU0sS0FBTyxHQUFLSSxNQUFNLENBQUNFLEtBQUssQ0FBdEJELEtBQUs7SUFDYixJQUF5Q1IsR0FBNkIsR0FBN0JBLGlEQUFTLEVBQW9CLEVBQTlEVSxVQUFVLEdBQXVCVixHQUE2QixDQUE5RFUsVUFBVSxFQUFFQyxLQUFLLEdBQWdCWCxHQUE2QixDQUFsRFcsS0FBSyxFQUFFQyxTQUFTLEdBQUtaLEdBQTZCLENBQTNDWSxTQUFTO0lBRXBDUixnREFBUyxDQUFDLFdBQU07UUFDZE0sVUFBVSxDQUFDRixLQUFLLENBQVcsQ0FBQztLQUM3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVBKLGdEQUFTLENBQUM7ZUFBTVMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQztLQUFBLEVBQUU7UUFBQ0EsS0FBSztLQUFDLENBQUMsQ0FBQztJQUU3QyxJQUFNSSxVQUFVLEdBQUdWLDhDQUFPLENBQ3hCOztRQUNFLFFBQUNPLFNBQVMsS0FDVkQsS0FBSyxhQUFMQSxLQUFLLFdBQUssR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxLQUFLLENBQUVLLEdBQUcsQ0FBQyxTQUFDQyxJQUFvQjtpQ0FBSyw4REFBQ0MsR0FBQzswQkFBaUJELElBQUksQ0FBQ0UsR0FBRztlQUFuQkYsSUFBSSxDQUFDRSxHQUFHOzs7O3NCQUFnQjtTQUFBLENBQUMsbUJBQUksNklBQUs7S0FBQSxFQUNqRjtRQUFDUixLQUFLO0tBQUMsQ0FDUjtJQUVELHFCQUNFLDhEQUFDVCw0Q0FBSTtRQUNIa0IsSUFBSSxnQkFDRiw4REFBQ25CLDBDQUFJO1lBQ0hvQixLQUFLLEVBQUMsc0JBQXNCO1lBQzVCQyxXQUFXLEVBQUMsMkVBQXdFO3lDQUNwRjtrQkFHSiw0RUFBQ0MsS0FBRztzQkFBRVIsVUFBVTs7Ozs7aUJBQU87Ozs7O2FBQ2xCLENBQ1A7Q0FDSDtHQTlCS1QsS0FBSzs7UUFDTUgsa0RBQVM7UUFFaUJILDZDQUFTOzs7QUFIOUNNLEtBQUFBLEtBQUs7QUFnQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGlzdC9bbGFiZWxdLnRzeD9jYmZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlYXJjaCB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIkAvbGF5b3V0c1wiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCJAL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgR2V0U2NoZW1hUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbGFiZWwgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBjYWxsU2VhcmNoLCBteVJlcywgaXNMb2FkaW5nIH0gPSB1c2VTZWFyY2g8R2V0U2NoZW1hUHJvcHNbXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhbGxTZWFyY2gobGFiZWwgYXMgc3RyaW5nKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZyhteVJlcyksIFtteVJlc10pO1xuXG4gIGNvbnN0IG1hcE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICAhaXNMb2FkaW5nICYmXG4gICAgICBteVJlcz8ubWFwKChpdGVtOiBHZXRTY2hlbWFQcm9wcykgPT4gPHAga2V5PXtpdGVtLnRhZ30+e2l0ZW0udGFnfTwvcD4pIHx8IDw+PC8+LFxuICAgIFtteVJlc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxNYWluXG4gICAgICBtZXRhPXtcbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT1cIkdvTGVkZ2VyIC0gQ2hhbGxlbmdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9zaXTDs3JpbyBwYXJhIG8gZGVzYWZpbyBkZSBmcm9udC1lbmQgZG8gcHJvY2Vzc28gc2VsZXRpdm8gZGUgMS8yMDIyXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2PnttYXBPcHRpb25zfTwvZGl2PlxuICAgIDwvTWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVNlYXJjaCIsIk1ldGEiLCJNYWluIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIkluZGV4Iiwicm91dGVyIiwibGFiZWwiLCJxdWVyeSIsImNhbGxTZWFyY2giLCJteVJlcyIsImlzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJtYXBPcHRpb25zIiwibWFwIiwiaXRlbSIsInAiLCJ0YWciLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/list/[label].tsx\n");

/***/ })

});