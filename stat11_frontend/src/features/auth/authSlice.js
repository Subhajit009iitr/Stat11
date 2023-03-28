import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BackendClient from "../../BackendClient";
import { loginBackendUrl } from "../../urls";
import Cookies from "js-cookie";

const initialState = {
    loading: false,
    error: '',
    isAuthenticated: false,
}

export const loginUser = createAsyncThunk('auth/loginUser', userData => {
    return BackendClient
    .post(
        loginBackendUrl(),
        {
            email: userData['email'],
            password: userData['pass']
        }
    )
    .then(res => {
        console.log(res)
        alert("Got response")
    })
    .catch(err => {
        console.log(err)
        alert("Errorrr!!!")
    })
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userAuthenticated: (state,action) => {
            state.isAuthenticated = action.payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(loginUser.pending, state => {
            state.loading = true
        })
        .addCase(loginUser.fulfilled, (state,action) => {
            state.loading = false
            state.error = ''
            state.isAuthenticated = action.payload
        })
        .addCase(loginUser.rejected, (state,action) => {
            state.loading = false
            state.error = action.error.message
            state.isAuthenticated = false
        })
    }
})

export default authSlice.reducer
export const { userAuthenticated } = authSlice.actions