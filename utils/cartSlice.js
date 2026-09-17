import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart ",
    initialState: {
        isItemadded: false,
        items: [],

    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        itemIn: (state) => {
            state.isItemadded = true;
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart, itemIn } = cartSlice.actions;
export default cartSlice.reducer;