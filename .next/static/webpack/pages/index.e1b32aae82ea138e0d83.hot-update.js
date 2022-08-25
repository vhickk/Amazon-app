self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW0iLCJpZCIsIm5ld0Jhc2tldCIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aW9ucyIsInNlbGVjdEl0ZW1zIiwiYmFza2V0Iiwic2VsZWN0VG90YWwiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FHQTs7QUFDQSxJQUFNQSxZQUFZLEdBQ2xCO0FBQ0VDLE9BQUssRUFBRTtBQURULENBREEsQyxDQUtBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxXQUFXLEdBQUdDLDZEQUFXLENBQ3JDO0FBQ0NDLE1BQUksRUFBRSxRQURQO0FBRUNKLGNBQVksRUFBWkEsWUFGRDtBQUdDSyxVQUFRLEVBQUU7QUFDUkMsZUFBVyxFQUFFLHFCQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFDYjtBQUNFO0FBQ0FELFdBQUssQ0FBQ04sS0FBTix3SkFBa0JNLEtBQUssQ0FBQ04sS0FBeEIsSUFBK0JPLE1BQU0sQ0FBQ0MsT0FBdEM7QUFDRCxLQUxPO0FBTVJDLG9CQUFnQixFQUFFLDBCQUFDSCxLQUFELEVBQVFDLE1BQVIsRUFDbEI7QUFDSTtBQUNBO0FBQ0E7QUFDQSxVQUFNRyxLQUFLLEdBQUdKLEtBQUssQ0FBQ04sS0FBTixDQUFZVyxTQUFaLENBRVosVUFBQ0MsVUFBRDtBQUFBLGVBQWVBLFVBQVUsQ0FBQ0MsRUFBWCxLQUFrQk4sTUFBTSxDQUFDQyxPQUFQLENBQWVLLEVBQWhEO0FBQUEsT0FGWSxDQUFkLENBSkosQ0FRTTs7QUFFRixVQUFJQyxTQUFTLEdBQUcsMklBQUlSLEtBQUssQ0FBQ04sS0FBYixDQUFiOztBQUVBLFVBQUlVLEtBQUssSUFBRyxDQUFaLEVBQ0E7QUFDRTtBQUNBO0FBQ0FJLGlCQUFTLENBQUNDLE1BQVYsQ0FBaUJMLEtBQWpCLEVBQXdCLENBQXhCO0FBRUQsT0FORCxNQVFBO0FBQ0VNLGVBQU8sQ0FBQ0MsSUFBUixxQ0FBMENWLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSyxFQUF6RCxrQ0FERixDQUdFO0FBRUQ7O0FBQ0RQLFdBQUssQ0FBQ04sS0FBTixHQUFlYyxTQUFmO0FBQ0g7QUFsQ087QUFIWCxDQURxQyxDQUEvQjsyQkEwQzBDYixXQUFXLENBQUNpQixPO0lBQTlDYixXLHdCQUFBQSxXO0lBQWFJLGdCLHdCQUFBQSxnQixFQUU1Qjs7O0FBQ08sSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2MsTUFBTixDQUFhcEIsS0FBeEI7QUFBQSxDQUFwQjtBQUNBLElBQU1xQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDZixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDYyxNQUFOLENBQWFwQixLQUF4QjtBQUFBLENBQXBCO0FBRVAsK0RBQWVDLFdBQVcsQ0FBQ3FCLE9BQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxYjMyYWFlODJlYTEzOGUwZDgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxuLy9BbiBlbXB0eSBhcnJheSBzaG93aW4gdGhlIHN0YXRlIG9mIG15IHNsaWNlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFxyXG57XHJcbiAgaXRlbXM6IFtdLFxyXG59O1xyXG5cclxuLy8gVGhlIGJhc2ljIGZ1bmN0aW9ucyBteSBzbGljIGNhbiBkb1xyXG4vLyBBZGRpbmcgdG8gYmFza2V0XHJcbi8vIFJlbW92aW5nIGZyb20gQmFza2V0XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZVxyXG4oe1xyXG4gIG5hbWU6IFwiYmFza2V0XCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IFxyXG4gICAge1xyXG4gICAgICAvL3NwcmVhZCB3aGF0ZXZlciB0aGUgY3VycmVudCBpdGVtcyggY29weSB0aGUgY3VycmVudCBzdG9yZSkgdGhlbiBhZGQgdGhlIHBheWxvYWQgdGhhdCBjb250YWlucyB0aGUgcHJvZHVjdCB0aGUgZGlzcGF0Y2ggZnVuY3Rpb24ganVzdCBwYXNzZWQgaW4gXHJcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF1cclxuICAgIH0sXHJcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4gXHJcbiAgICB7XHJcbiAgICAgICAgLy9TRUFSQ0ggRk9SIFRIRSBJTkRFWCBPRiBUSEUgRklMRSBUTyBCRSBSRU1PVkVEXHJcbiAgICAgICAgLy9zZWUgaWYgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGV4aXN0cyBieSB1c25nIHRoZSBzdGF0ZS5pdGVtc1xyXG4gICAgICAgIC8vd2UgZ28gdGhyb3VnaCBldmVyeSBzaW5nbGUgaXRlbWluIHRoZSBiYXNrZXQgY2hlY2tpbmcgYWdhaW5zdCB0aGUgYmFza2V0IGlkIGlmIGl0IGlzIGVxdWFsIHRvIHRoZSBpZCBwYXNzZWQgaW4gY29taW5nIHRocm91Z2ggYnMgdGhhIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXhcclxuICAgICAgICAoXHJcbiAgICAgICAgICAoYmFza2V0SXRlbSkgPT5iYXNrZXRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgYmFza2V0KG1ha2UgYSBjb3B5IG9mIGl0IHRoYXQgY2FuIGJlIGNoYW5nZWQpXHJcblxyXG4gICAgICAgIGxldCBuZXdCYXNrZXQgPSBbLi4uc3RhdGUuaXRlbXNdO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPj0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vcmVtb3ZlIHRoZSBpdGVtIGZyb20gdGhlIGJhc2tldCBieSBzcGxpY2luZyBpdC4uLi4uLi5cclxuICAgICAgICAgIC8vY3V0cyB0aGUgaXRlbSBieSAxXHJcbiAgICAgICAgICBuZXdCYXNrZXQuc3BsaWNlKGluZGV4LCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuJ3QgcmVtb3ZlIHByb2R1Y3QgKGlkOiAke2FjdGlvbi5wYXlsb2FkLmlkfSkgYXMgaXQncyBub3QgaW4gdGhlIGJhc2tldGApO1xyXG5cclxuICAgICAgICAgIC8vZmluYWxseSB1cGRhdGUgdGhlIG5ldyBpdGVtcyBpbnRvIHRoZSBiYXNrZXRcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLml0ZW1zICA9IG5ld0Jhc2tldDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWwgPSAoc3RhdGUpID0+IHN0YXRlLmJhc2tldC5pdGVtcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2tldFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=