(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/main.js"],{

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/construct.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/construct.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
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

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
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

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
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

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

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

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/client.js":
/*!*************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/client.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var Bus = __importStar(__webpack_require__(/*! ./internal/bus */ "../node_modules/@next/react-dev-overlay/lib/internal/bus.js"));
var parseStack_1 = __webpack_require__(/*! ./internal/helpers/parseStack */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/parseStack.js");
var isRegistered = false;
var stackTraceLimit = undefined;
function onUnhandledError(ev) {
    var error = ev === null || ev === void 0 ? void 0 : ev.error;
    if (!error || !(error instanceof Error) || typeof error.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    var e = error;
    Bus.emit({
        type: Bus.TYPE_UNHANDLED_ERROR,
        reason: error,
        frames: parseStack_1.parseStack(e.stack)
    });
}
function onUnhandledRejection(ev) {
    var reason = ev === null || ev === void 0 ? void 0 : ev.reason;
    if (!reason ||
        !(reason instanceof Error) ||
        typeof reason.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    var e = reason;
    Bus.emit({
        type: Bus.TYPE_UNHANDLED_REJECTION,
        reason: reason,
        frames: parseStack_1.parseStack(e.stack)
    });
}
function register() {
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    try {
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 50;
        stackTraceLimit = limit;
    }
    catch (_a) { }
    window.addEventListener('error', onUnhandledError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
}
exports.register = register;
function unregister() {
    if (!isRegistered) {
        return;
    }
    isRegistered = false;
    if (stackTraceLimit !== undefined) {
        try {
            Error.stackTraceLimit = stackTraceLimit;
        }
        catch (_a) { }
        stackTraceLimit = undefined;
    }
    window.removeEventListener('error', onUnhandledError);
    window.removeEventListener('unhandledrejection', onUnhandledRejection);
}
exports.unregister = unregister;
function onBuildOk() {
    Bus.emit({ type: Bus.TYPE_BUILD_OK });
}
exports.onBuildOk = onBuildOk;
function onBuildError(message) {
    Bus.emit({ type: Bus.TYPE_BUILD_ERROR, message: message });
}
exports.onBuildError = onBuildError;
function onRefresh() {
    Bus.emit({ type: Bus.TYPE_REFFRESH });
}
exports.onRefresh = onRefresh;
var nodeStackFrames_1 = __webpack_require__(/*! ./internal/helpers/nodeStackFrames */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js");
exports.getNodeError = nodeStackFrames_1.getNodeError;
var ReactDevOverlay_1 = __webpack_require__(/*! ./internal/ReactDevOverlay */ "../node_modules/@next/react-dev-overlay/lib/internal/ReactDevOverlay.js");
exports.ReactDevOverlay = ReactDevOverlay_1["default"];


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/ErrorBoundary.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/ErrorBoundary.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { error: null };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, 
    // Loosely typed because it depends on the React version and was
    // accidentally excluded in some versions.
    errorInfo) {
        this.props.onError(error, (errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack) || null);
        this.setState({ error: error });
    };
    ErrorBoundary.prototype.render = function () {
        return this.state.error
            ? // The component has to be unmounted or else it would continue to error
                null
            : this.props.children;
    };
    return ErrorBoundary;
}(react_1["default"].PureComponent));
exports.ErrorBoundary = ErrorBoundary;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/ReactDevOverlay.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/ReactDevOverlay.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var Bus = __importStar(__webpack_require__(/*! ./bus */ "../node_modules/@next/react-dev-overlay/lib/internal/bus.js"));
var ShadowPortal_1 = __webpack_require__(/*! ./components/ShadowPortal */ "../node_modules/@next/react-dev-overlay/lib/internal/components/ShadowPortal.js");
var Errors_1 = __webpack_require__(/*! ./container/Errors */ "../node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js");
var BuildError_1 = __webpack_require__(/*! ./container/BuildError */ "../node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js");
var ErrorBoundary_1 = __webpack_require__(/*! ./ErrorBoundary */ "../node_modules/@next/react-dev-overlay/lib/internal/ErrorBoundary.js");
var Base_1 = __webpack_require__(/*! ./styles/Base */ "../node_modules/@next/react-dev-overlay/lib/internal/styles/Base.js");
var ComponentStyles_1 = __webpack_require__(/*! ./styles/ComponentStyles */ "../node_modules/@next/react-dev-overlay/lib/internal/styles/ComponentStyles.js");
var CssReset_1 = __webpack_require__(/*! ./styles/CssReset */ "../node_modules/@next/react-dev-overlay/lib/internal/styles/CssReset.js");
function reducer(state, ev) {
    switch (ev.type) {
        case Bus.TYPE_BUILD_OK: {
            return __assign(__assign({}, state), { buildError: null });
        }
        case Bus.TYPE_BUILD_ERROR: {
            return __assign(__assign({}, state), { buildError: ev.message });
        }
        case Bus.TYPE_REFFRESH: {
            return __assign(__assign({}, state), { buildError: null, errors: [] });
        }
        case Bus.TYPE_UNHANDLED_ERROR:
        case Bus.TYPE_UNHANDLED_REJECTION: {
            return __assign(__assign({}, state), { nextId: state.nextId + 1, errors: __spread(state.errors, [{ id: state.nextId, event: ev }]) });
        }
        default: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            var _1 = ev;
            return state;
        }
    }
}
function ReactDevOverlay(_a) {
    var children = _a.children;
    var _b = __read(React.useReducer(reducer, { nextId: 1, buildError: null, errors: [] }), 2), state = _b[0], dispatch = _b[1];
    React.useEffect(function () {
        Bus.on(dispatch);
        return function () {
            Bus.off(dispatch);
        };
    }, [dispatch]);
    var onComponentError = React.useCallback(function (error, componentStack) {
        // TODO: special handling
    }, []);
    var hasBuildError = state.buildError != null;
    var hasRuntimeErrors = Boolean(state.errors.length);
    var isMounted = hasBuildError || hasRuntimeErrors;
    return (React.createElement(React.Fragment, null,
        React.createElement(ErrorBoundary_1.ErrorBoundary, { onError: onComponentError }, children !== null && children !== void 0 ? children : null),
        isMounted ? (React.createElement(ShadowPortal_1.ShadowPortal, null,
            React.createElement(CssReset_1.CssReset, null),
            React.createElement(Base_1.Base, null),
            React.createElement(ComponentStyles_1.ComponentStyles, null),
            hasBuildError ? (React.createElement(BuildError_1.BuildError, { message: state.buildError })) : hasRuntimeErrors ? (React.createElement(Errors_1.Errors, { errors: state.errors })) : undefined)) : undefined));
}
exports["default"] = ReactDevOverlay;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/bus.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/bus.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TYPE_BUILD_OK = 'build-ok';
exports.TYPE_BUILD_ERROR = 'build-error';
exports.TYPE_REFFRESH = 'fast-refresh';
exports.TYPE_UNHANDLED_ERROR = 'unhandled-error';
exports.TYPE_UNHANDLED_REJECTION = 'unhandled-rejection';
var handlers = new Set();
var queue = [];
function drain() {
    // Draining should never happen synchronously in case multiple handlers are
    // registered.
    setTimeout(function () {
        var _loop_1 = function () {
            var ev = queue.shift();
            handlers.forEach(function (handler) { return handler(ev); });
        };
        while (
        // Until we are out of events:
        Boolean(queue.length) &&
            // Or, if all handlers removed themselves as a result of handling the
            // event(s)
            Boolean(handlers.size)) {
            _loop_1();
        }
    }, 1);
}
function emit(ev) {
    queue.push(Object.freeze(__assign({}, ev)));
    drain();
}
exports.emit = emit;
function on(fn) {
    if (handlers.has(fn)) {
        return false;
    }
    handlers.add(fn);
    drain();
    return true;
}
exports.on = on;
function off(fn) {
    if (handlers.has(fn)) {
        handlers["delete"](fn);
        return true;
    }
    return false;
}
exports.off = off;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/CodeFrame.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/CodeFrame.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var anser_1 = __importDefault(__webpack_require__(/*! anser */ "../node_modules/anser/lib/index.js"));
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var strip_ansi_1 = __importDefault(__webpack_require__(/*! strip-ansi */ "../node_modules/strip-ansi/index.js"));
var stack_frame_1 = __webpack_require__(/*! ../../helpers/stack-frame */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js");
exports.CodeFrame = function CodeFrame(_a) {
    var stackFrame = _a.stackFrame, codeFrame = _a.codeFrame;
    // Strip leading spaces out of the code frame:
    var formattedFrame = React.useMemo(function () {
        var lines = codeFrame.split(/\r?\n/g);
        var prefixLength = lines
            .map(function (line) { return /^>? +\d+ +\| ( *)/.exec(strip_ansi_1["default"](line)); })
            .filter(Boolean)
            .map(function (v) { return v.pop(); })
            .reduce(function (c, n) { return (isNaN(c) ? n.length : Math.min(c, n.length)); }, NaN);
        if (prefixLength > 1) {
            var p_1 = ' '.repeat(prefixLength);
            return lines
                .map(function (line, a) {
                return ~(a = line.indexOf('|'))
                    ? line.substring(0, a) + line.substring(a).replace(p_1, '')
                    : line;
            })
                .join('\n');
        }
        return lines.join('\n');
    }, [codeFrame]);
    var decoded = React.useMemo(function () {
        return anser_1["default"].ansiToJson(formattedFrame, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [formattedFrame]);
    var open = React.useCallback(function () {
        var _a;
        var params = new URLSearchParams();
        for (var key in stackFrame) {
            params.append(key, ((_a = stackFrame[key]) !== null && _a !== void 0 ? _a : '').toString());
        }
        self.fetch("/__nextjs_launch-editor?" + params.toString()).then(function () { }, function () {
            // TODO: report error
        });
    }, [stackFrame]);
    // TODO: make the caret absolute
    return (React.createElement("div", { "data-nextjs-codeframe": true },
        React.createElement("p", { role: "link", onClick: open, tabIndex: 1, title: "Click to open in your editor" },
            React.createElement("span", null,
                stack_frame_1.getFrameSource(stackFrame),
                " @ ",
                stackFrame.methodName),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                React.createElement("polyline", { points: "15 3 21 3 21 9" }),
                React.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" }))),
        React.createElement("hr", null),
        React.createElement("pre", null, decoded.map(function (entry, index) { return (React.createElement("span", { key: "frame-" + index, style: __assign({ color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined }, (entry.decoration === 'bold'
                ? { fontWeight: 800 }
                : entry.decoration === 'italic'
                    ? { fontStyle: 'italic' }
                    : undefined)) }, entry.content)); }))));
};


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/index.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CodeFrame_1 = __webpack_require__(/*! ./CodeFrame */ "../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/CodeFrame.js");
exports.CodeFrame = CodeFrame_1.CodeFrame;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/styles.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/styles.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-codeframe] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > hr {\n    margin: 0;\n    padding: 0;\n\n    border: none;\n    border-style: solid;\n    border-width: 0;\n    border-bottom-width: 1px;\n    border-color: var(--color-ansi-bright-black);\n  }\n\n  [data-nextjs-codeframe] > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n  }\n  [data-nextjs-codeframe] > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 0.5rem;\n  }\n"], ["\n  [data-nextjs-codeframe] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > hr {\n    margin: 0;\n    padding: 0;\n\n    border: none;\n    border-style: solid;\n    border-width: 0;\n    border-bottom-width: 1px;\n    border-color: var(--color-ansi-bright-black);\n  }\n\n  [data-nextjs-codeframe] > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n  }\n  [data-nextjs-codeframe] > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 0.5rem;\n  }\n"])));
exports.styles = styles;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/Dialog.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/Dialog.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var use_on_click_outside_1 = __webpack_require__(/*! ../../hooks/use-on-click-outside */ "../node_modules/@next/react-dev-overlay/lib/internal/hooks/use-on-click-outside.js");
var Dialog = function Dialog(_a) {
    var children = _a.children, type = _a.type, onClose = _a.onClose, props = __rest(_a, ["children", "type", "onClose"]);
    var _b = __read(React.useState(null), 2), dialog = _b[0], setDialog = _b[1];
    var onDialog = React.useCallback(function (node) {
        setDialog(node);
    }, []);
    use_on_click_outside_1.useOnClickOutside(dialog, onClose);
    // Make HTMLElements with `role=link` accessible to be triggered by the
    // keyboard, i.e. [Enter].
    React.useEffect(function () {
        if (dialog == null) {
            return;
        }
        var root = dialog.getRootNode();
        // Always true, but we do this for TypeScript:
        if (!(root instanceof ShadowRoot)) {
            return;
        }
        var shadowRoot = root;
        function handler(e) {
            var el = shadowRoot.activeElement;
            if (e.key === 'Enter' &&
                el instanceof HTMLElement &&
                el.getAttribute('role') === 'link') {
                e.preventDefault();
                e.stopPropagation();
                el.click();
            }
        }
        shadowRoot.addEventListener('keydown', handler);
        return function () { return shadowRoot.removeEventListener('keydown', handler); };
    }, [dialog]);
    return (React.createElement("div", { ref: onDialog, "data-nextjs-dialog": true, tabIndex: -1, role: "dialog", "aria-labelledby": props['aria-labelledby'], "aria-describedby": props['aria-describedby'], "aria-modal": "true" },
        React.createElement("div", { "data-nextjs-dialog-banner": true, className: "banner-" + type }),
        children));
};
exports.Dialog = Dialog;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogBody.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogBody.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var DialogBody = function DialogBody(_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-dialog-body": true, className: className }, children));
};
exports.DialogBody = DialogBody;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogContent.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogContent.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var DialogContent = function DialogContent(_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-dialog-content": true, className: className }, children));
};
exports.DialogContent = DialogContent;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogHeader.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogHeader.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var DialogHeader = function DialogHeader(_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-dialog-header": true, className: className }, children));
};
exports.DialogHeader = DialogHeader;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Dialog_1 = __webpack_require__(/*! ./Dialog */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/Dialog.js");
exports.Dialog = Dialog_1.Dialog;
var DialogBody_1 = __webpack_require__(/*! ./DialogBody */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogBody.js");
exports.DialogBody = DialogBody_1.DialogBody;
var DialogContent_1 = __webpack_require__(/*! ./DialogContent */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogContent.js");
exports.DialogContent = DialogContent_1.DialogContent;
var DialogHeader_1 = __webpack_require__(/*! ./DialogHeader */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogHeader.js");
exports.DialogHeader = DialogHeader_1.DialogHeader;
var styles_1 = __webpack_require__(/*! ./styles */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/styles.js");
exports.styles = styles_1.styles;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/styles.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/styles.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: white;\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 3.5rem);\n    overflow-y: hidden;\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"], ["\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: white;\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 3.5rem);\n    overflow-y: hidden;\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"])));
exports.styles = styles;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js":
/*!**********************************************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var LeftRightDialogHeader = function LeftRightDialogHeader(_a) {
    var children = _a.children, className = _a.className, previous = _a.previous, next = _a.next, close = _a.close;
    var buttonLeft = React.useRef();
    var buttonRight = React.useRef();
    var buttonClose = React.useRef();
    var _b = __read(React.useState(null), 2), nav = _b[0], setNav = _b[1];
    var onNav = React.useCallback(function (el) {
        setNav(el);
    }, []);
    React.useEffect(function () {
        if (nav == null) {
            return;
        }
        var root = nav.getRootNode();
        var d = self.document;
        function handler(e) {
            if (e.key === 'ArrowLeft') {
                e.stopPropagation();
                if (buttonLeft.current) {
                    buttonLeft.current.focus();
                }
                previous && previous();
            }
            else if (e.key === 'ArrowRight') {
                e.stopPropagation();
                if (buttonRight.current) {
                    buttonRight.current.focus();
                }
                next && next();
            }
            else if (e.key === 'Escape') {
                e.stopPropagation();
                if (root instanceof ShadowRoot) {
                    var a = root.activeElement;
                    if (a && a !== buttonClose.current && a instanceof HTMLElement) {
                        a.blur();
                        return;
                    }
                }
                close();
            }
        }
        root.addEventListener('keydown', handler);
        if (root !== d) {
            d.addEventListener('keydown', handler);
        }
        return function () {
            root.removeEventListener('keydown', handler);
            if (root !== d) {
                d.removeEventListener('keydown', handler);
            }
        };
    }, [close, nav, next, previous]);
    // Unlock focus for browsers like Firefox, that break all user focus if the
    // currently focused item becomes disabled.
    React.useEffect(function () {
        if (nav == null) {
            return;
        }
        var root = nav.getRootNode();
        // Always true, but we do this for TypeScript:
        if (root instanceof ShadowRoot) {
            var a = root.activeElement;
            if (previous == null) {
                if (a === buttonLeft.current) {
                    buttonLeft.current.blur();
                }
            }
            else if (next == null) {
                if (a === buttonRight.current) {
                    buttonRight.current.blur();
                }
            }
        }
    }, [nav, next, previous]);
    return (React.createElement("div", { "data-nextjs-dialog-left-right": true, className: className },
        React.createElement("nav", { ref: onNav },
            React.createElement("button", { ref: buttonLeft, type: "button", disabled: previous == null ? true : undefined, "aria-disabled": previous == null ? true : undefined, onClick: previous !== null && previous !== void 0 ? previous : undefined },
                React.createElement("svg", { viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M6.99996 1.16666L1.16663 6.99999L6.99996 12.8333M12.8333 6.99999H1.99996H12.8333Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
            React.createElement("button", { ref: buttonRight, type: "button", disabled: next == null ? true : undefined, "aria-disabled": next == null ? true : undefined, onClick: next !== null && next !== void 0 ? next : undefined },
                React.createElement("svg", { viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M6.99996 1.16666L12.8333 6.99999L6.99996 12.8333M1.16663 6.99999H12H1.16663Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
            "\u00A0",
            children),
        React.createElement("button", { ref: buttonClose, type: "button", onClick: close, "aria-label": "Close" },
            React.createElement("span", { "aria-hidden": "true" },
                React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))))));
};
exports.LeftRightDialogHeader = LeftRightDialogHeader;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/index.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var LeftRightDialogHeader_1 = __webpack_require__(/*! ./LeftRightDialogHeader */ "../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js");
exports.LeftRightDialogHeader = LeftRightDialogHeader_1.LeftRightDialogHeader;
var styles_1 = __webpack_require__(/*! ./styles */ "../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js");
exports.styles = styles_1.styles;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"], ["\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"])));
exports.styles = styles;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/Overlay.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/Overlay.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var disabled_1 = __importDefault(__webpack_require__(/*! ally.js/maintain/disabled */ "../node_modules/ally.js/maintain/disabled.js"));
var tab_focus_1 = __importDefault(__webpack_require__(/*! ally.js/maintain/tab-focus */ "../node_modules/ally.js/maintain/tab-focus.js"));
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var body_locker_1 = __webpack_require__(/*! ./body-locker */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/body-locker.js");
var Overlay = function Overlay(_a) {
    var className = _a.className, children = _a.children, fixed = _a.fixed;
    React.useEffect(function () {
        body_locker_1.lock();
        return function () {
            body_locker_1.unlock();
        };
    }, []);
    var _b = __read(React.useState(null), 2), overlay = _b[0], setOverlay = _b[1];
    var onOverlay = React.useCallback(function (el) {
        setOverlay(el);
    }, []);
    React.useEffect(function () {
        if (overlay == null) {
            return;
        }
        var handle1 = disabled_1["default"]({ filter: overlay });
        var handle2 = tab_focus_1["default"]({ context: overlay });
        return function () {
            handle1.disengage();
            handle2.disengage();
        };
    }, [overlay]);
    return (React.createElement("div", { "data-nextjs-dialog-overlay": true, className: className, ref: onOverlay },
        React.createElement("div", { "data-nextjs-dialog-backdrop": true, "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined }),
        children));
};
exports.Overlay = Overlay;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/body-locker.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/body-locker.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var previousBodyPaddingRight;
var previousBodyOverflowSetting;
var activeLocks = 0;
function lock() {
    setTimeout(function () {
        if (activeLocks++ > 0) {
            return;
        }
        var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = scrollBarGap + "px";
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    });
}
exports.lock = lock;
function unlock() {
    setTimeout(function () {
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
exports.unlock = unlock;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Overlay_1 = __webpack_require__(/*! ./Overlay */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/Overlay.js");
exports.Overlay = Overlay_1.Overlay;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/styles.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/styles.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(17, 17, 17, 0.2);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"], ["\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(17, 17, 17, 0.2);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"])));
exports.styles = styles;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/ShadowPortal.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/ShadowPortal.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var react_dom_1 = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
exports.ShadowPortal = function Portal(_a) {
    var children = _a.children;
    var mountNode = React.useRef(null);
    var portalNode = React.useRef(null);
    var shadowNode = React.useRef(null);
    var _b = __read(React.useState(), 2), forceUpdate = _b[1];
    React.useLayoutEffect(function () {
        var ownerDocument = mountNode.current.ownerDocument;
        portalNode.current = ownerDocument.createElement('nextjs-portal');
        shadowNode.current = portalNode.current.attachShadow({ mode: 'open' });
        ownerDocument.body.appendChild(portalNode.current);
        forceUpdate({});
        return function () {
            if (portalNode.current && portalNode.current.ownerDocument) {
                portalNode.current.ownerDocument.body.removeChild(portalNode.current);
            }
        };
    }, []);
    return shadowNode.current ? (react_dom_1.createPortal(children, shadowNode.current)) : (React.createElement("span", { ref: mountNode }));
};


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/Terminal.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/Terminal.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var anser_1 = __importDefault(__webpack_require__(/*! anser */ "../node_modules/anser/lib/index.js"));
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
exports.Terminal = function Terminal(_a) {
    var content = _a.content;
    var decoded = React.useMemo(function () {
        return anser_1["default"].ansiToJson(content, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [content]);
    return (React.createElement("div", { "data-nextjs-terminal": true },
        React.createElement("pre", null, decoded.map(function (entry, index) { return (React.createElement("span", { key: "terminal-entry-" + index, style: __assign({ color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined }, (entry.decoration === 'bold'
                ? { fontWeight: 800 }
                : entry.decoration === 'italic'
                    ? { fontStyle: 'italic' }
                    : undefined)) }, entry.content)); }))));
};


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/index.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Terminal_1 = __webpack_require__(/*! ./Terminal */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/Terminal.js");
exports.Terminal = Terminal_1.Terminal;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/styles.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/styles.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n"], ["\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n"])));
exports.styles = styles;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/Toast.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/Toast.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
exports.Toast = function Toast(_a) {
    var onClick = _a.onClick, children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-toast": true, onClick: onClick, className: className },
        React.createElement("div", { "data-nextjs-toast-wrapper": true }, children)));
};


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var styles_1 = __webpack_require__(/*! ./styles */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/styles.js");
exports.styles = styles_1.styles;
var Toast_1 = __webpack_require__(/*! ./Toast */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/Toast.js");
exports.Toast = Toast_1.Toast;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/styles.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/styles.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-toast] {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n  }\n\n  @media (max-width: 440px) {\n    [data-nextjs-toast] {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  [data-nextjs-toast-wrapper] {\n    padding: 1rem;\n    border-radius: var(--size-gap-half);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n"], ["\n  [data-nextjs-toast] {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n  }\n\n  @media (max-width: 440px) {\n    [data-nextjs-toast] {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  [data-nextjs-toast-wrapper] {\n    padding: 1rem;\n    border-radius: var(--size-gap-half);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n"])));
exports.styles = styles;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var Dialog_1 = __webpack_require__(/*! ../components/Dialog */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js");
var Overlay_1 = __webpack_require__(/*! ../components/Overlay */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js");
var Terminal_1 = __webpack_require__(/*! ../components/Terminal */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/index.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
exports.BuildError = function BuildError(_a) {
    var message = _a.message;
    var noop = React.useCallback(function () { }, []);
    return (React.createElement(Overlay_1.Overlay, { fixed: true },
        React.createElement(Dialog_1.Dialog, { type: "error", "aria-labelledby": "nextjs__container_build_error_label", "aria-describedby": "nextjs__container_build_error_desc", onClose: noop },
            React.createElement(Dialog_1.DialogContent, null,
                React.createElement(Dialog_1.DialogHeader, { className: "nextjs-container-build-error-header" },
                    React.createElement("h4", { id: "nextjs__container_build_error_label" }, "Failed to compile")),
                React.createElement(Dialog_1.DialogBody, { className: "nextjs-container-build-error-body" },
                    React.createElement(Terminal_1.Terminal, { content: message }),
                    React.createElement("footer", null,
                        React.createElement("p", { id: "nextjs__container_build_error_desc" },
                            React.createElement("small", null, "This error occured during the build process and can only be dismissed by fixing the error."))))))));
};
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"], ["\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var bus_1 = __webpack_require__(/*! ../bus */ "../node_modules/@next/react-dev-overlay/lib/internal/bus.js");
var Dialog_1 = __webpack_require__(/*! ../components/Dialog */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js");
var LeftRightDialogHeader_1 = __webpack_require__(/*! ../components/LeftRightDialogHeader */ "../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/index.js");
var Overlay_1 = __webpack_require__(/*! ../components/Overlay */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js");
var Toast_1 = __webpack_require__(/*! ../components/Toast */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js");
var nodeStackFrames_1 = __webpack_require__(/*! ../helpers/nodeStackFrames */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var stack_frame_1 = __webpack_require__(/*! ../helpers/stack-frame */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js");
var RuntimeError_1 = __webpack_require__(/*! ./RuntimeError */ "../node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js");
function getErrorSignature(ev) {
    var event = ev.event;
    switch (event.type) {
        case bus_1.TYPE_UNHANDLED_ERROR:
        case bus_1.TYPE_UNHANDLED_REJECTION: {
            return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
        }
        default: {
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _ = event;
    return '';
}
function getErrorByType(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, event, _a, _b, _;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    id = ev.id, event = ev.event;
                    _a = event.type;
                    switch (_a) {
                        case bus_1.TYPE_UNHANDLED_ERROR: return [3 /*break*/, 1];
                        case bus_1.TYPE_UNHANDLED_REJECTION: return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 3];
                case 1:
                    _b = {
                        id: id,
                        runtime: true,
                        error: event.reason
                    };
                    return [4 /*yield*/, stack_frame_1.getOriginalStackFrames(nodeStackFrames_1.isNodeError(event.reason), event.frames)];
                case 2: return [2 /*return*/, (_b.frames = _c.sent(),
                        _b)];
                case 3:
                    {
                        return [3 /*break*/, 4];
                    }
                    _c.label = 4;
                case 4:
                    _ = event;
                    throw new Error('type system invariant violation');
            }
        });
    });
}
exports.Errors = function Errors(_a) {
    var errors = _a.errors;
    var _b = __read(React.useState({}), 2), lookups = _b[0], setLookups = _b[1];
    var _c = __read(React.useMemo(function () {
        var ready = [];
        var next = null;
        // Ensure errors are displayed in the order they occurred in:
        for (var idx = 0; idx < errors.length; ++idx) {
            var e = errors[idx];
            var id = e.id;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            // Check for duplicate errors
            if (idx > 0) {
                var prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [ready, next];
    }, [errors, lookups]), 2), readyErrors = _c[0], nextError = _c[1];
    var isLoading = React.useMemo(function () {
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [errors.length, readyErrors.length]);
    React.useEffect(function () {
        if (nextError == null) {
            return;
        }
        getErrorByType(nextError).then(function (resolved) {
            // We don't care if the desired error changed while we were resolving,
            // thus we're not tracking it using a ref. Once the work has been done,
            // we'll store it.
            setLookups(function (m) {
                var _a;
                return (__assign(__assign({}, m), (_a = {}, _a[resolved.id] = resolved, _a)));
            });
        }, function () {
            // TODO: handle this, though an edge case
        });
    }, [nextError]);
    var _d = __read(React.useState(false), 2), isMinimized = _d[0], setMinimized = _d[1];
    var _e = __read(React.useState(0), 2), activeIdx = _e[0], setActiveIndex = _e[1];
    var previous = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setActiveIndex(function (v) { return Math.max(0, v - 1); });
    }, []);
    var next = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setActiveIndex(function (v) {
            return Math.max(0, Math.min(readyErrors.length - 1, v + 1));
        });
    }, [readyErrors.length]);
    var activeError = React.useMemo(function () { var _a; return (_a = readyErrors[activeIdx]) !== null && _a !== void 0 ? _a : null; }, [activeIdx, readyErrors]);
    // Reset component state when there are no errors to be displayed.
    // This should never happen, but lets handle it.
    React.useEffect(function () {
        if (errors.length < 1) {
            setLookups({});
            setMinimized(false);
            setActiveIndex(0);
        }
    }, [errors.length]);
    var minimize = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setMinimized(true);
    }, []);
    var reopen = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setMinimized(false);
    }, []);
    // This component shouldn't be rendered with no errors, but if it is, let's
    // handle it gracefully by rendering nothing.
    if (errors.length < 1) {
        return null;
    }
    if (isLoading) {
        // TODO: better loading state
        return React.createElement(Overlay_1.Overlay, null);
    }
    if (isMinimized) {
        return (React.createElement(Toast_1.Toast, { className: "nextjs-toast-errors-parent", onClick: reopen },
            React.createElement("div", { className: "nextjs-toast-errors" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                    React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                    React.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })),
                React.createElement("span", null,
                    readyErrors.length,
                    " error",
                    readyErrors.length > 1 ? 's' : ''))));
    }
    var isServerError = nodeStackFrames_1.isNodeError(activeError.error);
    return (React.createElement(Overlay_1.Overlay, null,
        React.createElement(Dialog_1.Dialog, { type: "error", "aria-labelledby": "nextjs__container_errors_label", "aria-describedby": "nextjs__container_errors_desc", onClose: minimize },
            React.createElement(Dialog_1.DialogContent, null,
                React.createElement(Dialog_1.DialogHeader, { className: "nextjs-container-errors-header" },
                    React.createElement(LeftRightDialogHeader_1.LeftRightDialogHeader, { previous: activeIdx > 0 ? previous : null, next: activeIdx < readyErrors.length - 1 ? next : null, close: minimize },
                        React.createElement("small", null,
                            React.createElement("span", null, activeIdx + 1),
                            " of",
                            ' ',
                            React.createElement("span", null, readyErrors.length),
                            " unhandled error",
                            readyErrors.length < 2 ? '' : 's')),
                    React.createElement("h1", { id: "nextjs__container_errors_label" }, isServerError ? 'Server Error' : 'Unhandled Runtime Error'),
                    React.createElement("p", { id: "nextjs__container_errors_desc" },
                        activeError.error.name,
                        ": ",
                        activeError.error.message),
                    isServerError ? (React.createElement("div", null,
                        React.createElement("small", null, "This error happened while generating the page. Any console logs will be displayed in the terminal window."))) : undefined),
                React.createElement(Dialog_1.DialogBody, { className: "nextjs-container-errors-body" },
                    React.createElement(RuntimeError_1.RuntimeError, { key: activeError.id.toString(), error: activeError }))))));
};
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n\n  .nextjs-container-errors-body > h5:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h5 {\n    margin-bottom: var(--size-gap);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n"], ["\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n\n  .nextjs-container-errors-body > h5:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h5 {\n    margin-bottom: var(--size-gap);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var CodeFrame_1 = __webpack_require__(/*! ../components/CodeFrame */ "../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/index.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var stack_frame_1 = __webpack_require__(/*! ../helpers/stack-frame */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js");
var CallStackFrame = function CallStackFrame(_a) {
    // TODO: ability to expand resolved frames
    // TODO: render error or external indicator
    var frame = _a.frame;
    var _b;
    var f = (_b = frame.originalStackFrame) !== null && _b !== void 0 ? _b : frame.sourceStackFrame;
    var hasSource = Boolean(frame.originalCodeFrame);
    var open = React.useCallback(function () {
        var _a;
        if (!hasSource)
            return;
        var params = new URLSearchParams();
        for (var key in f) {
            params.append(key, ((_a = f[key]) !== null && _a !== void 0 ? _a : '').toString());
        }
        self.fetch("/__nextjs_launch-editor?" + params.toString()).then(function () { }, function () {
            // TODO: report error
        });
    }, [hasSource, f]);
    return (React.createElement("div", { "data-nextjs-call-stack-frame": true },
        React.createElement("h6", { "data-nextjs-frame-expanded": Boolean(frame.expanded) }, f.methodName),
        React.createElement("div", { "data-has-source": hasSource ? 'true' : undefined, tabIndex: hasSource ? 10 : undefined, role: hasSource ? 'link' : undefined, onClick: open, title: hasSource ? 'Click to open in your editor' : undefined },
            React.createElement("span", null, stack_frame_1.getFrameSource(f)),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                React.createElement("polyline", { points: "15 3 21 3 21 9" }),
                React.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" })))));
};
var RuntimeError = function RuntimeError(_a) {
    var error = _a.error;
    var firstFirstPartyFrameIndex = React.useMemo(function () {
        return error.frames.findIndex(function (entry) {
            return entry.expanded &&
                Boolean(entry.originalCodeFrame) &&
                Boolean(entry.originalStackFrame);
        });
    }, [error.frames]);
    var firstFrame = React.useMemo(function () {
        var _a;
        return (_a = error.frames[firstFirstPartyFrameIndex]) !== null && _a !== void 0 ? _a : null;
    }, [error.frames, firstFirstPartyFrameIndex]);
    var allLeadingFrames = React.useMemo(function () {
        return firstFirstPartyFrameIndex < 0
            ? []
            : error.frames.slice(0, firstFirstPartyFrameIndex);
    }, [error.frames, firstFirstPartyFrameIndex]);
    var _b = __read(React.useState(firstFrame == null), 2), all = _b[0], setAll = _b[1];
    var toggleAll = React.useCallback(function () {
        setAll(function (v) { return !v; });
    }, []);
    var leadingFrames = React.useMemo(function () { return allLeadingFrames.filter(function (f) { return f.expanded || all; }); }, [all, allLeadingFrames]);
    var allCallStackFrames = React.useMemo(function () { return error.frames.slice(firstFirstPartyFrameIndex + 1); }, [error.frames, firstFirstPartyFrameIndex]);
    var visibleCallStackFrames = React.useMemo(function () { return allCallStackFrames.filter(function (f) { return f.expanded || all; }); }, [all, allCallStackFrames]);
    var canShowMore = React.useMemo(function () {
        return (allCallStackFrames.length !== visibleCallStackFrames.length ||
            (all && firstFrame != null));
    }, [
        all,
        allCallStackFrames.length,
        firstFrame,
        visibleCallStackFrames.length,
    ]);
    return (React.createElement(React.Fragment, null,
        firstFrame ? (React.createElement(React.Fragment, null,
            React.createElement("h5", null, "Source"),
            leadingFrames.map(function (frame, index) { return (React.createElement(CallStackFrame, { key: "leading-frame-" + index + "-" + all, frame: frame })); }),
            React.createElement(CodeFrame_1.CodeFrame, { stackFrame: firstFrame.originalStackFrame, codeFrame: firstFrame.originalCodeFrame }))) : undefined,
        visibleCallStackFrames.length ? (React.createElement(React.Fragment, null,
            React.createElement("h5", null, "Call Stack"),
            visibleCallStackFrames.map(function (frame, index) { return (React.createElement(CallStackFrame, { key: "call-stack-" + index + "-" + all, frame: frame })); }))) : undefined,
        canShowMore ? (React.createElement(React.Fragment, null,
            React.createElement("button", { tabIndex: 10, "data-nextjs-data-runtime-error-collapsed-action": true, type: "button", onClick: toggleAll },
                all ? 'Hide' : 'Show',
                " collapsed frames"))) : undefined));
};
exports.RuntimeError = RuntimeError;
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  button[data-nextjs-data-runtime-error-collapsed-action] {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-bigger);\n    color: var(--color-accents-3);\n  }\n\n  [data-nextjs-call-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-call-stack-frame] > h6 {\n    margin-top: 0;\n    margin-bottom: var(--size-gap);\n    font-family: var(--font-stack-monospace);\n    color: #222;\n  }\n  [data-nextjs-call-stack-frame] > h6[data-nextjs-frame-expanded='false'] {\n    color: #666;\n  }\n  [data-nextjs-call-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source] {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg {\n    display: unset;\n  }\n"], ["\n  button[data-nextjs-data-runtime-error-collapsed-action] {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-bigger);\n    color: var(--color-accents-3);\n  }\n\n  [data-nextjs-call-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-call-stack-frame] > h6 {\n    margin-top: 0;\n    margin-bottom: var(--size-gap);\n    font-family: var(--font-stack-monospace);\n    color: #222;\n  }\n  [data-nextjs-call-stack-frame] > h6[data-nextjs-frame-expanded='false'] {\n    color: #666;\n  }\n  [data-nextjs-call-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source] {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg {\n    display: unset;\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var stacktrace_parser_1 = __webpack_require__(/*! stacktrace-parser */ "../node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js");
function getFilesystemFrame(frame) {
    var f = __assign({}, frame);
    if (typeof f.file === 'string') {
        if (
        // Posix:
        f.file.startsWith('/') ||
            // Win32:
            /^[a-z]:\\/i.test(f.file) ||
            // Win32 UNC:
            f.file.startsWith('\\\\')) {
            f.file = "file://" + f.file;
        }
    }
    return f;
}
exports.getFilesystemFrame = getFilesystemFrame;
var symbolNodeError = Symbol('NextjsNodeError');
function isNodeError(error) {
    return symbolNodeError in error;
}
exports.isNodeError = isNodeError;
function getNodeError(error) {
    var n;
    try {
        throw new Error(error.message);
    }
    catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = stacktrace_parser_1.parse(error.stack)
            .map(getFilesystemFrame)
            .map(function (f) {
            var str = "    at " + f.methodName;
            if (f.file) {
                var loc = f.file;
                if (f.lineNumber) {
                    loc += ":" + f.lineNumber;
                    if (f.column) {
                        loc += ":" + f.column;
                    }
                }
                str += " (" + loc + ")";
            }
            return str;
        })
            .join('\n');
    }
    catch (_a) {
        n.stack = error.stack;
    }
    Object.defineProperty(n, symbolNodeError, {
        writable: false,
        enumerable: false,
        configurable: false
    });
    return n;
}
exports.getNodeError = getNodeError;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function noop(strings) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var lastIndex = strings.length - 1;
    return (strings.slice(0, lastIndex).reduce(function (p, s, i) { return p + s + keys[i]; }, '') +
        strings[lastIndex]);
}
exports.noop = noop;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/parseStack.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/helpers/parseStack.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var stacktrace_parser_1 = __webpack_require__(/*! stacktrace-parser */ "../node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js");
var regexNextStatic = /\/_next(\/static\/.+)/g;
function parseStack(stack) {
    var frames = stacktrace_parser_1.parse(stack);
    return frames.map(function (frame) {
        var _a, _b;
        try {
            var url = new URL(frame.file);
            var res = regexNextStatic.exec(url.pathname);
            if (res) {
                var distDir = (_b = (_a = "/Users/femi/projects/individual/bt/packages/desktop/renderer/.next") === null || _a === void 0 ? void 0 : _a.replace(/\\/g, '/')) === null || _b === void 0 ? void 0 : _b.replace(/\/$/, '');
                if (distDir) {
                    frame.file = 'file://' + distDir.concat(res.pop());
                }
            }
        }
        catch (_c) { }
        return frame;
    });
}
exports.parseStack = parseStack;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
function getOriginalStackFrames(isServerSide, frames) {
    return Promise.all(frames.map(function (frame) { return getOriginalStackFrame(isServerSide, frame); }));
}
exports.getOriginalStackFrames = getOriginalStackFrames;
function getOriginalStackFrame(isServerSide, source) {
    var _a, _b;
    function _getOriginalStackFrame() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var params, key, controller, tm, res, _c, _d, _e, body;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        params = new URLSearchParams();
                        params.append('isServerSide', String(isServerSide));
                        for (key in source) {
                            params.append(key, ((_a = source[key]) !== null && _a !== void 0 ? _a : '').toString());
                        }
                        controller = new AbortController();
                        tm = setTimeout(function () { return controller.abort(); }, 3000);
                        return [4 /*yield*/, self
                                .fetch("/__nextjs_original-stack-frame?" + params.toString(), {
                                signal: controller.signal
                            })["finally"](function () {
                                clearTimeout(tm);
                            })];
                    case 1:
                        res = _f.sent();
                        if (!(!res.ok || res.status === 204)) return [3 /*break*/, 3];
                        _d = (_c = Promise).reject;
                        _e = Error.bind;
                        return [4 /*yield*/, res.text()];
                    case 2: return [2 /*return*/, _d.apply(_c, [new (_e.apply(Error, [void 0, _f.sent()]))()])];
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        body = _f.sent();
                        return [2 /*return*/, {
                                error: false,
                                reason: null,
                                external: false,
                                expanded: ((_b = body.originalStackFrame) === null || _b === void 0 ? void 0 : _b.file) &&
                                    !body.originalStackFrame.file.includes('node_modules'),
                                sourceStackFrame: source,
                                originalStackFrame: body.originalStackFrame,
                                originalCodeFrame: body.originalCodeFrame || null
                            }];
                }
            });
        });
    }
    if (!(((_a = source.file) === null || _a === void 0 ? void 0 : _a.startsWith('webpack-internal:')) || ((_b = source.file) === null || _b === void 0 ? void 0 : _b.startsWith('file:')))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        });
    }
    return _getOriginalStackFrame()["catch"](function (err) {
        var _a, _b;
        return ({
            error: true,
            reason: (_b = (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : err === null || err === void 0 ? void 0 : err.toString()) !== null && _b !== void 0 ? _b : 'Unknown Error',
            external: false,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        });
    });
}
exports.getOriginalStackFrame = getOriginalStackFrame;
function getFrameSource(frame) {
    var _a;
    var str = '';
    try {
        var u = new URL(frame.file);
        // Strip the origin for same-origin scripts.
        if (typeof globalThis !== 'undefined' &&
            ((_a = globalThis.location) === null || _a === void 0 ? void 0 : _a.origin) !== u.origin) {
            // URLs can be valid without an `origin`, so long as they have a
            // `protocol`. However, `origin` is preferred.
            if (u.origin === 'null') {
                str += u.protocol;
            }
            else {
                str += u.origin;
            }
        }
        // Strip query string information as it's typically too verbose to be
        // meaningful.
        str += u.pathname;
        str += ' ';
    }
    catch (_b) {
        str += (frame.file || '(unknown)') + ' ';
    }
    if (frame.lineNumber != null) {
        if (frame.column != null) {
            str += "(" + frame.lineNumber + ":" + frame.column + ") ";
        }
        else {
            str += "(" + frame.lineNumber + ") ";
        }
    }
    return str.slice(0, -1);
}
exports.getFrameSource = getFrameSource;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/hooks/use-on-click-outside.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/hooks/use-on-click-outside.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
function useOnClickOutside(el, handler) {
    React.useEffect(function () {
        if (el == null) {
            return;
        }
        var listener = function (e) {
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(e.target)) {
                return;
            }
            handler(e);
        };
        var root = el.getRootNode();
        root.addEventListener('mousedown', listener);
        root.addEventListener('touchstart', listener);
        return function () {
            root.removeEventListener('mousedown', listener);
            root.removeEventListener('touchstart', listener);
        };
    }, [handler, el]);
}
exports.useOnClickOutside = useOnClickOutside;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/styles/Base.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/styles/Base.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
function Base() {
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          :host {\n            --size-gap-half: 0.25rem; /* 4px */\n            --size-gap: 0.5rem; /* 8px */\n            --size-gap-double: 1rem; /* 16px */\n            --size-gap-quad: 2rem; /* 32px */\n\n            --size-font-small: 0.875rem; /* 14px */\n            --size-font: 1rem; /* 16px */\n            --size-font-big: 1.25rem; /* 20px */\n            --size-font-bigger: 1.5rem; /* 24px */\n\n            --color-accents-1: #808080;\n            --color-accents-2: #222222;\n            --color-accents-3: #404040;\n\n            --font-stack-monospace: 'SFMono-Regular', Consolas,\n              'Liberation Mono', Menlo, Courier, monospace;\n\n            --color-ansi-selection: rgba(95, 126, 151, 0.48);\n            --color-ansi-bg: #111111;\n            --color-ansi-fg: #cccccc;\n\n            --color-ansi-white: #777777;\n            --color-ansi-black: #141414;\n            --color-ansi-blue: #00aaff;\n            --color-ansi-cyan: #88ddff;\n            --color-ansi-green: #98ec65;\n            --color-ansi-magenta: #aa88ff;\n            --color-ansi-red: #ff5555;\n            --color-ansi-yellow: #ffcc33;\n            --color-ansi-bright-white: #ffffff;\n            --color-ansi-bright-black: #777777;\n            --color-ansi-bright-blue: #33bbff;\n            --color-ansi-bright-cyan: #bbecff;\n            --color-ansi-bright-green: #b6f292;\n            --color-ansi-bright-magenta: #cebbff;\n            --color-ansi-bright-red: #ff8888;\n            --color-ansi-bright-yellow: #ffd966;\n          }\n\n          .mono {\n            font-family: var(--font-stack-monospace);\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-bottom: var(--size-gap);\n            font-weight: 500;\n            line-height: 1.5;\n          }\n\n          h1 {\n            font-size: 2.5rem;\n          }\n          h2 {\n            font-size: 2rem;\n          }\n          h3 {\n            font-size: 1.75rem;\n          }\n          h4 {\n            font-size: 1.5rem;\n          }\n          h5 {\n            font-size: 1.25rem;\n          }\n          h6 {\n            font-size: 1rem;\n          }\n        "], ["\n          :host {\n            --size-gap-half: 0.25rem; /* 4px */\n            --size-gap: 0.5rem; /* 8px */\n            --size-gap-double: 1rem; /* 16px */\n            --size-gap-quad: 2rem; /* 32px */\n\n            --size-font-small: 0.875rem; /* 14px */\n            --size-font: 1rem; /* 16px */\n            --size-font-big: 1.25rem; /* 20px */\n            --size-font-bigger: 1.5rem; /* 24px */\n\n            --color-accents-1: #808080;\n            --color-accents-2: #222222;\n            --color-accents-3: #404040;\n\n            --font-stack-monospace: 'SFMono-Regular', Consolas,\n              'Liberation Mono', Menlo, Courier, monospace;\n\n            --color-ansi-selection: rgba(95, 126, 151, 0.48);\n            --color-ansi-bg: #111111;\n            --color-ansi-fg: #cccccc;\n\n            --color-ansi-white: #777777;\n            --color-ansi-black: #141414;\n            --color-ansi-blue: #00aaff;\n            --color-ansi-cyan: #88ddff;\n            --color-ansi-green: #98ec65;\n            --color-ansi-magenta: #aa88ff;\n            --color-ansi-red: #ff5555;\n            --color-ansi-yellow: #ffcc33;\n            --color-ansi-bright-white: #ffffff;\n            --color-ansi-bright-black: #777777;\n            --color-ansi-bright-blue: #33bbff;\n            --color-ansi-bright-cyan: #bbecff;\n            --color-ansi-bright-green: #b6f292;\n            --color-ansi-bright-magenta: #cebbff;\n            --color-ansi-bright-red: #ff8888;\n            --color-ansi-bright-yellow: #ffd966;\n          }\n\n          .mono {\n            font-family: var(--font-stack-monospace);\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-bottom: var(--size-gap);\n            font-weight: 500;\n            line-height: 1.5;\n          }\n\n          h1 {\n            font-size: 2.5rem;\n          }\n          h2 {\n            font-size: 2rem;\n          }\n          h3 {\n            font-size: 1.75rem;\n          }\n          h4 {\n            font-size: 1.5rem;\n          }\n          h5 {\n            font-size: 1.25rem;\n          }\n          h6 {\n            font-size: 1rem;\n          }\n        "])))
        } }));
}
exports.Base = Base;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/styles/ComponentStyles.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/styles/ComponentStyles.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var styles_1 = __webpack_require__(/*! ../components/CodeFrame/styles */ "../node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/styles.js");
var Dialog_1 = __webpack_require__(/*! ../components/Dialog */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js");
var styles_2 = __webpack_require__(/*! ../components/LeftRightDialogHeader/styles */ "../node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js");
var styles_3 = __webpack_require__(/*! ../components/Overlay/styles */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/styles.js");
var styles_4 = __webpack_require__(/*! ../components/Terminal/styles */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/styles.js");
var Toast_1 = __webpack_require__(/*! ../components/Toast */ "../node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js");
var BuildError_1 = __webpack_require__(/*! ../container/BuildError */ "../node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js");
var Errors_1 = __webpack_require__(/*! ../container/Errors */ "../node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js");
var RuntimeError_1 = __webpack_require__(/*! ../container/RuntimeError */ "../node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
function ComponentStyles() {
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n\n          ", "\n          ", "\n          ", "\n        "], ["\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n\n          ", "\n          ", "\n          ", "\n        "])), styles_3.styles, Toast_1.styles, Dialog_1.styles, styles_2.styles, styles_1.styles, styles_4.styles, BuildError_1.styles, Errors_1.styles, RuntimeError_1.styles)
        } }));
}
exports.ComponentStyles = ComponentStyles;
var templateObject_1;


/***/ }),

/***/ "../node_modules/@next/react-dev-overlay/lib/internal/styles/CssReset.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@next/react-dev-overlay/lib/internal/styles/CssReset.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "../node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
function CssReset() {
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          :host {\n            all: initial;\n\n            /* the direction property is not reset by 'all' */\n            direction: ltr;\n          }\n\n          /*!\n           * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n           * Copyright 2011-2019 The Bootstrap Authors\n           * Copyright 2011-2019 Twitter, Inc.\n           * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n           * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n           */\n          *,\n          *::before,\n          *::after {\n            box-sizing: border-box;\n          }\n\n          :host {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          }\n\n          article,\n          aside,\n          figcaption,\n          figure,\n          footer,\n          header,\n          hgroup,\n          main,\n          nav,\n          section {\n            display: block;\n          }\n\n          :host {\n            margin: 0;\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n              'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n              'Noto Color Emoji';\n            font-size: 1rem;\n            font-weight: 400;\n            line-height: 1.5;\n            color: #212529;\n            text-align: left;\n            background-color: #fff;\n          }\n\n          [tabindex='-1']:focus:not(:focus-visible) {\n            outline: 0 !important;\n          }\n\n          hr {\n            box-sizing: content-box;\n            height: 0;\n            overflow: visible;\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-top: 0;\n            margin-bottom: 0.5rem;\n          }\n\n          p {\n            margin-top: 0;\n            margin-bottom: 1rem;\n          }\n\n          abbr[title],\n          abbr[data-original-title] {\n            text-decoration: underline;\n            -webkit-text-decoration: underline dotted;\n            text-decoration: underline dotted;\n            cursor: help;\n            border-bottom: 0;\n            -webkit-text-decoration-skip-ink: none;\n            text-decoration-skip-ink: none;\n          }\n\n          address {\n            margin-bottom: 1rem;\n            font-style: normal;\n            line-height: inherit;\n          }\n\n          ol,\n          ul,\n          dl {\n            margin-top: 0;\n            margin-bottom: 1rem;\n          }\n\n          ol ol,\n          ul ul,\n          ol ul,\n          ul ol {\n            margin-bottom: 0;\n          }\n\n          dt {\n            font-weight: 700;\n          }\n\n          dd {\n            margin-bottom: 0.5rem;\n            margin-left: 0;\n          }\n\n          blockquote {\n            margin: 0 0 1rem;\n          }\n\n          b,\n          strong {\n            font-weight: bolder;\n          }\n\n          small {\n            font-size: 80%;\n          }\n\n          sub,\n          sup {\n            position: relative;\n            font-size: 75%;\n            line-height: 0;\n            vertical-align: baseline;\n          }\n\n          sub {\n            bottom: -0.25em;\n          }\n\n          sup {\n            top: -0.5em;\n          }\n\n          a {\n            color: #007bff;\n            text-decoration: none;\n            background-color: transparent;\n          }\n\n          a:hover {\n            color: #0056b3;\n            text-decoration: underline;\n          }\n\n          a:not([href]) {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          a:not([href]):hover {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          pre,\n          code,\n          kbd,\n          samp {\n            font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n              'Liberation Mono', 'Courier New', monospace;\n            font-size: 1em;\n          }\n\n          pre {\n            margin-top: 0;\n            margin-bottom: 1rem;\n            overflow: auto;\n          }\n\n          figure {\n            margin: 0 0 1rem;\n          }\n\n          img {\n            vertical-align: middle;\n            border-style: none;\n          }\n\n          svg {\n            overflow: hidden;\n            vertical-align: middle;\n          }\n\n          table {\n            border-collapse: collapse;\n          }\n\n          caption {\n            padding-top: 0.75rem;\n            padding-bottom: 0.75rem;\n            color: #6c757d;\n            text-align: left;\n            caption-side: bottom;\n          }\n\n          th {\n            text-align: inherit;\n          }\n\n          label {\n            display: inline-block;\n            margin-bottom: 0.5rem;\n          }\n\n          button {\n            border-radius: 0;\n          }\n\n          button:focus {\n            outline: 1px dotted;\n            outline: 5px auto -webkit-focus-ring-color;\n          }\n\n          input,\n          button,\n          select,\n          optgroup,\n          textarea {\n            margin: 0;\n            font-family: inherit;\n            font-size: inherit;\n            line-height: inherit;\n          }\n\n          button,\n          input {\n            overflow: visible;\n          }\n\n          button,\n          select {\n            text-transform: none;\n          }\n\n          select {\n            word-wrap: normal;\n          }\n\n          button,\n          [type='button'],\n          [type='reset'],\n          [type='submit'] {\n            -webkit-appearance: button;\n          }\n\n          button:not(:disabled),\n          [type='button']:not(:disabled),\n          [type='reset']:not(:disabled),\n          [type='submit']:not(:disabled) {\n            cursor: pointer;\n          }\n\n          button::-moz-focus-inner,\n          [type='button']::-moz-focus-inner,\n          [type='reset']::-moz-focus-inner,\n          [type='submit']::-moz-focus-inner {\n            padding: 0;\n            border-style: none;\n          }\n\n          input[type='radio'],\n          input[type='checkbox'] {\n            box-sizing: border-box;\n            padding: 0;\n          }\n\n          input[type='date'],\n          input[type='time'],\n          input[type='datetime-local'],\n          input[type='month'] {\n            -webkit-appearance: listbox;\n          }\n\n          textarea {\n            overflow: auto;\n            resize: vertical;\n          }\n\n          fieldset {\n            min-width: 0;\n            padding: 0;\n            margin: 0;\n            border: 0;\n          }\n\n          legend {\n            display: block;\n            width: 100%;\n            max-width: 100%;\n            padding: 0;\n            margin-bottom: 0.5rem;\n            font-size: 1.5rem;\n            line-height: inherit;\n            color: inherit;\n            white-space: normal;\n          }\n\n          progress {\n            vertical-align: baseline;\n          }\n\n          [type='number']::-webkit-inner-spin-button,\n          [type='number']::-webkit-outer-spin-button {\n            height: auto;\n          }\n\n          [type='search'] {\n            outline-offset: -2px;\n            -webkit-appearance: none;\n          }\n\n          [type='search']::-webkit-search-decoration {\n            -webkit-appearance: none;\n          }\n\n          ::-webkit-file-upload-button {\n            font: inherit;\n            -webkit-appearance: button;\n          }\n\n          output {\n            display: inline-block;\n          }\n\n          summary {\n            display: list-item;\n            cursor: pointer;\n          }\n\n          template {\n            display: none;\n          }\n\n          [hidden] {\n            display: none !important;\n          }\n        "], ["\n          :host {\n            all: initial;\n\n            /* the direction property is not reset by 'all' */\n            direction: ltr;\n          }\n\n          /*!\n           * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n           * Copyright 2011-2019 The Bootstrap Authors\n           * Copyright 2011-2019 Twitter, Inc.\n           * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n           * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n           */\n          *,\n          *::before,\n          *::after {\n            box-sizing: border-box;\n          }\n\n          :host {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          }\n\n          article,\n          aside,\n          figcaption,\n          figure,\n          footer,\n          header,\n          hgroup,\n          main,\n          nav,\n          section {\n            display: block;\n          }\n\n          :host {\n            margin: 0;\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n              'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n              'Noto Color Emoji';\n            font-size: 1rem;\n            font-weight: 400;\n            line-height: 1.5;\n            color: #212529;\n            text-align: left;\n            background-color: #fff;\n          }\n\n          [tabindex='-1']:focus:not(:focus-visible) {\n            outline: 0 !important;\n          }\n\n          hr {\n            box-sizing: content-box;\n            height: 0;\n            overflow: visible;\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-top: 0;\n            margin-bottom: 0.5rem;\n          }\n\n          p {\n            margin-top: 0;\n            margin-bottom: 1rem;\n          }\n\n          abbr[title],\n          abbr[data-original-title] {\n            text-decoration: underline;\n            -webkit-text-decoration: underline dotted;\n            text-decoration: underline dotted;\n            cursor: help;\n            border-bottom: 0;\n            -webkit-text-decoration-skip-ink: none;\n            text-decoration-skip-ink: none;\n          }\n\n          address {\n            margin-bottom: 1rem;\n            font-style: normal;\n            line-height: inherit;\n          }\n\n          ol,\n          ul,\n          dl {\n            margin-top: 0;\n            margin-bottom: 1rem;\n          }\n\n          ol ol,\n          ul ul,\n          ol ul,\n          ul ol {\n            margin-bottom: 0;\n          }\n\n          dt {\n            font-weight: 700;\n          }\n\n          dd {\n            margin-bottom: 0.5rem;\n            margin-left: 0;\n          }\n\n          blockquote {\n            margin: 0 0 1rem;\n          }\n\n          b,\n          strong {\n            font-weight: bolder;\n          }\n\n          small {\n            font-size: 80%;\n          }\n\n          sub,\n          sup {\n            position: relative;\n            font-size: 75%;\n            line-height: 0;\n            vertical-align: baseline;\n          }\n\n          sub {\n            bottom: -0.25em;\n          }\n\n          sup {\n            top: -0.5em;\n          }\n\n          a {\n            color: #007bff;\n            text-decoration: none;\n            background-color: transparent;\n          }\n\n          a:hover {\n            color: #0056b3;\n            text-decoration: underline;\n          }\n\n          a:not([href]) {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          a:not([href]):hover {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          pre,\n          code,\n          kbd,\n          samp {\n            font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n              'Liberation Mono', 'Courier New', monospace;\n            font-size: 1em;\n          }\n\n          pre {\n            margin-top: 0;\n            margin-bottom: 1rem;\n            overflow: auto;\n          }\n\n          figure {\n            margin: 0 0 1rem;\n          }\n\n          img {\n            vertical-align: middle;\n            border-style: none;\n          }\n\n          svg {\n            overflow: hidden;\n            vertical-align: middle;\n          }\n\n          table {\n            border-collapse: collapse;\n          }\n\n          caption {\n            padding-top: 0.75rem;\n            padding-bottom: 0.75rem;\n            color: #6c757d;\n            text-align: left;\n            caption-side: bottom;\n          }\n\n          th {\n            text-align: inherit;\n          }\n\n          label {\n            display: inline-block;\n            margin-bottom: 0.5rem;\n          }\n\n          button {\n            border-radius: 0;\n          }\n\n          button:focus {\n            outline: 1px dotted;\n            outline: 5px auto -webkit-focus-ring-color;\n          }\n\n          input,\n          button,\n          select,\n          optgroup,\n          textarea {\n            margin: 0;\n            font-family: inherit;\n            font-size: inherit;\n            line-height: inherit;\n          }\n\n          button,\n          input {\n            overflow: visible;\n          }\n\n          button,\n          select {\n            text-transform: none;\n          }\n\n          select {\n            word-wrap: normal;\n          }\n\n          button,\n          [type='button'],\n          [type='reset'],\n          [type='submit'] {\n            -webkit-appearance: button;\n          }\n\n          button:not(:disabled),\n          [type='button']:not(:disabled),\n          [type='reset']:not(:disabled),\n          [type='submit']:not(:disabled) {\n            cursor: pointer;\n          }\n\n          button::-moz-focus-inner,\n          [type='button']::-moz-focus-inner,\n          [type='reset']::-moz-focus-inner,\n          [type='submit']::-moz-focus-inner {\n            padding: 0;\n            border-style: none;\n          }\n\n          input[type='radio'],\n          input[type='checkbox'] {\n            box-sizing: border-box;\n            padding: 0;\n          }\n\n          input[type='date'],\n          input[type='time'],\n          input[type='datetime-local'],\n          input[type='month'] {\n            -webkit-appearance: listbox;\n          }\n\n          textarea {\n            overflow: auto;\n            resize: vertical;\n          }\n\n          fieldset {\n            min-width: 0;\n            padding: 0;\n            margin: 0;\n            border: 0;\n          }\n\n          legend {\n            display: block;\n            width: 100%;\n            max-width: 100%;\n            padding: 0;\n            margin-bottom: 0.5rem;\n            font-size: 1.5rem;\n            line-height: inherit;\n            color: inherit;\n            white-space: normal;\n          }\n\n          progress {\n            vertical-align: baseline;\n          }\n\n          [type='number']::-webkit-inner-spin-button,\n          [type='number']::-webkit-outer-spin-button {\n            height: auto;\n          }\n\n          [type='search'] {\n            outline-offset: -2px;\n            -webkit-appearance: none;\n          }\n\n          [type='search']::-webkit-search-decoration {\n            -webkit-appearance: none;\n          }\n\n          ::-webkit-file-upload-button {\n            font: inherit;\n            -webkit-appearance: button;\n          }\n\n          output {\n            display: inline-block;\n          }\n\n          summary {\n            display: list-item;\n            cursor: pointer;\n          }\n\n          template {\n            display: none;\n          }\n\n          [hidden] {\n            display: none !important;\n          }\n        "])))
        } }));
}
exports.CssReset = CssReset;
var templateObject_1;


/***/ }),

/***/ "../node_modules/ally.js/element/disabled.js":
/*!***************************************************!*\
  !*** ../node_modules/ally.js/element/disabled.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, disabledState) {
  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var element = (0, _contextToElement2.default)({
    label: 'element/disabled',
    context: context
  });

  // accept truthy/falsy values
  disabledState = Boolean(disabledState);
  var currentState = element.hasAttribute('data-ally-disabled');
  // if there's no value to set, we're running as a getter
  var runningAsGetter = arguments.length === 1;

  if ((0, _nativeDisabledSupported2.default)(element)) {
    if (runningAsGetter) {
      return element.disabled;
    }

    // form elements know the disabled attribute, which we shall use instead of our poor man's copy of it
    element.disabled = disabledState;
    return element;
  }

  if (runningAsGetter) {
    return currentState;
  }

  if (currentState === disabledState) {
    // no update necessary
    return element;
  }

  setElementDisabled(element, disabledState);
  return element;
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _tabindexValue = __webpack_require__(/*! ../util/tabindex-value */ "../node_modules/ally.js/util/tabindex-value.js");

var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

var _nativeDisabledSupported = __webpack_require__(/*! ../is/native-disabled-supported */ "../node_modules/ally.js/is/native-disabled-supported.js");

var _nativeDisabledSupported2 = _interopRequireDefault(_nativeDisabledSupported);

var _toggleAttribute = __webpack_require__(/*! ../util/toggle-attribute */ "../node_modules/ally.js/util/toggle-attribute.js");

var _toggleAttribute2 = _interopRequireDefault(_toggleAttribute);

var _toggleAttributeValue = __webpack_require__(/*! ../util/toggle-attribute-value */ "../node_modules/ally.js/util/toggle-attribute-value.js");

var _toggleAttributeValue2 = _interopRequireDefault(_toggleAttributeValue);

var _logger = __webpack_require__(/*! ../util/logger */ "../node_modules/ally.js/util/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supports = void 0;
/*
  Utility to make any element inert (disabled). Inert means the elements cannot be interacted
  with and they cannot be focused via script, pointer or keyboard - and thus not receive focus.

  Elements made inert (disabled) by this utility are given the attribute [data-ally-disabled="true"].

  ---------------

  inert attribute was [removed](https://html5.org/r/8536) [tweet by steve](https://twitter.com/stevefaulkner/status/443075900201259008)
  but definition of [inert subtrees](https://www.w3.org/html/wg/drafts/html/master/editing.html#inert-subtrees) remains.

  [implementation idea by Vasilis](https://codepen.io/vasilisvg/pen/scowI)
  [inert attribute polyfill by GoogleChrome](https://github.com/GoogleChrome/inert-polyfill)

  [Gecko Bug: Inert Attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=921504)
  [Chromium Bug: Inert Attribute](https://code.google.com/p/chromium/issues/detail?id=269846)
  [Chromium Bug: Inert Subtree](https://code.google.com/p/chromium/issues/detail?id=241699)
  [WebKit Bug: Inert Subtree](https://bugs.webkit.org/show_bug.cgi?id=110952)
*/

function disabledFocus() {
  _logger2.default.warn('trying to focus inert element', this);
}

function disableTabindex(element, disabledState) {
  if (disabledState) {
    var tabIndex = (0, _tabindexValue2.default)(element);
    (0, _toggleAttributeValue2.default)({
      element: element,
      attribute: 'tabindex',
      temporaryValue: '-1',
      saveValue: tabIndex !== null ? tabIndex : ''
    });
  } else {
    (0, _toggleAttributeValue2.default)({
      element: element,
      attribute: 'tabindex'
    });
  }
}

function disableVideoControls(element, disabledState) {
  (0, _toggleAttribute2.default)({
    element: element,
    attribute: 'controls',
    remove: disabledState
  });
}

function disableSvgFocusable(element, disabledState) {
  (0, _toggleAttributeValue2.default)({
    element: element,
    attribute: 'focusable',
    temporaryValue: disabledState ? 'false' : undefined
  });
}

function disableSvgLink(element, disabledState) {
  (0, _toggleAttribute2.default)({
    element: element,
    attribute: 'xlink:href',
    remove: disabledState
  });
}

function setAriaDisabled(element, disabledState) {
  (0, _toggleAttributeValue2.default)({
    element: element,
    attribute: 'aria-disabled',
    temporaryValue: disabledState ? 'true' : undefined
  });
}

function disableScriptFocus(element, disabledState) {
  if (disabledState) {
    // make sure no script can focus the element
    element.focus = disabledFocus;
  } else {
    // restore original focus function from prototype
    delete element.focus;
  }
}

function disablePointerEvents(element, disabledState) {
  if (disabledState) {
    // remember previous pointer events status so we can restore it
    var pointerEvents = element.style.pointerEvents || '';
    element.setAttribute('data-inert-pointer-events', pointerEvents);
    // make sure no pointer interaction can access the element
    element.style.pointerEvents = 'none';
  } else {
    // restore to previous pointer interaction status
    var _pointerEvents = element.getAttribute('data-inert-pointer-events');
    element.removeAttribute('data-inert-pointer-events');
    element.style.pointerEvents = _pointerEvents;
  }
}

function setElementDisabled(element, disabledState) {
  setAriaDisabled(element, disabledState);
  disableTabindex(element, disabledState);
  disableScriptFocus(element, disabledState);
  disablePointerEvents(element, disabledState);

  var nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'video' || nodeName === 'audio') {
    // Blink and Gecko leave <video controls tabindex="-1"> in document focus navigation sequence
    // Blink leaves <audio controls tabindex="-1"> in document focus navigation sequence
    disableVideoControls(element, disabledState);
  }

  if (nodeName === 'svg' || element.ownerSVGElement) {
    if (supports.focusSvgFocusableAttribute) {
      // Internet Explorer knows focusable="false" instead of tabindex="-1"
      disableSvgFocusable(element, disabledState);
    } else if (!supports.focusSvgTabindexAttribute && nodeName === 'a') {
      // Firefox neither knows focusable="false" nor tabindex="-1"
      disableSvgLink(element, disabledState);
    }
  }

  if (disabledState) {
    element.setAttribute('data-ally-disabled', 'true');
  } else {
    element.removeAttribute('data-ally-disabled');
  }
}

module.exports = exports['default'];
//# sourceMappingURL=disabled.js.map

/***/ }),

/***/ "../node_modules/ally.js/element/focus.svg-foreign-object-hack.js":
/*!************************************************************************!*\
  !*** ../node_modules/ally.js/element/focus.svg-foreign-object-hack.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  // Edge13, Edge14: foreignObject focus hack
  // https://jsbin.com/kunehinugi/edit?html,js,output
  // https://jsbin.com/fajagi/3/edit?html,js,output
  var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
  if (!isSvgElement) {
    return false;
  }

  // inject and focus an <input> element into the SVG element to receive focus
  var foreignObject = makeFocusableForeignObject();
  element.appendChild(foreignObject);
  var input = foreignObject.querySelector('input');
  input.focus();

  // upon disabling the activeElement, IE and Edge
  // will not shift focus to <body> like all the other
  // browsers, but instead find the first focusable
  // ancestor and shift focus to that
  input.disabled = true;

  // clean up
  element.removeChild(foreignObject);
  return true;
};

function makeFocusableForeignObject() {
  var fragment = document.createElement('div');
  fragment.innerHTML = '<svg><foreignObject width="30" height="30">\n      <input type="text"/>\n  </foreignObject></svg>';

  return fragment.firstChild.firstChild;
}

module.exports = exports['default'];
//# sourceMappingURL=focus.svg-foreign-object-hack.js.map

/***/ }),

/***/ "../node_modules/ally.js/get/parents.js":
/*!**********************************************!*\
  !*** ../node_modules/ally.js/get/parents.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context;

  var list = [];
  var element = (0, _contextToElement2.default)({
    label: 'get/parents',
    context: context
  });

  while (element) {
    list.push(element);
    // IE does know support parentElement on SVGElement
    element = element.parentNode;
    if (element && element.nodeType !== Node.ELEMENT_NODE) {
      element = null;
    }
  }

  return list;
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
//# sourceMappingURL=parents.js.map

/***/ }),

/***/ "../node_modules/ally.js/get/shadow-host.js":
/*!**************************************************!*\
  !*** ../node_modules/ally.js/get/shadow-host.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context;

  var element = (0, _contextToElement2.default)({
    label: 'get/shadow-host',
    context: context
  });

  // walk up to the root
  var container = null;

  while (element) {
    container = element;
    element = element.parentNode;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType
  // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
  if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
    // the root is attached to a fragment node that has a host
    return container.host;
  }

  return null;
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=shadow-host.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/active-element.js":
/*!****************************************************!*\
  !*** ../node_modules/ally.js/is/active-element.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var element = (0, _contextToElement2.default)({
    label: 'is/active-element',
    resolveDocument: true,
    context: context
  });

  var _document = (0, _getDocument2.default)(element);
  if (_document.activeElement === element) {
    return true;
  }

  var shadowHost = (0, _shadowHost2.default)({ context: element });
  if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
    return true;
  }

  return false;
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _shadowHost = __webpack_require__(/*! ../get/shadow-host */ "../node_modules/ally.js/get/shadow-host.js");

var _shadowHost2 = _interopRequireDefault(_shadowHost);

var _getDocument = __webpack_require__(/*! ../util/get-document */ "../node_modules/ally.js/util/get-document.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Determines if an element is the activeElement within its context, i.e. its document iFrame or ShadowHost

module.exports = exports['default'];
//# sourceMappingURL=active-element.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/disabled.js":
/*!**********************************************!*\
  !*** ../node_modules/ally.js/is/disabled.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var element = (0, _contextToElement2.default)({
    label: 'is/disabled',
    context: context
  });

  if (element.hasAttribute('data-ally-disabled')) {
    // treat ally's element/disabled like the DOM native element.disabled
    return true;
  }

  if (!(0, _nativeDisabledSupported2.default)(element)) {
    // non-form elements do not support the disabled attribute
    return false;
  }

  if (element.disabled) {
    // the element itself is disabled
    return true;
  }

  var parents = (0, _parents2.default)({ context: element });
  if (parents.some(isDisabledFieldset)) {
    // a parental <fieldset> is disabld and inherits the state onto this element
    return true;
  }

  if (!supports.focusFormDisabled && parents.some(isDisabledForm)) {
    // a parental <form> is disabld and inherits the state onto this element
    return true;
  }

  return false;
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _parents = __webpack_require__(/*! ../get/parents */ "../node_modules/ally.js/get/parents.js");

var _parents2 = _interopRequireDefault(_parents);

var _nativeDisabledSupported = __webpack_require__(/*! ./native-disabled-supported */ "../node_modules/ally.js/is/native-disabled-supported.js");

var _nativeDisabledSupported2 = _interopRequireDefault(_nativeDisabledSupported);

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Determine if an element is disabled (i.e. not editable)

var supports = void 0;

function isDisabledFieldset(element) {
  var nodeName = element.nodeName.toLowerCase();
  return nodeName === 'fieldset' && element.disabled;
}

function isDisabledForm(element) {
  var nodeName = element.nodeName.toLowerCase();
  return nodeName === 'form' && element.disabled;
}

module.exports = exports['default'];
//# sourceMappingURL=disabled.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/focus-relevant.js":
/*!****************************************************!*\
  !*** ../node_modules/ally.js/is/focus-relevant.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parents = __webpack_require__(/*! ../get/parents */ "../node_modules/ally.js/get/parents.js");

var _parents2 = _interopRequireDefault(_parents);

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _elementMatches = __webpack_require__(/*! ../util/element-matches */ "../node_modules/ally.js/util/element-matches.js");

var _elementMatches2 = _interopRequireDefault(_elementMatches);

var _tabindexValue = __webpack_require__(/*! ../util/tabindex-value */ "../node_modules/ally.js/util/tabindex-value.js");

var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

var _validTabindex = __webpack_require__(/*! ./valid-tabindex */ "../node_modules/ally.js/is/valid-tabindex.js");

var _validTabindex2 = _interopRequireDefault(_validTabindex);

var _is = __webpack_require__(/*! ./is.util */ "../node_modules/ally.js/is/is.util.js");

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supports = void 0;
// determine if an element supports.can be focused by script regardless
// of the element actually being focusable at the time of execution
// i.e. <input disabled> is conisdered focus-relevant, but not focusable

function isFocusRelevantRules() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      _ref$except = _ref.except,
      except = _ref$except === undefined ? {
    flexbox: false,
    scrollable: false,
    shadow: false
  } : _ref$except;

  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var element = (0, _contextToElement2.default)({
    label: 'is/focus-relevant',
    resolveDocument: true,
    context: context
  });

  if (!except.shadow && element.shadowRoot) {
    // a ShadowDOM host receives focus when the focus moves to its content
    return true;
  }

  var nodeName = element.nodeName.toLowerCase();

  if (nodeName === 'input' && element.type === 'hidden') {
    // input[type="hidden"] supports.cannot be focused
    return false;
  }

  if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
    return true;
  }

  if (nodeName === 'legend' && supports.focusRedirectLegend) {
    // specifics filtered in is/focusable
    return true;
  }

  if (nodeName === 'label') {
    // specifics filtered in is/focusable
    return true;
  }

  if (nodeName === 'area') {
    // specifics filtered in is/focusable
    return true;
  }

  if (nodeName === 'a' && element.hasAttribute('href')) {
    return true;
  }

  if (nodeName === 'object' && element.hasAttribute('usemap')) {
    // object[usemap] is not focusable in any browser
    return false;
  }

  if (nodeName === 'object') {
    var svgType = element.getAttribute('type');
    if (!supports.focusObjectSvg && svgType === 'image/svg+xml') {
      // object[type="image/svg+xml"] is not focusable in Internet Explorer
      return false;
    } else if (!supports.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
      // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
      return false;
    }
  }

  if (nodeName === 'iframe' || nodeName === 'object') {
    // browsing context containers
    return true;
  }

  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true;
  }

  if (element.hasAttribute('contenteditable')) {
    // also see CSS property user-modify below
    return true;
  }

  if (nodeName === 'audio' && (supports.focusAudioWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }

  if (nodeName === 'video' && (supports.focusVideoWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }

  if (supports.focusSummary && nodeName === 'summary') {
    return true;
  }

  var validTabindex = (0, _validTabindex2.default)(element);

  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return validTabindex && supports.focusImgUsemapTabindex || supports.focusRedirectImgUsemap;
  }

  if (supports.focusTable && (nodeName === 'table' || nodeName === 'td')) {
    // IE10-11 supports.can focus <table> and <td>
    return true;
  }

  if (supports.focusFieldset && nodeName === 'fieldset') {
    // IE10-11 supports.can focus <fieldset>
    return true;
  }

  var isSvgElement = nodeName === 'svg';
  var isSvgContent = element.ownerSVGElement;
  var focusableAttribute = element.getAttribute('focusable');
  var tabindex = (0, _tabindexValue2.default)(element);

  if (nodeName === 'use' && tabindex !== null && !supports.focusSvgUseTabindex) {
    // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
    return false;
  }

  if (nodeName === 'foreignobject') {
    // <use> can only be made focusable in Blink and WebKit
    return tabindex !== null && supports.focusSvgForeignobjectTabindex;
  }

  if ((0, _elementMatches2.default)(element, 'svg a') && element.hasAttribute('xlink:href')) {
    return true;
  }

  if ((isSvgElement || isSvgContent) && element.focus && !supports.focusSvgNegativeTabindexAttribute && tabindex < 0) {
    // Firefox 51 and 52 treat any natively tabbable SVG element with
    // tabindex="-1" as tabbable and everything else as inert
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
    return false;
  }

  if (isSvgElement) {
    return validTabindex || supports.focusSvg || supports.focusSvgInIframe
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
    || Boolean(supports.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
  }

  if (isSvgContent) {
    if (supports.focusSvgTabindexAttribute && validTabindex) {
      return true;
    }

    if (supports.focusSvgFocusableAttribute) {
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      return focusableAttribute === 'true';
    }
  }

  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  if (validTabindex) {
    return true;
  }

  var style = window.getComputedStyle(element, null);
  if ((0, _is.isUserModifyWritable)(style)) {
    return true;
  }

  if (supports.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
    // IE10-11 considers the <img> in <a href><img ismap> focusable
    // https://github.com/medialize/ally.js/issues/20
    var hasLinkParent = (0, _parents2.default)({ context: element }).some(function (parent) {
      return parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href');
    });

    if (hasLinkParent) {
      return true;
    }
  }

  // https://github.com/medialize/ally.js/issues/21
  if (!except.scrollable && supports.focusScrollContainer) {
    if (supports.focusScrollContainerWithoutOverflow) {
      // Internet Explorer does will consider the scrollable area focusable
      // if the element is a <div> or a <span> and it is in fact scrollable,
      // regardless of the CSS overflow property
      if ((0, _is.isScrollableContainer)(element, nodeName)) {
        return true;
      }
    } else if ((0, _is.hasCssOverflowScroll)(style)) {
      // Firefox requires proper overflow setting, IE does not necessarily
      // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
      return true;
    }
  }

  if (!except.flexbox && supports.focusFlexboxContainer && (0, _is.hasCssDisplayFlex)(style)) {
    // elements with display:flex are focusable in IE10-11
    return true;
  }

  var parent = element.parentElement;
  if (!except.scrollable && parent) {
    var parentNodeName = parent.nodeName.toLowerCase();
    var parentStyle = window.getComputedStyle(parent, null);
    if (supports.focusScrollBody && (0, _is.isScrollableContainer)(parent, nodeName, parentNodeName, parentStyle)) {
      // scrollable bodies are focusable Internet Explorer
      // https://github.com/medialize/ally.js/issues/21
      return true;
    }

    // Children of focusable elements with display:flex are focusable in IE10-11
    if (supports.focusChildrenOfFocusableFlexbox) {
      if ((0, _is.hasCssDisplayFlex)(parentStyle)) {
        return true;
      }
    }
  }

  // NOTE: elements marked as inert are not focusable,
  // but that property is not exposed to the DOM
  // https://www.w3.org/TR/html5/editing.html#inert

  return false;
}

// bind exceptions to an iterator callback
isFocusRelevantRules.except = function () {
  var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isFocusRelevant = function isFocusRelevant(context) {
    return isFocusRelevantRules({
      context: context,
      except: except
    });
  };

  isFocusRelevant.rules = isFocusRelevantRules;
  return isFocusRelevant;
};

// provide isFocusRelevant(context) as default iterator callback
var isFocusRelevant = isFocusRelevantRules.except({});
exports.default = isFocusRelevant;
module.exports = exports['default'];
//# sourceMappingURL=focus-relevant.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/focusable.js":
/*!***********************************************!*\
  !*** ../node_modules/ally.js/is/focusable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _focusRelevant = __webpack_require__(/*! ./focus-relevant */ "../node_modules/ally.js/is/focus-relevant.js");

var _focusRelevant2 = _interopRequireDefault(_focusRelevant);

var _validArea = __webpack_require__(/*! ./valid-area */ "../node_modules/ally.js/is/valid-area.js");

var _validArea2 = _interopRequireDefault(_validArea);

var _visible = __webpack_require__(/*! ./visible */ "../node_modules/ally.js/is/visible.js");

var _visible2 = _interopRequireDefault(_visible);

var _disabled = __webpack_require__(/*! ./disabled */ "../node_modules/ally.js/is/disabled.js");

var _disabled2 = _interopRequireDefault(_disabled);

var _onlyTabbable = __webpack_require__(/*! ./only-tabbable */ "../node_modules/ally.js/is/only-tabbable.js");

var _onlyTabbable2 = _interopRequireDefault(_onlyTabbable);

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _getFrameElement = __webpack_require__(/*! ../util/get-frame-element */ "../node_modules/ally.js/util/get-frame-element.js");

var _getFrameElement2 = _interopRequireDefault(_getFrameElement);

var _tabindexValue = __webpack_require__(/*! ../util/tabindex-value */ "../node_modules/ally.js/util/tabindex-value.js");

var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supports = void 0;
// determine if an element can be focused

// https://www.w3.org/TR/html5/editing.html#focus-management

// NOTE: The following known issues exist:
//   Gecko: `svg a[xlink|href]` is not identified as focusable (because SVGElement.prototype.focus is missing)
//   Blink, WebKit: SVGElements that have been made focusable by adding a focus event listener are not identified as focusable

function isOnlyFocusRelevant(element) {
  var nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true;
  }

  var _tabindex = (0, _tabindexValue2.default)(element);
  if (element.shadowRoot && _tabindex === null) {
    // ShadowDOM host elements *may* receive focus
    // even though they are not considered focuable
    return true;
  }

  if (nodeName === 'label') {
    // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
    // there's no way to make an element focusable other than by adding a tabindex,
    // and focus behavior of the label element seems hard-wired to ignore tabindex
    // in some browsers (like Gecko, Blink and WebKit)
    return !supports.focusLabelTabindex || _tabindex === null;
  }

  if (nodeName === 'legend') {
    return _tabindex === null;
  }

  if (supports.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
    var focusableAttribute = element.getAttribute('focusable');
    return focusableAttribute && focusableAttribute === 'false';
  }

  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return _tabindex === null || !supports.focusImgUsemapTabindex;
  }

  if (nodeName === 'area') {
    // all <area>s are considered relevant,
    // but only the valid <area>s are focusable
    return !(0, _validArea2.default)(element);
  }

  return false;
}

function isFocusableRules() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      _ref$except = _ref.except,
      except = _ref$except === undefined ? {
    disabled: false,
    visible: false,
    onlyTabbable: false
  } : _ref$except;

  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var _isOnlyTabbable = _onlyTabbable2.default.rules.except({
    onlyFocusableBrowsingContext: true,
    visible: except.visible
  });

  var element = (0, _contextToElement2.default)({
    label: 'is/focusable',
    resolveDocument: true,
    context: context
  });

  var focusRelevant = _focusRelevant2.default.rules({
    context: element,
    except: except
  });

  if (!focusRelevant || isOnlyFocusRelevant(element)) {
    return false;
  }

  if (!except.disabled && (0, _disabled2.default)(element)) {
    return false;
  }

  if (!except.onlyTabbable && _isOnlyTabbable(element)) {
    // some elements may be keyboard focusable, but not script focusable
    return false;
  }

  // elements that are not rendered, cannot be focused
  if (!except.visible) {
    var visibilityOptions = {
      context: element,
      except: {}
    };

    if (supports.focusInHiddenIframe) {
      // WebKit and Blink can focus content in hidden <iframe> and <object>
      visibilityOptions.except.browsingContext = true;
    }

    if (supports.focusObjectSvgHidden) {
      // Blink allows focusing the object element, even if it has visibility: hidden;
      // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
      var _nodeName2 = element.nodeName.toLowerCase();
      if (_nodeName2 === 'object') {
        visibilityOptions.except.cssVisibility = true;
      }
    }

    if (!_visible2.default.rules(visibilityOptions)) {
      return false;
    }
  }

  var frameElement = (0, _getFrameElement2.default)(element);
  if (frameElement) {
    var _nodeName = frameElement.nodeName.toLowerCase();
    if (_nodeName === 'object' && !supports.focusInZeroDimensionObject) {
      if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
        // WebKit can not focus content in <object> if it doesn't have dimensions
        return false;
      }
    }
  }

  var nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'svg' && supports.focusSvgInIframe && !frameElement && element.getAttribute('tabindex') === null) {
    return false;
  }

  return true;
}

// bind exceptions to an iterator callback
isFocusableRules.except = function () {
  var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isFocusable = function isFocusable(context) {
    return isFocusableRules({
      context: context,
      except: except
    });
  };

  isFocusable.rules = isFocusableRules;
  return isFocusable;
};

// provide isFocusRelevant(context) as default iterator callback
var isFocusable = isFocusableRules.except({});
exports.default = isFocusable;
module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/is.util.js":
/*!*********************************************!*\
  !*** ../node_modules/ally.js/is/is.util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUserModifyWritable = isUserModifyWritable;
exports.hasCssOverflowScroll = hasCssOverflowScroll;
exports.hasCssDisplayFlex = hasCssDisplayFlex;
exports.isScrollableContainer = isScrollableContainer;

// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers

function isUserModifyWritable(style) {
  // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
  // https://github.com/medialize/ally.js/issues/17
  var userModify = style.webkitUserModify || '';
  return Boolean(userModify && userModify.indexOf('write') !== -1);
}

function hasCssOverflowScroll(style) {
  return [style.getPropertyValue('overflow'), style.getPropertyValue('overflow-x'), style.getPropertyValue('overflow-y')].some(function (overflow) {
    return overflow === 'auto' || overflow === 'scroll';
  });
}

function hasCssDisplayFlex(style) {
  return style.display.indexOf('flex') > -1;
}

function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
  if (nodeName !== 'div' && nodeName !== 'span') {
    // Internet Explorer advances scrollable containers and bodies to focusable
    // only if the scrollable container is <div> or <span> - this does *not*
    // happen for <section>, <article>, …
    return false;
  }

  if (parentNodeName && parentNodeName !== 'div' && parentNodeName !== 'span' && !hasCssOverflowScroll(parentStyle)) {
    return false;
  }

  return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}
//# sourceMappingURL=is.util.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/native-disabled-supported.js":
/*!***************************************************************!*\
  !*** ../node_modules/ally.js/is/native-disabled-supported.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  if (!supports) {
    supports = (0, _supports3.default)();

    if (supports.focusFieldsetDisabled) {
      delete disabledElements.fieldset;
    }

    if (supports.focusFormDisabled) {
      delete disabledElements.form;
    }

    disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
  }

  var element = (0, _contextToElement2.default)({
    label: 'is/native-disabled-supported',
    context: context
  });

  var nodeName = element.nodeName.toLowerCase();
  return Boolean(disabledElementsPattern.test(nodeName));
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Determine if an element supports the disabled attribute

var supports = void 0;

// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = void 0;
var disabledElements = {
  input: true,
  select: true,
  textarea: true,
  button: true,
  fieldset: true,
  form: true
};

module.exports = exports['default'];
//# sourceMappingURL=native-disabled-supported.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/only-tabbable.js":
/*!***************************************************!*\
  !*** ../node_modules/ally.js/is/only-tabbable.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _visible = __webpack_require__(/*! ./visible */ "../node_modules/ally.js/is/visible.js");

var _visible2 = _interopRequireDefault(_visible);

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _getFrameElement = __webpack_require__(/*! ../util/get-frame-element */ "../node_modules/ally.js/util/get-frame-element.js");

var _getFrameElement2 = _interopRequireDefault(_getFrameElement);

var _tabindexValue = __webpack_require__(/*! ../util/tabindex-value */ "../node_modules/ally.js/util/tabindex-value.js");

var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isOnlyTabbableRules() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      _ref$except = _ref.except,
      except = _ref$except === undefined ? {
    onlyFocusableBrowsingContext: false,
    visible: false
  } : _ref$except;

  var element = (0, _contextToElement2.default)({
    label: 'is/only-tabbable',
    resolveDocument: true,
    context: context
  });

  if (!except.visible && !(0, _visible2.default)(element)) {
    return false;
  }

  if (!except.onlyFocusableBrowsingContext && (_platform2.default.is.GECKO || _platform2.default.is.TRIDENT || _platform2.default.is.EDGE)) {
    var frameElement = (0, _getFrameElement2.default)(element);
    if (frameElement) {
      if ((0, _tabindexValue2.default)(frameElement) < 0) {
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        return false;
      }
    }
  }

  var nodeName = element.nodeName.toLowerCase();
  var tabindex = (0, _tabindexValue2.default)(element);

  if (nodeName === 'label' && _platform2.default.is.GECKO) {
    // Firefox cannot focus, but tab to: label[tabindex=0]
    return tabindex !== null && tabindex >= 0;
  }

  // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
  // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
  if (_platform2.default.is.GECKO && element.ownerSVGElement && !element.focus) {
    if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
      // any focusable child of <svg> cannot be focused, but tabbed to
      if (_platform2.default.is.GECKO) {
        return true;
      }
    }
  }

  return false;
}

// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function () {
  var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isOnlyTabbable = function isOnlyTabbable(context) {
    return isOnlyTabbableRules({
      context: context,
      except: except
    });
  };

  isOnlyTabbable.rules = isOnlyTabbableRules;
  return isOnlyTabbable;
};

// provide isOnlyTabbable(context) as default iterator callback
var isOnlyTabbable = isOnlyTabbableRules.except({});
exports.default = isOnlyTabbable;
module.exports = exports['default'];
//# sourceMappingURL=only-tabbable.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/tabbable.js":
/*!**********************************************!*\
  !*** ../node_modules/ally.js/is/tabbable.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _visible = __webpack_require__(/*! ./visible */ "../node_modules/ally.js/is/visible.js");

var _visible2 = _interopRequireDefault(_visible);

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _elementMatches = __webpack_require__(/*! ../util/element-matches */ "../node_modules/ally.js/util/element-matches.js");

var _elementMatches2 = _interopRequireDefault(_elementMatches);

var _tabindexValue = __webpack_require__(/*! ../util/tabindex-value */ "../node_modules/ally.js/util/tabindex-value.js");

var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

var _focusRelevant = __webpack_require__(/*! ./focus-relevant */ "../node_modules/ally.js/is/focus-relevant.js");

var _focusRelevant2 = _interopRequireDefault(_focusRelevant);

var _getFrameElement = __webpack_require__(/*! ../util/get-frame-element */ "../node_modules/ally.js/util/get-frame-element.js");

var _getFrameElement2 = _interopRequireDefault(_getFrameElement);

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

var _imageMap = __webpack_require__(/*! ../util/image-map */ "../node_modules/ally.js/util/image-map.js");

var _is = __webpack_require__(/*! ./is.util */ "../node_modules/ally.js/is/is.util.js");

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// determine if an element can be focused by keyboard (i.e. is part of the document's sequential focus navigation order)

var supports = void 0;

// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/;

function isTabbableRules() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      _ref$except = _ref.except,
      except = _ref$except === undefined ? {
    flexbox: false,
    scrollable: false,
    shadow: false,
    visible: false,
    onlyTabbable: false
  } : _ref$except;

  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var element = (0, _contextToElement2.default)({
    label: 'is/tabbable',
    resolveDocument: true,
    context: context
  });

  if (_platform2.default.is.BLINK && _platform2.default.is.ANDROID && _platform2.default.majorVersion > 42) {
    // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
    // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
    // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
    return false;
  }

  var frameElement = (0, _getFrameElement2.default)(element);
  if (frameElement) {
    if (_platform2.default.is.WEBKIT && _platform2.default.is.IOS) {
      // iOS only does not consider anything from another browsing context keyboard focusable
      return false;
    }

    // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
    // tabbable demotion onto elements of their browsing contexts
    if ((0, _tabindexValue2.default)(frameElement) < 0) {
      return false;
    }

    if (!except.visible && (_platform2.default.is.BLINK || _platform2.default.is.WEBKIT) && !(0, _visible2.default)(frameElement)) {
      // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
      return false;
    }

    // Webkit and Blink don't consider anything in <object> tabbable
    // Blink fixed that fixed in Chrome 54, Opera 41
    var frameNodeName = frameElement.nodeName.toLowerCase();
    if (frameNodeName === 'object') {
      var isFixedBlink = _platform2.default.name === 'Chrome' && _platform2.default.majorVersion >= 54 || _platform2.default.name === 'Opera' && _platform2.default.majorVersion >= 41;

      if (_platform2.default.is.WEBKIT || _platform2.default.is.BLINK && !isFixedBlink) {
        return false;
      }
    }
  }

  var nodeName = element.nodeName.toLowerCase();
  var _tabindex = (0, _tabindexValue2.default)(element);
  var tabindex = _tabindex === null ? null : _tabindex >= 0;

  if (_platform2.default.is.EDGE && _platform2.default.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
    // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
    // if the element is in a nested browsing context
    return true;
  }

  var hasTabbableTabindexOrNone = tabindex !== false;
  var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;

  // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
  // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
  if (element.hasAttribute('contenteditable')) {
    // tabbing can still be disabled by explicitly providing [tabindex="-1"]
    return hasTabbableTabindexOrNone;
  }

  if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
    return false;
  }

  if (_platform2.default.is.WEBKIT && _platform2.default.is.IOS) {
    // iOS only considers a hand full of elements tabbable (keyboard focusable)
    // this holds true even with external keyboards
    var potentiallyTabbable = nodeName === 'input' && element.type === 'text' || element.type === 'password' || nodeName === 'select' || nodeName === 'textarea' || element.hasAttribute('contenteditable');

    if (!potentiallyTabbable) {
      var style = window.getComputedStyle(element, null);
      potentiallyTabbable = (0, _is.isUserModifyWritable)(style);
    }

    if (!potentiallyTabbable) {
      return false;
    }
  }

  if (nodeName === 'use' && _tabindex !== null) {
    if (_platform2.default.is.BLINK || _platform2.default.is.WEBKIT && _platform2.default.majorVersion === 9) {
      // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
      return true;
    }
  }

  if ((0, _elementMatches2.default)(element, 'svg a') && element.hasAttribute('xlink:href')) {
    if (hasTabbableTabindexOrNone) {
      // in Trident and Gecko SVGElement does not handle the tabIndex property properly
      return true;
    }

    if (element.focus && !supports.focusSvgNegativeTabindexAttribute) {
      // Firefox 51 and 52 treat any natively tabbable SVG element with
      // tabindex="-1" as tabbable and everything else as inert
      // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
      return true;
    }
  }

  if (nodeName === 'svg' && supports.focusSvgInIframe && hasTabbableTabindexOrNone) {
    return true;
  }

  if (_platform2.default.is.TRIDENT || _platform2.default.is.EDGE) {
    if (nodeName === 'svg') {
      if (supports.focusSvg) {
        // older Internet Explorers consider <svg> keyboard focusable
        // unless they have focsable="false", but then they wouldn't
        // be focusable and thus not even reach this filter
        return true;
      }

      // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
      return element.hasAttribute('focusable') || hasTabbableTabindex;
    }

    if (element.ownerSVGElement) {
      if (supports.focusSvgTabindexAttribute && hasTabbableTabindex) {
        return true;
      }

      // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
      return element.hasAttribute('focusable');
    }
  }
  if (element.tabIndex === undefined) {
    return Boolean(except.onlyTabbable);
  }

  if (nodeName === 'audio') {
    if (!element.hasAttribute('controls')) {
      // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
      return false;
    } else if (_platform2.default.is.BLINK) {
      // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
      return true;
    }
  }

  if (nodeName === 'video') {
    if (!element.hasAttribute('controls')) {
      if (_platform2.default.is.TRIDENT || _platform2.default.is.EDGE) {
        // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
        return false;
      }
    } else if (_platform2.default.is.BLINK || _platform2.default.is.GECKO) {
      // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
      return true;
    }
  }

  if (nodeName === 'object') {
    if (_platform2.default.is.BLINK || _platform2.default.is.WEBKIT) {
      // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
      return false;
    }
  }

  if (nodeName === 'iframe') {
    // In Internet Explorer all iframes are only focusable
    // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
    // Since we can't reliably investigate iframe documents because of the
    // SameOriginPolicy, we're declaring everything only focusable.
    return false;
  }

  if (!except.scrollable && _platform2.default.is.GECKO) {
    // Firefox considers scrollable containers keyboard focusable,
    // even though their tabIndex property is -1
    var _style = window.getComputedStyle(element, null);
    if ((0, _is.hasCssOverflowScroll)(_style)) {
      return hasTabbableTabindexOrNone;
    }
  }

  if (_platform2.default.is.TRIDENT || _platform2.default.is.EDGE) {
    // IE and Edge degrade <area> to script focusable, if the image
    // using the <map> has been given tabindex="-1"
    if (nodeName === 'area') {
      var img = (0, _imageMap.getImageOfArea)(element);
      if (img && (0, _tabindexValue2.default)(img) < 0) {
        return false;
      }
    }

    var _style2 = window.getComputedStyle(element, null);
    if ((0, _is.isUserModifyWritable)(_style2)) {
      // prevent being swallowed by the overzealous isScrollableContainer() below
      return element.tabIndex >= 0;
    }

    if (!except.flexbox && (0, _is.hasCssDisplayFlex)(_style2)) {
      if (_tabindex !== null) {
        return hasTabbableTabindex;
      }

      return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
    }

    // IE considers scrollable containers script focusable only,
    // even though their tabIndex property is 0
    if ((0, _is.isScrollableContainer)(element, nodeName)) {
      return false;
    }

    var parent = element.parentElement;
    if (parent) {
      var parentNodeName = parent.nodeName.toLowerCase();
      var parentStyle = window.getComputedStyle(parent, null);
      // IE considers scrollable bodies script focusable only,
      if ((0, _is.isScrollableContainer)(parent, nodeName, parentNodeName, parentStyle)) {
        return false;
      }

      // Children of focusable elements with display:flex are focusable in IE10-11,
      // even though their tabIndex property suggests otherwise
      if ((0, _is.hasCssDisplayFlex)(parentStyle)) {
        // value of tabindex takes precedence
        return hasTabbableTabindex;
      }
    }
  }

  // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
  return element.tabIndex >= 0;
}

// bind exceptions to an iterator callback
isTabbableRules.except = function () {
  var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isTabbable = function isTabbable(context) {
    return isTabbableRules({
      context: context,
      except: except
    });
  };

  isTabbable.rules = isTabbableRules;
  return isTabbable;
};

var isFocusRelevantWithoutFlexbox = _focusRelevant2.default.rules.except({ flexbox: true });
var isTabbableWithoutFlexbox = isTabbableRules.except({ flexbox: true });

// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({});
exports.default = isTabbable;
module.exports = exports['default'];
//# sourceMappingURL=tabbable.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/valid-area.js":
/*!************************************************!*\
  !*** ../node_modules/ally.js/is/valid-area.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var element = (0, _contextToElement2.default)({
    label: 'is/valid-area',
    context: context
  });

  var nodeName = element.nodeName.toLowerCase();
  if (nodeName !== 'area') {
    return false;
  }

  var hasTabindex = element.hasAttribute('tabindex');
  if (!supports.focusAreaTabindex && hasTabindex) {
    // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
    return false;
  }

  var img = (0, _imageMap.getImageOfArea)(element);
  if (!img || !(0, _visible2.default)(img)) {
    return false;
  }

  // Firefox only allows fully loaded images to reference image maps
  // https://stereochro.me/ideas/detecting-broken-images-js
  if (!supports.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
    return false;
  }

  // Firefox supports.can focus area elements even if they don't have an href attribute
  if (!supports.focusAreaWithoutHref && !element.href) {
    // Internet explorer supports.can focus area elements without href if either
    // the area element or the image element has a tabindex attribute
    return supports.focusAreaTabindex && hasTabindex || supports.focusAreaImgTabindex && img.hasAttribute('tabindex');
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  var childOfInteractive = (0, _parents2.default)({ context: img }).slice(1).some(function (_element) {
    var name = _element.nodeName.toLowerCase();
    return name === 'button' || name === 'a';
  });

  if (childOfInteractive) {
    return false;
  }

  return true;
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _visible = __webpack_require__(/*! ./visible */ "../node_modules/ally.js/is/visible.js");

var _visible2 = _interopRequireDefault(_visible);

var _parents = __webpack_require__(/*! ../get/parents */ "../node_modules/ally.js/get/parents.js");

var _parents2 = _interopRequireDefault(_parents);

var _imageMap = __webpack_require__(/*! ../util/image-map */ "../node_modules/ally.js/util/image-map.js");

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supports = void 0;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107

// determine if an <area> element is being properly used by and <img> via a <map>

module.exports = exports['default'];
//# sourceMappingURL=valid-area.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/valid-tabindex.js":
/*!****************************************************!*\
  !*** ../node_modules/ally.js/is/valid-tabindex.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;

  var element = (0, _contextToElement2.default)({
    label: 'is/valid-tabindex',
    resolveDocument: true,
    context: context
  });

  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  var hasTabindex = element.hasAttribute('tabindex');
  var hasTabIndex = element.hasAttribute('tabIndex');

  if (!hasTabindex && !hasTabIndex) {
    return false;
  }

  // older Firefox and Internet Explorer don't support tabindex on SVG elements
  var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
  if (isSvgElement && !supports.focusSvgTabindexAttribute) {
    return false;
  }

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  if (supports.focusInvalidTabindex) {
    return true;
  }

  // an element matches the tabindex selector even if its value is invalid
  var tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
  // IE11 parses tabindex="" as the value "-32768"
  // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
  if (tabindex === '-32768') {
    return false;
  }

  return Boolean(tabindex && validIntegerPattern.test(tabindex));
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// determine if an element's tabindex attribute has a valid value

var supports = void 0;

// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;

module.exports = exports['default'];
//# sourceMappingURL=valid-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/is/visible.js":
/*!*********************************************!*\
  !*** ../node_modules/ally.js/is/visible.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFindIndex = __webpack_require__(/*! ../util/array-find-index */ "../node_modules/ally.js/util/array-find-index.js");

var _arrayFindIndex2 = _interopRequireDefault(_arrayFindIndex);

var _parents = __webpack_require__(/*! ../get/parents */ "../node_modules/ally.js/get/parents.js");

var _parents2 = _interopRequireDefault(_parents);

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _getFrameElement = __webpack_require__(/*! ../util/get-frame-element */ "../node_modules/ally.js/util/get-frame-element.js");

var _getFrameElement2 = _interopRequireDefault(_getFrameElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage

// determine if an element is rendered
// NOTE: that does not mean an element is visible in the viewport, see util/visible-area

var notRenderedElementsPattern = /^(area)$/;

function computedStyle(element, property) {
  return window.getComputedStyle(element, null).getPropertyValue(property);
}

function notDisplayed(_path) {
  return _path.some(function (element) {
    // display:none is not visible (optimized away at layout)
    return computedStyle(element, 'display') === 'none';
  });
}

function notVisible(_path) {
  // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
  // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
  // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
  var hidden = (0, _arrayFindIndex2.default)(_path, function (element) {
    var visibility = computedStyle(element, 'visibility');
    return visibility === 'hidden' || visibility === 'collapse';
  });

  if (hidden === -1) {
    // there is no hidden element
    return false;
  }

  var visible = (0, _arrayFindIndex2.default)(_path, function (element) {
    return computedStyle(element, 'visibility') === 'visible';
  });

  if (visible === -1) {
    // there is no visible element (but a hidden element)
    return true;
  }

  if (hidden < visible) {
    // there is a hidden element and it's closer than the first visible element
    return true;
  }

  // there may be a hidden element, but the closest element is visible
  return false;
}

function collapsedParent(_path) {
  var offset = 1;
  if (_path[0].nodeName.toLowerCase() === 'summary') {
    offset = 2;
  }

  return _path.slice(offset).some(function (element) {
    // "content children" of a closed details element are not visible
    return element.nodeName.toLowerCase() === 'details' && element.open === false;
  });
}

function isVisibleRules() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      _ref$except = _ref.except,
      except = _ref$except === undefined ? {
    notRendered: false,
    cssDisplay: false,
    cssVisibility: false,
    detailsElement: false,
    browsingContext: false
  } : _ref$except;

  var element = (0, _contextToElement2.default)({
    label: 'is/visible',
    resolveDocument: true,
    context: context
  });

  var nodeName = element.nodeName.toLowerCase();
  if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
    return true;
  }

  var _path = (0, _parents2.default)({ context: element });

  // in Internet Explorer <audio> has a default display: none, where others have display: inline
  // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
  // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
  var isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
  if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
    return false;
  }

  if (!except.cssVisibility && notVisible(_path)) {
    return false;
  }

  if (!except.detailsElement && collapsedParent(_path)) {
    return false;
  }

  if (!except.browsingContext) {
    // elements within a browsing context are affected by the
    // browsing context host element's visibility and tabindex
    var frameElement = (0, _getFrameElement2.default)(element);
    var _isVisible = isVisibleRules.except(except);
    if (frameElement && !_isVisible(frameElement)) {
      return false;
    }
  }

  return true;
}

// bind exceptions to an iterator callback
isVisibleRules.except = function () {
  var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isVisible = function isVisible(context) {
    return isVisibleRules({
      context: context,
      except: except
    });
  };

  isVisible.rules = isVisibleRules;
  return isVisible;
};

// provide isVisible(context) as default iterator callback
var isVisible = isVisibleRules.except({});
exports.default = isVisible;
module.exports = exports['default'];
//# sourceMappingURL=visible.js.map

/***/ }),

/***/ "../node_modules/ally.js/maintain/disabled.js":
/*!****************************************************!*\
  !*** ../node_modules/ally.js/maintain/disabled.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/*
  Utility to make a sub-tree of the DOM inert. Inert means the elements cannot be interacted
  with and they cannot be focused via script, pointer or keyboard.

  inert attribute was [removed](https://html5.org/r/8536) [tweet by steve](https://twitter.com/stevefaulkner/status/443075900201259008)
  but definition of [inert subtrees](https://www.w3.org/html/wg/drafts/html/master/editing.html#inert-subtrees) remains.

  [implementation idea by Vasilis](https://codepen.io/vasilisvg/pen/scowI)
  [inert attribute polyfill by GoogleChrome](https://github.com/GoogleChrome/inert-polyfill)

  [Gecko Bug: Inert Attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=921504)
  [Chromium Bug: Inert Attribute](https://code.google.com/p/chromium/issues/detail?id=269846)
  [Chromium Bug: Inert Subtree](https://code.google.com/p/chromium/issues/detail?id=241699)
  [WebKit Bug: Inert Subtree](https://bugs.webkit.org/show_bug.cgi?id=110952)
*/

exports.default = function () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref2.context,
      filter = _ref2.filter;

  var service = new InertSubtree({ context: context, filter: filter });
  return { disengage: service.disengage };
};

var _nodeArray = __webpack_require__(/*! ../util/node-array */ "../node_modules/ally.js/util/node-array.js");

var _nodeArray2 = _interopRequireDefault(_nodeArray);

var _focusable = __webpack_require__(/*! ../query/focusable */ "../node_modules/ally.js/query/focusable.js");

var _focusable2 = _interopRequireDefault(_focusable);

var _disabled = __webpack_require__(/*! ../element/disabled */ "../node_modules/ally.js/element/disabled.js");

var _disabled2 = _interopRequireDefault(_disabled);

var _shadowMutations = __webpack_require__(/*! ../observe/shadow-mutations */ "../node_modules/ally.js/observe/shadow-mutations.js");

var _shadowMutations2 = _interopRequireDefault(_shadowMutations);

var _comparePosition = __webpack_require__(/*! ../util/compare-position */ "../node_modules/ally.js/util/compare-position.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function makeElementInert(element) {
  return (0, _disabled2.default)(element, true);
}

function undoElementInert(element) {
  return (0, _disabled2.default)(element, false);
}

var observerConfig = {
  attributes: true,
  childList: true,
  subtree: true,
  attributeFilter: ['tabindex', 'disabled', 'data-ally-disabled']
};

var InertSubtree = function () {
  function InertSubtree() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        context = _ref.context,
        filter = _ref.filter;

    _classCallCheck(this, InertSubtree);

    this._context = (0, _nodeArray2.default)(context || document.documentElement)[0];
    this._filter = (0, _nodeArray2.default)(filter);
    this._inertElementCache = [];

    this.disengage = this.disengage.bind(this);
    this.handleMutation = this.handleMutation.bind(this);
    this.renderInert = this.renderInert.bind(this);
    this.filterElements = this.filterElements.bind(this);
    this.filterParentElements = this.filterParentElements.bind(this);

    var focusable = (0, _focusable2.default)({
      context: this._context,
      includeContext: true,
      strategy: 'all'
    });

    this.renderInert(focusable);

    this.shadowObserver = (0, _shadowMutations2.default)({
      context: this._context,
      config: observerConfig,
      callback: function callback(mutations) {
        return mutations.forEach(_this.handleMutation);
      }
    });
  }

  _createClass(InertSubtree, [{
    key: 'disengage',
    value: function disengage() {
      if (!this._context) {
        return;
      }

      undoElementInert(this._context);
      this._inertElementCache.forEach(function (element) {
        return undoElementInert(element);
      });

      this._inertElementCache = null;
      this._filter = null;
      this._context = null;
      this.shadowObserver && this.shadowObserver.disengage();
      this.shadowObserver = null;
    }
  }, {
    key: 'listQueryFocusable',
    value: function listQueryFocusable(list) {
      return list
      // find all focusable elements within the given contexts
      .map(function (element) {
        return (0, _focusable2.default)({ context: element, includeContext: true, strategy: 'all' });
      })
      // flatten nested arrays
      .reduce(function (previous, current) {
        return previous.concat(current);
      }, []);
    }
  }, {
    key: 'renderInert',
    value: function renderInert(elements) {
      var _this2 = this;

      var makeInert = function makeInert(element) {
        _this2._inertElementCache.push(element);
        makeElementInert(element);
      };

      elements.filter(this.filterElements).filter(this.filterParentElements)
      // ignore elements that already are disabled
      // so we don't enable them on disengage()
      .filter(function (element) {
        return !(0, _disabled2.default)(element);
      }).forEach(makeInert);
    }
  }, {
    key: 'filterElements',
    value: function filterElements(element) {
      // ignore elements within the exempted sub-trees
      var isParentOfElement = (0, _comparePosition.getParentComparator)({ element: element, includeSelf: true });
      return !this._filter.some(isParentOfElement);
    }
  }, {
    key: 'filterParentElements',
    value: function filterParentElements(element) {
      // ignore ancestors of the exempted sub-trees
      var isParentOfElement = (0, _comparePosition.getParentComparator)({ parent: element });
      return !this._filter.some(isParentOfElement);
    }
  }, {
    key: 'handleMutation',
    value: function handleMutation(mutation) {
      if (mutation.type === 'childList') {
        var addedElements = (0, _nodeArray2.default)(mutation.addedNodes).filter(function (element) {
          return element.nodeType === Node.ELEMENT_NODE;
        });
        if (!addedElements.length) {
          return;
        }

        var addedFocusableElements = this.listQueryFocusable(addedElements);
        this.renderInert(addedFocusableElements);
      } else if (mutation.type === 'attributes') {
        this.renderInert([mutation.target]);
      }
    }
  }]);

  return InertSubtree;
}();

module.exports = exports['default'];
//# sourceMappingURL=disabled.js.map

/***/ }),

/***/ "../node_modules/ally.js/maintain/tab-focus.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/maintain/tab-focus.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context;

  if (!context) {
    context = document.documentElement;
  }

  // Make sure the supports tests are run before intercepting the Tab key,
  // or IE10 and IE11 will fail to process the first Tab key event. Not
  // limiting this warm-up to IE because it may be a problem elsewhere, too.
  (0, _tabsequence2.default)();

  return (0, _key2.default)({
    // Safari on OSX may require ALT+TAB to reach links,
    // see https://github.com/medialize/ally.js/issues/146
    '?alt+?shift+tab': function altShiftTab(event) {
      // we're completely taking over the Tab key handling
      event.preventDefault();

      var sequence = (0, _tabsequence2.default)({
        context: context
      });

      var backward = event.shiftKey;
      var first = sequence[0];
      var last = sequence[sequence.length - 1];

      // wrap around first to last, last to first
      var source = backward ? first : last;
      var target = backward ? last : first;
      if ((0, _activeElement2.default)(source)) {
        target.focus();
        return;
      }

      // find current position in tabsequence
      var currentIndex = void 0;
      var found = sequence.some(function (element, index) {
        if (!(0, _activeElement2.default)(element)) {
          return false;
        }

        currentIndex = index;
        return true;
      });

      if (!found) {
        // redirect to first as we're not in our tabsequence
        first.focus();
        return;
      }

      // shift focus to previous/next element in the sequence
      var offset = backward ? -1 : 1;
      sequence[currentIndex + offset].focus();
    }
  });
};

var _activeElement = __webpack_require__(/*! ../is/active-element */ "../node_modules/ally.js/is/active-element.js");

var _activeElement2 = _interopRequireDefault(_activeElement);

var _tabsequence = __webpack_require__(/*! ../query/tabsequence */ "../node_modules/ally.js/query/tabsequence.js");

var _tabsequence2 = _interopRequireDefault(_tabsequence);

var _key = __webpack_require__(/*! ../when/key */ "../node_modules/ally.js/when/key.js");

var _key2 = _interopRequireDefault(_key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=tab-focus.js.map

/***/ }),

/***/ "../node_modules/ally.js/map/keycode.js":
/*!**********************************************!*\
  !*** ../node_modules/ally.js/map/keycode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)

var keycode = {
  // Element Focus
  tab: 9,

  // Navigation
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  pageUp: 33,
  'page-up': 33,
  pageDown: 34,
  'page-down': 34,
  end: 35,
  home: 36,

  // Action
  enter: 13,
  escape: 27,
  space: 32,

  // Modifier
  shift: 16,
  capsLock: 20,
  'caps-lock': 20,
  ctrl: 17,
  alt: 18,
  meta: 91,
  // in firefox: 224
  // on mac (chrome): meta-left=91, meta-right=93
  // on win (IE11): meta-left=91, meta-right=92
  pause: 19,

  // Content Manipulation
  insert: 45,
  'delete': 46,
  backspace: 8,

  // the same logical key may be identified through different keyCodes
  _alias: {
    91: [92, 93, 224]
  }
};

// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for (var n = 1; n < 26; n++) {
  keycode['f' + n] = n + 111;
}

// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for (var _n = 0; _n < 10; _n++) {
  var code = _n + 48;
  var numCode = _n + 96;
  keycode[_n] = code;
  keycode['num-' + _n] = numCode;
  keycode._alias[code] = [numCode];
}

// Latin characters (65 - 90)
for (var _n2 = 0; _n2 < 26; _n2++) {
  var _code = _n2 + 65;
  var name = String.fromCharCode(_code).toLowerCase();
  keycode[name] = _code;
}

exports.default = keycode;
module.exports = exports['default'];
//# sourceMappingURL=keycode.js.map

/***/ }),

/***/ "../node_modules/ally.js/observe/shadow-mutations.js":
/*!***********************************************************!*\
  !*** ../node_modules/ally.js/observe/shadow-mutations.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref2.context,
      callback = _ref2.callback,
      config = _ref2.config;

  if (typeof callback !== 'function') {
    throw new TypeError('observe/shadow-mutations requires options.callback to be a function');
  }

  if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
    throw new TypeError('observe/shadow-mutations requires options.config to be an object');
  }

  if (!window.MutationObserver) {
    // not supporting IE10 via Mutation Events, because they're too expensive
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events
    return {
      disengage: function disengage() {}
    };
  }

  var element = (0, _contextToElement2.default)({
    label: 'observe/shadow-mutations',
    resolveDocument: true,
    defaultToDocument: true,
    context: context
  });

  var service = new ShadowMutationObserver({
    context: element,
    callback: callback,
    config: config
  });

  return {
    disengage: service.disengage
  };
};

var _nodeArray = __webpack_require__(/*! ../util/node-array */ "../node_modules/ally.js/util/node-array.js");

var _nodeArray2 = _interopRequireDefault(_nodeArray);

var _shadowHosts = __webpack_require__(/*! ../query/shadow-hosts */ "../node_modules/ally.js/query/shadow-hosts.js");

var _shadowHosts2 = _interopRequireDefault(_shadowHosts);

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var shadowObserverConfig = {
  childList: true,
  subtree: true
};

var ShadowMutationObserver = function () {
  function ShadowMutationObserver() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        context = _ref.context,
        callback = _ref.callback,
        config = _ref.config;

    _classCallCheck(this, ShadowMutationObserver);

    this.config = config;

    this.disengage = this.disengage.bind(this);

    this.clientObserver = new MutationObserver(callback);
    this.hostObserver = new MutationObserver(function (mutations) {
      return mutations.forEach(_this.handleHostMutation, _this);
    });

    this.observeContext(context);
    this.observeShadowHosts(context);
  }

  _createClass(ShadowMutationObserver, [{
    key: 'disengage',
    value: function disengage() {
      this.clientObserver && this.clientObserver.disconnect();
      this.clientObserver = null;
      this.hostObserver && this.hostObserver.disconnect();
      this.hostObserver = null;
    }
  }, {
    key: 'observeShadowHosts',
    value: function observeShadowHosts(context) {
      var _this2 = this;

      var hosts = (0, _shadowHosts2.default)({
        context: context
      });

      hosts.forEach(function (element) {
        return _this2.observeContext(element.shadowRoot);
      });
    }
  }, {
    key: 'observeContext',
    value: function observeContext(context) {
      this.clientObserver.observe(context, this.config);
      this.hostObserver.observe(context, shadowObserverConfig);
    }
  }, {
    key: 'handleHostMutation',
    value: function handleHostMutation(mutation) {
      if (mutation.type !== 'childList') {
        return;
      }

      var addedElements = (0, _nodeArray2.default)(mutation.addedNodes).filter(function (element) {
        return element.nodeType === Node.ELEMENT_NODE;
      });
      addedElements.forEach(this.observeShadowHosts, this);
    }
  }]);

  return ShadowMutationObserver;
}();

module.exports = exports['default'];
//# sourceMappingURL=shadow-mutations.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/focusable.js":
/*!**************************************************!*\
  !*** ../node_modules/ally.js/query/focusable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      includeContext = _ref.includeContext,
      includeOnlyTabbable = _ref.includeOnlyTabbable,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;

  var element = (0, _contextToElement2.default)({
    label: 'query/focusable',
    resolveDocument: true,
    defaultToDocument: true,
    context: context
  });

  var options = {
    context: element,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy
  };

  if (strategy === 'quick') {
    return (0, _focusable4.default)(options);
  } else if (strategy === 'strict' || strategy === 'all') {
    return (0, _focusable2.default)(options);
  }

  throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
};

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _focusable = __webpack_require__(/*! ./focusable.strict */ "../node_modules/ally.js/query/focusable.strict.js");

var _focusable2 = _interopRequireDefault(_focusable);

var _focusable3 = __webpack_require__(/*! ./focusable.quick */ "../node_modules/ally.js/query/focusable.quick.js");

var _focusable4 = _interopRequireDefault(_focusable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard

module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/focusable.quick.js":
/*!********************************************************!*\
  !*** ../node_modules/ally.js/query/focusable.quick.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = queryFocusableQuick;

var _focusable = __webpack_require__(/*! ../selector/focusable */ "../node_modules/ally.js/selector/focusable.js");

var _focusable2 = _interopRequireDefault(_focusable);

var _focusable3 = __webpack_require__(/*! ../is/focusable */ "../node_modules/ally.js/is/focusable.js");

var _focusable4 = _interopRequireDefault(_focusable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard

function queryFocusableQuick() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      includeContext = _ref.includeContext,
      includeOnlyTabbable = _ref.includeOnlyTabbable;

  var _selector = (0, _focusable2.default)();
  var elements = context.querySelectorAll(_selector);
  // the selector potentially matches more than really is focusable

  var _isFocusable = _focusable4.default.rules.except({
    onlyTabbable: includeOnlyTabbable
  });

  var result = [].filter.call(elements, _isFocusable);

  // add context if requested and focusable
  if (includeContext && _isFocusable(context)) {
    result.unshift(context);
  }

  return result;
}
module.exports = exports['default'];
//# sourceMappingURL=focusable.quick.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/focusable.strict.js":
/*!*********************************************************!*\
  !*** ../node_modules/ally.js/query/focusable.strict.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = queryFocusableStrict;

var _focusable = __webpack_require__(/*! ../is/focusable */ "../node_modules/ally.js/is/focusable.js");

var _focusable2 = _interopRequireDefault(_focusable);

var _focusRelevant = __webpack_require__(/*! ../is/focus-relevant */ "../node_modules/ally.js/is/focus-relevant.js");

var _focusRelevant2 = _interopRequireDefault(_focusRelevant);

var _getDocument = __webpack_require__(/*! ../util/get-document */ "../node_modules/ally.js/util/get-document.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFilter(condition) {
  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  var filter = function filter(node) {
    if (node.shadowRoot) {
      // return ShadowRoot elements regardless of them being focusable,
      // so they can be walked recursively later
      return NodeFilter.FILTER_ACCEPT;
    }

    if (condition(node)) {
      // finds elements that could have been found by document.querySelectorAll()
      return NodeFilter.FILTER_ACCEPT;
    }

    return NodeFilter.FILTER_SKIP;
  };
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  filter.acceptNode = filter;
  return filter;
}
// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard

var PossiblyFocusableFilter = createFilter(_focusRelevant2.default);

function queryFocusableStrict() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      includeContext = _ref.includeContext,
      includeOnlyTabbable = _ref.includeOnlyTabbable,
      strategy = _ref.strategy;

  if (!context) {
    context = document.documentElement;
  }

  var _isFocusable = _focusable2.default.rules.except({
    onlyTabbable: includeOnlyTabbable
  });

  var _document = (0, _getDocument2.default)(context);
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
  var walker = _document.createTreeWalker(
  // root element to start search in
  context,
  // element type filter
  NodeFilter.SHOW_ELEMENT,
  // custom NodeFilter filter
  strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable),
  // deprecated, but IE requires it
  false);

  var list = [];

  while (walker.nextNode()) {
    if (walker.currentNode.shadowRoot) {
      if (_isFocusable(walker.currentNode)) {
        list.push(walker.currentNode);
      }

      list = list.concat(queryFocusableStrict({
        context: walker.currentNode.shadowRoot,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
      }));
    } else {
      list.push(walker.currentNode);
    }
  }

  // add context if requested and focusable
  if (includeContext) {
    if (strategy === 'all') {
      if ((0, _focusRelevant2.default)(context)) {
        list.unshift(context);
      }
    } else if (_isFocusable(context)) {
      list.unshift(context);
    }
  }

  return list;
}
module.exports = exports['default'];
//# sourceMappingURL=focusable.strict.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/shadow-hosts.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/query/shadow-hosts.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = queryShadowHosts;

var _contextToElement = __webpack_require__(/*! ../util/context-to-element */ "../node_modules/ally.js/util/context-to-element.js");

var _contextToElement2 = _interopRequireDefault(_contextToElement);

var _getDocument = __webpack_require__(/*! ../util/get-document */ "../node_modules/ally.js/util/get-document.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
var filter = function filter(node) {
  if (node.shadowRoot) {
    return NodeFilter.FILTER_ACCEPT;
  }

  return NodeFilter.FILTER_SKIP;
};
// IE requires a function, Browsers require {acceptNode: function}
// see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
filter.acceptNode = filter;

function queryShadowHosts() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context;

  var element = (0, _contextToElement2.default)({
    label: 'query/shadow-hosts',
    resolveDocument: true,
    defaultToDocument: true,
    context: context
  });

  var _document = (0, _getDocument2.default)(context);
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
  var walker = _document.createTreeWalker(
  // root element to start search in
  element,
  // element type filter
  NodeFilter.SHOW_ELEMENT,
  // custom NodeFilter filter
  filter,
  // deprecated, but IE requires it
  false);

  var list = [];

  if (element.shadowRoot) {
    // TreeWalker does not run the filter on the context element
    list.push(element);
    list = list.concat(queryShadowHosts({
      context: element.shadowRoot
    }));
  }

  while (walker.nextNode()) {
    list.push(walker.currentNode);
    list = list.concat(queryShadowHosts({
      context: walker.currentNode.shadowRoot
    }));
  }

  return list;
}
module.exports = exports['default'];
//# sourceMappingURL=shadow-hosts.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/tabbable.js":
/*!*************************************************!*\
  !*** ../node_modules/ally.js/query/tabbable.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      includeContext = _ref.includeContext,
      includeOnlyTabbable = _ref.includeOnlyTabbable,
      strategy = _ref.strategy;

  var _isTabbable = _tabbable2.default.rules.except({
    onlyTabbable: includeOnlyTabbable
  });

  return (0, _focusable2.default)({
    context: context,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy
  }).filter(_isTabbable);
};

var _focusable = __webpack_require__(/*! ./focusable */ "../node_modules/ally.js/query/focusable.js");

var _focusable2 = _interopRequireDefault(_focusable);

var _tabbable = __webpack_require__(/*! ../is/tabbable */ "../node_modules/ally.js/is/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
// https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// https://www.w3.org/WAI/PF/aria-practices/#keyboard
//# sourceMappingURL=tabbable.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/tabsequence.js":
/*!****************************************************!*\
  !*** ../node_modules/ally.js/query/tabsequence.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      context = _ref.context,
      includeContext = _ref.includeContext,
      includeOnlyTabbable = _ref.includeOnlyTabbable,
      strategy = _ref.strategy;

  if (!supports) {
    supports = (0, _supports3.default)();
  }

  var _context = (0, _nodeArray2.default)(context)[0] || document.documentElement;
  var elements = (0, _tabbable2.default)({
    context: _context,
    includeContext: includeContext,
    includeOnlyTabbable: includeOnlyTabbable,
    strategy: strategy
  });

  if (document.body.createShadowRoot && _platform2.default.is.BLINK) {
    // sort tabindex localized to shadow dom
    // see https://github.com/medialize/ally.js/issues/6
    elements = (0, _tabsequence4.default)(elements, _context, sortElements);
  } else {
    elements = sortElements(elements, _context);
  }

  if (includeContext) {
    // if we include the context itself, it has to be the first
    // element of the sequence
    elements = moveContextToBeginning(elements, _context);
  }

  return elements;
};

var _tabbable = __webpack_require__(/*! ./tabbable */ "../node_modules/ally.js/query/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

var _nodeArray = __webpack_require__(/*! ../util/node-array */ "../node_modules/ally.js/util/node-array.js");

var _nodeArray2 = _interopRequireDefault(_nodeArray);

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

var _tabsequence = __webpack_require__(/*! ./tabsequence.sort-area */ "../node_modules/ally.js/query/tabsequence.sort-area.js");

var _tabsequence2 = _interopRequireDefault(_tabsequence);

var _tabsequence3 = __webpack_require__(/*! ./tabsequence.sort-shadowed */ "../node_modules/ally.js/query/tabsequence.sort-shadowed.js");

var _tabsequence4 = _interopRequireDefault(_tabsequence3);

var _tabsequence5 = __webpack_require__(/*! ./tabsequence.sort-tabindex */ "../node_modules/ally.js/query/tabsequence.sort-tabindex.js");

var _tabsequence6 = _interopRequireDefault(_tabsequence5);

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supports = void 0;
// https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// https://www.w3.org/WAI/PF/aria-practices/#keyboard

function moveContextToBeginning(elements, context) {
  var pos = elements.indexOf(context);
  if (pos > 0) {
    var tmp = elements.splice(pos, 1);
    return tmp.concat(elements);
  }

  return elements;
}

function sortElements(elements, _context) {
  if (supports.tabsequenceAreaAtImgPosition) {
    // Some browsers sort <area> in DOM order, some place the <area>s
    // where the <img> referecing them would've been in DOM order.
    // https://github.com/medialize/ally.js/issues/5
    elements = (0, _tabsequence2.default)(elements, _context);
  }

  elements = (0, _tabsequence6.default)(elements);
  return elements;
}

module.exports = exports['default'];
//# sourceMappingURL=tabsequence.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/tabsequence.sort-area.js":
/*!**************************************************************!*\
  !*** ../node_modules/ally.js/query/tabsequence.sort-area.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// move <area> elements to the location of the <img> elements that reference them

exports.default = function (elements, context) {
  // images - unless they are focusable themselves, likely not
  // part of the elements list, so we'll have to find them and
  // sort them into the elements list manually
  var usemaps = context.querySelectorAll('img[usemap]');
  var maps = new Maps(context);

  // remove all <area> elements from the elements list,
  // but put them the map for later retrieval
  var _elements = maps.extractAreasFromList(elements);

  if (!usemaps.length) {
    // the context does not contain any <area>s so no need
    // to replace anything, just remove any maps
    return _elements;
  }

  return (0, _mergeDomOrder2.default)({
    list: _elements,
    elements: usemaps,
    resolveElement: function resolveElement(image) {
      var name = image.getAttribute('usemap').slice(1);
      return maps.getAreasFor(name);
    }
  });
};

var _tabbable = __webpack_require__(/*! ./tabbable */ "../node_modules/ally.js/query/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

var _mergeDomOrder = __webpack_require__(/*! ../util/merge-dom-order */ "../node_modules/ally.js/util/merge-dom-order.js");

var _mergeDomOrder2 = _interopRequireDefault(_mergeDomOrder);

var _getDocument = __webpack_require__(/*! ../util/get-document */ "../node_modules/ally.js/util/get-document.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

var _imageMap = __webpack_require__(/*! ../util/image-map */ "../node_modules/ally.js/util/image-map.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Maps = function () {
  function Maps(context) {
    _classCallCheck(this, Maps);

    this._document = (0, _getDocument2.default)(context);
    this.maps = {};
  }

  _createClass(Maps, [{
    key: 'getAreasFor',
    value: function getAreasFor(name) {
      if (!this.maps[name]) {
        // the map is not defined within the context, so we
        // have to go find it elsewhere in the document
        this.addMapByName(name);
      }

      return this.maps[name];
    }
  }, {
    key: 'addMapByName',
    value: function addMapByName(name) {
      var map = (0, _imageMap.getMapByName)(name, this._document);
      if (!map) {
        // if there is no map, the img[usemap] wasn't doing anything anyway
        return;
      }

      this.maps[map.name] = (0, _tabbable2.default)({ context: map });
    }
  }, {
    key: 'extractAreasFromList',
    value: function extractAreasFromList(elements) {
      // remove all <area> elements from the elements list,
      // but put them the map for later retrieval
      return elements.filter(function (element) {
        var nodeName = element.nodeName.toLowerCase();
        if (nodeName !== 'area') {
          return true;
        }

        var map = element.parentNode;
        if (!this.maps[map.name]) {
          this.maps[map.name] = [];
        }

        this.maps[map.name].push(element);
        return false;
      }, this);
    }
  }]);

  return Maps;
}();

module.exports = exports['default'];
//# sourceMappingURL=tabsequence.sort-area.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/tabsequence.sort-shadowed.js":
/*!******************************************************************!*\
  !*** ../node_modules/ally.js/query/tabsequence.sort-shadowed.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (elements, context, sortElements) {
  var shadows = new Shadows(context, sortElements);
  var _elements = shadows.extractElements(elements);

  if (_elements.length === elements.length) {
    // no shadowed content found, no need to continue
    return sortElements(elements);
  }

  return shadows.sort(_elements);
};

var _shadowHost = __webpack_require__(/*! ../get/shadow-host */ "../node_modules/ally.js/get/shadow-host.js");

var _shadowHost2 = _interopRequireDefault(_shadowHost);

var _mergeDomOrder = __webpack_require__(/*! ../util/merge-dom-order */ "../node_modules/ally.js/util/merge-dom-order.js");

var _mergeDomOrder2 = _interopRequireDefault(_mergeDomOrder);

var _tabindexValue = __webpack_require__(/*! ../util/tabindex-value */ "../node_modules/ally.js/util/tabindex-value.js");

var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shadows = function () {
  function Shadows(context, sortElements) {
    _classCallCheck(this, Shadows);

    // document context we're working with
    this.context = context;
    // callback that sorts an array of elements
    this.sortElements = sortElements;
    // reference to create unique IDs for each ShadowHost
    this.hostCounter = 1;
    // reference map for child-ShadowHosts of a ShadowHost
    this.inHost = {};
    // reference map for child-ShadowHost of the document
    this.inDocument = [];
    // reference map for ShadowHosts
    this.hosts = {};
    // reference map for tabbable elements of a ShadowHost
    this.elements = {};
  }

  // remember which hosts we have to sort within later


  _createClass(Shadows, [{
    key: '_registerHost',
    value: function _registerHost(host) {
      if (host._sortingId) {
        return;
      }

      // make the ShadowHost identifiable (see cleanup() for undo)
      host._sortingId = 'shadow-' + this.hostCounter++;
      this.hosts[host._sortingId] = host;

      // hosts may contain other hosts
      var parentHost = (0, _shadowHost2.default)({ context: host });
      if (parentHost) {
        this._registerHost(parentHost);
        this._registerHostParent(host, parentHost);
      } else {
        this.inDocument.push(host);
      }
    }

    // remember which host is the child of which other host

  }, {
    key: '_registerHostParent',
    value: function _registerHostParent(host, parent) {
      if (!this.inHost[parent._sortingId]) {
        this.inHost[parent._sortingId] = [];
      }

      this.inHost[parent._sortingId].push(host);
    }

    // remember which elements a host contains

  }, {
    key: '_registerElement',
    value: function _registerElement(element, host) {
      if (!this.elements[host._sortingId]) {
        this.elements[host._sortingId] = [];
      }

      this.elements[host._sortingId].push(element);
    }

    // remove shadowed elements from the sequence and register
    // the ShadowHosts they belong to so we know what to sort
    // later on

  }, {
    key: 'extractElements',
    value: function extractElements(elements) {
      return elements.filter(function (element) {
        var host = (0, _shadowHost2.default)({ context: element });
        if (!host) {
          return true;
        }

        this._registerHost(host);
        this._registerElement(element, host);
        return false;
      }, this);
    }

    // inject hosts into the sequence, sort everything,
    // and recoursively replace hosts by its descendants

  }, {
    key: 'sort',
    value: function sort(elements) {
      var _elements = this._injectHosts(elements);
      _elements = this._replaceHosts(_elements);
      this._cleanup();
      return _elements;
    }

    // merge ShadowHosts into the element lists of other ShadowHosts
    // or the document, then sort the individual lists

  }, {
    key: '_injectHosts',
    value: function _injectHosts(elements) {
      Object.keys(this.hosts).forEach(function (_sortingId) {
        var _list = this.elements[_sortingId];
        var _elements = this.inHost[_sortingId];
        var _context = this.hosts[_sortingId].shadowRoot;
        this.elements[_sortingId] = this._merge(_list, _elements, _context);
      }, this);

      return this._merge(elements, this.inDocument, this.context);
    }
  }, {
    key: '_merge',
    value: function _merge(list, elements, context) {
      var merged = (0, _mergeDomOrder2.default)({
        list: list,
        elements: elements
      });

      return this.sortElements(merged, context);
    }
  }, {
    key: '_replaceHosts',
    value: function _replaceHosts(elements) {
      return (0, _mergeDomOrder2.default)({
        list: elements,
        elements: this.inDocument,
        resolveElement: this._resolveHostElement.bind(this)
      });
    }
  }, {
    key: '_resolveHostElement',
    value: function _resolveHostElement(host) {
      var merged = (0, _mergeDomOrder2.default)({
        list: this.elements[host._sortingId],
        elements: this.inHost[host._sortingId],
        resolveElement: this._resolveHostElement.bind(this)
      });

      var _tabindex = (0, _tabindexValue2.default)(host);
      if (_tabindex !== null && _tabindex > -1) {
        return [host].concat(merged);
      }

      return merged;
    }
  }, {
    key: '_cleanup',
    value: function _cleanup() {
      // remove those identifers we put on the ShadowHost to avoid using Map()
      Object.keys(this.hosts).forEach(function (key) {
        delete this.hosts[key]._sortingId;
      }, this);
    }
  }]);

  return Shadows;
}();

module.exports = exports['default'];
//# sourceMappingURL=tabsequence.sort-shadowed.js.map

/***/ }),

/***/ "../node_modules/ally.js/query/tabsequence.sort-tabindex.js":
/*!******************************************************************!*\
  !*** ../node_modules/ally.js/query/tabsequence.sort-tabindex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (elements) {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.tabIndex
  // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
  // elements with a positive tabIndex:
  //   Elements that have identical tabIndexes should be navigated in the order they appear.
  //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.

  // NOTE: sort implementation may be unstable and thus mess up DOM order,
  // that's why we build a map that's being sorted instead. If we were able to rely
  // on a stable sorting algorithm, sortTabindex() could be as simple as
  // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
  // at this time Chrome does not use a stable sorting algorithm
  // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability

  // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
  // https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

  var map = {};
  var indexes = [];
  var normal = elements.filter(function (element) {
    // in Trident and Gecko SVGElement does not know about the tabIndex property
    var tabIndex = element.tabIndex;
    if (tabIndex === undefined) {
      tabIndex = (0, _tabindexValue2.default)(element);
    }

    // extract elements that don't need sorting
    if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
      return true;
    }

    if (!map[tabIndex]) {
      // create sortable bucket for dom-order-preservation of elements with the same tabIndex
      map[tabIndex] = [];
      // maintain a list of unique tabIndexes
      indexes.push(tabIndex);
    }

    // sort element into the proper bucket
    map[tabIndex].push(element);
    // element moved to sorting map, so not "normal" anymore
    return false;
  });

  // sort the tabindex ascending,
  // then resolve them to their appropriate buckets,
  // then flatten the array of arrays to an array
  var _elements = indexes.sort().map(function (tabIndex) {
    return map[tabIndex];
  }).reduceRight(function (previous, current) {
    return current.concat(previous);
  }, normal);

  return _elements;
};

var _tabindexValue = __webpack_require__(/*! ../util/tabindex-value */ "../node_modules/ally.js/util/tabindex-value.js");

var _tabindexValue2 = _interopRequireDefault(_tabindexValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=tabsequence.sort-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/selector/focusable.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/selector/focusable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (!supports) {
    supports = (0, _supports3.default)();
  }

  if (typeof selector === 'string') {
    return selector;
  }

  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  selector = ''
  // IE11 supports.can focus <table> and <td>
  + (supports.focusTable ? 'table, td,' : '')
  // IE11 supports.can focus <fieldset>
  + (supports.focusFieldset ? 'fieldset,' : '')
  // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
  // svg a[*|href] does not match in IE9, but since we're filtering
  // through is/focusable we can include all <a> from SVG
  + 'svg a,'
  // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
  // navigational elements
  + 'a[href],'
  // validity determined by is/valid-area.js
  + 'area[href],'
  // validity determined by is/disabled.js
  + 'input, select, textarea, button,'
  // browsing context containers
  + 'iframe, object, embed,'
  // interactive content
  + 'keygen,' + (supports.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports.focusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports.focusSummary ? 'summary,' : '')
  // validity determined by is/valid-tabindex.js
  + '[tabindex],'
  // editing hosts
  + '[contenteditable]';

  // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
  selector = (0, _selectInShadows2.default)(selector);

  return selector;
};

var _selectInShadows = __webpack_require__(/*! ../util/select-in-shadows */ "../node_modules/ally.js/util/select-in-shadows.js");

var _selectInShadows2 = _interopRequireDefault(_selectInShadows);

var _supports2 = __webpack_require__(/*! ../supports/supports */ "../node_modules/ally.js/supports/supports.js");

var _supports3 = _interopRequireDefault(_supports2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: this selector MUST *never* be used directly,
// always go through query/focusable or is/focusable.js
// there are too many edge cases that they could be covered in
// a simple CSS selector…

var supports = void 0;

var selector = void 0;

module.exports = exports['default'];
//# sourceMappingURL=focusable.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/css-shadow-piercing-deep-combinator.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/ally.js/supports/css-shadow-piercing-deep-combinator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var combinator = void 0;

  // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
  // https://code.google.com/p/chromium/issues/detail?id=446051
  try {
    document.querySelector('html >>> :first-child');
    combinator = '>>>';
  } catch (noArrowArrowArrow) {
    try {
      // old syntax supported at least up to Chrome 41
      // https://code.google.com/p/chromium/issues/detail?id=446051
      document.querySelector('html /deep/ :first-child');
      combinator = '/deep/';
    } catch (noDeep) {
      combinator = '';
    }
  }

  return combinator;
};

module.exports = exports['default'];
//# sourceMappingURL=css-shadow-piercing-deep-combinator.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/detect-focus.js":
/*!********************************************************!*\
  !*** ../node_modules/ally.js/supports/detect-focus.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tests) {
  var data = before();

  var results = {};
  Object.keys(tests).map(function (key) {
    results[key] = test(data, tests[key]);
  });

  after(data);
  return results;
};

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function before() {
  var data = {
    // remember what had focus to restore after test
    activeElement: document.activeElement,
    // remember scroll positions to restore after test
    windowScrollTop: window.scrollTop,
    windowScrollLeft: window.scrollLeft,
    bodyScrollTop: document.body.scrollTop,
    bodyScrollLeft: document.body.scrollLeft
  };

  // wrap tests in an element hidden from screen readers to prevent them
  // from announcing focus, which can be quite irritating to the user
  var iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
  iframe.setAttribute('aria-live', 'off');
  iframe.setAttribute('aria-busy', 'true');
  iframe.setAttribute('aria-hidden', 'true');
  document.body.appendChild(iframe);

  var _window = iframe.contentWindow;
  var _document = _window.document;

  _document.open();
  _document.close();
  var wrapper = _document.createElement('div');
  _document.body.appendChild(wrapper);

  data.iframe = iframe;
  data.wrapper = wrapper;
  data.window = _window;
  data.document = _document;

  return data;
}

// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
  // make sure we operate on a clean slate
  data.wrapper.innerHTML = '';
  // create dummy element to test focusability of
  var element = typeof options.element === 'string' ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
  // allow callback to further specify dummy element
  // and optionally define element to focus
  var focus = options.mutate && options.mutate(element, data.wrapper, data.document);
  if (!focus && focus !== false) {
    focus = element;
  }
  // element needs to be part of the DOM to be focusable
  !element.parentNode && data.wrapper.appendChild(element);
  // test if the element with invalid tabindex can be focused
  focus && focus.focus && focus.focus();
  // validate test's result
  return options.validate ? options.validate(element, focus, data.document) : data.document.activeElement === focus;
}

function after(data) {
  // restore focus to what it was before test and cleanup
  if (data.activeElement === document.body) {
    document.activeElement && document.activeElement.blur && document.activeElement.blur();
    if (_platform2.default.is.IE10) {
      // IE10 does not redirect focus to <body> when the activeElement is removed
      document.body.focus();
    }
  } else {
    data.activeElement && data.activeElement.focus && data.activeElement.focus();
  }

  document.body.removeChild(data.iframe);

  // restore scroll position
  window.scrollTop = data.windowScrollTop;
  window.scrollLeft = data.windowScrollLeft;
  document.body.scrollTop = data.bodyScrollTop;
  document.body.scrollLeft = data.bodyScrollLeft;
}

module.exports = exports['default'];
//# sourceMappingURL=detect-focus.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-area-img-tabindex.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-area-img-tabindex.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./media/gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + _gif2.default + '">';

    return element.querySelector('area');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-area-img-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-area-tabindex.js":
/*!***************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-area-tabindex.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./media/gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + _gif2.default + '">';

    return false;
  },
  validate: function validate(element, focusTarget, _document) {
    if (_platform2.default.is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true;
    }

    var focus = element.querySelector('area');
    focus.focus();
    return _document.activeElement === focus;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-area-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-area-without-href.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-area-without-href.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./media/gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + _gif2.default + '">';

    return element.querySelector('area');
  },
  validate: function validate(element, focusTarget, _document) {
    if (_platform2.default.is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true;
    }

    return _document.activeElement === focusTarget;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-area-without-href.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-audio-without-controls.js":
/*!************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-audio-without-controls.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mp = __webpack_require__(/*! ./media/mp3 */ "../node_modules/ally.js/supports/media/mp3.js");

var _mp2 = _interopRequireDefault(_mp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'can-focus-audio-without-controls',
  element: 'audio',
  mutate: function mutate(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _mp2.default);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-audio-without-controls.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-broken-image-map.js":
/*!******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-broken-image-map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./media/gif.invalid */ "../node_modules/ally.js/supports/media/gif.invalid.js");

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + _gif2.default + '">';

    return element.querySelector('area');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-broken-image-map.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-children-of-focusable-flexbox.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-children-of-focusable-flexbox.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Children of focusable elements with display:flex are focusable in IE10-11
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '-1');
    element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
    element.innerHTML = '<span style="display: block;">hello</span>';
    return element.querySelector('span');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-children-of-focusable-flexbox.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-fieldset-disabled.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-fieldset-disabled.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
exports.default = {
  element: 'fieldset',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', 0);
    element.setAttribute('disabled', 'disabled');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-fieldset-disabled.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-fieldset.js":
/*!**********************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-fieldset.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  element: 'fieldset',
  mutate: function mutate(element) {
    element.innerHTML = '<legend>legend</legend><p>content</p>';
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-fieldset.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-flexbox-container.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-flexbox-container.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// elements with display:flex are focusable in IE10-11
exports.default = {
  element: 'span',
  mutate: function mutate(element) {
    element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
    element.innerHTML = '<span style="display: block;">hello</span>';
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-flexbox-container.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-form-disabled.js":
/*!***************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-form-disabled.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
exports.default = {
  element: 'form',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', 0);
    element.setAttribute('disabled', 'disabled');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-form-disabled.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-img-ismap.js":
/*!***********************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-img-ismap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./media/gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
exports.default = {
  element: 'a',
  mutate: function mutate(element) {
    element.href = '#void';
    element.innerHTML = '<img ismap src="' + _gif2.default + '" alt="">';
    return element.querySelector('img');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-img-ismap.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-img-usemap-tabindex.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-img-usemap-tabindex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./media/gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + _gif2.default + '">';

    return element.querySelector('img');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-img-usemap-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-in-hidden-iframe.js":
/*!******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-in-hidden-iframe.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  element: function element(wrapper, _document) {
    var iframe = _document.createElement('iframe');

    // iframe must be part of the DOM before accessing the contentWindow is possible
    wrapper.appendChild(iframe);

    // create the iframe's default document (<html><head></head><body></body></html>)
    var iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.close();
    return iframe;
  },
  mutate: function mutate(iframe) {
    iframe.style.visibility = 'hidden';

    var iframeDocument = iframe.contentWindow.document;
    var input = iframeDocument.createElement('input');
    iframeDocument.body.appendChild(input);
    return input;
  },
  validate: function validate(iframe) {
    var iframeDocument = iframe.contentWindow.document;
    var focus = iframeDocument.querySelector('input');
    return iframeDocument.activeElement === focus;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-in-hidden-iframe.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-in-zero-dimension-object.js":
/*!**************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-in-zero-dimension-object.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return result;
};

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result = !_platform2.default.is.WEBKIT;

module.exports = exports['default'];
//# sourceMappingURL=focus-in-zero-dimension-object.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-invalid-tabindex.js":
/*!******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-invalid-tabindex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', 'invalid-value');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-invalid-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-label-tabindex.js":
/*!****************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-label-tabindex.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  element: 'label',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '-1');
  },
  validate: function validate(element, focusTarget, _document) {
    // force layout in Chrome 49, otherwise the element won't be focusable
    /* eslint-disable no-unused-vars */
    var variableToPreventDeadCodeElimination = element.offsetHeight;
    /* eslint-enable no-unused-vars */
    element.focus();
    return _document.activeElement === element;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-label-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-object-svg-hidden.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-object-svg-hidden.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./media/svg */ "../node_modules/ally.js/supports/media/svg.js");

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note: IE10 on BrowserStack does not like this test

exports.default = {
  element: 'object',
  mutate: function mutate(element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _svg2.default);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
    element.style.visibility = 'hidden';
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-object-svg-hidden.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-object-svg.js":
/*!************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-object-svg.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./media/svg */ "../node_modules/ally.js/supports/media/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note: IE10 on BrowserStack does not like this test

exports.default = {
  name: 'can-focus-object-svg',
  element: 'object',
  mutate: function mutate(element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _svg2.default);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
  },
  validate: function validate(element, focusTarget, _document) {
    if (_platform2.default.is.GECKO) {
      // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
      // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
      return true;
    }

    return _document.activeElement === element;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-object-svg.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-object-swf.js":
/*!************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-object-swf.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return result;
};

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Every Environment except IE9 considers SWF objects focusable
var result = !_platform2.default.is.IE9;

module.exports = exports['default'];
//# sourceMappingURL=focus-object-swf.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-redirect-img-usemap.js":
/*!*********************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-redirect-img-usemap.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./media/gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + _gif2.default + '">';

    // focus the <img>, not the <div>
    return element.querySelector('img');
  },
  validate: function validate(element, focusTarget, _document) {
    var target = element.querySelector('area');
    return _document.activeElement === target;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-redirect-img-usemap.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-redirect-legend.js":
/*!*****************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-redirect-legend.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// see https://jsbin.com/nenirisage/edit?html,js,console,output

exports.default = {
  element: 'fieldset',
  mutate: function mutate(element) {
    element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
    // take care of focus in validate();
    return false;
  },
  validate: function validate(element, focusTarget, _document) {
    var focusable = element.querySelector('input[tabindex="-1"]');
    var tabbable = element.querySelector('input[tabindex="0"]');

    // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
    // https://jsbin.com/nenirisage/edit?html,js,console,output
    element.focus();

    element.querySelector('legend').focus();
    return _document.activeElement === focusable && 'focusable' || _document.activeElement === tabbable && 'tabbable' || '';
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-redirect-legend.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-scroll-body.js":
/*!*************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-scroll-body.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// https://github.com/medialize/ally.js/issues/21
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    return element.querySelector('div');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-scroll-body.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-scroll-container-without-overflow.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-scroll-container-without-overflow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// https://github.com/medialize/ally.js/issues/21
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('style', 'width: 100px; height: 50px;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-scroll-container-without-overflow.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-scroll-container.js":
/*!******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-scroll-container.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// https://github.com/medialize/ally.js/issues/21
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-scroll-container.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-summary.js":
/*!*********************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-summary.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  element: 'details',
  mutate: function mutate(element) {
    element.innerHTML = '<summary>foo</summary><p>content</p>';
    return element.firstElementChild;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-summary.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-svg-focusable-attribute.js":
/*!*************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-svg-focusable-attribute.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./helper/svg */ "../node_modules/ally.js/supports/helper/svg.js");

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)('<text focusable="true">a</text>');
    return element.querySelector('text');
  },
  validate: _svg.validate
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-focusable-attribute.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-svg-foreignobject-tabindex.js":
/*!****************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-svg-foreignobject-tabindex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./helper/svg */ "../node_modules/ally.js/supports/helper/svg.js");

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
    // Safari 8's quersSelector() can't identify foreignObject, but getElementyByTagName() can
    return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
  },
  validate: _svg.validate

};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-foreignobject-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-svg-in-iframe.js":
/*!***************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-svg-in-iframe.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return result;
};

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output

var result = Boolean(_platform2.default.is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);

module.exports = exports['default'];
//# sourceMappingURL=focus-svg-in-iframe.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-svg-negative-tabindex-attribute.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-svg-negative-tabindex-attribute.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./helper/svg */ "../node_modules/ally.js/supports/helper/svg.js");

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)('<text tabindex="-1">a</text>');
    return element.querySelector('text');
  },
  validate: _svg.validate
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-negative-tabindex-attribute.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-svg-tabindex-attribute.js":
/*!************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-svg-tabindex-attribute.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./helper/svg */ "../node_modules/ally.js/supports/helper/svg.js");

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)('<text tabindex="0">a</text>');
    return element.querySelector('text');
  },
  validate: _svg.validate
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-tabindex-attribute.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-svg-use-tabindex.js":
/*!******************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-svg-use-tabindex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./helper/svg */ "../node_modules/ally.js/supports/helper/svg.js");

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)(['<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>', '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'].join(''));

    return element.querySelector('use');
  },
  validate: _svg.validate
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg-use-tabindex.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-svg.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-svg.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(/*! ./helper/svg */ "../node_modules/ally.js/supports/helper/svg.js");

exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.innerHTML = (0, _svg.generate)('');
    return element.firstChild;
  },
  validate: _svg.validate
};
module.exports = exports['default'];
//# sourceMappingURL=focus-svg.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-tabindex-trailing-characters.js":
/*!******************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-tabindex-trailing-characters.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
exports.default = {
  element: 'div',
  mutate: function mutate(element) {
    element.setAttribute('tabindex', '3x');
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-tabindex-trailing-characters.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-table.js":
/*!*******************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-table.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  element: 'table',
  mutate: function mutate(element, wrapper, _document) {
    // IE9 has a problem replacing TBODY contents with innerHTML.
    // https://stackoverflow.com/a/8097055/515124
    // element.innerHTML = '<tr><td>cell</td></tr>';
    var fragment = _document.createDocumentFragment();
    fragment.innerHTML = '<tr><td>cell</td></tr>';
    element.appendChild(fragment);
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-table.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/focus-video-without-controls.js":
/*!************************************************************************!*\
  !*** ../node_modules/ally.js/supports/focus-video-without-controls.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mp = __webpack_require__(/*! ./media/mp4 */ "../node_modules/ally.js/supports/media/mp4.js");

var _mp2 = _interopRequireDefault(_mp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  element: 'video',
  mutate: function mutate(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _mp2.default);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=focus-video-without-controls.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/helper/svg.js":
/*!******************************************************!*\
  !*** ../node_modules/ally.js/supports/helper/svg.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;
exports.focus = focus;
exports.validate = validate;

var _focus = __webpack_require__(/*! ../../element/focus.svg-foreign-object-hack */ "../node_modules/ally.js/element/focus.svg-foreign-object-hack.js");

var _focus2 = _interopRequireDefault(_focus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generate(element) {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + '</svg>';
}

function focus(element) {
  if (element.focus) {
    return;
  }

  try {
    HTMLElement.prototype.focus.call(element);
  } catch (e) {
    (0, _focus2.default)(element);
  }
}

function validate(element, focusTarget, _document) {
  focus(focusTarget);
  return _document.activeElement === focusTarget;
}
//# sourceMappingURL=svg.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/media/gif.invalid.js":
/*!*************************************************************!*\
  !*** ../node_modules/ally.js/supports/media/gif.invalid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
module.exports = exports['default'];
//# sourceMappingURL=gif.invalid.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/media/gif.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/supports/media/gif.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
module.exports = exports['default'];
//# sourceMappingURL=gif.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/media/mp3.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/supports/media/mp3.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _gif2.default;
// export default 'data:audio/mp3;base64,audio-focus-test';

module.exports = exports['default'];
//# sourceMappingURL=mp3.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/media/mp4.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/supports/media/mp4.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gif = __webpack_require__(/*! ./gif */ "../node_modules/ally.js/supports/media/gif.js");

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _gif2.default;
// export default 'data:video/mp4;base64,video-focus-test';

module.exports = exports['default'];
//# sourceMappingURL=mp4.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/media/svg.js":
/*!*****************************************************!*\
  !*** ../node_modules/ally.js/supports/media/svg.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' + 'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' + 'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==';
module.exports = exports['default'];
//# sourceMappingURL=svg.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/supports-cache.js":
/*!**********************************************************!*\
  !*** ../node_modules/ally.js/supports/supports-cache.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _version = __webpack_require__(/*! ../version */ "../node_modules/ally.js/version.js");

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readLocalStorage(key) {
  // allow reading from storage to retrieve previous support results
  // even while the document does not have focus
  var data = void 0;

  try {
    data = window.localStorage && window.localStorage.getItem(key);
    data = data ? JSON.parse(data) : {};
  } catch (e) {
    data = {};
  }

  return data;
} /*
      Facility to cache test results in localStorage.
  
      USAGE:
        cache.get('key');
        cache.set('key', 'value');
   */

function writeLocalStorage(key, value) {
  if (!document.hasFocus()) {
    // if the document does not have focus when tests are executed, focus() may
    // not be handled properly and events may not be dispatched immediately.
    // This can happen when a document is reloaded while Developer Tools have focus.
    try {
      window.localStorage && window.localStorage.removeItem(key);
    } catch (e) {
      // ignore
    }

    return;
  }

  try {
    window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // ignore
  }
}

var userAgent = typeof window !== 'undefined' && window.navigator.userAgent || '';
var cacheKey = 'ally-supports-cache';
var cache = readLocalStorage(cacheKey);

// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== _version2.default) {
  cache = {};
}

cache.userAgent = userAgent;
cache.version = _version2.default;

exports.default = {
  get: function get() {
    return cache;
  },
  set: function set(values) {
    Object.keys(values).forEach(function (key) {
      cache[key] = values[key];
    });

    cache.time = new Date().toISOString();
    writeLocalStorage(cacheKey, cache);
  }
};
module.exports = exports['default'];
//# sourceMappingURL=supports-cache.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/supports.js":
/*!****************************************************!*\
  !*** ../node_modules/ally.js/supports/supports.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (supportsCache) {
    return supportsCache;
  }

  supportsCache = _supportsCache2.default.get();
  if (!supportsCache.time) {
    _supportsCache2.default.set(executeTests());
    supportsCache = _supportsCache2.default.get();
  }

  return supportsCache;
};

var _detectFocus = __webpack_require__(/*! ./detect-focus */ "../node_modules/ally.js/supports/detect-focus.js");

var _detectFocus2 = _interopRequireDefault(_detectFocus);

var _supportsCache = __webpack_require__(/*! ./supports-cache */ "../node_modules/ally.js/supports/supports-cache.js");

var _supportsCache2 = _interopRequireDefault(_supportsCache);

var _cssShadowPiercingDeepCombinator = __webpack_require__(/*! ./css-shadow-piercing-deep-combinator */ "../node_modules/ally.js/supports/css-shadow-piercing-deep-combinator.js");

var _cssShadowPiercingDeepCombinator2 = _interopRequireDefault(_cssShadowPiercingDeepCombinator);

var _focusAreaImgTabindex = __webpack_require__(/*! ./focus-area-img-tabindex */ "../node_modules/ally.js/supports/focus-area-img-tabindex.js");

var _focusAreaImgTabindex2 = _interopRequireDefault(_focusAreaImgTabindex);

var _focusAreaTabindex = __webpack_require__(/*! ./focus-area-tabindex */ "../node_modules/ally.js/supports/focus-area-tabindex.js");

var _focusAreaTabindex2 = _interopRequireDefault(_focusAreaTabindex);

var _focusAreaWithoutHref = __webpack_require__(/*! ./focus-area-without-href */ "../node_modules/ally.js/supports/focus-area-without-href.js");

var _focusAreaWithoutHref2 = _interopRequireDefault(_focusAreaWithoutHref);

var _focusAudioWithoutControls = __webpack_require__(/*! ./focus-audio-without-controls */ "../node_modules/ally.js/supports/focus-audio-without-controls.js");

var _focusAudioWithoutControls2 = _interopRequireDefault(_focusAudioWithoutControls);

var _focusBrokenImageMap = __webpack_require__(/*! ./focus-broken-image-map */ "../node_modules/ally.js/supports/focus-broken-image-map.js");

var _focusBrokenImageMap2 = _interopRequireDefault(_focusBrokenImageMap);

var _focusChildrenOfFocusableFlexbox = __webpack_require__(/*! ./focus-children-of-focusable-flexbox */ "../node_modules/ally.js/supports/focus-children-of-focusable-flexbox.js");

var _focusChildrenOfFocusableFlexbox2 = _interopRequireDefault(_focusChildrenOfFocusableFlexbox);

var _focusFieldsetDisabled = __webpack_require__(/*! ./focus-fieldset-disabled */ "../node_modules/ally.js/supports/focus-fieldset-disabled.js");

var _focusFieldsetDisabled2 = _interopRequireDefault(_focusFieldsetDisabled);

var _focusFieldset = __webpack_require__(/*! ./focus-fieldset */ "../node_modules/ally.js/supports/focus-fieldset.js");

var _focusFieldset2 = _interopRequireDefault(_focusFieldset);

var _focusFlexboxContainer = __webpack_require__(/*! ./focus-flexbox-container */ "../node_modules/ally.js/supports/focus-flexbox-container.js");

var _focusFlexboxContainer2 = _interopRequireDefault(_focusFlexboxContainer);

var _focusFormDisabled = __webpack_require__(/*! ./focus-form-disabled */ "../node_modules/ally.js/supports/focus-form-disabled.js");

var _focusFormDisabled2 = _interopRequireDefault(_focusFormDisabled);

var _focusImgIsmap = __webpack_require__(/*! ./focus-img-ismap */ "../node_modules/ally.js/supports/focus-img-ismap.js");

var _focusImgIsmap2 = _interopRequireDefault(_focusImgIsmap);

var _focusImgUsemapTabindex = __webpack_require__(/*! ./focus-img-usemap-tabindex */ "../node_modules/ally.js/supports/focus-img-usemap-tabindex.js");

var _focusImgUsemapTabindex2 = _interopRequireDefault(_focusImgUsemapTabindex);

var _focusInHiddenIframe = __webpack_require__(/*! ./focus-in-hidden-iframe */ "../node_modules/ally.js/supports/focus-in-hidden-iframe.js");

var _focusInHiddenIframe2 = _interopRequireDefault(_focusInHiddenIframe);

var _focusInZeroDimensionObject = __webpack_require__(/*! ./focus-in-zero-dimension-object */ "../node_modules/ally.js/supports/focus-in-zero-dimension-object.js");

var _focusInZeroDimensionObject2 = _interopRequireDefault(_focusInZeroDimensionObject);

var _focusInvalidTabindex = __webpack_require__(/*! ./focus-invalid-tabindex */ "../node_modules/ally.js/supports/focus-invalid-tabindex.js");

var _focusInvalidTabindex2 = _interopRequireDefault(_focusInvalidTabindex);

var _focusLabelTabindex = __webpack_require__(/*! ./focus-label-tabindex */ "../node_modules/ally.js/supports/focus-label-tabindex.js");

var _focusLabelTabindex2 = _interopRequireDefault(_focusLabelTabindex);

var _focusObjectSvgHidden = __webpack_require__(/*! ./focus-object-svg-hidden */ "../node_modules/ally.js/supports/focus-object-svg-hidden.js");

var _focusObjectSvgHidden2 = _interopRequireDefault(_focusObjectSvgHidden);

var _focusObjectSvg = __webpack_require__(/*! ./focus-object-svg */ "../node_modules/ally.js/supports/focus-object-svg.js");

var _focusObjectSvg2 = _interopRequireDefault(_focusObjectSvg);

var _focusObjectSwf = __webpack_require__(/*! ./focus-object-swf */ "../node_modules/ally.js/supports/focus-object-swf.js");

var _focusObjectSwf2 = _interopRequireDefault(_focusObjectSwf);

var _focusRedirectImgUsemap = __webpack_require__(/*! ./focus-redirect-img-usemap */ "../node_modules/ally.js/supports/focus-redirect-img-usemap.js");

var _focusRedirectImgUsemap2 = _interopRequireDefault(_focusRedirectImgUsemap);

var _focusRedirectLegend = __webpack_require__(/*! ./focus-redirect-legend */ "../node_modules/ally.js/supports/focus-redirect-legend.js");

var _focusRedirectLegend2 = _interopRequireDefault(_focusRedirectLegend);

var _focusScrollBody = __webpack_require__(/*! ./focus-scroll-body */ "../node_modules/ally.js/supports/focus-scroll-body.js");

var _focusScrollBody2 = _interopRequireDefault(_focusScrollBody);

var _focusScrollContainerWithoutOverflow = __webpack_require__(/*! ./focus-scroll-container-without-overflow */ "../node_modules/ally.js/supports/focus-scroll-container-without-overflow.js");

var _focusScrollContainerWithoutOverflow2 = _interopRequireDefault(_focusScrollContainerWithoutOverflow);

var _focusScrollContainer = __webpack_require__(/*! ./focus-scroll-container */ "../node_modules/ally.js/supports/focus-scroll-container.js");

var _focusScrollContainer2 = _interopRequireDefault(_focusScrollContainer);

var _focusSummary = __webpack_require__(/*! ./focus-summary */ "../node_modules/ally.js/supports/focus-summary.js");

var _focusSummary2 = _interopRequireDefault(_focusSummary);

var _focusSvgFocusableAttribute = __webpack_require__(/*! ./focus-svg-focusable-attribute */ "../node_modules/ally.js/supports/focus-svg-focusable-attribute.js");

var _focusSvgFocusableAttribute2 = _interopRequireDefault(_focusSvgFocusableAttribute);

var _focusSvgTabindexAttribute = __webpack_require__(/*! ./focus-svg-tabindex-attribute */ "../node_modules/ally.js/supports/focus-svg-tabindex-attribute.js");

var _focusSvgTabindexAttribute2 = _interopRequireDefault(_focusSvgTabindexAttribute);

var _focusSvgNegativeTabindexAttribute = __webpack_require__(/*! ./focus-svg-negative-tabindex-attribute */ "../node_modules/ally.js/supports/focus-svg-negative-tabindex-attribute.js");

var _focusSvgNegativeTabindexAttribute2 = _interopRequireDefault(_focusSvgNegativeTabindexAttribute);

var _focusSvgUseTabindex = __webpack_require__(/*! ./focus-svg-use-tabindex */ "../node_modules/ally.js/supports/focus-svg-use-tabindex.js");

var _focusSvgUseTabindex2 = _interopRequireDefault(_focusSvgUseTabindex);

var _focusSvgForeignobjectTabindex = __webpack_require__(/*! ./focus-svg-foreignobject-tabindex */ "../node_modules/ally.js/supports/focus-svg-foreignobject-tabindex.js");

var _focusSvgForeignobjectTabindex2 = _interopRequireDefault(_focusSvgForeignobjectTabindex);

var _focusSvgInIframe = __webpack_require__(/*! ./focus-svg-in-iframe */ "../node_modules/ally.js/supports/focus-svg-in-iframe.js");

var _focusSvgInIframe2 = _interopRequireDefault(_focusSvgInIframe);

var _focusSvg = __webpack_require__(/*! ./focus-svg */ "../node_modules/ally.js/supports/focus-svg.js");

var _focusSvg2 = _interopRequireDefault(_focusSvg);

var _focusTabindexTrailingCharacters = __webpack_require__(/*! ./focus-tabindex-trailing-characters */ "../node_modules/ally.js/supports/focus-tabindex-trailing-characters.js");

var _focusTabindexTrailingCharacters2 = _interopRequireDefault(_focusTabindexTrailingCharacters);

var _focusTable = __webpack_require__(/*! ./focus-table */ "../node_modules/ally.js/supports/focus-table.js");

var _focusTable2 = _interopRequireDefault(_focusTable);

var _focusVideoWithoutControls = __webpack_require__(/*! ./focus-video-without-controls */ "../node_modules/ally.js/supports/focus-video-without-controls.js");

var _focusVideoWithoutControls2 = _interopRequireDefault(_focusVideoWithoutControls);

var _tabsequenceAreaAtImgPosition = __webpack_require__(/*! ./tabsequence-area-at-img-position */ "../node_modules/ally.js/supports/tabsequence-area-at-img-position.js");

var _tabsequenceAreaAtImgPosition2 = _interopRequireDefault(_tabsequenceAreaAtImgPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testCallbacks = {
  cssShadowPiercingDeepCombinator: _cssShadowPiercingDeepCombinator2.default,
  focusInZeroDimensionObject: _focusInZeroDimensionObject2.default,
  focusObjectSwf: _focusObjectSwf2.default,
  focusSvgInIframe: _focusSvgInIframe2.default,
  tabsequenceAreaAtImgPosition: _tabsequenceAreaAtImgPosition2.default
};

var testDescriptions = {
  focusAreaImgTabindex: _focusAreaImgTabindex2.default,
  focusAreaTabindex: _focusAreaTabindex2.default,
  focusAreaWithoutHref: _focusAreaWithoutHref2.default,
  focusAudioWithoutControls: _focusAudioWithoutControls2.default,
  focusBrokenImageMap: _focusBrokenImageMap2.default,
  focusChildrenOfFocusableFlexbox: _focusChildrenOfFocusableFlexbox2.default,
  focusFieldsetDisabled: _focusFieldsetDisabled2.default,
  focusFieldset: _focusFieldset2.default,
  focusFlexboxContainer: _focusFlexboxContainer2.default,
  focusFormDisabled: _focusFormDisabled2.default,
  focusImgIsmap: _focusImgIsmap2.default,
  focusImgUsemapTabindex: _focusImgUsemapTabindex2.default,
  focusInHiddenIframe: _focusInHiddenIframe2.default,
  focusInvalidTabindex: _focusInvalidTabindex2.default,
  focusLabelTabindex: _focusLabelTabindex2.default,
  focusObjectSvg: _focusObjectSvg2.default,
  focusObjectSvgHidden: _focusObjectSvgHidden2.default,
  focusRedirectImgUsemap: _focusRedirectImgUsemap2.default,
  focusRedirectLegend: _focusRedirectLegend2.default,
  focusScrollBody: _focusScrollBody2.default,
  focusScrollContainerWithoutOverflow: _focusScrollContainerWithoutOverflow2.default,
  focusScrollContainer: _focusScrollContainer2.default,
  focusSummary: _focusSummary2.default,
  focusSvgFocusableAttribute: _focusSvgFocusableAttribute2.default,
  focusSvgTabindexAttribute: _focusSvgTabindexAttribute2.default,
  focusSvgNegativeTabindexAttribute: _focusSvgNegativeTabindexAttribute2.default,
  focusSvgUseTabindex: _focusSvgUseTabindex2.default,
  focusSvgForeignobjectTabindex: _focusSvgForeignobjectTabindex2.default,
  focusSvg: _focusSvg2.default,
  focusTabindexTrailingCharacters: _focusTabindexTrailingCharacters2.default,
  focusTable: _focusTable2.default,
  focusVideoWithoutControls: _focusVideoWithoutControls2.default
};

function executeTests() {
  var results = (0, _detectFocus2.default)(testDescriptions);
  Object.keys(testCallbacks).forEach(function (key) {
    results[key] = testCallbacks[key]();
  });

  return results;
}

var supportsCache = null;

module.exports = exports['default'];
//# sourceMappingURL=supports.js.map

/***/ }),

/***/ "../node_modules/ally.js/supports/tabsequence-area-at-img-position.js":
/*!****************************************************************************!*\
  !*** ../node_modules/ally.js/supports/tabsequence-area-at-img-position.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return result;
};

var _platform = __webpack_require__(/*! ../util/platform */ "../node_modules/ally.js/util/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result = _platform2.default.is.GECKO || _platform2.default.is.TRIDENT || _platform2.default.is.EDGE;

module.exports = exports['default'];
//# sourceMappingURL=tabsequence-area-at-img-position.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/array-find-index.js":
/*!********************************************************!*\
  !*** ../node_modules/ally.js/util/array-find-index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findIndex;
function findIndex(array, callback) {
  // attempt to use native or polyfilled Array#findIndex first
  if (array.findIndex) {
    return array.findIndex(callback);
  }

  var length = array.length;

  // shortcut if the array is empty
  if (length === 0) {
    return -1;
  }

  // otherwise loop over array
  for (var i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
module.exports = exports["default"];
//# sourceMappingURL=array-find-index.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/compare-position.js":
/*!********************************************************!*\
  !*** ../node_modules/ally.js/util/compare-position.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParentComparator = getParentComparator;

// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/

function getParentComparator() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      parent = _ref.parent,
      element = _ref.element,
      includeSelf = _ref.includeSelf;

  if (parent) {
    return function isChildOf(node) {
      return Boolean(includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY);
    };
  } else if (element) {
    return function isParentOf(node) {
      return Boolean(includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY);
    };
  }

  throw new TypeError('util/compare-position#getParentComparator required either options.parent or options.element');
}
//# sourceMappingURL=compare-position.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/context-to-element.js":
/*!**********************************************************!*\
  !*** ../node_modules/ally.js/util/context-to-element.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var context = _ref.context,
      _ref$label = _ref.label,
      label = _ref$label === undefined ? 'context-to-element' : _ref$label,
      resolveDocument = _ref.resolveDocument,
      defaultToDocument = _ref.defaultToDocument;

  var element = (0, _nodeArray2.default)(context)[0];

  if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
    element = element.documentElement;
  }

  if (!element && defaultToDocument) {
    return document.documentElement;
  }

  if (!element) {
    throw new TypeError(label + ' requires valid options.context');
  }

  if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
    throw new TypeError(label + ' requires options.context to be an Element');
  }

  return element;
};

var _nodeArray = __webpack_require__(/*! ../util/node-array */ "../node_modules/ally.js/util/node-array.js");

var _nodeArray2 = _interopRequireDefault(_nodeArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=context-to-element.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/element-matches.js":
/*!*******************************************************!*\
  !*** ../node_modules/ally.js/util/element-matches.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elementMatches;

// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches

var names = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'];
var name = null;

function findMethodName(element) {
  names.some(function (_name) {
    if (!element[_name]) {
      return false;
    }

    name = _name;
    return true;
  });
}

function elementMatches(element, selector) {
  if (!name) {
    findMethodName(element);
  }

  return element[name](selector);
}
module.exports = exports['default'];
//# sourceMappingURL=element-matches.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/get-content-document.js":
/*!************************************************************!*\
  !*** ../node_modules/ally.js/util/get-content-document.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  try {
    // works on <object> and <iframe>
    return node.contentDocument
    // works on <object> and <iframe>
    || node.contentWindow && node.contentWindow.document
    // works on <object> and <iframe> that contain SVG
    || node.getSVGDocument && node.getSVGDocument() || null;
  } catch (e) {
    // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
    // also IE may throw member not found exception e.g. on <object type="image/png">
    return null;
  }
};

module.exports = exports["default"];
//# sourceMappingURL=get-content-document.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/get-document.js":
/*!****************************************************!*\
  !*** ../node_modules/ally.js/util/get-document.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  if (!node) {
    return document;
  }

  if (node.nodeType === Node.DOCUMENT_NODE) {
    return node;
  }

  return node.ownerDocument || document;
};

module.exports = exports["default"];
//# sourceMappingURL=get-document.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/get-frame-element.js":
/*!*********************************************************!*\
  !*** ../node_modules/ally.js/util/get-frame-element.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFrameElement;

var _getContentDocument = __webpack_require__(/*! ./get-content-document */ "../node_modules/ally.js/util/get-content-document.js");

var _getContentDocument2 = _interopRequireDefault(_getContentDocument);

var _getWindow = __webpack_require__(/*! ./get-window */ "../node_modules/ally.js/util/get-window.js");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _selectInShadows = __webpack_require__(/*! ./select-in-shadows */ "../node_modules/ally.js/util/select-in-shadows.js");

var _selectInShadows2 = _interopRequireDefault(_selectInShadows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selector = void 0;

function findDocumentHostElement(_window) {
  if (!selector) {
    selector = (0, _selectInShadows2.default)('object, iframe');
  }

  if (_window._frameElement !== undefined) {
    return _window._frameElement;
  }

  _window._frameElement = null;

  var potentialHosts = _window.parent.document.querySelectorAll(selector);
  [].some.call(potentialHosts, function (element) {
    var _document = (0, _getContentDocument2.default)(element);
    if (_document !== _window.document) {
      return false;
    }

    _window._frameElement = element;
    return true;
  });

  return _window._frameElement;
}

function getFrameElement(element) {
  var _window = (0, _getWindow2.default)(element);
  if (!_window.parent || _window.parent === _window) {
    // if there is no parent browsing context,
    // we're not going to get a frameElement either way
    return null;
  }

  try {
    // see https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement
    // does not work within <embed> anywhere, and not within in <object> in IE
    return _window.frameElement || findDocumentHostElement(_window);
  } catch (e) {
    return null;
  }
}
module.exports = exports['default'];
//# sourceMappingURL=get-frame-element.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/get-window.js":
/*!**************************************************!*\
  !*** ../node_modules/ally.js/util/get-window.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  var _document = (0, _getDocument2.default)(node);
  return _document.defaultView || window;
};

var _getDocument = __webpack_require__(/*! ./get-document */ "../node_modules/ally.js/util/get-document.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=get-window.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/image-map.js":
/*!*************************************************!*\
  !*** ../node_modules/ally.js/util/image-map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapByName = getMapByName;
exports.getMapOfImage = getMapOfImage;
exports.getImageOfArea = getImageOfArea;

var _css = __webpack_require__(/*! css.escape */ "../node_modules/css.escape/css.escape.js");

var _css2 = _interopRequireDefault(_css);

var _getDocument = __webpack_require__(/*! ../util/get-document */ "../node_modules/ally.js/util/get-document.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMapByName(name, _document) {
  // apparently getElementsByName() also considers id attribute in IE & opera
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
  var map = _document.querySelector('map[name="' + (0, _css2.default)(name) + '"]');
  return map || null;
}

function getMapOfImage(element) {
  var usemap = element.getAttribute('usemap');
  if (!usemap) {
    return null;
  }

  var _document = (0, _getDocument2.default)(element);
  return getMapByName(usemap.slice(1), _document);
}

function getImageOfArea(element) {
  var map = element.parentElement;

  if (!map.name || map.nodeName.toLowerCase() !== 'map') {
    return null;
  }

  // NOTE: image maps can also be applied to <object> with image content,
  // but no browser supports this at the moment

  // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
  // <img> and <object> referencing the <map> element, but no browser implements this
  //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
  //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
  // the image must be valid and loaded for the map to take effect
  var _document = (0, _getDocument2.default)(element);
  return _document.querySelector('img[usemap="#' + (0, _css2.default)(map.name) + '"]') || null;
}
//# sourceMappingURL=image-map.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/logger.js":
/*!**********************************************!*\
  !*** ../node_modules/ally.js/util/logger.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var noop = function noop() {};
var _console = {
  log: noop,
  debug: noop,
  info: noop,
  warn: noop,
  error: noop
};

exports.default = typeof console !== 'undefined' ? console : _console;
module.exports = exports['default'];
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/merge-dom-order.js":
/*!*******************************************************!*\
  !*** ../node_modules/ally.js/util/merge-dom-order.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      list = _ref.list,
      elements = _ref.elements,
      resolveElement = _ref.resolveElement;

  // operate on a copy so we don't mutate the original array
  var _list = list.slice(0);
  // make sure the elements we're injecting are provided in DOM order
  var _elements = (0, _nodeArray2.default)(elements).slice(0);
  (0, _sortDomOrder2.default)(_elements);
  // find the offsets within the target array (list) at which to inject
  // each individual element (from elements)
  var insertions = findInsertionOffsets(_list, _elements, resolveElement);
  // actually inject the elements into the target array at the identified positions
  insertElementsAtOffsets(_list, insertions);
  return _list;
};

var _arrayFindIndex = __webpack_require__(/*! ../util/array-find-index */ "../node_modules/ally.js/util/array-find-index.js");

var _arrayFindIndex2 = _interopRequireDefault(_arrayFindIndex);

var _nodeArray = __webpack_require__(/*! ./node-array */ "../node_modules/ally.js/util/node-array.js");

var _nodeArray2 = _interopRequireDefault(_nodeArray);

var _sortDomOrder = __webpack_require__(/*! ./sort-dom-order */ "../node_modules/ally.js/util/sort-dom-order.js");

var _sortDomOrder2 = _interopRequireDefault(_sortDomOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFirstSuccessorOffset(list, target) {
  // find the first element that comes AFTER the target element
  return (0, _arrayFindIndex2.default)(list, function (element) {
    return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
  });
}
// sort a list of elements into another list of elements in DOM order

/*
  USAGE:
    mergeDomOrder({
      // DOM ordered array of elements to use as base of merge
      list: [],
      // unordered array of elements to merge into base list
      elements: [],
      // callback function to resolve an element
      resolveElement: function(element) {
        // return null to skip
        // return element to replace insertion
        // return [element1, element2, …] to replace insertion with multiple elements
        return element;
      },
    })
*/

function findInsertionOffsets(list, elements, resolveElement) {
  // instead of mutating the elements list directly, remember position and map
  // to inject later, when we can do this more efficiently
  var insertions = [];
  elements.forEach(function (element) {
    var replace = true;
    var offset = list.indexOf(element);

    if (offset === -1) {
      // element is not in target list
      offset = getFirstSuccessorOffset(list, element);
      replace = false;
    }

    if (offset === -1) {
      // there is no successor in the tabsequence,
      // meaning the image must be the last element
      offset = list.length;
    }

    // allow the consumer to replace the injected element
    var injections = (0, _nodeArray2.default)(resolveElement ? resolveElement(element) : element);
    if (!injections.length) {
      // we can't inject zero elements
      return;
    }

    insertions.push({
      offset: offset,
      replace: replace,
      elements: injections
    });
  });

  return insertions;
}

function insertElementsAtOffsets(list, insertions) {
  // remember the number of elements we have already injected
  // so we account for the caused index offset
  var inserted = 0;
  // make sure that we insert the elements in sequence,
  // otherwise the offset compensation won't work
  insertions.sort(function (a, b) {
    return a.offset - b.offset;
  });
  insertions.forEach(function (insertion) {
    // array.splice has an annoying function signature :(
    var remove = insertion.replace ? 1 : 0;
    var args = [insertion.offset + inserted, remove].concat(insertion.elements);
    list.splice.apply(list, args);
    inserted += insertion.elements.length - remove;
  });
}

module.exports = exports['default'];
//# sourceMappingURL=merge-dom-order.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/node-array.js":
/*!**************************************************!*\
  !*** ../node_modules/ally.js/util/node-array.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (input) {
  if (!input) {
    return [];
  }

  if (Array.isArray(input)) {
    return input;
  }

  // instanceof Node - does not work with iframes
  if (input.nodeType !== undefined) {
    return [input];
  }

  if (typeof input === 'string') {
    input = document.querySelectorAll(input);
  }

  if (input.length !== undefined) {
    return [].slice.call(input, 0);
  }

  throw new TypeError('unexpected input ' + String(input));
};

module.exports = exports['default'];
// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
//# sourceMappingURL=node-array.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/platform.js":
/*!************************************************!*\
  !*** ../node_modules/ally.js/util/platform.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _platform2 = __webpack_require__(/*! platform */ "../node_modules/platform/platform.js");

var _platform3 = _interopRequireDefault(_platform2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// deep clone of original platform
var platform = JSON.parse(JSON.stringify(_platform3.default));

// operating system

// sugar for https://github.com/bestiejs/platform.js
// make sure to ALWAYS reference the layout engine,
// even if it is not necessary for the condition,
// as this makes grepping for this stuff simpler

var os = platform.os.family || '';
var ANDROID = os === 'Android';
var WINDOWS = os.slice(0, 7) === 'Windows';
var OSX = os === 'OS X';
var IOS = os === 'iOS';

// layout
var BLINK = platform.layout === 'Blink';
var GECKO = platform.layout === 'Gecko';
var TRIDENT = platform.layout === 'Trident';
var EDGE = platform.layout === 'EdgeHTML';
var WEBKIT = platform.layout === 'WebKit';

// browser version (not layout engine version!)
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;

platform.is = {
  // operating system
  ANDROID: ANDROID,
  WINDOWS: WINDOWS,
  OSX: OSX,
  IOS: IOS,
  // layout
  BLINK: BLINK, // "Chrome", "Chrome Mobile", "Opera"
  GECKO: GECKO, // "Firefox"
  TRIDENT: TRIDENT, // "Internet Explorer"
  EDGE: EDGE, // "Microsoft Edge"
  WEBKIT: WEBKIT, // "Safari"
  // INTERNET EXPLORERS
  IE9: TRIDENT && majorVersion === 9,
  IE10: TRIDENT && majorVersion === 10,
  IE11: TRIDENT && majorVersion === 11
};

exports.default = platform;
module.exports = exports['default'];
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/select-in-shadows.js":
/*!*********************************************************!*\
  !*** ../node_modules/ally.js/util/select-in-shadows.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  if (typeof shadowPrefix !== 'string') {
    var operator = (0, _cssShadowPiercingDeepCombinator2.default)();
    if (operator) {
      shadowPrefix = ', html ' + operator + ' ';
    }
  }

  if (!shadowPrefix) {
    return selector;
  }

  return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
};

var _cssShadowPiercingDeepCombinator = __webpack_require__(/*! ../supports/css-shadow-piercing-deep-combinator */ "../node_modules/ally.js/supports/css-shadow-piercing-deep-combinator.js");

var _cssShadowPiercingDeepCombinator2 = _interopRequireDefault(_cssShadowPiercingDeepCombinator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shadowPrefix = void 0;
// convert a CSS selector so that it also pierces ShadowDOM
// takes ".a, #b" and turns it into ".a, #b, html >>> .a, html >>> #b"

module.exports = exports['default'];
//# sourceMappingURL=select-in-shadows.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/sort-dom-order.js":
/*!******************************************************!*\
  !*** ../node_modules/ally.js/util/sort-dom-order.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (elements) {
  return elements.sort(compareDomPosition);
};

// sorts a list of elements according to their order in the DOM

function compareDomPosition(a, b) {
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

module.exports = exports["default"];
//# sourceMappingURL=sort-dom-order.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/tabindex-value.js":
/*!******************************************************!*\
  !*** ../node_modules/ally.js/util/tabindex-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  if (!(0, _validTabindex2.default)(element)) {
    return null;
  }

  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  var hasTabindex = element.hasAttribute('tabindex');
  var attributeName = hasTabindex ? 'tabindex' : 'tabIndex';

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  var tabindex = parseInt(element.getAttribute(attributeName), 10);
  return isNaN(tabindex) ? -1 : tabindex;
};

var _validTabindex = __webpack_require__(/*! ../is/valid-tabindex */ "../node_modules/ally.js/is/valid-tabindex.js");

var _validTabindex2 = _interopRequireDefault(_validTabindex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=tabindex-value.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/toggle-attribute-value.js":
/*!**************************************************************!*\
  !*** ../node_modules/ally.js/util/toggle-attribute-value.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var element = _ref.element,
      attribute = _ref.attribute,
      temporaryValue = _ref.temporaryValue,
      saveValue = _ref.saveValue;

  var temporaryAttribute = 'data-cached-' + attribute;

  if (temporaryValue !== undefined) {
    var _value = saveValue || element.getAttribute(attribute);
    element.setAttribute(temporaryAttribute, _value || '');
    element.setAttribute(attribute, temporaryValue);
  } else {
    var _value2 = element.getAttribute(temporaryAttribute);
    element.removeAttribute(temporaryAttribute);
    if (_value2 === '') {
      element.removeAttribute(attribute);
    } else {
      element.setAttribute(attribute, _value2);
    }
  }
};

module.exports = exports['default'];
// helper to turn
//  <div some-attribute="original">
// into
//  <div some-attribute="new" data-cached-some-attribute="original">
// and back
//# sourceMappingURL=toggle-attribute-value.js.map

/***/ }),

/***/ "../node_modules/ally.js/util/toggle-attribute.js":
/*!********************************************************!*\
  !*** ../node_modules/ally.js/util/toggle-attribute.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var element = _ref.element,
      attribute = _ref.attribute;

  var temporaryAttribute = 'data-cached-' + attribute;
  var temporaryAttributeValue = element.getAttribute(temporaryAttribute);

  if (temporaryAttributeValue === null) {
    var _value = element.getAttribute(attribute);
    if (_value === null) {
      // can't remove what's not there
      return;
    }

    element.setAttribute(temporaryAttribute, _value || '');
    element.removeAttribute(attribute);
  } else {
    var _value2 = element.getAttribute(temporaryAttribute);
    element.removeAttribute(temporaryAttribute);
    element.setAttribute(attribute, _value2);
  }
};

module.exports = exports['default'];
// helper to turn
//  <div some-attribute="original">
// into
//  <div data-cached-some-attribute="original">
// and back
//# sourceMappingURL=toggle-attribute.js.map

/***/ }),

/***/ "../node_modules/ally.js/version.js":
/*!******************************************!*\
  !*** ../node_modules/ally.js/version.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// this file is overwritten by `npm run build:pre`
var version = '1.4.1';
exports.default = version;
module.exports = exports['default'];
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../node_modules/ally.js/when/key.binding.js":
/*!***************************************************!*\
  !*** ../node_modules/ally.js/when/key.binding.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (text) {
  return text.split(/\s+/).map(function (_text) {
    var tokens = _text.split('+');
    var _modifiers = resolveModifiers(tokens.slice(0, -1));
    var _keyCodes = resolveKey(tokens.slice(-1));
    return {
      keyCodes: _keyCodes,
      modifiers: _modifiers,
      matchModifiers: matchModifiers.bind(null, _modifiers)
    };
  });
};

var _keycode = __webpack_require__(/*! ../map/keycode */ "../node_modules/ally.js/map/keycode.js");

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modifier = {
  alt: 'altKey',
  ctrl: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};
/*
  decodes a key binding token to a JavaScript structure

  returns an array of objects:
    {
      // key name translated to keyCode (possibly more than one)
      keyCodes: [<number>],
      // translated modifiers
      modifiers: {
        altKey: null,   // ignore
        ctrKey: false,  // expect not pressed
        metaKey: true,  // expect pressed
        shiftKey: true, // expect pressed
      },
      // callback that returns true if event's
      // modifier keys match the expected state
      matchModifiers: function(event){},
    }
*/

var modifierSequence = Object.keys(modifier).map(function (name) {
  return modifier[name];
});

function createExpectedModifiers(ignoreModifiers) {
  var value = ignoreModifiers ? null : false;
  return {
    altKey: value,
    ctrlKey: value,
    metaKey: value,
    shiftKey: value
  };
}

function resolveModifiers(modifiers) {
  var ignoreModifiers = modifiers.indexOf('*') !== -1;
  var expected = createExpectedModifiers(ignoreModifiers);

  modifiers.forEach(function (token) {
    if (token === '*') {
      // we've already covered the all-in operator
      return;
    }

    // we want the modifier pressed
    var value = true;
    var operator = token.slice(0, 1);
    if (operator === '?') {
      // we don't care if the modifier is pressed
      value = null;
    } else if (operator === '!') {
      // we do not want the modifier pressed
      value = false;
    }

    if (value !== true) {
      // compensate for the modifier's operator
      token = token.slice(1);
    }

    var propertyName = modifier[token];
    if (!propertyName) {
      throw new TypeError('Unknown modifier "' + token + '"');
    }

    expected[propertyName] = value;
  });

  return expected;
}

function resolveKey(key) {
  var code = _keycode2.default[key] || parseInt(key, 10);
  if (!code || typeof code !== 'number' || isNaN(code)) {
    throw new TypeError('Unknown key "' + key + '"');
  }

  return [code].concat(_keycode2.default._alias[code] || []);
}

function matchModifiers(expected, event) {
  // returns true on match
  return !modifierSequence.some(function (prop) {
    // returns true on mismatch
    return typeof expected[prop] === 'boolean' && Boolean(event[prop]) !== expected[prop];
  });
}

module.exports = exports['default'];
//# sourceMappingURL=key.binding.js.map

/***/ }),

/***/ "../node_modules/ally.js/when/key.js":
/*!*******************************************!*\
  !*** ../node_modules/ally.js/when/key.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var bindings = {};

  var context = (0, _nodeArray2.default)(map.context)[0] || document.documentElement;
  delete map.context;
  var filter = (0, _nodeArray2.default)(map.filter);
  delete map.filter;

  var mapKeys = Object.keys(map);
  if (!mapKeys.length) {
    throw new TypeError('when/key requires at least one option key');
  }

  var registerBinding = function registerBinding(event) {
    event.keyCodes.forEach(function (code) {
      if (!bindings[code]) {
        bindings[code] = [];
      }

      bindings[code].push(event);
    });
  };

  mapKeys.forEach(function (text) {
    if (typeof map[text] !== 'function') {
      throw new TypeError('when/key requires option["' + text + '"] to be a function');
    }

    var addCallback = function addCallback(event) {
      event.callback = map[text];
      return event;
    };

    (0, _key2.default)(text).map(addCallback).forEach(registerBinding);
  });

  var handleKeyDown = function handleKeyDown(event) {
    if (event.defaultPrevented) {
      return;
    }

    if (filter.length) {
      // ignore elements within the exempted sub-trees
      var isParentOfElement = (0, _comparePosition.getParentComparator)({ element: event.target, includeSelf: true });
      if (filter.some(isParentOfElement)) {
        return;
      }
    }

    var key = event.keyCode || event.which;
    if (!bindings[key]) {
      return;
    }

    bindings[key].forEach(function (_event) {
      if (!_event.matchModifiers(event)) {
        return;
      }

      _event.callback.call(context, event, disengage);
    });
  };

  context.addEventListener('keydown', handleKeyDown, false);

  var disengage = function disengage() {
    context.removeEventListener('keydown', handleKeyDown, false);
  };

  return { disengage: disengage };
};

var _key = __webpack_require__(/*! ./key.binding */ "../node_modules/ally.js/when/key.binding.js");

var _key2 = _interopRequireDefault(_key);

var _nodeArray = __webpack_require__(/*! ../util/node-array */ "../node_modules/ally.js/util/node-array.js");

var _nodeArray2 = _interopRequireDefault(_nodeArray);

var _comparePosition = __webpack_require__(/*! ../util/compare-position */ "../node_modules/ally.js/util/compare-position.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933
//# sourceMappingURL=key.js.map

/***/ }),

/***/ "../node_modules/anser/lib/index.js":
/*!******************************************!*\
  !*** ../node_modules/anser/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file was originally written by @drudru (https://github.com/drudru/ansi_up), MIT, 2011

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANSI_COLORS = [[{ color: "0, 0, 0", "class": "ansi-black" }, { color: "187, 0, 0", "class": "ansi-red" }, { color: "0, 187, 0", "class": "ansi-green" }, { color: "187, 187, 0", "class": "ansi-yellow" }, { color: "0, 0, 187", "class": "ansi-blue" }, { color: "187, 0, 187", "class": "ansi-magenta" }, { color: "0, 187, 187", "class": "ansi-cyan" }, { color: "255,255,255", "class": "ansi-white" }], [{ color: "85, 85, 85", "class": "ansi-bright-black" }, { color: "255, 85, 85", "class": "ansi-bright-red" }, { color: "0, 255, 0", "class": "ansi-bright-green" }, { color: "255, 255, 85", "class": "ansi-bright-yellow" }, { color: "85, 85, 255", "class": "ansi-bright-blue" }, { color: "255, 85, 255", "class": "ansi-bright-magenta" }, { color: "85, 255, 255", "class": "ansi-bright-cyan" }, { color: "255, 255, 255", "class": "ansi-bright-white" }]];

var Anser = function () {
    _createClass(Anser, null, [{
        key: "escapeForHtml",


        /**
         * Anser.escapeForHtml
         * Escape the input HTML.
         *
         * This does the minimum escaping of text to make it compliant with HTML.
         * In particular, the '&','<', and '>' characters are escaped. This should
         * be run prior to `ansiToHtml`.
         *
         * @name Anser.escapeForHtml
         * @function
         * @param {String} txt The input text (containing the ANSI snippets).
         * @returns {String} The escaped html.
         */
        value: function escapeForHtml(txt) {
            return new Anser().escapeForHtml(txt);
        }

        /**
         * Anser.linkify
         * Adds the links in the HTML.
         *
         * This replaces any links in the text with anchor tags that display the
         * link. The links should have at least one whitespace character
         * surrounding it. Also, you should apply this after you have run
         * `ansiToHtml` on the text.
         *
         * @name Anser.linkify
         * @function
         * @param {String} txt The input text.
         * @returns {String} The HTML containing the <a> tags (unescaped).
         */

    }, {
        key: "linkify",
        value: function linkify(txt) {
            return new Anser().linkify(txt);
        }

        /**
         * Anser.ansiToHtml
         * This replaces ANSI terminal escape codes with SPAN tags that wrap the
         * content.
         *
         * This function only interprets ANSI SGR (Select Graphic Rendition) codes
         * that can be represented in HTML.
         * For example, cursor movement codes are ignored and hidden from output.
         * The default style uses colors that are very close to the prescribed
         * standard. The standard assumes that the text will have a black
         * background. These colors are set as inline styles on the SPAN tags.
         *
         * Another option is to set `use_classes: true` in the options argument.
         * This will instead set classes on the spans so the colors can be set via
         * CSS. The class names used are of the format `ansi-*-fg/bg` and
         * `ansi-bright-*-fg/bg` where `*` is the color name,
         * i.e black/red/green/yellow/blue/magenta/cyan/white.
         *
         * @name Anser.ansiToHtml
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed to the ansiToHTML method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToHtml",
        value: function ansiToHtml(txt, options) {
            return new Anser().ansiToHtml(txt, options);
        }

        /**
         * Anser.ansiToJson
         * Converts ANSI input into JSON output.
         *
         * @name Anser.ansiToJson
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed to the ansiToHTML method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToJson",
        value: function ansiToJson(txt, options) {
            return new Anser().ansiToJson(txt, options);
        }

        /**
         * Anser.ansiToText
         * Converts ANSI input into text output.
         *
         * @name Anser.ansiToText
         * @function
         * @param {String} txt The input text.
         * @returns {String} The text output.
         */

    }, {
        key: "ansiToText",
        value: function ansiToText(txt) {
            return new Anser().ansiToText(txt);
        }

        /**
         * Anser
         * The `Anser` class.
         *
         * @name Anser
         * @function
         * @returns {Anser}
         */

    }]);

    function Anser() {
        _classCallCheck(this, Anser);

        this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null;
        this.bright = 0;
    }

    /**
     * setupPalette
     * Sets up the palette.
     *
     * @name setupPalette
     * @function
     */


    _createClass(Anser, [{
        key: "setupPalette",
        value: function setupPalette() {
            this.PALETTE_COLORS = [];

            // Index 0..15 : System color
            for (var i = 0; i < 2; ++i) {
                for (var j = 0; j < 8; ++j) {
                    this.PALETTE_COLORS.push(ANSI_COLORS[i][j].color);
                }
            }

            // Index 16..231 : RGB 6x6x6
            // https://gist.github.com/jasonm23/2868981#file-xterm-256color-yaml
            var levels = [0, 95, 135, 175, 215, 255];
            var format = function format(r, g, b) {
                return levels[r] + ", " + levels[g] + ", " + levels[b];
            };
            var r = void 0,
                g = void 0,
                b = void 0;
            for (var _r = 0; _r < 6; ++_r) {
                for (var _g = 0; _g < 6; ++_g) {
                    for (var _b = 0; _b < 6; ++_b) {
                        this.PALETTE_COLORS.push(format(_r, _g, _b));
                    }
                }
            }

            // Index 232..255 : Grayscale
            var level = 8;
            for (var _i = 0; _i < 24; ++_i, level += 10) {
                this.PALETTE_COLORS.push(format(level, level, level));
            }
        }

        /**
         * escapeForHtml
         * Escapes the input text.
         *
         * @name escapeForHtml
         * @function
         * @param {String} txt The input text.
         * @returns {String} The escpaed HTML output.
         */

    }, {
        key: "escapeForHtml",
        value: function escapeForHtml(txt) {
            return txt.replace(/[&<>]/gm, function (str) {
                return str == "&" ? "&amp;" : str == "<" ? "&lt;" : str == ">" ? "&gt;" : "";
            });
        }

        /**
         * linkify
         * Adds HTML link elements.
         *
         * @name linkify
         * @function
         * @param {String} txt The input text.
         * @returns {String} The HTML output containing link elements.
         */

    }, {
        key: "linkify",
        value: function linkify(txt) {
            return txt.replace(/(https?:\/\/[^\s]+)/gm, function (str) {
                return "<a href=\"" + str + "\">" + str + "</a>";
            });
        }

        /**
         * ansiToHtml
         * Converts ANSI input into HTML output.
         *
         * @name ansiToHtml
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed ot the `process` method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToHtml",
        value: function ansiToHtml(txt, options) {
            return this.process(txt, options, true);
        }

        /**
         * ansiToJson
         * Converts ANSI input into HTML output.
         *
         * @name ansiToJson
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed ot the `process` method.
         * @returns {String} The JSON output.
         */

    }, {
        key: "ansiToJson",
        value: function ansiToJson(txt, options) {
            options = options || {};
            options.json = true;
            options.clearLine = false;
            return this.process(txt, options, true);
        }

        /**
         * ansiToText
         * Converts ANSI input into HTML output.
         *
         * @name ansiToText
         * @function
         * @param {String} txt The input text.
         * @returns {String} The text output.
         */

    }, {
        key: "ansiToText",
        value: function ansiToText(txt) {
            return this.process(txt, {}, false);
        }

        /**
         * process
         * Processes the input.
         *
         * @name process
         * @function
         * @param {String} txt The input text.
         * @param {Object} options An object passed to `processChunk` method, extended with:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup
         */

    }, {
        key: "process",
        value: function process(txt, options, markup) {
            var _this = this;

            var self = this;
            var raw_text_chunks = txt.split(/\033\[/);
            var first_chunk = raw_text_chunks.shift(); // the first chunk is not the result of the split

            if (options === undefined || options === null) {
                options = {};
            }
            options.clearLine = /\r/.test(txt); // check for Carriage Return
            var color_chunks = raw_text_chunks.map(function (chunk) {
                return _this.processChunk(chunk, options, markup);
            });

            if (options && options.json) {
                var first = self.processChunkJson("");
                first.content = first_chunk;
                first.clearLine = options.clearLine;
                color_chunks.unshift(first);
                if (options.remove_empty) {
                    color_chunks = color_chunks.filter(function (c) {
                        return !c.isEmpty();
                    });
                }
                return color_chunks;
            } else {
                color_chunks.unshift(first_chunk);
            }

            return color_chunks.join("");
        }

        /**
         * processChunkJson
         * Processes the current chunk into json output.
         *
         * @name processChunkJson
         * @function
         * @param {String} text The input text.
         * @param {Object} options An object containing the following fields:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup If false, the colors will not be parsed.
         * @return {Object} The result object:
         *
         *  - `content` (String): The text.
         *  - `fg` (String|null): The foreground color.
         *  - `bg` (String|null): The background color.
         *  - `fg_truecolor` (String|null): The foreground true color (if 16m color is enabled).
         *  - `bg_truecolor` (String|null): The background true color (if 16m color is enabled).
         *  - `clearLine` (Boolean): `true` if a carriageReturn \r was fount at end of line.
         *  - `was_processed` (Bolean): `true` if the colors were processed, `false` otherwise.
         *  - `isEmpty` (Function): A function returning `true` if the content is empty, or `false` otherwise.
         *
         */

    }, {
        key: "processChunkJson",
        value: function processChunkJson(text, options, markup) {

            // Are we using classes or styles?
            options = typeof options == "undefined" ? {} : options;
            var use_classes = options.use_classes = typeof options.use_classes != "undefined" && options.use_classes;
            var key = options.key = use_classes ? "class" : "color";

            var result = {
                content: text,
                fg: null,
                bg: null,
                fg_truecolor: null,
                bg_truecolor: null,
                clearLine: options.clearLine,
                decoration: null,
                was_processed: false,
                isEmpty: function isEmpty() {
                    return !result.content;
                }
            };

            // Each "chunk" is the text after the CSI (ESC + "[") and before the next CSI/EOF.
            //
            // This regex matches four groups within a chunk.
            //
            // The first and third groups match code type.
            // We supported only SGR command. It has empty first group and "m" in third.
            //
            // The second group matches all of the number+semicolon command sequences
            // before the "m" (or other trailing) character.
            // These are the graphics or SGR commands.
            //
            // The last group is the text (including newlines) that is colored by
            // the other group"s commands.
            var matches = text.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);

            if (!matches) return result;

            var orig_txt = result.content = matches[4];
            var nums = matches[2].split(";");

            // We currently support only "SGR" (Select Graphic Rendition)
            // Simply ignore if not a SGR command.
            if (matches[1] !== "" || matches[3] !== "m") {
                return result;
            }

            if (!markup) {
                return result;
            }

            var self = this;

            self.decoration = null;

            while (nums.length > 0) {
                var num_str = nums.shift();
                var num = parseInt(num_str);

                if (isNaN(num) || num === 0) {
                    self.fg = self.bg = self.decoration = null;
                } else if (num === 1) {
                    self.decoration = "bold";
                } else if (num === 2) {
                    self.decoration = "dim";
                    // Enable code 2 to get string
                } else if (num == 3) {
                    self.decoration = "italic";
                } else if (num == 4) {
                    self.decoration = "underline";
                } else if (num == 5) {
                    self.decoration = "blink";
                } else if (num === 7) {
                    self.decoration = "reverse";
                } else if (num === 8) {
                    self.decoration = "hidden";
                    // Enable code 9 to get strikethrough
                } else if (num === 9) {
                    self.decoration = "strikethrough";
                } else if (num == 39) {
                    self.fg = null;
                } else if (num == 49) {
                    self.bg = null;
                    // Foreground color
                } else if (num >= 30 && num < 38) {
                    self.fg = ANSI_COLORS[0][num % 10][key];
                    // Foreground bright color
                } else if (num >= 90 && num < 98) {
                    self.fg = ANSI_COLORS[1][num % 10][key];
                    // Background color
                } else if (num >= 40 && num < 48) {
                    self.bg = ANSI_COLORS[0][num % 10][key];
                    // Background bright color
                } else if (num >= 100 && num < 108) {
                    self.bg = ANSI_COLORS[1][num % 10][key];
                } else if (num === 38 || num === 48) {
                    // extend color (38=fg, 48=bg)
                    var is_foreground = num === 38;
                    if (nums.length >= 1) {
                        var mode = nums.shift();
                        if (mode === "5" && nums.length >= 1) {
                            // palette color
                            var palette_index = parseInt(nums.shift());
                            if (palette_index >= 0 && palette_index <= 255) {
                                if (!use_classes) {
                                    if (!this.PALETTE_COLORS) {
                                        self.setupPalette();
                                    }
                                    if (is_foreground) {
                                        self.fg = this.PALETTE_COLORS[palette_index];
                                    } else {
                                        self.bg = this.PALETTE_COLORS[palette_index];
                                    }
                                } else {
                                    var klass = palette_index >= 16 ? "ansi-palette-" + palette_index : ANSI_COLORS[palette_index > 7 ? 1 : 0][palette_index % 8]["class"];
                                    if (is_foreground) {
                                        self.fg = klass;
                                    } else {
                                        self.bg = klass;
                                    }
                                }
                            }
                        } else if (mode === "2" && nums.length >= 3) {
                            // true color
                            var r = parseInt(nums.shift());
                            var g = parseInt(nums.shift());
                            var b = parseInt(nums.shift());
                            if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
                                var color = r + ", " + g + ", " + b;
                                if (!use_classes) {
                                    if (is_foreground) {
                                        self.fg = color;
                                    } else {
                                        self.bg = color;
                                    }
                                } else {
                                    if (is_foreground) {
                                        self.fg = "ansi-truecolor";
                                        self.fg_truecolor = color;
                                    } else {
                                        self.bg = "ansi-truecolor";
                                        self.bg_truecolor = color;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (self.fg === null && self.bg === null && self.decoration === null) {
                return result;
            } else {
                var styles = [];
                var classes = [];
                var data = {};

                result.fg = self.fg;
                result.bg = self.bg;
                result.fg_truecolor = self.fg_truecolor;
                result.bg_truecolor = self.bg_truecolor;
                result.decoration = self.decoration;
                result.was_processed = true;

                return result;
            }
        }

        /**
         * processChunk
         * Processes the current chunk of text.
         *
         * @name processChunk
         * @function
         * @param {String} text The input text.
         * @param {Object} options An object containing the following fields:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup If false, the colors will not be parsed.
         * @return {Object|String} The result (object if `json` is wanted back or string otherwise).
         */

    }, {
        key: "processChunk",
        value: function processChunk(text, options, markup) {
            var _this2 = this;

            var self = this;
            options = options || {};
            var jsonChunk = this.processChunkJson(text, options, markup);

            if (options.json) {
                return jsonChunk;
            }
            if (jsonChunk.isEmpty()) {
                return "";
            }
            if (!jsonChunk.was_processed) {
                return jsonChunk.content;
            }

            var use_classes = options.use_classes;

            var styles = [];
            var classes = [];
            var data = {};
            var render_data = function render_data(data) {
                var fragments = [];
                var key = void 0;
                for (key in data) {
                    if (data.hasOwnProperty(key)) {
                        fragments.push("data-" + key + "=\"" + _this2.escapeForHtml(data[key]) + "\"");
                    }
                }
                return fragments.length > 0 ? " " + fragments.join(" ") : "";
            };

            if (jsonChunk.fg) {
                if (use_classes) {
                    classes.push(jsonChunk.fg + "-fg");
                    if (jsonChunk.fg_truecolor !== null) {
                        data["ansi-truecolor-fg"] = jsonChunk.fg_truecolor;
                        jsonChunk.fg_truecolor = null;
                    }
                } else {
                    styles.push("color:rgb(" + jsonChunk.fg + ")");
                }
            }

            if (jsonChunk.bg) {
                if (use_classes) {
                    classes.push(jsonChunk.bg + "-bg");
                    if (jsonChunk.bg_truecolor !== null) {
                        data["ansi-truecolor-bg"] = jsonChunk.bg_truecolor;
                        jsonChunk.bg_truecolor = null;
                    }
                } else {
                    styles.push("background-color:rgb(" + jsonChunk.bg + ")");
                }
            }

            if (jsonChunk.decoration) {
                if (use_classes) {
                    classes.push("ansi-" + jsonChunk.decoration);
                } else if (jsonChunk.decoration === "bold") {
                    styles.push("font-weight:bold");
                } else if (jsonChunk.decoration === "dim") {
                    styles.push("opacity:0.5");
                } else if (jsonChunk.decoration === "italic") {
                    styles.push("font-style:italic");
                    // underline and blink are treated bellow
                } else if (jsonChunk.decoration === "reverse") {
                    styles.push("filter:invert(100%)");
                } else if (jsonChunk.decoration === "hidden") {
                    styles.push("visibility:hidden");
                } else if (jsonChunk.decoration === "strikethrough") {
                    styles.push("text-decoration:line-through");
                } else {
                    styles.push("text-decoration:" + jsonChunk.decoration);
                }
            }

            if (use_classes) {
                return "<span class=\"" + classes.join(" ") + "\"" + render_data(data) + ">" + jsonChunk.content + "</span>";
            } else {
                return "<span style=\"" + styles.join(";") + "\"" + render_data(data) + ">" + jsonChunk.content + "</span>";
            }
        }
    }]);

    return Anser;
}();

;

module.exports = Anser;

/***/ }),

/***/ "../node_modules/css.escape/css.escape.js":
/*!************************************************!*\
  !*** ../node_modules/css.escape/css.escape.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (true) {
		// For Node.js.
		module.exports = factory(root);
	} else {}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/native-url/dist/index.js":
/*!************************************************!*\
  !*** ../node_modules/native-url/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/next/dist/build/polyfills/finally-polyfill.min.js":
/*!*************************************************************************!*\
  !*** ../node_modules/next/dist/build/polyfills/finally-polyfill.min.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Promise.prototype.finally=function(n){if("function"!=typeof n)return this.then(n,n);var t=this.constructor||Promise;return this.then(function(r){return t.resolve(n()).then(function(){return r})},function(r){return t.resolve(n()).then(function(){throw r})})};

/***/ }),

/***/ "../node_modules/next/dist/build/polyfills/unfetch.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/build/polyfills/unfetch.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "../node_modules/next/dist/client/dev/dev-build-watcher.js":
/*!*****************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/dev-build-watcher.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = initializeBuildWatcher;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "../node_modules/next/dist/client/dev/error-overlay/eventsource.js");

function initializeBuildWatcher() {
  var shadowHost = document.createElement('div');
  shadowHost.id = '__next-build-watcher'; // Make sure container is fixed and on a high zIndex so it shows

  shadowHost.style.position = 'fixed';
  shadowHost.style.bottom = '10px';
  shadowHost.style.right = '20px';
  shadowHost.style.width = 0;
  shadowHost.style.height = 0;
  shadowHost.style.zIndex = 99999;
  document.body.appendChild(shadowHost);
  var shadowRoot;
  var prefix = '';

  if (shadowHost.attachShadow) {
    shadowRoot = shadowHost.attachShadow({
      mode: 'open'
    });
  } else {
    // If attachShadow is undefined then the browser does not support
    // the Shadow DOM, we need to prefix all the names so there
    // will be no conflicts
    shadowRoot = shadowHost;
    prefix = '__next-build-watcher-';
  } // Container


  var container = createContainer(prefix);
  shadowRoot.appendChild(container); // CSS

  var css = createCss(prefix);
  shadowRoot.appendChild(css); // State

  var isVisible = false;
  var isBuilding = false;
  var timeoutId = null; // Handle events

  var evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: '/_next/webpack-hmr'
  });
  evtSource.addMessageListener(function (event) {
    // This is the heartbeat event
    if (event.data === "\uD83D\uDC93") {
      return;
    }

    try {
      handleMessage(event);
    } catch (_unused) {}
  });

  function handleMessage(event) {
    var obj = JSON.parse(event.data); // eslint-disable-next-line default-case

    switch (obj.action) {
      case 'building':
        timeoutId && clearTimeout(timeoutId);
        isVisible = true;
        isBuilding = true;
        updateContainer();
        break;

      case 'built':
      case 'sync':
        isBuilding = false; // Wait for the fade out transtion to complete

        timeoutId = setTimeout(function () {
          isVisible = false;
          updateContainer();
        }, 100);
        updateContainer();
        break;
    }
  }

  function updateContainer() {
    if (isBuilding) {
      container.classList.add("".concat(prefix, "building"));
    } else {
      container.classList.remove("".concat(prefix, "building"));
    }

    if (isVisible) {
      container.classList.add("".concat(prefix, "visible"));
    } else {
      container.classList.remove("".concat(prefix, "visible"));
    }
  }
}

function createContainer(prefix) {
  var container = document.createElement('div');
  container.id = "".concat(prefix, "container");
  container.innerHTML = "\n    <div id=\"".concat(prefix, "icon-wrapper\">\n      <svg viewBox=\"0 0 226 200\">\n        <defs>\n          <linearGradient\n            x1=\"114.720775%\"\n            y1=\"181.283245%\"\n            x2=\"39.5399306%\"\n            y2=\"100%\"\n            id=\"").concat(prefix, "linear-gradient\"\n          >\n            <stop stop-color=\"#FFFFFF\" offset=\"0%\" />\n            <stop stop-color=\"#000000\" offset=\"100%\" />\n          </linearGradient>\n        </defs>\n        <g id=\"").concat(prefix, "icon-group\" fill=\"none\" stroke=\"url(#").concat(prefix, "linear-gradient)\" stroke-width=\"18\">\n          <path d=\"M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z\" />\n        </g>\n      </svg>\n    </div>\n  ");
  return container;
}

function createCss(prefix) {
  var css = document.createElement('style');
  css.textContent = "\n    #".concat(prefix, "container {\n      position: absolute;\n      bottom: 10px;\n      right: 30px;\n\n      background: #fff;\n      color: #000;\n      font: initial;\n      cursor: initial;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n\n      padding: 8px 10px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: none;\n      opacity: 0;\n      transition: opacity 0.1s ease, bottom 0.1s ease;\n      animation: ").concat(prefix, "fade-in 0.1s ease-in-out;\n    }\n\n    #").concat(prefix, "container.").concat(prefix, "visible {\n      display: flex;\n    }\n\n    #").concat(prefix, "container.").concat(prefix, "building {\n      bottom: 20px;\n      opacity: 1;\n    }\n\n    #").concat(prefix, "icon-wrapper {\n      width: 16px;\n      height: 16px;\n    }\n\n    #").concat(prefix, "icon-wrapper > svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    #").concat(prefix, "icon-group {\n      animation: ").concat(prefix, "strokedash 1s ease-in-out both infinite;\n    }\n\n    @keyframes ").concat(prefix, "fade-in {\n      from {\n        bottom: 10px;\n        opacity: 0;\n      }\n      to {\n        bottom: 20px;\n        opacity: 1;\n      }\n    }\n\n    @keyframes ").concat(prefix, "strokedash {\n      0% {\n        stroke-dasharray: 0 226;\n      }\n      80%,\n      100% {\n        stroke-dasharray: 659 226;\n      }\n    }\n  ");
  return css;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!*************************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/**
MIT License
Copyright (c) 2015-present, Facebook, Inc.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");

var friendlySyntaxErrorLabel = 'Syntax error:';

function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
} // Cleans up webpack error messages.


function formatMessage(message) {
  var lines = message.split('\n'); // Strip Webpack-added headers off errors/warnings
  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js

  lines = lines.filter(function (line) {
    return !/Module [A-z ]+\(from/.test(line);
  }); // Transform parsing error into syntax error
  // TODO: move this to our ESLint formatter?

  lines = lines.map(function (line) {
    var parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);

    if (!parsingError) {
      return line;
    }

    var _parsingError = _slicedToArray(parsingError, 4),
        errorLine = _parsingError[1],
        errorColumn = _parsingError[2],
        errorMessage = _parsingError[3];

    return "".concat(friendlySyntaxErrorLabel, " ").concat(errorMessage, " (").concat(errorLine, ":").concat(errorColumn, ")");
  });
  message = lines.join('\n'); // Smoosh syntax errors (commonly found in CSS)

  message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "".concat(friendlySyntaxErrorLabel, " $3 ($1:$2)\n")); // Clean up export errors

  message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
  message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
  message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
  lines = message.split('\n'); // Remove leading newline

  if (lines.length > 2 && lines[1].trim() === '') {
    lines.splice(1, 1);
  } // Clean up file name


  lines[0] = lines[0].replace(/^(.*) \d+:\d+-\d+$/, '$1'); // Cleans up verbose "module not found" messages for files and packages.

  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {
    lines = [lines[0], lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:')].concat(_toConsumableArray(lines.slice(2).filter(function (line) {
      return line.indexOf(' @ ') !== 0;
    })));
  } // Add helpful message for users trying to use Sass for the first time


  if (lines[1] && lines[1].match(/Cannot find module.+node-sass/)) {
    // ./file.module.scss (<<loader info>>) => ./file.module.scss
    lines[0] = lines[0].replace(/(.+) \(.+?(?=\?\?).+?\)/, '$1');
    lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
    lines[1] += 'Run `npm i sass` or `yarn add sass` inside your workspace.\n';
    lines[1] += '\nLearn more: https://err.sh/next.js/install-sass';
  }

  message = lines.join('\n'); // Internal stacks are generally useless so we strip them... with the
  // exception of stacks containing `webpack:` because they're normally
  // from user code generated by Webpack. For more information see
  // https://github.com/facebook/create-react-app/pull/1050

  message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, ''); // at ... ...:x:y

  message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, ''); // at <anonymous>

  lines = message.split('\n'); // Remove duplicated newlines

  lines = lines.filter(function (line, index, arr) {
    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();
  }); // Reassemble the message

  message = lines.join('\n');
  return message.trim();
}

function formatWebpackMessages(json) {
  var formattedErrors = json.errors.map(function (message) {
    return formatMessage(message, true);
  });
  var formattedWarnings = json.warnings.map(function (message) {
    return formatMessage(message, false);
  });
  var result = {
    errors: formattedErrors,
    warnings: formattedWarnings
  };

  if (result.errors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    result.errors = result.errors.filter(isLikelyASyntaxError);
  }

  return result;
}

module.exports = formatWebpackMessages;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = connect;

var DevOverlay = _interopRequireWildcard(__webpack_require__(/*! @next/react-dev-overlay/lib/client */ "../node_modules/@next/react-dev-overlay/lib/client.js"));

var _stripAnsi = _interopRequireDefault(__webpack_require__(/*! next/dist/compiled/strip-ansi */ "../node_modules/next/dist/compiled/strip-ansi/index.js"));

var _eventsource = __webpack_require__(/*! ./eventsource */ "../node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _formatWebpackMessages = _interopRequireDefault(__webpack_require__(/*! ./format-webpack-messages */ "../node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js"));
/**
* MIT License
*
* Copyright (c) 2013-present, Facebook, Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
// This file is a modified version of the Create React App HMR dev client that
// can be found here:
// https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-dev-utils/webpackHotDevClient.js
// This alternative WebpackDevServer combines the functionality of:
// https://github.com/webpack/webpack-dev-server/blob/webpack-1/client/index.js
// https://github.com/webpack/webpack/blob/webpack-1/hot/dev-server.js
// It only supports their simplest configuration (hot updates on same server).
// It makes some opinionated choices on top, like adding a syntax error overlay
// that looks similar to our console output. The error overlay is inspired by:
// https://github.com/glenjamin/webpack-hot-middleware


var hadRuntimeError = false;
var customHmrEventHandler;

function connect(options) {
  DevOverlay.register();
  (0, _eventsource.getEventSourceWrapper)(options).addMessageListener(function (event) {
    // This is the heartbeat event
    if (event.data === "\uD83D\uDC93") {
      return;
    }

    try {
      processMessage(event);
    } catch (ex) {
      console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
    }
  });
  return {
    subscribeToHmrEvent: function subscribeToHmrEvent(handler) {
      customHmrEventHandler = handler;
    },
    onUnrecoverableError: function onUnrecoverableError() {
      hadRuntimeError = true;
    }
  };
} // Remember some state related to hot module replacement.


var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;

function clearOutdatedErrors() {
  // Clean up outdated compile errors, if any.
  if (typeof console !== 'undefined' && typeof console.clear === 'function') {
    if (hasCompileErrors) {
      console.clear();
    }
  }
} // Successful compilation.


function handleSuccess() {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false; // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onSuccessfulHotUpdate(hasUpdates) {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      onFastRefresh(hasUpdates);
    });
  }
} // Compilation with warnings (e.g. ESLint).


function handleWarnings(warnings) {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false;

  function printWarnings() {
    // Print warnings to the console.
    var formatted = (0, _formatWebpackMessages["default"])({
      warnings: warnings,
      errors: []
    });

    if (typeof console !== 'undefined' && typeof console.warn === 'function') {
      for (var i = 0; i < formatted.warnings.length; i++) {
        if (i === 5) {
          console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
          break;
        }

        console.warn((0, _stripAnsi["default"])(formatted.warnings[i]));
      }
    }
  }

  printWarnings(); // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onSuccessfulHotUpdate(hasUpdates) {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      onFastRefresh(hasUpdates);
    });
  }
} // Compilation with errors (e.g. syntax error or missing modules).


function handleErrors(errors) {
  clearOutdatedErrors();
  isFirstCompilation = false;
  hasCompileErrors = true; // "Massage" webpack messages.

  var formatted = (0, _formatWebpackMessages["default"])({
    errors: errors,
    warnings: []
  }); // Only show the first error.

  DevOverlay.onBuildError(formatted.errors[0]); // Also log them to the console.

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    for (var i = 0; i < formatted.errors.length; i++) {
      console.error((0, _stripAnsi["default"])(formatted.errors[i]));
    }
  } // Do not attempt to reload now.
  // We will reload on next success instead.


  if (undefined) {
    if (self.__NEXT_HMR_CB) {
      self.__NEXT_HMR_CB(formatted.errors[0]);

      self.__NEXT_HMR_CB = null;
    }
  }
}

function onFastRefresh(hasUpdates) {
  DevOverlay.onBuildOk();

  if (hasUpdates) {
    DevOverlay.onRefresh();
  }

  console.log('[Fast Refresh] done');
} // There is a newer version of the code available.


function handleAvailableHash(hash) {
  // Update last known compilation hash.
  mostRecentCompilationHash = hash;
} // Handle messages from the server.


function processMessage(e) {
  var obj = JSON.parse(e.data);

  switch (obj.action) {
    case 'building':
      {
        console.log('[Fast Refresh] rebuilding');
        break;
      }

    case 'built':
    case 'sync':
      {
        if (obj.hash) {
          handleAvailableHash(obj.hash);
        }

        var errors = obj.errors,
            warnings = obj.warnings;
        var hasErrors = Boolean(errors && errors.length);

        if (hasErrors) {
          return handleErrors(errors);
        }

        var hasWarnings = Boolean(warnings && warnings.length);

        if (hasWarnings) {
          return handleWarnings(warnings);
        }

        return handleSuccess();
      }

    default:
      {
        if (customHmrEventHandler) {
          customHmrEventHandler(obj);
          break;
        }

        break;
      }
  }
} // Is there a newer version of this code available?


function isUpdateAvailable() {
  /* globals __webpack_hash__ */
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  return mostRecentCompilationHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function afterApplyUpdates(fn) {
  if (canApplyUpdates()) {
    fn();
  } else {
    var handler = function handler(status) {
      if (status === 'idle') {
        module.hot.removeStatusHandler(handler);
        fn();
      }
    };

    module.hot.addStatusHandler(handler);
  }
} // Attempt to update code on the fly, fall back to a hard reload.


function tryApplyUpdates(onHotUpdateSuccess) {
  if (false) {}

  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  function handleApplyUpdates(err, updatedModules) {
    if (err || hadRuntimeError || !updatedModules) {
      if (err) {
        console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React tree.\n" + 'You might have a file which renders a React component but also exports a value that is imported by a non-React component.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible you are using class components at the top-level of your application, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one function component in your React tree.');
      } else if (hadRuntimeError) {
        console.warn('[Fast Refresh] performing full reload because your application had an unrecoverable error');
      }

      window.location.reload();
      return;
    }

    var hasUpdates = Boolean(updatedModules.length);

    if (typeof onHotUpdateSuccess === 'function') {
      // Maybe we want to do something.
      onHotUpdateSuccess(hasUpdates);
    }

    if (isUpdateAvailable()) {
      // While we were updating, there was a new update! Do it again.
      tryApplyUpdates(hasUpdates ? undefined : onHotUpdateSuccess);
    } else {
      if (undefined) {
        afterApplyUpdates(function () {
          if (self.__NEXT_HMR_CB) {
            self.__NEXT_HMR_CB();

            self.__NEXT_HMR_CB = null;
          }
        });
      }
    }
  } // https://webpack.js.org/api/hot-module-replacement/#check


  module.hot.check(
  /* autoApply */
  true).then(function (updatedModules) {
    handleApplyUpdates(null, updatedModules);
  }, function (err) {
    handleApplyUpdates(err, null);
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!*********************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "../node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/fouc.js":
/*!****************************************************!*\
  !*** ../node_modules/next/dist/client/dev/fouc.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent;

function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/on-demand-entries-client.js":
/*!************************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/on-demand-entries-client.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js"));

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "../node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _default = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var assetPrefix;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            assetPrefix = _ref.assetPrefix;

            _router["default"].ready(function () {
              _router["default"].events.on('routeChangeComplete', _onDemandEntriesUtils.setupPing.bind(void 0, assetPrefix, function () {
                return _router["default"].pathname;
              }));
            });

            (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
              return _router["default"].pathname;
            }, _onDemandEntriesUtils.currentPage); // prevent HMR connection from being closed when running tests

            if (!undefined) {
              document.addEventListener('visibilitychange', function (event) {
                var state = document.visibilityState;

                if (state === 'visible') {
                  (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
                    return _router["default"].pathname;
                  }, true);
                } else {
                  (0, _onDemandEntriesUtils.closePing)();
                }
              });
              window.addEventListener('beforeunload', function () {
                (0, _onDemandEntriesUtils.closePing)();
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _default(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!***********************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "../node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "../node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/prerender-indicator.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/prerender-indicator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = initializeBuildWatcher;

var _router = _interopRequireDefault(__webpack_require__(/*! ../router */ "../node_modules/next/dist/client/router.js"));

function initializeBuildWatcher() {
  var shadowHost = document.createElement('div');
  shadowHost.id = '__next-prerender-indicator'; // Make sure container is fixed and on a high zIndex so it shows

  shadowHost.style.position = 'fixed';
  shadowHost.style.bottom = '20px';
  shadowHost.style.right = '10px';
  shadowHost.style.width = 0;
  shadowHost.style.height = 0;
  shadowHost.style.zIndex = 99998;
  shadowHost.style.transition = 'all 100ms ease';
  document.body.appendChild(shadowHost);
  var shadowRoot;
  var prefix = '';

  if (shadowHost.attachShadow) {
    shadowRoot = shadowHost.attachShadow({
      mode: 'open'
    });
  } else {
    // If attachShadow is undefined then the browser does not support
    // the Shadow DOM, we need to prefix all the names so there
    // will be no conflicts
    shadowRoot = shadowHost;
    prefix = '__next-prerender-indicator-';
  } // Container


  var container = createContainer(prefix);
  shadowRoot.appendChild(container); // CSS

  var css = createCss(prefix);
  shadowRoot.appendChild(css);
  var expandEl = container.querySelector('a');
  var closeEl = container.querySelector("#".concat(prefix, "close")); // State

  var dismissKey = '__NEXT_DISMISS_PRERENDER_INDICATOR';
  var dismissUntil = parseInt(window.localStorage.getItem(dismissKey), 10);
  var dismissed = dismissUntil > new Date().getTime();
  var isVisible = !dismissed && window.__NEXT_DATA__.nextExport;

  function updateContainer() {
    if (isVisible) {
      container.classList.add("".concat(prefix, "visible"));
    } else {
      container.classList.remove("".concat(prefix, "visible"));
    }
  }

  var expandedClass = "".concat(prefix, "expanded");
  var toggleTimeout;

  var toggleExpand = function toggleExpand() {
    var expand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    clearTimeout(toggleTimeout);
    toggleTimeout = setTimeout(function () {
      if (expand) {
        expandEl.classList.add(expandedClass);
        closeEl.style.display = 'flex';
      } else {
        expandEl.classList.remove(expandedClass);
        closeEl.style.display = 'none';
      }
    }, 50);
  };

  closeEl.addEventListener('click', function () {
    var oneHourAway = new Date().getTime() + 1 * 60 * 60 * 1000;
    window.localStorage.setItem(dismissKey, oneHourAway + '');
    isVisible = false;
    updateContainer();
  });
  closeEl.addEventListener('mouseenter', function () {
    return toggleExpand();
  });
  closeEl.addEventListener('mouseleave', function () {
    return toggleExpand(false);
  });
  expandEl.addEventListener('mouseenter', function () {
    return toggleExpand();
  });
  expandEl.addEventListener('mouseleave', function () {
    return toggleExpand(false);
  });

  _router["default"].events.on('routeChangeComplete', function () {
    isVisible = window.next.isPrerendered;
    updateContainer();
  });

  updateContainer();
}

function createContainer(prefix) {
  var container = document.createElement('div');
  container.id = "".concat(prefix, "container");
  container.innerHTML = "\n    <button id=\"".concat(prefix, "close\" title=\"Hide indicator for session\">\n      <span>\xD7</span>\n    </button>\n    <a href=\"https://nextjs.org/docs#automatic-static-optimization-indicator\" target=\"_blank\" rel=\"noreferrer\">\n      <div id=\"").concat(prefix, "icon-wrapper\">\n          <svg width=\"15\" height=\"20\" viewBox=\"0 0 60 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M36 3L30.74 41H8L36 3Z\" fill=\"black\"/>\n          <path d=\"M25 77L30.26 39H53L25 77Z\" fill=\"black\"/>\n          <path d=\"M13.5 33.5L53 39L47.5 46.5L7 41.25L13.5 33.5Z\" fill=\"black\"/>\n          </svg>\n          Prerendered Page\n      </div>\n    </a>\n  ");
  return container;
}

function createCss(prefix) {
  var css = document.createElement('style');
  css.textContent = "\n    #".concat(prefix, "container {\n      position: absolute;\n      display: none;\n      bottom: 10px;\n      right: 15px;\n    }\n\n    #").concat(prefix, "close {\n      top: -10px;\n      right: -10px;\n      border: none;\n      width: 18px;\n      height: 18px;\n      color: #333333;\n      font-size: 16px;\n      cursor: pointer;\n      display: none;\n      position: absolute;\n      background: #ffffff;\n      border-radius: 100%;\n      align-items: center;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    #").concat(prefix, "container a {\n      color: inherit;\n      text-decoration: none;\n      width: 15px;\n      height: 23px;\n      overflow: hidden;\n\n      border-radius: 3px;\n      background: #fff;\n      color: #000;\n      font: initial;\n      cursor: pointer;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n      font-size: 14px;\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n      padding: 4px 2px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: flex;\n      transition: opacity 0.1s ease, bottom 0.1s ease, width 0.3s ease;\n      animation: ").concat(prefix, "fade-in 0.1s ease-in-out;\n    }\n\n    #").concat(prefix, "icon-wrapper {\n      width: 140px;\n      height: 20px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      position: relative;\n    }\n\n    #").concat(prefix, "icon-wrapper svg {\n      flex-shrink: 0;\n      margin-right: 3px;\n    }\n\n    #").concat(prefix, "container a.").concat(prefix, "expanded {\n      width: 135px;\n    }\n\n    #").concat(prefix, "container.").concat(prefix, "visible {\n      display: flex;\n      bottom: 10px;\n      opacity: 1;\n    }\n\n    @keyframes ").concat(prefix, "fade-in {\n      from {\n        bottom: 0px;\n        opacity: 0;\n      }\n      to {\n        bottom: 10px;\n        opacity: 1;\n      }\n    }\n  ");
  return css;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/dev/webpack-hot-middleware-client.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/client/dev/webpack-hot-middleware-client.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _hotDevClient = _interopRequireDefault(__webpack_require__(/*! ./error-overlay/hot-dev-client */ "../node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js"));

var _default = function _default(_ref) {
  var assetPrefix = _ref.assetPrefix;
  var options = {
    path: "".concat(assetPrefix, "/_next/webpack-hmr")
  };
  var devClient = (0, _hotDevClient["default"])(options);
  devClient.subscribeToHmrEvent(function (obj) {
    if (obj.action === 'reloadPage') {
      return window.location.reload();
    }

    if (obj.action === 'removedPage') {
      var _obj$data = _slicedToArray(obj.data, 1),
          page = _obj$data[0];

      if (page === window.next.router.pathname) {
        return window.location.reload();
      }

      return;
    }

    if (obj.action === 'addedPage') {
      var _obj$data2 = _slicedToArray(obj.data, 1),
          _page = _obj$data2[0];

      if (_page === window.next.router.pathname && typeof window.next.router.components[_page] === 'undefined') {
        return window.location.reload();
      }

      return;
    }

    throw new Error('Unexpected action ' + obj.action);
  });
  return devClient;
};

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/head-manager.js":
/*!********************************************************!*\
  !*** ../node_modules/next/dist/client/head-manager.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = initHeadManager;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://err.sh/next.js/next-head-count-missing');
      return;
    }
  }

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return function (head) {
    var promise = updatePromise = Promise.resolve().then(function () {
      if (promise !== updatePromise) return;
      updatePromise = null;
      var tags = {};
      head.forEach(function (h) {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      var titleComponent = tags.title ? tags.title[0] : null;
      var title = '';

      if (titleComponent) {
        var children = titleComponent.props.children;
        title = typeof children === 'string' ? children : children.join('');
      }

      if (title !== document.title) document.title = title;
      ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
        updateElements(type, tags[type] || []);
      });
    });
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/index.js":
/*!*************************************************!*\
  !*** ../node_modules/next/dist/client/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard3 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"));

var _router = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");

var _querystring = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../node_modules/next/dist/next-server/lib/head-manager-context.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../node_modules/next/dist/next-server/lib/router-context.js");

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var envConfig = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/runtime-config */ "../node_modules/next/dist/next-server/lib/runtime-config.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _headManager = _interopRequireDefault(__webpack_require__(/*! ./head-manager */ "../node_modules/next/dist/client/head-manager.js"));

var _pageLoader = _interopRequireDefault(__webpack_require__(/*! ./page-loader */ "../node_modules/next/dist/client/page-loader.js"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__(/*! ./performance-relayer */ "../node_modules/next/dist/client/performance-relayer.js"));
/* global location */
/// <reference types="react-dom/experimental" />


if (!('finally' in Promise.prototype)) {
  // eslint-disable-next-line no-extend-native
  Promise.prototype["finally"] = __webpack_require__(/*! next/dist/build/polyfills/finally-polyfill.min */ "../node_modules/next/dist/build/polyfills/finally-polyfill.min.js");
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "9.4.4";
exports.version = version;
var props = data.props,
    err = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)();
var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var updateHead = (0, _headManager["default"])();
var appElement = document.getElementById('__next');
var lastAppProps;

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var Component;
var App, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      this.props.fn(err, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();

      if (false) {} // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)


      if (router.isSsr && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || props && props.__N_SSG && location.search)) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + (0, _querystring.stringify)((0, _extends2["default"])((0, _extends2["default"])({}, router.query), (0, _querystring.parse)(location.search.substr(1)))), asPath, {
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }

      if (undefined) {
        window.__NEXT_HYDRATED = true;

        if (window.__NEXT_HYDRATED_CB) {
          window.__NEXT_HYDRATED_CB();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (false) {}

      if (true) {
        var _require = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "../node_modules/@next/react-dev-overlay/lib/client.js"),
            ReactDevOverlay = _require.ReactDevOverlay;

        return /*#__PURE__*/_react["default"].createElement(ReactDevOverlay, null, this.props.children);
      }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _ref4,
        passedWebpackHMR,
        _yield$pageLoader$loa,
        app,
        mod,
        initialErr,
        _yield$pageLoader$loa2,
        _require2,
        isValidElementType,
        _require3,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, passedWebpackHMR = _ref4.webpackHMR;

            // This makes sure this specific lines are removed in production
            if (true) {
              webpackHMR = passedWebpackHMR;
            }

            _context.next = 4;
            return pageLoader.loadPageScript('/_app');

          case 4:
            _yield$pageLoader$loa = _context.sent;
            app = _yield$pageLoader$loa.page;
            mod = _yield$pageLoader$loa.mod;
            App = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref5) {
                var id = _ref5.id,
                    name = _ref5.name,
                    startTime = _ref5.startTime,
                    value = _ref5.value,
                    duration = _ref5.duration,
                    entryType = _ref5.entryType,
                    entries = _ref5.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            initialErr = err;
            _context.prev = 10;
            ;
            _context.next = 14;
            return pageLoader.loadPage(page);

          case 14:
            _yield$pageLoader$loa2 = _context.sent;
            Component = _yield$pageLoader$loa2.page;

            if (false) {}

            _require2 = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js"), isValidElementType = _require2.isValidElementType;

            if (isValidElementType(Component)) {
              _context.next = 20;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 20:
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](10);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t0;

          case 25:
            if (true) {
              _require3 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "../node_modules/@next/react-dev-overlay/lib/client.js"), getNodeError = _require3.getNodeError; // Server-side runtime errors need to be re-thrown on the client-side so
              // that the overlay is rendered.

              if (initialErr) {
                if (initialErr === err) {
                  setTimeout(function () {
                    var error;

                    try {
                      // Generate a new error object. We `throw` it because some browsers
                      // will set the `stack` when thrown, and we want to ensure ours is
                      // not overridden when we re-throw it below.
                      throw new Error(initialErr.message);
                    } catch (e) {
                      error = e;
                    }

                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    var node = getNodeError(error);
                    throw node;
                  });
                } // We replaced the server-side error with a client-side error, and should
                // no longer rewrite the stack trace to a Node error.
                else {
                    setTimeout(function () {
                      throw initialErr;
                    });
                  }
              }
            }

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 29:
            exports.router = router = (0, _router.createRouter)(page, query, asPath, {
              initialProps: props,
              pageLoader: pageLoader,
              App: App,
              Component: Component,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: isFallback,
              subscription: function subscription(_ref6, App) {
                var Component = _ref6.Component,
                    props = _ref6.props,
                    err = _ref6.err;
                return render({
                  App: App,
                  Component: Component,
                  props: props,
                  err: err
                });
              }
            }); // call init-client middleware

            if (false) {}

            renderCtx = {
              App: App,
              Component: Component,
              props: props,
              err: initialErr
            };

            if (true) {
              _context.next = 35;
              break;
            }

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 35:
            if (false) {}

            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 22]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports["default"] = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(props) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!props.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(props);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(props);

          case 7:
            _context2.next = 14;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (true) {
              // Ensure this error is displayed in the overlay in development
              setTimeout(function () {
                throw _context2.t0;
              });
            }

            _context2.next = 14;
            return renderError((0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
              err: _context2.t0
            }));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(props) {
  var App = props.App,
      err = props.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (true) {
    // A Next.js rendering runtime error is always unrecoverable
    // FIXME: let's make this recoverable (error in GIP client-transition)
    webpackHMR.onUnrecoverableError(); // We need to render an empty <App> so that the `<ReactDevOverlay>` can
    // render itself.

    return doRender({
      App: function App() {
        return null;
      },
      props: {},
      Component: function Component() {
        return null;
      },
      err: null
    });
  }

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref7) {
    var ErrorComponent = _ref7.page;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(props.props ? props.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
        err: err,
        Component: ErrorComponent,
        props: initProps
      }));
    });
  });
} // If hydrate does not exist, eg in preact.


var isInitialRender = typeof _reactDom["default"].hydrate === 'function';
var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (isInitialRender) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      isInitialRender = false;

      if (onPerfEntry && _utils.ST) {
        (0, _performanceRelayer["default"])(onPerfEntry);
      }
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref8) {
  var children = _ref8.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: App,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: updateHead
  }, children)));
}

_c = AppContainer;

var wrapApp = function wrapApp(App) {
  return function (props) {
    var appProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
      Component: Component,
      err: err,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

function doRender(_x2) {
  return _doRender.apply(this, arguments);
}

function _doRender() {
  _doRender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(_ref9) {
    var App, Component, props, err, appProps, resolvePromise, renderPromise, elem;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            App = _ref9.App, Component = _ref9.Component, props = _ref9.props, err = _ref9.err;
            Component = Component || lastAppProps.Component;
            props = props || lastAppProps.props;
            appProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {}, {
              Component: Component,
              err: err,
              router: router
            }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

            lastAppProps = appProps;
            renderPromise = new Promise(function (resolve, reject) {
              if (_lastRenderReject) {
                _lastRenderReject();
              }

              resolvePromise = function resolvePromise() {
                _lastRenderReject = null;
                resolve();
              };

              _lastRenderReject = function lastRenderReject() {
                _lastRenderReject = null;
                reject();
              };
            });
            elem = /*#__PURE__*/_react["default"].createElement(Root, {
              callback: resolvePromise
            }, /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps))); // We catch runtime errors using componentDidCatch which will trigger renderError

            renderReactElement( false ? /*#__PURE__*/undefined : elem, appElement);
            _context3.next = 10;
            return renderPromise;

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _doRender.apply(this, arguments);
}

function Root(_ref10) {
  _s();

  var callback = _ref10.callback,
      children = _ref10.children;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return children;
}

_s(Root, "n7/vCynhJvM+pLkyL2DMQUF0odM=");

_c2 = Root;

var _c, _c2;

$RefreshReg$(_c, "AppContainer");
$RefreshReg$(_c2, "Root");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/next-dev.js":
/*!****************************************************!*\
  !*** ../node_modules/next/dist/client/next-dev.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var next = _interopRequireWildcard(__webpack_require__(/*! ./ */ "../node_modules/next/dist/client/index.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./dev/event-source-polyfill */ "../node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _onDemandEntriesClient = _interopRequireDefault(__webpack_require__(/*! ./dev/on-demand-entries-client */ "../node_modules/next/dist/client/dev/on-demand-entries-client.js"));

var _webpackHotMiddlewareClient = _interopRequireDefault(__webpack_require__(/*! ./dev/webpack-hot-middleware-client */ "../node_modules/next/dist/client/dev/webpack-hot-middleware-client.js"));

var _devBuildWatcher = _interopRequireDefault(__webpack_require__(/*! ./dev/dev-build-watcher */ "../node_modules/next/dist/client/dev/dev-build-watcher.js"));

var _prerenderIndicator = _interopRequireDefault(__webpack_require__(/*! ./dev/prerender-indicator */ "../node_modules/next/dist/client/dev/prerender-indicator.js"));

var _fouc = __webpack_require__(/*! ./dev/fouc */ "../node_modules/next/dist/client/dev/fouc.js");
/* globals import('./dev/noop'); */
// Temporary workaround for the issue described here:
// https://github.com/vercel/next.js/issues/3775#issuecomment-407438123
// The runtimeChunk doesn't have dynamic import handling code when there hasn't been a dynamic import
// The runtimeChunk can't hot reload itself currently to correct it when adding pages using on-demand-entries
// eslint-disable-next-line no-unused-expressions


__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./dev/noop */ "../node_modules/next/dist/client/dev/noop.js", 7));
; // Support EventSource on Internet Explorer 11

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var _window = window,
    assetPrefix = _window.__NEXT_DATA__.assetPrefix;
var prefix = assetPrefix || '';
var webpackHMR = (0, _webpackHotMiddlewareClient["default"])({
  assetPrefix: prefix
});
window.next = next;
(0, next["default"])({
  webpackHMR: webpackHMR
}).then(function (_ref) {
  var emitter = _ref.emitter,
      renderCtx = _ref.renderCtx,
      render = _ref.render;
  (0, _onDemandEntriesClient["default"])({
    assetPrefix: prefix
  });
  if (true) (0, _devBuildWatcher["default"])();

  if ( true && // disable by default in electron
  !(typeof process !== 'undefined' && 'electron' in process.versions)) {
    (0, _prerenderIndicator["default"])();
  } // delay rendering until after styles have been applied in development


  (0, _fouc.displayContent)(function () {
    render(renderCtx);
  });
})["catch"](function (err) {
  console.error('Error was not caught', err);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/page-loader.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/page-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _url = __webpack_require__(/*! url */ "../node_modules/native-url/dist/index.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

var _isDynamic = __webpack_require__(/*! ./../next-server/lib/router/utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./../next-server/lib/router/utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./../next-server/lib/router/utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _router = __webpack_require__(/*! ./../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js");

function hasRel(rel, link) {
  try {
    link = document.createElement('link');
    return link.relList.supports(rel);
  } catch (_unused) {}
}

var relPrefetch = hasRel('preload') && !hasRel('prefetch') ? // https://caniuse.com/#feat=link-rel-preload
// macOS and iOS (Safari does not support prefetch)
'preload' : // https://caniuse.com/#feat=link-rel-prefetch
// IE 11, Edge 12+, nearly all evergreen
'prefetch';
var hasNoModule = ('noModule' in document.createElement('script'));
/** @param {string} route */

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
  }

  route = route.replace(/\/index$/, '/');
  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

function appendLink(href, rel, as) {
  return new Promise(function (res, rej, link) {
    link = document.createElement('link');
    link.crossOrigin = undefined;
    link.href = href;
    link.rel = rel;
    if (as) link.as = as;
    link.onload = res;
    link.onerror = rej;
    document.head.appendChild(link);
  });
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.pageRegisterEvents = (0, _mitt["default"])();
    this.loadingRoutes = {};

    if (false) {}
    /** @type {Promise<Set<string>>} */


    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  } // Returns a promise for the dependencies for a particular route


  _createClass(PageLoader, [{
    key: "getDependencies",
    value: function getDependencies(route) {
      var _this = this;

      return this.promisedBuildManifest.then(function (man) {
        return man[route] && man[route].map(function (url) {
          return "".concat(_this.assetPrefix, "/_next/").concat(encodeURI(url));
        }) || [];
      });
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath) {
      var _this2 = this;

      var getHrefForSlug =
      /** @type string */
      function getHrefForSlug(path) {
        path = (0, _router.delBasePath)(path);
        return "".concat(_this2.assetPrefix, "/_next/data/").concat(_this2.buildId).concat(path === '/' ? '/index' : path, ".json");
      };

      var _ref = (0, _url.parse)(href, true),
          hrefPathname = _ref.pathname,
          query = _ref.query;

      var _ref2 = (0, _url.parse)(asPath),
          asPathname = _ref2.pathname;

      var route = normalizeRoute(hrefPathname);
      var isDynamic = (0, _isDynamic.isDynamicRoute)(route),
          interpolatedRoute;

      if (isDynamic) {
        var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
        var dynamicGroups = dynamicRegex.groups;
        var dynamicMatches = // Try to match the dynamic route against the asPath
        (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query;
        interpolatedRoute = route;

        if (!Object.keys(dynamicGroups).every(function (param) {
          var value = dynamicMatches[param];
          var repeat = dynamicGroups[param].repeat; // support single-level catch-all
          // TODO: more robust handling for user-error (passing `/`)

          if (repeat && !Array.isArray(value)) value = [value];
          return param in dynamicMatches && ( // Interpolate group into data URL if present
          interpolatedRoute = interpolatedRoute.replace("[".concat(repeat ? '...' : '').concat(param, "]"), repeat ? value.map(encodeURIComponent).join('/') : encodeURIComponent(value)));
        })) {
          interpolatedRoute = ''; // did not satisfy all requirements
          // n.b. We ignore this error because we handle warning for this case in
          // development in the `<Link>` component directly.
        }
      }

      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "prefetchData",
    value: function prefetchData(href, asPath) {
      var _this3 = this;

      var _ref3 = (0, _url.parse)(href, true),
          hrefPathname = _ref3.pathname;

      var route = normalizeRoute(hrefPathname);
      return this.promisedSsgManifest.then(function (s, _dataHref) {
        return (// Check if the route requires a data file
          s.has(route) && ( // Try to generate data href, noop when falsy
          _dataHref = _this3.getDataHref(href, asPath)) && // noop when data has already been prefetched (dedupe)
          !document.querySelector("link[rel=\"".concat(relPrefetch, "\"][href^=\"").concat(_dataHref, "\"]")) && // Inject the `<link rel=prefetch>` tag for above computed `href`.
          appendLink(_dataHref, relPrefetch, 'fetch')
        );
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.loadPageScript(route);
    }
  }, {
    key: "loadPageScript",
    value: function loadPageScript(route) {
      var _this4 = this;

      route = normalizeRoute(route);
      return new Promise(function (resolve, reject) {
        var fire = function fire(_ref4) {
          var error = _ref4.error,
              page = _ref4.page,
              mod = _ref4.mod;

          _this4.pageRegisterEvents.off(route, fire);

          delete _this4.loadingRoutes[route];

          if (error) {
            reject(error);
          } else {
            resolve({
              page: page,
              mod: mod
            });
          }
        }; // If there's a cached version of the page, let's use it.


        var cachedPage = _this4.pageCache[route];

        if (cachedPage) {
          var error = cachedPage.error,
              page = cachedPage.page,
              mod = cachedPage.mod;
          error ? reject(error) : resolve({
            page: page,
            mod: mod
          });
          return;
        } // Register a listener to get the page


        _this4.pageRegisterEvents.on(route, fire); // If the page is loading via SSR, we need to wait for it
        // rather downloading it again.


        if (document.querySelector("script[data-next-page=\"".concat(route, "\"]"))) {
          return;
        }

        if (!_this4.loadingRoutes[route]) {
          _this4.loadingRoutes[route] = true;

          if (false) {} else {
            _this4.loadRoute(route);
          }
        }
      });
    }
  }, {
    key: "loadRoute",
    value: function loadRoute(route) {
      route = normalizeRoute(route);
      var scriptRoute = route === '/' ? '/index.js' : "".concat(route, ".js");
      var url = "".concat(this.assetPrefix, "/_next/static/").concat(encodeURIComponent(this.buildId), "/pages").concat(encodeURI(scriptRoute));
      this.loadScript(url, route, true);
    }
  }, {
    key: "loadScript",
    value: function loadScript(url, route, isPage) {
      var _this5 = this;

      var script = document.createElement('script');

      if (false) {}

      script.crossOrigin = undefined;
      script.src = url;

      script.onerror = function () {
        var error = new Error("Error loading script ".concat(url));
        error.code = 'PAGE_LOAD_ERROR';

        _this5.pageRegisterEvents.emit(route, {
          error: error
        });
      };

      document.body.appendChild(script);
    } // This method if called by the route code.

  }, {
    key: "registerPage",
    value: function registerPage(route, regFn) {
      var _this6 = this;

      var register = function register() {
        try {
          var mod = regFn();
          var pageData = {
            page: mod["default"] || mod,
            mod: mod
          };
          _this6.pageCache[route] = pageData;

          _this6.pageRegisterEvents.emit(route, pageData);
        } catch (error) {
          _this6.pageCache[route] = {
            error: error
          };

          _this6.pageRegisterEvents.emit(route, {
            error: error
          });
        }
      };

      if (true) {
        // Wait for webpack to become idle if it's not.
        // More info: https://github.com/vercel/next.js/pull/1511
        if ( true && module.hot.status() !== 'idle') {
          console.log("Waiting for webpack to become \"idle\" to initialize the page: \"".concat(route, "\""));

          var check = function check(status) {
            if (status === 'idle') {
              module.hot.removeStatusHandler(check);
              register();
            }
          };

          module.hot.status(check);
          return;
        }
      }

      register();
    }
    /**
    * @param {string} route
    * @param {boolean} [isDependency]
    */

  }, {
    key: "prefetch",
    value: function prefetch(route, isDependency) {
      var _this7 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }
      /** @type {string} */


      var url;

      if (isDependency) {
        url = route;
      } else {
        route = normalizeRoute(route);
        var scriptRoute = "".concat(route === '/' ? '/index' : route, ".js");

        if (false) {}

        url = "".concat(this.assetPrefix, "/_next/static/").concat(encodeURIComponent(this.buildId), "/pages").concat(encodeURI(scriptRoute));
      }

      return Promise.all(document.querySelector("link[rel=\"".concat(relPrefetch, "\"][href^=\"").concat(url, "\"], script[data-next-page=\"").concat(route, "\"]")) ? [] : [appendLink(url, relPrefetch, url.match(/\.css$/) ? 'style' : 'script'),  false && false]).then( // do not return any data
      function () {}, // swallow prefetch errors
      function () {});
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/performance-relayer.js":
/*!***************************************************************!*\
  !*** ../node_modules/next/dist/client/performance-relayer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = void 0;

var _webVitals = __webpack_require__(/*! web-vitals */ "../node_modules/web-vitals/dist/web-vitals.es5.min.js");

var _default = function _default(onPerfEntry) {
  (0, _webVitals.getCLS)(onPerfEntry);
  (0, _webVitals.getFID)(onPerfEntry);
  (0, _webVitals.getFCP)(onPerfEntry);
  (0, _webVitals.getLCP)(onPerfEntry);
  (0, _webVitals.getTTFB)(onPerfEntry);
};

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "../node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: ".concat(eventField)); // tslint:disable-next-line:no-console

          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/compiled/strip-ansi/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/next/dist/compiled/strip-ansi/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname, module) {module.exports = function (e, r) {
  "use strict";

  var t = {};

  function __webpack_require__(r) {
    if (t[r]) {
      return t[r].exports;
    }

    var n = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    e[r].call(n.exports, n, n.exports, __webpack_require__);
    n.l = true;
    return n.exports;
  }

  __webpack_require__.ab = __dirname + "/";

  function startup() {
    return __webpack_require__(855);
  }

  return startup();
}({
  849: function _(e) {
    "use strict";

    e.exports = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$onlyFirst = _ref.onlyFirst,
          e = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

      var r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(r, e ? undefined : "g");
    };
  },
  855: function _(e, r, t) {
    "use strict";

    var n = t(849);

    e.exports = function (e) {
      return typeof e === "string" ? e.replace(n(), "") : e;
    };
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, "/", __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!*************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext(null);

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router-context.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = _react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");

exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports["default"] = void 0;

var _url2 = __webpack_require__(/*! url */ "../node_modules/native-url/dist/index.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(delBasePath(pathname), ".json")),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  function Router(_pathname, _query, _as2, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var pathname = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: pathname,
          query: query
        }), (0, _utils.getURL)());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && (0, _url2.parse)(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _ref2 = (0, _url2.parse)(asPath, true),
          pathname = _ref2.pathname,
          query = _ref2.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as2.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: _pathname,
          query: _query
        }), _as2);
      }

      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign({}, data, {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (_utils.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
        var as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _ref3 = (0, _url2.parse)(url, true),
            pathname = _ref3.pathname,
            query = _ref3.query,
            protocol = _ref3.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/vercel/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if ((0, _isDynamic.isDynamicRoute)(route)) {
          var _ref4 = (0, _url2.parse)(as),
              asPathname = _ref4.pathname;

          var routeRegex = (0, _routeRegex.getRouteRegex)(route);
          var routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/vercel/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo).then(function () {
            if (error) {
              Router.events.emit('routeChangeError', error, as);
              throw error;
            }

            Router.events.emit('routeChangeComplete', as);
            return resolve(true);
          });
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _ref5 = (0, _url2.parse)(url),
            pathname = _ref5.pathname,
            protocol = _ref5.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/vercel/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                route = delBasePath(route);
                _context.next = 5;
                return this.pageLoader.loadPage(route);

              case 5:
                componentResult = _context.sent;

                if (!cancelled) {
                  _context.next = 10;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 10:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context.abrupt("return", componentResult);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchComponent(_x) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      return this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    var isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups,
    namedRegex: namedParameterizedRoute ? "^".concat(namedParameterizedRoute, "(?:/)?$") : undefined
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/runtime-config.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/runtime-config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "../node_modules/native-url/dist/index.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/platform/platform.js":
/*!********************************************!*\
  !*** ../node_modules/platform/platform.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': 'Edge' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'WebPositive',
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation 3',
      'PlayStation 4',
      'PlayStation Vita',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation 4': 1, 'PlayStation 3': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
          os || (os = data[0].os || null);
          try {
            data[1] = context.require('ringo/engine').version;
            version = data[1].join('.');
            name = 'RingoJS';
          } catch(e) {
            if (data[0].global.system == context.system) {
              name = 'Narwhal';
            }
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          name = 'Node.js';
          arch = data.arch;
          os = data.platform;
          version = /[\d.]+/.exec(data.version)[0];
        }
        else if (rhino) {
          name = 'Rhino';
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      os = null;
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures && context.external === null) {
      description.unshift('platform preview');
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/querystring-es3/decode.js":
/*!*************************************************!*\
  !*** ../node_modules/querystring-es3/decode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../node_modules/querystring-es3/encode.js":
/*!*************************************************!*\
  !*** ../node_modules/querystring-es3/encode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../node_modules/querystring-es3/index.js":
/*!************************************************!*\
  !*** ../node_modules/querystring-es3/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "../node_modules/react-dom/index.js":
/*!************************************************************************************************!*\
  !*** delegated ../node_modules/react-dom/index.js from dll-reference dll_382399d647b8f520b144 ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_382399d647b8f520b144 */ "dll-reference dll_382399d647b8f520b144"))("../node_modules/react-dom/index.js");

/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react/index.js":
/*!********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference dll_382399d647b8f520b144 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_382399d647b8f520b144 */ "dll-reference dll_382399d647b8f520b144"))("../node_modules/react/index.js");

/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js":
/*!************************************************************************!*\
  !*** ../node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js ***!
  \************************************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
var UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */

function parse(stackString) {
  var lines = stackString.split('\n');
  return lines.reduce(function (stack, line) {
    var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);

    if (parseResult) {
      stack.push(parseResult);
    }

    return stack;
  }, []);
}
var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;

function parseChrome(line) {
  var parts = chromeRe.exec(line);

  if (!parts) {
    return null;
  }

  var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

  var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

  var submatch = chromeEvalRe.exec(parts[2]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1]; // url

    parts[3] = submatch[2]; // line

    parts[4] = submatch[3]; // column
  }

  return {
    file: !isNative ? parts[2] : null,
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: isNative ? [parts[2]] : [],
    lineNumber: parts[3] ? +parts[3] : null,
    column: parts[4] ? +parts[4] : null
  };
}

var winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseWinjs(line) {
  var parts = winjsRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function parseGecko(line) {
  var parts = geckoRe.exec(line);

  if (!parts) {
    return null;
  }

  var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
  var submatch = geckoEvalRe.exec(parts[3]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = null; // no column when eval
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: parts[2] ? parts[2].split(',') : [],
    lineNumber: parts[4] ? +parts[4] : null,
    column: parts[5] ? +parts[5] : null
  };
}

var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

function parseJSC(line) {
  var parts = javaScriptCoreRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[4],
    column: parts[5] ? +parts[5] : null
  };
}

var nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseNode(line) {
  var parts = nodeRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}




/***/ }),

/***/ "../node_modules/strip-ansi/index.js":
/*!*******************************************!*\
  !*** ../node_modules/strip-ansi/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var ansiRegex = __webpack_require__(/*! ansi-regex */ "../node_modules/strip-ansi/node_modules/ansi-regex/index.js");

module.exports = function (string) {
  return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/strip-ansi/node_modules/ansi-regex/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/strip-ansi/node_modules/ansi-regex/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$onlyFirst = _ref.onlyFirst,
      onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, onlyFirst ? undefined : 'g');
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/web-vitals/dist/web-vitals.es5.min.js":
/*!*************************************************************!*\
  !*** ../node_modules/web-vitals/dist/web-vitals.es5.min.js ***!
  \*************************************************************/
/*! exports provided: getCLS, getFCP, getFID, getLCP, getTTFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return h; });
var t,n,e=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:n,delta:0,entries:[],id:e(),isFinal:!1}},a=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},r=!1,o=!1,s=function(t){r=!t.persisted},u=function(){addEventListener("pagehide",s),addEventListener("unload",(function(){}))},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o||(u(),o=!0),addEventListener("visibilitychange",(function(n){var e=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:e,isUnloading:r})}),{capture:!0,once:n})},l=function(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),n.value>=0&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}},p=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=i("CLS",0),r=function(t){t.hadRecentInput||(e.value+=t.value,e.entries.push(t),s())},o=a("layout-shift",r),s=l(t,e,o,n);c((function(t){var n=t.isUnloading;o&&o.takeRecords().map(r),n&&(e.isFinal=!0),s()}))},d=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,c((function(n){var e=n.timeStamp;return t=e}),!0)),{get timeStamp(){return t}}},m=function(t){var n=i("FCP"),e=d(),r=a("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<e.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),o())})),o=l(t,n,r)},v=function(t){var n=i("FID"),e=d(),r=function(t){t.startTime<e.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,s())},o=a("first-input",r),s=l(t,n,o);c((function(){o&&(o.takeRecords().map(r),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<e.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],s())}))},f=function(){return n||(n=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))),n},g=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=i("LCP"),r=d(),o=function(t){var n=t.startTime;n<r.timeStamp?(e.value=n,e.entries.push(t)):e.isFinal=!0,u()},s=a("largest-contentful-paint",o),u=l(t,e,s,n),p=function(){e.isFinal||(s&&s.takeRecords().map(o),e.isFinal=!0,u())};f().then(p),c(p,!0)},h=function(t){var n,e=i("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],e.isFinal=!0,t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)};


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "dll-reference dll_382399d647b8f520b144":
/*!*******************************************!*\
  !*** external "dll_382399d647b8f520b144" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_382399d647b8f520b144;

/***/ })

},[["../node_modules/next/dist/client/next-dev.js","static/runtime/webpack.js"]]]);