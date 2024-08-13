import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./cartSlicer";
import { productApi } from "./productApi"; 
import { userApi } from "./userApi";

export default configureStore({
    reducer: {
        cart: cartSlicer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(userApi.middleware),
});