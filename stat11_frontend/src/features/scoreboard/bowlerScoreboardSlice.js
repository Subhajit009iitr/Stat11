import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { currentBowlersBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    team1Bowlers: '',
    team2Bowlers: '',
    currentBowlers: []
}

export const getCurrentBowlers = createAsyncThunk('bowlerScoreboard/getCurrentBowlers', (data) => {
    return BackendClient
    .get(
        currentBowlersBackendUrl(data['teamId'],data['status'])
    )
    .then(res => res.data)
})

const bowlerScoreboardSlice = createSlice({
    name: 'bowlerScoreboard',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCurrentBowlers.pending, (state) => {
            state.loading = true
        })
        .addCase(getCurrentBowlers.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.currentBowlers = action.payload
            console.log("CURRENT BOWLERS...")
            console.log(action.payload)
        })
        .addCase(getCurrentBowlers.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.currentBowlers = []
        })
    }
})

export default bowlerScoreboardSlice.reducer