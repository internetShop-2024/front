import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({




    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://25.40.19.167:8080/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            headers.set('Authorization', `${token}`);
            headers.set('Content-Type', 'application/json');

            return headers;
        }
    }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => 'products',
        }),
        getProduct: build.query({
            query: (id) => ({
                url: `products/?id=${id}`,
                method: "GET",
            }),
        }),
        setReview: build.mutation({
            query: (body) => ({
                url: `reviews?id=${body.id}`,
                method: 'POST',
                body
            })
        }),

        getByPrice: build.query({
            query: (min, max) => ({
                url: `products/?price=${min}, ${max}`,
                method: "GET",

            })
        })



    }),
});

export const { useGetProductsQuery,useGetProductQuery,useSetReviewMutation, useGetByPriceQuery } = productApi;
