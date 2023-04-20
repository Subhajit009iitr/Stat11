import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { teamUrl, teamBackendUrl, matchUrl, matchBackendUrl, matchTeamsUrl, allMatchAndTeamsUrl, teamBattersScoreUrl, teamBowlersScoreUrl, matchMVPUrl, batterScoreboardBackendUrl, sortedBattersUrl, sortedBowlersUrl } from "../../urls";

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
    openDialog: false,
    addingTeamIndentifier: '',
    addTeam1: '',
    addTeam2: '',
    sortedBatters: [],
    sortedBowlers: [],
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

export const getMVP = createAsyncThunk('match/getMVP', (matchId)=>{
    return BackendClient
    .get(
        matchMVPUrl(matchId)
    )
    .then(res =>res.data)
} )

export const sortedBatterData = createAsyncThunk('match/sortedBatterData', (matchId)=>{
    return BackendClient
    .get(
        sortedBattersUrl(matchId)
    )
    .then(res =>res.data)    
})

export const sortedBowlerData = createAsyncThunk('match/sortedBowlerData', (matchId)=>{
    return BackendClient
    .get(
        sortedBowlersUrl(matchId)
    )
    .then(res =>res.data) 
})

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
        },
        selectTeamToAdd: (state,action) => {
            state.addingTeamIndentifier = action.payload
        },
        addCreateNewMatchTeam: (state,action) => {
            console.log(action)
            if(action.payload['teamIdentifier']==='team1') state.addTeam1 = action.payload['team']
            if(action.payload['teamIdentifier']==='team2') state.addTeam2 = action.payload['team']
            console.log(state.addTeam1)
            console.log(state.addTeam2)
            console.log("-----------------------")
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
        .addCase(sortedBatterData.pending, (state) => {
            state.loading = true
        })
        .addCase(sortedBatterData.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.sortedBatters = action.payload 
        })
        .addCase(sortedBatterData.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.sortedBatters = []
        })

        .addCase(sortedBowlerData.pending, (state) => {
            state.loading = true
        })
        .addCase(sortedBowlerData.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.sortedBowlers = action.payload 
        })
        .addCase(sortedBowlerData.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.sortedBowlers = []
        })
        

    }
})


export default matchSlice.reducer
export const { updateteam1runs, updateteam2runs, chooseMatch, openCreateMatchDialog, selectTeamToAdd, addCreateNewMatchTeam } = matchSlice.actions