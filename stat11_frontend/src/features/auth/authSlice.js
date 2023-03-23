import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

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