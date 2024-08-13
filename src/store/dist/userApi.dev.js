"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuthorizationMutation = exports.userApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var userApi = (0, _react.createApi)({
  reducerPath: 'userApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: 'http://46.149.190.25:5000/users/'
  }),
  endpoints: function endpoints(build) {
    return {
      authorization: build.mutation({
        query: function query(body) {
          return {
            url: 'authorization',
            method: 'POST',
            body: body
          };
        }
      })
    };
  }
});
exports.userApi = userApi;
var useAuthorizationMutation = userApi.useAuthorizationMutation;
exports.useAuthorizationMutation = useAuthorizationMutation;