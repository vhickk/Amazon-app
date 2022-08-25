self["webpackHotUpdate_N_E"]("pages/_app",{

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
      }); // create a new basket(make a copy of it that can be changed)

      var newBasket = (0,C_Users_VICT0R_Desktop_Amazon_app_Amazon_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items);

      if (index >= 0) {} else {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW0iLCJpZCIsIm5ld0Jhc2tldCIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBR0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUNsQjtBQUNFQyxPQUFLLEVBQUU7QUFEVCxDQURBLEMsQ0FLQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUNyQztBQUNDQyxNQUFJLEVBQUUsUUFEUDtBQUVDSixjQUFZLEVBQVpBLFlBRkQ7QUFHQ0ssVUFBUSxFQUFFO0FBQ1JDLGVBQVcsRUFBRSxxQkFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQ2I7QUFDRTtBQUNBRCxXQUFLLENBQUNOLEtBQU4sd0pBQWtCTSxLQUFLLENBQUNOLEtBQXhCLElBQStCTyxNQUFNLENBQUNDLE9BQXRDO0FBQ0QsS0FMTztBQU1SQyxvQkFBZ0IsRUFBRSwwQkFBQ0gsS0FBRCxFQUFRQyxNQUFSLEVBQ2xCO0FBQ0k7QUFDQTtBQUNBO0FBQ0EsVUFBTUcsS0FBSyxHQUFHSixLQUFLLENBQUNOLEtBQU4sQ0FBWVcsU0FBWixDQUVaLFVBQUNDLFVBQUQ7QUFBQSxlQUFlQSxVQUFVLENBQUNDLEVBQVgsS0FBa0JOLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSyxFQUFoRDtBQUFBLE9BRlksQ0FBZCxDQUpKLENBUU07O0FBRUYsVUFBSUMsU0FBUyxHQUFHLDJJQUFJUixLQUFLLENBQUNOLEtBQWIsQ0FBYjs7QUFFQSxVQUFJVSxLQUFLLElBQUcsQ0FBWixFQUNBLENBRUMsQ0FIRCxNQUtBLENBRUM7QUFDSjtBQTNCTztBQUhYLENBRHFDLENBQS9COzJCQW1DMENULFdBQVcsQ0FBQ2MsTztJQUE5Q1YsVyx3QkFBQUEsVztJQUFhSSxnQix3QkFBQUEsZ0IsRUFFNUI7OztBQUNPLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNWLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNXLE1BQU4sQ0FBYWpCLEtBQXhCO0FBQUEsQ0FBcEI7QUFFUCwrREFBZUMsV0FBVyxDQUFDaUIsT0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NjY5OWQyZmU5YTY2YzhiYjAyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuXHJcbi8vQW4gZW1wdHkgYXJyYXkgc2hvd2luIHRoZSBzdGF0ZSBvZiBteSBzbGljZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBcclxue1xyXG4gIGl0ZW1zOiBbXSxcclxufTtcclxuXHJcbi8vIFRoZSBiYXNpYyBmdW5jdGlvbnMgbXkgc2xpYyBjYW4gZG9cclxuLy8gQWRkaW5nIHRvIGJhc2tldFxyXG4vLyBSZW1vdmluZyBmcm9tIEJhc2tldFxyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2tldFNsaWNlID0gY3JlYXRlU2xpY2VcclxuKHtcclxuICBuYW1lOiBcImJhc2tldFwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiBcclxuICAgIHtcclxuICAgICAgLy9zcHJlYWQgd2hhdGV2ZXIgdGhlIGN1cnJlbnQgaXRlbXMoIGNvcHkgdGhlIGN1cnJlbnQgc3RvcmUpIHRoZW4gYWRkIHRoZSBwYXlsb2FkIHRoYXQgY29udGFpbnMgdGhlIHByb2R1Y3QgdGhlIGRpc3BhdGNoIGZ1bmN0aW9uIGp1c3QgcGFzc2VkIGluIFxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRnJvbUJhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IFxyXG4gICAge1xyXG4gICAgICAgIC8vU0VBUkNIIEZPUiBUSEUgSU5ERVggT0YgVEhFIEZJTEUgVE8gQkUgUkVNT1ZFRFxyXG4gICAgICAgIC8vc2VlIGlmIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBleGlzdHMgYnkgdXNuZyB0aGUgc3RhdGUuaXRlbXNcclxuICAgICAgICAvL3dlIGdvIHRocm91Z2ggZXZlcnkgc2luZ2xlIGl0ZW1pbiB0aGUgYmFza2V0IGNoZWNraW5nIGFnYWluc3QgdGhlIGJhc2tldCBpZCBpZiBpdCBpcyBlcXVhbCB0byB0aGUgaWQgcGFzc2VkIGluIGNvbWluZyB0aHJvdWdoIGJzIHRoYSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgKGJhc2tldEl0ZW0pID0+YmFza2V0SXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICApO1xyXG4gICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGJhc2tldChtYWtlIGEgY29weSBvZiBpdCB0aGF0IGNhbiBiZSBjaGFuZ2VkKVxyXG5cclxuICAgICAgICBsZXQgbmV3QmFza2V0ID0gWy4uLnN0YXRlLml0ZW1zXTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID49MClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9