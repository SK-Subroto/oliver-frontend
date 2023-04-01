import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SIGNIN: (state, action) => {
            console.log(action.payload);
            state.token = action.payload.token
            state.user = action.payload.user
            state.isAuthenticated = true
        },
        SIGNOUT: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = null
            state.phone = null
            state.pre_route = null
        },
    }
})

export const { SIGNIN, SIGNOUT } = authSlice.actions

export default authSlice.reducer