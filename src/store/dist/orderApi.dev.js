"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePayFunctionMutation = exports.useSetOrderMutation = exports.orderApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var orderApi = (0, _react.createApi)({
  reducerPath: 'orderApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: 'http://25.40.19.167:8080/'
  }),
  endpoints: function endpoints(build) {
    return {
      setOrder: build.mutation({
        query: function query(body) {
          return {
            url: "order",
            method: "POST",
            body: body
          };
        }
      }),
      payFunction: build.mutation({
        query: function query(body) {
          return {
            url: "https://api.monobank.ua/api/merchant/invoice/create",
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'X-Token': "uVBYrCjDF5a4h2wJY0H-aGGHFBKDlmP3hAxL8oA1hoI0"
            },
            body: body
          };
        }
      })
    };
  }
});
exports.orderApi = orderApi;
var useSetOrderMutation = orderApi.useSetOrderMutation,
    usePayFunctionMutation = orderApi.usePayFunctionMutation;
exports.usePayFunctionMutation = usePayFunctionMutation;
exports.useSetOrderMutation = useSetOrderMutation;