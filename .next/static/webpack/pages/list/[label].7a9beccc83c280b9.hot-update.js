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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.ts\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/templates */ \"./src/templates/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var label = router.query.label;\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref.callSearch, myRes = ref.myRes, isLoading = ref.isLoading;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        return !isLoading && myRes.length === 0;\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function() {\n        var _this2 = _this1;\n        return !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: item[\"model\"] || item[\"name\"]\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this2);\n        }));\n    }, [\n        myRes,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates__WEBPACK_IMPORTED_MODULE_4__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n            title: \"GoLedger - Challenge\",\n            description: \"Reposit\\xf3rio para o desafio de front-end do processo seletivo de 1/2022\"\n        }, void 0, false, void 0, void 0),\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: mapOptions\n        }, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n            lineNumber: 40,\n            columnNumber: 21\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n            lineNumber: 40,\n            columnNumber: 47\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"+VWuZKEvw5yUlo/9BucsQQQFjv8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGlzdC9bbGFiZWxdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF1QztBQUNIO0FBQ0g7QUFDRTtBQUVLO0FBQ0c7O0FBRTNDLElBQU1PLEtBQUssR0FBRyxXQUFNOzs7SUFDbEIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQU0sS0FBTyxHQUFLSSxNQUFNLENBQUNFLEtBQUssQ0FBdEJELEtBQUs7SUFDYixJQUF5Q1IsR0FBMEIsR0FBMUJBLGlEQUFTLEVBQWlCLEVBQTNEVSxVQUFVLEdBQXVCVixHQUEwQixDQUEzRFUsVUFBVSxFQUFFQyxLQUFLLEdBQWdCWCxHQUEwQixDQUEvQ1csS0FBSyxFQUFFQyxTQUFTLEdBQUtaLEdBQTBCLENBQXhDWSxTQUFTO0lBRXBDUixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJLENBQUNJLEtBQUssRUFBRSxPQUFPO1FBRW5CRSxVQUFVLENBQUNGLEtBQUssQ0FBVyxDQUFDO0tBQzdCLEVBQUU7UUFBQ0EsS0FBSztLQUFDLENBQUMsQ0FBQztJQUVaSixnREFBUyxDQUFDO2VBQU0sQ0FBQ1EsU0FBUyxJQUFJRCxLQUFLLENBQUNFLE1BQU0sS0FBSyxDQUFDO0tBQUEsRUFBRztRQUFDRixLQUFLO1FBQUVDLFNBQVM7S0FBQyxDQUFDLENBQUM7SUFFdkUsSUFBTUUsVUFBVSxHQUFHVCw4Q0FBTyxDQUN4Qjs7UUFDRSxRQUFDTyxTQUFTLEtBQ1ZELEtBQUssYUFBTEEsS0FBSyxXQUFLLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsS0FBSyxDQUFFSSxHQUFHLENBQUMsU0FBQ0MsSUFBaUI7aUNBQzNCLDhEQUFDQyxHQUFDOzBCQUFxQkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJQSxJQUFJLENBQUMsTUFBTSxDQUFDO2VBQTVDQSxJQUFJLENBQUMsTUFBTSxDQUFDOzs7O3NCQUFxQztTQUMxRCxDQUFDO0tBQUEsRUFDSjtRQUFDTCxLQUFLO1FBQUVDLFNBQVM7S0FBQyxDQUNuQjtJQUVELHFCQUNFLDhEQUFDViw0Q0FBSTtRQUNIZ0IsSUFBSSxnQkFDRiw4REFBQ2pCLDBDQUFJO1lBQ0hrQixLQUFLLEVBQUMsc0JBQXNCO1lBQzVCQyxXQUFXLEVBQUMsMkVBQXdFO3lDQUNwRjtrQkFHSCxDQUFDUixTQUFTLGlCQUFHLDhEQUFDUyxLQUFHO3NCQUFFUCxVQUFVOzs7OztpQkFBTyxpQkFBRyw4REFBQ2YsZ0RBQU87Ozs7aUJBQUc7Ozs7O2FBQzlDLENBQ1A7Q0FDSDtHQWxDS08sS0FBSzs7UUFDTUgsa0RBQVM7UUFFaUJILDZDQUFTOzs7QUFIOUNNLEtBQUFBLEtBQUs7QUFvQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGlzdC9bbGFiZWxdLnRzeD9jYmZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VTZWFyY2ggfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCJAL2xheW91dHNcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiQC90ZW1wbGF0ZXNcIjtcbmltcG9ydCB7IFNlYXJjaFByb3BzIH0gZnJvbSBcIkAvdHlwaW5nL2FwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxhYmVsIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHsgY2FsbFNlYXJjaCwgbXlSZXMsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoPFNlYXJjaFByb3BzW10+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxhYmVsKSByZXR1cm47XG5cbiAgICBjYWxsU2VhcmNoKGxhYmVsIGFzIHN0cmluZyk7XG4gIH0sIFtsYWJlbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiAhaXNMb2FkaW5nICYmIG15UmVzLmxlbmd0aCA9PT0gMCAsIFtteVJlcywgaXNMb2FkaW5nXSk7XG5cbiAgY29uc3QgbWFwT3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgICFpc0xvYWRpbmcgJiZcbiAgICAgIG15UmVzPy5tYXAoKGl0ZW06IFNlYXJjaFByb3BzKSA9PiAoXG4gICAgICAgIDxwIGtleT17aXRlbVtcIkBrZXlcIl19PntpdGVtW1wibW9kZWxcIl0gfHwgaXRlbVtcIm5hbWVcIl19PC9wPlxuICAgICAgKSksXG4gICAgW215UmVzLCBpc0xvYWRpbmddXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJHb0xlZGdlciAtIENoYWxsZW5nZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvc2l0w7NyaW8gcGFyYSBvIGRlc2FmaW8gZGUgZnJvbnQtZW5kIGRvIHByb2Nlc3NvIHNlbGV0aXZvIGRlIDEvMjAyMlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgeyFpc0xvYWRpbmcgPyA8ZGl2PnttYXBPcHRpb25zfTwvZGl2PiA6IDxMb2FkaW5nIC8+fVxuICAgIDwvTWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJ1c2VTZWFyY2giLCJNZXRhIiwiTWFpbiIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJJbmRleCIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJsZW5ndGgiLCJtYXBPcHRpb25zIiwibWFwIiwiaXRlbSIsInAiLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/list/[label].tsx\n");

/***/ })

});