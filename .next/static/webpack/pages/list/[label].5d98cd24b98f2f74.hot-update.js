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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch;\n                        ;\n                        if (docType === \"team\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"team\",\n                                        \"name\": newValue,\n                                        \"id\": Math.ceil(Math.random() * 100 + 999)\n                                    }\n                                ]\n                            };\n                        }\n                        if (docType === \"driver\") {\n                            body = {\n                                \"asset\": [\n                                    {\n                                        \"@assetType\": \"driver\",\n                                        \"name\": newValue,\n                                        \"id\": 72,\n                                        \"team\": {\n                                            \"@key\": \"team:2ffc5ff0-6831-57f6-a6ea-c27c3d2bedfc\"\n                                        }\n                                    }\n                                ]\n                            };\n                        }\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callCreate: callCreate,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Q0FDekMsQ0FBQztHQTdEV0QsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQ3JlYXRlLnRzeD82YTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVybCA9XG4gIFwiaHR0cDovL2VjMi0xMDAtMjUtMTM2LTEyOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbS9hcGkvaW52b2tlL2NyZWF0ZUFzc2V0XCI7XG5cbmludGVyZmFjZSBDYWxsQ3JlYXRlUHJvcHMge1xuICBkb2NUeXBlOiBzdHJpbmc7XG4gIG5ld1ZhbHVlOiBzdHJpbmc7XG4gIHJlZmV0Y2godHlwZTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNyZWF0ZSA9IDxULD4oKSA9PiB7XG4gIGNvbnN0IFtteVJlcywgc2V0TXlSZXNdID0gdXNlU3RhdGU8VCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3QgY2FsbENyZWF0ZSA9IGFzeW5jICh7XG4gICAgZG9jVHlwZSxcbiAgICBuZXdWYWx1ZSxcbiAgICByZWZldGNoLFxuICB9OiBDYWxsQ3JlYXRlUHJvcHMpID0+IHtcbiAgICBsZXQgYm9keTtcblxuICAgIGlmIChkb2NUeXBlID09PSBcInRlYW1cIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJ0ZWFtXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogbmV3VmFsdWUsXG4gICAgICAgICAgICBcImlkXCI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwICsgOTk5KSxcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJkcml2ZXJcIikge1xuICAgICAgICBib2R5ID0ge1xuICAgICAgICAgICAgXCJhc3NldFwiOiBbe1xuICAgICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJkcml2ZXJcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICBcImlkXCI6IDcyLFxuICAgICAgICAgICAgICBcInRlYW1cIjogeyBcIkBrZXlcIjogXCJ0ZWFtOjJmZmM1ZmYwLTY4MzEtNTdmNi1hNmVhLWMyN2MzZDJiZWRmY1wiIH1cbiAgICAgICAgICAgIH1dICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9O1xuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICBoZWFkZXJzOiBoZWFkZXIsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCB2YWx1ZSwgLT4gXCIsIHJlcyk7XG4gICAgICAgIHNldE15UmVzKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJzb21ldGhpbmcgaGFwcGVuZWQgLT4gXCIsIGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgY2FsbFJlZmV0Y2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZWZldGNoKGRvY1R5cGUpO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICgpID0+IGNsZWFyVGltZW91dChjYWxsUmVmZXRjaCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBjYWxsQ3JlYXRlLCBpc0xvYWRpbmcsIG15UmVzIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXJsIiwidXNlQ3JlYXRlIiwibXlSZXMiLCJzZXRNeVJlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNhbGxDcmVhdGUiLCJkb2NUeXBlIiwibmV3VmFsdWUiLCJyZWZldGNoIiwiYm9keSIsImhlYWRlciIsImFzc2V0IiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImZpbmFsbHkiLCJjYWxsUmVmZXRjaCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});