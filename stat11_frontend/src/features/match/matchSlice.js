import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { teamUrl, teamBackendUrl, matchUrl, matchBackendUrl, allMatchAndTeamsUrl, teamBattersScoreUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    matchAndTeamsList: ["T1 ", "T2 ","T1C "," T2C", true, 0, 0, "Yet to be decided", 0, 0, false ],
    batterScores: [],
    bowlerScores: [],
    match: '',
}

export const getAllMatchAndTeams = createAsyncThunk('match/getAllMatchAndTeams', () => {
    return BackendClient
    .get(
        allMatchAndTeamsUrl()
    )
    .then(res => res.data)
})


export const batterScoreData = createAsyncThunk('match/batterScoreData', ()=>{
    return BackendClient
    .get(
        teamBattersScoreUrl()
    )
    .then(res =>res.data)    
})

export const teamScoreData = createAsyncThunk('match/teamScoreData', async () => {
    try {
        const res = await BackendClient.get(teamUrl());
        return res.data;
    } catch (err) {
        return console.log(err);
    }
});

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

    },
    extraReducers: builder => {
        builder
        .addCase(getAllMatchAndTeams.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllMatchAndTeams.fulfilled, (state,action) => {
            // alert("Got fulfill")
            state.loading = false
            state.error = false
            state.message = ''
            state.matchAndTeamsList = action.payload
            console.log(action.payload)
        })
        .addCase(getAllMatchAndTeams.rejected, (state,action) => {
            // alert("Got reject")
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.matchAndTeamsList = []
        })

        .addCase(teamScoreData.pending, (state) => {
            state.loading = true
        })
        .addCase(teamScoreData.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            console.log(action.payload)
            state.batterScores = action.payload
            
        })

        .addCase(teamScoreData.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.batterScores = []
            console.log("Error")
        })

        .addCase(batterScoreData.pending, (state) => {
            state.loading = true
            console.log("Batter fetch hona shuru hua")
        })
        .addCase(batterScoreData.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            console.log(action.payload)
            state.batterScores = action.payload 
        })
        .addCase(batterScoreData.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.batterScores = []
            console.log("Error")
        })
        
        

    }
})


export default matchSlice.reducer
export const { updateteam1runs, updateteam2runs } = matchSlice.actions