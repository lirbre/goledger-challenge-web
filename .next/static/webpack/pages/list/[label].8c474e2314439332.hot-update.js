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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref.callSearch, myRes = ref.myRes, isLoading = ref.isLoading;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref1.setIsOpen, setTitle = ref1.setTitle;\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var _this2 = _this1;\n        return !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this2);\n        }));\n    }, [\n        myRes,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full\",\n            children: [\n                mapOptions,\n                mapOptions,\n                mapOptions,\n                mapOptions,\n                mapOptions,\n                mapOptions,\n                mapOptions,\n                mapOptions,\n                mapOptions,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: openCreate,\n                    className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: \"Add a new item\"\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"pXa/M1LpNWe8lRFeR94cgeirWpo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC50c3g/ODA0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCwgdXNlU2VhcmNoIH0gZnJvbSBcIkAvaG9va3NcIjtcbmltcG9ydCB7IFNlYXJjaFByb3BzIH0gZnJvbSBcIkAvdHlwaW5nL2FwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxhYmVsIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHsgY2FsbFNlYXJjaCwgbXlSZXMsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoPFNlYXJjaFByb3BzW10+KCk7XG4gIGNvbnN0IHsgc2V0SXNPcGVuLCBzZXRUaXRsZSB9ID0gdXNlTW9kYWwoKTtcbiBcbiAgY29uc3Qgb3BlbkNyZWF0ZSA9ICgpID0+IHtcbiAgICAgIHNldElzT3Blbih0cnVlKVxuICAgICAgc2V0VGl0bGUoYENyZWF0ZSBhIG5ldyAke2xhYmVsfSBpdGVtYClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYWJlbCkgcmV0dXJuO1xuXG4gICAgY2FsbFNlYXJjaChsYWJlbCBhcyBzdHJpbmcpO1xuICB9LCBbbGFiZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbXlSZXMpIHJldHVybjtcbiAgICAhaXNMb2FkaW5nICYmIG15UmVzPy5sZW5ndGggPT09IDAgJiYgcm91dGVyLnJlcGxhY2UoXCIvNDA0XCIpO1xuICAgIGNvbnNvbGUubG9nKG15UmVzKTtcbiAgfSwgW215UmVzLCBpc0xvYWRpbmddKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgbXlSZXM/Lm1hcCgoaXRlbTogU2VhcmNoUHJvcHMpID0+IChcbiAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbVtcIkBrZXlcIl19IGl0ZW09e2l0ZW19IC8+XG4gICAgICApKSxcbiAgICBbbXlSZXMsIGlzTG9hZGluZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYXgtdy1bMTEzNHB4XSBteC1hdXRvXCI+XG4gICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbjogXCJmYWRlSW4gLjdzXCIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHctZnVsbFwiXG4gICAgICAgID5cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvcGVuQ3JlYXRlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNzhweF0gdy1mdWxsIHB5LTQgcHgtMyBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNtYWxsPkFkZCBhIG5ldyBpdGVtPC9zbWFsbD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZyIsIkxpc3RJdGVtIiwidXNlTW9kYWwiLCJ1c2VTZWFyY2giLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiTGlzdCIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc09wZW4iLCJzZXRUaXRsZSIsIm9wZW5DcmVhdGUiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIm1hcE9wdGlvbnMiLCJtYXAiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhbmltYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic21hbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});