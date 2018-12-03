module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "next/head"));

var _NavBar = _interopRequireDefault(__webpack_require__(/*! ../src/components/NavBar */ "./src/components/NavBar.js"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/layouts/main.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      page = _ref.page;
  return _react.default.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, _react.default.createElement(_head.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Garys magical fucking app"), _react.default.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), _react.default.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), _react.default.createElement(_NavBar.default, {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), _react.default.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children));
};

exports.default = _default;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _App = _interopRequireDefault(__webpack_require__(/*! ../src/components/App */ "./src/components/App.js"));

var _main = _interopRequireDefault(__webpack_require__(/*! ../layouts/main */ "./layouts/main.js"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/pages/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement(_main.default, {
    page: "index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement(_App.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

exports.default = _default;

/***/ }),

/***/ "./src/actions/actionTypes.js":
/*!************************************!*\
  !*** ./src/actions/actionTypes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_CONTINGENCY = exports.CALCULATE_RESULTS = exports.UPDATE_TICKET = exports.AVG_VELOCITY = exports.DEL_TICKET = exports.ADD_TICKET = void 0;
// ESTIMATION ACTIONS
var ADD_TICKET = 'ADD_TICKET';
exports.ADD_TICKET = ADD_TICKET;
var DEL_TICKET = 'DEL_TICKET';
exports.DEL_TICKET = DEL_TICKET;
var AVG_VELOCITY = 'AVG_VELOCITY';
exports.AVG_VELOCITY = AVG_VELOCITY;
var UPDATE_TICKET = 'UPDATE_TICKET';
exports.UPDATE_TICKET = UPDATE_TICKET;
var CALCULATE_RESULTS = 'CALCULATE_RESULTS';
exports.CALCULATE_RESULTS = CALCULATE_RESULTS;
var SET_CONTINGENCY = 'SET_CONTINGENCY';
exports.SET_CONTINGENCY = SET_CONTINGENCY;

/***/ }),

/***/ "./src/actions/estimationActions.js":
/*!******************************************!*\
  !*** ./src/actions/estimationActions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTicket = addTicket;
exports.delTicket = delTicket;
exports.setAverageVelocity = setAverageVelocity;
exports.updateTicket = updateTicket;
exports.calculateResults = calculateResults;
exports.setContingency = setContingency;

var a = _interopRequireWildcard(__webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function addTicket(ticket) {
  return {
    type: a.ADD_TICKET,
    ticket: ticket
  };
}

function delTicket(index) {
  return {
    type: a.DEL_TICKET,
    index: index
  };
}

function setAverageVelocity(value) {
  return {
    type: a.AVG_VELOCITY,
    value: value
  };
}

function updateTicket(points, id, averageVelocity) {
  return {
    type: a.UPDATE_TICKET,
    points: points,
    id: id,
    averageVelocity: averageVelocity
  };
}

function calculateResults(tickets, contingency) {
  return {
    type: a.CALCULATE_RESULTS,
    tickets: tickets,
    contingency: contingency
  };
}

function setContingency(value) {
  return {
    type: a.SET_CONTINGENCY,
    value: value
  };
}

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Estimations = _interopRequireDefault(__webpack_require__(/*! ./estimation/Estimations */ "./src/components/estimation/Estimations.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reducers = _interopRequireDefault(__webpack_require__(/*! ../reducers/reducers */ "./src/reducers/reducers.js"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/App.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers.default, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var App = function App() {
  return _react.default.createElement(_reactRedux.Provider, {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _react.default.createElement(_Estimations.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

var _default = App;
exports.default = _default;

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "next/link"));

var _NavBar = _interopRequireDefault(__webpack_require__(/*! ./NavBar.scss */ "./src/components/NavBar.scss"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/NavBar.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(_ref) {
  var page = _ref.page;
  return _react.default.createElement(_react.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _react.default.createElement(_style.default, {
    styleId: _NavBar.default.__hash,
    css: _NavBar.default,
    __self: this
  }), _react.default.createElement("nav", {
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "navbar navbar-expand-lg navbar-dark bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, _react.default.createElement("a", {
    href: "#",
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Garys magical fucking app"), _react.default.createElement("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "navbar-toggler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, _react.default.createElement("span", {
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), _react.default.createElement("div", {
    id: "navbarSupportedContent",
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "collapse navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, _react.default.createElement("ul", {
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "navbar-nav mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, _react.default.createElement("li", {
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "nav-item ".concat(page === 'index' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _react.default.createElement(_link.default, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _react.default.createElement("a", {
    href: "",
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Estimator"))), _react.default.createElement("li", {
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "nav-item ".concat(page === 'rtg' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _react.default.createElement(_link.default, {
    href: "/rtg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _react.default.createElement("a", {
    className: "jsx-".concat(_NavBar.default.__hash) + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "RTG")))))));
};

var _default = NavBar;
exports.default = _default;

/***/ }),

/***/ "./src/components/NavBar.scss":
/*!************************************!*\
  !*** ./src/components/NavBar.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".navbar.jsx-1553157733{background-color:#f3f4f5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL05hdkJhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0Qix5QkFBQyIsImZpbGUiOiIvVXNlcnMvYWZsMTMvY29kZS9MYW5kRC9hZ2lsZS10b29scy9zcmMvY29tcG9uZW50cy9OYXZCYXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjU7IH1cbmA7Il19 */\n/*@ sourceURL=/Users/afl13/code/LandD/agile-tools/src/components/NavBar.scss */");

_defaultExport.__hash = "1553157733";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/Estimations.js":
/*!**************************************************!*\
  !*** ./src/components/estimation/Estimations.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _OuterForm = _interopRequireDefault(__webpack_require__(/*! ./OuterForm */ "./src/components/estimation/OuterForm.js"));

var _Results = _interopRequireDefault(__webpack_require__(/*! ./Results */ "./src/components/estimation/Results.js"));

var _Estimations = _interopRequireDefault(__webpack_require__(/*! ./Estimations.scss */ "./src/components/estimation/Estimations.scss"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/estimation/Estimations.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Estimations =
/*#__PURE__*/
function (_Component) {
  _inherits(Estimations, _Component);

  function Estimations() {
    _classCallCheck(this, Estimations);

    return _possibleConstructorReturn(this, _getPrototypeOf(Estimations).apply(this, arguments));
  }

  _createClass(Estimations, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "jsx-".concat(_Estimations.default.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, _react.default.createElement(_style.default, {
        styleId: _Estimations.default.__hash,
        css: _Estimations.default,
        __self: this
      }), _react.default.createElement(_OuterForm.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), _react.default.createElement("div", {
        className: "jsx-".concat(_Estimations.default.__hash) + " " + 'splitter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), _react.default.createElement(_Results.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    }
  }]);

  return Estimations;
}(_react.Component);

exports.default = Estimations;

/***/ }),

/***/ "./src/components/estimation/Estimations.scss":
/*!****************************************************!*\
  !*** ./src/components/estimation/Estimations.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".splitter.jsx-356978041{margin-top:10px;margin-bottom:10px;width:100%;height:1px;background-color:#343A40;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vRXN0aW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFFbUIsZ0JBQ0csbUJBQ1IsV0FDQSxXQUNjLHlCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vRXN0aW1hdGlvbnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLnNwbGl0dGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzQTQwOyB9XG5gOyJdfQ== */\n/*@ sourceURL=/Users/afl13/code/LandD/agile-tools/src/components/estimation/Estimations.scss */");

_defaultExport.__hash = "356978041";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/OuterForm.js":
/*!************************************************!*\
  !*** ./src/components/estimation/OuterForm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reducers = __webpack_require__(/*! ../../reducers/reducers */ "./src/reducers/reducers.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _TicketInputList = _interopRequireDefault(__webpack_require__(/*! ./TicketInputList */ "./src/components/estimation/TicketInputList.js"));

var _estimationActions = __webpack_require__(/*! ../../actions/estimationActions */ "./src/actions/estimationActions.js");

var _OuterForm = _interopRequireDefault(__webpack_require__(/*! ./OuterForm.scss */ "./src/components/estimation/OuterForm.scss"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/estimation/OuterForm.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OuterForm = function OuterForm(_ref) {
  var _React$createElement, _React$createElement2, _React$createElement3;

  var averageVelocity = _ref.averageVelocity,
      tickets = _ref.tickets,
      dispatch = _ref.dispatch,
      contingency = _ref.contingency;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "estimator-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _react.default.createElement(_style.default, {
    styleId: _OuterForm.default.__hash,
    css: _OuterForm.default,
    __self: this
  }), _react.default.createElement("h3", {
    className: "jsx-".concat(_OuterForm.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _react.default.createElement("small", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Estimation Tool")), _react.default.createElement("form", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "avg-velocity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "form-row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _react.default.createElement("label", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-1.5 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Average Cycle Velocity"), _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, _react.default.createElement("input", (_React$createElement = {
    type: "text",
    onChange: function onChange(e) {
      return dispatch((0, _estimationActions.setAverageVelocity)(e.target.value));
    },
    id: "average-cycle-velocity"
  }, _defineProperty(_React$createElement, "type", "number"), _defineProperty(_React$createElement, "name", "average-cyle-velocity"), _defineProperty(_React$createElement, "className", "jsx-".concat(_OuterForm.default.__hash) + " " + "form-control"), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 17
  }), _defineProperty(_React$createElement, "__self", this), _React$createElement))), _react.default.createElement("label", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-1.5 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Average Weekly Velocity"), _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, _react.default.createElement("input", (_React$createElement2 = {
    type: "text",
    readOnly: true,
    onChange: function onChange(e) {
      return dispatch((0, _estimationActions.setAverageVelocity)(e.target.value));
    },
    id: "average-cycle-velocity"
  }, _defineProperty(_React$createElement2, "type", "number"), _defineProperty(_React$createElement2, "name", "average-cyle-velocity"), _defineProperty(_React$createElement2, "placeholder", averageVelocity / 2), _defineProperty(_React$createElement2, "className", "jsx-".concat(_OuterForm.default.__hash) + " " + "form-control-plaintext"), _defineProperty(_React$createElement2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 21
  }), _defineProperty(_React$createElement2, "__self", this), _React$createElement2))), _react.default.createElement("label", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-1.5 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Contingency Rate (%)"), _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _react.default.createElement("input", (_React$createElement3 = {
    type: "text",
    onChange: function onChange(e) {
      return dispatch((0, _estimationActions.setContingency)(e.target.value));
    },
    id: "contingency-rate"
  }, _defineProperty(_React$createElement3, "type", "number"), _defineProperty(_React$createElement3, "name", "contingency"), _defineProperty(_React$createElement3, "className", "jsx-".concat(_OuterForm.default.__hash) + " " + "form-control"), _defineProperty(_React$createElement3, "__source", {
    fileName: _jsxFileName,
    lineNumber: 25
  }), _defineProperty(_React$createElement3, "__self", this), _React$createElement3))), _react.default.createElement("label", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-2 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Add/ Remove Tickets"), _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-0.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _react.default.createElement("div", {
    onClick: function onClick() {
      return dispatch((0, _estimationActions.delTicket)(tickets.length - 1));
    },
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "btn btn-secondary btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "-")), _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-0.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, _react.default.createElement("div", {
    onClick: function onClick() {
      return dispatch((0, _estimationActions.addTicket)({
        id: tickets.length,
        points: 0
      }));
    },
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "btn btn-secondary btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "+")), _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, _react.default.createElement("div", {
    onClick: function onClick() {
      return dispatch((0, _estimationActions.calculateResults)(tickets, contingency));
    },
    className: "jsx-".concat(_OuterForm.default.__hash) + " " + "btn btn-primary btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Calculate")))), _react.default.createElement("div", {
    className: "jsx-".concat(_OuterForm.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _react.default.createElement(_TicketInputList.default, {
    tickets: tickets,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    tickets: (0, _reducers.getTickets)(state),
    averageVelocity: (0, _reducers.getAverageVelocity)(state),
    contingency: (0, _reducers.getContingency)(state)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(OuterForm);

exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/OuterForm.scss":
/*!**************************************************!*\
  !*** ./src/components/estimation/OuterForm.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".avg-velocity.jsx-4246388609{background-color:#f3f4f5;padding:10px;}.avg-velocity-wrapper.jsx-4246388609{width:60%;text-align:center;}.estimator-wrapper.jsx-4246388609{margin:10px;}.estimator-wrapper.jsx-4246388609 h3.jsx-4246388609{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vT3V0ZXJGb3JtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRTRCLEFBSWYsQUFJRSxBQUdNLFVBTkEsRUFHTCxNQUdNLE9BVk4sR0FJTSxVQUpMIiwiZmlsZSI6Ii9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vT3V0ZXJGb3JtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5hdmctdmVsb2NpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY1O1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5hdmctdmVsb2NpdHktd3JhcHBlciB7XG4gIHdpZHRoOiA2MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uZXN0aW1hdG9yLXdyYXBwZXIge1xuICBtYXJnaW46IDEwcHg7IH1cblxuLmVzdGltYXRvci13cmFwcGVyIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5gOyJdfQ== */\n/*@ sourceURL=/Users/afl13/code/LandD/agile-tools/src/components/estimation/OuterForm.scss */");

_defaultExport.__hash = "4246388609";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/Results.js":
/*!**********************************************!*\
  !*** ./src/components/estimation/Results.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reducers = __webpack_require__(/*! ../../reducers/reducers */ "./src/reducers/reducers.js");

var _dateformat = _interopRequireDefault(__webpack_require__(/*! dateformat */ "dateformat"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Results = _interopRequireDefault(__webpack_require__(/*! ./Results.scss */ "./src/components/estimation/Results.scss"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/estimation/Results.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function Results(_ref) {
  var totalDays = _ref.totalDays,
      completionDate = _ref.completionDate,
      contingency = _ref.contingency;
  var date = completionDate ? completionDate : null;
  return date && totalDays ? _react.default.createElement("form", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "results-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _react.default.createElement(_style.default, {
    styleId: _Results.default.__hash,
    css: _Results.default,
    __self: this
  }), _react.default.createElement("div", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "form-row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _react.default.createElement("label", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "col-sm-2 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Total Days"), _react.default.createElement("div", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, totalDays), _react.default.createElement("label", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "col-sm-2 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Estimated Completion Date"), _react.default.createElement("div", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, (0, _dateformat.default)(date, "dddd, mmmm dS, yyyy")), _react.default.createElement("label", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "col-sm-2 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "With Contingency"), _react.default.createElement("div", {
    className: "jsx-".concat(_Results.default.__hash) + " " + "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, contingency, "%"))) : null;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    totalDays: (0, _reducers.getTotalDays)(state),
    completionDate: (0, _reducers.getCompletionDate)(state),
    contingency: (0, _reducers.getContingency)(state)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Results);

exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/Results.scss":
/*!************************************************!*\
  !*** ./src/components/estimation/Results.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".results-bar.jsx-3871114360{background-color:#f3f4f5;padding:10px;margin:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vUmVzdWx0cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0Qix5QkFDWixhQUNELFlBQ00sa0JBQUMiLCJmaWxlIjoiL1VzZXJzL2FmbDEzL2NvZGUvTGFuZEQvYWdpbGUtdG9vbHMvc3JjL2NvbXBvbmVudHMvZXN0aW1hdGlvbi9SZXN1bHRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5yZXN1bHRzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5gOyJdfQ== */\n/*@ sourceURL=/Users/afl13/code/LandD/agile-tools/src/components/estimation/Results.scss */");

_defaultExport.__hash = "3871114360";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/TicketInput.js":
/*!**************************************************!*\
  !*** ./src/components/estimation/TicketInput.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reducers = __webpack_require__(/*! ../../reducers/reducers */ "./src/reducers/reducers.js");

var _estimationActions = __webpack_require__(/*! ../../actions/estimationActions */ "./src/actions/estimationActions.js");

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

var _TicketInput = _interopRequireDefault(__webpack_require__(/*! ./TicketInput.scss */ "./src/components/estimation/TicketInput.scss"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/estimation/TicketInput.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TicketInput = function TicketInput(_ref) {
  var id = _ref.id,
      tickets = _ref.tickets,
      _ref$averageVelocity = _ref.averageVelocity,
      averageVelocity = _ref$averageVelocity === void 0 ? 0 : _ref$averageVelocity,
      points = _ref.points,
      dispatch = _ref.dispatch;
  return _react.default.createElement(_react.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, _react.default.createElement(_style.default, {
    styleId: _TicketInput.default.__hash,
    css: _TicketInput.default,
    __self: this
  }), _react.default.createElement("form", {
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "col-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, _react.default.createElement("input", {
    type: "text",
    name: "title",
    placeholder: "title",
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _react.default.createElement("select", {
    name: "estimated-size",
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _react.default.createElement("option", {
    value: "xs",
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "XS (0-20)"), _react.default.createElement("option", {
    value: "s",
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "S (21-40)"), _react.default.createElement("option", {
    value: "m",
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "M (41-60)"), _react.default.createElement("option", {
    value: "l",
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "L (61-80)"), _react.default.createElement("option", {
    value: "xl",
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "XL (81-100)"), _react.default.createElement("option", {
    value: "xxl",
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "XXL (101-120)"))), _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _react.default.createElement("input", {
    onChange: function onChange(e) {
      return dispatch((0, _estimationActions.updateTicket)(e.target.value, id, averageVelocity));
    },
    type: "number",
    name: "estimated-points",
    placeholder: "Estimated points",
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), points && averageVelocity ? _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, tickets[id].days) : _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInput.default.__hash) + " " + "col work-days-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, _react.default.createElement("small", {
    className: "jsx-".concat(_TicketInput.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Points/ Avg velocity missing")))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    tickets: (0, _reducers.getTickets)(state),
    averageVelocity: (0, _reducers.getAverageVelocity)(state)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(TicketInput);

exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/TicketInput.scss":
/*!****************************************************!*\
  !*** ./src/components/estimation/TicketInput.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String("form.jsx-3694770682{background-color:#f3f4f5;padding:10px;}.work-days-error.jsx-3694770682{border-radius:5px;border:1px solid red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vVGlja2V0SW5wdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFFNEIsQUFJUCxrQkFDRyxPQUpSLGFBQUMsQ0FJUSIsImZpbGUiOiIvVXNlcnMvYWZsMTMvY29kZS9MYW5kRC9hZ2lsZS10b29scy9zcmMvY29tcG9uZW50cy9lc3RpbWF0aW9uL1RpY2tldElucHV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYGZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY1O1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi53b3JrLWRheXMtZXJyb3Ige1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfVxuYDsiXX0= */\n/*@ sourceURL=/Users/afl13/code/LandD/agile-tools/src/components/estimation/TicketInput.scss */");

_defaultExport.__hash = "3694770682";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/TicketInputList.js":
/*!******************************************************!*\
  !*** ./src/components/estimation/TicketInputList.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _TicketInput = _interopRequireDefault(__webpack_require__(/*! ./TicketInput */ "./src/components/estimation/TicketInput.js"));

var _TicketInputList = _interopRequireDefault(__webpack_require__(/*! ./TicketInputList.scss */ "./src/components/estimation/TicketInputList.scss"));

var _jsxFileName = "/Users/afl13/code/LandD/agile-tools/src/components/estimation/TicketInputList.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TicketInputList = function TicketInputList(_ref) {
  var tickets = _ref.tickets;
  var ticketArray = tickets.map(function (ticket) {
    return _react.default.createElement(_TicketInput.default, {
      key: ticket.id,
      id: ticket.id,
      points: ticket.points,
      workDays: ticket.workDays,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  });
  return _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInputList.default.__hash) + " " + "ticket-input-list-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _react.default.createElement(_style.default, {
    styleId: _TicketInputList.default.__hash,
    css: _TicketInputList.default,
    __self: this
  }), _react.default.createElement("form", {
    className: "jsx-".concat(_TicketInputList.default.__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInputList.default.__hash) + " " + "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInputList.default.__hash) + " " + "col-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Ticket Title (opt. link)"), _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInputList.default.__hash) + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Shirt Size"), _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInputList.default.__hash) + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Estimated Points"), _react.default.createElement("div", {
    className: "jsx-".concat(_TicketInputList.default.__hash) + " " + "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Estimated Working Days"))), ticketArray);
};

var _default = TicketInputList;
exports.default = _default;

/***/ }),

/***/ "./src/components/estimation/TicketInputList.scss":
/*!********************************************************!*\
  !*** ./src/components/estimation/TicketInputList.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".ticket-input-list-wrapper.jsx-3673452107{text-align:center;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vVGlja2V0SW5wdXRMaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRXFCLGtCQUNGLGdCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9hZmwxMy9jb2RlL0xhbmREL2FnaWxlLXRvb2xzL3NyYy9jb21wb25lbnRzL2VzdGltYXRpb24vVGlja2V0SW5wdXRMaXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC50aWNrZXQtaW5wdXQtbGlzdC13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG5gOyJdfQ== */\n/*@ sourceURL=/Users/afl13/code/LandD/agile-tools/src/components/estimation/TicketInputList.scss */");

_defaultExport.__hash = "3673452107";
var _default = _defaultExport;
exports.default = _default;

/***/ }),

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContingency = exports.getCompletionDate = exports.getTotalDays = exports.getAverageVelocity = exports.getTickets = exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

var actionTypes = _interopRequireWildcard(__webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = {
  tickets: [{
    id: 0,
    points: 0,
    days: 0
  }],
  velocity: {
    averageVelocity: 0
  },
  contingency: 0,
  results: {
    totalDays: 0,
    coplettionDate: new Date()
  }
};

function tickets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.tickets;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.ADD_TICKET:
      return _toConsumableArray(state).concat([action.ticket]);

    case actionTypes.DEL_TICKET:
      return _toConsumableArray(state.slice(0, action.index)).concat(_toConsumableArray(state.slice(action.index + 1)));

    case actionTypes.UPDATE_TICKET:
      var totalDays = _lodash.default.round(action.points / (action.averageVelocity / 10), 2);

      var newState = _toConsumableArray(state);

      newState[action.id].points = action.points;
      newState[action.id].days = totalDays;
      return newState;

    default:
      return state;
  }
}

function velocity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.velocity;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.AVG_VELOCITY:
      return Object.assign({}, state, {
        averageVelocity: action.value
      });

    default:
      return state;
  }
}

function contingency() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.contingency;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.SET_CONTINGENCY:
      var newState = action.value;
      return newState;

    default:
      return state;
  }
}

function calcWorkingDays(fromDate, days, contingency) {
  console.log(days);
  days = contingency ? days / ((100 - contingency) / 100) : null;
  console.log(days);
  var count = 0;

  while (count < days) {
    fromDate.setDate(fromDate.getDate() + 1);
    if (fromDate.getDay() != 0 && fromDate.getDay() != 6) // Skip weekends
      count++;
  }

  return fromDate;
}

function results() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.results;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.CALCULATE_RESULTS:
      var totalDays = 0;
      action.tickets.forEach(function (ticket) {
        totalDays += ticket.days;
      });
      var startDate = new Date();
      var completionDate = calcWorkingDays(startDate, totalDays, action.contingency);
      return Object.assign({}, state, {
        totalDays: totalDays,
        completionDate: completionDate
      });

    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  tickets: tickets,
  velocity: velocity,
  results: results,
  contingency: contingency
});

exports.default = _default;

var getTickets = function getTickets(state) {
  return state.tickets;
};

exports.getTickets = getTickets;

var getAverageVelocity = function getAverageVelocity(state) {
  return state.velocity.averageVelocity;
};

exports.getAverageVelocity = getAverageVelocity;

var getTotalDays = function getTotalDays(state) {
  return state.results.totalDays;
};

exports.getTotalDays = getTotalDays;

var getCompletionDate = function getCompletionDate(state) {
  return state.results.completionDate;
};

exports.getCompletionDate = getCompletionDate;

var getContingency = function getContingency(state) {
  return state.contingency;
};

exports.getContingency = getContingency;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map