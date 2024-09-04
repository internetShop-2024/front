"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRegistarionMutation = exports.useAuthorizationMutation = exports.userApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var userApi = (0, _react.createApi)({
  reducerPath: 'userApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: 'https://superogshmal.pp.ua/users/'
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
      }),
      registarion: build.mutation({
        query: function query(body) {
          return {
            url: 'register',
            method: 'POST',
            body: body
          };
        }
      })
    };
  }
});
exports.userApi = userApi;
var useAuthorizationMutation = userApi.useAuthorizationMutation,
    useRegistarionMutation = userApi.useRegistarionMutation;
exports.useRegistarionMutation = useRegistarionMutation;
exports.useAuthorizationMutation = useAuthorizationMutation;