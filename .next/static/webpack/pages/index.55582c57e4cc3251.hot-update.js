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

/***/ "./src/hooks/useDelete.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useDelete.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useDelete\": function() { return /* binding */ useDelete; }\n/* harmony export */ });\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/deleteAsset\";\nvar useDelete = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callDelete = function() {\n        var _ref = _asyncToGenerator(_home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var docType, key, refetch, body, header;\n            return _home_lirbre_repos_goledger_challenge_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docType = param.docType, key = param.key, refetch = param.refetch;\n                        body = {\n                            key: {\n                                \"@assetType\": \"\".concat(docType),\n                                \"@key\": \"\".concat(key)\n                            }\n                        };\n                        console.log(body);\n                        header = {\n                            \"Content-Type\": \"application/json\"\n                        };\n                        fetch(url, {\n                            method: \"DELETE\",\n                            body: JSON.stringify(body),\n                            headers: header\n                        }).then(function(res) {\n                            return res.json();\n                        }).then(function(res) {\n                            setMyRes(res);\n                            console.log(res);\n                        }).catch(function(err) {\n                            return console.error(\"something happened -> \", err);\n                        }).finally(function() {\n                            setIsLoading(false);\n                            var callRefetch = setTimeout(function() {\n                                refetch(docType);\n                            }, 500);\n                            (function() {\n                                return clearTimeout(callRefetch);\n                            });\n                        });\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callDelete(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        callDelete: callDelete,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useDelete, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRGVsZXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDLElBQU1DLEdBQUcsR0FDUCwwRUFBMEU7QUFRckUsSUFBTUMsU0FBUyxHQUFHLFdBQVU7O0lBQ2pDLElBQTBCRixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVyxJQUFJLENBQUMsRUFacEQsS0FZYyxHQUFjQSxHQUF3QixHQUF0QyxFQVpkLFFBWXdCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLElBQWtDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBVSxJQUFJLENBQUMsRUFiM0QsU0Fha0IsR0FBa0JBLElBQXVCLEdBQXpDLEVBYmxCLFlBYWdDLEdBQUlBLElBQXVCLEdBQTNCO0lBRTlCLElBQU1PLFVBQVU7bUJBQUcsK0xBQXNEO2dCQUE3Q0MsT0FBTyxFQUFFQyxHQUFHLEVBQUVDLE9BQU8sRUFDekNDLElBQUksRUFTSkMsTUFBTTs7Ozt3QkFWY0osT0FBTyxTQUFQQSxPQUFPLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxPQUFPLFNBQVBBLE9BQU87d0JBQ3pDQyxJQUFJLEdBQUc7NEJBQ1hGLEdBQUcsRUFBRTtnQ0FDSCxZQUFZLEVBQUUsRUFBQyxDQUFVLE9BQVJELE9BQU8sQ0FBRTtnQ0FDMUIsTUFBTSxFQUFFLEVBQUMsQ0FBTSxPQUFKQyxHQUFHLENBQUU7NkJBQ2pCO3lCQUNGLENBQUM7d0JBRUZJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7d0JBRVhDLE1BQU0sR0FBRzs0QkFDYixjQUFjLEVBQUUsa0JBQWtCO3lCQUNuQyxDQUFDO3dCQUVGRyxLQUFLLENBQUNkLEdBQUcsRUFBRTs0QkFDVGUsTUFBTSxFQUFFLFFBQVE7NEJBQ2hCTCxJQUFJLEVBQUVNLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxJQUFJLENBQUM7NEJBQzFCUSxPQUFPLEVBQUVQLE1BQU07eUJBQ2hCLENBQUMsQ0FDQ1EsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUNBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO3lCQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7NEJBQ2JqQixRQUFRLENBQUNpQixHQUFHLENBQUMsQ0FBQzs0QkFDZFIsT0FBTyxDQUFDQyxHQUFHLENBQUNPLEdBQUcsQ0FBQzt5QkFDakIsQ0FBQyxDQUNERSxLQUFLLENBQUMsU0FBQ0MsR0FBRzttQ0FBS1gsT0FBTyxDQUFDWSxLQUFLLENBQUMsd0JBQXdCLEVBQUVELEdBQUcsQ0FBQzt5QkFBQSxDQUFDLENBQzVERSxPQUFPLENBQUMsV0FBTTs0QkFDYnBCLFlBQVksQ0FBQyxLQUFLLENBQUM7NEJBRW5CLElBQU1xQixXQUFXLEdBQUdDLFVBQVUsQ0FBQyxXQUFNO2dDQUNqQ2xCLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLENBQUM7NkJBQ2xCLEVBQUUsR0FBRyxDQUFDOzRCQUVQO3VDQUFNcUIsWUFBWSxDQUFDRixXQUFXLENBQUM7NkJBQUEsRUFBQzt5QkFDbkMsQ0FBQyxDQUFDOzs7Ozs7U0FDTjt3QkFsQ0twQixVQUFVOzs7T0FrQ2Y7SUFFRCxPQUFPO1FBQUVBLFVBQVUsRUFBVkEsVUFBVTtRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRUYsS0FBSyxFQUFMQSxLQUFLO0tBQUUsQ0FBQztDQUN6QyxDQUFDO0dBekNXRCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VEZWxldGUudHN4PzdjNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXJsID1cbiAgXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9pbnZva2UvZGVsZXRlQXNzZXRcIjtcblxuaW50ZXJmYWNlIENhbGxEZWxldGVQcm9wcyB7XG4gIGRvY1R5cGU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIHJlZmV0Y2godHlwZTogc3RyaW5nKTogdm9pZFxufVxuXG5leHBvcnQgY29uc3QgdXNlRGVsZXRlID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsRGVsZXRlID0gYXN5bmMgKHsgZG9jVHlwZSwga2V5LCByZWZldGNoIH06IENhbGxEZWxldGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBrZXk6IHtcbiAgICAgICAgXCJAYXNzZXRUeXBlXCI6IGAke2RvY1R5cGV9YCxcbiAgICAgICAgXCJAa2V5XCI6IGAke2tleX1gLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coYm9keSlcblxuICAgIGNvbnN0IGhlYWRlciA9IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH07XG5cbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgaGVhZGVyczogaGVhZGVyLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRNeVJlcyhyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJzb21ldGhpbmcgaGFwcGVuZWQgLT4gXCIsIGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcblxuICAgICAgICBjb25zdCBjYWxsUmVmZXRjaCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVmZXRjaChkb2NUeXBlKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgXG4gICAgICAgICAgKCkgPT4gY2xlYXJUaW1lb3V0KGNhbGxSZWZldGNoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGNhbGxEZWxldGUsIGlzTG9hZGluZywgbXlSZXMgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1cmwiLCJ1c2VEZWxldGUiLCJteVJlcyIsInNldE15UmVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2FsbERlbGV0ZSIsImRvY1R5cGUiLCJrZXkiLCJyZWZldGNoIiwiYm9keSIsImhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwiZmluYWxseSIsImNhbGxSZWZldGNoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useDelete.tsx\n");

/***/ })

});