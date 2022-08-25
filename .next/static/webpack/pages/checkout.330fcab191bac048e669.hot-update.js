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
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; },
/* harmony export */   "selectTotal": function() { return /* binding */ selectTotal; }
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
      }); // create a new basket(make a copy of it that can be changed)

      var newBasket = (0,C_Users_VICT0R_Desktop_Amazon_app_Amazon_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items);

      if (index >= 0) {
        //remove the item from the basket by splicing it.......
        //cuts the item by 1
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove product (id: ".concat(action.payload.id, ") as it's not in the basket")); //finally update the new items into the basket
      }

      state.items = newBasket;
    }
  }
});
var _basketSlice$actions = basketSlice.actions,
    addToBasket = _basketSlice$actions.addToBasket,
    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice


var selectItems = function selectItems(state) {
  return state.basket.items;
};
var selectTotal = function selectTotal(state) {
  return state.basket.items.reduce(total, function (item) {
    return total + item.price;
  }, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW0iLCJpZCIsIm5ld0Jhc2tldCIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aW9ucyIsInNlbGVjdEl0ZW1zIiwiYmFza2V0Iiwic2VsZWN0VG90YWwiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJwcmljZSIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUdBOztBQUNBLElBQU1BLFlBQVksR0FDbEI7QUFDRUMsT0FBSyxFQUFFO0FBRFQsQ0FEQSxDLENBS0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLFdBQVcsR0FBR0MsNkRBQVcsQ0FDckM7QUFDQ0MsTUFBSSxFQUFFLFFBRFA7QUFFQ0osY0FBWSxFQUFaQSxZQUZEO0FBR0NLLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUscUJBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUNiO0FBQ0U7QUFDQUQsV0FBSyxDQUFDTixLQUFOLHdKQUFrQk0sS0FBSyxDQUFDTixLQUF4QixJQUErQk8sTUFBTSxDQUFDQyxPQUF0QztBQUNELEtBTE87QUFNUkMsb0JBQWdCLEVBQUUsMEJBQUNILEtBQUQsRUFBUUMsTUFBUixFQUNsQjtBQUNJO0FBQ0E7QUFDQTtBQUNBLFVBQU1HLEtBQUssR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FFWixVQUFDQyxVQUFEO0FBQUEsZUFBZUEsVUFBVSxDQUFDQyxFQUFYLEtBQWtCTixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFBaEQ7QUFBQSxPQUZZLENBQWQsQ0FKSixDQVFNOztBQUVGLFVBQUlDLFNBQVMsR0FBRywySUFBSVIsS0FBSyxDQUFDTixLQUFiLENBQWI7O0FBRUEsVUFBSVUsS0FBSyxJQUFHLENBQVosRUFDQTtBQUNFO0FBQ0E7QUFDQUksaUJBQVMsQ0FBQ0MsTUFBVixDQUFpQkwsS0FBakIsRUFBd0IsQ0FBeEI7QUFFRCxPQU5ELE1BUUE7QUFDRU0sZUFBTyxDQUFDQyxJQUFSLHFDQUEwQ1YsTUFBTSxDQUFDQyxPQUFQLENBQWVLLEVBQXpELGtDQURGLENBR0U7QUFFRDs7QUFDRFAsV0FBSyxDQUFDTixLQUFOLEdBQWVjLFNBQWY7QUFDSDtBQWxDTztBQUhYLENBRHFDLENBQS9COzJCQTBDMENiLFdBQVcsQ0FBQ2lCLE87SUFBOUNiLFcsd0JBQUFBLFc7SUFBYUksZ0Isd0JBQUFBLGdCLEVBRTVCOzs7QUFDTyxJQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDYixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDYyxNQUFOLENBQWFwQixLQUF4QjtBQUFBLENBQXBCO0FBQ0EsSUFBTXFCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNmLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNjLE1BQU4sQ0FBYXBCLEtBQWIsQ0FBbUJzQixNQUFuQixDQUEwQkMsS0FBMUIsRUFBaUMsVUFBQUMsSUFBSTtBQUFBLFdBQUlELEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFqQjtBQUFBLEdBQXJDLEVBQTZELENBQTdELENBQVg7QUFBQSxDQUFwQjtBQUVQLCtEQUFleEIsV0FBVyxDQUFDeUIsT0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuMzMwZmNhYjE5MWJhYzA0OGU2NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcblxyXG4vL0FuIGVtcHR5IGFycmF5IHNob3dpbiB0aGUgc3RhdGUgb2YgbXkgc2xpY2VcclxuY29uc3QgaW5pdGlhbFN0YXRlID0gXHJcbntcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG4vLyBUaGUgYmFzaWMgZnVuY3Rpb25zIG15IHNsaWMgY2FuIGRvXHJcbi8vIEFkZGluZyB0byBiYXNrZXRcclxuLy8gUmVtb3ZpbmcgZnJvbSBCYXNrZXRcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNrZXRTbGljZSA9IGNyZWF0ZVNsaWNlXHJcbih7XHJcbiAgbmFtZTogXCJiYXNrZXRcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4gXHJcbiAgICB7XHJcbiAgICAgIC8vc3ByZWFkIHdoYXRldmVyIHRoZSBjdXJyZW50IGl0ZW1zKCBjb3B5IHRoZSBjdXJyZW50IHN0b3JlKSB0aGVuIGFkZCB0aGUgcGF5bG9hZCB0aGF0IGNvbnRhaW5zIHRoZSBwcm9kdWN0IHRoZSBkaXNwYXRjaCBmdW5jdGlvbiBqdXN0IHBhc3NlZCBpbiBcclxuICAgICAgc3RhdGUuaXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiBcclxuICAgIHtcclxuICAgICAgICAvL1NFQVJDSCBGT1IgVEhFIElOREVYIE9GIFRIRSBGSUxFIFRPIEJFIFJFTU9WRURcclxuICAgICAgICAvL3NlZSBpZiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gZXhpc3RzIGJ5IHVzbmcgdGhlIHN0YXRlLml0ZW1zXHJcbiAgICAgICAgLy93ZSBnbyB0aHJvdWdoIGV2ZXJ5IHNpbmdsZSBpdGVtaW4gdGhlIGJhc2tldCBjaGVja2luZyBhZ2FpbnN0IHRoZSBiYXNrZXQgaWQgaWYgaXQgaXMgZXF1YWwgdG8gdGhlIGlkIHBhc3NlZCBpbiBjb21pbmcgdGhyb3VnaCBicyB0aGEgYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleFxyXG4gICAgICAgIChcclxuICAgICAgICAgIChiYXNrZXRJdGVtKSA9PmJhc2tldEl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBiYXNrZXQobWFrZSBhIGNvcHkgb2YgaXQgdGhhdCBjYW4gYmUgY2hhbmdlZClcclxuXHJcbiAgICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc107XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy9yZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgYmFza2V0IGJ5IHNwbGljaW5nIGl0Li4uLi4uLlxyXG4gICAgICAgICAgLy9jdXRzIHRoZSBpdGVtIGJ5IDFcclxuICAgICAgICAgIG5ld0Jhc2tldC5zcGxpY2UoaW5kZXgsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBDYW4ndCByZW1vdmUgcHJvZHVjdCAoaWQ6ICR7YWN0aW9uLnBheWxvYWQuaWR9KSBhcyBpdCdzIG5vdCBpbiB0aGUgYmFza2V0YCk7XHJcblxyXG4gICAgICAgICAgLy9maW5hbGx5IHVwZGF0ZSB0aGUgbmV3IGl0ZW1zIGludG8gdGhlIGJhc2tldFxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuaXRlbXMgID0gbmV3QmFza2V0O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXM7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbCA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zLnJlZHVjZSh0b3RhbCwgaXRlbSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UsIDApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9