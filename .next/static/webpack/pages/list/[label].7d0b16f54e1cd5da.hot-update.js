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

/***/ "./src/hooks/useCreate.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useCreate.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, selectedKey, newPrize, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch, selectedKey = param.selectedKey, newPrize = param.newPrize;\n                        ;\n                        if (docType === \"team\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"team\",\n                                        name: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999)\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"driver\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"driver\",\n                                        name: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999 * 2),\n                                        team: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"car\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"car\",\n                                        model: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999 * 3),\n                                        driver: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"event\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"event\",\n                                        name: newValue,\n                                        prize: newPrize,\n                                        date: date,\n                                        winner: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        console.log(\"try to create -> \", body);\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callCreate: callCreate,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QixHQUFHLEVBQUU7NEJBQ1Q2QixNQUFNLEVBQUUsTUFBTTs0QkFDZGpCLElBQUksRUFBRWtCLElBQUksQ0FBQ0MsU0FBUyxDQUFDbkIsSUFBSSxDQUFDOzRCQUMxQm9CLE9BQU8sRUFBRW5CLE1BQU07eUJBQ2hCLENBQUMsQ0FDQ29CLElBQUksQ0FBQyxTQUFDQyxHQUFHO21DQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTt5QkFBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLOzRCQUNiUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRU8sR0FBRyxDQUFDLENBQUM7NEJBQ3ZDL0IsUUFBUSxDQUFDK0IsR0FBRyxDQUFDLENBQUM7eUJBQ2YsQ0FBQyxDQUNERSxLQUFLLENBQUMsU0FBQ0MsR0FBRzttQ0FBS1gsT0FBTyxDQUFDWSxLQUFLLENBQUMsd0JBQXdCLEVBQUVELEdBQUcsQ0FBQzt5QkFBQSxDQUFDLENBQzVERSxPQUFPLENBQUMsV0FBTTs0QkFDYmxDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFFcEIsSUFBTW1DLFdBQVcsR0FBR0MsVUFBVSxDQUFDLFdBQU07Z0NBQ25DaEMsT0FBTyxDQUFDRixPQUFPLENBQUMsQ0FBQzs2QkFDbEIsRUFBRSxHQUFHLENBQUM7NEJBRVA7dUNBQU1tQyxZQUFZLENBQUNGLFdBQVcsQ0FBQzs2QkFBQSxFQUFDO3lCQUNqQyxDQUFDLENBQUM7Ozs7OztTQUNOO3dCQXZGS2xDLFVBQVU7OztPQXVGZjtJQUVELE9BQU87UUFBRUEsVUFBVSxFQUFWQSxVQUFVO1FBQUVGLFNBQVMsRUFBVEEsU0FBUztRQUFFRixLQUFLLEVBQUxBLEtBQUs7S0FBRSxDQUFDO0NBQ3pDLENBQUM7R0E5RldELFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNyZWF0ZS50c3g/NmEzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1cmwgPVxuICBcImh0dHA6Ly9lYzItMTAwLTI1LTEzNi0xMjguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20vYXBpL2ludm9rZS9jcmVhdGVBc3NldFwiO1xuXG5pbnRlcmZhY2UgQ2FsbENyZWF0ZVByb3BzIHtcbiAgZG9jVHlwZTogc3RyaW5nO1xuICBuZXdWYWx1ZTogc3RyaW5nO1xuICByZWZldGNoKHR5cGU6IHN0cmluZyk6IHZvaWQ7XG4gIHNlbGVjdGVkS2V5Pzogc3RyaW5nO1xuICBuZXdQcml6ZT86IG51bWJlcjtcbiAgZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNyZWF0ZSA9IDxULD4oKSA9PiB7XG4gIGNvbnN0IFtteVJlcywgc2V0TXlSZXNdID0gdXNlU3RhdGU8VCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3QgY2FsbENyZWF0ZSA9IGFzeW5jICh7XG4gICAgZG9jVHlwZSxcbiAgICBuZXdWYWx1ZSxcbiAgICByZWZldGNoLFxuICAgIHNlbGVjdGVkS2V5LFxuICAgIG5ld1ByaXplLFxuICB9OiBDYWxsQ3JlYXRlUHJvcHMpID0+IHtcbiAgICBsZXQgYm9keTtcblxuICAgIGlmIChkb2NUeXBlID09PSBcInRlYW1cIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJ0ZWFtXCIsXG4gICAgICAgICAgICBuYW1lOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGRvY1R5cGUgPT09IFwiZHJpdmVyXCIpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiZHJpdmVyXCIsXG4gICAgICAgICAgICBuYW1lOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDIpLFxuICAgICAgICAgICAgdGVhbTogeyBcIkBrZXlcIjogc2VsZWN0ZWRLZXkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJjYXJcIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJjYXJcIixcbiAgICAgICAgICAgIG1vZGVsOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDMpLFxuICAgICAgICAgICAgZHJpdmVyOiB7IFwiQGtleVwiOiBzZWxlY3RlZEtleSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChkb2NUeXBlID09PSBcImV2ZW50XCIpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIG5hbWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgcHJpemU6IG5ld1ByaXplLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgIHdpbm5lcjogeyBcIkBrZXlcIjogc2VsZWN0ZWRLZXkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRyeSB0byBjcmVhdGUgLT4gXCIsIGJvZHkpO1xuXG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfTtcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgaGVhZGVyczogaGVhZGVyLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdmFsdWUsIC0+IFwiLCByZXMpO1xuICAgICAgICBzZXRNeVJlcyhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwic29tZXRoaW5nIGhhcHBlbmVkIC0+IFwiLCBlcnIpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxSZWZldGNoID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmZXRjaChkb2NUeXBlKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAoKSA9PiBjbGVhclRpbWVvdXQoY2FsbFJlZmV0Y2gpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2FsbENyZWF0ZSwgaXNMb2FkaW5nLCBteVJlcyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVybCIsInVzZUNyZWF0ZSIsIm15UmVzIiwic2V0TXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYWxsQ3JlYXRlIiwiZG9jVHlwZSIsIm5ld1ZhbHVlIiwicmVmZXRjaCIsInNlbGVjdGVkS2V5IiwibmV3UHJpemUiLCJib2R5IiwiaGVhZGVyIiwiYXNzZXQiLCJuYW1lIiwiaWQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsInRlYW0iLCJtb2RlbCIsImRyaXZlciIsInByaXplIiwiZGF0ZSIsIndpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwiZmluYWxseSIsImNhbGxSZWZldGNoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});