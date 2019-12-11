(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("antd"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "antd", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("antd"), require("prop-types")) : factory(root["react"], root["antd"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13);

var assertThisInitialized = __webpack_require__(10);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(14);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(15);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(16);

var iterableToArray = __webpack_require__(17);

var nonIterableSpread = __webpack_require__(18);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// CONCATENATED MODULE: ./createContext.js


var _React$createContext = external_react_default.a.createContext(),
    ProviderState = _React$createContext.Provider,
    ConsumerState = _React$createContext.Consumer;


// CONCATENATED MODULE: ./SelectComponent/index.js







var Option = external_antd_["Select"].Option;

var SelectComponent_SelectComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(SelectComponent, _React$Component);

  function SelectComponent() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, SelectComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(SelectComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      optionList: _this.props.option || []
    };
    return _this;
  }

  createClass_default()(SelectComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var api = this.props.api;

      if (api) {
        api().then(function (res) {
          return _this2.setState({
            optionList: res
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          placeholder = _this$props.placeholder; // 有默认传来的 chang事件，和 value值

      var optionList = this.state.optionList;
      return external_react_default.a.createElement(external_antd_["Select"], {
        value: value,
        placeholder: placeholder,
        onChange: onChange
      }, optionList.map(function (_ref) {
        var value = _ref.value,
            title = _ref.title;
        return external_react_default.a.createElement(Option, {
          key: value
        }, title);
      }));
    }
  }]);

  return SelectComponent;
}(external_react_default.a.Component);

/* harmony default export */ var SelectComponent_0 = (SelectComponent_SelectComponent);
// CONCATENATED MODULE: ./InputComponent/index.js








var InputComponent_InputComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(InputComponent, _React$Component);

  function InputComponent() {
    classCallCheck_default()(this, InputComponent);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(InputComponent).apply(this, arguments));
  }

  createClass_default()(InputComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
      return external_react_default.a.createElement(external_antd_["Input"], {
        value: value,
        onChange: onChange,
        placeholder: placeholder
      });
    }
  }]);

  return InputComponent;
}(external_react_default.a.Component);

/* harmony default export */ var InputComponent_0 = (InputComponent_InputComponent);
// CONCATENATED MODULE: ./getComponent.js




function getComponent(conponentStr) {
  switch (conponentStr) {
    case "input":
      return InputComponent_0;

    case "select":
      return SelectComponent_0;

    case "button":
      return external_antd_["Button"];
  }
}


// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(8);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./Search/index.scss
var Search_0 = __webpack_require__(20);

// CONCATENATED MODULE: ./Search/index.js










var Search_Search =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Search, _React$Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.search = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          emit = _this$props.emit;
      var searchValue = form.getFieldsValue();
      emit("search", searchValue);
    };

    _this.getSearchValue = function () {
      var form = _this.props.form;
      return form.getFieldsValue();
    };

    _this.reset = function () {
      var _this$props2 = _this.props,
          form = _this$props2.form,
          emit = _this$props2.emit;
      form.resetFields();
      emit("reset");
    };

    return _this;
  }

  createClass_default()(Search, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          form = _this$props3.form,
          config = _this$props3.config;
      var getFieldDecorator = form.getFieldDecorator;
      return external_react_default.a.createElement("div", {
        className: "search-box"
      }, external_react_default.a.createElement(external_antd_["Form"], {
        layout: "inline"
      }, config.map(function (_ref, i) {
        var Component = _ref.Component,
            label = _ref.label,
            name = _ref.name,
            orther = objectWithoutProperties_default()(_ref, ["Component", "label", "name"]);

        return external_react_default.a.createElement(external_antd_["Form"].Item, {
          className: "search-item",
          key: i
        }, external_react_default.a.createElement("p", {
          className: "label"
        }, label), getFieldDecorator(name)(external_react_default.a.createElement(Component, orther)));
      })), external_react_default.a.createElement("div", {
        className: "search-item"
      }, external_react_default.a.createElement("p", {
        className: "label"
      }, "\xA0"), external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.search,
        type: "primary"
      }, "\u67E5\u8BE2")), external_react_default.a.createElement("div", {
        className: "search-item"
      }, external_react_default.a.createElement("p", {
        className: "label"
      }, "\xA0"), external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.reset
      }, "\u91CD\u7F6E")));
    }
  }]);

  return Search;
}(external_react_default.a.Component);

/* harmony default export */ var Search_1 = (external_antd_["Form"].create({
  name: 'Search'
})(Search_Search));
// CONCATENATED MODULE: ./Action/index.js



function Action(_ref) {
  var config = _ref.config,
      emit = _ref.emit;
  return external_react_default.a.createElement("div", {
    className: "action-box mb20"
  }, config.map(function (_ref2, i) {
    var actionFn = _ref2.actionFn,
        title = _ref2.title,
        type = _ref2.type;
    return external_react_default.a.createElement(external_antd_["Button"], {
      key: i,
      onClick: function onClick() {
        return emit(actionFn);
      },
      type: type
    }, title);
  }));
}

/* harmony default export */ var Action_0 = (Action);
// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(12);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.7.6@@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(11);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./TableComponent/index.scss
var TableComponent = __webpack_require__(22);

// CONCATENATED MODULE: ./TableComponent/index.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function TableComponent_TableComponent(_ref) {
  var emit = _ref.emit,
      _ref$config = _ref.config,
      _ref$config$actionCol = _ref$config.actionColumns,
      actionColumns = _ref$config$actionCol === void 0 ? [] : _ref$config$actionCol,
      columns = _ref$config.columns,
      _ref$config$pageSize = _ref$config.pageSize,
      pageSize = _ref$config$pageSize === void 0 ? 10 : _ref$config$pageSize,
      tableProps = objectWithoutProperties_default()(_ref$config, ["actionColumns", "columns", "pageSize"]);

  var actionColumnsFilter = function actionColumnsFilter(record) {
    return actionColumns.filter(function (_ref2) {
      var showField = _ref2.showField,
          showValue = _ref2.showValue;
      return showField ? record[showField] === showValue : true;
    });
  };

  columns = [].concat(toConsumableArray_default()(columns.map(function (item) {
    return item.slot ? _objectSpread({}, item, {
      render: function render(text, record) {
        return item.render(text, record, emit);
      }
    }) : item;
  })), toConsumableArray_default()(actionColumns.length > 0 ? [{
    title: '操作',
    key: 'action',
    render: function render(text, record) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, actionColumnsFilter(record).map(function (_ref3, i, arr) {
        var title = _ref3.title,
            key = _ref3.key,
            render = _ref3.render,
            actionFn = _ref3.actionFn,
            extraConfigField = objectWithoutProperties_default()(_ref3, ["title", "key", "render", "actionFn"]);

        return external_react_default.a.createElement("span", {
          key: key
        }, external_react_default.a.createElement("span", {
          onClick: function onClick() {
            return emit(actionFn, _objectSpread({}, record, {}, extraConfigField));
          },
          className: "table-action"
        }, render ? render : title), arr.length - 1 !== i && external_react_default.a.createElement(external_antd_["Divider"], {
          type: "vertical"
        }));
      }));
    }
  }] : []));
  return external_react_default.a.createElement(ConsumerState, null, function (value) {
    return external_react_default.a.createElement(external_antd_["Table"], extends_default()({
      onChange: function onChange(info) {
        return emit("tablePageChange", info);
      },
      columns: columns
    }, tableProps, {
      pagination: {
        total: value.total,
        pageSize: pageSize,
        current: value.currentPage,
        showTotal: function showTotal(total) {
          return "\u5171".concat(total, "\u6761");
        }
      },
      dataSource: value.tableDataList,
      loading: value.tableLoading
    }));
  });
}

/* harmony default export */ var TableComponent_0 = (TableComponent_TableComponent);
// CONCATENATED MODULE: ./DetailModal/index.js



function getValueComponent(detailData, type, field) {
  switch (type) {
    case "text":
      return external_react_default.a.createElement("span", {
        className: "detail-value"
      }, detailData[field]);

    case "img":
      return external_react_default.a.createElement("img", {
        src: detailData[field],
        alt: ""
      });
  }
}

function DetailModal(_ref) {
  var visible = _ref.visible,
      onClose = _ref.onClose,
      detailData = _ref.detailData,
      list = _ref.config.list;
  return external_react_default.a.createElement(external_antd_["Drawer"], {
    title: "\u8BE6\u60C5",
    visible: visible,
    onClose: onClose,
    width: 600
  }, list.map(function (_ref2) {
    var label = _ref2.label,
        field = _ref2.field,
        type = _ref2.type;
    return external_react_default.a.createElement("div", {
      key: label + field,
      className: "detail-item"
    }, external_react_default.a.createElement("span", {
      className: "detail-lable"
    }, label), getValueComponent(detailData, type, field));
  }));
}

/* harmony default export */ var DetailModal_0 = (DetailModal);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(7);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./RenderComponent.js
/**
 * 反向继承
 * 传递来的组件 = 父类
 * 
 * 返回的是此组件，此组件先渲染，方法先从此组件查找
 * 没有则调用父类方法，父类方法的this指向子类
 */
// const RenderComponent = Component => {
//   return class A extends Component {
//     state = {
//       isShowModal: false, // 添加和编辑的弹窗
//       isEdit: false,
//       editData: {},
//       ...this.state
//     }
//     updateTable = () => {
//       this.hideModal();
//       const { isEdit } = this.state;
//       if (isEdit) { // 编辑刷新当前页
//         this.tableComponent.refreshCurrentPageTable();
//       } else { // 新增刷新第一页
//         this.tableComponent.refreshTable()
//       }
//     }
//     tableEdit = record => {
//       this.setState({
//         isShowModal: true,
//         isEdit: true,
//         editData: record
//       })
//     }
//     hideModal = () => {
//       this.setState({
//         isShowModal: false,
//       })
//     }
//     actionEmit = (type, data) => {
//       this[type](data);
//     }
//     add = () => {
//       this.setState({
//         isShowModal: true,
//         isEdit: false
//       })
//     }
//     render () {
//       return super.render()
//     }
//   }
// }
function RenderComponent(Component) {
  Component.prototype.actionEmit = function () {
    console.log("actionEmit---");
  };

  return Component;
}

/* harmony default export */ var RenderComponent_0 = (RenderComponent);
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return index_ConfigComponent; });
/* concated harmony reexport RenderComponent */__webpack_require__.d(__webpack_exports__, "RenderComponent", function() { return RenderComponent_0; });








function index_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function index_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { index_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { index_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function noop() {}

var index_confirm = external_antd_["Modal"].confirm;

var index_ConfigComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ConfigComponent, _React$Component);

  function ConfigComponent(props) {
    var _this;

    classCallCheck_default()(this, ConfigComponent);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ConfigComponent).call(this, props));
    _this.state = {
      tableLoading: true,
      total: 0,
      currentPage: 1,
      tableDataList: [],
      isShowDetailModal: false,
      detailData: {}
    };

    _this.getTableData = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$searchValue = _ref.searchValue,
          searchValue = _ref$searchValue === void 0 ? {} : _ref$searchValue,
          _ref$page = _ref.page,
          page = _ref$page === void 0 ? 1 : _ref$page;

      var fetchFn = _this.props.tableConfig.fetchFn;
      if (!fetchFn) return;
      var tableLoading = _this.state.tableLoading;

      if (!tableLoading) {
        // 减少页面更新
        _this.setState({
          tableLoading: true
        });
      }

      fetchFn(index_objectSpread({
        page: page
      }, searchValue)).then(function (_ref2) {
        var data = _ref2.data,
            total = _ref2.total;

        _this.setState({
          tableDataList: data,
          total: total,
          tableLoading: false,
          currentPage: page // 放在此处更新 page ，减少页面渲染次数

        });
      }); // .finally(() => this.setState({ tableLoading: false })); 减少页面更新
    };

    _this.refreshTable = function () {
      _this.getTableData();
    };

    _this.refreshCurrentPageTable = function () {
      var searchValue = _this.form.getSearchValue();

      var page = _this.state.currentPage;

      _this.getTableData({
        page: page,
        searchValue: searchValue
      });
    };

    _this.search = function (searchValue) {
      _this.props.onSearch(searchValue);

      _this.getTableData({
        searchValue: searchValue,
        page: 1
      });
    };

    _this.reset = function () {
      _this.refreshTable();

      _this.props.onReset();
    };

    _this.tablePageChange = function (_ref3) {
      var page = _ref3.current;

      var searchValue = _this.form.getSearchValue();

      _this.getTableData({
        searchValue: searchValue,
        page: page
      });
    };

    _this.delete = function (data) {
      var deleteRecordFn = _this.props.tableConfig.deleteRecordFn;
      var confirmTitleField = data.confirmTitleField;

      var me = assertThisInitialized_default()(_this);

      index_confirm({
        title: "\u786E\u8BA4\u5220\u9664 ".concat(confirmTitleField ? data[confirmTitleField] : ""),
        content: "",
        onOk: function onOk() {
          deleteRecordFn(data.id).then(function () {
            external_antd_["message"].success("删除成功");
            var searchValue = me.form.getSearchValue(); // 判断 不是第一页，且 这页只有一个了，请求上一页的数据

            var _me$state = me.state,
                currentPage = _me$state.currentPage,
                tableDataList = _me$state.tableDataList;
            var isUpdatePrePageData = currentPage !== 1 && tableDataList.length === 1;

            if (isUpdatePrePageData) {
              me.getTableData({
                page: currentPage - 1,
                searchValue: searchValue
              });
            } else {
              me.refreshCurrentPageTable();
            }
          }).catch(external_antd_["message"].error);
        },
        onCancel: function onCancel() {}
      });
    };

    _this.tableDetail = function (record) {
      _this.setState({
        isShowDetailModal: true,
        detailData: record
      });
    };

    _this.closeDetailModal = function () {
      return _this.setState({
        isShowDetailModal: false
      });
    };

    _this.handleEmit = function (actionFn, data) {
      if (actionFn.includes("emit")) {
        _this.props.actionEmit(actionFn.split("-")[1], data);
      } else {
        _this[actionFn](data);
      }
    };

    var _this$props$config = _this.props.config,
        _this$props$config$se = _this$props$config.search,
        search = _this$props$config$se === void 0 ? [] : _this$props$config$se,
        _this$props$config$ac = _this$props$config.action,
        action = _this$props$config$ac === void 0 ? [] : _this$props$config$ac,
        table = _this$props$config.table,
        detail = _this$props$config.detail;
    _this.searchConfig = search.map(function (_ref4) {
      var type = _ref4.type,
          props = _ref4.props;
      return index_objectSpread({
        Component: getComponent(type)
      }, props);
    });
    _this.actionConfig = action.map(function (_ref5) {
      var type = _ref5.type,
          props = _ref5.props;
      return index_objectSpread({
        Component: getComponent(type)
      }, props);
    });
    _this.tableConfig = table;
    _this.detail = detail;
    return _this;
  }

  createClass_default()(ConfigComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshTable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isShowDetailModal = _this$state.isShowDetailModal,
          detailData = _this$state.detailData;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, this.searchConfig.length > 0 && external_react_default.a.createElement(Search_1, {
        wrappedComponentRef: function wrappedComponentRef(form) {
          return _this2.form = form;
        },
        emit: this.handleEmit,
        config: this.searchConfig
      }), this.actionConfig.length > 0 && external_react_default.a.createElement(Action_0, {
        emit: this.handleEmit,
        config: this.actionConfig
      }), this.tableConfig && external_react_default.a.createElement(ProviderState, {
        value: this.state
      }, external_react_default.a.createElement(TableComponent_0, {
        emit: this.handleEmit,
        config: this.tableConfig
      })), this.detail && external_react_default.a.createElement(DetailModal_0, {
        visible: isShowDetailModal,
        onClose: this.closeDetailModal,
        config: this.detail,
        detailData: detailData
      }));
    }
  }]);

  return ConfigComponent;
}(external_react_default.a.Component);

index_ConfigComponent.propTypes = {
  config: external_prop_types_default.a.object,
  tableConfig: external_prop_types_default.a.object,
  onSearch: external_prop_types_default.a.func,
  onReset: external_prop_types_default.a.func,
  actionEmit: external_prop_types_default.a.func
};
index_ConfigComponent.defaultProps = {
  config: {},
  tableConfig: {},
  onSearch: noop,
  onReset: noop,
  actionEmit: noop
};

/**
 * 向上传递：
 * 编辑
 * 新增
 */

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map