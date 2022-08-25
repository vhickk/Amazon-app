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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dFByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJoYXNQcmltZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsZUFBVCxPQVdBO0FBQUE7O0FBQUEsTUFUUUMsRUFTUixRQVRRQSxFQVNSO0FBQUEsTUFSUUMsS0FRUixRQVJRQSxLQVFSO0FBQUEsTUFQUUMsS0FPUixRQVBRQSxLQU9SO0FBQUEsTUFOUUMsV0FNUixRQU5RQSxXQU1SO0FBQUEsTUFMUUMsUUFLUixRQUxRQSxRQUtSO0FBQUEsTUFKUUMsS0FJUixRQUpRQSxLQUlSO0FBQUEsTUFIUUMsTUFHUixRQUhRQSxNQUdSO0FBQUEsTUFGUUMsUUFFUixRQUZRQSxRQUVSO0FBQ0Usc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSw0QkFDRyw4REFBQyxtREFBRDtBQUNBLFNBQUcsRUFBSUYsS0FEUDtBQUVBLFdBQUssRUFBRyxHQUZSO0FBR0EsWUFBTSxFQUFJLEdBSFY7QUFJQSxlQUFTLEVBQUU7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFTRztBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNDO0FBQUEsa0JBQUlKO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBR0M7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxrQkFDS08sS0FBSyxDQUFDRixNQUFELENBQUwsQ0FDSUcsSUFESixHQUVJQyxHQUZKLENBRVEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsOEJBQ0QsOERBQUMsNERBQUQ7QUFBVSxxQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREM7QUFBQSxTQUZSO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhELGVBV0M7QUFBRyxpQkFBUyxFQUFDLDJCQUFiO0FBQUEsa0JBQTBDVDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEQsZUFZQyw4REFBQyxpRUFBRDtBQUFVLGdCQUFRLEVBQUlELEtBQXRCO0FBQTZCLGdCQUFRLEVBQUU7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpELEVBY0VLLFFBQVEsaUJBRUw7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxpQkFBTyxFQUFDLE1BQWI7QUFBb0IsbUJBQVMsRUFBQyxXQUE5QjtBQUEyQyxhQUFHLEVBQUMsaUNBQS9DO0FBQWlGLGFBQUcsRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSCxlQW1DRztBQUFBLDhCQUNHO0FBQVMsaUJBQVMsRUFBQyxnQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUVHO0FBQVMsaUJBQVMsRUFBQyxnQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0tBdERRUixlO0FBd0RULCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjVkMGNmMWQyMDM4YTJlMDkyYmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRQcm9kdWN0XHJcbih7XHJcbiAgICAgICAgaWQsIFxyXG4gICAgICAgIHRpdGxlLCBcclxuICAgICAgICBwcmljZSwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGNhdGVnb3J5LCBcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICByYXRpbmcsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbn0pIFxyXG57XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy01Jz5cclxuICAgICAgIDxJbWFnZVxyXG4gICAgICAgc3JjID0ge2ltYWdlfVxyXG4gICAgICAgd2lkdGggPXsyMDB9XHJcbiAgICAgICBoZWlnaHQgPSB7MjAwfVxyXG4gICAgICAgb2JqZWN0Rml0ID0nY29udGFpbidcclxuICAgICAgIC8+XHJcblxyXG4gICAgICAgey8qIE1JRERMRSAqL31cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIG14LTUnPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPSdoLTYgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMyc+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHkgPSB7cHJpY2V9IGN1cnJlbmN5PSAnVVNEJyAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtoYXNQcmltZSAmJlxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPSdsYXp5JyBjbGFzc05hbWU9J3ctMTIgbXQtNScgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAnPkZyZWUgTmV4dC1EYXkgRGVsaXZlcnk8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9J210LWF1dG8gYnV0dG9uJz5BZGQgdG8gQmFza2V0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPSdtdC1hdXRvIGJ1dHRvbic+QWRkIHRvIEJhc2tldCA8L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9