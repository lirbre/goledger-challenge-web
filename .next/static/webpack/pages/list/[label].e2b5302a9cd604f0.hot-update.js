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

/***/ "./src/components/list.tsx":
/*!*********************************!*\
  !*** ./src/components/list.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref.callSearch, myRes = ref.myRes, isLoading = ref.isLoading;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref1.setIsOpen, setTitle = ref1.setTitle;\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var _this2 = _this1;\n        return !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this2);\n        }));\n    }, [\n        myRes,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    animation: \"fadeIn .7s\"\n                },\n                className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: openCreate,\n                        className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: \"Add a new item\"\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this),\n                    mapOptions\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 58,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"pXa/M1LpNWe8lRFeR94cgeirWpo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3QudHN4PzgwNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlTW9kYWwsIHVzZVNlYXJjaCB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBTZWFyY2hQcm9wcyB9IGZyb20gXCJAL3R5cGluZy9hcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBsYWJlbCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCB7IGNhbGxTZWFyY2gsIG15UmVzLCBpc0xvYWRpbmcgfSA9IHVzZVNlYXJjaDxTZWFyY2hQcm9wc1tdPigpO1xuICBjb25zdCB7IHNldElzT3Blbiwgc2V0VGl0bGUgfSA9IHVzZU1vZGFsKCk7XG5cbiAgY29uc3Qgb3BlbkNyZWF0ZSA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgc2V0VGl0bGUoYENyZWF0ZSBhIG5ldyAke2xhYmVsfSBpdGVtYCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxhYmVsKSByZXR1cm47XG5cbiAgICBjYWxsU2VhcmNoKGxhYmVsIGFzIHN0cmluZyk7XG4gIH0sIFtsYWJlbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFteVJlcykgcmV0dXJuO1xuICAgICFpc0xvYWRpbmcgJiYgbXlSZXM/Lmxlbmd0aCA9PT0gMCAmJiByb3V0ZXIucmVwbGFjZShcIi80MDRcIik7XG4gICAgY29uc29sZS5sb2cobXlSZXMpO1xuICB9LCBbbXlSZXMsIGlzTG9hZGluZ10pO1xuXG4gIGNvbnN0IG1hcE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICAhaXNMb2FkaW5nICYmXG4gICAgICBteVJlcz8ubWFwKChpdGVtOiBTZWFyY2hQcm9wcykgPT4gKFxuICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpdGVtW1wiQGtleVwiXX0gaXRlbT17aXRlbX0gLz5cbiAgICAgICkpLFxuICAgIFtteVJlcywgaXNMb2FkaW5nXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LVsxMTM0cHhdIG14LWF1dG9cIj5cbiAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbjogXCJmYWRlSW4gLjdzXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgdy1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5DcmVhdGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzc4cHhdIHctZnVsbCBweS00IHB4LTMgYm9yZGVyLVsjZTJlOGYwXSBib3JkZXIgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c21hbGw+QWRkIGEgbmV3IGl0ZW08L3NtYWxsPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZyIsIkxpc3RJdGVtIiwidXNlTW9kYWwiLCJ1c2VTZWFyY2giLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiTGlzdCIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc09wZW4iLCJzZXRUaXRsZSIsIm9wZW5DcmVhdGUiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIm1hcE9wdGlvbnMiLCJtYXAiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhbmltYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic21hbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});