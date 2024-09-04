import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sectionsApi = createApi({


    reducerPath: 'sectionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://25.40.19.167:8080/',
    }),

    endpoints:(build) => ({
        getSections: build.query({
            query: () => 'catalog/'
        })
    })


})

export const {useGetSectionsQuery} = sectionsApi