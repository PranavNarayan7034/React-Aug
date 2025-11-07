import { configureStore } from "@reduxjs/toolkit";

// import authSlice from './authReducer'
import authReducer from './authReducer'
import cartReducer from './cartReducer'


export const store = configureStore({
    reducer: {
        Auth: authReducer,
        Cart : cartReducer
    }
})
