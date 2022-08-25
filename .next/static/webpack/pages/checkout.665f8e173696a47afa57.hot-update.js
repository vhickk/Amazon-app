self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/Product.jsx":
/*!************************************!*\
  !*** ./src/components/Product.jsx ***!
  \************************************/
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
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\components\\Product.jsx",
    _s = $RefreshSig$();






 // THIS CONTROLS THE RATING OF PRODUCTS

var Max_Rating = 5;
var Min_Rating = 1;

function Product(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;
  //ACCESSES THE DISPATCH STATE FROM REDUX
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(); //ACCESSES THE USE STAE HOOK TO SAVE AND UPDATE THE RATING

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( //JAVASCRIPT TO GENERATE A RANDOM NUMBER FROM MIN RATING TO MAXIMUM RATING
  Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating),
      rating = _useState[0]; //USE THE USESTATE HOOK TO SAVE AND UPDATE USERS WITH PRIME


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0]; //


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
    className: "  relative flex flex-col  m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400 ",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.StarIcon, {
          className: "h-6 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {
        quantity: price,
        currency: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-Day DElivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: addItemToBasket,
      className: "mt-auto button",
      children: "Add to Basket "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(Product, "77e0PIpkVncMm6AbD+0rK6LH3oM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qc3giXSwibmFtZXMiOlsiTWF4X1JhdGluZyIsIk1pbl9SYXRpbmciLCJQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFFQSxTQUFTQyxPQUFULE9BQ0E7QUFBQTs7QUFBQTs7QUFBQSxNQURrQkMsRUFDbEIsUUFEa0JBLEVBQ2xCO0FBQUEsTUFEc0JDLEtBQ3RCLFFBRHNCQSxLQUN0QjtBQUFBLE1BRDZCQyxLQUM3QixRQUQ2QkEsS0FDN0I7QUFBQSxNQURvQ0MsV0FDcEMsUUFEb0NBLFdBQ3BDO0FBQUEsTUFEaURDLFFBQ2pELFFBRGlEQSxRQUNqRDtBQUFBLE1BRDJEQyxLQUMzRCxRQUQyREEsS0FDM0Q7QUFFSTtBQUNKLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUIsQ0FIQSxDQUtBOztBQUxBLGtCQU1pQkMsK0NBQVEsRUFFckI7QUFDQUMsTUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQmQsVUFBVSxHQUFHQyxVQUFiLEdBQTBCLENBQTNDLENBQVgsSUFBMkRBLFVBSHRDLENBTnpCO0FBQUEsTUFNT2MsTUFOUCxpQkFZQTs7O0FBWkEsbUJBYWtCSiwrQ0FBUSxDQUV0QkMsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBRk0sQ0FiMUI7QUFBQSxNQWFPRSxRQWJQLGtCQWtCQTs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUN4QjtBQUNJLFFBQU1DLE9BQU8sR0FDYjtBQUNJZixRQUFFLEVBQUZBLEVBREo7QUFFSUMsV0FBSyxFQUFMQSxLQUZKO0FBR0lDLFdBQUssRUFBTEEsS0FISjtBQUlJQyxpQkFBVyxFQUFYQSxXQUpKO0FBS0lDLGNBQVEsRUFBUkEsUUFMSjtBQU1JQyxXQUFLLEVBQUxBLEtBTko7QUFPSVEsY0FBUSxFQUFSQSxRQVBKO0FBUUlELFlBQU0sRUFBTkE7QUFSSixLQURBLENBREosQ0FZSTs7QUFFQU4sWUFBUSxDQUFDVSxnRUFBVyxDQUFDRCxPQUFELENBQVosQ0FBUjtBQUNILEdBaEJEOztBQWtCRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFDLHNEQUFiO0FBQUEsZ0JBQXFFWDtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSSw4REFBQyxtREFBRDtBQUNBLFNBQUcsRUFBSUMsS0FEUDtBQUNjLFlBQU0sRUFBSSxHQUR4QjtBQUM2QixXQUFLLEVBQUksR0FEdEM7QUFDMkMsZUFBUyxFQUFFO0FBRHREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQU9JO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFBc0JKO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVNJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDS2dCLEtBQUssQ0FBQ0wsTUFBRCxDQUFMLENBQ0FNLElBREEsR0FFQUMsR0FGQSxDQUVJLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUNELDhEQUFDLDREQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURDO0FBQUEsT0FGSjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQWlCSTtBQUFHLGVBQVMsRUFBQyxjQUFiO0FBQUEsZ0JBQTZCbEI7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixlQW1CSTtBQUFBLDZCQUNJLDhEQUFDLGlFQUFEO0FBQVcsZ0JBQVEsRUFBSUQsS0FBdkI7QUFBOEIsZ0JBQVEsRUFBRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CSixFQXVCS1csUUFBUSxpQkFFTDtBQUFLLGVBQVMsRUFBQyxtQ0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLFdBQUcsRUFBQyxpQ0FBMUI7QUFBNEQsV0FBRyxFQUFDO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCUixlQStCSTtBQUFRLGFBQU8sRUFBRUMsZUFBakI7QUFBa0MsZUFBUyxFQUFDLGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9DRDs7R0ExRVFmLE87VUFJUVEsb0Q7OztLQUpSUixPO0FBNEVULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjY2NWY4ZTE3MzY5NmE0N2FmYTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICBJbWFnZSBmcm9tICduZXh0L2ltYWdlJyBcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhZGRUb0Jhc2tldCB9IGZyb20gJy4uL3NsaWNlcy9iYXNrZXRTbGljZSc7XHJcblxyXG4vLyBUSElTIENPTlRST0xTIFRIRSBSQVRJTkcgT0YgUFJPRFVDVFNcclxuXHJcbmNvbnN0IE1heF9SYXRpbmcgPSA1O1xyXG5jb25zdCBNaW5fUmF0aW5nID0gMTtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3Qoe2lkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2V9KSBcclxue1xyXG5cclxuICAgIC8vQUNDRVNTRVMgVEhFIERJU1BBVENIIFNUQVRFIEZST00gUkVEVVhcclxuY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuLy9BQ0NFU1NFUyBUSEUgVVNFIFNUQUUgSE9PSyBUTyBTQVZFIEFORCBVUERBVEUgVEhFIFJBVElOR1xyXG5jb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlXHJcbihcclxuICAgIC8vSkFWQVNDUklQVCBUTyBHRU5FUkFURSBBIFJBTkRPTSBOVU1CRVIgRlJPTSBNSU4gUkFUSU5HIFRPIE1BWElNVU0gUkFUSU5HXHJcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTWF4X1JhdGluZyAtIE1pbl9SYXRpbmcgKyAxKSkrIE1pbl9SYXRpbmdcclxuKTtcclxuXHJcbi8vVVNFIFRIRSBVU0VTVEFURSBIT09LIFRPIFNBVkUgQU5EIFVQREFURSBVU0VSUyBXSVRIIFBSSU1FXHJcbmNvbnN0IFtoYXNQcmltZV09IHVzZVN0YXRlXHJcbihcclxuICAgIE1hdGgucmFuZG9tKCkgPCAwLjVcclxuKTtcclxuXHJcbi8vXHJcbmNvbnN0IGFkZEl0ZW1Ub0Jhc2tldCA9ICgpID0+IFxyXG57XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gXHJcbiAgICB7XHJcbiAgICAgICAgaWQsIFxyXG4gICAgICAgIHRpdGxlLCBcclxuICAgICAgICBwcmljZSwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgIGNhdGVnb3J5LCBcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBoYXNQcmltZSxcclxuICAgICAgICByYXRpbmdcclxuICAgIH07XHJcbiAgICAvLyBEaXNwYXRjaGluZyBhbiBJdGVtKHByb2R1Y3QpICBhcyBhbiBhY3Rpb24gdG8gdGhlIFJlZHV4IFN0b3JlIHVzaW5nIHRoZSBCYXNrZXQgc2xpY2VcclxuXHJcbiAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSk7XHJcbn07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nICByZWxhdGl2ZSBmbGV4IGZsZXgtY29sICBtLTUgYmctd2hpdGUgei0zMCBwLTEwJz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMCAnPntjYXRlZ29yeX08L3A+XHJcblxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYyA9IHtpbWFnZX0gaGVpZ2h0ID0gezIwMH0gd2lkdGggPSB7MjAwfSBvYmplY3RGaXQgPSdjb250YWluJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT0nbXktMyc+e3RpdGxlfTwvaDQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPSdoLTYgdGV4dC15ZWxsb3ctNTAwJyAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIG15LTInPntkZXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDdXJyZW5jeSAgcXVhbnRpdHkgPSB7cHJpY2V9IGN1cnJlbmN5ID0nVVNEJy8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogSWYgeW91IGhhdmUgcHJpbWUsIHRoZW4gcmVuZGVyIHRoaXMgKi99XHJcbiAgICAgICAge2hhc1ByaW1lICYmXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIC1tdC01Jz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd3LTEyJyBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWdyYXktNTAwJz5GcmVlIE5leHQtRGF5IERFbGl2ZXJ5PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0gY2xhc3NOYW1lPSdtdC1hdXRvIGJ1dHRvbic+QWRkIHRvIEJhc2tldCA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9