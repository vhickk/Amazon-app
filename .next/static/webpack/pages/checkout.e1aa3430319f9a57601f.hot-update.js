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
            className: "button ".concat(!se),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwic2Vzc2lvbiIsInVzZVNlc3Npb24iLCJsZW5ndGgiLCJtYXAiLCJpIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwiaGFzUHJpbWUiLCJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBRWhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFFQyx3REFBVyxDQUFDQyw0REFBRCxDQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsMkRBQVUsRUFBMUI7QUFDRixzQkFFTTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxlQUFTLEVBQUMsa0NBQWhCO0FBQUEsOEJBR0k7QUFBQSxnQ0FDSSw4REFBQyxtREFBRDtBQUNBLGFBQUcsRUFBQyxpQ0FESjtBQUVBLGVBQUssRUFBRSxJQUZQO0FBR0EsZ0JBQU0sRUFBRSxHQUhSO0FBSUEsbUJBQVMsRUFBRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFRSTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsd0JBQWQ7QUFBQSxzQkFJRUosS0FBSyxDQUFDSyxNQUFOLEtBQWdCLENBQWhCLEdBRUQsNkJBRkMsR0FHRDtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFlU0wsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ04sS0FBRCxFQUFRTyxDQUFSO0FBQUEsZ0NBRVAsOERBQUMsZ0VBQUQ7QUFFQSxnQkFBRSxFQUFJUCxLQUFLLENBQUNRLEVBRlo7QUFHQSxtQkFBSyxFQUFJUixLQUFLLENBQUNTLEtBSGY7QUFJQSxtQkFBSyxFQUFJVCxLQUFLLENBQUNVLEtBSmY7QUFLQSx5QkFBVyxFQUFHVixLQUFLLENBQUNXLFdBTHBCO0FBTUEsc0JBQVEsRUFBSVgsS0FBSyxDQUFDWSxRQU5sQjtBQU9BLG1CQUFLLEVBQUlaLEtBQUssQ0FBQ2EsS0FQZjtBQVFBLHNCQUFRLEVBQUliLEtBQUssQ0FBQ2M7QUFSbEIsZUFDT1AsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZPO0FBQUEsV0FBVixDQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQThDSTtBQUFBLGtCQUNLUCxLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUFmLGlCQUNHO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLG1CQUFkO0FBQUEsb0NBQ2NMLEtBQUssQ0FBQ0ssTUFEcEIsMkJBRUk7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBUUk7QUFBUSxxQkFBUyxtQkFBYyxDQUFDVSxFQUFmLENBQWpCO0FBQUEsc0JBQ0ssQ0FBQ1osT0FBRCxHQUFXLHFCQUFYLEdBQW1DO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUko7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk47QUEwRUQ7O0dBL0VRSixRO1VBR1FFLG9ELEVBQ0dHLHVEOzs7S0FKWEwsUTtBQWlGVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC5lMWFhMzQzMDMxOWY5YTU3NjAxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RJdGVtcyB9IGZyb20gJy4uL3NsaWNlcy9iYXNrZXRTbGljZSdcclxuaW1wb3J0IENoZWNrb3V0UHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrb3V0UHJvZHVjdCdcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuXHJcbiAgICAvL0dldCB1cGRhdGVkIGl0ZW1zIGZyb20gdGhlIHJlZHV4IHN0b3JlXHJcbiAgICBjb25zdCBpdGVtcz0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpXHJcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAnPlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdsZzpmbGV4IG1heC13LXNjcmVlbi0yeGwgbXgtYXV0byc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGxlZnQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lraidcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAyMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQgPSdjb250YWluJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS15LTEwIGJnLXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgYm9yZGVyLWIgcGItNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSkFWQVNDUklQVCBNT0RFICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIElGIEJBU0tFVCBJUyBFTVBUWSBESVNQTEFZICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGggPT09MCA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICdZb3VyIEFtYXpvbiBiYXNrZXQgaXMgZW1wdHknIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnU2hvcHBpbmcgQmFza2V0J1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTUFQIEFORCBSRU5ERVIgVEhFIENIRUNLT1VUIFBST0RVQ1QgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbXMsIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja291dFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHtpdGVtcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHtpdGVtcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IHtpdGVtcy5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj0ge2l0ZW1zLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0ge2l0ZW1zLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlID0ge2l0ZW1zLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByaW1lID0ge2l0ZW1zLmhhc1ByaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiByaWdodCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd3aGl0ZXNwYWNlLW5vd3JhcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VidG90YWwoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDdXJyZW5jeSBxdWFudGl0eSA9IHt0b3RhbH0gY3VycmVuY3kgPSAnVVNEJy8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSB7YGJ1dHRvbiAkeyFzZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlc3Npb24gPyAnU2lnbiBpbiB0byBDaGVja291dCcgOiBcIlByb2NlZWQgdG8gQ2hlY2tvdXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQiXSwic291cmNlUm9vdCI6IiJ9