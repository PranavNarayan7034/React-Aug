import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: "",
    userName: "",
    isAdmin: false
}


const authSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        Login: () => { },
        Logout: () => { },
    }
})


export const { Login, Logout } = authSlice.actions

export default authSlice.reducer;