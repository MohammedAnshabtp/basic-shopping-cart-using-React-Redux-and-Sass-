export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const APPLY_DISCOUNT = 'APPLY_DISCOUNT';

// Action creators
export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const applyDiscount = (discount) => ({
    type: APPLY_DISCOUNT,
    payload: discount,
});
