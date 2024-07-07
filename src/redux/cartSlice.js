import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [
        { id: 1, name: 'All day Ticket', quantity: 2, price: 520 },
        { id: 2, name: 'Cabana', quantity: 1, price: 1200 },
    ],
    totalPrice: 1720,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.cart.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...item, quantity: 1 });
            }
            state.totalPrice += item.price;
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cart.find((i) => i.id === id);
            if (existingItem.quantity === 1) {
                state.cart = state.cart.filter((i) => i.id !== id);
            } else {
                existingItem.quantity -= 1;
            }
            state.totalPrice -= existingItem.price;
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
