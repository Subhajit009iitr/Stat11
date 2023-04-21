import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { currentBattersBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    team1Batters: '',
    team2Batters: '',
    currentBatters: []
}

export const getCurrentBatters = createAsyncThunk('batterScoreboard/getCurrentBatters', (data) => {
    return BackendClient
    .get(
        currentBattersBackendUrl(data['teamId'],data['status'])
    )
    .then(res => res.data)
})

const batterScoreboardSlice = createSlice({
    name: 'batterScoreboard',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCurrentBatters.pending, (state) => {
            state.loading = true
        })
        .addCase(getCurrentBatters.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.currentBatters = action.payload
            console.log("CURRENT BATTERS...")
            console.log(action.payload)
        })
        .addCase(getCurrentBatters.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.currentBatters = []
        })
    }
})

export default batterScoreboardSlice.reducer