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

/***/ "./src/hooks/useEdit.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useEdit.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useEdit\": function() { return /* binding */ useEdit; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/updateAsset\";\nvar useEdit = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callEdit = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, key, newValue, refetch, newKey, newPrize, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, key = param.key, newValue = param.newValue, refetch = param.refetch, newKey = param.newKey, newPrize = param.newPrize;\n                        ;\n                        _ctx.t0 = true;\n                        _ctx.next = _ctx.t0 === (docType === \"car\") ? 5 : _ctx.t0 === (docType === \"driver\") ? 7 : _ctx.t0 === (docType === \"event\") ? 9 : 11;\n                        break;\n                    case 5:\n                        body = {\n                            update: {\n                                \"@assetType\": \"\".concat(docType),\n                                \"@key\": \"\".concat(key),\n                                model: \"\".concat(newValue),\n                                \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\",\n                                driver: {\n                                    \"@key\": newKey\n                                }\n                            }\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 7:\n                        body = {\n                            update: {\n                                \"@assetType\": \"\".concat(docType),\n                                \"@key\": \"\".concat(key),\n                                name: \"\".concat(newValue),\n                                \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\",\n                                team: {\n                                    \"@key\": newKey\n                                }\n                            }\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 9:\n                        body = {\n                            update: {\n                                \"@assetType\": \"\".concat(docType),\n                                \"@key\": \"\".concat(key),\n                                name: \"\".concat(newValue),\n                                \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\",\n                                prize: newPrize,\n                                winner: {\n                                    \"@key\": newKey\n                                }\n                            }\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 11:\n                        body = {\n                            update: {\n                                \"@assetType\": \"\".concat(docType),\n                                \"@key\": \"\".concat(key),\n                                name: \"\".concat(newValue),\n                                \"@lastTouchBy\": \"https://www.linkedin.com/in/lirbre/\"\n                            }\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 13:\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"PUT\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            setMyRes(res);\n                            console.log(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callEdit(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callEdit: callEdit,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useEdit, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDdEIsR0FBRyxFQUFFOzRCQUFFdUIsTUFBTSxFQUFFLEtBQUs7NEJBQUVWLElBQUksRUFBRVcsSUFBSSxDQUFDQyxTQUFTLENBQUNaLElBQUksQ0FBQzs0QkFBRWEsT0FBTyxFQUFFWixNQUFNO3lCQUFFLENBQUMsQ0FDdkVhLElBQUksQ0FBQyxTQUFDQyxHQUFHO21DQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTt5QkFBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLOzRCQUNiekIsUUFBUSxDQUFDeUIsR0FBRyxDQUFDLENBQUM7NEJBQ2RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUM7eUJBQ2pCLENBQUMsQ0FDREksS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUNBQUtILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLHdCQUF3QixFQUFFRCxHQUFHLENBQUM7eUJBQUEsQ0FBQyxDQUM1REUsT0FBTyxDQUFDLFdBQU07NEJBQ2I5QixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3BCLElBQU0rQixXQUFXLEdBQUdDLFVBQVUsQ0FBQyxXQUFNO2dDQUNuQzNCLE9BQU8sQ0FBQ0gsT0FBTyxDQUFDLENBQUM7NkJBQ2xCLEVBQUUsR0FBRyxDQUFDOzRCQUVQO3VDQUFNK0IsWUFBWSxDQUFDRixXQUFXLENBQUM7NkJBQUEsRUFBQzt5QkFDakMsQ0FBQyxDQUFDOzs7Ozs7U0FDTjt3QkFuRks5QixRQUFROzs7T0FtRmI7SUFFRCxPQUFPO1FBQUVBLFFBQVEsRUFBUkEsUUFBUTtRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRUYsS0FBSyxFQUFMQSxLQUFLO0tBQUUsQ0FBQztDQUN2QyxDQUFDO0dBMUZXRCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VFZGl0LnRzeD83MzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVybCA9XG4gIFwiaHR0cDovL2VjMi0xMDAtMjUtMTM2LTEyOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbS9hcGkvaW52b2tlL3VwZGF0ZUFzc2V0XCI7XG5cbmludGVyZmFjZSBDYWxsRWRpdFByb3BzIHtcbiAgZG9jVHlwZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgbmV3VmFsdWU6IHN0cmluZztcbiAgcmVmZXRjaChrZXk6IHN0cmluZyk6IHZvaWQ7XG4gIG5ld0tleTogc3RyaW5nO1xuICBuZXdQcml6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgdXNlRWRpdCA9IDxULD4oKSA9PiB7XG4gIGNvbnN0IFtteVJlcywgc2V0TXlSZXNdID0gdXNlU3RhdGU8VCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3QgY2FsbEVkaXQgPSBhc3luYyAoe1xuICAgIGRvY1R5cGUsXG4gICAga2V5LFxuICAgIG5ld1ZhbHVlLFxuICAgIHJlZmV0Y2gsXG4gICAgbmV3S2V5LFxuICAgIG5ld1ByaXplLFxuICB9OiBDYWxsRWRpdFByb3BzKSA9PiB7XG4gICAgbGV0IGJvZHk7XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgZG9jVHlwZSA9PT0gXCJjYXJcIjpcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBgJHtkb2NUeXBlfWAsXG4gICAgICAgICAgICBcIkBrZXlcIjogYCR7a2V5fWAsXG4gICAgICAgICAgICBtb2RlbDogYCR7bmV3VmFsdWV9YCxcbiAgICAgICAgICAgIFwiQGxhc3RUb3VjaEJ5XCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xpcmJyZS9cIixcbiAgICAgICAgICAgIGRyaXZlcjoge1xuICAgICAgICAgICAgICBcIkBrZXlcIjogbmV3S2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZG9jVHlwZSA9PT0gXCJkcml2ZXJcIjpcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBgJHtkb2NUeXBlfWAsXG4gICAgICAgICAgICBcIkBrZXlcIjogYCR7a2V5fWAsXG4gICAgICAgICAgICBuYW1lOiBgJHtuZXdWYWx1ZX1gLFxuICAgICAgICAgICAgXCJAbGFzdFRvdWNoQnlcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGlyYnJlL1wiLFxuICAgICAgICAgICAgdGVhbToge1xuICAgICAgICAgICAgICBcIkBrZXlcIjogbmV3S2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBkb2NUeXBlID09PSBcImV2ZW50XCI6XG4gICAgICAgIGJvZHkgPSB7XG4gICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogYCR7ZG9jVHlwZX1gLFxuICAgICAgICAgICAgXCJAa2V5XCI6IGAke2tleX1gLFxuICAgICAgICAgICAgbmFtZTogYCR7bmV3VmFsdWV9YCxcbiAgICAgICAgICAgIFwiQGxhc3RUb3VjaEJ5XCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xpcmJyZS9cIixcbiAgICAgICAgICAgIHByaXplOiBuZXdQcml6ZSxcbiAgICAgICAgICAgIHdpbm5lcjoge1xuICAgICAgICAgICAgICBcIkBrZXlcIjogbmV3S2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJvZHkgPSB7XG4gICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogYCR7ZG9jVHlwZX1gLFxuICAgICAgICAgICAgXCJAa2V5XCI6IGAke2tleX1gLFxuICAgICAgICAgICAgbmFtZTogYCR7bmV3VmFsdWV9YCxcbiAgICAgICAgICAgIFwiQGxhc3RUb3VjaEJ5XCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xpcmJyZS9cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9O1xuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogXCJQVVRcIiwgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksIGhlYWRlcnM6IGhlYWRlciB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TXlSZXMocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwic29tZXRoaW5nIGhhcHBlbmVkIC0+IFwiLCBlcnIpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjb25zdCBjYWxsUmVmZXRjaCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlZmV0Y2goZG9jVHlwZSk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgKCkgPT4gY2xlYXJUaW1lb3V0KGNhbGxSZWZldGNoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGNhbGxFZGl0LCBpc0xvYWRpbmcsIG15UmVzIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXJsIiwidXNlRWRpdCIsIm15UmVzIiwic2V0TXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYWxsRWRpdCIsImRvY1R5cGUiLCJrZXkiLCJuZXdWYWx1ZSIsInJlZmV0Y2giLCJuZXdLZXkiLCJuZXdQcml6ZSIsImJvZHkiLCJoZWFkZXIiLCJ1cGRhdGUiLCJtb2RlbCIsImRyaXZlciIsIm5hbWUiLCJ0ZWFtIiwicHJpemUiLCJ3aW5uZXIiLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImZpbmFsbHkiLCJjYWxsUmVmZXRjaCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useEdit.tsx\n");

/***/ })

});