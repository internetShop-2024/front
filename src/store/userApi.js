import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://46.149.190.25:5000/users/'
    }),

    endpoints: (build) => ({
        authorization: build.mutation({
            query: (body) => ({
                url: 'authorization',
                method: 'POST',
                body
            })
        })
    })
})


export const {useAuthorizationMutation} = userApi