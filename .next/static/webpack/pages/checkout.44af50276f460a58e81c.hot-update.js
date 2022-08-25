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
    // Dispatching an Item(product)  as an action to the Redux Store using the Basket slice
    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.removeFromBasket)({
      id: id
    }));
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
      lineNumber: 54,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.StarIcon, {
            className: "h-6 text-yellow-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
          lineNumber: 79,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-Day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col space-y-2 my-auto justify-self-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addItemToBasket,
        className: "mt-auto button",
        children: "Add to Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: removeItemBasket,
        className: "mt-auto button",
        children: "Remove from Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dFByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJoYXNQcmltZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJyZW1vdmVJdGVtVG9CYXNrZXQiLCJyZW1vdmVGcm9tQmFza2V0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJyZW1vdmVJdGVtQmFza2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsZUFBVCxPQVdBO0FBQUE7O0FBQUE7O0FBQUEsTUFUUUMsRUFTUixRQVRRQSxFQVNSO0FBQUEsTUFSUUMsS0FRUixRQVJRQSxLQVFSO0FBQUEsTUFQUUMsS0FPUixRQVBRQSxLQU9SO0FBQUEsTUFOUUMsV0FNUixRQU5RQSxXQU1SO0FBQUEsTUFMUUMsUUFLUixRQUxRQSxRQUtSO0FBQUEsTUFKUUMsS0FJUixRQUpRQSxLQUlSO0FBQUEsTUFIUUMsTUFHUixRQUhRQSxNQUdSO0FBQUEsTUFGUUMsUUFFUixRQUZRQSxRQUVSO0FBQ0UsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQzFCO0FBQ0ksUUFBTUMsT0FBTyxHQUNiO0FBQ0lYLFFBQUUsRUFBRkEsRUFESjtBQUVJQyxXQUFLLEVBQUxBLEtBRko7QUFHSUMsV0FBSyxFQUFMQSxLQUhKO0FBSUlDLGlCQUFXLEVBQVhBLFdBSko7QUFLSUMsY0FBUSxFQUFSQSxRQUxKO0FBTUlDLFdBQUssRUFBTEEsS0FOSjtBQU9JRSxjQUFRLEVBQVJBLFFBUEo7QUFRSUQsWUFBTSxFQUFOQTtBQVJKLEtBREEsQ0FESixDQVlJOztBQUVBRSxZQUFRLENBQUNJLGdFQUFXLENBQUNELE9BQUQsQ0FBWixDQUFSO0FBQ0gsR0FoQkM7O0FBa0JGLE1BQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FDM0I7QUFFSTtBQUVBTCxZQUFRLENBQUNNLHFFQUFnQixDQUFDO0FBQUNkLFFBQUUsRUFBRkE7QUFBRCxLQUFELENBQWpCLENBQVI7QUFDSCxHQU5EOztBQVNFLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsNEJBQ0csOERBQUMsbURBQUQ7QUFDQSxTQUFHLEVBQUlLLEtBRFA7QUFFQSxXQUFLLEVBQUcsR0FGUjtBQUdBLFlBQU0sRUFBSSxHQUhWO0FBSUEsZUFBUyxFQUFFO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBU0c7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw4QkFDQztBQUFBLGtCQUFJSjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUdDO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQ0tjLEtBQUssQ0FBQ1QsTUFBRCxDQUFMLENBQ0lVLElBREosR0FFSUMsR0FGSixDQUVRLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDhCQUNELDhEQUFDLDREQUFEO0FBQVUscUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURDO0FBQUEsU0FGUjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQVdDO0FBQUcsaUJBQVMsRUFBQywyQkFBYjtBQUFBLGtCQUEwQ2hCO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRCxlQVlDLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBSUQsS0FBdEI7QUFBNkIsZ0JBQVEsRUFBRTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkQsRUFjRUssUUFBUSxpQkFFTDtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSxnQ0FDSTtBQUFLLGlCQUFPLEVBQUMsTUFBYjtBQUFvQixtQkFBUyxFQUFDLE9BQTlCO0FBQXVDLGFBQUcsRUFBQyxpQ0FBM0M7QUFBNkUsYUFBRyxFQUFDO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRILGVBbUNHO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsOEJBQ0c7QUFBUSxlQUFPLEVBQUVHLGVBQWpCO0FBQWtDLGlCQUFTLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFFRztBQUFRLGVBQU8sRUFBRVUsZ0JBQWpCO0FBQW1DLGlCQUFTLEVBQUMsZ0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMENEOztHQW5GUXJCLGU7VUFZVVUsb0Q7OztLQVpWVixlO0FBcUZULCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjQ0YWY1MDI3NmY0NjBhNThlODFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuaW1wb3J0IHsgYWRkVG9CYXNrZXQsIHJlbW92ZUZyb21CYXNrZXQgfSBmcm9tICcuLi9zbGljZXMvYmFza2V0U2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRQcm9kdWN0XHJcbih7XHJcbiAgICAgICAgaWQsIFxyXG4gICAgICAgIHRpdGxlLCBcclxuICAgICAgICBwcmljZSwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGNhdGVnb3J5LCBcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICByYXRpbmcsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbn0pIFxyXG57XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiBcclxue1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFxyXG4gICAge1xyXG4gICAgICAgIGlkLCBcclxuICAgICAgICB0aXRsZSwgXHJcbiAgICAgICAgcHJpY2UsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBjYXRlZ29yeSwgXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbiAgICAgICAgcmF0aW5nXHJcbiAgICB9O1xyXG4gICAgLy8gRGlzcGF0Y2hpbmcgYW4gSXRlbShwcm9kdWN0KSAgYXMgYW4gYWN0aW9uIHRvIHRoZSBSZWR1eCBTdG9yZSB1c2luZyB0aGUgQmFza2V0IHNsaWNlXHJcblxyXG4gICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlSXRlbVRvQmFza2V0ID0gKCkgPT4gXHJcbntcclxuICAgIFxyXG4gICAgLy8gRGlzcGF0Y2hpbmcgYW4gSXRlbShwcm9kdWN0KSAgYXMgYW4gYWN0aW9uIHRvIHRoZSBSZWR1eCBTdG9yZSB1c2luZyB0aGUgQmFza2V0IHNsaWNlXHJcblxyXG4gICAgZGlzcGF0Y2gocmVtb3ZlRnJvbUJhc2tldCh7aWR9KSk7XHJcbn07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTUnPlxyXG4gICAgICAgPEltYWdlXHJcbiAgICAgICBzcmMgPSB7aW1hZ2V9XHJcbiAgICAgICB3aWR0aCA9ezIwMH1cclxuICAgICAgIGhlaWdodCA9IHsyMDB9XHJcbiAgICAgICBvYmplY3RGaXQgPSdjb250YWluJ1xyXG4gICAgICAgLz5cclxuXHJcbiAgICAgICB7LyogTUlERExFICovfVxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgbXgtNSc+XHJcbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNiB0ZXh0LXllbGxvdy01MDAnIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0zJz57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eSA9IHtwcmljZX0gY3VycmVuY3k9ICdVU0QnIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2hhc1ByaW1lICYmXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yICc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIGNsYXNzTmFtZT0ndy0xMiAnICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwJz5GcmVlIE5leHQtRGF5IERlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgbXktYXV0byBqdXN0aWZ5LXNlbGYtZW5kJz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkSXRlbVRvQmFza2V0fSBjbGFzc05hbWU9J210LWF1dG8gYnV0dG9uJz5BZGQgdG8gQmFza2V0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW1vdmVJdGVtQmFza2V0fSBjbGFzc05hbWU9J210LWF1dG8gYnV0dG9uJz5SZW1vdmUgZnJvbSBCYXNrZXQgPC9idXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0UHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==