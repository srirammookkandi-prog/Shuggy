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
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.menuInfo?.name === action.payload.menuInfo?.name &&
                    item.menuInfo?.imageId === action.payload.menuInfo?.imageId &&
                    item.restaurantName === action.payload.restaurantName
            );

            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart, itemIn } = cartSlice.actions;
export default cartSlice.reducer;