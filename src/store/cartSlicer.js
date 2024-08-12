import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("cart");
        if (serializedState === null) {
            return { cart: [] }; 
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return { cart: [] }; 
    }
};

const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cart.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.counter += action.payload.counter;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    counter: action.payload.counter
                });
            }
            saveToLocalStorage(state);
        },
        removeFromCart(state, action) {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
            saveToLocalStorage(state);
        },
        updateCartItem(state, action) {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.counter -= action.payload.counter;
                if (existingItem.counter <= 0) {
                    state.cart = state.cart.filter(item => item.id !== action.payload.id);
                }
            }
            saveToLocalStorage(state);
        }
    },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
