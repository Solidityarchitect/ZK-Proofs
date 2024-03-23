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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_$u__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/$u */ \"./utils/$u.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst wc = __webpack_require__(/*! ../circuit/witness_calculator */ \"./circuit/witness_calculator.js\");\nconst tornadoAddress = \"\";\nconst Interface = ()=>{\n    _s();\n    const [account, updateAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const connectMetamask = async ()=>{\n        try {\n            if (!window.ethereum) {\n                alert(\"Please install Metamask to use this app.\");\n                throw \"no-metamask\";\n            }\n            var accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            var chainId = window.ethereum.networkVersion;\n            var activeAccount = accounts[0];\n            var balance = await window.ethereum.request({\n                method: \"eth_getBalance\",\n                params: [\n                    activeAccount,\n                    \"latest\"\n                ]\n            });\n            balance = _utils_$u__WEBPACK_IMPORTED_MODULE_2__[\"default\"].moveDecimalLeft(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber.from(balance).toString(), 18);\n            var newAccountState = {\n                chainId: chainId,\n                address: activeAccount,\n                balance: balance\n            };\n            updateAccount(newAccountState);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const depositEther = async ()=>{\n        // generate secret, nullifier\n        const secret = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber.from(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.randomBytes(32)).toString();\n        const nullifier = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber.from(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.randomBytes(32)).toString();\n        const input = {\n            secret: _utils_$u__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BN256ToBin(secret).split(\"\"),\n            nullifier: _utils_$u__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BN256ToBin(nullifier).split(\"\")\n        };\n        var res = await fetch(\"/deposit.wasm\");\n        var buffer = await res.arrayBuffer();\n        var depositWC = await wc(buffer);\n        const r = await depositWC.calculateWitness(input, 0);\n        const commitment = r[1];\n        const nullifierHash = r[2];\n        const value = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BigNumber.from(\"1000000000000000000\").toHexString();\n        const tx = {\n            to: tornadoAddress,\n            from: account.address,\n            value: value,\n            data: \"\"\n        };\n        console.log(commitment);\n        console.log(nullifierHash);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !!account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"chainId: \",\n                            account.chainId\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Wallet Address: \",\n                            account.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Balance: \",\n                            account.balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: connectMetamask,\n                    children: \"Connect Metamask\"\n                }, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 80,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 79,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            !!account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: depositEther,\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 90,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 89,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"You need to connect Metamask to use this section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                    lineNumber: 94,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n                lineNumber: 93,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hosanna/ZK-Proofs/Tornado/frontend/components/interface.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Interface, \"kFtZZPzcWEIecIb4PXVTED1DKKc=\");\n_c = Interface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interface);\nvar _c;\n$RefreshReg$(_c, \"Interface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdKLENBQUMsQ0FBQ2pELHdCQUNDLDhEQUFDNkM7MEJBQ0csNEVBQUNFO29CQUFPQyxTQUFTekI7OEJBQWM7Ozs7Ozs7Ozs7MENBR25DLDhEQUFDc0I7MEJBQ0csNEVBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QjtHQTFGTS9DO0tBQUFBO0FBNEZOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlLmpzPzhjYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICR1IGZyb20gXCIuLi91dGlscy8kdVwiXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcblxuY29uc3Qgd2MgPSByZXF1aXJlKFwiLi4vY2lyY3VpdC93aXRuZXNzX2NhbGN1bGF0b3JcIilcblxuY29uc3QgdG9ybmFkb0FkZHJlc3MgPSBcIlwiXG5cbmNvbnN0IEludGVyZmFjZSA9ICgpID0+IHtcbiAgICBjb25zdCBbYWNjb3VudCwgdXBkYXRlQWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgY29ubmVjdE1ldGFtYXNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIHRvIHVzZSB0aGlzIGFwcC5cIilcbiAgICAgICAgICAgICAgICB0aHJvdyBcIm5vLW1ldGFtYXNrXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pXG4gICAgICAgICAgICB2YXIgY2hhaW5JZCA9IHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvblxuICAgICAgICAgICAgdmFyIGFjdGl2ZUFjY291bnQgPSBhY2NvdW50c1swXVxuICAgICAgICAgICAgdmFyIGJhbGFuY2UgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9nZXRCYWxhbmNlXCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbYWN0aXZlQWNjb3VudCwgXCJsYXRlc3RcIl0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFsYW5jZSA9ICR1Lm1vdmVEZWNpbWFsTGVmdChldGhlcnMuQmlnTnVtYmVyLmZyb20oYmFsYW5jZSkudG9TdHJpbmcoKSwgMTgpXG5cbiAgICAgICAgICAgIHZhciBuZXdBY2NvdW50U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgY2hhaW5JZDogY2hhaW5JZCxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhY3RpdmVBY2NvdW50LFxuICAgICAgICAgICAgICAgIGJhbGFuY2U6IGJhbGFuY2UsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVBY2NvdW50KG5ld0FjY291bnRTdGF0ZSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlcG9zaXRFdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgc2VjcmV0LCBudWxsaWZpZXJcbiAgICAgICAgY29uc3Qgc2VjcmV0ID0gZXRoZXJzLkJpZ051bWJlci5mcm9tKGV0aGVycy51dGlscy5yYW5kb21CeXRlcygzMikpLnRvU3RyaW5nKClcbiAgICAgICAgY29uc3QgbnVsbGlmaWVyID0gZXRoZXJzLkJpZ051bWJlci5mcm9tKGV0aGVycy51dGlscy5yYW5kb21CeXRlcygzMikpLnRvU3RyaW5nKClcblxuICAgICAgICBjb25zdCBpbnB1dCA9IHtcbiAgICAgICAgICAgIHNlY3JldDogJHUuQk4yNTZUb0JpbihzZWNyZXQpLnNwbGl0KFwiXCIpLFxuICAgICAgICAgICAgbnVsbGlmaWVyOiAkdS5CTjI1NlRvQmluKG51bGxpZmllcikuc3BsaXQoXCJcIiksXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goXCIvZGVwb3NpdC53YXNtXCIpXG4gICAgICAgIHZhciBidWZmZXIgPSBhd2FpdCByZXMuYXJyYXlCdWZmZXIoKVxuICAgICAgICB2YXIgZGVwb3NpdFdDID0gYXdhaXQgd2MoYnVmZmVyKVxuXG4gICAgICAgIGNvbnN0IHIgPSBhd2FpdCBkZXBvc2l0V0MuY2FsY3VsYXRlV2l0bmVzcyhpbnB1dCwgMClcblxuICAgICAgICBjb25zdCBjb21taXRtZW50ID0gclsxXVxuICAgICAgICBjb25zdCBudWxsaWZpZXJIYXNoID0gclsyXVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXRoZXJzLkJpZ051bWJlci5mcm9tKFwiMTAwMDAwMDAwMDAwMDAwMDAwMFwiKS50b0hleFN0cmluZygpXG5cbiAgICAgICAgY29uc3QgdHggPSB7XG4gICAgICAgICAgICB0bzogdG9ybmFkb0FkZHJlc3MsXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50LmFkZHJlc3MsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkYXRhOiBcIlwiLFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1pdG1lbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKG51bGxpZmllckhhc2gpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHshIWFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Y2hhaW5JZDoge2FjY291bnQuY2hhaW5JZH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPldhbGxldCBBZGRyZXNzOiB7YWNjb3VudC5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QmFsYW5jZToge2FjY291bnQuYmFsYW5jZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdE1ldGFtYXNrfT5Db25uZWN0IE1ldGFtYXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHshIWFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZXBvc2l0RXRoZXJ9PkRlcG9zaXQgMSBFVEg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+WW91IG5lZWQgdG8gY29ubmVjdCBNZXRhbWFzayB0byB1c2UgdGhpcyBzZWN0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJmYWNlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCIkdSIsImV0aGVycyIsIndjIiwicmVxdWlyZSIsInRvcm5hZG9BZGRyZXNzIiwiSW50ZXJmYWNlIiwiYWNjb3VudCIsInVwZGF0ZUFjY291bnQiLCJjb25uZWN0TWV0YW1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFsZXJ0IiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY2hhaW5JZCIsIm5ldHdvcmtWZXJzaW9uIiwiYWN0aXZlQWNjb3VudCIsImJhbGFuY2UiLCJwYXJhbXMiLCJtb3ZlRGVjaW1hbExlZnQiLCJCaWdOdW1iZXIiLCJmcm9tIiwidG9TdHJpbmciLCJuZXdBY2NvdW50U3RhdGUiLCJhZGRyZXNzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXBvc2l0RXRoZXIiLCJzZWNyZXQiLCJ1dGlscyIsInJhbmRvbUJ5dGVzIiwibnVsbGlmaWVyIiwiaW5wdXQiLCJCTjI1NlRvQmluIiwic3BsaXQiLCJyZXMiLCJmZXRjaCIsImJ1ZmZlciIsImFycmF5QnVmZmVyIiwiZGVwb3NpdFdDIiwiciIsImNhbGN1bGF0ZVdpdG5lc3MiLCJjb21taXRtZW50IiwibnVsbGlmaWVySGFzaCIsInZhbHVlIiwidG9IZXhTdHJpbmciLCJ0eCIsInRvIiwiZGF0YSIsImRpdiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface.js\n"));

/***/ })

});