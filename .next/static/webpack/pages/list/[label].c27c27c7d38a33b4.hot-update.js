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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.ts\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/templates */ \"./src/templates/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var label = router.query.label;\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch)(), callSearch = ref.callSearch, myRes = ref.myRes, isLoading = ref.isLoading;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        return console.log(myRes, isLoading);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    //   const mapOptions = useMemo(\n    //     () => !isLoading && myRes?.result.map((item: any) => <p key={item['@assetType']}>{item['@assetType']}</p>),\n    //     [myRes]\n    //   );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates__WEBPACK_IMPORTED_MODULE_3__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_2__.Meta, {\n            title: \"GoLedger - Challenge\",\n            description: \"Reposit\\xf3rio para o desafio de front-end do processo seletivo de 1/2022\"\n        }, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"WZgUG5xa+7hT5DOPA4sOXiKNZFQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGlzdC9bbGFiZWxdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW9DO0FBQ0g7QUFDRTtBQUVLO0FBQ0c7O0FBRTNDLElBQU1LLEtBQUssR0FBRyxXQUFNOztJQUNsQixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxLQUFPLEdBQUtHLE1BQU0sQ0FBQ0UsS0FBSyxDQUF0QkQsS0FBSztJQUNiLElBQXlDUCxHQUF1QixHQUF2QkEsaURBQVMsRUFBYyxFQUF4RFMsVUFBVSxHQUF1QlQsR0FBdUIsQ0FBeERTLFVBQVUsRUFBRUMsS0FBSyxHQUFnQlYsR0FBdUIsQ0FBNUNVLEtBQUssRUFBRUMsU0FBUyxHQUFLWCxHQUF1QixDQUFyQ1csU0FBUztJQUVwQ1AsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSSxDQUFDRyxLQUFLLEVBQUUsT0FBTztRQUVuQkUsVUFBVSxDQUFDRixLQUFLLENBQVcsQ0FBQztLQUM3QixFQUFFO1FBQUNBLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFWkgsZ0RBQVMsQ0FBQztlQUFNUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxFQUFFQyxTQUFTLENBQUM7S0FBQSxFQUFFO1FBQUNELEtBQUs7UUFBRUMsU0FBUztLQUFDLENBQUMsQ0FBQztJQUVyRSxnQ0FBZ0M7SUFDaEMsa0hBQWtIO0lBQ2xILGNBQWM7SUFDZCxPQUFPO0lBRUwscUJBQ0UsOERBQUNULDRDQUFJO1FBQ0hZLElBQUksZ0JBQ0YsOERBQUNiLDBDQUFJO1lBQ0hjLEtBQUssRUFBQyxzQkFBc0I7WUFDNUJDLFdBQVcsRUFBQywyRUFBd0U7eUNBQ3BGOzs7OzthQUlDLENBQ1A7Q0FDSDtHQTlCS1gsS0FBSzs7UUFDTUYsa0RBQVM7UUFFaUJILDZDQUFTOzs7QUFIOUNLLEtBQUFBLEtBQUs7QUFnQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGlzdC9bbGFiZWxdLnRzeD9jYmZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlYXJjaCB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIkAvbGF5b3V0c1wiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCJAL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgR2V0U2NoZW1hUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbGFiZWwgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBjYWxsU2VhcmNoLCBteVJlcywgaXNMb2FkaW5nIH0gPSB1c2VTZWFyY2g8QXJyYXk8YW55Pj4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGFiZWwpIHJldHVybjtcblxuICAgIGNhbGxTZWFyY2gobGFiZWwgYXMgc3RyaW5nKTtcbiAgfSwgW2xhYmVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IGNvbnNvbGUubG9nKG15UmVzLCBpc0xvYWRpbmcpLCBbbXlSZXMsIGlzTG9hZGluZ10pO1xuXG4vLyAgIGNvbnN0IG1hcE9wdGlvbnMgPSB1c2VNZW1vKFxuLy8gICAgICgpID0+ICFpc0xvYWRpbmcgJiYgbXlSZXM/LnJlc3VsdC5tYXAoKGl0ZW06IGFueSkgPT4gPHAga2V5PXtpdGVtWydAYXNzZXRUeXBlJ119PntpdGVtWydAYXNzZXRUeXBlJ119PC9wPiksXG4vLyAgICAgW215UmVzXVxuLy8gICApO1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5cbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPVwiR29MZWRnZXIgLSBDaGFsbGVuZ2VcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVwb3NpdMOzcmlvIHBhcmEgbyBkZXNhZmlvIGRlIGZyb250LWVuZCBkbyBwcm9jZXNzbyBzZWxldGl2byBkZSAxLzIwMjJcIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIHsvKiA8ZGl2PnttYXBPcHRpb25zfTwvZGl2PiAqL31cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJ1c2VTZWFyY2giLCJNZXRhIiwiTWFpbiIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkluZGV4Iiwicm91dGVyIiwibGFiZWwiLCJxdWVyeSIsImNhbGxTZWFyY2giLCJteVJlcyIsImlzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/list/[label].tsx\n");

/***/ })

});