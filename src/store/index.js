import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./cartSlicer";
import { productApi } from "./productApi"; 
import { userApi } from "./userApi";
import { sectionsApi } from "./sectionsApi";
import { orderApi } from "./orderApi";

export default configureStore({
    reducer: {
        cart: cartSlicer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [sectionsApi.reducerPath]: sectionsApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(userApi.middleware)
            .concat(sectionsApi.middleware)
            .concat(orderApi.middleware),
});