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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\n/* harmony import */ var _ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ModalBody/_CreateModal */ \"./src/components/_ModalBody/_CreateModal/index.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading, refetch = ref1.refetch;\n    var callCreate = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate)().callCreate;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle, setBody = ref2.setBody, close = ref2.close;\n    var createItem = function(param) {\n        var docType = param.docType, newValue = param.newValue, _teamKey = param.teamKey, teamKey = _teamKey === void 0 ? \"\" : _teamKey;\n        callCreate({\n            docType: docType,\n            newValue: newValue,\n            refetch: refetch,\n            teamKey: teamKey\n        });\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this1));\n        var closeTimeout = setTimeout(function() {\n            close();\n            console.log(\"trigger timeout\");\n        }, 4000);\n        (function() {\n            return clearTimeout(closeTimeout);\n        });\n    };\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n        switch(true){\n            case label === \"team\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateTeam, {\n                    buttonName: \"Create\",\n                    docType: label,\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            case label === \"driver\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateDriver, {\n                    buttonName: \"Create\",\n                    docType: label,\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            case label === \"car\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateDriver, {\n                    buttonName: \"Create\",\n                    docType: label,\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            default:\n                return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(\"Label not Supported - Please contact Breno.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var filteredResult = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var ref4;\n        return myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }));\n    }, [\n        myRes,\n        searchBar\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        return !isLoading && filteredResult.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item,\n                refetch: refetch\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, _this1);\n        });\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, _this),\n                        filteredResult.length > 0 ? mapOptions : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        \"Nothing found.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                            lineNumber: 140,\n                                            columnNumber: 19\n                                        }, _this),\n                                        \"Please verify your search.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 124,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 148,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"m85MvhI245LFvJdyqjADg3hn/FA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0pBQXNKO3NDQUVoSyw0RUFBQzRCLE9BQUs7MENBQUMsZ0JBQWM7Ozs7O3FDQUFROzs7OztpQ0FDdEI7d0JBQ1JmLGNBQWMsQ0FBRUYsTUFBTSxHQUFHLENBQUMsR0FDekJXLFVBQVUsaUJBRVYsOERBQUN2QixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsc0pBQXNKOztnQ0FDbEssR0FBRzs4Q0FDSiw4REFBQzRCLE9BQUs7b0NBQUM1QixTQUFTLEVBQUMsYUFBYTs7d0NBQUMsZ0JBRTdCO3NEQUFBLDhEQUFDNkIsSUFBRTs7OztpREFBRzt3Q0FBQSw0QkFFUjs7Ozs7O3lDQUFROzs7Ozs7aUNBQ0o7Ozs7Ozt5QkFFSjs7Ozs7O2lCQUNGLGlCQUVOLDhEQUFDOUQsZ0RBQU87Ozs7aUJBQUc7Ozs7O2FBRVQsQ0FDTjtDQUNILENBQUM7R0F2SVdhLElBQUk7O1FBRUFSLGtEQUFTO1FBRzBCRiw2Q0FBUztRQUNwQ0MsNkNBQVM7UUFFZ0JGLDRDQUFROzs7QUFSN0NXLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC50c3g/ODA0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCwgdXNlU2VhcmNoLCB1c2VDcmVhdGUgfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgU2VhcmNoUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0IHsgQ3JlYXRlVGVhbSwgQ3JlYXRlRHJpdmVyIH0gZnJvbSBcIi4vX01vZGFsQm9keS9fQ3JlYXRlTW9kYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVJdGVtUHJvcHMge1xuICBkb2NUeXBlOiBzdHJpbmc7XG4gIG5ld1ZhbHVlOiBzdHJpbmc7XG4gIHRlYW1LZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoQmFyLCBzZXRTZWFyY2hCYXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbGFiZWwgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCB7IGNhbGxTZWFyY2gsIG15UmVzLCBpc0xvYWRpbmcsIHJlZmV0Y2ggfSA9IHVzZVNlYXJjaDxTZWFyY2hQcm9wc1tdPigpO1xuICBjb25zdCB7IGNhbGxDcmVhdGUgfSA9IHVzZUNyZWF0ZSgpO1xuXG4gIGNvbnN0IHsgc2V0SXNPcGVuLCBzZXRUaXRsZSwgc2V0Qm9keSwgY2xvc2UgfSA9IHVzZU1vZGFsKCk7XG5cbiAgY29uc3QgY3JlYXRlSXRlbSA9ICh7IGRvY1R5cGUsIG5ld1ZhbHVlLCB0ZWFtS2V5ID0gXCJcIiB9OiBDcmVhdGVJdGVtUHJvcHMpID0+IHtcbiAgICBjYWxsQ3JlYXRlKHsgZG9jVHlwZSwgbmV3VmFsdWUsIHJlZmV0Y2gsIHRlYW1LZXkgfSk7XG4gICAgc2V0Qm9keShcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOFwiPlxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IGNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlciB0aW1lb3V0XCIpO1xuICAgIH0sIDQwMDApO1xuXG4gICAgKCkgPT4gY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dCk7XG4gIH07XG5cbiAgY29uc3Qgb3BlbkNyZWF0ZSA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgc2V0VGl0bGUoYENyZWF0ZSBhIG5ldyAke2xhYmVsfSBpdGVtYCk7XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgbGFiZWwgPT09IFwidGVhbVwiOlxuICAgICAgICBzZXRCb2R5KFxuICAgICAgICAgIDxDcmVhdGVUZWFtXG4gICAgICAgICAgICBidXR0b25OYW1lPVwiQ3JlYXRlXCJcbiAgICAgICAgICAgIGRvY1R5cGU9e2xhYmVsIGFzIFwidGVhbVwifVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2NyZWF0ZUl0ZW19XG4gICAgICAgICAgICB0aXRsZT1cIk5hbWUgeW91ciBuZXcgdGVhbTpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBsYWJlbCA9PT0gXCJkcml2ZXJcIjpcbiAgICAgICAgc2V0Qm9keShcbiAgICAgICAgICA8Q3JlYXRlRHJpdmVyXG4gICAgICAgICAgICBidXR0b25OYW1lPVwiQ3JlYXRlXCJcbiAgICAgICAgICAgIGRvY1R5cGU9e2xhYmVsIGFzIFwiZHJpdmVyXCJ9XG4gICAgICAgICAgICBoYW5kbGVDbGljaz17Y3JlYXRlSXRlbX1cbiAgICAgICAgICAgIHRpdGxlPVwiTmFtZSB5b3VyIG5ldyB0ZWFtOlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGxhYmVsID09PSBcImNhclwiOlxuICAgICAgICBzZXRCb2R5KFxuICAgICAgICAgIDxDcmVhdGVEcml2ZXJcbiAgICAgICAgICAgIGJ1dHRvbk5hbWU9XCJDcmVhdGVcIlxuICAgICAgICAgICAgZG9jVHlwZT17bGFiZWwgYXMgXCJkcml2ZXJcIn1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtjcmVhdGVJdGVtfVxuICAgICAgICAgICAgdGl0bGU9XCJOYW1lIHlvdXIgbmV3IHRlYW06XCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0b2FzdC53YXJuKFwiTGFiZWwgbm90IFN1cHBvcnRlZCAtIFBsZWFzZSBjb250YWN0IEJyZW5vLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxhYmVsKSByZXR1cm47XG5cbiAgICBjYWxsU2VhcmNoKGxhYmVsIGFzIHN0cmluZyk7XG4gIH0sIFtsYWJlbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFteVJlcykgcmV0dXJuO1xuICAgICFpc0xvYWRpbmcgJiYgbXlSZXM/Lmxlbmd0aCA9PT0gMCAmJiByb3V0ZXIucmVwbGFjZShcIi80MDRcIik7XG4gICAgY29uc29sZS5sb2cobXlSZXMpO1xuICB9LCBbbXlSZXMsIGlzTG9hZGluZ10pO1xuXG4gIGNvbnN0IGZpbHRlcmVkUmVzdWx0ID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbXlSZXMgJiZcbiAgICAgIFsuLi5teVJlc10/LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoc2VhcmNoQmFyID09PSBcIlwiKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChpdGVtLm5hbWUgfHwgaXRlbS5tb2RlbClcbiAgICAgICAgICAgID8uc3BsaXQoXCJcIilcbiAgICAgICAgICAgIC5zbGljZSgwLCBzZWFyY2hCYXIubGVuZ3RoKVxuICAgICAgICAgICAgLmpvaW4oXCJcIilcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpID09PSBzZWFyY2hCYXIudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgW215UmVzLCBzZWFyY2hCYXJdXG4gICk7XG5cbiAgY29uc3QgbWFwT3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgICFpc0xvYWRpbmcgJiZcbiAgICAgIGZpbHRlcmVkUmVzdWx0IS5tYXAoKGl0ZW06IFNlYXJjaFByb3BzKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbSBrZXk9e2l0ZW1bXCJAa2V5XCJdfSBpdGVtPXtpdGVtfSByZWZldGNoPXtyZWZldGNofSAvPlxuICAgICAgKSksXG4gICAgW215UmVzLCBpc0xvYWRpbmcsIHNlYXJjaEJhcl1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBweS0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYXgtdy1bMTEzNHB4XSBteC1hdXRvXCI+XG4gICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBhbmltYXRpb246IFwiZmFkZUluIC43c1wiIH19IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgIDxGb3JtIHNlYXJjaEJhcj17c2VhcmNoQmFyfSBzZXRTZWFyY2hCYXI9e3NldFNlYXJjaEJhcn0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgdy1mdWxsIG10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b3BlbkNyZWF0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNzhweF0gdy1mdWxsIHB5LTQgcHgtMyBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzbWFsbD5BZGQgYSBuZXcgaXRlbTwvc21hbGw+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFJlc3VsdCEubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgbWFwT3B0aW9uc1xuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs3OHB4XSB3LWZ1bGwgcHktNCBweC0zIGJvcmRlci1bI2UyZThmMF0gYm9yZGVyIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgTm90aGluZyBmb3VuZC5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIHZlcmlmeSB5b3VyIHNlYXJjaC5cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJMaXN0SXRlbSIsInVzZU1vZGFsIiwidXNlU2VhcmNoIiwidXNlQ3JlYXRlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidG9hc3QiLCJGb3JtIiwiQ3JlYXRlVGVhbSIsIkNyZWF0ZURyaXZlciIsIkxpc3QiLCJzZWFyY2hCYXIiLCJzZXRTZWFyY2hCYXIiLCJyb3V0ZXIiLCJsYWJlbCIsInF1ZXJ5IiwiY2FsbFNlYXJjaCIsIm15UmVzIiwiaXNMb2FkaW5nIiwicmVmZXRjaCIsImNhbGxDcmVhdGUiLCJzZXRJc09wZW4iLCJzZXRUaXRsZSIsInNldEJvZHkiLCJjbG9zZSIsImNyZWF0ZUl0ZW0iLCJkb2NUeXBlIiwibmV3VmFsdWUiLCJ0ZWFtS2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xvc2VUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJvcGVuQ3JlYXRlIiwiYnV0dG9uTmFtZSIsImhhbmRsZUNsaWNrIiwidGl0bGUiLCJ3YXJuIiwibGVuZ3RoIiwicmVwbGFjZSIsImZpbHRlcmVkUmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJtb2RlbCIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJtYXBPcHRpb25zIiwibWFwIiwic3R5bGUiLCJhbmltYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic21hbGwiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});