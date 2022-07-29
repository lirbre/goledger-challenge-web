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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _context_modal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/modal-context */ \"./src/context/modal-context.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.ts\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/templates */ \"./src/templates/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var label = router.query.label;\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSearch)(), callSearch = ref.callSearch, myRes = ref.myRes, isLoading = ref.isLoading;\n    var setIsOpen = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useModal)().setIsOpen;\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function() {\n        var _this2 = _this1;\n        return !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this2);\n        }));\n    }, [\n        myRes,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_modal_context__WEBPACK_IMPORTED_MODULE_2__.ModalProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates__WEBPACK_IMPORTED_MODULE_5__.Main, {\n            meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_4__.Meta, {\n                title: \"GoLedger - Challenge\",\n                description: \"Reposit\\xf3rio para o desafio de front-end do processo seletivo de 1/2022\"\n            }, void 0, false, void 0, void 0),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n                    children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            animation: \"fadeIn .7s\"\n                        },\n                        className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full\",\n                        children: [\n                            mapOptions,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setIsOpen(true);\n                                },\n                                className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    children: \"Add a new item\"\n                                }, void 0, false, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {}, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/pages/list/[label].tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"NyMidxfjusRpy9tvp+JumDGeDHw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useModal\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC9bbGFiZWxdLnRzeD9jYmZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IE1vZGFsUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L21vZGFsLWNvbnRleHRcIjtcbmltcG9ydCB7IHVzZU1vZGFsLCB1c2VTZWFyY2ggfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCJAL2xheW91dHNcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiQC90ZW1wbGF0ZXNcIjtcbmltcG9ydCB7IFNlYXJjaFByb3BzIH0gZnJvbSBcIkAvdHlwaW5nL2FwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxhYmVsIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHsgY2FsbFNlYXJjaCwgbXlSZXMsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoPFNlYXJjaFByb3BzW10+KCk7XG4gIGNvbnN0IHsgc2V0SXNPcGVuIH0gPSB1c2VNb2RhbCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYWJlbCkgcmV0dXJuO1xuXG4gICAgY2FsbFNlYXJjaChsYWJlbCBhcyBzdHJpbmcpO1xuICB9LCBbbGFiZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbXlSZXMpIHJldHVybjtcbiAgICAhaXNMb2FkaW5nICYmIG15UmVzPy5sZW5ndGggPT09IDAgJiYgcm91dGVyLnJlcGxhY2UoXCIvNDA0XCIpO1xuICAgIGNvbnNvbGUubG9nKG15UmVzKTtcbiAgfSwgW215UmVzLCBpc0xvYWRpbmddKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgbXlSZXM/Lm1hcCgoaXRlbTogU2VhcmNoUHJvcHMpID0+IChcbiAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbVtcIkBrZXlcIl19IGl0ZW09e2l0ZW19IC8+XG4gICAgICApKSxcbiAgICBbbXlSZXMsIGlzTG9hZGluZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFByb3ZpZGVyPlxuICAgICAgPE1haW5cbiAgICAgICAgbWV0YT17XG4gICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgIHRpdGxlPVwiR29MZWRnZXIgLSBDaGFsbGVuZ2VcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvc2l0w7NyaW8gcGFyYSBvIGRlc2FmaW8gZGUgZnJvbnQtZW5kIGRvIHByb2Nlc3NvIHNlbGV0aXZvIGRlIDEvMjAyMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWF4LXctWzExMzRweF0gbXgtYXV0b1wiPlxuICAgICAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb246IFwiZmFkZUluIC43c1wiIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgdy1mdWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21hcE9wdGlvbnN9XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNzhweF0gdy1mdWxsIHB5LTQgcHgtMyBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c21hbGw+QWRkIGEgbmV3IGl0ZW08L3NtYWxsPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgLz5cbiAgICAgIDwvTWFpbj5cbiAgICA8L01vZGFsUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiTGlzdEl0ZW0iLCJNb2RhbFByb3ZpZGVyIiwidXNlTW9kYWwiLCJ1c2VTZWFyY2giLCJNZXRhIiwiTWFpbiIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJJbmRleCIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc09wZW4iLCJsZW5ndGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIm1hcE9wdGlvbnMiLCJtYXAiLCJpdGVtIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbWFsbCIsIk1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/list/[label].tsx\n");

/***/ })

});