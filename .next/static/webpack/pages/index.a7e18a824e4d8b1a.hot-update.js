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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.ts\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/templates */ \"./src/templates/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useFetch)({\n        url: \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/getSchema\"\n    }), callFetch = ref.callFetch, myRes = ref.myRes, isLoading = ref.isLoading;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        callFetch();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        return console.log(myRes);\n    }, [\n        myRes\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var _this2 = _this1;\n        return !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-full bg-[#020202]/5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[#4a5568]\",\n                    children: item.tag\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 101\n                }, _this2)\n            }, item.tag, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 44\n            }, _this2);\n        }));\n    }, [\n        myRes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates__WEBPACK_IMPORTED_MODULE_3__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_2__.Meta, {\n            title: \"GoLedger - Challenge\",\n            description: \"Reposit\\xf3rio para o desafio de front-end do processo seletivo de 1/2022\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[1134px] mx-auto flex flex-col justify-center px-3 py-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"text-[#1a202c]\",\n                    children: \"What are you Looking for?\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-8 grid gap-3 lg:grid-cols-4 grid-cols-2\",\n                    children: mapOptions\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"ZhMa9sP3vbMRh9g3BaTU9aGhylM=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useFetch\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ0Y7QUFDRTtBQUVROztBQUUzQyxJQUFNSyxLQUFLLEdBQUcsV0FBTTs7O0lBQ2xCLElBQXdDTCxHQUV0QyxHQUZzQ0EsZ0RBQVEsQ0FBbUI7UUFDakVNLEdBQUcsRUFBRSx1RUFBdUU7S0FDN0UsQ0FBQyxFQUZNQyxTQUFTLEdBQXVCUCxHQUV0QyxDQUZNTyxTQUFTLEVBQUVDLEtBQUssR0FBZ0JSLEdBRXRDLENBRmlCUSxLQUFLLEVBQUVDLFNBQVMsR0FBS1QsR0FFdEMsQ0FGd0JTLFNBQVM7SUFJbkNOLGdEQUFTLENBQUMsV0FBTTtRQUNkSSxTQUFTLEVBQUUsQ0FBQztLQUNiLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUEosZ0RBQVMsQ0FBQztlQUFNTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0tBQUEsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRTdDLElBQU1JLFVBQVUsR0FBR1IsOENBQU8sQ0FDeEI7O1FBQ0UsUUFBQ0ssU0FBUyxLQUNWRCxLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRUssR0FBRyxDQUFDLFNBQUNDLElBQW9CO2lDQUFLLDhEQUFDQyxRQUFNO2dCQUFnQkMsU0FBUyxFQUFDLHVCQUF1QjswQkFBQyw0RUFBQ0MsR0FBQztvQkFBQ0QsU0FBUyxFQUFDLGdCQUFnQjs4QkFBRUYsSUFBSSxDQUFDSSxHQUFHOzs7OzswQkFBSztlQUF4RkosSUFBSSxDQUFDSSxHQUFHOzs7O3NCQUF5RjtTQUFBLENBQUM7S0FBQSxFQUN0SjtRQUFDVixLQUFLO0tBQUMsQ0FDUjtJQUVELHFCQUNFLDhEQUFDTiw0Q0FBSTtRQUNIaUIsSUFBSSxnQkFDRiw4REFBQ2xCLDBDQUFJO1lBQ0htQixLQUFLLEVBQUMsc0JBQXNCO1lBQzVCQyxXQUFXLEVBQUMsMkVBQXdFO3lDQUNwRjtrQkFHSiw0RUFBQ0MsS0FBRztZQUFDTixTQUFTLEVBQUMsNERBQTREOzs4QkFDekUsOERBQUNPLElBQUU7b0JBQUNQLFNBQVMsRUFBQyxnQkFBZ0I7OEJBQUMsMkJBQXlCOzs7Ozt5QkFBSzs4QkFDN0QsOERBQUNNLEtBQUc7b0JBQUNOLFNBQVMsRUFBQyw0Q0FBNEM7OEJBQUVKLFVBQVU7Ozs7O3lCQUFPOzs7Ozs7aUJBQzFFOzs7OzthQUNELENBQ1A7Q0FDSDtHQWpDS1AsS0FBSzs7UUFDK0JMLDRDQUFROzs7QUFENUNLLEtBQUFBLEtBQUs7QUFtQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCJAL2xheW91dHNcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiQC90ZW1wbGF0ZXNcIjtcbmltcG9ydCB7IEdldFNjaGVtYVByb3BzIH0gZnJvbSBcIkAvdHlwaW5nL2FwaVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCB7IGNhbGxGZXRjaCwgbXlSZXMsIGlzTG9hZGluZyB9ID0gdXNlRmV0Y2g8R2V0U2NoZW1hUHJvcHNbXT4oe1xuICAgIHVybDogXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9xdWVyeS9nZXRTY2hlbWFcIixcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYWxsRmV0Y2goKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBjb25zb2xlLmxvZyhteVJlcyksIFtteVJlc10pO1xuXG4gIGNvbnN0IG1hcE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICAhaXNMb2FkaW5nICYmXG4gICAgICBteVJlcz8ubWFwKChpdGVtOiBHZXRTY2hlbWFQcm9wcykgPT4gPGJ1dHRvbiBrZXk9e2l0ZW0udGFnfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMwMjAyMDJdLzVcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNGE1NTY4XVwiPntpdGVtLnRhZ308L3A+PC9idXR0b24+KSxcbiAgICBbbXlSZXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJHb0xlZGdlciAtIENoYWxsZW5nZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvc2l0w7NyaW8gcGFyYSBvIGRlc2FmaW8gZGUgZnJvbnQtZW5kIGRvIHByb2Nlc3NvIHNlbGV0aXZvIGRlIDEvMjAyMlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxMTM0cHhdIG14LWF1dG8gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC0zIHB5LTEyXCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LVsjMWEyMDJjXVwiPldoYXQgYXJlIHlvdSBMb29raW5nIGZvcj88L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZ3JpZCBnYXAtMyBsZzpncmlkLWNvbHMtNCBncmlkLWNvbHMtMlwiPnttYXBPcHRpb25zfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlRmV0Y2giLCJNZXRhIiwiTWFpbiIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJJbmRleCIsInVybCIsImNhbGxGZXRjaCIsIm15UmVzIiwiaXNMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIm1hcE9wdGlvbnMiLCJtYXAiLCJpdGVtIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwicCIsInRhZyIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGl2IiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});