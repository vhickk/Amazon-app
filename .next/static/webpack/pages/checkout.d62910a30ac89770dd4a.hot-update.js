self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketSlice": function() { return /* binding */ basketSlice; },
/* harmony export */   "addToBasket": function() { return /* binding */ addToBasket; },
/* harmony export */   "removeFromBasket": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; }
/* harmony export */ });
/* harmony import */ var C_Users_VICT0R_Desktop_Amazon_app_Amazon_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

 //An empty array showin the state of my slice

var initialState = {
  items: []
}; // The basic functions my slic can do
// Adding to basket
// Removing from Basket

var basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: "basket",
  initialState: initialState,
  reducers: {
    addToBasket: function addToBasket(state, action) {
      //spread whatever the current items( copy the current store) then add the payload that contains the product the dispatch function just passed in 
      state.items = [].concat((0,C_Users_VICT0R_Desktop_Amazon_app_Amazon_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items), [action.payload]);
    },
    removeFromBasket: function removeFromBasket(state, action) {
      //SEARCH FOR THE INDEX OF THE FILE TO BE REMOVED
      //see if the index of the item exists by usng the state.items
      //we go through every single itemin the basket checking against the basket id if it is equal to the id passed in coming through bs tha action.payload
      var index = state.items.findIndex(function (basketItem) {
        return basketItem.id === action.payload.id;
      });
      B;
    }
  }
});
var _basketSlice$actions = basketSlice.actions,
    addToBasket = _basketSlice$actions.addToBasket,
    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice


var selectItems = function selectItems(state) {
  return state.basket.items;
};
/* harmony default export */ __webpack_exports__["default"] = (basketSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW0iLCJpZCIsIkIiLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiLCJiYXNrZXQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUdBOztBQUNBLElBQU1BLFlBQVksR0FDbEI7QUFDRUMsT0FBSyxFQUFFO0FBRFQsQ0FEQSxDLENBS0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLFdBQVcsR0FBR0MsNkRBQVcsQ0FDckM7QUFDQ0MsTUFBSSxFQUFFLFFBRFA7QUFFQ0osY0FBWSxFQUFaQSxZQUZEO0FBR0NLLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUscUJBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUNiO0FBQ0U7QUFDQUQsV0FBSyxDQUFDTixLQUFOLHdKQUFrQk0sS0FBSyxDQUFDTixLQUF4QixJQUErQk8sTUFBTSxDQUFDQyxPQUF0QztBQUNELEtBTE87QUFNUkMsb0JBQWdCLEVBQUUsMEJBQUNILEtBQUQsRUFBUUMsTUFBUixFQUNsQjtBQUNJO0FBQ0E7QUFDQTtBQUNBLFVBQU1HLEtBQUssR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FFWixVQUFDQyxVQUFEO0FBQUEsZUFBZUEsVUFBVSxDQUFDQyxFQUFYLEtBQWtCTixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBaEQ7QUFBQSxPQUZZLENBQWQ7QUFHRUMsT0FBQztBQUNOO0FBZk87QUFIWCxDQURxQyxDQUEvQjsyQkF1QjBDYixXQUFXLENBQUNjLE87SUFBOUNWLFcsd0JBQUFBLFc7SUFBYUksZ0Isd0JBQUFBLGdCLEVBRTVCOzs7QUFDTyxJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDVixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDVyxNQUFOLENBQWFqQixLQUF4QjtBQUFBLENBQXBCO0FBRVAsK0RBQWVDLFdBQVcsQ0FBQ2lCLE9BQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmQ2MjkxMGEzMGFjODk3NzBkZDRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxuLy9BbiBlbXB0eSBhcnJheSBzaG93aW4gdGhlIHN0YXRlIG9mIG15IHNsaWNlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFxyXG57XHJcbiAgaXRlbXM6IFtdLFxyXG59O1xyXG5cclxuLy8gVGhlIGJhc2ljIGZ1bmN0aW9ucyBteSBzbGljIGNhbiBkb1xyXG4vLyBBZGRpbmcgdG8gYmFza2V0XHJcbi8vIFJlbW92aW5nIGZyb20gQmFza2V0XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZVxyXG4oe1xyXG4gIG5hbWU6IFwiYmFza2V0XCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IFxyXG4gICAge1xyXG4gICAgICAvL3NwcmVhZCB3aGF0ZXZlciB0aGUgY3VycmVudCBpdGVtcyggY29weSB0aGUgY3VycmVudCBzdG9yZSkgdGhlbiBhZGQgdGhlIHBheWxvYWQgdGhhdCBjb250YWlucyB0aGUgcHJvZHVjdCB0aGUgZGlzcGF0Y2ggZnVuY3Rpb24ganVzdCBwYXNzZWQgaW4gXHJcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF1cclxuICAgIH0sXHJcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4gXHJcbiAgICB7XHJcbiAgICAgICAgLy9TRUFSQ0ggRk9SIFRIRSBJTkRFWCBPRiBUSEUgRklMRSBUTyBCRSBSRU1PVkVEXHJcbiAgICAgICAgLy9zZWUgaWYgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGV4aXN0cyBieSB1c25nIHRoZSBzdGF0ZS5pdGVtc1xyXG4gICAgICAgIC8vd2UgZ28gdGhyb3VnaCBldmVyeSBzaW5nbGUgaXRlbWluIHRoZSBiYXNrZXQgY2hlY2tpbmcgYWdhaW5zdCB0aGUgYmFza2V0IGlkIGlmIGl0IGlzIGVxdWFsIHRvIHRoZSBpZCBwYXNzZWQgaW4gY29taW5nIHRocm91Z2ggYnMgdGhhIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXhcclxuICAgICAgICAoXHJcbiAgICAgICAgICAoYmFza2V0SXRlbSkgPT5iYXNrZXRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICk7QlxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9