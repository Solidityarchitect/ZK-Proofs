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

/***/ "./components/interface.js":
/*!*********************************!*\
  !*** ./components/interface.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_$u__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/$u */ \"./utils/$u.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst wc = __webpack_require__(/*! ../circuit/witness_calculator */ \"./circuit/witness_calculator.js\");\nconst Interface = ()=>{\n    _s();\n    const [account, updateAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const connectMetamask = async ()=>{\n        try {\n            if (!window.ethereum) {\n                alert(\"Please install Metamask to use this app.\");\n                throw \"no-metamask\";\n            }\n            var accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            var chainId = window.ethereum.networkVersion;\n            var activeAccount = accounts[0];\n            var balance = await window.ethereum.request({\n                method: \"eth_getBalance\",\n                params: [\n                    activeAccount,\n                    \"latest\"\n                ]\n            });\n            balance = _utils_$u__WEBPACK_IMPORTED_MODULE_2__[\"default\"].moveDecimalLeft(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber.from(balance).toString(), 18);\n            var newAccountState = {\n                chainId: chainId,\n                address: activeAccount,\n                balance: balance\n            };\n            updateAccount(newAccountState);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const depositEther = async ()=>{\n        // generate secret, nullifier\n        const secret = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber.from(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.randomBytes(32)).toString();\n        const nullifier = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber.from(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.randomBytes(32)).toString();\n        const input = {\n            secret: _utils_$u__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BN256ToBin(secret).split(\"\"),\n            nullifier: _utils_$u__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BN256ToBin(nullifier).split(\"\")\n        };\n        var res = await fetch(\"/deposit.wasm\");\n        var buffer = await res.arrayBuffer();\n        var depositWC = await wc(buffer);\n        const r = await depositWC.calculateWitness(input);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !!account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"chainId: \",\n                            account.chainId\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Wallet Address: \",\n                            account.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Balance: \",\n                            account.balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: connectMetamask,\n                    children: \"Connect Metamask\"\n                }, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 64,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            !!account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: depositEther,\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"You need to connect Metamask to use this section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 78,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Interface, \"kFtZZPzcWEIecIb4PXVTED1DKKc=\");\n_c = Interface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interface);\nvar _c;\n$RefreshReg$(_c, \"Interface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUNHO0FBRS9CLE1BQU1HLEtBQUtDLG1CQUFPQSxDQUFDLHNFQUErQjtBQUVsRCxNQUFNQyxZQUFZOztJQUNkLE1BQU0sQ0FBQ0MsU0FBU0MsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUxQyxNQUFNUSxrQkFBa0I7UUFDcEIsSUFBSTtZQUNBLElBQUksQ0FBQ0MsT0FBT0MsUUFBUSxFQUFFO2dCQUNsQkMsTUFBTTtnQkFDTixNQUFNO1lBQ1Y7WUFFQSxJQUFJQyxXQUFXLE1BQU1ILE9BQU9DLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQXNCO1lBQzdFLElBQUlDLFVBQVVOLE9BQU9DLFFBQVEsQ0FBQ00sY0FBYztZQUM1QyxJQUFJQyxnQkFBZ0JMLFFBQVEsQ0FBQyxFQUFFO1lBQy9CLElBQUlNLFVBQVUsTUFBTVQsT0FBT0MsUUFBUSxDQUFDRyxPQUFPLENBQUM7Z0JBQ3hDQyxRQUFRO2dCQUNSSyxRQUFRO29CQUFDRjtvQkFBZTtpQkFBUztZQUNyQztZQUNBQyxVQUFVakIsaUVBQWtCLENBQUNDLDBDQUFNQSxDQUFDbUIsU0FBUyxDQUFDQyxJQUFJLENBQUNKLFNBQVNLLFFBQVEsSUFBSTtZQUV4RSxJQUFJQyxrQkFBa0I7Z0JBQ2xCVCxTQUFTQTtnQkFDVFUsU0FBU1I7Z0JBQ1RDLFNBQVNBO1lBQ2I7WUFDQVgsY0FBY2lCO1FBQ2xCLEVBQUUsT0FBT0UsR0FBRztZQUNSQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFFQSxNQUFNRyxlQUFlO1FBQ2pCLDZCQUE2QjtRQUM3QixNQUFNQyxTQUFTNUIsMENBQU1BLENBQUNtQixTQUFTLENBQUNDLElBQUksQ0FBQ3BCLDBDQUFNQSxDQUFDNkIsS0FBSyxDQUFDQyxXQUFXLENBQUMsS0FBS1QsUUFBUTtRQUMzRSxNQUFNVSxZQUFZL0IsMENBQU1BLENBQUNtQixTQUFTLENBQUNDLElBQUksQ0FBQ3BCLDBDQUFNQSxDQUFDNkIsS0FBSyxDQUFDQyxXQUFXLENBQUMsS0FBS1QsUUFBUTtRQUU5RSxNQUFNVyxRQUFRO1lBQ1ZKLFFBQVE3Qiw0REFBYSxDQUFDNkIsUUFBUU0sS0FBSyxDQUFDO1lBQ3BDSCxXQUFXaEMsNERBQWEsQ0FBQ2dDLFdBQVdHLEtBQUssQ0FBQztRQUM5QztRQUVBLElBQUlDLE1BQU0sTUFBTUMsTUFBTTtRQUN0QixJQUFJQyxTQUFTLE1BQU1GLElBQUlHLFdBQVc7UUFDbEMsSUFBSUMsWUFBWSxNQUFNdEMsR0FBR29DO1FBRXpCLE1BQU1HLElBQUksTUFBTUQsVUFBVUUsZ0JBQWdCLENBQUNUO0lBQy9DO0lBRUEscUJBQ0ksOERBQUNVOztZQUNJLENBQUMsQ0FBQ3RDLHdCQUNDLDhEQUFDc0M7O2tDQUNHLDhEQUFDQzs7NEJBQUU7NEJBQVV2QyxRQUFRUyxPQUFPOzs7Ozs7O2tDQUM1Qiw4REFBQzhCOzs0QkFBRTs0QkFBaUJ2QyxRQUFRbUIsT0FBTzs7Ozs7OztrQ0FDbkMsOERBQUNvQjs7NEJBQUU7NEJBQVV2QyxRQUFRWSxPQUFPOzs7Ozs7Ozs7Ozs7MENBR2hDLDhEQUFDMEI7MEJBQ0csNEVBQUNFO29CQUFPQyxTQUFTdkM7OEJBQWlCOzs7Ozs7Ozs7OzswQkFJMUMsOERBQUNvQzswQkFDRyw0RUFBQ0k7Ozs7Ozs7Ozs7WUFHSixDQUFDLENBQUMxQyx3QkFDQyw4REFBQ3NDOzBCQUNHLDRFQUFDRTtvQkFBT0MsU0FBU2xCOzhCQUFjOzs7Ozs7Ozs7OzBDQUduQyw4REFBQ2U7MEJBQ0csNEVBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QjtHQTVFTXhDO0tBQUFBO0FBOEVOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlLmpzPzhjYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICR1IGZyb20gXCIuLi91dGlscy8kdVwiXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcblxuY29uc3Qgd2MgPSByZXF1aXJlKFwiLi4vY2lyY3VpdC93aXRuZXNzX2NhbGN1bGF0b3JcIilcblxuY29uc3QgSW50ZXJmYWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IFthY2NvdW50LCB1cGRhdGVBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBjb25uZWN0TWV0YW1hc2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2sgdG8gdXNlIHRoaXMgYXBwLlwiKVxuICAgICAgICAgICAgICAgIHRocm93IFwibm8tbWV0YW1hc2tcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgICAgIHZhciBjaGFpbklkID0gd2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uXG4gICAgICAgICAgICB2YXIgYWN0aXZlQWNjb3VudCA9IGFjY291bnRzWzBdXG4gICAgICAgICAgICB2YXIgYmFsYW5jZSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZXRoX2dldEJhbGFuY2VcIixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFthY3RpdmVBY2NvdW50LCBcImxhdGVzdFwiXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiYWxhbmNlID0gJHUubW92ZURlY2ltYWxMZWZ0KGV0aGVycy5CaWdOdW1iZXIuZnJvbShiYWxhbmNlKS50b1N0cmluZygpLCAxOClcblxuICAgICAgICAgICAgdmFyIG5ld0FjY291bnRTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBjaGFpbklkOiBjaGFpbklkLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFjdGl2ZUFjY291bnQsXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogYmFsYW5jZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUFjY291bnQobmV3QWNjb3VudFN0YXRlKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVwb3NpdEV0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBnZW5lcmF0ZSBzZWNyZXQsIG51bGxpZmllclxuICAgICAgICBjb25zdCBzZWNyZXQgPSBldGhlcnMuQmlnTnVtYmVyLmZyb20oZXRoZXJzLnV0aWxzLnJhbmRvbUJ5dGVzKDMyKSkudG9TdHJpbmcoKVxuICAgICAgICBjb25zdCBudWxsaWZpZXIgPSBldGhlcnMuQmlnTnVtYmVyLmZyb20oZXRoZXJzLnV0aWxzLnJhbmRvbUJ5dGVzKDMyKSkudG9TdHJpbmcoKVxuXG4gICAgICAgIGNvbnN0IGlucHV0ID0ge1xuICAgICAgICAgICAgc2VjcmV0OiAkdS5CTjI1NlRvQmluKHNlY3JldCkuc3BsaXQoXCJcIiksXG4gICAgICAgICAgICBudWxsaWZpZXI6ICR1LkJOMjU2VG9CaW4obnVsbGlmaWVyKS5zcGxpdChcIlwiKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChcIi9kZXBvc2l0Lndhc21cIilcbiAgICAgICAgdmFyIGJ1ZmZlciA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpXG4gICAgICAgIHZhciBkZXBvc2l0V0MgPSBhd2FpdCB3YyhidWZmZXIpXG5cbiAgICAgICAgY29uc3QgciA9IGF3YWl0IGRlcG9zaXRXQy5jYWxjdWxhdGVXaXRuZXNzKGlucHV0KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ISFhY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPmNoYWluSWQ6IHthY2NvdW50LmNoYWluSWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5XYWxsZXQgQWRkcmVzczoge2FjY291bnQuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkJhbGFuY2U6IHthY2NvdW50LmJhbGFuY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RNZXRhbWFza30+Q29ubmVjdCBNZXRhbWFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ISFhY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVwb3NpdEV0aGVyfT5EZXBvc2l0IDEgRVRIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPllvdSBuZWVkIHRvIGNvbm5lY3QgTWV0YW1hc2sgdG8gdXNlIHRoaXMgc2VjdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiJHUiLCJldGhlcnMiLCJ3YyIsInJlcXVpcmUiLCJJbnRlcmZhY2UiLCJhY2NvdW50IiwidXBkYXRlQWNjb3VudCIsImNvbm5lY3RNZXRhbWFzayIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjaGFpbklkIiwibmV0d29ya1ZlcnNpb24iLCJhY3RpdmVBY2NvdW50IiwiYmFsYW5jZSIsInBhcmFtcyIsIm1vdmVEZWNpbWFsTGVmdCIsIkJpZ051bWJlciIsImZyb20iLCJ0b1N0cmluZyIsIm5ld0FjY291bnRTdGF0ZSIsImFkZHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsImRlcG9zaXRFdGhlciIsInNlY3JldCIsInV0aWxzIiwicmFuZG9tQnl0ZXMiLCJudWxsaWZpZXIiLCJpbnB1dCIsIkJOMjU2VG9CaW4iLCJzcGxpdCIsInJlcyIsImZldGNoIiwiYnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJkZXBvc2l0V0MiLCJyIiwiY2FsY3VsYXRlV2l0bmVzcyIsImRpdiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface.js\n"));

/***/ })

});