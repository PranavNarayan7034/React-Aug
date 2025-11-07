import { createSlice } from "@reduxjs/toolkit";

const INTIALSTATE = {
    cartItems: [],
    cartCount: 0,
    wishList: [],
    totalOrders: 0
}

const cartSlice = createSlice({
    name: "Cart",
    initialState: INTIALSTATE,
    reducers: {
        addToCart: () => { },
        addTowishList: () => { },
        placeOrder: () => { }
    }
})

export const { addToCart, addTowishList, placeOrder } = cartSlice.actions

export default cartSlice.reducer;
