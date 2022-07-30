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

/***/ "./src/components/list.tsx":
/*!*********************************!*\
  !*** ./src/components/list.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading, refetch = ref1.refetch;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle;\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n        switch(true){\n            case label === \"team\":\n                break;\n            default:\n                return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(\"Please contact Breno.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var filteredResult = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var ref4;\n        return myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }));\n    }, [\n        myRes,\n        searchBar\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        return !isLoading && filteredResult.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item,\n                refetch: refetch\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this1);\n        });\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this),\n                        filteredResult.length > 0 ? mapOptions : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        \"Nothing found.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 62\n                                        }, _this),\n                                        \"Please verify your search.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 72,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 92,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"83eUzH280g49RW3PDuFXQun9pYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7eUJBRUo7Ozs7OztpQkFDRixpQkFFTiw4REFBQzlDLGdEQUFPOzs7O2lCQUFHOzs7OzthQUVULENBQ047Q0FDSCxDQUFDO0dBdEZXVSxJQUFJOztRQUVBTixrREFBUztRQUcwQkQsNkNBQVM7UUFFM0JELDRDQUFROzs7QUFQN0JRLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC50c3g/ODA0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCwgdXNlU2VhcmNoIH0gZnJvbSBcIkAvaG9va3NcIjtcbmltcG9ydCB7IFNlYXJjaFByb3BzIH0gZnJvbSBcIkAvdHlwaW5nL2FwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hCYXIsIHNldFNlYXJjaEJhcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBsYWJlbCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHsgY2FsbFNlYXJjaCwgbXlSZXMsIGlzTG9hZGluZywgcmVmZXRjaCB9ID0gdXNlU2VhcmNoPFNlYXJjaFByb3BzW10+KCk7XG5cbiAgY29uc3QgeyBzZXRJc09wZW4sIHNldFRpdGxlIH0gPSB1c2VNb2RhbCgpO1xuXG4gIGNvbnN0IG9wZW5DcmVhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIHNldFRpdGxlKGBDcmVhdGUgYSBuZXcgJHtsYWJlbH0gaXRlbWApO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgKGxhYmVsID09PSAndGVhbScpOiBcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0b2FzdC53YXJuKCdQbGVhc2UgY29udGFjdCBCcmVuby4nKVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGFiZWwpIHJldHVybjtcblxuICAgIGNhbGxTZWFyY2gobGFiZWwgYXMgc3RyaW5nKTtcbiAgfSwgW2xhYmVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW15UmVzKSByZXR1cm47XG4gICAgIWlzTG9hZGluZyAmJiBteVJlcz8ubGVuZ3RoID09PSAwICYmIHJvdXRlci5yZXBsYWNlKFwiLzQwNFwiKTtcbiAgICBjb25zb2xlLmxvZyhteVJlcyk7XG4gIH0sIFtteVJlcywgaXNMb2FkaW5nXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRSZXN1bHQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBteVJlcyAmJlxuICAgICAgWy4uLm15UmVzXT8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hCYXIgPT09IFwiXCIpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGl0ZW0ubmFtZSB8fCBpdGVtLm1vZGVsKVxuICAgICAgICAgICAgPy5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLnNsaWNlKDAsIHNlYXJjaEJhci5sZW5ndGgpXG4gICAgICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCkgPT09IHNlYXJjaEJhci50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICBbbXlSZXMsIHNlYXJjaEJhcl1cbiAgKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgZmlsdGVyZWRSZXN1bHQhLm1hcCgoaXRlbTogU2VhcmNoUHJvcHMpID0+IChcbiAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbVtcIkBrZXlcIl19IGl0ZW09e2l0ZW19IHJlZmV0Y2g9e3JlZmV0Y2h9IC8+XG4gICAgICApKSxcbiAgICBbbXlSZXMsIGlzTG9hZGluZywgc2VhcmNoQmFyXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LVsxMTM0cHhdIG14LWF1dG9cIj5cbiAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGFuaW1hdGlvbjogXCJmYWRlSW4gLjdzXCIgfX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPEZvcm0gc2VhcmNoQmFyPXtzZWFyY2hCYXJ9IHNldFNlYXJjaEJhcj17c2V0U2VhcmNoQmFyfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyB3LWZ1bGwgbXQtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuQ3JlYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVs3OHB4XSB3LWZ1bGwgcHktNCBweC0zIGJvcmRlci1bI2UyZThmMF0gYm9yZGVyIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsPkFkZCBhIG5ldyBpdGVtPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2ZpbHRlcmVkUmVzdWx0IS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBtYXBPcHRpb25zXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzc4cHhdIHctZnVsbCBweS00IHB4LTMgYm9yZGVyLVsjZTJlOGYwXSBib3JkZXIgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Tm90aGluZyBmb3VuZC48YnIvPlBsZWFzZSB2ZXJpZnkgeW91ciBzZWFyY2guPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiTGlzdEl0ZW0iLCJ1c2VNb2RhbCIsInVzZVNlYXJjaCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInRvYXN0IiwiRm9ybSIsIkxpc3QiLCJzZWFyY2hCYXIiLCJzZXRTZWFyY2hCYXIiLCJyb3V0ZXIiLCJsYWJlbCIsInF1ZXJ5IiwiY2FsbFNlYXJjaCIsIm15UmVzIiwiaXNMb2FkaW5nIiwicmVmZXRjaCIsInNldElzT3BlbiIsInNldFRpdGxlIiwib3BlbkNyZWF0ZSIsIndhcm4iLCJsZW5ndGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkUmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJtb2RlbCIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJtYXBPcHRpb25zIiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhbmltYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic21hbGwiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});