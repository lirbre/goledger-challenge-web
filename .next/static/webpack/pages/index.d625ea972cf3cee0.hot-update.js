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

/***/ "./src/hooks/useSearch.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useSearch.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSearch\": function() { return /* binding */ useSearch; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/search\";\nvar useSearch = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callSearch = function(docType) {\n        console.log(docType);\n        var body = {\n            query: {\n                selector: {\n                    \"@assetType\": \"\".concat(docType)\n                }\n            }\n        };\n        var header = {\n            \"Content-Type\": \"application/json\"\n        };\n        fetch(url, {\n            method: \"POST\",\n            body: JSON.stringify(body),\n            headers: header\n        }).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            setMyRes(res.result);\n        }).catch(function(err) {\n            return console.error(\"something happened -> \", err);\n        }).finally(function() {\n            return setIsLoading(false);\n        });\n    };\n    var refetch = function(doctype) {\n        setIsLoading(true);\n        callSearch(doctype);\n    };\n    return {\n        callSearch: callSearch,\n        isLoading: isLoading,\n        myRes: myRes,\n        refetch: refetch\n    };\n};\n_s(useSearch, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU2VhcmNoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7O0FBRWpDLElBQU1DLEdBQUcsR0FBRyxvRUFBb0U7QUFFekUsSUFBTUMsU0FBUyxHQUFHLFdBQVU7O0lBQ2pDLElBQTBCRixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVyxJQUFJLENBQUMsRUFMcEQsS0FLYyxHQUFjQSxHQUF3QixHQUF0QyxFQUxkLFFBS3dCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLElBQWtDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBVSxJQUFJLENBQUMsRUFOM0QsU0FNa0IsR0FBa0JBLElBQXVCLEdBQXpDLEVBTmxCLFlBTWdDLEdBQUlBLElBQXVCLEdBQTNCO0lBRTlCLElBQU1PLFVBQVUsR0FBRyxTQUFDQyxPQUFlLEVBQU07UUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7UUFDcEIsSUFBTUcsSUFBSSxHQUFHO1lBQ1hDLEtBQUssRUFBRTtnQkFDTEMsUUFBUSxFQUFFO29CQUNSLFlBQVksRUFBRSxFQUFDLENBQVUsT0FBUkwsT0FBTyxDQUFFO2lCQUMzQjthQUNGO1NBQ0Y7UUFDRCxJQUFNTSxNQUFNLEdBQUc7WUFDWCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBRURDLEtBQUssQ0FBQ2QsR0FBRyxFQUFFO1lBQUVlLE1BQU0sRUFBRSxNQUFNO1lBQUVMLElBQUksRUFBRU0sSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUksQ0FBQztZQUFFUSxPQUFPLEVBQUVMLE1BQU07U0FBRSxDQUFDLENBQ3hFTSxJQUFJLENBQUMsU0FBQ0MsR0FBRzttQkFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO1lBQ2JqQixRQUFRLENBQUNpQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQUNDLEdBQUc7bUJBQUtoQixPQUFPLENBQUNpQixLQUFLLENBQUMsd0JBQXdCLEVBQUVELEdBQUcsQ0FBQztTQUFBLENBQUMsQ0FDNURFLE9BQU8sQ0FBQzttQkFBTXJCLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDdkM7SUFFRCxJQUFNc0IsT0FBTyxHQUFHLFNBQUNDLE9BQWUsRUFBSztRQUNuQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDbEJDLFVBQVUsQ0FBQ3NCLE9BQU8sQ0FBQztLQUNwQjtJQUVELE9BQU87UUFBRXRCLFVBQVUsRUFBVkEsVUFBVTtRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRUYsS0FBSyxFQUFMQSxLQUFLO1FBQUV5QixPQUFPLEVBQVBBLE9BQU87S0FBRSxDQUFDO0NBQ2xELENBQUM7R0FoQ1cxQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VTZWFyY2gudHN4PzUwODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXJsID0gXCJodHRwOi8vZWMyLTEwMC0yNS0xMzYtMTI4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tL2FwaS9xdWVyeS9zZWFyY2hcIlxuXG5leHBvcnQgY29uc3QgdXNlU2VhcmNoID0gPFQsPigpID0+IHtcbiAgY29uc3QgW215UmVzLCBzZXRNeVJlc10gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCBjYWxsU2VhcmNoID0gKGRvY1R5cGU6IHN0cmluZyApID0+IHtcbiAgICBjb25zb2xlLmxvZyhkb2NUeXBlKVxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBxdWVyeToge1xuICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBgJHtkb2NUeXBlfWAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cblxuICAgIGZldGNoKHVybCwgeyBtZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSwgaGVhZGVyczogaGVhZGVyIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRNeVJlcyhyZXMucmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcInNvbWV0aGluZyBoYXBwZW5lZCAtPiBcIiwgZXJyKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlZmV0Y2ggPSAoZG9jdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgY2FsbFNlYXJjaChkb2N0eXBlKVxuICB9XG5cbiAgcmV0dXJuIHsgY2FsbFNlYXJjaCwgaXNMb2FkaW5nLCBteVJlcywgcmVmZXRjaCB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVybCIsInVzZVNlYXJjaCIsIm15UmVzIiwic2V0TXlSZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYWxsU2VhcmNoIiwiZG9jVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwicXVlcnkiLCJzZWxlY3RvciIsImhlYWRlciIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJmaW5hbGx5IiwicmVmZXRjaCIsImRvY3R5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useSearch.tsx\n");

/***/ })

});