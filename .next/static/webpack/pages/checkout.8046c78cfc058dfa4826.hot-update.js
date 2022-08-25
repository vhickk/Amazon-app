self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/CheckoutProduct.jsx":
/*!********************************************!*\
  !*** ./src/components/CheckoutProduct.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ "./src/components/Product.jsx");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\components\\CheckoutProduct.jsx";






function CheckoutProduct(_ref) {
  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image,
      rating = _ref.rating,
      hasPrime = _ref.hasPrime;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      width: 200,
      height: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.StarIcon, {
            className: "h-6 text-yellow-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          className: "w-12 mt-5",
          src: "https://links.papareact.com/fdw",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-Day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "mt-auto button",
        children: "Add to Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "mt-auto button",
        children: "Add to Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_c = CheckoutProduct;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutProduct);

var _c;

$RefreshReg$(_c, "CheckoutProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dFByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJoYXNQcmltZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsZUFBVCxPQVdBO0FBQUE7O0FBQUEsTUFUUUMsRUFTUixRQVRRQSxFQVNSO0FBQUEsTUFSUUMsS0FRUixRQVJRQSxLQVFSO0FBQUEsTUFQUUMsS0FPUixRQVBRQSxLQU9SO0FBQUEsTUFOUUMsV0FNUixRQU5RQSxXQU1SO0FBQUEsTUFMUUMsUUFLUixRQUxRQSxRQUtSO0FBQUEsTUFKUUMsS0FJUixRQUpRQSxLQUlSO0FBQUEsTUFIUUMsTUFHUixRQUhRQSxNQUdSO0FBQUEsTUFGUUMsUUFFUixRQUZRQSxRQUVSO0FBQ0Usc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSw0QkFDRyw4REFBQyxtREFBRDtBQUNBLFNBQUcsRUFBSUYsS0FEUDtBQUVBLFdBQUssRUFBRyxHQUZSO0FBR0EsWUFBTSxFQUFJLEdBSFY7QUFJQSxlQUFTLEVBQUU7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFTRztBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNDO0FBQUEsa0JBQUlKO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBR0M7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxrQkFDS08sS0FBSyxDQUFDRixNQUFELENBQUwsQ0FDSUcsSUFESixHQUVJQyxHQUZKLENBRVEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsOEJBQ0QsOERBQUMsNERBQUQ7QUFBVSxxQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREM7QUFBQSxTQUZSO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhELGVBV0M7QUFBRyxpQkFBUyxFQUFDLDJCQUFiO0FBQUEsa0JBQTBDVDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEQsZUFZQyw4REFBQyxpRUFBRDtBQUFVLGdCQUFRLEVBQUlELEtBQXRCO0FBQTZCLGdCQUFRLEVBQUU7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpELEVBY0VLLFFBQVEsaUJBRUw7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxpQkFBTyxFQUFDLE1BQWI7QUFBb0IsbUJBQVMsRUFBQyxXQUE5QjtBQUEyQyxhQUFHLEVBQUMsaUNBQS9DO0FBQWlGLGFBQUcsRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSCxlQW1DRztBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0c7QUFBUyxpQkFBUyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBRUc7QUFBUyxpQkFBUyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7S0F0RFFSLGU7QUF3RFQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuODA0NmM3OGNmYzA1OGRmYTQ4MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDaGVja291dFByb2R1Y3RcclxuKHtcclxuICAgICAgICBpZCwgXHJcbiAgICAgICAgdGl0bGUsIFxyXG4gICAgICAgIHByaWNlLCBcclxuICAgICAgICBkZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgY2F0ZWdvcnksIFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHJhdGluZyxcclxuICAgICAgICBoYXNQcmltZSxcclxufSkgXHJcbntcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTUnPlxyXG4gICAgICAgPEltYWdlXHJcbiAgICAgICBzcmMgPSB7aW1hZ2V9XHJcbiAgICAgICB3aWR0aCA9ezIwMH1cclxuICAgICAgIGhlaWdodCA9IHsyMDB9XHJcbiAgICAgICBvYmplY3RGaXQgPSdjb250YWluJ1xyXG4gICAgICAgLz5cclxuXHJcbiAgICAgICB7LyogTUlERExFICovfVxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgbXgtNSc+XHJcbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNiB0ZXh0LXllbGxvdy01MDAnIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0zJz57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eSA9IHtwcmljZX0gY3VycmVuY3k9ICdVU0QnIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2hhc1ByaW1lICYmXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yICc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIGNsYXNzTmFtZT0ndy0xMiBtdC01JyAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCc+RnJlZSBOZXh0LURheSBEZWxpdmVyeTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxyXG4gICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPSdtdC1hdXRvIGJ1dHRvbic+QWRkIHRvIEJhc2tldCA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT0nbXQtYXV0byBidXR0b24nPkFkZCB0byBCYXNrZXQgPC9idXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0UHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==