self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.js":
/*!*******************************!*\
  !*** ./src/pages/checkout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var _components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CheckoutProduct */ "./src/components/CheckoutProduct.jsx");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ "./node_modules/next-auth/react/index.js");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\pages\\checkout.js",
    _s = $RefreshSig$();









function Checkout() {
  _s();

  var _this = this;

  //Get updated items from the redux store
  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);

  var _useSession = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)(),
      session = _useSession.data;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-grow m-5 shadow-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: "https://links.papareact.com/ikj",
          width: 1020,
          height: 250,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? 'Your Amazon basket is empty' : 'Shopping Basket'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this), items.map(function (items, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_6__.default, {
              id: items.id,
              title: items.title,
              price: items.price,
              description: items.description,
              category: items.category,
              image: items.image,
              hasPrime: items.hasPrime
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 33
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col bg",
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["Subtotal(", items.length, " items):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button mt-2 ".concat(!session && 'from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed'),
            children: !session ? 'Sign in to Checkout' : "Proceed to Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 29
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(Checkout, "rhF68VoazRaqUv0W1SqHC9esvrc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession];
});

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJkYXRhIiwibGVuZ3RoIiwibWFwIiwiaSIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFFaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUVDLHdEQUFXLENBQUNDLDREQUFELENBQXhCOztBQUhnQixvQkFJT0MsMkRBQVUsRUFKakI7QUFBQSxNQUlKQyxPQUpJLGVBSVRDLElBSlM7O0FBS2xCLHNCQUVNO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxrQ0FBaEI7QUFBQSw4QkFHSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDSSw4REFBQyxtREFBRDtBQUNBLGFBQUcsRUFBQyxpQ0FESjtBQUVBLGVBQUssRUFBRSxJQUZQO0FBR0EsZ0JBQU0sRUFBRSxHQUhSO0FBSUEsbUJBQVMsRUFBRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFRSTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsd0JBQWQ7QUFBQSxzQkFJRUwsS0FBSyxDQUFDTSxNQUFOLEtBQWdCLENBQWhCLEdBRUQsNkJBRkMsR0FHRDtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFlU04sS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ1AsS0FBRCxFQUFRUSxDQUFSO0FBQUEsZ0NBRVAsOERBQUMsZ0VBQUQ7QUFFQSxnQkFBRSxFQUFJUixLQUFLLENBQUNTLEVBRlo7QUFHQSxtQkFBSyxFQUFJVCxLQUFLLENBQUNVLEtBSGY7QUFJQSxtQkFBSyxFQUFJVixLQUFLLENBQUNXLEtBSmY7QUFLQSx5QkFBVyxFQUFHWCxLQUFLLENBQUNZLFdBTHBCO0FBTUEsc0JBQVEsRUFBSVosS0FBSyxDQUFDYSxRQU5sQjtBQU9BLG1CQUFLLEVBQUliLEtBQUssQ0FBQ2MsS0FQZjtBQVFBLHNCQUFRLEVBQUlkLEtBQUssQ0FBQ2U7QUFSbEIsZUFDT1AsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZPO0FBQUEsV0FBVixDQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQThDSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxrQkFDS1IsS0FBSyxDQUFDTSxNQUFOLEdBQWUsQ0FBZixpQkFDRztBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBLG9DQUNjTixLQUFLLENBQUNNLE1BRHBCLDJCQUVJO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVFJO0FBQVEscUJBQVMsd0JBQW1CLENBQUNGLE9BQUQsSUFBWSw0REFBL0IsQ0FBakI7QUFBQSxzQkFDSyxDQUFDQSxPQUFELEdBQVcscUJBQVgsR0FBbUM7QUFEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSjtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGTjtBQTBFRDs7R0EvRVFMLFE7VUFHUUUsb0QsRUFDVUUsdUQ7OztLQUpsQkosUTtBQWlGVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC4xYzFiNmM0MTVhOGRkNWEzNGU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RJdGVtcyB9IGZyb20gJy4uL3NsaWNlcy9iYXNrZXRTbGljZSdcclxuaW1wb3J0IENoZWNrb3V0UHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrb3V0UHJvZHVjdCdcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuXHJcbiAgICAvL0dldCB1cGRhdGVkIGl0ZW1zIGZyb20gdGhlIHJlZHV4IHN0b3JlXHJcbiAgICBjb25zdCBpdGVtcz0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpXHJcbiAgICBjb25zdCB7ZGF0YTpzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwJz5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG8nPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBsZWZ0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBtLTUgc2hhZG93LXNtJz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pa2onXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0ID0nY29udGFpbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwLTUgc3BhY2UteS0xMCBiZy13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGJvcmRlci1iIHBiLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIEpBVkFTQ1JJUFQgTU9ERSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJRiBCQVNLRVQgSVMgRU1QVFkgRElTUExBWSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PTAgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBBbWF6b24gYmFza2V0IGlzIGVtcHR5JyA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ1Nob3BwaW5nIEJhc2tldCdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1BUCBBTkQgUkVOREVSIFRIRSBDSEVDS09VVCBQUk9EVUNUICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW1zLCBpKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7aXRlbXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB7aXRlbXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSB7aXRlbXMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249IHtpdGVtcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHtpdGVtcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IHtpdGVtcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcmltZSA9IHtpdGVtcy5oYXNQcmltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmlnaHQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBiZyc+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLW5vd3JhcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VidG90YWwoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDdXJyZW5jeSBxdWFudGl0eSA9IHt0b3RhbH0gY3VycmVuY3kgPSAnVVNEJy8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSB7YGJ1dHRvbiBtdC0yICR7IXNlc3Npb24gJiYgJ2Zyb20tZ3JheS0zMDAgdG8tZ3JheS01MDAgdGV4dC1ncmF5LTMwMCBjdXJzb3Itbm90LWFsbG93ZWQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2Vzc2lvbiA/ICdTaWduIGluIHRvIENoZWNrb3V0JyA6IFwiUHJvY2VlZCB0byBDaGVja291dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dCJdLCJzb3VyY2VSb290IjoiIn0=