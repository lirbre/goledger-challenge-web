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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, selectedKey, prize, date, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch, selectedKey = param.selectedKey, prize = param.prize, date = param.date;\n                        ;\n                        if (docType === \"team\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"team\",\n                                        name: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999)\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"driver\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"driver\",\n                                        name: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999 * 2),\n                                        team: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"car\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"car\",\n                                        model: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999 * 3),\n                                        driver: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"event\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"event\",\n                                        name: newValue,\n                                        prize: prize,\n                                        date: date.to,\n                                        winner: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        console.log(\"try to create -> \", body);\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callCreate: callCreate,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQ3JlYXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDLElBQU1DLEdBQUcsR0FDUCwwRUFBMEU7QUFXckUsSUFBTUMsU0FBUyxHQUFHLFdBQVU7O0lBQ2pDLElBQTBCRixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVyxJQUFJLENBQUMsRUFmcEQsS0FlYyxHQUFjQSxHQUF3QixHQUF0QyxFQWZkLFFBZXdCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLElBQWtDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBVSxJQUFJLENBQUMsRUFoQjNELFNBZ0JrQixHQUFrQkEsSUFBdUIsR0FBekMsRUFoQmxCLFlBZ0JnQyxHQUFJQSxJQUF1QixHQUEzQjtJQUU5QixJQUFNTyxVQUFVO21CQUFHLCtMQU9JO2dCQU5yQkMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsV0FBVyxFQUNYQyxLQUFLLEVBQ0xDLElBQUksRUFFQUMsSUFBSSxFQXdERkMsTUFBTTs7Ozt3QkEvRFpQLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLFdBQVcsU0FBWEEsV0FBVyxFQUNYQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsSUFBSSxTQUFKQSxJQUFJO3dCQXhCUixDQTBCYTt3QkFFVCxJQUFJTCxPQUFPLEtBQUssTUFBTSxFQUFFOzRCQUN0Qk0sSUFBSSxHQUFHO2dDQUNMRSxLQUFLLEVBQUU7b0NBQ0w7d0NBQ0UsWUFBWSxFQUFFLE1BQU07d0NBQ3BCQyxJQUFJLEVBQUVSLFFBQVE7d0NBQ2RTLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxJQUFJLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztxQ0FDekM7aUNBQ0Y7NkJBQ0YsQ0FBQzt5QkFDSDt3QkFFRCxJQUFJYixPQUFPLEtBQUssUUFBUSxFQUFFOzRCQUN4Qk0sSUFBSSxHQUFHO2dDQUNMRSxLQUFLLEVBQUU7b0NBQ0w7d0NBQ0UsWUFBWSxFQUFFLFFBQVE7d0NBQ3RCQyxJQUFJLEVBQUVSLFFBQVE7d0NBQ2RTLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxJQUFJLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7d0NBQzVDQyxJQUFJLEVBQUU7NENBQUUsTUFBTSxFQUFFWCxXQUFXO3lDQUFFO3FDQUM5QjtpQ0FDRjs2QkFDRixDQUFDO3lCQUNIO3dCQUVELElBQUlILE9BQU8sS0FBSyxLQUFLLEVBQUU7NEJBQ3JCTSxJQUFJLEdBQUc7Z0NBQ0xFLEtBQUssRUFBRTtvQ0FDTDt3Q0FDRSxZQUFZLEVBQUUsS0FBSzt3Q0FDbkJPLEtBQUssRUFBRWQsUUFBUTt3Q0FDZlMsRUFBRSxFQUFFQyxJQUFJLENBQUNDLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzt3Q0FDNUNHLE1BQU0sRUFBRTs0Q0FBRSxNQUFNLEVBQUViLFdBQVc7eUNBQUU7cUNBQ2hDO2lDQUNGOzZCQUNGLENBQUM7eUJBQ0g7d0JBRUQsSUFBSUgsT0FBTyxLQUFLLE9BQU8sRUFBRTs0QkFDdkJNLElBQUksR0FBRztnQ0FDTEUsS0FBSyxFQUFFO29DQUNMO3dDQUNFLFlBQVksRUFBRSxPQUFPO3dDQUNyQkMsSUFBSSxFQUFFUixRQUFRO3dDQUNkRyxLQUFLLEVBQUVBLEtBQUs7d0NBQ1pDLElBQUksRUFBRUEsSUFBSSxDQUFDWSxFQUFFO3dDQUNiQyxNQUFNLEVBQUU7NENBQUUsTUFBTSxFQUFFZixXQUFXO3lDQUFFO3FDQUNoQztpQ0FDRjs2QkFDRixDQUFDO3lCQUNIO3dCQUVEZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVkLElBQUksQ0FBQyxDQUFDO3dCQUVqQ0MsTUFBTSxHQUFHOzRCQUNiLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ25DLENBQUM7d0JBRUZjLEtBQUssQ0FBQzVCLEdBQUcsRUFBRTs0QkFDVDZCLE1BQU0sRUFBRSxNQUFNOzRCQUNkaEIsSUFBSSxFQUFFaUIsSUFBSSxDQUFDQyxTQUFTLENBQUNsQixJQUFJLENBQUM7NEJBQzFCbUIsT0FBTyxFQUFFbEIsTUFBTTt5QkFDaEIsQ0FBQyxDQUNDbUIsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUNBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO3lCQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7NEJBQ2JSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFTyxHQUFHLENBQUMsQ0FBQzs0QkFDdkMvQixRQUFRLENBQUMrQixHQUFHLENBQUMsQ0FBQzt5QkFDZixDQUFDLENBQ0RFLEtBQUssQ0FBQyxTQUFDQyxHQUFHO21DQUFLWCxPQUFPLENBQUNZLEtBQUssQ0FBQyx3QkFBd0IsRUFBRUQsR0FBRyxDQUFDO3lCQUFBLENBQUMsQ0FDNURFLE9BQU8sQ0FBQyxXQUFNOzRCQUNibEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUVwQixJQUFNbUMsV0FBVyxHQUFHQyxVQUFVLENBQUMsV0FBTTtnQ0FDbkNoQyxPQUFPLENBQUNGLE9BQU8sQ0FBQyxDQUFDOzZCQUNsQixFQUFFLEdBQUcsQ0FBQzs0QkFFUDt1Q0FBTW1DLFlBQVksQ0FBQ0YsV0FBVyxDQUFDOzZCQUFBLEVBQUM7eUJBQ2pDLENBQUMsQ0FBQzs7Ozs7O1NBQ047d0JBeEZLbEMsVUFBVTs7O09Bd0ZmO0lBRUQsT0FBTztRQUFFQSxVQUFVLEVBQVZBLFVBQVU7UUFBRUYsU0FBUyxFQUFUQSxTQUFTO1FBQUVGLEtBQUssRUFBTEEsS0FBSztLQUFFLENBQUM7Q0FDekMsQ0FBQztHQS9GV0QsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQ3JlYXRlLnRzeD82YTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVybCA9XG4gIFwiaHR0cDovL2VjMi0xMDAtMjUtMTM2LTEyOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbS9hcGkvaW52b2tlL2NyZWF0ZUFzc2V0XCI7XG5cbmludGVyZmFjZSBDYWxsQ3JlYXRlUHJvcHMge1xuICBkb2NUeXBlOiBzdHJpbmc7XG4gIG5ld1ZhbHVlOiBzdHJpbmc7XG4gIHJlZmV0Y2godHlwZTogc3RyaW5nKTogdm9pZDtcbiAgc2VsZWN0ZWRLZXk/OiBzdHJpbmc7XG4gIHByaXplPzogbnVtYmVyO1xuICBkYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ3JlYXRlID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsQ3JlYXRlID0gYXN5bmMgKHtcbiAgICBkb2NUeXBlLFxuICAgIG5ld1ZhbHVlLFxuICAgIHJlZmV0Y2gsXG4gICAgc2VsZWN0ZWRLZXksXG4gICAgcHJpemUsXG4gICAgZGF0ZVxuICB9OiBDYWxsQ3JlYXRlUHJvcHMpID0+IHtcbiAgICBsZXQgYm9keTtcblxuICAgIGlmIChkb2NUeXBlID09PSBcInRlYW1cIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJ0ZWFtXCIsXG4gICAgICAgICAgICBuYW1lOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGRvY1R5cGUgPT09IFwiZHJpdmVyXCIpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiZHJpdmVyXCIsXG4gICAgICAgICAgICBuYW1lOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDIpLFxuICAgICAgICAgICAgdGVhbTogeyBcIkBrZXlcIjogc2VsZWN0ZWRLZXkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJjYXJcIikge1xuICAgICAgYm9keSA9IHtcbiAgICAgICAgYXNzZXQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJjYXJcIixcbiAgICAgICAgICAgIG1vZGVsOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDMpLFxuICAgICAgICAgICAgZHJpdmVyOiB7IFwiQGtleVwiOiBzZWxlY3RlZEtleSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChkb2NUeXBlID09PSBcImV2ZW50XCIpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIG5hbWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgcHJpemU6IHByaXplLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZS50byxcbiAgICAgICAgICAgIHdpbm5lcjogeyBcIkBrZXlcIjogc2VsZWN0ZWRLZXkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInRyeSB0byBjcmVhdGUgLT4gXCIsIGJvZHkpO1xuXG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfTtcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgaGVhZGVyczogaGVhZGVyLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdmFsdWUsIC0+IFwiLCByZXMpO1xuICAgICAgICBzZXRNeVJlcyhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwic29tZXRoaW5nIGhhcHBlbmVkIC0+IFwiLCBlcnIpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxSZWZldGNoID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmZXRjaChkb2NUeXBlKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAoKSA9PiBjbGVhclRpbWVvdXQoY2FsbFJlZmV0Y2gpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgY2FsbENyZWF0ZSwgaXNMb2FkaW5nLCBteVJlcyB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVybCIsInVzZUNyZWF0ZSIsIm15UmVzIiwic2V0TXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYWxsQ3JlYXRlIiwiZG9jVHlwZSIsIm5ld1ZhbHVlIiwicmVmZXRjaCIsInNlbGVjdGVkS2V5IiwicHJpemUiLCJkYXRlIiwiYm9keSIsImhlYWRlciIsImFzc2V0IiwibmFtZSIsImlkIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJ0ZWFtIiwibW9kZWwiLCJkcml2ZXIiLCJ0byIsIndpbm5lciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwiZmluYWxseSIsImNhbGxSZWZldGNoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});