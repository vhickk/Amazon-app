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
        className: "flex-grow m-5",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJkYXRhIiwibGVuZ3RoIiwibWFwIiwiaSIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFFaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUVDLHdEQUFXLENBQUNDLDREQUFELENBQXhCOztBQUhnQixvQkFJT0MsMkRBQVUsRUFKakI7QUFBQSxNQUlKQyxPQUpJLGVBSVRDLElBSlM7O0FBS2xCLHNCQUVNO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxrQ0FBaEI7QUFBQSw4QkFHSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNJLDhEQUFDLG1EQUFEO0FBQ0EsYUFBRyxFQUFDLGlDQURKO0FBRUEsZUFBSyxFQUFFLElBRlA7QUFHQSxnQkFBTSxFQUFFLEdBSFI7QUFJQSxtQkFBUyxFQUFFO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVFJO0FBQUssbUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyx3QkFBZDtBQUFBLHNCQUlFTCxLQUFLLENBQUNNLE1BQU4sS0FBZ0IsQ0FBaEIsR0FFRCw2QkFGQyxHQUdEO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQWVTTixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDUCxLQUFELEVBQVFRLENBQVI7QUFBQSxnQ0FFUCw4REFBQyxnRUFBRDtBQUVBLGdCQUFFLEVBQUlSLEtBQUssQ0FBQ1MsRUFGWjtBQUdBLG1CQUFLLEVBQUlULEtBQUssQ0FBQ1UsS0FIZjtBQUlBLG1CQUFLLEVBQUlWLEtBQUssQ0FBQ1csS0FKZjtBQUtBLHlCQUFXLEVBQUdYLEtBQUssQ0FBQ1ksV0FMcEI7QUFNQSxzQkFBUSxFQUFJWixLQUFLLENBQUNhLFFBTmxCO0FBT0EsbUJBQUssRUFBSWIsS0FBSyxDQUFDYyxLQVBmO0FBUUEsc0JBQVEsRUFBSWQsS0FBSyxDQUFDZTtBQVJsQixlQUNPUCxDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRk87QUFBQSxXQUFWLENBZlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBOENJO0FBQUEsa0JBQ0tSLEtBQUssQ0FBQ00sTUFBTixHQUFlLENBQWYsaUJBQ0c7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsbUJBQWQ7QUFBQSxvQ0FDY04sS0FBSyxDQUFDTSxNQURwQiwyQkFFSTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFRSTtBQUFRLHFCQUFTLHdCQUFtQixDQUFDRixPQUFELElBQVksNERBQS9CLENBQWpCO0FBQUEsc0JBQ0ssQ0FBQ0EsT0FBRCxHQUFXLHFCQUFYLEdBQW1DO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUko7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk47QUEwRUQ7O0dBL0VRTCxRO1VBR1FFLG9ELEVBQ1VFLHVEOzs7S0FKbEJKLFE7QUFpRlQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuYTJlMGM3M2RjYmJkNzNmMDFhNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICBJbWFnZSBmcm9tICduZXh0L2ltYWdlJyBcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfSBmcm9tICcuLi9zbGljZXMvYmFza2V0U2xpY2UnXHJcbmltcG9ydCBDaGVja291dFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja291dFByb2R1Y3QnXHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcblxyXG4gICAgLy9HZXQgdXBkYXRlZCBpdGVtcyBmcm9tIHRoZSByZWR1eCBzdG9yZVxyXG4gICAgY29uc3QgaXRlbXM9IHVzZVNlbGVjdG9yKHNlbGVjdEl0ZW1zKVxyXG4gICAgY29uc3Qge2RhdGE6c2Vzc2lvbn0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCc+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2xnOmZsZXggbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvJz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogbGVmdCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgbS01Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pa2onXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0ID0nY29udGFpbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwLTUgc3BhY2UteS0xMCBiZy13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGJvcmRlci1iIHBiLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIEpBVkFTQ1JJUFQgTU9ERSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJRiBCQVNLRVQgSVMgRU1QVFkgRElTUExBWSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PTAgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBBbWF6b24gYmFza2V0IGlzIGVtcHR5JyA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ1Nob3BwaW5nIEJhc2tldCdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1BUCBBTkQgUkVOREVSIFRIRSBDSEVDS09VVCBQUk9EVUNUICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW1zLCBpKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7aXRlbXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB7aXRlbXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSB7aXRlbXMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249IHtpdGVtcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHtpdGVtcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IHtpdGVtcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcmltZSA9IHtpdGVtcy5oYXNQcmltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmlnaHQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGggPiAwICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnRvdGFsKHtpdGVtcy5sZW5ndGh9IGl0ZW1zKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q3VycmVuY3kgcXVhbnRpdHkgPSB7dG90YWx9IGN1cnJlbmN5ID0gJ1VTRCcvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0ge2BidXR0b24gbXQtMiAkeyFzZXNzaW9uICYmICdmcm9tLWdyYXktMzAwIHRvLWdyYXktNTAwIHRleHQtZ3JheS0zMDAgY3Vyc29yLW5vdC1hbGxvd2VkJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlc3Npb24gPyAnU2lnbiBpbiB0byBDaGVja291dCcgOiBcIlByb2NlZWQgdG8gQ2hlY2tvdXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQiXSwic291cmNlUm9vdCI6IiJ9