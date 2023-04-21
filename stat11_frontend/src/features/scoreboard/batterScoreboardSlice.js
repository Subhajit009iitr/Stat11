import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { battersByStatusBackendUrl, teamBattersByTypeBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    matchBatters: [],
    currentBatters: '',
    openDialog: false
}

export const getMatchBatters = createAsyncThunk('batterScoreboard/getTeamBatters', (matchId) => {
    return BackendClient
    .get(
        teamBattersByTypeBackendUrl(matchId)
    )
    .then(res => res.data)
})

export const getCurrentBatters = createAsyncThunk('batterScoreboard/getCurrentBatters', (teamId) => {
    return BackendClient
    .get(
        battersByStatusBackendUrl(teamId,'batting')
    )
    .then(res => res.data)
})

const batterScoreboardSlice = createSlice({
    name: 'batterScoreboard',
    initialState,
    reducers: {
        openChooseBatterDialog: (state,action) => {
            state.openDialog = action.payload
        }
    },
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
        .addCase(getMatchBatters.pending, (state) => {
            state.loading = true
        })
        .addCase(getMatchBatters.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.matchBatters = action.payload
            console.log("FETCHED MATCH BATTERS...")
            console.log(action.payload)
        })
        .addCase(getMatchBatters.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
        })
    }
})

export default batterScoreboardSlice.reducer
export const { openChooseBatterDialog } = batterScoreboardSlice.actions