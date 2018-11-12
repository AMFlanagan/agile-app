webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/OuterForm.js":
/*!*************************************!*\
  !*** ./src/components/OuterForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OuterForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
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

  function OuterForm() {
    var _this;

    _classCallCheck(this, OuterForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OuterForm).call(this));
    _this.state = {
      inputs: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: 0,
        averageWeeklyVelocity: _this.averageWeeklyVelocity || null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      })],
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
      var _this2 = this;

      this.setState(function (state) {
        return state.inputs.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: state.inputs.length,
          averageWeeklyVelocity: _this2.state.averageWeeklyVelocity,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }));
      });
    }
  }, {
    key: "delInput",
    value: function delInput() {
      this.setState(function (state) {
        return state.inputs.splice(-1, 1);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Input"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.state.inputs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this3.delInput();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this3.addInput();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.handleChangeSinglePost(e.target.value, e.target.id);
        },
        id: "average-cyle-velocity",
        type: "number",
        name: "average-cyle-velocity",
        placeholder: "Average cycle velocity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(e) {
          return _this3.handleChangeSinglePost(e.target.value, e.target.id);
        },
        id: "average-Weekly-Initiative-CoS-velocity",
        type: "number",
        name: "average-Weekly-Initiative-CoS-velocity",
        placeholder: "Average cyle velocity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Average Weekly Velocity ", this.state.averageWeeklyVelocity)));
    }
  }]);

  return OuterForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.98ac46160169b28dea8e.hot-update.js.map