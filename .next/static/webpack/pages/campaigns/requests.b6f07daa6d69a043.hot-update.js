"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\nclass RequestRow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        const { Row, Cell } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table;\n        const { id, request, approversCount } = this.props;\n        //const readyToFinalize = request.approvalCount > approversCount / 2;\n        const readyToFinalize = request.approvalCount > BigInt(approversCount) / BigInt(2);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n            disabled: request.complete,\n            positive: readyToFinalize && !request.complete,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    children: id\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    children: request.description\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\")\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    children: request.recipient\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    children: [\n                        request.approvalCount.toString(),\n                        \"/\",\n                        approversCount.toString()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    children: request.complete ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        color: \"green\",\n                        basic: true,\n                        onClick: this.onApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                    children: request.complete ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        color: \"teal\",\n                        basic: true,\n                        onClick: this.onFinalize,\n                        children: \"Finalize\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/oguzhanpeker/SolidityProjects/kickstarter/components/RequestRow.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.onApprove = async ()=>{\n            const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.props.address);\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n            await campaign.methods.approveRequest(this.props.id).send({\n                from: accounts[0]\n            });\n        };\n        this.onFinalize = async ()=>{\n            const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.props.address);\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n            await campaign.methods.finalizeRequest(this.props.id).send({\n                from: accounts[0]\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ1M7QUFDZDtBQUNRO0FBRTVDLE1BQU1NLG1CQUFtQkwsNENBQVNBO0lBbUJoQ00sU0FBUztRQUNQLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsR0FBR1Asb0RBQUtBO1FBQzNCLE1BQU0sRUFBRVEsRUFBRSxFQUFFQyxPQUFPLEVBQUVDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUNsRCxxRUFBcUU7UUFDckUsTUFBTUMsa0JBQ0pILFFBQVFJLGFBQWEsR0FBR0MsT0FBT0osa0JBQWtCSSxPQUFPO1FBRTFELHFCQUNFLDhEQUFDUjtZQUNDUyxVQUFVTixRQUFRTyxRQUFRO1lBQzFCQyxVQUFVTCxtQkFBbUIsQ0FBQ0gsUUFBUU8sUUFBUTs7OEJBRTlDLDhEQUFDVDs4QkFBTUM7Ozs7Ozs4QkFDUCw4REFBQ0Q7OEJBQU1FLFFBQVFTLFdBQVc7Ozs7Ozs4QkFDMUIsOERBQUNYOzhCQUFNTCw0REFBVSxDQUFDa0IsT0FBTyxDQUFDWCxRQUFRWSxLQUFLLEVBQUU7Ozs7Ozs4QkFDekMsOERBQUNkOzhCQUFNRSxRQUFRYSxTQUFTOzs7Ozs7OEJBQ3hCLDhEQUFDZjs7d0JBQ0VFLFFBQVFJLGFBQWEsQ0FBQ1UsUUFBUTt3QkFBRzt3QkFBRWIsZUFBZWEsUUFBUTs7Ozs7Ozs4QkFFN0QsOERBQUNoQjs4QkFDRUUsUUFBUU8sUUFBUSxHQUFHLHFCQUNsQiw4REFBQ2YscURBQU1BO3dCQUFDdUIsT0FBTTt3QkFBUUMsS0FBSzt3QkFBQ0MsU0FBUyxJQUFJLENBQUNDLFNBQVM7a0NBQUU7Ozs7Ozs7Ozs7OzhCQUt6RCw4REFBQ3BCOzhCQUNFRSxRQUFRTyxRQUFRLEdBQUcscUJBQ2xCLDhEQUFDZixxREFBTUE7d0JBQUN1QixPQUFNO3dCQUFPQyxLQUFLO3dCQUFDQyxTQUFTLElBQUksQ0FBQ0UsVUFBVTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPL0Q7OzthQXJEQUQsWUFBWTtZQUNWLE1BQU1FLFdBQVcxQiw4REFBUUEsQ0FBQyxJQUFJLENBQUNRLEtBQUssQ0FBQ21CLE9BQU87WUFFNUMsTUFBTUMsV0FBVyxNQUFNN0IsMERBQVEsQ0FBQytCLFdBQVc7WUFDM0MsTUFBTUosU0FBU0ssT0FBTyxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDeEIsS0FBSyxDQUFDSCxFQUFFLEVBQUU0QixJQUFJLENBQUM7Z0JBQ3hEQyxNQUFNTixRQUFRLENBQUMsRUFBRTtZQUNuQjtRQUNGO2FBRUFILGFBQWE7WUFDWCxNQUFNQyxXQUFXMUIsOERBQVFBLENBQUMsSUFBSSxDQUFDUSxLQUFLLENBQUNtQixPQUFPO1lBRTVDLE1BQU1DLFdBQVcsTUFBTTdCLDBEQUFRLENBQUMrQixXQUFXO1lBQzNDLE1BQU1KLFNBQVNLLE9BQU8sQ0FBQ0ksZUFBZSxDQUFDLElBQUksQ0FBQzNCLEtBQUssQ0FBQ0gsRUFBRSxFQUFFNEIsSUFBSSxDQUFDO2dCQUN6REMsTUFBTU4sUUFBUSxDQUFDLEVBQUU7WUFDbkI7UUFDRjs7QUFzQ0Y7QUFFQSwrREFBZTNCLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2NhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcblxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcbiAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uRmluYWxpemUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZmluYWxpemVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xuICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICAvL2NvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcbiAgICBjb25zdCByZWFkeVRvRmluYWxpemUgPVxuICAgICAgcmVxdWVzdC5hcHByb3ZhbENvdW50ID4gQmlnSW50KGFwcHJvdmVyc0NvdW50KSAvIEJpZ0ludCgyKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGRpc2FibGVkPXtyZXF1ZXN0LmNvbXBsZXRlfVxuICAgICAgICBwb3NpdGl2ZT17cmVhZHlUb0ZpbmFsaXplICYmICFyZXF1ZXN0LmNvbXBsZXRlfVxuICAgICAgPlxuICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgICA8Q2VsbD57cmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XG4gICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKX08L0NlbGw+XG4gICAgICAgIDxDZWxsPntyZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XG4gICAgICAgIDxDZWxsPlxuICAgICAgICAgIHtyZXF1ZXN0LmFwcHJvdmFsQ291bnQudG9TdHJpbmcoKX0ve2FwcHJvdmVyc0NvdW50LnRvU3RyaW5nKCl9XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgICAgPENlbGw+XG4gICAgICAgICAge3JlcXVlc3QuY29tcGxldGUgPyBudWxsIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9PlxuICAgICAgICAgICAgICBBcHByb3ZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NlbGw+XG4gICAgICAgIDxDZWxsPlxuICAgICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ0ZWFsXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkZpbmFsaXplfT5cbiAgICAgICAgICAgICAgRmluYWxpemVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInJlbmRlciIsIlJvdyIsIkNlbGwiLCJpZCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInByb3BzIiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsIkJpZ0ludCIsImRpc2FibGVkIiwiY29tcGxldGUiLCJwb3NpdGl2ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJ0b1N0cmluZyIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIiwib25BcHByb3ZlIiwib25GaW5hbGl6ZSIsImNhbXBhaWduIiwiYWRkcmVzcyIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsImZpbmFsaXplUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});