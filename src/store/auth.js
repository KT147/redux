import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = { isAuthented: false }

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthented = true
        },
        logout(state) {
            state.isAuthented = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer