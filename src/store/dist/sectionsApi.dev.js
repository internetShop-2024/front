"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetSectionsQuery = exports.sectionsApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var sectionsApi = (0, _react.createApi)({
  reducerPath: 'sectionsApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: 'https://superogshmal.pp.ua/'
  }),
  endpoints: function endpoints(build) {
    return {
      getSections: build.query({
        query: function query() {
          return 'catalog/';
        }
      })
    };
  }
});
exports.sectionsApi = sectionsApi;
var useGetSectionsQuery = sectionsApi.useGetSectionsQuery;
exports.useGetSectionsQuery = useGetSectionsQuery;