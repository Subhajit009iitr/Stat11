import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { matchParticipatingTeamsBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    team1: '',
    team2: ''
}

export const getParticipatingTeams = createAsyncThunk('team/getParticipatingTeams', (matchId) => {
    return BackendClient
    .get(
        matchParticipatingTeamsBackendUrl(matchId)
    )
    .then(res => res.data)
})

const teamSlice = createSlice({
    name: 'team',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getParticipatingTeams.pending, (state) => {
            state.loading = true
        })
        .addCase(getParticipatingTeams.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''

            if(action.payload.length===2) {
                state.team1 = action.payload[0]
                state.team2 = action.payload[1]
            }
            console.log(action.payload)
        })
        .addCase(getParticipatingTeams.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.team1 = ''
            state.team2 = ''
        })
    }
})

export default teamSlice.reducer