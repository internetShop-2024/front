import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://superogshmal.pp.ua/users/'
    }),

    endpoints: (build) => ({
        authorization: build.mutation({
            query: (body) => ({
                url: 'authorization',
                method: 'POST',
                body
            })
        }),

        registarion: build.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body
            })
        })

    })
})


export const {useAuthorizationMutation, useRegistarionMutation} = userApi