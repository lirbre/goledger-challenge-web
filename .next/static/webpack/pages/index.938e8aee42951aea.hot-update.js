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

/***/ "./src/components/_ModalBody/edit.tsx":
/*!********************************************!*\
  !*** ./src/components/_ModalBody/edit.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EditModal\": function() { return /* binding */ EditModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar EditModal = function(param) {\n    var title = param.title, handleClick = param.handleClick, buttonName = param.buttonName, oldItem = param.oldItem;\n    _s();\n    var close = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)().close;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((oldItem === null || oldItem === void 0 ? void 0 : oldItem.model) || (oldItem === null || oldItem === void 0 ? void 0 : oldItem.name) || \"\"), newItem = ref[0], setNewItem = ref[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        if (newItem.split(\"\").length === 0) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.warn(\"You can't edit to a empty name.\");\n            return;\n        }\n        if (newItem === ((oldItem === null || oldItem === void 0 ? void 0 : oldItem.model) || (oldItem === null || oldItem === void 0 ? void 0 : oldItem.name) || \"\")) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.warn(\"You should change something to edit it.\");\n            return;\n        }\n        handleClick(newItem);\n    };\n    var handleChange = function(e) {\n        if (e.target.value.split(\"\").length > 50) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.warn(\"You should use only 50 characters.\");\n            return;\n        }\n        setNewItem(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: title && title\n            }, void 0, false, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: function(e) {\n                    return handleSubmit(e);\n                },\n                className: \"flex mt-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        className: \"w-0 h-0 -m-[1px] absolute break-normal overflow-hidden\",\n                        children: \"Edite o nome\"\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"search--input\",\n                        type: \"text\",\n                        className: \"border-[#e2e8f0] bg-[#fff] border h-[42px] w-full rounded-l-[4px] px-3 py-2 text-[#4a5568] text-sm font-thin focus:outline-dotted outline-[1px] outline-offset-[-2px]\",\n                        placeholder: \"Editar ...\",\n                        onChange: function(e) {\n                            return handleChange(e);\n                        },\n                        value: newItem,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            return handleSubmit(e);\n                        },\n                        type: \"submit\",\n                        className: \"h-[78px] bg-[#4F9446] w-full py-4 px-3 text-[#fff] font-bold border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                        children: [\n                            buttonName,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return close();\n                        },\n                        type: \"reset\",\n                        className: \"h-[78px] bg-[#ff1e40] w-full py-4 px-3 text-[#fff] font-bold border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lirbre/repos/goledger-challenge-web/src/components/_ModalBody/edit.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(EditModal, \"DaymQm3TOUVZPlVNF2sG6igg+fs=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useModal\n    ];\n});\n_c = EditModal;\nvar _c;\n$RefreshReg$(_c, \"EditModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9fTW9kYWxCb2R5L2VkaXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUM7QUFFc0I7QUFDbEI7O0FBU2hDLElBQU1HLFNBQVMsR0FBRyxnQkFLSDtRQUpwQkMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLFdBQVcsU0FBWEEsV0FBVyxFQUNYQyxVQUFVLFNBQVZBLFVBQVUsRUFDVkMsT0FBTyxTQUFQQSxPQUFPOztJQUVQLElBQU0sS0FBTyxHQUFLUCxnREFBUSxFQUFFLENBQXBCUSxLQUFLO0lBQ2IsSUFBOEJQLEdBRTdCLEdBRjZCQSwrQ0FBUSxDQUNwQ00sQ0FBQUEsT0FBTyxhQUFQQSxPQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxPQUFPLENBQUVFLEtBQUssS0FBSUYsQ0FBQUEsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxPQUFPLENBQUVHLElBQUksS0FBSSxFQUFFLENBQ3RDLEVBckJILE9BbUJnQixHQUFnQlQsR0FFN0IsR0FGYSxFQW5CaEIsVUFtQjRCLEdBQUlBLEdBRTdCLEdBRnlCO0lBSTFCLElBQU1ZLFlBQVksR0FBRyxTQUFDQyxDQUFZLEVBQUs7UUFDckNBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFFbkIsSUFBSSxPQUFRLENBQUVDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQ2Ysc0RBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQzlDLE9BQU87U0FDUjtRQUVELElBQUlTLE9BQU8sS0FBSyxDQUFDSixDQUFBQSxPQUFPLGFBQVBBLE9BQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLE9BQU8sQ0FBRUUsS0FBSyxLQUFJRixDQUFBQSxPQUFPLGFBQVBBLE9BQU8sV0FBTSxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRUcsSUFBSSxLQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZEUixzREFBVSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDdEQsT0FBTztTQUNSO1FBRURHLFdBQVcsQ0FBQ00sT0FBTyxDQUFDLENBQUM7S0FDdEI7SUFFRCxJQUFNUSxZQUFZLEdBQUcsU0FBQ0wsQ0FBZ0MsRUFBSztRQUN6RCxJQUFJQSxDQUFDLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDeENmLHNEQUFVLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUNqRCxPQUFPO1NBQ1I7UUFFRFUsVUFBVSxDQUFDRSxDQUFDLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDNUI7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMseUJBQXlCOzswQkFDdEMsOERBQUNDLE9BQUs7MEJBQUVwQixLQUFLLElBQUlBLEtBQUs7Ozs7O3FCQUFTOzBCQUMvQiw4REFBQ3FCLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRSxTQUFDWixDQUFDOzJCQUFLRCxZQUFZLENBQUNDLENBQUMsQ0FBQztpQkFBQTtnQkFBRVMsU0FBUyxFQUFDLGNBQWM7O2tDQUM5RCw4REFBQ0MsT0FBSzt3QkFBQ0QsU0FBUyxFQUFDLHdEQUF3RDtrQ0FBQyxjQUUxRTs7Ozs7NkJBQVE7a0NBQ1IsOERBQUNJLE9BQUs7d0JBQ0pDLEVBQUUsRUFBQyxlQUFlO3dCQUNsQkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hOLFNBQVMsRUFBQyx1S0FBdUs7d0JBQ2pMTyxXQUFXLEVBQUMsWUFBWTt3QkFDeEJDLFFBQVEsRUFBRSxTQUFDakIsQ0FBQzttQ0FBS0ssWUFBWSxDQUFDTCxDQUFDLENBQUM7eUJBQUE7d0JBQ2hDTyxLQUFLLEVBQUVWLE9BQU87d0JBQ2RxQixRQUFROzs7Ozs2QkFDUjs7Ozs7O3FCQUNHO1lBQUMsR0FBRzswQkFDWCw4REFBQ1YsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7a0NBQ2hDLDhEQUFDVSxRQUFNO3dCQUNMQyxPQUFPLEVBQUUsU0FBQ3BCLENBQUM7bUNBQUtELFlBQVksQ0FBQ0MsQ0FBQyxDQUFDO3lCQUFBO3dCQUMvQmUsSUFBSSxFQUFDLFFBQVE7d0JBQ2JOLFNBQVMsRUFBQyx5TEFBeUw7OzRCQUVsTWpCLFVBQVU7NEJBQUMsR0FDZDs7Ozs7OzZCQUFTO2tDQUNULDhEQUFDMkIsUUFBTTt3QkFDTEMsT0FBTyxFQUFFO21DQUFNMUIsS0FBSyxFQUFFO3lCQUFBO3dCQUN0QnFCLElBQUksRUFBQyxPQUFPO3dCQUNaTixTQUFTLEVBQUMseUxBQXlMO2tDQUNwTSxRQUVEOzs7Ozs2QkFBUzs7Ozs7O3FCQUNMOzs7Ozs7YUFDRixDQUNOO0NBQ0gsQ0FBQztHQXZFV3BCLFNBQVM7O1FBTUZILDRDQUFROzs7QUFOZkcsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9fTW9kYWxCb2R5L2VkaXQudHN4P2I1NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgU2VhcmNoUHJvcHMgfSBmcm9tIFwiQC90eXBpbmcvYXBpXCI7XG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW50ZXJmYWNlIEVkaXRNb2RhbFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGhhbmRsZUNsaWNrKG5ld1ZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuICBidXR0b25OYW1lOiBzdHJpbmc7XG4gIG9sZEl0ZW06IFNlYXJjaFByb3BzO1xufVxuXG5leHBvcnQgY29uc3QgRWRpdE1vZGFsID0gKHtcbiAgdGl0bGUsXG4gIGhhbmRsZUNsaWNrLFxuICBidXR0b25OYW1lLFxuICBvbGRJdGVtLFxufTogRWRpdE1vZGFsUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbG9zZSB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgW25ld0l0ZW0sIHNldE5ld0l0ZW1dID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBvbGRJdGVtPy5tb2RlbCB8fCBvbGRJdGVtPy5uYW1lIHx8ICcnXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICgobmV3SXRlbSkuc3BsaXQoXCJcIikubGVuZ3RoID09PSAwKSB7XG4gICAgICB0b2FzdC53YXJuKFwiWW91IGNhbid0IGVkaXQgdG8gYSBlbXB0eSBuYW1lLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV3SXRlbSA9PT0gKG9sZEl0ZW0/Lm1vZGVsIHx8IG9sZEl0ZW0/Lm5hbWUgfHwgXCJcIikpIHtcbiAgICAgIHRvYXN0Lndhcm4oXCJZb3Ugc2hvdWxkIGNoYW5nZSBzb21ldGhpbmcgdG8gZWRpdCBpdC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sobmV3SXRlbSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLnNwbGl0KFwiXCIpLmxlbmd0aCA+IDUwKSB7XG4gICAgICB0b2FzdC53YXJuKFwiWW91IHNob3VsZCB1c2Ugb25seSA1MCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXROZXdJdGVtKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgIDxzbWFsbD57dGl0bGUgJiYgdGl0bGV9PC9zbWFsbD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBjbGFzc05hbWU9XCJmbGV4IG10LWF1dG9cIj5cbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInctMCBoLTAgLW0tWzFweF0gYWJzb2x1dGUgYnJlYWstbm9ybWFsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIEVkaXRlIG8gbm9tZVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInNlYXJjaC0taW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItWyNlMmU4ZjBdIGJnLVsjZmZmXSBib3JkZXIgaC1bNDJweF0gdy1mdWxsIHJvdW5kZWQtbC1bNHB4XSBweC0zIHB5LTIgdGV4dC1bIzRhNTU2OF0gdGV4dC1zbSBmb250LXRoaW4gZm9jdXM6b3V0bGluZS1kb3R0ZWQgb3V0bGluZS1bMXB4XSBvdXRsaW5lLW9mZnNldC1bLTJweF1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWRpdGFyIC4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgdmFsdWU9e25ld0l0ZW19XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT57XCIgXCJ9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGdhcC00XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfVxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzc4cHhdIGJnLVsjNEY5NDQ2XSB3LWZ1bGwgcHktNCBweC0zIHRleHQtWyNmZmZdIGZvbnQtYm9sZCBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7YnV0dG9uTmFtZX0hXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2UoKX1cbiAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzc4cHhdIGJnLVsjZmYxZTQwXSB3LWZ1bGwgcHktNCBweC0zIHRleHQtWyNmZmZdIGZvbnQtYm9sZCBib3JkZXItWyNlMmU4ZjBdIGJvcmRlciBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlTW9kYWwiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiRWRpdE1vZGFsIiwidGl0bGUiLCJoYW5kbGVDbGljayIsImJ1dHRvbk5hbWUiLCJvbGRJdGVtIiwiY2xvc2UiLCJtb2RlbCIsIm5hbWUiLCJuZXdJdGVtIiwic2V0TmV3SXRlbSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGl0IiwibGVuZ3RoIiwid2FybiIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwic21hbGwiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/_ModalBody/edit.tsx\n");

/***/ }),

/***/ "./src/hooks/useDelete.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useDelete.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useDelete\": function() { return /* binding */ useDelete; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/deleteAsset\";\nvar useDelete = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callDelete = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, key, refetch, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, key = param.key, refetch = param.refetch;\n                        body = {\n                            key: {\n                                \"@assetType\": \"\".concat(docType),\n                                \"@key\": \"\".concat(key)\n                            }\n                        };\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"DELETE\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            setMyRes(res);\n                            console.log(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callDelete(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callDelete: callDelete,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useDelete, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRGVsZXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDLElBQU1DLEdBQUcsR0FDUCwwRUFBMEU7QUFRckUsSUFBTUMsU0FBUyxHQUFHLFdBQVU7O0lBQ2pDLElBQTBCRixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVyxJQUFJLENBQUMsRUFacEQsS0FZYyxHQUFjQSxHQUF3QixHQUF0QyxFQVpkLFFBWXdCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLElBQWtDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBVSxJQUFJLENBQUMsRUFiM0QsU0Fha0IsR0FBa0JBLElBQXVCLEdBQXpDLEVBYmxCLFlBYWdDLEdBQUlBLElBQXVCLEdBQTNCO0lBRTlCLElBQU1PLFVBQVU7bUJBQUcsK0xBQXNEO2dCQUE3Q0MsT0FBTyxFQUFFQyxHQUFHLEVBQUVDLE9BQU8sRUFDekNDLElBQUksRUFPSkMsTUFBTTs7Ozt3QkFSY0osT0FBTyxTQUFQQSxPQUFPLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxPQUFPLFNBQVBBLE9BQU87d0JBQ3pDQyxJQUFJLEdBQUc7NEJBQ1hGLEdBQUcsRUFBRTtnQ0FDSCxZQUFZLEVBQUUsRUFBQyxDQUFVLE9BQVJELE9BQU8sQ0FBRTtnQ0FDMUIsTUFBTSxFQUFFLEVBQUMsQ0FBTSxPQUFKQyxHQUFHLENBQUU7NkJBQ2pCO3lCQUNGLENBQUM7d0JBRUlHLE1BQU0sR0FBRzs0QkFDYixjQUFjLEVBQUUsa0JBQWtCO3lCQUNuQyxDQUFDO3dCQUVGQyxLQUFLLENBQUNaLEdBQUcsRUFBRTs0QkFDVGEsTUFBTSxFQUFFLFFBQVE7NEJBQ2hCSCxJQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxJQUFJLENBQUM7NEJBQzFCTSxPQUFPLEVBQUVMLE1BQU07eUJBQ2hCLENBQUMsQ0FDQ00sSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUNBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO3lCQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7NEJBQ2JmLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDLENBQUM7NEJBQ2RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUM7eUJBQ2pCLENBQUMsQ0FDREksS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUNBQUtILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLHdCQUF3QixFQUFFRCxHQUFHLENBQUM7eUJBQUEsQ0FBQyxDQUM1REUsT0FBTyxDQUFDLFdBQU07NEJBQ2JwQixZQUFZLENBQUMsS0FBSyxDQUFDOzRCQUVuQixJQUFNcUIsV0FBVyxHQUFHQyxVQUFVLENBQUMsV0FBTTtnQ0FDakNsQixPQUFPLENBQUNGLE9BQU8sQ0FBQyxDQUFDOzZCQUNsQixFQUFFLEdBQUcsQ0FBQzs0QkFFUDt1Q0FBTXFCLFlBQVksQ0FBQ0YsV0FBVyxDQUFDOzZCQUFBLEVBQUM7eUJBQ25DLENBQUMsQ0FBQzs7Ozs7O1NBQ047d0JBaENLcEIsVUFBVTs7O09BZ0NmO0lBRUQsT0FBTztRQUFFQSxVQUFVLEVBQVZBLFVBQVU7UUFBRUYsU0FBUyxFQUFUQSxTQUFTO1FBQUVGLEtBQUssRUFBTEEsS0FBSztLQUFFLENBQUM7Q0FDekMsQ0FBQztHQXZDV0QsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlRGVsZXRlLnRzeD83YzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVybCA9XG4gIFwiaHR0cDovL2VjMi0xMDAtMjUtMTM2LTEyOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbS9hcGkvaW52b2tlL2RlbGV0ZUFzc2V0XCI7XG5cbmludGVyZmFjZSBDYWxsRGVsZXRlUHJvcHMge1xuICBkb2NUeXBlOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xuICByZWZldGNoKHR5cGU6IHN0cmluZyk6IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IHVzZURlbGV0ZSA9IDxULD4oKSA9PiB7XG4gIGNvbnN0IFtteVJlcywgc2V0TXlSZXNdID0gdXNlU3RhdGU8VCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3QgY2FsbERlbGV0ZSA9IGFzeW5jICh7IGRvY1R5cGUsIGtleSwgcmVmZXRjaCB9OiBDYWxsRGVsZXRlUHJvcHMpID0+IHtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAga2V5OiB7XG4gICAgICAgIFwiQGFzc2V0VHlwZVwiOiBgJHtkb2NUeXBlfWAsXG4gICAgICAgIFwiQGtleVwiOiBgJHtrZXl9YCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlciA9IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH07XG5cbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgaGVhZGVyczogaGVhZGVyLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRNeVJlcyhyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJzb21ldGhpbmcgaGFwcGVuZWQgLT4gXCIsIGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcblxuICAgICAgICBjb25zdCBjYWxsUmVmZXRjaCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVmZXRjaChkb2NUeXBlKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgXG4gICAgICAgICAgKCkgPT4gY2xlYXJUaW1lb3V0KGNhbGxSZWZldGNoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGNhbGxEZWxldGUsIGlzTG9hZGluZywgbXlSZXMgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1cmwiLCJ1c2VEZWxldGUiLCJteVJlcyIsInNldE15UmVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2FsbERlbGV0ZSIsImRvY1R5cGUiLCJrZXkiLCJyZWZldGNoIiwiYm9keSIsImhlYWRlciIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiZmluYWxseSIsImNhbGxSZWZldGNoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useDelete.tsx\n");

/***/ })

});