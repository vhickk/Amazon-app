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
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_8__);
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

  var total = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectTotal);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? 'Your Amazon basket is empty' : 'Shopping Basket'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
              lineNumber: 48,
              columnNumber: 33
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col bg-white p-10 shadow-md",
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["Subtotal(", items.length, " items):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold ml-",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_8___default()), {
                quantity: total,
                currency: "USD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button mt-2 ".concat(!session && 'from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed'),
            children: !session ? 'Sign in to Checkout' : "Proceed to Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 29
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(Checkout, "BiXeI3BODnNSqB+PcG26/EC5YuI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJkYXRhIiwidG90YWwiLCJzZWxlY3RUb3RhbCIsImxlbmd0aCIsIm1hcCIsImkiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJoYXNQcmltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUVoQjtBQUNBLE1BQU1DLEtBQUssR0FBRUMsd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBeEI7O0FBSGdCLG9CQUlPQywyREFBVSxFQUpqQjtBQUFBLE1BSUpDLE9BSkksZUFJVEMsSUFKUzs7QUFLaEIsTUFBTUMsS0FBSyxHQUFFTCx3REFBVyxDQUFDTSw0REFBRCxDQUF4QjtBQUNGLHNCQUVNO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxrQ0FBaEI7QUFBQSw4QkFHSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDSSw4REFBQyxtREFBRDtBQUNBLGFBQUcsRUFBQyxpQ0FESjtBQUVBLGVBQUssRUFBRSxJQUZQO0FBR0EsZ0JBQU0sRUFBRSxHQUhSO0FBSUEsbUJBQVMsRUFBRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFRSTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsd0JBQWQ7QUFBQSxzQkFJRVAsS0FBSyxDQUFDUSxNQUFOLEtBQWdCLENBQWhCLEdBRUQsNkJBRkMsR0FHRDtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFlU1IsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ1QsS0FBRCxFQUFRVSxDQUFSO0FBQUEsZ0NBRVAsOERBQUMsZ0VBQUQ7QUFFQSxnQkFBRSxFQUFJVixLQUFLLENBQUNXLEVBRlo7QUFHQSxtQkFBSyxFQUFJWCxLQUFLLENBQUNZLEtBSGY7QUFJQSxtQkFBSyxFQUFJWixLQUFLLENBQUNhLEtBSmY7QUFLQSx5QkFBVyxFQUFHYixLQUFLLENBQUNjLFdBTHBCO0FBTUEsc0JBQVEsRUFBSWQsS0FBSyxDQUFDZSxRQU5sQjtBQU9BLG1CQUFLLEVBQUlmLEtBQUssQ0FBQ2dCLEtBUGY7QUFRQSxzQkFBUSxFQUFJaEIsS0FBSyxDQUFDaUI7QUFSbEIsZUFDT1AsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZPO0FBQUEsV0FBVixDQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQThDSTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxrQkFDS1YsS0FBSyxDQUFDUSxNQUFOLEdBQWUsQ0FBZixpQkFDRztBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBLG9DQUNjUixLQUFLLENBQUNRLE1BRHBCLDJCQUVJO0FBQU0sdUJBQVMsRUFBQyxlQUFoQjtBQUFBLHFDQUNJLDhEQUFDLGlFQUFEO0FBQVUsd0JBQVEsRUFBSUYsS0FBdEI7QUFBNkIsd0JBQVEsRUFBRztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFRSTtBQUFRLHFCQUFTLHdCQUFtQixDQUFDRixPQUFELElBQVksNERBQS9CLENBQWpCO0FBQUEsc0JBQ0ssQ0FBQ0EsT0FBRCxHQUFXLHFCQUFYLEdBQW1DO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUko7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk47QUEwRUQ7O0dBaEZRTCxRO1VBR1FFLG9ELEVBQ1VFLHVELEVBQ1ZGLG9EOzs7S0FMUkYsUTtBQWtGVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC42OGYwZjA4NmRjZjM2ZmM5NzFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RJdGVtcywgc2VsZWN0VG90YWwgfSBmcm9tICcuLi9zbGljZXMvYmFza2V0U2xpY2UnXHJcbmltcG9ydCBDaGVja291dFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja291dFByb2R1Y3QnXHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuXHJcbiAgICAvL0dldCB1cGRhdGVkIGl0ZW1zIGZyb20gdGhlIHJlZHV4IHN0b3JlXHJcbiAgICBjb25zdCBpdGVtcz0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpXHJcbiAgICBjb25zdCB7ZGF0YTpzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IHRvdGFsPSB1c2VTZWxlY3RvcihzZWxlY3RUb3RhbClcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwJz5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG8nPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBsZWZ0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBtLTUgc2hhZG93LXNtJz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pa2onXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0ID0nY29udGFpbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwLTUgc3BhY2UteS0xMCBiZy13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGJvcmRlci1iIHBiLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIEpBVkFTQ1JJUFQgTU9ERSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJRiBCQVNLRVQgSVMgRU1QVFkgRElTUExBWSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PTAgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBBbWF6b24gYmFza2V0IGlzIGVtcHR5JyA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ1Nob3BwaW5nIEJhc2tldCdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1BUCBBTkQgUkVOREVSIFRIRSBDSEVDS09VVCBQUk9EVUNUICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW1zLCBpKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7aXRlbXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB7aXRlbXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSB7aXRlbXMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249IHtpdGVtcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHtpdGVtcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IHtpdGVtcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcmltZSA9IHtpdGVtcy5oYXNQcmltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmlnaHQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBiZy13aGl0ZSBwLTEwIHNoYWRvdy1tZCc+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLW5vd3JhcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VidG90YWwoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIG1sLScgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHkgPSB7dG90YWx9IGN1cnJlbmN5ID0gJ1VTRCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSB7YGJ1dHRvbiBtdC0yICR7IXNlc3Npb24gJiYgJ2Zyb20tZ3JheS0zMDAgdG8tZ3JheS01MDAgdGV4dC1ncmF5LTMwMCBjdXJzb3Itbm90LWFsbG93ZWQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2Vzc2lvbiA/ICdTaWduIGluIHRvIENoZWNrb3V0JyA6IFwiUHJvY2VlZCB0byBDaGVja291dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dCJdLCJzb3VyY2VSb290IjoiIn0=