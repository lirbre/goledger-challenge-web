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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, selectedKey, prize, date, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch, selectedKey = param.selectedKey, prize = param.prize, date = param.date;\n                        ;\n                        _ctx.t0 = true;\n                        _ctx.next = _ctx.t0 === (docType === \"team\") ? 5 : _ctx.t0 === (docType === \"driver\") ? 7 : _ctx.t0 === (docType === \"car\") ? 9 : 14;\n                        break;\n                    case 5:\n                        body = {\n                            asset: [\n                                {\n                                    \"@assetType\": \"team\",\n                                    name: newValue,\n                                    id: Math.ceil(Math.random() * 100 + 999)\n                                }, \n                            ]\n                        };\n                        return _ctx.abrupt(\"break\", 14);\n                    case 7:\n                        body = {\n                            asset: [\n                                {\n                                    \"@assetType\": \"driver\",\n                                    name: newValue,\n                                    id: Math.ceil(Math.random() * 100 + 999 * 2),\n                                    team: {\n                                        \"@key\": selectedKey\n                                    }\n                                }, \n                            ]\n                        };\n                        return _ctx.abrupt(\"break\", 14);\n                    case 9:\n                        body = {\n                            asset: [\n                                {\n                                    \"@assetType\": \"car\",\n                                    model: newValue,\n                                    id: Math.ceil(Math.random() * 100 + 999 * 3),\n                                    driver: {\n                                        \"@key\": selectedKey\n                                    }\n                                }, \n                            ]\n                        };\n                        if (docType === \"event\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"event\",\n                                        name: newValue,\n                                        prize: prize,\n                                        date: new Date(date).toISOString(),\n                                        winner: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        console.log(\"try to create -> \", body);\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 14:\n                        return _ctx.abrupt(\"return\", {\n                            callCreate: callCreate,\n                            isLoading: isLoading,\n                            myRes: myRes\n                        });\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXJsID1cbiAgXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9pbnZva2UvY3JlYXRlQXNzZXRcIjtcblxuaW50ZXJmYWNlIENhbGxDcmVhdGVQcm9wcyB7XG4gIGRvY1R5cGU6IHN0cmluZztcbiAgbmV3VmFsdWU6IHN0cmluZztcbiAgcmVmZXRjaCh0eXBlOiBzdHJpbmcpOiB2b2lkO1xuICBzZWxlY3RlZEtleT86IHN0cmluZztcbiAgcHJpemU/OiBudW1iZXI7XG4gIGRhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VDcmVhdGUgPSA8VCw+KCkgPT4ge1xuICBjb25zdCBbbXlSZXMsIHNldE15UmVzXSA9IHVzZVN0YXRlPFQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIGNvbnN0IGNhbGxDcmVhdGUgPSBhc3luYyAoe1xuICAgIGRvY1R5cGUsXG4gICAgbmV3VmFsdWUsXG4gICAgcmVmZXRjaCxcbiAgICBzZWxlY3RlZEtleSxcbiAgICBwcml6ZSxcbiAgICBkYXRlXG4gIH06IENhbGxDcmVhdGVQcm9wcykgPT4ge1xuICAgIGxldCBib2R5O1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSAoZG9jVHlwZSA9PT0gXCJ0ZWFtXCIpOlxuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJ0ZWFtXCIsXG4gICAgICAgICAgICBuYW1lOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgYnJlYWs7XG5cbiAgICBjYXNlIChkb2NUeXBlID09PSBcImRyaXZlclwiKTpcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiZHJpdmVyXCIsXG4gICAgICAgICAgICBuYW1lOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDIpLFxuICAgICAgICAgICAgdGVhbTogeyBcIkBrZXlcIjogc2VsZWN0ZWRLZXkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICBicmVhaztcblxuICAgIGNhc2UgKGRvY1R5cGUgPT09IFwiY2FyXCIpOlxuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJjYXJcIixcbiAgICAgICAgICAgIG1vZGVsOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDMpLFxuICAgICAgICAgICAgZHJpdmVyOiB7IFwiQGtleVwiOiBzZWxlY3RlZEtleSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIFxuXG4gICAgaWYgKGRvY1R5cGUgPT09IFwiZXZlbnRcIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgbmFtZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBwcml6ZTogcHJpemUsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlISkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIHdpbm5lcjogeyBcIkBrZXlcIjogc2VsZWN0ZWRLZXkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRyeSB0byBjcmVhdGUgLT4gXCIsIGJvZHkpO1xuXG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfTtcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgaGVhZGVyczogaGVhZGVyLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdmFsdWUsIC0+IFwiLCByZXMpO1xuICAgICAgICBzZXRNeVJlcyhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwic29tZXRoaW5nIGhhcHBlbmVkIC0+IFwiLCBlcnIpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxSZWZldGNoID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmZXRjaChkb2NUeXBlKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAoKSA9PiBjbGVhclRpbWVvdXQoY2FsbFJlZmV0Y2gpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2FsbENyZWF0ZSwgaXNMb2FkaW5nLCBteVJlcyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVybCIsInVzZUNyZWF0ZSIsIm15UmVzIiwic2V0TXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYWxsQ3JlYXRlIiwiZG9jVHlwZSIsIm5ld1ZhbHVlIiwicmVmZXRjaCIsInNlbGVjdGVkS2V5IiwicHJpemUiLCJkYXRlIiwiYm9keSIsImhlYWRlciIsImFzc2V0IiwibmFtZSIsImlkIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJ0ZWFtIiwibW9kZWwiLCJkcml2ZXIiLCJEYXRlIiwidG9JU09TdHJpbmciLCJ3aW5uZXIiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImZpbmFsbHkiLCJjYWxsUmVmZXRjaCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});