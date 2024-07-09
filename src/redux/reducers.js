import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [
        {
            id: 1,
            name: "All day ticket",
            quantity: 0,
            price: 250
        },
        {
            id: 2,
            name: "All day Booked",
            quantity: 0,
            price: 150
        },
    ],
    totalPrice: 0,
    discount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            console.log(state.cart, "000000000000000", action);
            // state.totalPrice += action.payload.price;
            const productId = action.payload.id;
            state.cart.forEach((item) => {
                if (item.id == productId) {
                    item.quantity++;
                }
            })
            state.totalPrice =
                state?.cart?.
                    map((item) => parseFloat(item.price * item?.quantity))
                    .reduce((prev, next) => prev + next);
        },
        removeItem(state, action) {
            const productId = action.payload.id;
            state.cart.forEach((item) => {
                if (item.id == productId) {
                    if (item.quantity > 0) {
                        item.quantity--;

                    }
                }
            })
            state.totalPrice =
                state?.cart?.
                    map((item) => parseFloat(item.price * item?.quantity))
                    .reduce((prev, next) => prev + next);
        },
        applyDiscount: (state, action) => {
            state.discount = action.payload;
        },
    },
});

export const { addItem, removeItem, applyDiscount } = cartSlice.actions;
export default cartSlice.reducer;
