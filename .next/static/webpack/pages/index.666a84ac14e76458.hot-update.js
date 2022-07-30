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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\n/* harmony import */ var _ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ModalBody/_CreateModal */ \"./src/components/_ModalBody/_CreateModal/index.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading, refetch = ref1.refetch;\n    var callCreate = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate)().callCreate;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle, setBody = ref2.setBody, close = ref2.close;\n    var createItem = function(param) {\n        var docType = param.docType, newValue = param.newValue, _teamKey = param.teamKey, teamKey = _teamKey === void 0 ? \"\" : _teamKey;\n        callCreate({\n            docType: docType,\n            newValue: newValue,\n            refetch: refetch,\n            teamKey: teamKey\n        });\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this1));\n        var closeTimeout = setTimeout(function() {\n            close();\n            console.log(\"trigger timeout\");\n        }, 4000);\n        (function() {\n            return clearTimeout(closeTimeout);\n        });\n    };\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n        switch(true){\n            case label === \"team\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateTeam, {\n                    buttonName: \"Create\",\n                    docType: label,\n                    handleClick: createItem,\n                    title: \"Create your new Team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            case label === \"driver\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateDriver, {\n                    buttonName: \"Create\",\n                    docType: label,\n                    handleClick: createItem,\n                    title: \"Create your new Driver:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            case label === \"car\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateCars, {\n                    buttonName: \"Create\",\n                    docType: label,\n                    handleClick: createItem,\n                    title: \"Create your new Team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            default:\n                return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(\"Label not Supported - Please contact Breno.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var filteredResult = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var ref4;\n        return myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }));\n    }, [\n        myRes,\n        searchBar\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        return !isLoading && filteredResult.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item,\n                refetch: refetch\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, _this1);\n        });\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, _this),\n                        filteredResult.length > 0 ? mapOptions : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        \"Nothing found.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                            lineNumber: 140,\n                                            columnNumber: 19\n                                        }, _this),\n                                        \"Please verify your search.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 124,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 148,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"m85MvhI245LFvJdyqjADg3hn/FA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SkFBc0o7c0NBRWhLLDRFQUFDNkIsT0FBSzswQ0FBQyxnQkFBYzs7Ozs7cUNBQVE7Ozs7O2lDQUN0Qjt3QkFDUmYsY0FBYyxDQUFFRixNQUFNLEdBQUcsQ0FBQyxHQUN6QlcsVUFBVSxpQkFFViw4REFBQ3hCLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxzSkFBc0o7O2dDQUNsSyxHQUFHOzhDQUNKLDhEQUFDNkIsT0FBSztvQ0FBQzdCLFNBQVMsRUFBQyxhQUFhOzt3Q0FBQyxnQkFFN0I7c0RBQUEsOERBQUM4QixJQUFFOzs7O2lEQUFHO3dDQUFBLDRCQUVSOzs7Ozs7eUNBQVE7Ozs7OztpQ0FDSjs7Ozs7O3lCQUVKOzs7Ozs7aUJBQ0YsaUJBRU4sOERBQUMvRCxnREFBTzs7OztpQkFBRzs7Ozs7YUFFVCxDQUNOO0NBQ0gsQ0FBQztHQXZJV2EsSUFBSTs7UUFFQVIsa0RBQVM7UUFHMEJGLDZDQUFTO1FBQ3BDQyw2Q0FBUztRQUVnQkYsNENBQVE7OztBQVI3Q1csS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9saXN0LnRzeD84MDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZU1vZGFsLCB1c2VTZWFyY2gsIHVzZUNyZWF0ZSB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBTZWFyY2hQcm9wcyB9IGZyb20gXCJAL3R5cGluZy9hcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyBDcmVhdGVUZWFtLCBDcmVhdGVEcml2ZXIgfSBmcm9tIFwiLi9fTW9kYWxCb2R5L19DcmVhdGVNb2RhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUl0ZW1Qcm9wcyB7XG4gIGRvY1R5cGU6IHN0cmluZztcbiAgbmV3VmFsdWU6IHN0cmluZztcbiAgdGVhbUtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hCYXIsIHNldFNlYXJjaEJhcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBsYWJlbCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHsgY2FsbFNlYXJjaCwgbXlSZXMsIGlzTG9hZGluZywgcmVmZXRjaCB9ID0gdXNlU2VhcmNoPFNlYXJjaFByb3BzW10+KCk7XG4gIGNvbnN0IHsgY2FsbENyZWF0ZSB9ID0gdXNlQ3JlYXRlKCk7XG5cbiAgY29uc3QgeyBzZXRJc09wZW4sIHNldFRpdGxlLCBzZXRCb2R5LCBjbG9zZSB9ID0gdXNlTW9kYWwoKTtcblxuICBjb25zdCBjcmVhdGVJdGVtID0gKHsgZG9jVHlwZSwgbmV3VmFsdWUsIHRlYW1LZXkgPSBcIlwiIH06IENyZWF0ZUl0ZW1Qcm9wcykgPT4ge1xuICAgIGNhbGxDcmVhdGUoeyBkb2NUeXBlLCBuZXdWYWx1ZSwgcmVmZXRjaCwgdGVhbUtleSB9KTtcbiAgICBzZXRCb2R5KFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04XCI+XG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgY2xvc2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIHRpbWVvdXRcIik7XG4gICAgfSwgNDAwMCk7XG5cbiAgICAoKSA9PiBjbGVhclRpbWVvdXQoY2xvc2VUaW1lb3V0KTtcbiAgfTtcblxuICBjb25zdCBvcGVuQ3JlYXRlID0gKCkgPT4ge1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgICBzZXRUaXRsZShgQ3JlYXRlIGEgbmV3ICR7bGFiZWx9IGl0ZW1gKTtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBsYWJlbCA9PT0gXCJ0ZWFtXCI6XG4gICAgICAgIHNldEJvZHkoXG4gICAgICAgICAgPENyZWF0ZVRlYW1cbiAgICAgICAgICAgIGJ1dHRvbk5hbWU9XCJDcmVhdGVcIlxuICAgICAgICAgICAgZG9jVHlwZT17bGFiZWwgYXMgXCJ0ZWFtXCJ9XG4gICAgICAgICAgICBoYW5kbGVDbGljaz17Y3JlYXRlSXRlbX1cbiAgICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIHlvdXIgbmV3IFRlYW06XCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbGFiZWwgPT09IFwiZHJpdmVyXCI6XG4gICAgICAgIHNldEJvZHkoXG4gICAgICAgICAgPENyZWF0ZURyaXZlclxuICAgICAgICAgICAgYnV0dG9uTmFtZT1cIkNyZWF0ZVwiXG4gICAgICAgICAgICBkb2NUeXBlPXtsYWJlbCBhcyBcImRyaXZlclwifVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2NyZWF0ZUl0ZW19XG4gICAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSB5b3VyIG5ldyBEcml2ZXI6XCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbGFiZWwgPT09IFwiY2FyXCI6XG4gICAgICAgIHNldEJvZHkoXG4gICAgICAgICAgPENyZWF0ZUNhcnNcbiAgICAgICAgICAgIGJ1dHRvbk5hbWU9XCJDcmVhdGVcIlxuICAgICAgICAgICAgZG9jVHlwZT17bGFiZWwgYXMgXCJjYXJcIn1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtjcmVhdGVJdGVtfVxuICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgeW91ciBuZXcgVGVhbTpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRvYXN0Lndhcm4oXCJMYWJlbCBub3QgU3VwcG9ydGVkIC0gUGxlYXNlIGNvbnRhY3QgQnJlbm8uXCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGFiZWwpIHJldHVybjtcblxuICAgIGNhbGxTZWFyY2gobGFiZWwgYXMgc3RyaW5nKTtcbiAgfSwgW2xhYmVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW15UmVzKSByZXR1cm47XG4gICAgIWlzTG9hZGluZyAmJiBteVJlcz8ubGVuZ3RoID09PSAwICYmIHJvdXRlci5yZXBsYWNlKFwiLzQwNFwiKTtcbiAgICBjb25zb2xlLmxvZyhteVJlcyk7XG4gIH0sIFtteVJlcywgaXNMb2FkaW5nXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRSZXN1bHQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBteVJlcyAmJlxuICAgICAgWy4uLm15UmVzXT8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hCYXIgPT09IFwiXCIpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGl0ZW0ubmFtZSB8fCBpdGVtLm1vZGVsKVxuICAgICAgICAgICAgPy5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLnNsaWNlKDAsIHNlYXJjaEJhci5sZW5ndGgpXG4gICAgICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCkgPT09IHNlYXJjaEJhci50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICBbbXlSZXMsIHNlYXJjaEJhcl1cbiAgKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgZmlsdGVyZWRSZXN1bHQhLm1hcCgoaXRlbTogU2VhcmNoUHJvcHMpID0+IChcbiAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbVtcIkBrZXlcIl19IGl0ZW09e2l0ZW19IHJlZmV0Y2g9e3JlZmV0Y2h9IC8+XG4gICAgICApKSxcbiAgICBbbXlSZXMsIGlzTG9hZGluZywgc2VhcmNoQmFyXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LVsxMTM0cHhdIG14LWF1dG9cIj5cbiAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGFuaW1hdGlvbjogXCJmYWRlSW4gLjdzXCIgfX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPEZvcm0gc2VhcmNoQmFyPXtzZWFyY2hCYXJ9IHNldFNlYXJjaEJhcj17c2V0U2VhcmNoQmFyfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyB3LWZ1bGwgbXQtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuQ3JlYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVs3OHB4XSB3LWZ1bGwgcHktNCBweC0zIGJvcmRlci1bI2UyZThmMF0gYm9yZGVyIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsPkFkZCBhIG5ldyBpdGVtPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2ZpbHRlcmVkUmVzdWx0IS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBtYXBPcHRpb25zXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzc4cHhdIHctZnVsbCBweS00IHB4LTMgYm9yZGVyLVsjZTJlOGYwXSBib3JkZXIgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBOb3RoaW5nIGZvdW5kLlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgdmVyaWZ5IHlvdXIgc2VhcmNoLlxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZyIsIkxpc3RJdGVtIiwidXNlTW9kYWwiLCJ1c2VTZWFyY2giLCJ1c2VDcmVhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ0b2FzdCIsIkZvcm0iLCJDcmVhdGVUZWFtIiwiQ3JlYXRlRHJpdmVyIiwiTGlzdCIsInNlYXJjaEJhciIsInNldFNlYXJjaEJhciIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJyZWZldGNoIiwiY2FsbENyZWF0ZSIsInNldElzT3BlbiIsInNldFRpdGxlIiwic2V0Qm9keSIsImNsb3NlIiwiY3JlYXRlSXRlbSIsImRvY1R5cGUiLCJuZXdWYWx1ZSIsInRlYW1LZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJjbG9zZVRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImNsZWFyVGltZW91dCIsIm9wZW5DcmVhdGUiLCJidXR0b25OYW1lIiwiaGFuZGxlQ2xpY2siLCJ0aXRsZSIsIkNyZWF0ZUNhcnMiLCJ3YXJuIiwibGVuZ3RoIiwicmVwbGFjZSIsImZpbHRlcmVkUmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJtb2RlbCIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJtYXBPcHRpb25zIiwibWFwIiwic3R5bGUiLCJhbmltYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic21hbGwiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});