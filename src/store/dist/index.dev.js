"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _cartSlicer = _interopRequireDefault(require("./cartSlicer"));

var _productApi = require("./productApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _toolkit.configureStore)({
  reducer: _defineProperty({
    cart: _cartSlicer["default"]
  }, _productApi.productApi.reducerPath, _productApi.productApi.reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_productApi.productApi.middleware);
  }
});

exports["default"] = _default;