import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sectionsApi = createApi({


    reducerPath: 'sectionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://superogshmal.pp.ua/',
    }),

    endpoints:(build) => ({
        getSections: build.query({
            query: () => 'catalog/'
        })
    })


})

export const {useGetSectionsQuery} = sectionsApi