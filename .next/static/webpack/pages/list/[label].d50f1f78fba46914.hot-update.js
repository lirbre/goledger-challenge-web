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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, selectedKey, newPrize, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch, selectedKey = param.selectedKey, newPrize = param.newPrize;\n                        ;\n                        if (docType === \"team\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"team\",\n                                        name: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999)\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"driver\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"driver\",\n                                        name: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999 * 2),\n                                        team: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"car\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"event\",\n                                        prize: newPrize,\n                                        name: newValue,\n                                        date: new Date().toLocaleDateString(),\n                                        winner: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        if (docType === \"event\") {\n                            body = {\n                                asset: [\n                                    {\n                                        \"@assetType\": \"car\",\n                                        model: newValue,\n                                        id: Math.ceil(Math.random() * 100 + 999 * 3),\n                                        driver: {\n                                            \"@key\": selectedKey\n                                        }\n                                    }, \n                                ]\n                            };\n                        }\n                        console.log(body);\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callCreate: callCreate,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQ3JlYXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDLElBQU1DLEdBQUcsR0FDUCwwRUFBMEU7QUFVckUsSUFBTUMsU0FBUyxHQUFHLFdBQVU7O0lBQ2pDLElBQTBCRixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVyxJQUFJLENBQUMsRUFkcEQsS0FjYyxHQUFjQSxHQUF3QixHQUF0QyxFQWRkLFFBY3dCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLElBQWtDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBVSxJQUFJLENBQUMsRUFmM0QsU0Fla0IsR0FBa0JBLElBQXVCLEdBQXpDLEVBZmxCLFlBZWdDLEdBQUlBLElBQXVCLEdBQTNCO0lBRTlCLElBQU1PLFVBQVU7bUJBQUcsK0xBTUk7Z0JBTHJCQyxPQUFPLEVBQ1BDLFFBQVEsRUFDUkMsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLFFBQVEsRUFFSkMsSUFBSSxFQXdERkMsTUFBTTs7Ozt3QkE5RFpOLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLFdBQVcsU0FBWEEsV0FBVyxFQUNYQyxRQUFRLFNBQVJBLFFBQVE7d0JBdEJaLENBd0JhO3dCQUVULElBQUlKLE9BQU8sS0FBSyxNQUFNLEVBQUU7NEJBQ3RCSyxJQUFJLEdBQUc7Z0NBQ0xFLEtBQUssRUFBRTtvQ0FDTDt3Q0FDRSxZQUFZLEVBQUUsTUFBTTt3Q0FDcEJDLElBQUksRUFBRVAsUUFBUTt3Q0FDZFEsRUFBRSxFQUFFQyxJQUFJLENBQUNDLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO3FDQUN6QztpQ0FDRjs2QkFDRixDQUFDO3lCQUNIO3dCQUVELElBQUlaLE9BQU8sS0FBSyxRQUFRLEVBQUU7NEJBQ3hCSyxJQUFJLEdBQUc7Z0NBQ0xFLEtBQUssRUFBRTtvQ0FDTDt3Q0FDRSxZQUFZLEVBQUUsUUFBUTt3Q0FDdEJDLElBQUksRUFBRVAsUUFBUTt3Q0FDZFEsRUFBRSxFQUFFQyxJQUFJLENBQUNDLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzt3Q0FDNUNDLElBQUksRUFBRTs0Q0FBRSxNQUFNLEVBQUVWLFdBQVc7eUNBQUU7cUNBQzlCO2lDQUNGOzZCQUNGLENBQUM7eUJBQ0g7d0JBRUQsSUFBSUgsT0FBTyxLQUFLLEtBQUssRUFBRTs0QkFDckJLLElBQUksR0FBRztnQ0FDTEUsS0FBSyxFQUFFO29DQUNMO3dDQUNFLFlBQVksRUFBRSxPQUFPO3dDQUNyQk8sS0FBSyxFQUFFVixRQUFRO3dDQUNmSSxJQUFJLEVBQUVQLFFBQVE7d0NBQ2RjLElBQUksRUFBRSxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0Msa0JBQWtCLEVBQUU7d0NBQ3JDQyxNQUFNLEVBQUU7NENBQUUsTUFBTSxFQUFFZixXQUFXO3lDQUFFO3FDQUNoQztpQ0FDRjs2QkFDRixDQUFDO3lCQUNIO3dCQUVELElBQUlILE9BQU8sS0FBSyxPQUFPLEVBQUU7NEJBQ3ZCSyxJQUFJLEdBQUc7Z0NBQ0xFLEtBQUssRUFBRTtvQ0FDTDt3Q0FDRSxZQUFZLEVBQUUsS0FBSzt3Q0FDbkJZLEtBQUssRUFBRWxCLFFBQVE7d0NBQ2ZRLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxJQUFJLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7d0NBQzVDUSxNQUFNLEVBQUU7NENBQUUsTUFBTSxFQUFFakIsV0FBVzt5Q0FBRTtxQ0FDaEM7aUNBQ0Y7NkJBQ0YsQ0FBQzt5QkFDSDt3QkFFRGtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDakIsSUFBSSxDQUFDO3dCQUVYQyxNQUFNLEdBQUc7NEJBQ2IsY0FBYyxFQUFFLGtCQUFrQjt5QkFDbkMsQ0FBQzt3QkFFRmlCLEtBQUssQ0FBQzlCLEdBQUcsRUFBRTs0QkFDVCtCLE1BQU0sRUFBRSxNQUFNOzRCQUNkbkIsSUFBSSxFQUFFb0IsSUFBSSxDQUFDQyxTQUFTLENBQUNyQixJQUFJLENBQUM7NEJBQzFCc0IsT0FBTyxFQUFFckIsTUFBTTt5QkFDaEIsQ0FBQyxDQUNDc0IsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUNBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO3lCQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7NEJBQ2JSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFTyxHQUFHLENBQUMsQ0FBQzs0QkFDdkNqQyxRQUFRLENBQUNpQyxHQUFHLENBQUMsQ0FBQzt5QkFDZixDQUFDLENBQ0RFLEtBQUssQ0FBQyxTQUFDQyxHQUFHO21DQUFLWCxPQUFPLENBQUNZLEtBQUssQ0FBQyx3QkFBd0IsRUFBRUQsR0FBRyxDQUFDO3lCQUFBLENBQUMsQ0FDNURFLE9BQU8sQ0FBQyxXQUFNOzRCQUNicEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUVwQixJQUFNcUMsV0FBVyxHQUFHQyxVQUFVLENBQUMsV0FBTTtnQ0FDbkNsQyxPQUFPLENBQUNGLE9BQU8sQ0FBQyxDQUFDOzZCQUNsQixFQUFFLEdBQUcsQ0FBQzs0QkFFUDt1Q0FBTXFDLFlBQVksQ0FBQ0YsV0FBVyxDQUFDOzZCQUFBLEVBQUM7eUJBQ2pDLENBQUMsQ0FBQzs7Ozs7O1NBQ047d0JBdkZLcEMsVUFBVTs7O09BdUZmO0lBRUQsT0FBTztRQUFFQSxVQUFVLEVBQVZBLFVBQVU7UUFBRUYsU0FBUyxFQUFUQSxTQUFTO1FBQUVGLEtBQUssRUFBTEEsS0FBSztLQUFFLENBQUM7Q0FDekMsQ0FBQztHQTlGV0QsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQ3JlYXRlLnRzeD82YTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVybCA9XG4gIFwiaHR0cDovL2VjMi0xMDAtMjUtMTM2LTEyOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbS9hcGkvaW52b2tlL2NyZWF0ZUFzc2V0XCI7XG5cbmludGVyZmFjZSBDYWxsQ3JlYXRlUHJvcHMge1xuICBkb2NUeXBlOiBzdHJpbmc7XG4gIG5ld1ZhbHVlOiBzdHJpbmc7XG4gIHJlZmV0Y2godHlwZTogc3RyaW5nKTogdm9pZDtcbiAgc2VsZWN0ZWRLZXk/OiBzdHJpbmc7XG4gIG5ld1ByaXplPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ3JlYXRlID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsQ3JlYXRlID0gYXN5bmMgKHtcbiAgICBkb2NUeXBlLFxuICAgIG5ld1ZhbHVlLFxuICAgIHJlZmV0Y2gsXG4gICAgc2VsZWN0ZWRLZXksXG4gICAgbmV3UHJpemVcbiAgfTogQ2FsbENyZWF0ZVByb3BzKSA9PiB7XG4gICAgbGV0IGJvZHk7XG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJ0ZWFtXCIpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwidGVhbVwiLFxuICAgICAgICAgICAgbmFtZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAgKyA5OTkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChkb2NUeXBlID09PSBcImRyaXZlclwiKSB7XG4gICAgICBib2R5ID0ge1xuICAgICAgICBhc3NldDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBcImRyaXZlclwiLFxuICAgICAgICAgICAgbmFtZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAgKyA5OTkgKiAyKSxcbiAgICAgICAgICAgIHRlYW06IHsgXCJAa2V5XCI6IHNlbGVjdGVkS2V5IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGRvY1R5cGUgPT09IFwiY2FyXCIpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJAYXNzZXRUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIHByaXplOiBuZXdQcml6ZSxcbiAgICAgICAgICAgIG5hbWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgICAgICAgIHdpbm5lcjogeyBcIkBrZXlcIjogc2VsZWN0ZWRLZXkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoZG9jVHlwZSA9PT0gXCJldmVudFwiKSB7XG4gICAgICBib2R5ID0ge1xuICAgICAgICBhc3NldDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBcImNhclwiLFxuICAgICAgICAgICAgbW9kZWw6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgaWQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwICsgOTk5ICogMyksXG4gICAgICAgICAgICBkcml2ZXI6IHsgXCJAa2V5XCI6IHNlbGVjdGVkS2V5IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYm9keSlcblxuICAgIGNvbnN0IGhlYWRlciA9IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH07XG5cbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcixcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVkIHZhbHVlLCAtPiBcIiwgcmVzKTtcbiAgICAgICAgc2V0TXlSZXMocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcInNvbWV0aGluZyBoYXBwZW5lZCAtPiBcIiwgZXJyKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICBjb25zdCBjYWxsUmVmZXRjaCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlZmV0Y2goZG9jVHlwZSk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgKCkgPT4gY2xlYXJUaW1lb3V0KGNhbGxSZWZldGNoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGNhbGxDcmVhdGUsIGlzTG9hZGluZywgbXlSZXMgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1cmwiLCJ1c2VDcmVhdGUiLCJteVJlcyIsInNldE15UmVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2FsbENyZWF0ZSIsImRvY1R5cGUiLCJuZXdWYWx1ZSIsInJlZmV0Y2giLCJzZWxlY3RlZEtleSIsIm5ld1ByaXplIiwiYm9keSIsImhlYWRlciIsImFzc2V0IiwibmFtZSIsImlkIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJ0ZWFtIiwicHJpemUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndpbm5lciIsIm1vZGVsIiwiZHJpdmVyIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJmaW5hbGx5IiwiY2FsbFJlZmV0Y2giLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});