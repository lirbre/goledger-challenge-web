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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\n/* harmony import */ var _ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ModalBody/_CreateModal */ \"./src/components/_ModalBody/_CreateModal/index.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading, refetch = ref1.refetch;\n    var callCreate = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate)().callCreate;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle, setBody = ref2.setBody, close = ref2.close;\n    var createItem = function(docType, newValue, teamKey) {\n        callCreate({\n            docType: docType,\n            newValue: newValue,\n            refetch: refetch\n        });\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this1));\n        var closeTimeout = setTimeout(function() {\n            close();\n            console.log(\"trigger timeout\");\n        }, 4000);\n        (function() {\n            return clearTimeout(closeTimeout);\n        });\n    };\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n        switch(true){\n            case label === \"team\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateTeam, {\n                    buttonName: \"Create\",\n                    docType: \"team\",\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            case label === \"driver\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal__WEBPACK_IMPORTED_MODULE_7__.CreateDriver, {\n                    buttonName: \"Create\",\n                    docType: \"team\",\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            default:\n                return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(\"Label not Supported - Please contact Breno.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var filteredResult = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var ref4;\n        return myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }));\n    }, [\n        myRes,\n        searchBar\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        return !isLoading && filteredResult.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item,\n                refetch: refetch\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, _this1);\n        });\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, _this),\n                        filteredResult.length > 0 ? mapOptions : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        \"Nothing found.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 19\n                                        }, _this),\n                                        \"Please verify your search.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 108,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 132,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"m85MvhI245LFvJdyqjADg3hn/FA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBUTs7Ozs7O2lDQUNKOzs7Ozs7eUJBRUo7Ozs7OztpQkFDRixpQkFFTiw4REFBQzlELGdEQUFPOzs7O2lCQUFHOzs7OzthQUVULENBQ047Q0FDSCxDQUFDO0dBN0hXYSxJQUFJOztRQUVBUixrREFBUztRQUcwQkYsNkNBQVM7UUFDcENDLDZDQUFTO1FBRWdCRiw0Q0FBUTs7O0FBUjdDVyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xpc3QudHN4PzgwNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlTW9kYWwsIHVzZVNlYXJjaCwgdXNlQ3JlYXRlIH0gZnJvbSBcIkAvaG9va3NcIjtcbmltcG9ydCB7IFNlYXJjaFByb3BzIH0gZnJvbSBcIkAvdHlwaW5nL2FwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcbmltcG9ydCB7IENyZWF0ZVRlYW0sIENyZWF0ZURyaXZlciB9IGZyb20gXCIuL19Nb2RhbEJvZHkvX0NyZWF0ZU1vZGFsXCI7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoQmFyLCBzZXRTZWFyY2hCYXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbGFiZWwgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCB7IGNhbGxTZWFyY2gsIG15UmVzLCBpc0xvYWRpbmcsIHJlZmV0Y2ggfSA9IHVzZVNlYXJjaDxTZWFyY2hQcm9wc1tdPigpO1xuICBjb25zdCB7IGNhbGxDcmVhdGUgfSA9IHVzZUNyZWF0ZSgpO1xuXG4gIGNvbnN0IHsgc2V0SXNPcGVuLCBzZXRUaXRsZSwgc2V0Qm9keSwgY2xvc2UgfSA9IHVzZU1vZGFsKCk7XG5cbiAgY29uc3QgY3JlYXRlSXRlbSA9IChkb2NUeXBlOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcsIHRlYW1LZXk/OnN0cmluZyApID0+IHtcbiAgICBjYWxsQ3JlYXRlKHsgZG9jVHlwZSwgbmV3VmFsdWUsIHJlZmV0Y2ggfSk7XG4gICAgc2V0Qm9keShcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOFwiPlxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IGNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyaWdnZXIgdGltZW91dFwiKTtcbiAgICAgIH0sIDQwMDApO1xuICBcbiAgICAgICgpID0+IGNsZWFyVGltZW91dChjbG9zZVRpbWVvdXQpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5DcmVhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIHNldFRpdGxlKGBDcmVhdGUgYSBuZXcgJHtsYWJlbH0gaXRlbWApO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGxhYmVsID09PSBcInRlYW1cIjpcbiAgICAgICAgc2V0Qm9keShcbiAgICAgICAgICA8Q3JlYXRlVGVhbVxuICAgICAgICAgICAgYnV0dG9uTmFtZT1cIkNyZWF0ZVwiXG4gICAgICAgICAgICBkb2NUeXBlPVwidGVhbVwiXG4gICAgICAgICAgICBoYW5kbGVDbGljaz17Y3JlYXRlSXRlbX1cbiAgICAgICAgICAgIHRpdGxlPVwiTmFtZSB5b3VyIG5ldyB0ZWFtOlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGxhYmVsID09PSBcImRyaXZlclwiOlxuICAgICAgICBzZXRCb2R5KFxuICAgICAgICAgIDxDcmVhdGVEcml2ZXJcbiAgICAgICAgICAgIGJ1dHRvbk5hbWU9XCJDcmVhdGVcIlxuICAgICAgICAgICAgZG9jVHlwZT1cInRlYW1cIlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2NyZWF0ZUl0ZW19XG4gICAgICAgICAgICB0aXRsZT1cIk5hbWUgeW91ciBuZXcgdGVhbTpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRvYXN0Lndhcm4oXCJMYWJlbCBub3QgU3VwcG9ydGVkIC0gUGxlYXNlIGNvbnRhY3QgQnJlbm8uXCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGFiZWwpIHJldHVybjtcblxuICAgIGNhbGxTZWFyY2gobGFiZWwgYXMgc3RyaW5nKTtcbiAgfSwgW2xhYmVsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW15UmVzKSByZXR1cm47XG4gICAgIWlzTG9hZGluZyAmJiBteVJlcz8ubGVuZ3RoID09PSAwICYmIHJvdXRlci5yZXBsYWNlKFwiLzQwNFwiKTtcbiAgICBjb25zb2xlLmxvZyhteVJlcyk7XG4gIH0sIFtteVJlcywgaXNMb2FkaW5nXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRSZXN1bHQgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBteVJlcyAmJlxuICAgICAgWy4uLm15UmVzXT8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hCYXIgPT09IFwiXCIpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGl0ZW0ubmFtZSB8fCBpdGVtLm1vZGVsKVxuICAgICAgICAgICAgPy5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLnNsaWNlKDAsIHNlYXJjaEJhci5sZW5ndGgpXG4gICAgICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCkgPT09IHNlYXJjaEJhci50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICBbbXlSZXMsIHNlYXJjaEJhcl1cbiAgKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgZmlsdGVyZWRSZXN1bHQhLm1hcCgoaXRlbTogU2VhcmNoUHJvcHMpID0+IChcbiAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbVtcIkBrZXlcIl19IGl0ZW09e2l0ZW19IHJlZmV0Y2g9e3JlZmV0Y2h9IC8+XG4gICAgICApKSxcbiAgICBbbXlSZXMsIGlzTG9hZGluZywgc2VhcmNoQmFyXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIHB5LTEyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LVsxMTM0cHhdIG14LWF1dG9cIj5cbiAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGFuaW1hdGlvbjogXCJmYWRlSW4gLjdzXCIgfX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPEZvcm0gc2VhcmNoQmFyPXtzZWFyY2hCYXJ9IHNldFNlYXJjaEJhcj17c2V0U2VhcmNoQmFyfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyB3LWZ1bGwgbXQtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuQ3JlYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVs3OHB4XSB3LWZ1bGwgcHktNCBweC0zIGJvcmRlci1bI2UyZThmMF0gYm9yZGVyIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsPkFkZCBhIG5ldyBpdGVtPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2ZpbHRlcmVkUmVzdWx0IS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBtYXBPcHRpb25zXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzc4cHhdIHctZnVsbCBweS00IHB4LTMgYm9yZGVyLVsjZTJlOGYwXSBib3JkZXIgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBOb3RoaW5nIGZvdW5kLlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgdmVyaWZ5IHlvdXIgc2VhcmNoLlxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZyIsIkxpc3RJdGVtIiwidXNlTW9kYWwiLCJ1c2VTZWFyY2giLCJ1c2VDcmVhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ0b2FzdCIsIkZvcm0iLCJDcmVhdGVUZWFtIiwiQ3JlYXRlRHJpdmVyIiwiTGlzdCIsInNlYXJjaEJhciIsInNldFNlYXJjaEJhciIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJyZWZldGNoIiwiY2FsbENyZWF0ZSIsInNldElzT3BlbiIsInNldFRpdGxlIiwic2V0Qm9keSIsImNsb3NlIiwiY3JlYXRlSXRlbSIsImRvY1R5cGUiLCJuZXdWYWx1ZSIsInRlYW1LZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJjbG9zZVRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImNsZWFyVGltZW91dCIsIm9wZW5DcmVhdGUiLCJidXR0b25OYW1lIiwiaGFuZGxlQ2xpY2siLCJ0aXRsZSIsIndhcm4iLCJsZW5ndGgiLCJyZXBsYWNlIiwiZmlsdGVyZWRSZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsIm1vZGVsIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcE9wdGlvbnMiLCJtYXAiLCJzdHlsZSIsImFuaW1hdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbWFsbCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});