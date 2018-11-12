webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/actions/estimationActions.js":
/*!******************************************!*\
  !*** ./src/actions/estimationActions.js ***!
  \******************************************/
/*! exports provided: addTicket, delTicket, averageVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTicket", function() { return addTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delTicket", function() { return delTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageVelocity", function() { return averageVelocity; });
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
function averageVelocity(value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DEL_TICKET"],
    value: value
  };
}

/***/ })

})
//# sourceMappingURL=index.js.10f7bbaf96603dbc7c6b.hot-update.js.map