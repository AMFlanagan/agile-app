webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/OuterForm.js":
/*!*************************************!*\
  !*** ./src/components/OuterForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/reducers */ "./src/reducers/reducers.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _actions_estimationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/estimationActions */ "./src/actions/estimationActions.js");
var _this = undefined,
    _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/OuterForm.js";








var OuterForm = function OuterForm(_ref) {
  var tickets = _ref.tickets,
      dispatch = _ref.dispatch;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Input"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, tickets), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return dispatch(Object(_actions_estimationActions__WEBPACK_IMPORTED_MODULE_4__["delTicket"])(_this.props.tickets.length - 1));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return dispatch(Object(_actions_estimationActions__WEBPACK_IMPORTED_MODULE_4__["addTicket"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: _this.props.tickets.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return _this.handleChangeSinglePost(e.target.value, e.target.id);
    },
    id: "average-cyle-velocity",
    type: "number",
    name: "average-cyle-velocity",
    placeholder: "Average cycle velocity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return _this.handleChangeSinglePost(e.target.value, e.target.id);
    },
    id: "average-Weekly-Initiative-CoS-velocity",
    type: "number",
    name: "average-Weekly-Initiative-CoS-velocity",
    placeholder: "Average cyle velocity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Average Weekly Velocity ", _this.state.averageWeeklyVelocity)));
}; // class OuterForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputs: this.props.tickets,
//             averageWeeklyVelocity: null
//         };
//     }
//     handleChangeSinglePost(value, id) {
//         switch (id) {
//             case 'average-cyle-velocity':
//                 this.setState({
//                     averageWeeklyVelocity: (value / 2)
//                 });
//         }
//     }
//     addInput() {
//         this.props.dispatch(addTicket(<Input key={this.props.tickets.length}/>));
//     }
//     delInput() {
//         this.props.dispatch(delTicket(this.props.tickets.length - 1));
//     }
//     render() {
//         return (
//             <Fragment>
//                 <div>
//                     <h2>Input</h2>
//                     <div>
//                         {this.props.tickets}
//                     </div>
//                     <button className="btn btn-primary" onClick={() => this.delInput()}>-</button>
//                     <button className="btn btn-primary" onClick={() => this.addInput()}>+</button>
//                 </div>
//                 <div>
//                     <input onChange={(e) => this.handleChangeSinglePost(e.target.value, e.target.id)} id="average-cyle-velocity" type="number" name="average-cyle-velocity" placeholder="Average cycle velocity"></input>
//                     <input onChange={(e) => this.handleChangeSinglePost(e.target.value, e.target.id)} id="average-Weekly-Initiative-CoS-velocity" type="number" name="average-Weekly-Initiative-CoS-velocity" placeholder="Average cyle velocity"></input>
//                     <p>Average Weekly Velocity {this.state.averageWeeklyVelocity}</p>
//                 </div>
//             </Fragment>
//         );
//     }
// }


var mapStateToProps = function mapStateToProps(state) {
  return {
    tickets: Object(_reducers_reducers__WEBPACK_IMPORTED_MODULE_1__["getTickets"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(OuterForm));

/***/ }),

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
  })]
};

function tickets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.tickets;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ADD_TICKET"]:
      return _toConsumableArray(state).concat([action.ticket]);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["DEL_TICKET"]:
      return _toConsumableArray(state.slice(0, action.index)).concat(_toConsumableArray(state.slice(action.index + 1)));
    // case

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
//# sourceMappingURL=index.js.8194410d956e3a81a3bf.hot-update.js.map