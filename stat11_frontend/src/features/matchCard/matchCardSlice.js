import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { teamUrl, teamDataUrl, matchUrl } from "../../urls";

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

export const teamScoreData = createAsyncThunk('matchCard/teamData', async () => {
    try {
        const res = await BackendClient.get(teamUrl());
        return res.data;
    } catch (err) {
        return console.log(err);
    }
});

export const TeamData = createAsyncThunk('matchCard/TeamData', async () => {
    try {
        const res = await BackendClient.get(teamDataUrl());
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

const getNameForTeam1 = (data) => {
    const teams = data.filter((team) => team.match.id === 1);
    const teamName = teams[0].name;
    return {teamName};
};

const getNameForTeam2 = (data) => {
    const teams = data.filter((team) => team.match.id === 1);
    const teamName = teams[1].name;
    return {teamName};
};

const getCollegeTeam1 = (data) => {
    const teams = data.filter((team) => team.match.id === 1);
    const college = teams[1].collegename;
    return {college};
}
const getCollegeTeam2 = (data) => {
    const teams = data.filter((team) => team.match.id === 1);
    const college = teams[1].collegename;
    return {college};
}
const getToss = (data) => {
    const teams = data.filter((team) => team.match.id === 1);
    const toss = teams[0].toss;
    return {toss};
}

// const updateWinner = (data) =>{
//     // const winner = data.
//     // return data.
// }

const matchCardSlice = createSlice({
    name: 'matchCard',
    initialState,
    reducers: {
        updateteam1runs: (state,action) => {
            state.team1runs = getTotalRunsForTeam1(action.payload)
        },
        updateteam2runs: (state,action) => {
            state.team2runs = getTotalRunsForTeam2(action.payload)
        },
        // updateWinner: (state, action)=>{
        //     state.winner = updateWinner(action)
        // }

    },

    extraReducers: builder => {
        builder
        .addCase(teamScoreData.pending, (state) => {
            state.loading = true
            console.log("Pendinggg")

        })
        .addCase(teamScoreData.fulfilled, (state,action) => {
            state.loading = false
            console.log("HUIHUI")
            state.error = ''
            console.log(action.payload)
            state.team1runs = getTotalRunsForTeam1(action.payload)
            state.team2runs = getTotalRunsForTeam2(action.payload)
            
        })
        .addCase(teamScoreData.rejected, (state,action) => {
            state.loading = false
            state.error = action.error.message
            console.log("Error")
        })
        .addCase(TeamData.pending, (state) => {
            state.loading = true
            console.log("love")

        })
        .addCase(TeamData.fulfilled, (state,action) => {
            state.loading = false
            state.error = ''
            console.log("yoii",action.payload)
            state.team1 = getNameForTeam1(action.payload)
            state.team2 = getNameForTeam2(action.payload)
            state.team1college = getCollegeTeam1(action.payload)
            state.team2college = getCollegeTeam2(action.payload)
            state.toss = getToss(action.payload)
        })
        .addCase(TeamData.rejected, (state,action) => {
            state.loading = false
            state.error = action.error.message
            console.log("Eww")
        })


    }
})


export default matchCardSlice.reducer
export const { updateteam1runs, updateteam2runs } = matchCardSlice.actions