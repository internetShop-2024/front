"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _cartSlicer = _interopRequireDefault(require("./cartSlicer"));

var _productApi = require("./productApi");

var _userApi = require("./userApi");

var _reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _toolkit.configureStore)({
  reducer: (_reducer = {
    cart: _cartSlicer["default"]
  }, _defineProperty(_reducer, _productApi.productApi.reducerPath, _productApi.productApi.reducer), _defineProperty(_reducer, _userApi.userApi.reducerPath, _userApi.userApi.reducer), _reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_productApi.productApi.middleware).concat(_userApi.userApi.middleware);
  }
});

exports["default"] = _default;