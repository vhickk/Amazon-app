(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ "./src/app/store.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ "next-auth/react");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {
    session: pageProps.session,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
      store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketSlice": function() { return /* binding */ basketSlice; },
/* harmony export */   "addToBasket": function() { return /* binding */ addToBasket; },
/* harmony export */   "removeFromBasket": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; },
/* harmony export */   "selectTotal": function() { return /* binding */ selectTotal; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
 //An empty array showin the state of my slice

const initialState = {
  items: []
}; // The basic functions my slic can do
// Adding to basket
// Removing from Basket

const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //spread whatever the current items( copy the current store) then add the payload that contains the product the dispatch function just passed in 
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      //SEARCH FOR THE INDEX OF THE FILE TO BE REMOVED
      //see if the index of the item exists by usng the state.items
      //we go through every single itemin the basket checking against the basket id if it is equal to the id passed in coming through bs tha action.payload
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id); // create a new basket(make a copy of it that can be changed)

      let newBasket = [...state.items];

      if (index >= 0) {
        //remove the item from the basket by splicing it.......
        //cuts the item by 1
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in the basket`); //finally update the new items into the basket
      }

      state.items = newBasket;
    }
  }
});
const {
  addToBasket,
  removeFromBasket
} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.basket.items; //selectTotal gets the state from state.basket.items
//the reduce function then goes ahead to loops through the items in the global store creating a total thst can be used when we call our selector
//totl starts at a price of zero before iteration

const selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0);
/* harmony default export */ __webpack_exports__["default"] = (basketSlice.reducer);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvYXBwL3N0b3JlLmpzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9zbGljZXMvYmFza2V0U2xpY2UuanMiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcIm5leHQtYXV0aC9yZWFjdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJiYXNrZXQiLCJiYXNrZXRSZWR1Y2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJiYXNrZXRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9CYXNrZXQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZW1vdmVGcm9tQmFza2V0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJiYXNrZXRJdGVtIiwiaWQiLCJuZXdCYXNrZXQiLCJzcGxpY2UiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsInNlbGVjdFRvdGFsIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLEtBQUssR0FBR0MsZ0VBQWMsQ0FBQztBQUNsQ0MsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRUMsd0RBQWFBO0FBRGQ7QUFEeUIsQ0FBRCxDQUE1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxzQkFDRSw4REFBQyw0REFBRDtBQUFpQixXQUFPLEVBQUdBLFNBQVMsQ0FBQ0MsT0FBckM7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFVLFdBQUssRUFBRVIsNkNBQWpCO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZU8sU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVUEsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDWkE7O0FBQ0EsTUFBTUksWUFBWSxHQUNsQjtBQUNFQyxPQUFLLEVBQUU7QUFEVCxDQURBLEMsQ0FLQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUNyQztBQUNDQyxNQUFJLEVBQUUsUUFEUDtBQUVDSixjQUZEO0FBR0NLLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQ2I7QUFDRTtBQUNBRCxXQUFLLENBQUNOLEtBQU4sR0FBYyxDQUFDLEdBQUdNLEtBQUssQ0FBQ04sS0FBVixFQUFpQk8sTUFBTSxDQUFDQyxPQUF4QixDQUFkO0FBQ0QsS0FMTztBQU1SQyxvQkFBZ0IsRUFBRSxDQUFDSCxLQUFELEVBQVFDLE1BQVIsS0FDbEI7QUFDSTtBQUNBO0FBQ0E7QUFDQSxZQUFNRyxLQUFLLEdBQUdKLEtBQUssQ0FBQ04sS0FBTixDQUFZVyxTQUFaLENBRVhDLFVBQUQsSUFBZUEsVUFBVSxDQUFDQyxFQUFYLEtBQWtCTixNQUFNLENBQUNDLE9BQVAsQ0FBZUssRUFGcEMsQ0FBZCxDQUpKLENBUU07O0FBRUYsVUFBSUMsU0FBUyxHQUFHLENBQUMsR0FBR1IsS0FBSyxDQUFDTixLQUFWLENBQWhCOztBQUVBLFVBQUlVLEtBQUssSUFBRyxDQUFaLEVBQ0E7QUFDRTtBQUNBO0FBQ0FJLGlCQUFTLENBQUNDLE1BQVYsQ0FBaUJMLEtBQWpCLEVBQXdCLENBQXhCO0FBRUQsT0FORCxNQVFBO0FBQ0VNLGVBQU8sQ0FBQ0MsSUFBUixDQUFjLDZCQUE0QlYsTUFBTSxDQUFDQyxPQUFQLENBQWVLLEVBQUcsNkJBQTVELEVBREYsQ0FHRTtBQUVEOztBQUNEUCxXQUFLLENBQUNOLEtBQU4sR0FBZWMsU0FBZjtBQUNIO0FBbENPO0FBSFgsQ0FEcUMsQ0FBL0I7QUEwQ0EsTUFBTTtBQUFFVCxhQUFGO0FBQWVJO0FBQWYsSUFBb0NSLFdBQVcsQ0FBQ2lCLE9BQXRELEMsQ0FFUDs7QUFDTyxNQUFNQyxXQUFXLEdBQUliLEtBQUQsSUFBV0EsS0FBSyxDQUFDYixNQUFOLENBQWFPLEtBQTVDLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRU8sTUFBTW9CLFdBQVcsR0FBSWQsS0FBRCxJQUFXQSxLQUFLLENBQUNiLE1BQU4sQ0FBYU8sS0FBYixDQUFtQnFCLE1BQW5CLENBQTBCLENBQUNDLEtBQUQsRUFBUUMsSUFBUixLQUFpQkQsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQXhELEVBQStELENBQS9ELENBQS9CO0FBRVAsK0RBQWV2QixXQUFXLENBQUNULE9BQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYmFza2V0UmVkdWNlciBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYmFza2V0OiBiYXNrZXRSZWR1Y2VyLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9hcHAvc3RvcmUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uID17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcblxyXG4vL0FuIGVtcHR5IGFycmF5IHNob3dpbiB0aGUgc3RhdGUgb2YgbXkgc2xpY2VcclxuY29uc3QgaW5pdGlhbFN0YXRlID0gXHJcbntcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG4vLyBUaGUgYmFzaWMgZnVuY3Rpb25zIG15IHNsaWMgY2FuIGRvXHJcbi8vIEFkZGluZyB0byBiYXNrZXRcclxuLy8gUmVtb3ZpbmcgZnJvbSBCYXNrZXRcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNrZXRTbGljZSA9IGNyZWF0ZVNsaWNlXHJcbih7XHJcbiAgbmFtZTogXCJiYXNrZXRcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4gXHJcbiAgICB7XHJcbiAgICAgIC8vc3ByZWFkIHdoYXRldmVyIHRoZSBjdXJyZW50IGl0ZW1zKCBjb3B5IHRoZSBjdXJyZW50IHN0b3JlKSB0aGVuIGFkZCB0aGUgcGF5bG9hZCB0aGF0IGNvbnRhaW5zIHRoZSBwcm9kdWN0IHRoZSBkaXNwYXRjaCBmdW5jdGlvbiBqdXN0IHBhc3NlZCBpbiBcclxuICAgICAgc3RhdGUuaXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiBcclxuICAgIHtcclxuICAgICAgICAvL1NFQVJDSCBGT1IgVEhFIElOREVYIE9GIFRIRSBGSUxFIFRPIEJFIFJFTU9WRURcclxuICAgICAgICAvL3NlZSBpZiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gZXhpc3RzIGJ5IHVzbmcgdGhlIHN0YXRlLml0ZW1zXHJcbiAgICAgICAgLy93ZSBnbyB0aHJvdWdoIGV2ZXJ5IHNpbmdsZSBpdGVtaW4gdGhlIGJhc2tldCBjaGVja2luZyBhZ2FpbnN0IHRoZSBiYXNrZXQgaWQgaWYgaXQgaXMgZXF1YWwgdG8gdGhlIGlkIHBhc3NlZCBpbiBjb21pbmcgdGhyb3VnaCBicyB0aGEgYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleFxyXG4gICAgICAgIChcclxuICAgICAgICAgIChiYXNrZXRJdGVtKSA9PmJhc2tldEl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBiYXNrZXQobWFrZSBhIGNvcHkgb2YgaXQgdGhhdCBjYW4gYmUgY2hhbmdlZClcclxuXHJcbiAgICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc107XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy9yZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgYmFza2V0IGJ5IHNwbGljaW5nIGl0Li4uLi4uLlxyXG4gICAgICAgICAgLy9jdXRzIHRoZSBpdGVtIGJ5IDFcclxuICAgICAgICAgIG5ld0Jhc2tldC5zcGxpY2UoaW5kZXgsIDEpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBDYW4ndCByZW1vdmUgcHJvZHVjdCAoaWQ6ICR7YWN0aW9uLnBheWxvYWQuaWR9KSBhcyBpdCdzIG5vdCBpbiB0aGUgYmFza2V0YCk7XHJcblxyXG4gICAgICAgICAgLy9maW5hbGx5IHVwZGF0ZSB0aGUgbmV3IGl0ZW1zIGludG8gdGhlIGJhc2tldFxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuaXRlbXMgID0gbmV3QmFza2V0O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXM7XHJcblxyXG4vL3NlbGVjdFRvdGFsIGdldHMgdGhlIHN0YXRlIGZyb20gc3RhdGUuYmFza2V0Lml0ZW1zXHJcbi8vdGhlIHJlZHVjZSBmdW5jdGlvbiB0aGVuIGdvZXMgYWhlYWQgdG8gbG9vcHMgdGhyb3VnaCB0aGUgaXRlbXMgaW4gdGhlIGdsb2JhbCBzdG9yZSBjcmVhdGluZyBhIHRvdGFsIHRoc3QgY2FuIGJlIHVzZWQgd2hlbiB3ZSBjYWxsIG91ciBzZWxlY3RvclxyXG4vL3RvdGwgc3RhcnRzIGF0IGEgcHJpY2Ugb2YgemVybyBiZWZvcmUgaXRlcmF0aW9uXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VG90YWwgPSAoc3RhdGUpID0+IHN0YXRlLmJhc2tldC5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UsIDApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=