import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./cartSlicer";
import { productApi } from "./productApi"; 

export default configureStore({
    reducer: {
        cart: cartSlicer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware), 
});