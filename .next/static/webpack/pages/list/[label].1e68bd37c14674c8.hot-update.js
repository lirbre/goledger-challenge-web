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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, teamKey, driverKey, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch, teamKey = param.teamKey, driverKey = param.driverKey;\n                        ;\n                        if (docType === \"team\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"team\",\n                                        \"name\": newValue,\n                                        \"id\": Math.ceil(Math.random() * 100 + 999),\n                                        \"team\": {\n                                            \"@key\": teamKey\n                                        }\n                                    }\n                                ]\n                            };\n                        }\n                        if (docType === \"driver\") {\n                            body = {\n                                \"asset\": [\n                                    {\n                                        \"@assetType\": \"driver\",\n                                        \"name\": newValue,\n                                        \"id\": Math.ceil(Math.random() * 100 + 999 * 2),\n                                        \"team\": {\n                                            \"@key\": teamKey\n                                        }\n                                    }\n                                ]\n                            };\n                        }\n                        if (docType === \"car\") {\n                            body = {\n                                \"asset\": [\n                                    {\n                                        \"@assetType\": \"car\",\n                                        \"model\": newValue,\n                                        \"id\": Math.ceil(Math.random() * 100 + 999 * 3),\n                                        \"driver\": {\n                                            \"@key\": driverKey\n                                        }\n                                    }\n                                ]\n                            };\n                        }\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callCreate: callCreate,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUN2Q3JCLFFBQVEsQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDO3lCQUNmLENBQUMsQ0FDREksS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUNBQUtILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLHdCQUF3QixFQUFFRCxHQUFHLENBQUM7eUJBQUEsQ0FBQyxDQUM1REUsT0FBTyxDQUFDLFdBQU07NEJBQ2IxQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRXBCLElBQU0yQixXQUFXLEdBQUdDLFVBQVUsQ0FBQyxXQUFNO2dDQUNuQ3hCLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLENBQUM7NkJBQ2xCLEVBQUUsR0FBRyxDQUFDOzRCQUVQO3VDQUFNMkIsWUFBWSxDQUFDRixXQUFXLENBQUM7NkJBQUEsRUFBQzt5QkFDakMsQ0FBQyxDQUFDOzs7Ozs7U0FDTjt3QkFwRUsxQixVQUFVOzs7T0FvRWY7SUFFRCxPQUFPO1FBQUVBLFVBQVUsRUFBVkEsVUFBVTtRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRUYsS0FBSyxFQUFMQSxLQUFLO0tBQUUsQ0FBQztDQUN6QyxDQUFDO0dBM0VXRCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VDcmVhdGUudHN4PzZhMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXJsID1cbiAgXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9pbnZva2UvY3JlYXRlQXNzZXRcIjtcblxuaW50ZXJmYWNlIENhbGxDcmVhdGVQcm9wcyB7XG4gIGRvY1R5cGU6IHN0cmluZztcbiAgbmV3VmFsdWU6IHN0cmluZztcbiAgcmVmZXRjaCh0eXBlOiBzdHJpbmcpOiB2b2lkO1xuICB0ZWFtS2V5Pzogc3RyaW5nXG4gIGRyaXZlcktleVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ3JlYXRlID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsQ3JlYXRlID0gYXN5bmMgKHtcbiAgICBkb2NUeXBlLFxuICAgIG5ld1ZhbHVlLFxuICAgIHJlZmV0Y2gsXG4gICAgdGVhbUtleSxcbiAgICBkcml2ZXJLZXlcbiAgfTogQ2FsbENyZWF0ZVByb3BzKSA9PiB7XG4gICAgbGV0IGJvZHk7XG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJ0ZWFtXCIpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwidGVhbVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgXCJpZFwiOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSksXG4gICAgICAgICAgICBcInRlYW1cIjogeyBcIkBrZXlcIjogdGVhbUtleSB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvY1R5cGUgPT09IFwiZHJpdmVyXCIpIHtcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICAgIFwiYXNzZXRcIjogW3tcbiAgICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiZHJpdmVyXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSoyKSxcbiAgICAgICAgICAgICAgXCJ0ZWFtXCI6IHsgXCJAa2V5XCI6IHRlYW1LZXkgfVxuICAgICAgICAgICAgfV0gICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb2NUeXBlID09PSBcImNhclwiKSB7XG4gICAgICAgIGJvZHkgPSB7XG4gICAgICAgICAgICBcImFzc2V0XCI6IFt7XG4gICAgICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBcImNhclwiLFxuICAgICAgICAgICAgICBcIm1vZGVsXCI6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICBcImlkXCI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwICsgOTk5KjMpLFxuICAgICAgICAgICAgICBcImRyaXZlclwiOiB7IFwiQGtleVwiOiBkcml2ZXJLZXkgfVxuICAgICAgICAgICAgfV0gICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH07XG5cbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcixcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVkIHZhbHVlLCAtPiBcIiwgcmVzKTtcbiAgICAgICAgc2V0TXlSZXMocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcInNvbWV0aGluZyBoYXBwZW5lZCAtPiBcIiwgZXJyKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICBjb25zdCBjYWxsUmVmZXRjaCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlZmV0Y2goZG9jVHlwZSk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgKCkgPT4gY2xlYXJUaW1lb3V0KGNhbGxSZWZldGNoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGNhbGxDcmVhdGUsIGlzTG9hZGluZywgbXlSZXMgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1cmwiLCJ1c2VDcmVhdGUiLCJteVJlcyIsInNldE15UmVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2FsbENyZWF0ZSIsImRvY1R5cGUiLCJuZXdWYWx1ZSIsInJlZmV0Y2giLCJ0ZWFtS2V5IiwiZHJpdmVyS2V5IiwiYm9keSIsImhlYWRlciIsImFzc2V0IiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImZpbmFsbHkiLCJjYWxsUmVmZXRjaCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});