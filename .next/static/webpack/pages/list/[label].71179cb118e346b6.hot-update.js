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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\n/* harmony import */ var _ModalBody_CreateModal_team__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ModalBody/_CreateModal/team */ \"./src/components/_ModalBody/_CreateModal/team.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading, refetch = ref1.refetch;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle, setBody = ref2.setBody;\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n        switch(true){\n            case label === \"team\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal_team__WEBPACK_IMPORTED_MODULE_7__.CreateTeam, {\n                    buttonName: \"Create\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this1));\n                break;\n            default:\n                return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(\"Label not Supported - Please contact Breno.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var filteredResult = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var ref4;\n        return myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }));\n    }, [\n        myRes,\n        searchBar\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        return !isLoading && filteredResult.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item,\n                refetch: refetch\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this1);\n        });\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, _this),\n                        filteredResult.length > 0 ? mapOptions : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        \"Nothing found.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, _this),\n                                        \"Please verify your search.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 74,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 98,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"uq1BWH/sVQHwerNk9r3+n02/yno=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs4Q0FDSiw4REFBQ0ssT0FBSztvQ0FBQ0wsU0FBUyxFQUFDLGFBQWE7O3dDQUFDLGdCQUU3QjtzREFBQSw4REFBQ00sSUFBRTs7OztpREFBRzt3Q0FBQSw0QkFFUjs7Ozs7O3lDQUFROzs7Ozs7aUNBQ0o7Ozs7Ozt5QkFFSjs7Ozs7O2lCQUNGLGlCQUVOLDhEQUFDakQsZ0RBQU87Ozs7aUJBQUc7Ozs7O2FBRVQsQ0FDTjtDQUNILENBQUM7R0EzRldXLElBQUk7O1FBRUFQLGtEQUFTO1FBRzBCRCw2Q0FBUztRQUVsQkQsNENBQVE7OztBQVB0Q1MsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9saXN0LnRzeD84MDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZU1vZGFsLCB1c2VTZWFyY2ggfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgU2VhcmNoUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0IHsgQ3JlYXRlVGVhbSB9IGZyb20gXCIuL19Nb2RhbEJvZHkvX0NyZWF0ZU1vZGFsL3RlYW1cIjtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hCYXIsIHNldFNlYXJjaEJhcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBsYWJlbCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHsgY2FsbFNlYXJjaCwgbXlSZXMsIGlzTG9hZGluZywgcmVmZXRjaCB9ID0gdXNlU2VhcmNoPFNlYXJjaFByb3BzW10+KCk7XG5cbiAgY29uc3QgeyBzZXRJc09wZW4sIHNldFRpdGxlLCBzZXRCb2R5IH0gPSB1c2VNb2RhbCgpO1xuXG4gIGNvbnN0IG9wZW5DcmVhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIHNldFRpdGxlKGBDcmVhdGUgYSBuZXcgJHtsYWJlbH0gaXRlbWApO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGxhYmVsID09PSBcInRlYW1cIjpcbiAgICAgICAgc2V0Qm9keSg8Q3JlYXRlVGVhbSBidXR0b25OYW1lPVwiQ3JlYXRlXCIgLz4pXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRvYXN0Lndhcm4oXCJMYWJlbCBub3QgU3VwcG9ydGVkIC0gUGxlYXNlIGNvbnRhY3QgQnJlbm8uXCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGFiZWwpIHJldHVybjtcblxuICAgIGNhbGxTZWFyY2gobGFiZWwgYXMgc3RyaW5nKTtcbiAgfSwgW2xhYmVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW15UmVzKSByZXR1cm47XG4gICAgIWlzTG9hZGluZyAmJiBteVJlcz8ubGVuZ3RoID09PSAwICYmIHJvdXRlci5yZXBsYWNlKFwiLzQwNFwiKTtcbiAgICBjb25zb2xlLmxvZyhteVJlcyk7XG4gIH0sIFtteVJlcywgaXNMb2FkaW5nXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRSZXN1bHQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBteVJlcyAmJlxuICAgICAgWy4uLm15UmVzXT8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hCYXIgPT09IFwiXCIpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGl0ZW0ubmFtZSB8fCBpdGVtLm1vZGVsKVxuICAgICAgICAgICAgPy5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLnNsaWNlKDAsIHNlYXJjaEJhci5sZW5ndGgpXG4gICAgICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCkgPT09IHNlYXJjaEJhci50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICBbbXlSZXMsIHNlYXJjaEJhcl1cbiAgKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgZmlsdGVyZWRSZXN1bHQhLm1hcCgoaXRlbTogU2VhcmNoUHJvcHMpID0+IChcbiAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbVtcIkBrZXlcIl19IGl0ZW09e2l0ZW19IHJlZmV0Y2g9e3JlZmV0Y2h9IC8+XG4gICAgICApKSxcbiAgICBbbXlSZXMsIGlzTG9hZGluZywgc2VhcmNoQmFyXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LVsxMTM0cHhdIG14LWF1dG9cIj5cbiAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGFuaW1hdGlvbjogXCJmYWRlSW4gLjdzXCIgfX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPEZvcm0gc2VhcmNoQmFyPXtzZWFyY2hCYXJ9IHNldFNlYXJjaEJhcj17c2V0U2VhcmNoQmFyfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyB3LWZ1bGwgbXQtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuQ3JlYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVs3OHB4XSB3LWZ1bGwgcHktNCBweC0zIGJvcmRlci1bI2UyZThmMF0gYm9yZGVyIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsPkFkZCBhIG5ldyBpdGVtPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2ZpbHRlcmVkUmVzdWx0IS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBtYXBPcHRpb25zXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzc4cHhdIHctZnVsbCBweS00IHB4LTMgYm9yZGVyLVsjZTJlOGYwXSBib3JkZXIgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBOb3RoaW5nIGZvdW5kLlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgdmVyaWZ5IHlvdXIgc2VhcmNoLlxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZyIsIkxpc3RJdGVtIiwidXNlTW9kYWwiLCJ1c2VTZWFyY2giLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ0b2FzdCIsIkZvcm0iLCJDcmVhdGVUZWFtIiwiTGlzdCIsInNlYXJjaEJhciIsInNldFNlYXJjaEJhciIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJyZWZldGNoIiwic2V0SXNPcGVuIiwic2V0VGl0bGUiLCJzZXRCb2R5Iiwib3BlbkNyZWF0ZSIsImJ1dHRvbk5hbWUiLCJ3YXJuIiwibGVuZ3RoIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZFJlc3VsdCIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwibW9kZWwiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsInRvTG93ZXJDYXNlIiwibWFwT3B0aW9ucyIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYW5pbWF0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInNtYWxsIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});