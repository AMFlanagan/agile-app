webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/actions/estimationActions.js":
/*!******************************************!*\
  !*** ./src/actions/estimationActions.js ***!
  \******************************************/
/*! exports provided: addTicket, delTicket, getAverageVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTicket", function() { return addTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delTicket", function() { return delTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverageVelocity", function() { return getAverageVelocity; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js");

function addTicket(ticket) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_TICKET"],
    ticket: ticket
  };
}
function delTicket(index) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DEL_TICKET"],
    index: index
  };
}
function getAverageVelocity(value) {
  return {
    type: AVG_VELOCITY,
    value: value
  };
}

/***/ })

})
//# sourceMappingURL=index.js.e5f546f0bf3effff2687.hot-update.js.map