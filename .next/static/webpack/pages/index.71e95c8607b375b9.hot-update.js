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

/***/ "./src/components/_ModalBody/delete.tsx":
/*!**********************************************!*\
  !*** ./src/components/_ModalBody/delete.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeleteModal\": function() { return /* binding */ DeleteModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar DeleteModal = function(param) {\n    var title = param.title, handleClick = param.handleClick, buttonName = param.buttonName;\n    _s();\n    var close = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)().close;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: title && title\n            }, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/delete.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return handleClick();\n                        },\n                        className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                        children: [\n                            buttonName,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/delete.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return close();\n                        },\n                        className: \"h-[78px] bg-[F37878] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/delete.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/delete.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/delete.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(DeleteModal, \"i34XfooBCHbV1Uw2gblynO0lPZM=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useModal\n    ];\n});\n_c = DeleteModal;\nvar _c;\n$RefreshReg$(_c, \"DeleteModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9fTW9kYWxCb2R5L2RlbGV0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFtQzs7QUFRNUIsSUFBTUMsV0FBVyxHQUFHLGdCQUEwRDtRQUF2REMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxVQUFVLFNBQVZBLFVBQVU7O0lBQzFELElBQU0sS0FBTyxHQUFLSixnREFBUSxFQUFFLENBQXBCSyxLQUFLO0lBQ2IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7MEJBQ3RDLDhEQUFDQyxPQUFLOzBCQUFFTixLQUFLLElBQUlBLEtBQUs7Ozs7O3FCQUFTOzBCQUMvQiw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7a0NBQ2hDLDhEQUFDRSxRQUFNO3dCQUNMQyxPQUFPLEVBQUU7bUNBQU1QLFdBQVcsRUFBRTt5QkFBQTt3QkFDNUJJLFNBQVMsRUFBQyxzSkFBc0o7OzRCQUUvSkgsVUFBVTs0QkFBQyxHQUNkOzs7Ozs7NkJBQVM7a0NBQ1QsOERBQUNLLFFBQU07d0JBQ0xDLE9BQU8sRUFBRTttQ0FBTUwsS0FBSyxFQUFFO3lCQUFBO3dCQUN0QkUsU0FBUyxFQUFDLGtLQUFrSztrQ0FDN0ssUUFFRDs7Ozs7NkJBQVM7Ozs7OztxQkFDTDs7Ozs7O2FBQ0YsQ0FDTjtDQUNILENBQUM7R0FyQldOLFdBQVc7O1FBQ0pELDRDQUFROzs7QUFEZkMsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9fTW9kYWxCb2R5L2RlbGV0ZS50c3g/ZGEzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gXCJAL2hvb2tzXCI7XG5cbmludGVyZmFjZSBEZWxldGVNb2RhbFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGhhbmRsZUNsaWNrKCk6IHZvaWQ7XG4gIGJ1dHRvbk5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTW9kYWwgPSAoeyB0aXRsZSwgaGFuZGxlQ2xpY2ssIGJ1dHRvbk5hbWUgfTogRGVsZXRlTW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsb3NlIH0gPSB1c2VNb2RhbCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgIDxzbWFsbD57dGl0bGUgJiYgdGl0bGV9PC9zbWFsbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNzhweF0gdy1mdWxsIHB5LTQgcHgtMyBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7YnV0dG9uTmFtZX0hXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2UoKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLVs3OHB4XSBiZy1bRjM3ODc4XSB3LWZ1bGwgcHktNCBweC0zIGJvcmRlci1bI2UyZThmMF0gYm9yZGVyIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VNb2RhbCIsIkRlbGV0ZU1vZGFsIiwidGl0bGUiLCJoYW5kbGVDbGljayIsImJ1dHRvbk5hbWUiLCJjbG9zZSIsImRpdiIsImNsYXNzTmFtZSIsInNtYWxsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/_ModalBody/delete.tsx\n");

/***/ })

});