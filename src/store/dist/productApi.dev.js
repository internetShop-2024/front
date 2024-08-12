"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteProductMutation = exports.useAddProductMutation = exports.useGetProductsQuery = exports.productApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var productApi = (0, _react.createApi)({
  reducerPath: 'productApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: 'http://46.149.190.25:5000/',
    prepareHeaders: function prepareHeaders(headers) {
      var authToken = "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFmMzExNmJkNTBmNjBhMGU5Nzg3ZjQiLCJ1c2VybmFtZSI6IkFkYXNkIiwiX192IjowLCJjYWxscyI6W3siY3JlYXRlZEF0IjoiMjAyNC0wOC0wN1QxMDoxODo1OS41NzBaIn0seyJjcmVhdGVkQXQiOiIyMDI0LTA4LTA3VDEwOjE5OjA3LjY0OFoifSx7ImNyZWF0ZWRBdCI6IjIwMjQtMDgtMDdUMTA6MTk6NDQuODkwWiJ9XSwiaWF0IjoxNzIzMTM3MjM3LCJleHAiOjE3MjMyMjM2Mzd9.27rxlX6uEEbY5K-Elgv9GQPTtzvV2lnIogEhL-RGdak; Path=/; HttpOnly; Secure";
      headers.set('Authorization', "".concat(authToken));
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
      addProduct: build.mutation({
        query: function query(body) {
          return {
            url: "products/",
            method: "POST",
            body: body
          };
        }
      }),
      deleteProduct: build.mutation({
        query: function query(id) {
          return {
            url: "products?id=".concat(id),
            method: "DELETE"
          };
        }
      })
    };
  }
});
exports.productApi = productApi;
var useGetProductsQuery = productApi.useGetProductsQuery,
    useAddProductMutation = productApi.useAddProductMutation,
    useDeleteProductMutation = productApi.useDeleteProductMutation;
exports.useDeleteProductMutation = useDeleteProductMutation;
exports.useAddProductMutation = useAddProductMutation;
exports.useGetProductsQuery = useGetProductsQuery;