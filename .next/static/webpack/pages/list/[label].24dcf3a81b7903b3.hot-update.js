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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useEdit\": function() { return /* binding */ useEdit; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/updateAsset\";\nvar useEdit = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callEdit = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, key, newValue, refetch, newKey, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, key = param.key, newValue = param.newValue, refetch = param.refetch, newKey = param.newKey;\n                        ;\n                        console.log(newValue);\n                        if (docType === \"car\") {\n                            body = {\n                                update: {\n                                    \"@assetType\": \"\".concat(docType),\n                                    \"@key\": \"\".concat(key),\n                                    model: \"\".concat(newValue),\n                                    \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\",\n                                    driver: {\n                                        \"@key\": newKey\n                                    }\n                                }\n                            };\n                        } else {\n                            body = {\n                                update: {\n                                    \"@assetType\": \"\".concat(docType),\n                                    \"@key\": \"\".concat(key),\n                                    name: \"\".concat(newValue),\n                                    \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\"\n                                }\n                            };\n                        }\n                        console.log(\"new item -> \");\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"PUT\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"new value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callEdit(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callEdit: callEdit,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useEdit, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxPQUFPLENBQUMsQ0FBQzs2QkFDbEIsRUFBRSxHQUFHLENBQUM7NEJBRVA7dUNBQU0yQixZQUFZLENBQUNGLFdBQVcsQ0FBQzs2QkFBQSxFQUFDO3lCQUNqQyxDQUFDLENBQUM7Ozs7OztTQUNOO3dCQXZESzFCLFFBQVE7OztPQXVEYjtJQUVELE9BQU87UUFBRUEsUUFBUSxFQUFSQSxRQUFRO1FBQUVGLFNBQVMsRUFBVEEsU0FBUztRQUFFRixLQUFLLEVBQUxBLEtBQUs7S0FBRSxDQUFDO0NBQ3ZDLENBQUM7R0E5RFdELE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUVkaXQudHN4PzczNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXJsID1cbiAgXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9pbnZva2UvdXBkYXRlQXNzZXRcIjtcblxuaW50ZXJmYWNlIENhbGxFZGl0UHJvcHMge1xuICBkb2NUeXBlOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xuICBuZXdWYWx1ZTogc3RyaW5nO1xuICByZWZldGNoKGtleTogc3RyaW5nKTogdm9pZDtcbiAgbmV3S2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VFZGl0ID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsRWRpdCA9IGFzeW5jICh7XG4gICAgZG9jVHlwZSxcbiAgICBrZXksXG4gICAgbmV3VmFsdWUsXG4gICAgcmVmZXRjaCxcbiAgICBuZXdLZXksXG4gIH06IENhbGxFZGl0UHJvcHMpID0+IHtcbiAgICBsZXQgYm9keTtcblxuICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcblxuICAgIGlmIChkb2NUeXBlID09PSBcImNhclwiKSB7XG4gICAgICBib2R5ID0ge1xuICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICBcIkBhc3NldFR5cGVcIjogYCR7ZG9jVHlwZX1gLFxuICAgICAgICAgIFwiQGtleVwiOiBgJHtrZXl9YCxcbiAgICAgICAgICBtb2RlbDogYCR7bmV3VmFsdWV9YCxcbiAgICAgICAgICBcIkBsYXN0VG91Y2hCeVwiOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9saXJicmUvXCIsXG4gICAgICAgICAgZHJpdmVyOiB7XG4gICAgICAgICAgICBcIkBrZXlcIjogbmV3S2V5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9OyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBgJHtkb2NUeXBlfWAsXG4gICAgICAgICAgXCJAa2V5XCI6IGAke2tleX1gLFxuICAgICAgICAgIG5hbWU6IGAke25ld1ZhbHVlfWAsXG4gICAgICAgICAgXCJAbGFzdFRvdWNoQnlcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGlyYnJlL1wiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnbmV3IGl0ZW0gLT4gJylcblxuICAgIGNvbnN0IGhlYWRlciA9IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH07XG5cbiAgICBmZXRjaCh1cmwsIHsgbWV0aG9kOiBcIlBVVFwiLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSwgaGVhZGVyczogaGVhZGVyIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyB2YWx1ZSwgLT4gXCIsIHJlcyk7XG4gICAgICAgIHNldE15UmVzKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJzb21ldGhpbmcgaGFwcGVuZWQgLT4gXCIsIGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnN0IGNhbGxSZWZldGNoID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmZXRjaChkb2NUeXBlKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAoKSA9PiBjbGVhclRpbWVvdXQoY2FsbFJlZmV0Y2gpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2FsbEVkaXQsIGlzTG9hZGluZywgbXlSZXMgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1cmwiLCJ1c2VFZGl0IiwibXlSZXMiLCJzZXRNeVJlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNhbGxFZGl0IiwiZG9jVHlwZSIsImtleSIsIm5ld1ZhbHVlIiwicmVmZXRjaCIsIm5ld0tleSIsImJvZHkiLCJoZWFkZXIiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwibW9kZWwiLCJkcml2ZXIiLCJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImZpbmFsbHkiLCJjYWxsUmVmZXRjaCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useEdit.tsx\n");

/***/ })

});