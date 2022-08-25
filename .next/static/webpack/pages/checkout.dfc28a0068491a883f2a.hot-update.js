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

  var removeItemToBasket = function removeItemToBasket() {
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

    dispatch(removBasket(product));
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
      lineNumber: 64,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.StarIcon, {
            className: "h-6 text-yellow-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
          lineNumber: 89,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-Day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col space-y-2 my-auto justify-self-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addItemToBasket,
        className: "mt-auto button",
        children: "Add to Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addItemToBasket,
        className: "mt-auto button",
        children: "Remove from Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dFByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJoYXNQcmltZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJyZW1vdmVJdGVtVG9CYXNrZXQiLCJyZW1vdkJhc2tldCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsZUFBVCxPQVdBO0FBQUE7O0FBQUE7O0FBQUEsTUFUUUMsRUFTUixRQVRRQSxFQVNSO0FBQUEsTUFSUUMsS0FRUixRQVJRQSxLQVFSO0FBQUEsTUFQUUMsS0FPUixRQVBRQSxLQU9SO0FBQUEsTUFOUUMsV0FNUixRQU5RQSxXQU1SO0FBQUEsTUFMUUMsUUFLUixRQUxRQSxRQUtSO0FBQUEsTUFKUUMsS0FJUixRQUpRQSxLQUlSO0FBQUEsTUFIUUMsTUFHUixRQUhRQSxNQUdSO0FBQUEsTUFGUUMsUUFFUixRQUZRQSxRQUVSO0FBQ0UsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQzFCO0FBQ0ksUUFBTUMsT0FBTyxHQUNiO0FBQ0lYLFFBQUUsRUFBRkEsRUFESjtBQUVJQyxXQUFLLEVBQUxBLEtBRko7QUFHSUMsV0FBSyxFQUFMQSxLQUhKO0FBSUlDLGlCQUFXLEVBQVhBLFdBSko7QUFLSUMsY0FBUSxFQUFSQSxRQUxKO0FBTUlDLFdBQUssRUFBTEEsS0FOSjtBQU9JRSxjQUFRLEVBQVJBLFFBUEo7QUFRSUQsWUFBTSxFQUFOQTtBQVJKLEtBREEsQ0FESixDQVlJOztBQUVBRSxZQUFRLENBQUNJLGdFQUFXLENBQUNELE9BQUQsQ0FBWixDQUFSO0FBQ0gsR0FoQkM7O0FBa0JGLE1BQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FDM0I7QUFDSSxRQUFNRixPQUFPLEdBQ2I7QUFDSVgsUUFBRSxFQUFGQSxFQURKO0FBRUlDLFdBQUssRUFBTEEsS0FGSjtBQUdJQyxXQUFLLEVBQUxBLEtBSEo7QUFJSUMsaUJBQVcsRUFBWEEsV0FKSjtBQUtJQyxjQUFRLEVBQVJBLFFBTEo7QUFNSUMsV0FBSyxFQUFMQSxLQU5KO0FBT0lFLGNBQVEsRUFBUkEsUUFQSjtBQVFJRCxZQUFNLEVBQU5BO0FBUkosS0FEQSxDQURKLENBWUk7O0FBRUFFLFlBQVEsQ0FBQ00sV0FBVyxDQUFDSCxPQUFELENBQVosQ0FBUjtBQUNILEdBaEJEOztBQW1CRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNHLDhEQUFDLG1EQUFEO0FBQ0EsU0FBRyxFQUFJTixLQURQO0FBRUEsV0FBSyxFQUFHLEdBRlI7QUFHQSxZQUFNLEVBQUksR0FIVjtBQUlBLGVBQVMsRUFBRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxlQVNHO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0M7QUFBQSxrQkFBSUo7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFHQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNLYyxLQUFLLENBQUNULE1BQUQsQ0FBTCxDQUNJVSxJQURKLEdBRUlDLEdBRkosQ0FFUSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDRCw4REFBQyw0REFBRDtBQUFVLHFCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQztBQUFBLFNBRlI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsZUFXQztBQUFHLGlCQUFTLEVBQUMsMkJBQWI7QUFBQSxrQkFBMENoQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEQsZUFZQyw4REFBQyxpRUFBRDtBQUFVLGdCQUFRLEVBQUlELEtBQXRCO0FBQTZCLGdCQUFRLEVBQUU7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpELEVBY0VLLFFBQVEsaUJBRUw7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxpQkFBTyxFQUFDLE1BQWI7QUFBb0IsbUJBQVMsRUFBQyxPQUE5QjtBQUF1QyxhQUFHLEVBQUMsaUNBQTNDO0FBQTZFLGFBQUcsRUFBQztBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSCxlQW1DRztBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDhCQUNHO0FBQVEsZUFBTyxFQUFFRyxlQUFqQjtBQUFrQyxpQkFBUyxFQUFDLGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBRUc7QUFBUSxlQUFPLEVBQUVBLGVBQWpCO0FBQWtDLGlCQUFTLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMENEOztHQTdGUVgsZTtVQVlVVSxvRDs7O0tBWlZWLGU7QUErRlQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuZGZjMjhhMDA2ODQ5MWE4ODNmMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xyXG5pbXBvcnQgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9IGZyb20gJy4uL3NsaWNlcy9iYXNrZXRTbGljZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDaGVja291dFByb2R1Y3RcclxuKHtcclxuICAgICAgICBpZCwgXHJcbiAgICAgICAgdGl0bGUsIFxyXG4gICAgICAgIHByaWNlLCBcclxuICAgICAgICBkZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgY2F0ZWdvcnksIFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHJhdGluZyxcclxuICAgICAgICBoYXNQcmltZSxcclxufSkgXHJcbntcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGFkZEl0ZW1Ub0Jhc2tldCA9ICgpID0+IFxyXG57XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gXHJcbiAgICB7XHJcbiAgICAgICAgaWQsIFxyXG4gICAgICAgIHRpdGxlLCBcclxuICAgICAgICBwcmljZSwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGNhdGVnb3J5LCBcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBoYXNQcmltZSxcclxuICAgICAgICByYXRpbmdcclxuICAgIH07XHJcbiAgICAvLyBEaXNwYXRjaGluZyBhbiBJdGVtKHByb2R1Y3QpICBhcyBhbiBhY3Rpb24gdG8gdGhlIFJlZHV4IFN0b3JlIHVzaW5nIHRoZSBCYXNrZXQgc2xpY2VcclxuXHJcbiAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVJdGVtVG9CYXNrZXQgPSAoKSA9PiBcclxue1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFxyXG4gICAge1xyXG4gICAgICAgIGlkLCBcclxuICAgICAgICB0aXRsZSwgXHJcbiAgICAgICAgcHJpY2UsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBjYXRlZ29yeSwgXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbiAgICAgICAgcmF0aW5nXHJcbiAgICB9O1xyXG4gICAgLy8gRGlzcGF0Y2hpbmcgYW4gSXRlbShwcm9kdWN0KSAgYXMgYW4gYWN0aW9uIHRvIHRoZSBSZWR1eCBTdG9yZSB1c2luZyB0aGUgQmFza2V0IHNsaWNlXHJcblxyXG4gICAgZGlzcGF0Y2gocmVtb3ZCYXNrZXQocHJvZHVjdCkpO1xyXG59O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy01Jz5cclxuICAgICAgIDxJbWFnZVxyXG4gICAgICAgc3JjID0ge2ltYWdlfVxyXG4gICAgICAgd2lkdGggPXsyMDB9XHJcbiAgICAgICBoZWlnaHQgPSB7MjAwfVxyXG4gICAgICAgb2JqZWN0Rml0ID0nY29udGFpbidcclxuICAgICAgIC8+XHJcblxyXG4gICAgICAgey8qIE1JRERMRSAqL31cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIG14LTUnPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPSdoLTYgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMyc+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHkgPSB7cHJpY2V9IGN1cnJlbmN5PSAnVVNEJyAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtoYXNQcmltZSAmJlxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPSdsYXp5JyBjbGFzc05hbWU9J3ctMTIgJyAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCc+RnJlZSBOZXh0LURheSBEZWxpdmVyeTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0yIG15LWF1dG8ganVzdGlmeS1zZWxmLWVuZCc+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0gY2xhc3NOYW1lPSdtdC1hdXRvIGJ1dHRvbic+QWRkIHRvIEJhc2tldCA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkSXRlbVRvQmFza2V0fSBjbGFzc05hbWU9J210LWF1dG8gYnV0dG9uJz5SZW1vdmUgZnJvbSBCYXNrZXQgPC9idXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0UHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==