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
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ "./src/components/Product.jsx");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
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
  var dispatch = useDispatch();

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
      lineNumber: 44,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.StarIcon, {
            className: "h-6 text-yellow-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
          lineNumber: 69,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-Day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col space-y-2 my-auto justify-self-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addItemToBasket,
        className: "mt-auto button",
        children: "Add to Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: addItemToBasket,
        className: "mt-auto button",
        children: "Remove from Basket "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(CheckoutProduct, "rgTLoBID190wEKCp9+G8W6F7A5M=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dFByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJoYXNQcmltZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLGVBQVQsT0FXQTtBQUFBOztBQUFBOztBQUFBLE1BVFFDLEVBU1IsUUFUUUEsRUFTUjtBQUFBLE1BUlFDLEtBUVIsUUFSUUEsS0FRUjtBQUFBLE1BUFFDLEtBT1IsUUFQUUEsS0FPUjtBQUFBLE1BTlFDLFdBTVIsUUFOUUEsV0FNUjtBQUFBLE1BTFFDLFFBS1IsUUFMUUEsUUFLUjtBQUFBLE1BSlFDLEtBSVIsUUFKUUEsS0FJUjtBQUFBLE1BSFFDLE1BR1IsUUFIUUEsTUFHUjtBQUFBLE1BRlFDLFFBRVIsUUFGUUEsUUFFUjtBQUNFLE1BQU1DLFFBQVEsR0FBR0MsV0FBVyxFQUE1Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQzFCO0FBQ0ksUUFBTUMsT0FBTyxHQUNiO0FBQ0lYLFFBQUUsRUFBRkEsRUFESjtBQUVJQyxXQUFLLEVBQUxBLEtBRko7QUFHSUMsV0FBSyxFQUFMQSxLQUhKO0FBSUlDLGlCQUFXLEVBQVhBLFdBSko7QUFLSUMsY0FBUSxFQUFSQSxRQUxKO0FBTUlDLFdBQUssRUFBTEEsS0FOSjtBQU9JRSxjQUFRLEVBQVJBLFFBUEo7QUFRSUQsWUFBTSxFQUFOQTtBQVJKLEtBREEsQ0FESixDQVlJOztBQUVBRSxZQUFRLENBQUNJLGdFQUFXLENBQUNELE9BQUQsQ0FBWixDQUFSO0FBQ0gsR0FoQkM7O0FBa0JBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsNEJBQ0csOERBQUMsbURBQUQ7QUFDQSxTQUFHLEVBQUlOLEtBRFA7QUFFQSxXQUFLLEVBQUcsR0FGUjtBQUdBLFlBQU0sRUFBSSxHQUhWO0FBSUEsZUFBUyxFQUFFO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBU0c7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw4QkFDQztBQUFBLGtCQUFJSjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUdDO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQ0tZLEtBQUssQ0FBQ1AsTUFBRCxDQUFMLENBQ0lRLElBREosR0FFSUMsR0FGSixDQUVRLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDhCQUNELDhEQUFDLDREQUFEO0FBQVUscUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURDO0FBQUEsU0FGUjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQVdDO0FBQUcsaUJBQVMsRUFBQywyQkFBYjtBQUFBLGtCQUEwQ2Q7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhELGVBWUMsOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFJRCxLQUF0QjtBQUE2QixnQkFBUSxFQUFFO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRCxFQWNFSyxRQUFRLGlCQUVMO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBLGdDQUNJO0FBQUssaUJBQU8sRUFBQyxNQUFiO0FBQW9CLG1CQUFTLEVBQUMsT0FBOUI7QUFBdUMsYUFBRyxFQUFDLGlDQUEzQztBQUE2RSxhQUFHLEVBQUM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEgsZUFtQ0c7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw4QkFDRztBQUFRLGVBQU8sRUFBRUcsZUFBakI7QUFBa0MsaUJBQVMsRUFBQyxnQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUVHO0FBQVEsZUFBTyxFQUFFQSxlQUFqQjtBQUFrQyxpQkFBUyxFQUFDLGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0ExRVFYLGU7O0tBQUFBLGU7QUE0RVQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNDQ0ODU0NGY3YjU2M2FmOWFiZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICdyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXInO1xyXG5pbXBvcnQgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2xpY2VzL2Jhc2tldFNsaWNlJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRQcm9kdWN0XHJcbih7XHJcbiAgICAgICAgaWQsIFxyXG4gICAgICAgIHRpdGxlLCBcclxuICAgICAgICBwcmljZSwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGNhdGVnb3J5LCBcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICByYXRpbmcsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbn0pIFxyXG57XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiBcclxue1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFxyXG4gICAge1xyXG4gICAgICAgIGlkLCBcclxuICAgICAgICB0aXRsZSwgXHJcbiAgICAgICAgcHJpY2UsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICBjYXRlZ29yeSwgXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgaGFzUHJpbWUsXHJcbiAgICAgICAgcmF0aW5nXHJcbiAgICB9O1xyXG4gICAgLy8gRGlzcGF0Y2hpbmcgYW4gSXRlbShwcm9kdWN0KSAgYXMgYW4gYWN0aW9uIHRvIHRoZSBSZWR1eCBTdG9yZSB1c2luZyB0aGUgQmFza2V0IHNsaWNlXHJcblxyXG4gICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpO1xyXG59O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTUnPlxyXG4gICAgICAgPEltYWdlXHJcbiAgICAgICBzcmMgPSB7aW1hZ2V9XHJcbiAgICAgICB3aWR0aCA9ezIwMH1cclxuICAgICAgIGhlaWdodCA9IHsyMDB9XHJcbiAgICAgICBvYmplY3RGaXQgPSdjb250YWluJ1xyXG4gICAgICAgLz5cclxuXHJcbiAgICAgICB7LyogTUlERExFICovfVxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTMgbXgtNSc+XHJcbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNiB0ZXh0LXllbGxvdy01MDAnIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0zJz57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eSA9IHtwcmljZX0gY3VycmVuY3k9ICdVU0QnIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2hhc1ByaW1lICYmXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yICc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIGNsYXNzTmFtZT0ndy0xMiAnICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwJz5GcmVlIE5leHQtRGF5IERlbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgbXktYXV0byBqdXN0aWZ5LXNlbGYtZW5kJz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkSXRlbVRvQmFza2V0fSBjbGFzc05hbWU9J210LWF1dG8gYnV0dG9uJz5BZGQgdG8gQmFza2V0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtVG9CYXNrZXR9IGNsYXNzTmFtZT0nbXQtYXV0byBidXR0b24nPlJlbW92ZSBmcm9tIEJhc2tldCA8L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9