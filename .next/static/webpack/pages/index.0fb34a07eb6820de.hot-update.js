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

/***/ "./src/hooks/useCreate.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useCreate.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, teamKey, driverKey, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch, teamKey = param.teamKey, driverKey = param.driverKey;\n                        ;\n                        if (docType === \"team\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"team\",\n                                        \"name\": newValue,\n                                        \"id\": Math.ceil(Math.random() * 100 + 999),\n                                        \"team\": {\n                                            \"@key\": teamKey\n                                        }\n                                    }\n                                ]\n                            };\n                        }\n                        if (docType === \"driver\") {\n                            body = {\n                                \"asset\": [\n                                    {\n                                        \"@assetType\": \"driver\",\n                                        \"name\": newValue,\n                                        \"id\": Math.ceil(Math.random() * 100 + 999 * 2),\n                                        \"team\": {\n                                            \"@key\": teamKey\n                                        }\n                                    }\n                                ]\n                            };\n                        }\n                        if (docType === \"car\") {\n                            body = {\n                                \"asset\": [\n                                    {\n                                        \"@assetType\": \"car\",\n                                        \"model\": newValue,\n                                        \"id\": Math.ceil(Math.random() * 100 + 999 * 3),\n                                        \"driver\": {\n                                            \"@key\": driverKey\n                                        }\n                                    }\n                                ]\n                            };\n                        }\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callCreate: callCreate,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUN2Q3JCLFFBQVEsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDO3lCQUNmLENBQUMsQ0FDREksS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUNBQUtILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLHdCQUF3QixFQUFFRCxHQUFHLENBQUM7eUJBQUEsQ0FBQyxDQUM1REUsT0FBTyxDQUFDLFdBQU07NEJBQ2IxQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRXBCLElBQU0yQixXQUFXLEdBQUdDLFVBQVUsQ0FBQyxXQUFNO2dDQUNuQ3hCLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLENBQUM7NkJBQ2xCLEVBQUUsR0FBRyxDQUFDOzRCQUVQO3VDQUFNMkIsWUFBWSxDQUFDRixXQUFXLENBQUM7NkJBQUEsRUFBQzt5QkFDakMsQ0FBQyxDQUFDOzs7Ozs7U0FDTjt3QkFwRUsxQixVQUFVOzs7T0FvRWY7SUFFRCxPQUFPO1FBQUVBLFVBQVUsRUFBVkEsVUFBVTtRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRUYsS0FBSyxFQUFMQSxLQUFLO0tBQUUsQ0FBQztDQUN6QyxDQUFDO0dBM0VXRCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VDcmVhdGUudHN4PzZhMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXJsID1cbiAgXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9pbnZva2UvY3JlYXRlQXNzZXRcIjtcblxuaW50ZXJmYWNlIENhbGxDcmVhdGVQcm9wcyB7XG4gIGRvY1R5cGU6IHN0cmluZztcbiAgbmV3VmFsdWU6IHN0cmluZztcbiAgcmVmZXRjaCh0eXBlOiBzdHJpbmcpOiB2b2lkO1xuICB0ZWFtS2V5Pzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCB1c2VDcmVhdGUgPSA8VCw+KCkgPT4ge1xuICBjb25zdCBbbXlSZXMsIHNldE15UmVzXSA9IHVzZVN0YXRlPFQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIGNvbnN0IGNhbGxDcmVhdGUgPSBhc3luYyAoe1xuICAgIGRvY1R5cGUsXG4gICAgbmV3VmFsdWUsXG4gICAgcmVmZXRjaCxcbiAgICB0ZWFtS2V5LFxuICAgIGRyaXZlcktleVxuICB9OiBDYWxsQ3JlYXRlUHJvcHMpID0+IHtcbiAgICBsZXQgYm9keTtcblxuICAgIGlmIChkb2NUeXBlID09PSBcInRlYW1cIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJ0ZWFtXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogbmV3VmFsdWUsXG4gICAgICAgICAgICBcImlkXCI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwICsgOTk5KSxcbiAgICAgICAgICAgIFwidGVhbVwiOiB7IFwiQGtleVwiOiB0ZWFtS2V5IH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJkcml2ZXJcIikge1xuICAgICAgICBib2R5ID0ge1xuICAgICAgICAgICAgXCJhc3NldFwiOiBbe1xuICAgICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJkcml2ZXJcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICBcImlkXCI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwICsgOTk5KjIpLFxuICAgICAgICAgICAgICBcInRlYW1cIjogeyBcIkBrZXlcIjogdGVhbUtleSB9XG4gICAgICAgICAgICB9XSAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvY1R5cGUgPT09IFwiY2FyXCIpIHtcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICAgIFwiYXNzZXRcIjogW3tcbiAgICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiY2FyXCIsXG4gICAgICAgICAgICAgIFwibW9kZWxcIjogbmV3VmFsdWUsXG4gICAgICAgICAgICAgIFwiaWRcIjogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAgKyA5OTkqMyksXG4gICAgICAgICAgICAgIFwiZHJpdmVyXCI6IHsgXCJAa2V5XCI6IGRyaXZlcktleSB9XG4gICAgICAgICAgICB9XSAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfTtcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgaGVhZGVyczogaGVhZGVyLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdmFsdWUsIC0+IFwiLCByZXMpO1xuICAgICAgICBzZXRNeVJlcyhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwic29tZXRoaW5nIGhhcHBlbmVkIC0+IFwiLCBlcnIpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxSZWZldGNoID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmZXRjaChkb2NUeXBlKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAoKSA9PiBjbGVhclRpbWVvdXQoY2FsbFJlZmV0Y2gpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2FsbENyZWF0ZSwgaXNMb2FkaW5nLCBteVJlcyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVybCIsInVzZUNyZWF0ZSIsIm15UmVzIiwic2V0TXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYWxsQ3JlYXRlIiwiZG9jVHlwZSIsIm5ld1ZhbHVlIiwicmVmZXRjaCIsInRlYW1LZXkiLCJkcml2ZXJLZXkiLCJib2R5IiwiaGVhZGVyIiwiYXNzZXQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiZmluYWxseSIsImNhbGxSZWZldGNoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});