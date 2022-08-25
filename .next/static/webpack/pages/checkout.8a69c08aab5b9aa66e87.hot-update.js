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
  var session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            className: "button ".concat(!session && 'from-gray-300 to-gray-500 text'),
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

_s(Checkout, "KJS4EKFo5NSfDXCynLPo+TwaA8c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwic2Vzc2lvbiIsInVzZVNlc3Npb24iLCJsZW5ndGgiLCJtYXAiLCJpIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwiaGFzUHJpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUVoQjtBQUNBLE1BQU1DLEtBQUssR0FBRUMsd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLDJEQUFVLEVBQTFCO0FBQ0Ysc0JBRU07QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sZUFBUyxFQUFDLGtDQUFoQjtBQUFBLDhCQUdJO0FBQUEsZ0NBQ0ksOERBQUMsbURBQUQ7QUFDQSxhQUFHLEVBQUMsaUNBREo7QUFFQSxlQUFLLEVBQUUsSUFGUDtBQUdBLGdCQUFNLEVBQUUsR0FIUjtBQUlBLG1CQUFTLEVBQUU7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBUUk7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLHdCQUFkO0FBQUEsc0JBSUVKLEtBQUssQ0FBQ0ssTUFBTixLQUFnQixDQUFoQixHQUVELDZCQUZDLEdBR0Q7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBZVNMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNOLEtBQUQsRUFBUU8sQ0FBUjtBQUFBLGdDQUVQLDhEQUFDLGdFQUFEO0FBRUEsZ0JBQUUsRUFBSVAsS0FBSyxDQUFDUSxFQUZaO0FBR0EsbUJBQUssRUFBSVIsS0FBSyxDQUFDUyxLQUhmO0FBSUEsbUJBQUssRUFBSVQsS0FBSyxDQUFDVSxLQUpmO0FBS0EseUJBQVcsRUFBR1YsS0FBSyxDQUFDVyxXQUxwQjtBQU1BLHNCQUFRLEVBQUlYLEtBQUssQ0FBQ1ksUUFObEI7QUFPQSxtQkFBSyxFQUFJWixLQUFLLENBQUNhLEtBUGY7QUFRQSxzQkFBUSxFQUFJYixLQUFLLENBQUNjO0FBUmxCLGVBQ09QLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGTztBQUFBLFdBQVYsQ0FmVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUE4Q0k7QUFBQSxrQkFDS1AsS0FBSyxDQUFDSyxNQUFOLEdBQWUsQ0FBZixpQkFDRztBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxtQkFBZDtBQUFBLG9DQUNjTCxLQUFLLENBQUNLLE1BRHBCLDJCQUVJO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVFJO0FBQVEscUJBQVMsbUJBQWMsQ0FBQ0YsT0FBRCxJQUFZLGdDQUExQixDQUFqQjtBQUFBLHNCQUNLLENBQUNBLE9BQUQsR0FBVyxxQkFBWCxHQUFtQztBQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZOO0FBMEVEOztHQS9FUUosUTtVQUdRRSxvRCxFQUNHRyx1RDs7O0tBSlhMLFE7QUFpRlQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuOGE2OWMwOGFhYjViOWFhNjZlODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICBJbWFnZSBmcm9tICduZXh0L2ltYWdlJyBcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfSBmcm9tICcuLi9zbGljZXMvYmFza2V0U2xpY2UnXHJcbmltcG9ydCBDaGVja291dFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja291dFByb2R1Y3QnXHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcblxyXG4gICAgLy9HZXQgdXBkYXRlZCBpdGVtcyBmcm9tIHRoZSByZWR1eCBzdG9yZVxyXG4gICAgY29uc3QgaXRlbXM9IHVzZVNlbGVjdG9yKHNlbGVjdEl0ZW1zKVxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwJz5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG8nPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBsZWZ0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pa2onXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0ID0nY29udGFpbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwLTUgc3BhY2UteS0xMCBiZy13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGJvcmRlci1iIHBiLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIEpBVkFTQ1JJUFQgTU9ERSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBJRiBCQVNLRVQgSVMgRU1QVFkgRElTUExBWSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PTAgPyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBBbWF6b24gYmFza2V0IGlzIGVtcHR5JyA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ1Nob3BwaW5nIEJhc2tldCdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1BUCBBTkQgUkVOREVSIFRIRSBDSEVDS09VVCBQUk9EVUNUICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW1zLCBpKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7aXRlbXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB7aXRlbXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSB7aXRlbXMucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249IHtpdGVtcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHtpdGVtcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IHtpdGVtcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcmltZSA9IHtpdGVtcy5oYXNQcmltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogcmlnaHQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGggPiAwICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nd2hpdGVzcGFjZS1ub3dyYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnRvdGFsKHtpdGVtcy5sZW5ndGh9IGl0ZW1zKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q3VycmVuY3kgcXVhbnRpdHkgPSB7dG90YWx9IGN1cnJlbmN5ID0gJ1VTRCcvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0ge2BidXR0b24gJHshc2Vzc2lvbiAmJiAnZnJvbS1ncmF5LTMwMCB0by1ncmF5LTUwMCB0ZXh0J31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlc3Npb24gPyAnU2lnbiBpbiB0byBDaGVja291dCcgOiBcIlByb2NlZWQgdG8gQ2hlY2tvdXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQiXSwic291cmNlUm9vdCI6IiJ9