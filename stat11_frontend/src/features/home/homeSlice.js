import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";

const initialState = {
    loading: false,
    error: false,
    message: '',
    currentHomeTab: ''
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        switchHomeTab: (state,action) => {
            state.currentHomeTab = action.payload
        }
    }
})

export default homeSlice.reducer
export const { switchHomeTab } = homeSlice.actions