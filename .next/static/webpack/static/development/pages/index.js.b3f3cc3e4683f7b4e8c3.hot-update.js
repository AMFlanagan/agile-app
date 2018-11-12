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
var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/OuterForm.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var OuterForm =
/*#__PURE__*/
function (_Component) {
  _inherits(OuterForm, _Component);

  function OuterForm(props) {
    var _this;

    _classCallCheck(this, OuterForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OuterForm).call(this, props));
    _this.state = {
      inputs: _this.props.tickets,
      averageWeeklyVelocity: null
    };
    return _this;
  }

  _createClass(OuterForm, [{
    key: "handleChangeSinglePost",
    value: function handleChangeSinglePost(value, id) {
      switch (id) {
        case 'average-cyle-velocity':
          this.setState({
            averageWeeklyVelocity: value / 2
          });
      }
    }
  }, {
    key: "addInput",
    value: function addInput() {
      this.props.dispatch(Object(_actions_estimationActions__WEBPACK_IMPORTED_MODULE_4__["addTicket"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: this.props.tickets.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))); // this.setState((state) => {
      //     return state.inputs.push(<Input key={state.inputs.length} averageWeeklyVelocity={this.state.averageWeeklyVelocity}/>);
      // });
    }
  }, {
    key: "delInput",
    value: function delInput() {
      this.props.dispatch(Object(_actions_estimationActions__WEBPACK_IMPORTED_MODULE_4__["delTicket"])()); // this.setState((state) => {
      //     return state.inputs.splice(-1, 1);
      // });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Input"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.props.tickets), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this2.delInput();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this2.addInput();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this2.handleChangeSinglePost(e.target.value, e.target.id);
        },
        id: "average-cyle-velocity",
        type: "number",
        name: "average-cyle-velocity",
        placeholder: "Average cycle velocity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this2.handleChangeSinglePost(e.target.value, e.target.id);
        },
        id: "average-Weekly-Initiative-CoS-velocity",
        type: "number",
        name: "average-Weekly-Initiative-CoS-velocity",
        placeholder: "Average cyle velocity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Average Weekly Velocity ", this.state.averageWeeklyVelocity)));
    }
  }]);

  return OuterForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    tickets: Object(_reducers_reducers__WEBPACK_IMPORTED_MODULE_1__["getTickets"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(OuterForm));

/***/ })

})
//# sourceMappingURL=index.js.b3f3cc3e4683f7b4e8c3.hot-update.js.map