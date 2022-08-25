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
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ "./src/components/Product.jsx");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\components\\CheckoutProduct.jsx",
    _s = $RefreshSig$();









function CheckoutProduct(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image,
      rating = _ref.rating,
      hasPrime = _ref.hasPrime;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var addItemToBasket = function addItemToBasket() {
    var product = {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      hasPrime: hasPrime,
      rating: rating
    }; // Dispatching an Item(product)  as an action to the Redux Store using the Basket slice

    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.addToBasket)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      width: 200,
      height: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.StarIcon, {
            className: "h-6 text-yellow-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2 ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          className: "w-12 ",
          src: "https://links.papareact.com/fdw",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-Day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col space-y-2 my-auto justify-self-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addItemToBasket,
        className: "mt-auto button",
        children: "Add to Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addItemToBasket,
        className: "mt-auto button",
        children: "Remove from Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

_s(CheckoutProduct, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dFByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJoYXNQcmltZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLGVBQVQsT0FXQTtBQUFBOztBQUFBOztBQUFBLE1BVFFDLEVBU1IsUUFUUUEsRUFTUjtBQUFBLE1BUlFDLEtBUVIsUUFSUUEsS0FRUjtBQUFBLE1BUFFDLEtBT1IsUUFQUUEsS0FPUjtBQUFBLE1BTlFDLFdBTVIsUUFOUUEsV0FNUjtBQUFBLE1BTFFDLFFBS1IsUUFMUUEsUUFLUjtBQUFBLE1BSlFDLEtBSVIsUUFKUUEsS0FJUjtBQUFBLE1BSFFDLE1BR1IsUUFIUUEsTUFHUjtBQUFBLE1BRlFDLFFBRVIsUUFGUUEsUUFFUjtBQUNFLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUMxQjtBQUNJLFFBQU1DLE9BQU8sR0FDYjtBQUNJWCxRQUFFLEVBQUZBLEVBREo7QUFFSUMsV0FBSyxFQUFMQSxLQUZKO0FBR0lDLFdBQUssRUFBTEEsS0FISjtBQUlJQyxpQkFBVyxFQUFYQSxXQUpKO0FBS0lDLGNBQVEsRUFBUkEsUUFMSjtBQU1JQyxXQUFLLEVBQUxBLEtBTko7QUFPSUUsY0FBUSxFQUFSQSxRQVBKO0FBUUlELFlBQU0sRUFBTkE7QUFSSixLQURBLENBREosQ0FZSTs7QUFFQUUsWUFBUSxDQUFDSSxnRUFBVyxDQUFDRCxPQUFELENBQVosQ0FBUjtBQUNILEdBaEJDOztBQW9CQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNHLDhEQUFDLG1EQUFEO0FBQ0EsU0FBRyxFQUFJTixLQURQO0FBRUEsV0FBSyxFQUFHLEdBRlI7QUFHQSxZQUFNLEVBQUksR0FIVjtBQUlBLGVBQVMsRUFBRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxlQVNHO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0M7QUFBQSxrQkFBSUo7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFHQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNLWSxLQUFLLENBQUNQLE1BQUQsQ0FBTCxDQUNJUSxJQURKLEdBRUlDLEdBRkosQ0FFUSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDRCw4REFBQyw0REFBRDtBQUFVLHFCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQztBQUFBLFNBRlI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsZUFXQztBQUFHLGlCQUFTLEVBQUMsMkJBQWI7QUFBQSxrQkFBMENkO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRCxlQVlDLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBSUQsS0FBdEI7QUFBNkIsZ0JBQVEsRUFBRTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkQsRUFjRUssUUFBUSxpQkFFTDtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSxnQ0FDSTtBQUFLLGlCQUFPLEVBQUMsTUFBYjtBQUFvQixtQkFBUyxFQUFDLE9BQTlCO0FBQXVDLGFBQUcsRUFBQyxpQ0FBM0M7QUFBNkUsYUFBRyxFQUFDO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRILGVBbUNHO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsOEJBQ0c7QUFBUSxlQUFPLEVBQUVHLGVBQWpCO0FBQWtDLGlCQUFTLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFFRztBQUFRLGVBQU8sRUFBRUEsZUFBakI7QUFBa0MsaUJBQVMsRUFBQyxnQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0dBNUVRWCxlO1VBWVVVLG9EOzs7S0FaVlYsZTtBQThFVCwrREFBZUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC4yMjcwZDIwMjJjMjcxOTU5NjEzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gZnJvbSAnLi4vc2xpY2VzL2Jhc2tldFNsaWNlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0UHJvZHVjdFxyXG4oe1xyXG4gICAgICAgIGlkLCBcclxuICAgICAgICB0aXRsZSwgXHJcbiAgICAgICAgcHJpY2UsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBjYXRlZ29yeSwgXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgcmF0aW5nLFxyXG4gICAgICAgIGhhc1ByaW1lLFxyXG59KSBcclxue1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgYWRkSXRlbVRvQmFza2V0ID0gKCkgPT4gXHJcbntcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBcclxuICAgIHtcclxuICAgICAgICBpZCwgXHJcbiAgICAgICAgdGl0bGUsIFxyXG4gICAgICAgIHByaWNlLCBcclxuICAgICAgICBkZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgY2F0ZWdvcnksIFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGhhc1ByaW1lLFxyXG4gICAgICAgIHJhdGluZ1xyXG4gICAgfTtcclxuICAgIC8vIERpc3BhdGNoaW5nIGFuIEl0ZW0ocHJvZHVjdCkgIGFzIGFuIGFjdGlvbiB0byB0aGUgUmVkdXggU3RvcmUgdXNpbmcgdGhlIEJhc2tldCBzbGljZVxyXG5cclxuICAgIGRpc3BhdGNoKGFkZFRvQmFza2V0KHByb2R1Y3QpKTtcclxufTtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNSc+XHJcbiAgICAgICA8SW1hZ2VcclxuICAgICAgIHNyYyA9IHtpbWFnZX1cclxuICAgICAgIHdpZHRoID17MjAwfVxyXG4gICAgICAgaGVpZ2h0ID0gezIwMH1cclxuICAgICAgIG9iamVjdEZpdCA9J2NvbnRhaW4nXHJcbiAgICAgICAvPlxyXG5cclxuICAgICAgIHsvKiBNSURETEUgKi99XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMyBteC01Jz5cclxuICAgICAgICA8cD57dGl0bGV9PC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGNsYXNzTmFtZT0naC02IHRleHQteWVsbG93LTUwMCcgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgbXktMiBsaW5lLWNsYW1wLTMnPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5ID0ge3ByaWNlfSBjdXJyZW5jeT0gJ1VTRCcgLz5cclxuICAgICAgICBcclxuICAgICAgICB7aGFzUHJpbWUgJiZcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgY2xhc3NOYW1lPSd3LTEyICcgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAnPkZyZWUgTmV4dC1EYXkgRGVsaXZlcnk8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBteS1hdXRvIGp1c3RpZnktc2VsZi1lbmQnPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtVG9CYXNrZXR9IGNsYXNzTmFtZT0nbXQtYXV0byBidXR0b24nPkFkZCB0byBCYXNrZXQgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0gY2xhc3NOYW1lPSdtdC1hdXRvIGJ1dHRvbic+UmVtb3ZlIGZyb20gQmFza2V0IDwvYnV0dG9uPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=