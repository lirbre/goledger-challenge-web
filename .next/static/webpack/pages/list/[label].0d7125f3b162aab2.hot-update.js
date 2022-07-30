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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\n/* harmony import */ var _ModalBody_CreateModal_team__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_ModalBody/_CreateModal/team */ \"./src/components/_ModalBody/_CreateModal/team.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading, refetch = ref1.refetch;\n    var callCreate = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate)().callCreate;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle, setBody = ref2.setBody;\n    var createItem = function(docType, newValue) {\n        callCreate({\n            docType: docType,\n            newValue: newValue,\n            refetch: refetch\n        });\n    };\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n        switch(true){\n            case label === \"team\":\n                setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalBody_CreateModal_team__WEBPACK_IMPORTED_MODULE_7__.CreateTeam, {\n                    buttonName: \"Create\",\n                    docType: label,\n                    handleClick: createItem,\n                    title: \"Name your new team:\"\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this1));\n                break;\n            default:\n                return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(\"Label not Supported - Please contact Breno.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var filteredResult = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var ref4;\n        return myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }));\n    }, [\n        myRes,\n        searchBar\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        return !isLoading && filteredResult.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item,\n                refetch: refetch\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, _this1);\n        });\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, _this),\n                        filteredResult.length > 0 ? mapOptions : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        \"Nothing found.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, _this),\n                                        \"Please verify your search.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 86,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 110,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"MRcm9c/zXzFQF8JihkhQTggopB0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useCreate,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksRUFBRUEsWUFBWTs7Ozs7eUJBQUk7OEJBQzFELDhEQUFDbUMsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG1EQUFtRDs7c0NBQ2hFLDhEQUFDRyxRQUFNOzRCQUNMQyxPQUFPLEVBQUV6QixVQUFVOzRCQUNuQnFCLFNBQVMsRUFBQyxzSkFBc0o7c0NBRWhLLDRFQUFDSyxPQUFLOzBDQUFDLGdCQUFjOzs7OztxQ0FBUTs7Ozs7aUNBQ3RCO3dCQUNSakIsY0FBYyxDQUFFSixNQUFNLEdBQUcsQ0FBQyxHQUN6QmEsVUFBVSxpQkFFViw4REFBQ0UsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHNKQUFzSjs7Z0NBQ2xLLEdBQUc7OENBQ0osOERBQUNLLE9BQUs7b0NBQUNMLFNBQVMsRUFBQyxhQUFhOzt3Q0FBQyxnQkFFN0I7c0RBQUEsOERBQUNNLElBQUU7Ozs7aURBQUc7d0NBQUEsNEJBRVI7Ozs7Ozt5Q0FBUTs7Ozs7O2lDQUNKOzs7Ozs7eUJBRUo7Ozs7OztpQkFDRixpQkFFTiw4REFBQ3hELGdEQUFPOzs7O2lCQUFHOzs7OzthQUVULENBQ047Q0FDSCxDQUFDO0dBdkdXWSxJQUFJOztRQUVBUCxrREFBUztRQUcwQkYsNkNBQVM7UUFDcENDLDZDQUFTO1FBRVNGLDRDQUFROzs7QUFSdENVLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC50c3g/ODA0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCwgdXNlU2VhcmNoLCB1c2VDcmVhdGUgfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgU2VhcmNoUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0IHsgQ3JlYXRlVGVhbSB9IGZyb20gXCIuL19Nb2RhbEJvZHkvX0NyZWF0ZU1vZGFsL3RlYW1cIjtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hCYXIsIHNldFNlYXJjaEJhcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBsYWJlbCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHsgY2FsbFNlYXJjaCwgbXlSZXMsIGlzTG9hZGluZywgcmVmZXRjaCB9ID0gdXNlU2VhcmNoPFNlYXJjaFByb3BzW10+KCk7XG4gIGNvbnN0IHsgY2FsbENyZWF0ZSB9ID0gdXNlQ3JlYXRlKCk7XG5cbiAgY29uc3QgeyBzZXRJc09wZW4sIHNldFRpdGxlLCBzZXRCb2R5IH0gPSB1c2VNb2RhbCgpO1xuXG4gIGNvbnN0IGNyZWF0ZUl0ZW0gPSAoZG9jVHlwZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY2FsbENyZWF0ZSh7IGRvY1R5cGUsIG5ld1ZhbHVlLCByZWZldGNoIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5DcmVhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIHNldFRpdGxlKGBDcmVhdGUgYSBuZXcgJHtsYWJlbH0gaXRlbWApO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGxhYmVsID09PSBcInRlYW1cIjpcbiAgICAgICAgc2V0Qm9keShcbiAgICAgICAgICA8Q3JlYXRlVGVhbVxuICAgICAgICAgICAgYnV0dG9uTmFtZT1cIkNyZWF0ZVwiXG4gICAgICAgICAgICBkb2NUeXBlPXtsYWJlbCBhcyBzdHJpbmd9XG4gICAgICAgICAgICBoYW5kbGVDbGljaz17Y3JlYXRlSXRlbX1cbiAgICAgICAgICAgIHRpdGxlPVwiTmFtZSB5b3VyIG5ldyB0ZWFtOlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdG9hc3Qud2FybihcIkxhYmVsIG5vdCBTdXBwb3J0ZWQgLSBQbGVhc2UgY29udGFjdCBCcmVuby5cIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYWJlbCkgcmV0dXJuO1xuXG4gICAgY2FsbFNlYXJjaChsYWJlbCBhcyBzdHJpbmcpO1xuICB9LCBbbGFiZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbXlSZXMpIHJldHVybjtcbiAgICAhaXNMb2FkaW5nICYmIG15UmVzPy5sZW5ndGggPT09IDAgJiYgcm91dGVyLnJlcGxhY2UoXCIvNDA0XCIpO1xuICAgIGNvbnNvbGUubG9nKG15UmVzKTtcbiAgfSwgW215UmVzLCBpc0xvYWRpbmddKTtcblxuICBjb25zdCBmaWx0ZXJlZFJlc3VsdCA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIG15UmVzICYmXG4gICAgICBbLi4ubXlSZXNdPy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHNlYXJjaEJhciA9PT0gXCJcIikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoaXRlbS5uYW1lIHx8IGl0ZW0ubW9kZWwpXG4gICAgICAgICAgICA/LnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAuc2xpY2UoMCwgc2VhcmNoQmFyLmxlbmd0aClcbiAgICAgICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKSA9PT0gc2VhcmNoQmFyLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgIFtteVJlcywgc2VhcmNoQmFyXVxuICApO1xuXG4gIGNvbnN0IG1hcE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICAhaXNMb2FkaW5nICYmXG4gICAgICBmaWx0ZXJlZFJlc3VsdCEubWFwKChpdGVtOiBTZWFyY2hQcm9wcykgPT4gKFxuICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpdGVtW1wiQGtleVwiXX0gaXRlbT17aXRlbX0gcmVmZXRjaD17cmVmZXRjaH0gLz5cbiAgICAgICkpLFxuICAgIFtteVJlcywgaXNMb2FkaW5nLCBzZWFyY2hCYXJdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWF4LXctWzExMzRweF0gbXgtYXV0b1wiPlxuICAgICAgeyFpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYW5pbWF0aW9uOiBcImZhZGVJbiAuN3NcIiB9fSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8Rm9ybSBzZWFyY2hCYXI9e3NlYXJjaEJhcn0gc2V0U2VhcmNoQmFyPXtzZXRTZWFyY2hCYXJ9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHctZnVsbCBtdC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5DcmVhdGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzc4cHhdIHctZnVsbCBweS00IHB4LTMgYm9yZGVyLVsjZTJlOGYwXSBib3JkZXIgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c21hbGw+QWRkIGEgbmV3IGl0ZW08L3NtYWxsPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7ZmlsdGVyZWRSZXN1bHQhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIG1hcE9wdGlvbnNcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNzhweF0gdy1mdWxsIHB5LTQgcHgtMyBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIE5vdGhpbmcgZm91bmQuXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSB2ZXJpZnkgeW91ciBzZWFyY2guXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiTGlzdEl0ZW0iLCJ1c2VNb2RhbCIsInVzZVNlYXJjaCIsInVzZUNyZWF0ZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInRvYXN0IiwiRm9ybSIsIkNyZWF0ZVRlYW0iLCJMaXN0Iiwic2VhcmNoQmFyIiwic2V0U2VhcmNoQmFyIiwicm91dGVyIiwibGFiZWwiLCJxdWVyeSIsImNhbGxTZWFyY2giLCJteVJlcyIsImlzTG9hZGluZyIsInJlZmV0Y2giLCJjYWxsQ3JlYXRlIiwic2V0SXNPcGVuIiwic2V0VGl0bGUiLCJzZXRCb2R5IiwiY3JlYXRlSXRlbSIsImRvY1R5cGUiLCJuZXdWYWx1ZSIsIm9wZW5DcmVhdGUiLCJidXR0b25OYW1lIiwiaGFuZGxlQ2xpY2siLCJ0aXRsZSIsIndhcm4iLCJsZW5ndGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkUmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJtb2RlbCIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJtYXBPcHRpb25zIiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhbmltYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic21hbGwiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});