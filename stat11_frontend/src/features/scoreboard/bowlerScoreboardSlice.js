import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { bowlersByStatusBackendUrl, teamBowlersByTypeBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    matchBowlers: [],
    currentBowlers: '',
    openDialog: false
}

export const getMatchBowlers = createAsyncThunk('batterScoreboard/getTeamBowlers', (matchId) => {
    return BackendClient
    .get(
        teamBowlersByTypeBackendUrl(matchId)
    )
    .then(res => res.data)
})

export const getCurrentBowlers = createAsyncThunk('bowlerScoreboard/getCurrentBowlers', (teamId) => {
    return BackendClient
    .get(
        bowlersByStatusBackendUrl(teamId,'bowling')
    )
    .then(res => res.data)
})

const bowlerScoreboardSlice = createSlice({
    name: 'bowlerScoreboard',
    initialState,
    reducers: {
        openChooseBowlerDialog: (state,action) => {
            state.openDialog = action.payload
        }
    },
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
        .addCase(getMatchBowlers.pending, (state) => {
            state.loading = true
        })
        .addCase(getMatchBowlers.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.matchBowlers = action.payload
        })
        .addCase(getMatchBowlers.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
        })
    }
})

export default bowlerScoreboardSlice.reducer
export const { openChooseBowlerDialog } = bowlerScoreboardSlice.actions