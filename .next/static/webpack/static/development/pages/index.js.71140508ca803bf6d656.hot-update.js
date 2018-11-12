webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/*! exports provided: default, getTickets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTickets", function() { return getTickets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.js");
var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/reducers/reducers.js";




var initialState = {
  tickets: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })]
};

function tickets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.tickets;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ADD_TICKET"]:
      return Object.assign({}, state, {
        tickets: [state.tickets.tickets, action.ticket]
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  tickets: tickets
}));
var getTickets = function getTickets(state) {
  return state.tickets;
};

/***/ })

})
//# sourceMappingURL=index.js.71140508ca803bf6d656.hot-update.js.map