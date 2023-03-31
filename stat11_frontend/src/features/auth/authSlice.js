import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { loginBackendUrl, signupBackendUrl } from "../../urls";
import axios from "axios";
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
            password: userData['password']
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

export const signupUser = createAsyncThunk('auth/signupUser', userData => {
    // return BackendClient
    // .post(
    //     signupBackendUrl(),
    //     {
    //         email: userData['email'],
    //         password: userData['password']
    //     }
    // )
    // .then(res => {
    //     console.log(res)
    //     alert("Got response")
    // })
    // .catch(err => {
    //     console.log(err)
    //     alert("Errorrr!!!")
    // })

    return axios
    .post(
        signupBackendUrl(),
        userData,
        {
            headers: {
                "X-CSRFToken": Cookies.get('csrftoken'),
            },
            withCredentials: true
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

    // return BackendClient
    // .get(
    //     signupBackendUrl()
    // )
    // .then(res => {
    //     console.log(res)
    //     alert("Got response")
    // })
    // .catch(err => {
    //     console.log(err)
    //     alert("Errorrr!!!")
    // })
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
        .addCase(signupUser.pending, state => {
            state.loading = true
        })
        .addCase(signupUser.fulfilled, (state,action) => {
            state.loading = false
            state.error = ''
            state.isAuthenticated = action.payload
        })
        .addCase(signupUser.rejected, (state,action) => {
            state.loading = false
            state.error = action.error.message
            state.isAuthenticated = false
        })
    }
})

export default authSlice.reducer
export const { userAuthenticated } = authSlice.actions