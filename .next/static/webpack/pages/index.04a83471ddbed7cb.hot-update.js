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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCreate\": function() { return /* binding */ useCreate; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset\";\nvar useCreate = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callCreate = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, newValue, refetch, selectedKey, prize, date, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, newValue = param.newValue, refetch = param.refetch, selectedKey = param.selectedKey, prize = param.prize, date = param.date;\n                        ;\n                        _ctx.t0 = true;\n                        _ctx.next = _ctx.t0 === (docType === \"driver\") ? 5 : _ctx.t0 === (docType === \"car\") ? 7 : _ctx.t0 === (docType === \"event\") ? 9 : 11;\n                        break;\n                    case 5:\n                        body = {\n                            asset: [\n                                {\n                                    \"@assetType\": \"driver\",\n                                    name: newValue,\n                                    id: Math.ceil(Math.random() * 100 + 999 * 2),\n                                    team: {\n                                        \"@key\": selectedKey\n                                    }\n                                }, \n                            ]\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 7:\n                        body = {\n                            asset: [\n                                {\n                                    \"@assetType\": \"car\",\n                                    model: newValue,\n                                    id: Math.ceil(Math.random() * 100 + 999 * 3),\n                                    driver: {\n                                        \"@key\": selectedKey\n                                    }\n                                }, \n                            ]\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 9:\n                        body = {\n                            asset: [\n                                {\n                                    \"@assetType\": \"event\",\n                                    name: newValue,\n                                    prize: prize,\n                                    date: new Date(date).toISOString(),\n                                    winner: {\n                                        \"@key\": selectedKey\n                                    }\n                                }, \n                            ]\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 11:\n                        body = {\n                            asset: [\n                                {\n                                    \"@assetType\": \"team\",\n                                    name: newValue,\n                                    id: Math.ceil(Math.random() * 100 + 999)\n                                }, \n                            ]\n                        };\n                        return _ctx.abrupt(\"break\", 13);\n                    case 13:\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"POST\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            console.log(\"created value, -> \", res);\n                            setMyRes(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callCreate(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callCreate: callCreate,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useCreate, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTs0QkFDZGYsSUFBSSxFQUFFZ0IsSUFBSSxDQUFDQyxTQUFTLENBQUNqQixJQUFJLENBQUM7NEJBQzFCa0IsT0FBTyxFQUFFakIsTUFBTTt5QkFDaEIsQ0FBQyxDQUNDa0IsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUNBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO3lCQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7NEJBQ2JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFSCxHQUFHLENBQUMsQ0FBQzs0QkFDdkM5QixRQUFRLENBQUM4QixHQUFHLENBQUMsQ0FBQzt5QkFDZixDQUFDLENBQ0RJLEtBQUssQ0FBQyxTQUFDQyxHQUFHO21DQUFLSCxPQUFPLENBQUNJLEtBQUssQ0FBQyx3QkFBd0IsRUFBRUQsR0FBRyxDQUFDO3lCQUFBLENBQUMsQ0FDNURFLE9BQU8sQ0FBQyxXQUFNOzRCQUNibkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUVwQixJQUFNb0MsV0FBVyxHQUFHQyxVQUFVLENBQUMsV0FBTTtnQ0FDbkNqQyxPQUFPLENBQUNGLE9BQU8sQ0FBQyxDQUFDOzZCQUNsQixFQUFFLEdBQUcsQ0FBQzs0QkFFUDt1Q0FBTW9DLFlBQVksQ0FBQ0YsV0FBVyxDQUFDOzZCQUFBLEVBQUM7eUJBQ2pDLENBQUMsQ0FBQzs7Ozs7O1NBQ047d0JBeEZLbkMsVUFBVTs7O09Bd0ZmO0lBRUQsT0FBTztRQUFFQSxVQUFVLEVBQVZBLFVBQVU7UUFBRUYsU0FBUyxFQUFUQSxTQUFTO1FBQUVGLEtBQUssRUFBTEEsS0FBSztLQUFFLENBQUM7Q0FDekMsQ0FBQztHQS9GV0QsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQ3JlYXRlLnRzeD82YTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVybCA9XG4gIFwiaHR0cDovL2VjMi0xMDAtMjUtMTM2LTEyOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbS9hcGkvaW52b2tlL2NyZWF0ZUFzc2V0XCI7XG5cbmludGVyZmFjZSBDYWxsQ3JlYXRlUHJvcHMge1xuICBkb2NUeXBlOiBzdHJpbmc7XG4gIG5ld1ZhbHVlOiBzdHJpbmc7XG4gIHJlZmV0Y2godHlwZTogc3RyaW5nKTogdm9pZDtcbiAgc2VsZWN0ZWRLZXk/OiBzdHJpbmc7XG4gIHByaXplPzogbnVtYmVyO1xuICBkYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ3JlYXRlID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsQ3JlYXRlID0gYXN5bmMgKHtcbiAgICBkb2NUeXBlLFxuICAgIG5ld1ZhbHVlLFxuICAgIHJlZmV0Y2gsXG4gICAgc2VsZWN0ZWRLZXksXG4gICAgcHJpemUsXG4gICAgZGF0ZSxcbiAgfTogQ2FsbENyZWF0ZVByb3BzKSA9PiB7XG4gICAgbGV0IGJvZHk7XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgZG9jVHlwZSA9PT0gXCJkcml2ZXJcIjpcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICBhc3NldDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJkcml2ZXJcIixcbiAgICAgICAgICAgICAgbmFtZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDIpLFxuICAgICAgICAgICAgICB0ZWFtOiB7IFwiQGtleVwiOiBzZWxlY3RlZEtleSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBkb2NUeXBlID09PSBcImNhclwiOlxuICAgICAgICBib2R5ID0ge1xuICAgICAgICAgIGFzc2V0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBcImNhclwiLFxuICAgICAgICAgICAgICBtb2RlbDogbmV3VmFsdWUsXG4gICAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDk5OSAqIDMpLFxuICAgICAgICAgICAgICBkcml2ZXI6IHsgXCJAa2V5XCI6IHNlbGVjdGVkS2V5IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGRvY1R5cGUgPT09IFwiZXZlbnRcIjpcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICBhc3NldDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgICBuYW1lOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgcHJpemU6IHByaXplLFxuICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlISkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgd2lubmVyOiB7IFwiQGtleVwiOiBzZWxlY3RlZEtleSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICBhc3NldDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIkBhc3NldFR5cGVcIjogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgIG5hbWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAgKyA5OTkpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9O1xuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICBoZWFkZXJzOiBoZWFkZXIsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCB2YWx1ZSwgLT4gXCIsIHJlcyk7XG4gICAgICAgIHNldE15UmVzKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJzb21ldGhpbmcgaGFwcGVuZWQgLT4gXCIsIGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgY2FsbFJlZmV0Y2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZWZldGNoKGRvY1R5cGUpO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICgpID0+IGNsZWFyVGltZW91dChjYWxsUmVmZXRjaCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBjYWxsQ3JlYXRlLCBpc0xvYWRpbmcsIG15UmVzIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXJsIiwidXNlQ3JlYXRlIiwibXlSZXMiLCJzZXRNeVJlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNhbGxDcmVhdGUiLCJkb2NUeXBlIiwibmV3VmFsdWUiLCJyZWZldGNoIiwic2VsZWN0ZWRLZXkiLCJwcml6ZSIsImRhdGUiLCJib2R5IiwiaGVhZGVyIiwiYXNzZXQiLCJuYW1lIiwiaWQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsInRlYW0iLCJtb2RlbCIsImRyaXZlciIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIndpbm5lciIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiZmluYWxseSIsImNhbGxSZWZldGNoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useCreate.tsx\n");

/***/ })

});