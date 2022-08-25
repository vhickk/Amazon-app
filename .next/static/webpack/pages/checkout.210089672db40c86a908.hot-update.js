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

  var removeItemFromBasket = function removeItemFromBasket() {
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
        onClick: removeItemFromBasket,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dFByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJoYXNQcmltZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJyZW1vdmVJdGVtRnJvbUJhc2tldCIsInJlbW92ZUZyb21CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLGVBQVQsT0FXQTtBQUFBOztBQUFBOztBQUFBLE1BVFFDLEVBU1IsUUFUUUEsRUFTUjtBQUFBLE1BUlFDLEtBUVIsUUFSUUEsS0FRUjtBQUFBLE1BUFFDLEtBT1IsUUFQUUEsS0FPUjtBQUFBLE1BTlFDLFdBTVIsUUFOUUEsV0FNUjtBQUFBLE1BTFFDLFFBS1IsUUFMUUEsUUFLUjtBQUFBLE1BSlFDLEtBSVIsUUFKUUEsS0FJUjtBQUFBLE1BSFFDLE1BR1IsUUFIUUEsTUFHUjtBQUFBLE1BRlFDLFFBRVIsUUFGUUEsUUFFUjtBQUNFLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUMxQjtBQUNJLFFBQU1DLE9BQU8sR0FDYjtBQUNJWCxRQUFFLEVBQUZBLEVBREo7QUFFSUMsV0FBSyxFQUFMQSxLQUZKO0FBR0lDLFdBQUssRUFBTEEsS0FISjtBQUlJQyxpQkFBVyxFQUFYQSxXQUpKO0FBS0lDLGNBQVEsRUFBUkEsUUFMSjtBQU1JQyxXQUFLLEVBQUxBLEtBTko7QUFPSUUsY0FBUSxFQUFSQSxRQVBKO0FBUUlELFlBQU0sRUFBTkE7QUFSSixLQURBLENBREosQ0FZSTs7QUFFQUUsWUFBUSxDQUFDSSxnRUFBVyxDQUFDRCxPQUFELENBQVosQ0FBUjtBQUNILEdBaEJDOztBQWtCRixNQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQzdCO0FBRUk7QUFFQUwsWUFBUSxDQUFDTSxxRUFBZ0IsQ0FBQztBQUFFZCxRQUFFLEVBQUZBO0FBQUYsS0FBRCxDQUFqQixDQUFSO0FBQ0gsR0FORDs7QUFTRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNHLDhEQUFDLG1EQUFEO0FBQ0EsU0FBRyxFQUFJSyxLQURQO0FBRUEsV0FBSyxFQUFHLEdBRlI7QUFHQSxZQUFNLEVBQUksR0FIVjtBQUlBLGVBQVMsRUFBRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxlQVNHO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0M7QUFBQSxrQkFBSUo7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFHQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNLYyxLQUFLLENBQUNULE1BQUQsQ0FBTCxDQUNJVSxJQURKLEdBRUlDLEdBRkosQ0FFUSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDRCw4REFBQyw0REFBRDtBQUFVLHFCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQztBQUFBLFNBRlI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsZUFXQztBQUFHLGlCQUFTLEVBQUMsMkJBQWI7QUFBQSxrQkFBMENoQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEQsZUFZQyw4REFBQyxpRUFBRDtBQUFVLGdCQUFRLEVBQUlELEtBQXRCO0FBQTZCLGdCQUFRLEVBQUU7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpELEVBY0VLLFFBQVEsaUJBRUw7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxpQkFBTyxFQUFDLE1BQWI7QUFBb0IsbUJBQVMsRUFBQyxPQUE5QjtBQUF1QyxhQUFHLEVBQUMsaUNBQTNDO0FBQTZFLGFBQUcsRUFBQztBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSCxlQW1DRztBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDhCQUNHO0FBQVEsZUFBTyxFQUFFRyxlQUFqQjtBQUFrQyxpQkFBUyxFQUFDLGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBRUc7QUFBUSxlQUFPLEVBQUVHLG9CQUFqQjtBQUF1QyxpQkFBUyxFQUFDLGdCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0FuRlFkLGU7VUFZVVUsb0Q7OztLQVpWVixlO0FBcUZULCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjIxMDA4OTY3MmRiNDBjODZhOTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuaW1wb3J0IHsgYWRkVG9CYXNrZXQsIHJlbW92ZUZyb21CYXNrZXQgfSBmcm9tICcuLi9zbGljZXMvYmFza2V0U2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRQcm9kdWN0XHJcbih7XHJcbiAgICAgICAgaWQsIFxyXG4gICAgICAgIHRpdGxlLCBcclxuICAgICAgICBwcmljZSwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGNhdGVnb3J5LCBcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICByYXRpbmcsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbn0pIFxyXG57XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiBcclxue1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFxyXG4gICAge1xyXG4gICAgICAgIGlkLCBcclxuICAgICAgICB0aXRsZSwgXHJcbiAgICAgICAgcHJpY2UsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBjYXRlZ29yeSwgXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbiAgICAgICAgcmF0aW5nXHJcbiAgICB9O1xyXG4gICAgLy8gRGlzcGF0Y2hpbmcgYW4gSXRlbShwcm9kdWN0KSAgYXMgYW4gYWN0aW9uIHRvIHRoZSBSZWR1eCBTdG9yZSB1c2luZyB0aGUgQmFza2V0IHNsaWNlXHJcblxyXG4gICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlSXRlbUZyb21CYXNrZXQgPSAoKSA9PiBcclxue1xyXG4gICAgXHJcbiAgICAvLyBEaXNwYXRjaGluZyBhbiBJdGVtKHByb2R1Y3QpICBhcyBhbiBhY3Rpb24gdG8gdGhlIFJlZHV4IFN0b3JlIHVzaW5nIHRoZSBCYXNrZXQgc2xpY2VcclxuXHJcbiAgICBkaXNwYXRjaChyZW1vdmVGcm9tQmFza2V0KHsgaWQgfSkpO1xyXG59O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy01Jz5cclxuICAgICAgIDxJbWFnZVxyXG4gICAgICAgc3JjID0ge2ltYWdlfVxyXG4gICAgICAgd2lkdGggPXsyMDB9XHJcbiAgICAgICBoZWlnaHQgPSB7MjAwfVxyXG4gICAgICAgb2JqZWN0Rml0ID0nY29udGFpbidcclxuICAgICAgIC8+XHJcblxyXG4gICAgICAgey8qIE1JRERMRSAqL31cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIG14LTUnPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPSdoLTYgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMyc+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHkgPSB7cHJpY2V9IGN1cnJlbmN5PSAnVVNEJyAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtoYXNQcmltZSAmJlxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPSdsYXp5JyBjbGFzc05hbWU9J3ctMTIgJyAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ncmF5LTUwMCc+RnJlZSBOZXh0LURheSBEZWxpdmVyeTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0yIG15LWF1dG8ganVzdGlmeS1zZWxmLWVuZCc+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0gY2xhc3NOYW1lPSdtdC1hdXRvIGJ1dHRvbic+QWRkIHRvIEJhc2tldCA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlSXRlbUZyb21CYXNrZXR9IGNsYXNzTmFtZT0nbXQtYXV0byBidXR0b24nPlJlbW92ZSBmcm9tIEJhc2tldCA8L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9