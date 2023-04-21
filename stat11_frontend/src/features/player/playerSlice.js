import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { playerBackendUrl, typeWisePlayerBackendUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    message: '',
    playersList: [],
    batterList: [],
    bowlerList: []
}

export const getAllPlayers = createAsyncThunk('player/getAllPlayers', () => {
    return BackendClient
    .get(
        playerBackendUrl()
    )
    .then(res => res.data)
})

export const getAllBowlers = createAsyncThunk('player/getAllBowlers', () => {
    return BackendClient
    .get(
        typeWisePlayerBackendUrl('bolwer,all_rounder')
    )
    .then(res => res.data)
})

export const getAllBatters = createAsyncThunk('player/getAllBatters', () => {
    return BackendClient
    .get(
        typeWisePlayerBackendUrl('batter,all_rounder')
    )
    .then(res => res.data)
})

const playerSlice = createSlice({
    name: 'player',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllPlayers.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllPlayers.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.playersList = action.payload
        })
        .addCase(getAllPlayers.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.playersList = []
        })
        .addCase(getAllBatters.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllBatters.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.batterList = action.payload
        })
        .addCase(getAllBatters.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.batterList = []
        })
        .addCase(getAllBowlers.pending, (state) => {
            state.loading = true
        })
        .addCase(getAllBowlers.fulfilled, (state,action) => {
            state.loading = false
            state.error = false
            state.message = ''
            state.bowlerList = action.payload
        })
        .addCase(getAllBowlers.rejected, (state,action) => {
            state.loading = false
            state.error = true
            state.message = action.error.message
            state.bowlerList = []
        })
    }
})

export default playerSlice.reducer