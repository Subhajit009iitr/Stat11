import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { teamUrl, matchUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    team1: " ",
    team1college: " ",
    team2: " ",
    team2college: " ",
    team1runs : 0,
    team2runs : 0,
    toss : 1,
    matchover : 1, 
    winner : "Yet to be decided ",
    team1wickets : 0,
    team2wickets : 0,
    payload:0,
}

export const teamData = createAsyncThunk('matchCard/teamData', async () => {
    try {
        const res = await BackendClient.get(teamUrl());
        return res.data;
    } catch (err) {
        return console.log(err);
    }
});

const getTotalRunsForTeam1 = (data) => {
    const team1Players = data.filter((player) => player.team.id === 1);
    const totalRuns = team1Players.reduce((acc, player) => acc + player.runs, 0);
    return {totalRuns};
};

const getTotalRunsForTeam2 = (data) => {
    const team1Players = data.filter((player) => player.team.id === 1);
    const totalRuns = team1Players.reduce((acc, player) => acc + player.runs, 0);
    return {totalRuns};
};

// const updateWinner = (data) =>{
//     // const winner = data.
//     // return data.
// }

const matchCardSlice = createSlice({
    name: 'matchCard',
    initialState,
    reducers: {
        updateteam1runs: (state,action) => {
            state.team1runs = getTotalRunsForTeam1(action)
        },
        updateteam2runs: (state,action) => {
            state.team2runs = getTotalRunsForTeam2(action)
        },
        // updateWinner: (state, action)=>{
        //     state.winner = updateWinner(action)
        // }

    },

    extraReducers: builder => {
        builder
        .addCase(teamData.pending, (state) => {
            state.loading = true
            console.log("Pendinggg")

        })
        .addCase(teamData.fulfilled, (state,action) => {
            state.loading = false
            console.log("HUIHUI")
            state.error = ''
            console.log(action.payload)
            state.team1runs = getTotalRunsForTeam1(action.payload)
            state.team2runs = getTotalRunsForTeam2(action.payload)
            
        })
        .addCase(teamData.rejected, (state,action) => {
            state.loading = false
            state.error = action.error.message
            console.log("Error")
        })
    }
})


export default matchCardSlice.reducer
export const { updateteam1runs, updateteam2runs } = matchCardSlice.actions