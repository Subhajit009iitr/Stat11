import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isAuthenticated: false,
}

// export const loginUser = createAsyncThunk('auth/loginUser', userData => {
//     return axios
//     .
// })

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userAuthenticated: (state,action) => {
            state.isAuthenticated = action.payload
        }
    }
})

export default authSlice.reducer
export const { userAuthenticated } = authSlice.actions