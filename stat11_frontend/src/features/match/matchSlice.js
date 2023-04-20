import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { teamUrl, teamBackendUrl, matchUrl, matchBackendUrl, matchTeamsUrl, allMatchAndTeamsUrl, teamBattersScoreUrl, teamBowlersScoreUrl, matchMVPUrl, batterScoreboardBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    dateWiseMatchAndTeamsList: [],
    batterScores: [],
    bowlerScores: [],
    mvp: [],
    Teams: [],
    match: '',
    openDialog: false
}

export const createMatch = createAsyncThunk('match/createMatch', (matchData) => {
    return BackendClient
    .post(
        matchBackendUrl(),
        matchData
    )
    .then(res => res.data)
})

export const getAllMatchAndTeams = createAsyncThunk('match/getAllMatchAndTeams', () => {
    return BackendClient
    .get(
        allMatchAndTeamsUrl()
    )
    .then(res => res.data)
})

export const getMVP = createAsyncThunk('match/getMVP', ()=>{
    return BackendClient
    .get(
        matchMVPUrl()
    )
    .then(res =>res.data)
} )

export const batterScoreData = createAsyncThunk('match/batterScoreData', ()=>{
    return BackendClient
    .get(
        teamBattersScoreUrl()
    )
    .then(res =>res.data)    
})

export const bowlerScoreData = createAsyncThunk('match/bowlerScoreData', ()=>{
    return BackendClient
    .get(
        teamBowlersScoreUrl()
    )
    .then(res =>res.data) 
})

export const teamScoreData = createAsyncThunk('match/teamScoreData', async () => {
    try {
        const res = await BackendClient.get(batterScoreboardBackendUrl());
        return res.data;
    } catch (err) {
        return console.log(err);
    }
});

export const matchTeams = createAsyncThunk('match/matchTeams', ()=>{
    return BackendClient
    .get(
        matchTeamsUrl()
    )
    .then(res =>res.data) 
})

export const getMatchTeams = createAsyncThunk('match/getMatchTeams', (matchId) => {
    // try {
    //     const res = await BackendClient.get(teamBackendUrl());
    //     return res.data;
    // } catch (err) {
    //     return console.log(err);
    // }
    return BackendClient
    .get(
        teamBackendUrl(matchId)
    )
    .then(res => {
        console.log(res.data)
    })
});



const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        chooseMatch: (state,action) => {
            state.match = action.payload
        },
        openCreateMatchDialog: (state,action) => {
            state.openDialog = action.payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(createMatch.pending, (state) => {
            state.loading = true
        })
        .addCase(createMatch.fulfilled, (state) => {
            state.loading = false
            state.error = false
            state.message = ''
        })
        .addCase(createMatch.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
        })
        .addCase(getAllMatchAndTeams.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllMatchAndTeams.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.dateWiseMatchAndTeamsList = action.payload
        })
        .addCase(getAllMatchAndTeams.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.dateWiseMatchAndTeamsList = []
        })

        .addCase(teamScoreData.pending, (state) => {
            state.loading = true
        })
        .addCase(teamScoreData.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.batterScores = action.payload
        })
        .addCase(teamScoreData.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.batterScores = []
        })
        .addCase(batterScoreData.pending, (state) => {
            state.loading = true
        })
        .addCase(batterScoreData.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.batterScores = action.payload 
        })
        .addCase(batterScoreData.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.batterScores = []
        })
        .addCase(matchTeams.pending, (state) => {
            state.loading = true
        })
        .addCase(matchTeams.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.Teams = action.payload 
        })
        .addCase(matchTeams.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.Teams = []
        })
        .addCase(bowlerScoreData.pending, (state) => {
            state.loading = true
        })
        .addCase(bowlerScoreData.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.bowlerScores = action.payload 
        })
        .addCase(bowlerScoreData.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.bowlerScores = []
        })
        .addCase(getMVP.pending, (state) => {
            state.loading = true
        })
        .addCase(getMVP.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.mvp = action.payload 
        })
        .addCase(getMVP.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.mvp = []
        })
        

    }
})


export default matchSlice.reducer
export const { updateteam1runs, updateteam2runs, chooseMatch, openCreateMatchDialog } = matchSlice.actions