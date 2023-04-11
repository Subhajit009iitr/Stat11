import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { isAuthenticatedBackendUrl, loginBackendUrl, logoutBackendUrl, signupBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    warning: false,
    onLogin: true,
    isAuthenticated: false,
    openAuthSnackbar: false,
    message: ''
}

export const loginUser = createAsyncThunk('auth/loginUser', userData => {
    return BackendClient
    .post(
        loginBackendUrl(),
        userData
    )
    .then(res => {
        if(res.status===200){
            return {
                message: res.data['message'],
                isAuthenticated: true
            }
        }else if(res.status===204){
            return {
                message: "User not found",
                isAuthenticated: false
            }
        }
    })
})

export const logoutUser = createAsyncThunk('auth/logoutUser', () => {
    return BackendClient
    .get(
        logoutBackendUrl()
    )
    .then(res => res.data)
})

export const signupUser = createAsyncThunk('auth/signupUser', userData => {
    return BackendClient
    .post(
        signupBackendUrl(),
        userData
    )
    .then(res => res.data)
})

export const userIsAuthenticated = createAsyncThunk('auth/userIsAuthenticated', () => {
    return BackendClient
    .get(
        isAuthenticatedBackendUrl()
    )
    .then(res => res.data)
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // userAuthenticated: (state,action) => {
        //     state.isAuthenticated = action.payload
        // },
        showSnackbar: (state,action) => {
            state.openAuthSnackbar = action.payload
        },
        switchAuthPage: (state,action) => {
            state.onLogin = action.payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(loginUser.pending, state => {
            state.loading = true
        })
        .addCase(loginUser.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.warning = !action.payload['isAuthenticated']
            state.message = action.payload['message']
            state.isAuthenticated = action.payload['isAuthenticated']
            state.openAuthSnackbar = true
        })
        .addCase(loginUser.rejected, (state) => {
            state.loading = false
            state.error = true
            state.message = 'Incorrect user credentials!'
            state.isAuthenticated = false
            state.openAuthSnackbar = true
        })
        .addCase(logoutUser.pending, (state) => {
            state.loading = true
        })
        .addCase(logoutUser.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = action.payload['message']
            state.isAuthenticated = false
            state.openAuthSnackbar = true
        })
        .addCase(logoutUser.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
        })
        .addCase(signupUser.pending, state => {
            state.loading = true
        })
        .addCase(signupUser.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = action.payload['message']
            state.openAuthSnackbar = true
            state.onLogin = true
        })
        .addCase(signupUser.rejected, state => {
            state.loading = false
            state.error = true
            state.message = "Error creating new user!"
            state.openAuthSnackbar = true
        })
        .addCase(userIsAuthenticated.pending, (state) => {
            state.loading = true
        })
        .addCase(userIsAuthenticated.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.isAuthenticated = action.payload
        })
        .addCase(userIsAuthenticated.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.isAuthenticated = false
        })
    }
})

export default authSlice.reducer
export const { switchAuthPage, showSnackbar } = authSlice.actions