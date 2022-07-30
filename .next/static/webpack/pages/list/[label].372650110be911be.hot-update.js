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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\n/* harmony import */ var _ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ModalBody/_CreateModal */ \"./src/components/_ModalBody/_CreateModal/index.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading, refetch = ref1.refetch;\n    var callCreate = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate)().callCreate;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle, setBody = ref2.setBody, close = ref2.close;\n    var createItem = function(docType, newValue) {\n        callCreate({\n            docType: docType,\n            newValue: newValue,\n            refetch: refetch\n        });\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this1));\n        var closeTimeout = setTimeout(function() {\n            close();\n            console.log(\"trigger timeout\");\n        }, 4000);\n        (function() {\n            return clearTimeout(closeTimeout);\n        });\n    };\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n        switch(true){\n            case label === \"team\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateTeam, {\n                    buttonName: \"Create\",\n                    docType: \"team\",\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            case label === \"driver\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateDriver, {\n                    buttonName: \"Create\",\n                    docType: \"team\",\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            default:\n                return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(\"Label not Supported - Please contact Breno.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var filteredResult = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var ref4;\n        return myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }));\n    }, [\n        myRes,\n        searchBar\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        return !isLoading && filteredResult.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item,\n                refetch: refetch\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, _this1);\n        });\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, _this),\n                        filteredResult.length > 0 ? mapOptions : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        \"Nothing found.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 19\n                                        }, _this),\n                                        \"Please verify your search.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 108,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 132,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"m85MvhI245LFvJdyqjADg3hn/FA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDSjs7Ozs7O3lCQUVKOzs7Ozs7aUJBQ0YsaUJBRU4sOERBQUM3RCxnREFBTzs7OztpQkFBRzs7Ozs7YUFFVCxDQUNOO0NBQ0gsQ0FBQztHQTdIV2EsSUFBSTs7UUFFQVIsa0RBQVM7UUFHMEJGLDZDQUFTO1FBQ3BDQyw2Q0FBUztRQUVnQkYsNENBQVE7OztBQVI3Q1csS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9saXN0LnRzeD84MDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZU1vZGFsLCB1c2VTZWFyY2gsIHVzZUNyZWF0ZSB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBTZWFyY2hQcm9wcyB9IGZyb20gXCJAL3R5cGluZy9hcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyBDcmVhdGVUZWFtLCBDcmVhdGVEcml2ZXIgfSBmcm9tIFwiLi9fTW9kYWxCb2R5L19DcmVhdGVNb2RhbFwiO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaEJhciwgc2V0U2VhcmNoQmFyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxhYmVsIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBjYWxsU2VhcmNoLCBteVJlcywgaXNMb2FkaW5nLCByZWZldGNoIH0gPSB1c2VTZWFyY2g8U2VhcmNoUHJvcHNbXT4oKTtcbiAgY29uc3QgeyBjYWxsQ3JlYXRlIH0gPSB1c2VDcmVhdGUoKTtcblxuICBjb25zdCB7IHNldElzT3Blbiwgc2V0VGl0bGUsIHNldEJvZHksIGNsb3NlIH0gPSB1c2VNb2RhbCgpO1xuXG4gIGNvbnN0IGNyZWF0ZUl0ZW0gPSAoZG9jVHlwZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY2FsbENyZWF0ZSh7IGRvY1R5cGUsIG5ld1ZhbHVlLCByZWZldGNoIH0pO1xuICAgIHNldEJvZHkoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LThcIj5cbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCBjbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIHRpbWVvdXRcIik7XG4gICAgICB9LCA0MDAwKTtcbiAgXG4gICAgICAoKSA9PiBjbGVhclRpbWVvdXQoY2xvc2VUaW1lb3V0KTtcbiAgfTtcblxuICBjb25zdCBvcGVuQ3JlYXRlID0gKCkgPT4ge1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgICBzZXRUaXRsZShgQ3JlYXRlIGEgbmV3ICR7bGFiZWx9IGl0ZW1gKTtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBsYWJlbCA9PT0gXCJ0ZWFtXCI6XG4gICAgICAgIHNldEJvZHkoXG4gICAgICAgICAgPENyZWF0ZVRlYW1cbiAgICAgICAgICAgIGJ1dHRvbk5hbWU9XCJDcmVhdGVcIlxuICAgICAgICAgICAgZG9jVHlwZT1cInRlYW1cIlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2NyZWF0ZUl0ZW19XG4gICAgICAgICAgICB0aXRsZT1cIk5hbWUgeW91ciBuZXcgdGVhbTpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBsYWJlbCA9PT0gXCJkcml2ZXJcIjpcbiAgICAgICAgc2V0Qm9keShcbiAgICAgICAgICA8Q3JlYXRlRHJpdmVyXG4gICAgICAgICAgICBidXR0b25OYW1lPVwiQ3JlYXRlXCJcbiAgICAgICAgICAgIGRvY1R5cGU9XCJ0ZWFtXCJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtjcmVhdGVJdGVtfVxuICAgICAgICAgICAgdGl0bGU9XCJOYW1lIHlvdXIgbmV3IHRlYW06XCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0b2FzdC53YXJuKFwiTGFiZWwgbm90IFN1cHBvcnRlZCAtIFBsZWFzZSBjb250YWN0IEJyZW5vLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxhYmVsKSByZXR1cm47XG5cbiAgICBjYWxsU2VhcmNoKGxhYmVsIGFzIHN0cmluZyk7XG4gIH0sIFtsYWJlbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFteVJlcykgcmV0dXJuO1xuICAgICFpc0xvYWRpbmcgJiYgbXlSZXM/Lmxlbmd0aCA9PT0gMCAmJiByb3V0ZXIucmVwbGFjZShcIi80MDRcIik7XG4gICAgY29uc29sZS5sb2cobXlSZXMpO1xuICB9LCBbbXlSZXMsIGlzTG9hZGluZ10pO1xuXG4gIGNvbnN0IGZpbHRlcmVkUmVzdWx0ID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbXlSZXMgJiZcbiAgICAgIFsuLi5teVJlc10/LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoc2VhcmNoQmFyID09PSBcIlwiKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChpdGVtLm5hbWUgfHwgaXRlbS5tb2RlbClcbiAgICAgICAgICAgID8uc3BsaXQoXCJcIilcbiAgICAgICAgICAgIC5zbGljZSgwLCBzZWFyY2hCYXIubGVuZ3RoKVxuICAgICAgICAgICAgLmpvaW4oXCJcIilcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpID09PSBzZWFyY2hCYXIudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgW215UmVzLCBzZWFyY2hCYXJdXG4gICk7XG5cbiAgY29uc3QgbWFwT3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgICFpc0xvYWRpbmcgJiZcbiAgICAgIGZpbHRlcmVkUmVzdWx0IS5tYXAoKGl0ZW06IFNlYXJjaFByb3BzKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbSBrZXk9e2l0ZW1bXCJAa2V5XCJdfSBpdGVtPXtpdGVtfSByZWZldGNoPXtyZWZldGNofSAvPlxuICAgICAgKSksXG4gICAgW215UmVzLCBpc0xvYWRpbmcsIHNlYXJjaEJhcl1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYXgtdy1bMTEzNHB4XSBteC1hdXRvXCI+XG4gICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBhbmltYXRpb246IFwiZmFkZUluIC43c1wiIH19IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxGb3JtIHNlYXJjaEJhcj17c2VhcmNoQmFyfSBzZXRTZWFyY2hCYXI9e3NldFNlYXJjaEJhcn0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgdy1mdWxsIG10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b3BlbkNyZWF0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNzhweF0gdy1mdWxsIHB5LTQgcHgtMyBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzbWFsbD5BZGQgYSBuZXcgaXRlbTwvc21hbGw+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFJlc3VsdCEubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgbWFwT3B0aW9uc1xuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs3OHB4XSB3LWZ1bGwgcHktNCBweC0zIGJvcmRlci1bI2UyZThmMF0gYm9yZGVyIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgTm90aGluZyBmb3VuZC5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIHZlcmlmeSB5b3VyIHNlYXJjaC5cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJMaXN0SXRlbSIsInVzZU1vZGFsIiwidXNlU2VhcmNoIiwidXNlQ3JlYXRlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidG9hc3QiLCJGb3JtIiwiQ3JlYXRlVGVhbSIsIkNyZWF0ZURyaXZlciIsIkxpc3QiLCJzZWFyY2hCYXIiLCJzZXRTZWFyY2hCYXIiLCJyb3V0ZXIiLCJsYWJlbCIsInF1ZXJ5IiwiY2FsbFNlYXJjaCIsIm15UmVzIiwiaXNMb2FkaW5nIiwicmVmZXRjaCIsImNhbGxDcmVhdGUiLCJzZXRJc09wZW4iLCJzZXRUaXRsZSIsInNldEJvZHkiLCJjbG9zZSIsImNyZWF0ZUl0ZW0iLCJkb2NUeXBlIiwibmV3VmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjbG9zZVRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImNsZWFyVGltZW91dCIsIm9wZW5DcmVhdGUiLCJidXR0b25OYW1lIiwiaGFuZGxlQ2xpY2siLCJ0aXRsZSIsIndhcm4iLCJsZW5ndGgiLCJyZXBsYWNlIiwiZmlsdGVyZWRSZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsIm1vZGVsIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcE9wdGlvbnMiLCJtYXAiLCJzdHlsZSIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbWFsbCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});