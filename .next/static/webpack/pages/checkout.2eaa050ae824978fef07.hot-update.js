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
/* harmony import */ var C_Users_VICT0R_Desktop_Amazon_app_Amazon_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var _components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CheckoutProduct */ "./src/components/CheckoutProduct.jsx");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ "./node_modules/next-auth/react/index.js");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\pages\\checkout.js",
    _s = $RefreshSig$();









function Checkout() {
  _s();

  var _this = this;

  //Get updated items from the redux store
  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.selectItems);

  var _useSession = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)(),
      _useSession2 = (0,C_Users_VICT0R_Desktop_Amazon_app_Amazon_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      datasession = _useSession2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
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
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_7__.default, {
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
            className: "button mt-2 ".concat(!session && 'from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed'),
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

_s(Checkout, "O032fCIbM8cfX8kAbHctFDzrgjM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidXNlU2Vzc2lvbiIsImRhdGFzZXNzaW9uIiwibGVuZ3RoIiwibWFwIiwiaSIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIiwic2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFFaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUVDLHdEQUFXLENBQUNDLDREQUFELENBQXhCOztBQUhnQixvQkFJTUMsMkRBQVUsRUFKaEI7QUFBQTtBQUFBLE1BSVRDLFdBSlM7O0FBS2xCLHNCQUVNO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxrQ0FBaEI7QUFBQSw4QkFHSTtBQUFBLGdDQUNJLDhEQUFDLG1EQUFEO0FBQ0EsYUFBRyxFQUFDLGlDQURKO0FBRUEsZUFBSyxFQUFFLElBRlA7QUFHQSxnQkFBTSxFQUFFLEdBSFI7QUFJQSxtQkFBUyxFQUFFO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVFJO0FBQUssbUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyx3QkFBZDtBQUFBLHNCQUlFSixLQUFLLENBQUNLLE1BQU4sS0FBZ0IsQ0FBaEIsR0FFRCw2QkFGQyxHQUdEO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQWVTTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDTixLQUFELEVBQVFPLENBQVI7QUFBQSxnQ0FFUCw4REFBQyxnRUFBRDtBQUVBLGdCQUFFLEVBQUlQLEtBQUssQ0FBQ1EsRUFGWjtBQUdBLG1CQUFLLEVBQUlSLEtBQUssQ0FBQ1MsS0FIZjtBQUlBLG1CQUFLLEVBQUlULEtBQUssQ0FBQ1UsS0FKZjtBQUtBLHlCQUFXLEVBQUdWLEtBQUssQ0FBQ1csV0FMcEI7QUFNQSxzQkFBUSxFQUFJWCxLQUFLLENBQUNZLFFBTmxCO0FBT0EsbUJBQUssRUFBSVosS0FBSyxDQUFDYSxLQVBmO0FBUUEsc0JBQVEsRUFBSWIsS0FBSyxDQUFDYztBQVJsQixlQUNPUCxDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRk87QUFBQSxXQUFWLENBZlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBOENJO0FBQUEsa0JBQ0tQLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWYsaUJBQ0c7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsbUJBQWQ7QUFBQSxvQ0FDY0wsS0FBSyxDQUFDSyxNQURwQiwyQkFFSTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFRSTtBQUFRLHFCQUFTLHdCQUFtQixDQUFDVSxPQUFELElBQVksNERBQS9CLENBQWpCO0FBQUEsc0JBQ0ssQ0FBQ0EsT0FBRCxHQUFXLHFCQUFYLEdBQW1DO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUko7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk47QUEwRUQ7O0dBL0VRaEIsUTtVQUdRRSxvRCxFQUNTRSx1RDs7O0tBSmpCSixRO0FBaUZULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjJlYWEwNTBhZTgyNDk3OGZlZjA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZScgXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSAnLi4vc2xpY2VzL2Jhc2tldFNsaWNlJ1xyXG5pbXBvcnQgQ2hlY2tvdXRQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0J1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG5cclxuICAgIC8vR2V0IHVwZGF0ZWQgaXRlbXMgZnJvbSB0aGUgcmVkdXggc3RvcmVcclxuICAgIGNvbnN0IGl0ZW1zPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcylcclxuICAgIGNvbnN0IFtkYXRhc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCc+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2xnOmZsZXggbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvJz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogbGVmdCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vaWtqJ1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdCA9J2NvbnRhaW4nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcC01IHNwYWNlLXktMTAgYmctd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBib3JkZXItYiBwYi00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBKQVZBU0NSSVBUIE1PREUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSUYgQkFTS0VUIElTIEVNUFRZIERJU1BMQVkgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0wID8gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdXIgQW1hem9uIGJhc2tldCBpcyBlbXB0eScgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdTaG9wcGluZyBCYXNrZXQnXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNQVAgQU5EIFJFTkRFUiBUSEUgQ0hFQ0tPVVQgUFJPRFVDVCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtcywgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrb3V0UHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkID0ge2l0ZW1zLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0ge2l0ZW1zLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0ge2l0ZW1zLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPSB7aXRlbXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSB7aXRlbXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSB7aXRlbXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJpbWUgPSB7aXRlbXMuaGFzUHJpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHJpZ2h0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJ0b3RhbCh7aXRlbXMubGVuZ3RofSBpdGVtcyk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEN1cnJlbmN5IHF1YW50aXR5ID0ge3RvdGFsfSBjdXJyZW5jeSA9ICdVU0QnLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IHtgYnV0dG9uIG10LTIgJHshc2Vzc2lvbiAmJiAnZnJvbS1ncmF5LTMwMCB0by1ncmF5LTUwMCB0ZXh0LWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZCd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZXNzaW9uID8gJ1NpZ24gaW4gdG8gQ2hlY2tvdXQnIDogXCJQcm9jZWVkIHRvIENoZWNrb3V0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==