import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://25.40.19.167:8080/'
    }),

    endpoints:(build) => ({
        setOrder: build.mutation({
            query:(body) => ({
                url: "order",
                method: "POST",
                body
            })
        }),
        payFunction: build.mutation({
            query:(body) => ({
                url: "https://api.monobank.ua/api/merchant/invoice/create",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-Token': `uVBYrCjDF5a4h2wJY0H-aGGHFBKDlmP3hAxL8oA1hoI0`,
                },
                body
            })
        })
    })
})


export const {useSetOrderMutation,usePayFunctionMutation} = orderApi