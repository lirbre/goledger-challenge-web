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

/***/ "./src/components/form.tsx":
/*!*********************************!*\
  !*** ./src/components/form.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var searchBar = param.searchBar, setSearchBar = param.setSearchBar;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), error = ref[0], setError = ref[1];\n    var handleChange = function(e) {\n        if (e.target.value.split(\"\").length > 100) {\n            setError(true);\n        } else {\n            setError(false);\n        }\n        setSearchBar(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-16\",\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                className: \"text-[#9e2e2e] transition-all\",\n                children: \"M\\xe1ximo de 100 caracteres ultrapassado.\"\n            }, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/form.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex mt-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        className: \"w-0 h-0 -m-[1px] absolute break-normal overflow-hidden\",\n                        children: \"Pesquisar por\"\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/form.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"search--input\",\n                        type: \"text\",\n                        className: \"border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]\",\n                        placeholder: \"Pesquisar ...\",\n                        onChange: function(e) {\n                            return handleChange(e);\n                        },\n                        value: searchBar,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/form.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/form.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/form.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Form, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUtlOztBQU9SLElBQU1DLElBQUksR0FBRyxnQkFBNEM7UUFBekNDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxZQUFZLFNBQVpBLFlBQVk7O0lBQzVDLElBQTBCSCxHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLENBQUMsRUFicEQsS0FhYyxHQUFjQSxHQUF3QixHQUF0QyxFQWJkLFFBYXdCLEdBQUlBLEdBQXdCLEdBQTVCO0lBRXRCLElBQU1NLFlBQVksR0FBRyxTQUFDQyxDQUFnQyxFQUFLO1FBQ3pELElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUN6Q04sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCLE1BQU07WUFDTEEsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBRURGLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzlCO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7WUFDaENULEtBQUssa0JBQ0osOERBQUNVLE9BQUs7Z0JBQUNELFNBQVMsRUFBQywrQkFBK0I7MEJBQUMsMkNBRWpEOzs7OztxQkFBUTswQkFFViw4REFBQ0UsTUFBSTtnQkFBQ0YsU0FBUyxFQUFDLGNBQWM7O2tDQUM1Qiw4REFBQ0MsT0FBSzt3QkFBQ0QsU0FBUyxFQUFDLHdEQUF3RDtrQ0FBQyxlQUUxRTs7Ozs7NkJBQVE7a0NBQ1IsOERBQUNHLE9BQUs7d0JBQ0pDLEVBQUUsRUFBQyxlQUFlO3dCQUNsQkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hMLFNBQVMsRUFBQyx1S0FBdUs7d0JBQ2pMTSxXQUFXLEVBQUMsZUFBZTt3QkFDM0JDLFFBQVEsRUFBRSxTQUFDYixDQUFDO21DQUFLRCxZQUFZLENBQUNDLENBQUMsQ0FBQzt5QkFBQTt3QkFDaENFLEtBQUssRUFBRVAsU0FBUzt3QkFDaEJtQixRQUFROzs7Ozs2QkFDUjs7Ozs7O3FCQUNHOzs7Ozs7YUFDSCxDQUNOO0NBQ0gsQ0FBQztHQXBDV3BCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mb3JtLnRzeD9jYTVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZUV2ZW50LFxuICBEaXNwYXRjaCxcbiAgU2V0U3RhdGVBY3Rpb24sXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XG4gIHNlYXJjaEJhcjogc3RyaW5nO1xuICBzZXRTZWFyY2hCYXI6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xufVxuXG5leHBvcnQgY29uc3QgRm9ybSA9ICh7IHNlYXJjaEJhciwgc2V0U2VhcmNoQmFyIH06IEZvcm1Qcm9wcykgPT4ge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUuc3BsaXQoXCJcIikubGVuZ3RoID4gMTAwKSB7XG4gICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgIH1cblxuICAgIHNldFNlYXJjaEJhcihlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC0xNlwiPlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtWyM5ZTJlMmVdIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgTcOheGltbyBkZSAxMDAgY2FyYWN0ZXJlcyB1bHRyYXBhc3NhZG8uXG4gICAgICAgIDwvc21hbGw+XG4gICAgICApfVxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBtdC1hdXRvXCI+XG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ3LTAgaC0wIC1tLVsxcHhdIGFic29sdXRlIGJyZWFrLW5vcm1hbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICBQZXNxdWlzYXIgcG9yXG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwic2VhcmNoLS1pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1bI2UyZThmMF0gYmctWyNmZmZdIGJvcmRlciBoLVs0MnB4XSB3LWZ1bGwgcm91bmRlZC1sLVs0cHhdIHB4LTMgcHktMiB0ZXh0LVsjNGE1NTY4XSB0ZXh0LXNtIGZvbnQtdGhpbiBmb2N1czpvdXRsaW5lLWRvdHRlZCBvdXRsaW5lLVsxcHhdIG91dGxpbmUtb2Zmc2V0LVstMnB4XVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXIgLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICB2YWx1ZT17c2VhcmNoQmFyfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybSIsInNlYXJjaEJhciIsInNldFNlYXJjaEJhciIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpdCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInNtYWxsIiwiZm9ybSIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/form.tsx\n");

/***/ }),

/***/ "./src/components/list.tsx":
/*!*********************************!*\
  !*** ./src/components/list.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form */ \"./src/components/form.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar List = function() {\n    var _this1 = _this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), searchBar = ref3[0], setSearchBar = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var label = router.query.label;\n    var ref1 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch)(), callSearch = ref1.callSearch, myRes = ref1.myRes, isLoading = ref1.isLoading;\n    var ref2 = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useModal)(), setIsOpen = ref2.setIsOpen, setTitle = ref2.setTitle;\n    var openCreate = function() {\n        setIsOpen(true);\n        setTitle(\"Create a new \".concat(label, \" item\"));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!label) return;\n        callSearch(label);\n    }, [\n        label\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!myRes) return;\n        !isLoading && (myRes === null || myRes === void 0 ? void 0 : myRes.length) === 0 && router.replace(\"/404\");\n        console.log(myRes);\n    }, [\n        myRes,\n        isLoading\n    ]);\n    var mapOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function() {\n        var _this2 = _this1;\n        var ref4;\n        return !isLoading && myRes && ((ref4 = _toConsumableArray(myRes)) === null || ref4 === void 0 ? void 0 : ref4.filter(function(item) {\n            var ref;\n            if (searchBar === \"\") return true;\n            return ((ref = item.name || item.model) === null || ref === void 0 ? void 0 : ref.split(\"\").slice(0, searchBar.length).join(\"\").toLowerCase()) === searchBar.toLowerCase();\n        }).map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n                item: item\n            }, item[\"@key\"], false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                lineNumber: 50,\n                columnNumber: 11\n            }, _this2);\n        }));\n    }, [\n        myRes,\n        isLoading,\n        searchBar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto\",\n        children: !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                animation: \"fadeIn .7s\"\n            },\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                    searchBar: searchBar,\n                    setSearchBar: setSearchBar\n                }, void 0, false, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openCreate,\n                            className: \"h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Add a new item\"\n                            }, void 0, false, {\n                                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, _this),\n                        mapOptions\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 58,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Loading, {}, void 0, false, {\n            fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/list.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(List, \"YTmmmrmCdksJiE4jWA4r5e17Eow=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useSearch,\n        _hooks__WEBPACK_IMPORTED_MODULE_2__.useModal\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQUVQLFNBQVM7S0FBQyxDQUM5QjtJQUVELHFCQUNFLDhEQUFDeUIsS0FBRztRQUFDQyxTQUFTLEVBQUMsb0VBQW9FO2tCQUNoRixDQUFDbkIsU0FBUyxpQkFDVCw4REFBQ2tCLEtBQUc7WUFBQ0UsS0FBSyxFQUFFO2dCQUFFQyxTQUFTLEVBQUUsWUFBWTthQUFFO1lBQUVGLFNBQVMsRUFBQyxRQUFROzs4QkFDekQsOERBQUM1Qix1Q0FBSTtvQkFBQ0UsU0FBUyxFQUFFQSxTQUFTO29CQUFFQyxZQUFZLEVBQUVBLFlBQVk7Ozs7O3lCQUFJOzhCQUMxRCw4REFBQ3dCLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxtREFBbUQ7O3NDQUNoRSw4REFBQ0csUUFBTTs0QkFDTEMsT0FBTyxFQUFFcEIsVUFBVTs0QkFDbkJnQixTQUFTLEVBQUMsc0pBQXNKO3NDQUVoSyw0RUFBQ0ssT0FBSzswQ0FBQyxnQkFBYzs7Ozs7cUNBQVE7Ozs7O2lDQUN0Qjt3QkFDUmhCLFVBQVU7Ozs7Ozt5QkFDUDs7Ozs7O2lCQUNGLGlCQUVOLDhEQUFDekIsZ0RBQU87Ozs7aUJBQUc7Ozs7O2FBRVQsQ0FDTjtDQUNILENBQUM7R0FsRVdTLElBQUk7O1FBRUFMLGtEQUFTO1FBRWlCRCw2Q0FBUztRQUNsQkQsNENBQVE7OztBQUw3Qk8sS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9saXN0LnRzeD84MDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZU1vZGFsLCB1c2VTZWFyY2ggfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgU2VhcmNoUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoQmFyLCBzZXRTZWFyY2hCYXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbGFiZWwgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBjYWxsU2VhcmNoLCBteVJlcywgaXNMb2FkaW5nIH0gPSB1c2VTZWFyY2g8U2VhcmNoUHJvcHNbXT4oKTtcbiAgY29uc3QgeyBzZXRJc09wZW4sIHNldFRpdGxlIH0gPSB1c2VNb2RhbCgpO1xuXG4gIGNvbnN0IG9wZW5DcmVhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIHNldFRpdGxlKGBDcmVhdGUgYSBuZXcgJHtsYWJlbH0gaXRlbWApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYWJlbCkgcmV0dXJuO1xuXG4gICAgY2FsbFNlYXJjaChsYWJlbCBhcyBzdHJpbmcpO1xuICB9LCBbbGFiZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbXlSZXMpIHJldHVybjtcbiAgICAhaXNMb2FkaW5nICYmIG15UmVzPy5sZW5ndGggPT09IDAgJiYgcm91dGVyLnJlcGxhY2UoXCIvNDA0XCIpO1xuICAgIGNvbnNvbGUubG9nKG15UmVzKTtcbiAgfSwgW215UmVzLCBpc0xvYWRpbmddKTtcblxuICBjb25zdCBtYXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgbXlSZXMgJiZcbiAgICAgIFsuLi5teVJlc11cbiAgICAgICAgPy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoc2VhcmNoQmFyID09PSBcIlwiKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaXRlbS5uYW1lIHx8IGl0ZW0ubW9kZWwpXG4gICAgICAgICAgICAgID8uc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIHNlYXJjaEJhci5sZW5ndGgpXG4gICAgICAgICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpID09PSBzZWFyY2hCYXIudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoKGl0ZW06IFNlYXJjaFByb3BzKSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtIGtleT17aXRlbVtcIkBrZXlcIl19IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICkpLFxuICAgIFtteVJlcywgaXNMb2FkaW5nLCBzZWFyY2hCYXJdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWF4LXctWzExMzRweF0gbXgtYXV0b1wiPlxuICAgICAgeyFpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYW5pbWF0aW9uOiBcImZhZGVJbiAuN3NcIiB9fSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8Rm9ybSBzZWFyY2hCYXI9e3NlYXJjaEJhcn0gc2V0U2VhcmNoQmFyPXtzZXRTZWFyY2hCYXJ9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHctZnVsbCBtdC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5DcmVhdGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzc4cHhdIHctZnVsbCBweS00IHB4LTMgYm9yZGVyLVsjZTJlOGYwXSBib3JkZXIgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c21hbGw+QWRkIGEgbmV3IGl0ZW08L3NtYWxsPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7bWFwT3B0aW9uc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZyIsIkxpc3RJdGVtIiwidXNlTW9kYWwiLCJ1c2VTZWFyY2giLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJGb3JtIiwiTGlzdCIsInNlYXJjaEJhciIsInNldFNlYXJjaEJhciIsInJvdXRlciIsImxhYmVsIiwicXVlcnkiLCJjYWxsU2VhcmNoIiwibXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc09wZW4iLCJzZXRUaXRsZSIsIm9wZW5DcmVhdGUiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIm1hcE9wdGlvbnMiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsIm1vZGVsIiwic3BsaXQiLCJzbGljZSIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYW5pbWF0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInNtYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/list.tsx\n");

/***/ })

});