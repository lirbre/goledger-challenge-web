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

/***/ "./src/hooks/useEdit.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useEdit.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useEdit\": function() { return /* binding */ useEdit; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/updateAsset\";\nvar useEdit = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callEdit = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, key, newValue, refetch, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, key = param.key, newValue = param.newValue, refetch = param.refetch;\n                        ;\n                        console.log(newValue);\n                        if (docType === \"car\") {\n                            body = {\n                                update: {\n                                    \"@assetType\": \"\".concat(docType),\n                                    \"@key\": \"\".concat(key),\n                                    model: \"\".concat(newValue),\n                                    \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\",\n                                    driver: {\n                                        \"@key\": 3\n                                    }\n                                }\n                            };\n                        } else {\n                            body = {\n                                update: {\n                                    \"@assetType\": \"\".concat(docType),\n                                    \"@key\": \"\".concat(key),\n                                    name: \"\".concat(newValue),\n                                    \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\"\n                                }\n                            };\n                        }\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"PUT\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"new value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callEdit(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callEdit: callEdit,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useEdit, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQSxFQUFDO3lCQUNqQyxDQUFDLENBQUM7Ozs7OztTQUNOO3dCQS9DS3pCLFFBQVE7OztPQStDYjtJQUVELE9BQU87UUFBRUEsUUFBUSxFQUFSQSxRQUFRO1FBQUVGLFNBQVMsRUFBVEEsU0FBUztRQUFFRixLQUFLLEVBQUxBLEtBQUs7S0FBRSxDQUFDO0NBQ3ZDLENBQUM7R0F0RFdELE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUVkaXQudHN4PzczNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXJsID1cbiAgXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9pbnZva2UvdXBkYXRlQXNzZXRcIjtcblxuaW50ZXJmYWNlIENhbGxFZGl0UHJvcHMge1xuICAgIGRvY1R5cGU6IHN0cmluZ1xuICAgIGtleTogc3RyaW5nXG4gICAgbmV3VmFsdWU6IHN0cmluZ1xuICAgIHJlZmV0Y2goa2V5OiBzdHJpbmcpOiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCB1c2VFZGl0ID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsRWRpdCA9IGFzeW5jICh7IGRvY1R5cGUsIGtleSwgbmV3VmFsdWUsIHJlZmV0Y2ggfTogQ2FsbEVkaXRQcm9wcykgPT4ge1xuICAgIGxldCBib2R5O1xuXG4gICAgY29uc29sZS5sb2cobmV3VmFsdWUpXG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJjYXJcIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IGAke2RvY1R5cGV9YCxcbiAgICAgICAgICBcIkBrZXlcIjogYCR7a2V5fWAsXG4gICAgICAgICAgbW9kZWw6IGAke25ld1ZhbHVlfWAsXG4gICAgICAgICAgXCJAbGFzdFRvdWNoQnlcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGlyYnJlL1wiLFxuICAgICAgICAgIGRyaXZlcjoge1xuICAgICAgICAgICAgXCJAa2V5XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5ID0ge1xuICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICBcIkBhc3NldFR5cGVcIjogYCR7ZG9jVHlwZX1gLFxuICAgICAgICAgIFwiQGtleVwiOiBgJHtrZXl9YCxcbiAgICAgICAgICBuYW1lOiBgJHtuZXdWYWx1ZX1gLFxuICAgICAgICAgIFwiQGxhc3RUb3VjaEJ5XCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xpcmJyZS9cIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfTtcblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6IFwiUFVUXCIsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLCBoZWFkZXJzOiBoZWFkZXIgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHZhbHVlLCAtPiBcIiwgcmVzKTtcbiAgICAgICAgc2V0TXlSZXMocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcInNvbWV0aGluZyBoYXBwZW5lZCAtPiBcIiwgZXJyKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc3QgY2FsbFJlZmV0Y2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZWZldGNoKGRvY1R5cGUpO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICgpID0+IGNsZWFyVGltZW91dChjYWxsUmVmZXRjaCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBjYWxsRWRpdCwgaXNMb2FkaW5nLCBteVJlcyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVybCIsInVzZUVkaXQiLCJteVJlcyIsInNldE15UmVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2FsbEVkaXQiLCJkb2NUeXBlIiwia2V5IiwibmV3VmFsdWUiLCJyZWZldGNoIiwiYm9keSIsImhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJtb2RlbCIsImRyaXZlciIsIm5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwiZmluYWxseSIsImNhbGxSZWZldGNoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useEdit.tsx\n");

/***/ })

});