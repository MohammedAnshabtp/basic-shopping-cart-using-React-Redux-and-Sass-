import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalPrice: 0,
    discount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeItem(state, action) {
            const itemToRemove = state.cart.find(item => item.id === action.payload);
            if (itemToRemove) {
                state.cart = state.cart.filter(item => item.id !== action.payload);
                state.totalPrice -= itemToRemove.price;
            }
        },
        applyDiscount(state, action) {
            state.discount = action.payload;
        },
    },
});

export const { addItem, removeItem, applyDiscount } = cartSlice.actions;
export default cartSlice.reducer;
