webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/*! exports provided: default, getTickets, getAverageVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTickets", function() { return getTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverageVelocity", function() { return getAverageVelocity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.js");
var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/reducers/reducers.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var initialState = {
  tickets: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })],
  velocity: {
    averageVelocity: 0
  }
};

function tickets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.tickets;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ADD_TICKET"]:
      return _toConsumableArray(state).concat([action.ticket]);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["DEL_TICKET"]:
      return _toConsumableArray(state.slice(0, action.index)).concat(_toConsumableArray(state.slice(action.index + 1)));

    default:
      return state;
  }
}

function velocity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.velocity;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["AVG_VELOCITY"]:
      return Object.assign({}, state, {
        getAverageVelocity: action.value
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  tickets: tickets,
  velocity: velocity
}));
var getTickets = function getTickets(state) {
  return state.tickets;
};
var getAverageVelocity = function getAverageVelocity(state) {
  return state.velocity.averageVelocity;
};

/***/ })

})
//# sourceMappingURL=index.js.ba1fd726c0095b364920.hot-update.js.map