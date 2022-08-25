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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\pages\\checkout.js",
    _s = $RefreshSig$();








function Checkout() {
  _s();

  var _this = this;

  //Get updated items from the redux store
  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? 'Your Amazon basket is empty' : 'Shopping Basket'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
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
              lineNumber: 44,
              columnNumber: 33
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: ["Subtotal(", items.length, " items):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_s(Checkout, "tY2Gvv5VcC5OmHFNMSHq17tjIN8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwibGVuZ3RoIiwibWFwIiwiaSIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUVoQjtBQUNBLE1BQU1DLEtBQUssR0FBRUMsd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBeEI7QUFDRixzQkFFTTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxlQUFTLEVBQUMsa0NBQWhCO0FBQUEsOEJBR0k7QUFBQSxnQ0FDSSw4REFBQyxtREFBRDtBQUNBLGFBQUcsRUFBQyxpQ0FESjtBQUVBLGVBQUssRUFBRSxJQUZQO0FBR0EsZ0JBQU0sRUFBRSxHQUhSO0FBSUEsbUJBQVMsRUFBRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFRSTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsd0JBQWQ7QUFBQSxzQkFJRUYsS0FBSyxDQUFDRyxNQUFOLEtBQWdCLENBQWhCLEdBRUQsNkJBRkMsR0FHRDtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFlU0gsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0osS0FBRCxFQUFRSyxDQUFSO0FBQUEsZ0NBRVAsOERBQUMsZ0VBQUQ7QUFFQSxnQkFBRSxFQUFJTCxLQUFLLENBQUNNLEVBRlo7QUFHQSxtQkFBSyxFQUFJTixLQUFLLENBQUNPLEtBSGY7QUFJQSxtQkFBSyxFQUFJUCxLQUFLLENBQUNRLEtBSmY7QUFLQSx5QkFBVyxFQUFHUixLQUFLLENBQUNTLFdBTHBCO0FBTUEsc0JBQVEsRUFBSVQsS0FBSyxDQUFDVSxRQU5sQjtBQU9BLG1CQUFLLEVBQUlWLEtBQUssQ0FBQ1csS0FQZjtBQVFBLHNCQUFRLEVBQUlYLEtBQUssQ0FBQ1k7QUFSbEIsZUFDT1AsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZPO0FBQUEsV0FBVixDQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQThDSTtBQUFBLCtCQUNJO0FBQUEsaUNBQ0k7QUFBQSxvQ0FDY0wsS0FBSyxDQUFDRyxNQURwQiwyQkFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGTjtBQWlFRDs7R0FyRVFKLFE7VUFHUUUsb0Q7OztLQUhSRixRO0FBdUVULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmViZGM0ZjEzMDg5YTJiMmQ5NGVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZScgXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSAnLi4vc2xpY2VzL2Jhc2tldFNsaWNlJ1xyXG5pbXBvcnQgQ2hlY2tvdXRQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0J1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcblxyXG4gICAgLy9HZXQgdXBkYXRlZCBpdGVtcyBmcm9tIHRoZSByZWR1eCBzdG9yZVxyXG4gICAgY29uc3QgaXRlbXM9IHVzZVNlbGVjdG9yKHNlbGVjdEl0ZW1zKVxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAnPlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdsZzpmbGV4IG1heC13LXNjcmVlbi0yeGwgbXgtYXV0byc+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIGxlZnQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lraidcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAyMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQgPSdjb250YWluJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS15LTEwIGJnLXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgYm9yZGVyLWIgcGItNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSkFWQVNDUklQVCBNT0RFICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIElGIEJBU0tFVCBJUyBFTVBUWSBESVNQTEFZICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGggPT09MCA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICdZb3VyIEFtYXpvbiBiYXNrZXQgaXMgZW1wdHknIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnU2hvcHBpbmcgQmFza2V0J1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTUFQIEFORCBSRU5ERVIgVEhFIENIRUNLT1VUIFBST0RVQ1QgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbXMsIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja291dFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHtpdGVtcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHtpdGVtcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IHtpdGVtcy5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj0ge2l0ZW1zLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0ge2l0ZW1zLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlID0ge2l0ZW1zLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByaW1lID0ge2l0ZW1zLmhhc1ByaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiByaWdodCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VidG90YWwoe2l0ZW1zLmxlbmd0aH0gaXRlbXMpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==