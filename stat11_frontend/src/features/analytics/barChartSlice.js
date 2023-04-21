import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import BackendClient from "../../BackendClient"
import { teamBackendUrl,matchParticipatingTeamsBackendUrl,bowlerScoreboardBackendUrl } from "../../urls"

const initialState = {
  loading: false,
  error: "",
  message: "",
  bowlerinfo: [],
  teaminfo: [],
}

export const bowlerData = createAsyncThunk("header/bowlerData", () => {
  return BackendClient.get(bowlerScoreboardBackendUrl()).then((res) => res.data)
})

const barChartSlice = createSlice({
  name: "barchart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bowlerData.pending, (state) => {
        state.loading = true
      })
      .addCase(bowlerData.fulfilled, (state, action) => {
        //alert("Got team fulfill")
        state.loading = false
        state.error = false
        state.message = ""
        console.log(action.payload)
        state.bowlerinfo = action.payload
      })
      .addCase(bowlerData.rejected, (state, action) => {
        alert("Got team reject")
        state.loading = false
        state.error = true
        state.message = action.error.message
        state.bowlerinfo = []
      })
  },
})

export default barChartSlice.reducer