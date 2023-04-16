import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { whoAmIBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    user: ''
}

export const whoAmI = createAsyncThunk('user/whoAmI', () => {
    return BackendClient
    .get(
        whoAmIBackendUrl()
    )
    .then(res => res.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(whoAmI.pending, state => {
            state.loading = true
        })
        .addCase(whoAmI.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = action.payload['message']
            state.user = action.payload['user']
        })
        .addCase(whoAmI.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.user = ''
        })
    }
})

export default userSlice.reducer