import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: "",
    userName: "",
    isAdmin: true
}


const authSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        Login: () => { 
            console.log("Login executed")
        },
        Logout: () => { 
            console.log("Logout executed")
        },
    }
})


export const { Login, Logout } = authSlice.actions

export default authSlice.reducer;