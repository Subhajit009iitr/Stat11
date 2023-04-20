import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { distinctTeamsBackendUrl, matchParticipatingTeamsBackendUrl, teamBackendUrl } from "../../urls";
import { addCreateNewMatchTeam } from "../match/matchSlice";

const initialState = {
    loading: false,
    error: false,
    message: '',
    team1: '',
    team2: '',
    distinctTeamOptions: [],
    openDialog: false,
    turnTeam: '',
    openTossDialog: false
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

export const updateParticipatingTeamToss = createAsyncThunk('team/updateParticipatingTeamToss', (teamData) => {
    return BackendClient
    .patch(
        `${teamBackendUrl()}${teamData['id']}/`,
        teamData
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
        },
        openTossWinDialog: (state,action) => {
            state.openTossDialog = action.payload
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

                if(action.payload[0]['turn'] || action.payload[1]['turn']) {
                    if(action.payload[0]['turn']) {
                        state.turnTeam = {
                            id: action.payload[0]['id'],
                            name: action.payload[0]['name']
                        }
                    }else if(action.payload[1]['turn']) {
                        state.turnTeam = {
                            id: action.payload[1]['id'],
                            name: action.payload[1]['name']
                        }
                    }
                }
            }
            console.log(state.team1)
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
        .addCase(updateParticipatingTeamToss.pending, (state) => {
            state.loading = true
        })
        .addCase(updateParticipatingTeamToss.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.turnTeam = {
                id: action.payload['id'],
                name: action.payload['name']
            }
            console.log("TOSS TURN UPDATE....")
            console.log(action.payload)
        })
        .addCase(updateParticipatingTeamToss.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.turnTeam = ''
        })
    }
})

export default teamSlice.reducer
export const { openCreateTeamDialog, appendInDistinctTeamOptions, openTossWinDialog } = teamSlice.actions
