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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.ts\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/templates */ \"./src/templates/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useFetch)({\n        url: \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/getSchema\"\n    }), callFetch = ref.callFetch, myRes = ref.myRes, isLoading = ref.isLoading;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        callFetch();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        return console.log(myRes);\n    }, [\n        myRes\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var _this2 = _this1;\n        return !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-full bg-[#020202]/10 p-3 rounded-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[#4a5568]\",\n                    children: item.tag\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, _this2)\n            }, item.tag, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this2);\n        }));\n    }, [\n        myRes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates__WEBPACK_IMPORTED_MODULE_3__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_2__.Meta, {\n            title: \"GoLedger - Challenge\",\n            description: \"Reposit\\xf3rio para o desafio de front-end do processo seletivo de 1/2022\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[1134px] mx-auto flex flex-col justify-center px-3 py-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-[#1a202c]\",\n                    children: \"What are you Looking for?\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-8 grid gap-3 lg:grid-cols-4 grid-cols-2\",\n                    children: mapOptions\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"ZhMa9sP3vbMRh9g3BaTU9aGhylM=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useFetch\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0Y7QUFDRTtBQUVROztBQUUzQyxJQUFNSyxLQUFLLEdBQUcsV0FBTTs7O0lBQ2xCLElBQXdDTCxHQUV0QyxHQUZzQ0EsZ0RBQVEsQ0FBbUI7UUFDakVNLEdBQUcsRUFBRSx1RUFBdUU7S0FDN0UsQ0FBQyxFQUZNQyxTQUFTLEdBQXVCUCxHQUV0QyxDQUZNTyxTQUFTLEVBQUVDLEtBQUssR0FBZ0JSLEdBRXRDLENBRmlCUSxLQUFLLEVBQUVDLFNBQVMsR0FBS1QsR0FFdEMsQ0FGd0JTLFNBQVM7SUFJbkNOLGdEQUFTLENBQUMsV0FBTTtRQUNkSSxTQUFTLEVBQUUsQ0FBQztLQUNiLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUEosZ0RBQVMsQ0FBQztlQUFNTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0tBQUEsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRTdDLElBQU1JLFVBQVUsR0FBR1IsOENBQU8sQ0FDeEI7O1FBQ0UsUUFBQ0ssU0FBUyxLQUNWRCxLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRUssR0FBRyxDQUFDLFNBQUNDLElBQW9CO2lDQUM5Qiw4REFBQ0MsUUFBTTtnQkFFTEMsU0FBUyxFQUFDLHdDQUF5QzswQkFFbkQsNEVBQUNDLEdBQUM7b0JBQUNELFNBQVMsRUFBQyxnQkFBZ0I7OEJBQUVGLElBQUksQ0FBQ0ksR0FBRzs7Ozs7MEJBQUs7ZUFIdkNKLElBQUksQ0FBQ0ksR0FBRzs7OztzQkFJTjtTQUNWLENBQUM7S0FBQSxFQUNKO1FBQUNWLEtBQUs7S0FBQyxDQUNSO0lBRUQscUJBQ0UsOERBQUNOLDRDQUFJO1FBQ0hpQixJQUFJLGdCQUNGLDhEQUFDbEIsMENBQUk7WUFDSG1CLEtBQUssRUFBQyxzQkFBc0I7WUFDNUJDLFdBQVcsRUFBQywyRUFBd0U7eUNBQ3BGO2tCQUdKLDRFQUFDQyxLQUFHO1lBQUNOLFNBQVMsRUFBQyw0REFBNEQ7OzhCQUN6RSw4REFBQ08sSUFBRTtvQkFBQ1AsU0FBUyxFQUFDLGdCQUFnQjs4QkFBQywyQkFBeUI7Ozs7O3lCQUFLOzhCQUM3RCw4REFBQ00sS0FBRztvQkFBQ04sU0FBUyxFQUFDLDRDQUE0Qzs4QkFDeERKLFVBQVU7Ozs7O3lCQUNQOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0QsQ0FDUDtDQUNIO0dBMUNLUCxLQUFLOztRQUMrQkwsNENBQVE7OztBQUQ1Q0ssS0FBQUEsS0FBSztBQTRDWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIkAvbGF5b3V0c1wiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCJAL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgR2V0U2NoZW1hUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FsbEZldGNoLCBteVJlcywgaXNMb2FkaW5nIH0gPSB1c2VGZXRjaDxHZXRTY2hlbWFQcm9wc1tdPih7XG4gICAgdXJsOiBcImh0dHA6Ly9lYzItMTAwLTI1LTEzNi0xMjguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20vYXBpL3F1ZXJ5L2dldFNjaGVtYVwiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhbGxGZXRjaCgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKG15UmVzKSwgW215UmVzXSk7XG5cbiAgY29uc3QgbWFwT3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgICFpc0xvYWRpbmcgJiZcbiAgICAgIG15UmVzPy5tYXAoKGl0ZW06IEdldFNjaGVtYVByb3BzKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2l0ZW0udGFnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzAyMDIwMl0vMTAgcC0zIHJvdW5kZWQtbGcgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNGE1NTY4XVwiPntpdGVtLnRhZ308L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSksXG4gICAgW215UmVzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5cbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPVwiR29MZWRnZXIgLSBDaGFsbGVuZ2VcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVwb3NpdMOzcmlvIHBhcmEgbyBkZXNhZmlvIGRlIGZyb250LWVuZCBkbyBwcm9jZXNzbyBzZWxldGl2byBkZSAxLzIwMjJcIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTEzNHB4XSBteC1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtMyBweS0xMlwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1bIzFhMjAyY11cIj5XaGF0IGFyZSB5b3UgTG9va2luZyBmb3I/PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGdyaWQgZ2FwLTMgbGc6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJ1c2VGZXRjaCIsIk1ldGEiLCJNYWluIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIkluZGV4IiwidXJsIiwiY2FsbEZldGNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwibWFwT3B0aW9ucyIsIm1hcCIsIml0ZW0iLCJidXR0b24iLCJjbGFzc05hbWUiLCJwIiwidGFnIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});