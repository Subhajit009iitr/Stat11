import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { playerBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    playersList: []
}

export const getAllPlayers = createAsyncThunk('player/getAllPlayers', () => {
    return BackendClient
    .get(
        playerBackendUrl()
    )
    .then(res => res.data)
})

const playerSlice = createSlice({
    name: 'player',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllPlayers.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllPlayers.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.playersList = action.payload
        })
        .addCase(getAllPlayers.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.playersList = []
        })
    }
})

export default playerSlice.reducer