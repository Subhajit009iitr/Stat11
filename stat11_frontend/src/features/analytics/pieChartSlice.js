import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import BackendClient from "../../BackendClient"
import {
  teamBackendUrl,
  batterScoreboardBackendUrl,
  matchParticipatingTeamsBackendUrl,
} from "../../urls"

const initialState = {
  loading: false,
  error: "",
  message: "",
  playerinfo: [],
  teaminfo: [],
}

export const playerData = createAsyncThunk("header/playerData", () => {
  return BackendClient.get(batterScoreboardBackendUrl()).then((res) => res.data)
})

export const matchteamData = createAsyncThunk("header/matchteamData", (matchId) => {
  return BackendClient.get(matchParticipatingTeamsBackendUrl(matchId)).then(
    (res) => res.data
  )
})

const pieChartSlice = createSlice({
  name: "piechart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(matchteamData.pending, (state) => {
        state.loading = true
      })
      .addCase(matchteamData.fulfilled, (state, action) => {
        //alert("Got team fulfill")
        state.loading = false
        state.error = false
        state.message = ""
        console.log(action.payload)
        state.teaminfo = action.payload
      })
      .addCase(matchteamData.rejected, (state, action) => {
        alert("Got team reject")
        state.loading = false
        state.error = true
        state.message = action.error.message
        state.teaminfo = []
      })
      .addCase(playerData.pending, (state) => {
        state.loading = true
      })
      .addCase(playerData.fulfilled, (state, action) => {
        //alert("Got team fulfill")
        state.loading = false
        state.error = false
        state.message = ""
        //console.log(action.payload)
        state.playerinfo = action.payload
      })
      .addCase(playerData.rejected, (state, action) => {
        alert("Got team reject")
        state.loading = false
        state.error = true
        state.message = action.error.message
        state.playerinfo = []
      })
  },
})

export default pieChartSlice.reducer