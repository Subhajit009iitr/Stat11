import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { distinctTeamsBackendUrl, matchParticipatingTeamsBackendUrl } from "../../urls";
import { addCreateNewMatchTeam } from "../match/matchSlice";

const initialState = {
    loading: false,
    error: false,
    message: '',
    team1: '',
    team2: '',
    distinctTeamOptions: [],
    openDialog: false
}

export const getParticipatingTeams = createAsyncThunk('team/getParticipatingTeams', (matchId) => {
    return BackendClient
    .get(
        matchParticipatingTeamsBackendUrl(matchId)
    )
    .then(res => res.data)
})

export const getDistinctTeamOptions = createAsyncThunk('team/getDistinctTeamOptions', () => {
    return BackendClient
    .get(
        distinctTeamsBackendUrl()
    )
    .then(res => res.data)
})

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        openCreateTeamDialog: (state,action) => {
            state.openDialog = action.payload
        },
        appendInDistinctTeamOptions: (state,action) => {
            state.distinctTeamOptions.push(action.payload)
        }
    },
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
        })
        .addCase(getParticipatingTeams.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.team1 = ''
            state.team2 = ''
        })
        .addCase(getDistinctTeamOptions.pending, (state) => {
            state.loading = true
        })
        .addCase(getDistinctTeamOptions.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.distinctTeamOptions = action.payload
        })
        .addCase(getDistinctTeamOptions.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.distinctTeamOptions = []
        })
        .addCase(addCreateNewMatchTeam, (state,action) => {
            state.distinctTeamOptions = state.distinctTeamOptions.concat([action.payload['team']])
        })
    }
})

export default teamSlice.reducer
export const { openCreateTeamDialog, appendInDistinctTeamOptions } = teamSlice.actions