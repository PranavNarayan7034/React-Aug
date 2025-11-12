import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    cartCount: 0,
}

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(
                item => item.id === newItem.id)
            if (!existingItem) {
                state.cartItems.push(newItem)
                state.cartCount+=1
            }

        },
        incrementCartCount: () => { },
        decrementCartCount: () => { }
    }
})

export const {
    addToCart,
    incrementCartCount,
    decrementCartCount
}
    = cartSlice.actions

export default cartSlice.reducer;