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

/***/ "./src/hooks/useSearch.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useSearch.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSearch\": function() { return /* binding */ useSearch; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nvar url = \"http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/search\";\nvar useSearch = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), myRes = ref[0], setMyRes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    var callSearch = function(docType) {\n        var body = {\n            query: {\n                selector: {\n                    \"@assetType\": \"car\"\n                }\n            }\n        };\n        var header = {\n            \"Content-Type\": \"application/json\"\n        };\n        fetch(url, {\n            method: \"POST\",\n            body: JSON.stringify(body),\n            headers: header\n        }).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            setMyRes(res);\n        }).catch(function(err) {\n            return console.error(\"something happened -> \", err);\n        }).finally(function() {\n            return setIsLoading(false);\n        });\n    };\n    return {\n        callSearch: callSearch,\n        isLoading: isLoading,\n        myRes: myRes\n    };\n};\n_s(useSearch, \"qv4U+FKZhTn1CD7pcwKu8oPJfiM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU2VhcmNoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7O0FBRWpDLElBQU1DLEdBQUcsR0FBRyxvRUFBb0U7QUFFekUsSUFBTUMsU0FBUyxHQUFHLFdBQVU7O0lBQ2pDLElBQTBCRixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBVyxJQUFJLENBQUMsRUFMcEQsS0FLYyxHQUFjQSxHQUF3QixHQUF0QyxFQUxkLFFBS3dCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLElBQWtDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBVSxJQUFJLENBQUMsRUFOM0QsU0FNa0IsR0FBa0JBLElBQXVCLEdBQXpDLEVBTmxCLFlBTWdDLEdBQUlBLElBQXVCLEdBQTNCO0lBRTlCLElBQU1PLFVBQVUsR0FBRyxTQUFDQyxPQUFlLEVBQU07UUFDdkMsSUFBTUMsSUFBSSxHQUFHO1lBQ1hDLEtBQUssRUFBRTtnQkFDTEMsUUFBUSxFQUFFO29CQUNSLFlBQVksRUFBRyxLQUFHO2lCQUNuQjthQUNGO1NBQ0Y7UUFDRCxJQUFNQyxNQUFNLEdBQUc7WUFDWCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO1FBRURDLEtBQUssQ0FBQ1osR0FBRyxFQUFFO1lBQUVhLE1BQU0sRUFBRSxNQUFNO1lBQUVMLElBQUksRUFBRU0sSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUksQ0FBQztZQUFFUSxPQUFPLEVBQUVMLE1BQU07U0FBRSxDQUFDLENBQ3hFTSxJQUFJLENBQUMsU0FBQ0MsR0FBRzttQkFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO1lBQ2JmLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDLENBQUM7U0FDZixDQUFDLENBQ0RFLEtBQUssQ0FBQyxTQUFDQyxHQUFHO21CQUFLQyxPQUFPLENBQUNDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRUYsR0FBRyxDQUFDO1NBQUEsQ0FBQyxDQUM1REcsT0FBTyxDQUFDO21CQUFNbkIsWUFBWSxDQUFDLEtBQUssQ0FBQztTQUFBLENBQUMsQ0FBQztLQUN2QztJQUVELE9BQU87UUFBRUMsVUFBVSxFQUFWQSxVQUFVO1FBQUVGLFNBQVMsRUFBVEEsU0FBUztRQUFFRixLQUFLLEVBQUxBLEtBQUs7S0FBRSxDQUFDO0NBQ3pDLENBQUM7R0ExQldELFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVNlYXJjaC50c3g/NTA4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9lYzItMTAwLTI1LTEzNi0xMjguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20vYXBpL3F1ZXJ5L3NlYXJjaFwiXG5cbmV4cG9ydCBjb25zdCB1c2VTZWFyY2ggPSA8VCw+KCkgPT4ge1xuICBjb25zdCBbbXlSZXMsIHNldE15UmVzXSA9IHVzZVN0YXRlPFQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIGNvbnN0IGNhbGxTZWFyY2ggPSAoZG9jVHlwZTogc3RyaW5nICkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBxdWVyeToge1xuICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgIFwiQGFzc2V0VHlwZVwiOiBgY2FyYCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBoZWFkZXIgPSB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuXG4gICAgZmV0Y2godXJsLCB7IG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLCBoZWFkZXJzOiBoZWFkZXIgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldE15UmVzKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJzb21ldGhpbmcgaGFwcGVuZWQgLT4gXCIsIGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICByZXR1cm4geyBjYWxsU2VhcmNoLCBpc0xvYWRpbmcsIG15UmVzIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXJsIiwidXNlU2VhcmNoIiwibXlSZXMiLCJzZXRNeVJlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNhbGxTZWFyY2giLCJkb2NUeXBlIiwiYm9keSIsInF1ZXJ5Iiwic2VsZWN0b3IiLCJoZWFkZXIiLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImZpbmFsbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useSearch.tsx\n");

/***/ })

});