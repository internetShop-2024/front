"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetByPriceQuery = exports.useSetReviewMutation = exports.useGetProductQuery = exports.useGetProductsQuery = exports.productApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var productApi = (0, _react.createApi)({
  reducerPath: 'productApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: 'https://superogshmal.pp.ua/',
    prepareHeaders: function prepareHeaders(headers) {
      var token = localStorage.getItem('token');
      headers.set('Authorization', "".concat(token));
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: function endpoints(build) {
    return {
      getProducts: build.query({
        query: function query() {
          return 'products';
        }
      }),
      getProduct: build.query({
        query: function query(id) {
          return {
            url: "products/?id=".concat(id),
            method: "GET"
          };
        }
      }),
      setReview: build.mutation({
        query: function query(body) {
          return {
            url: "reviews?id=".concat(body.id),
            method: 'POST',
            body: body
          };
        }
      }),
      getByPrice: build.query({
        query: function query(min, max) {
          return {
            url: "products/?price=".concat(min, ", ").concat(max),
            method: "GET"
          };
        }
      })
    };
  }
});
exports.productApi = productApi;
var useGetProductsQuery = productApi.useGetProductsQuery,
    useGetProductQuery = productApi.useGetProductQuery,
    useSetReviewMutation = productApi.useSetReviewMutation,
    useGetByPriceQuery = productApi.useGetByPriceQuery;
exports.useGetByPriceQuery = useGetByPriceQuery;
exports.useSetReviewMutation = useSetReviewMutation;
exports.useGetProductQuery = useGetProductQuery;
exports.useGetProductsQuery = useGetProductsQuery;