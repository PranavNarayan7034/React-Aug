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
        incrementCount: (state) => {
            state.cartCount +=1
        },

        addToCart: (state,action) => {
            // console.log(action)
            state.cartItems.push(action.payload)
        },
        addTowishList: (state) => {
        },

        placeOrder: () => { }
    }
})

export const {incrementCount, addToCart, addTowishList, placeOrder } = cartSlice.actions

export default cartSlice.reducer;
