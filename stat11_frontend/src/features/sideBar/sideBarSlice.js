import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";

const initialState = {
    loading: false,
    error: false,
    message: '',
    currentTab: '',
    tabsType: ''
}

const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        switchSideBarTab: (state,action) => {
            state.currentTab = action.payload
            console.log("TAB CHANGED...")
            console.log(action.payload)
        },
        changeSideBarTabsType: (state,action) => {
            state.tabsType = action.payload
            console.log("TAB TYPE CHANGED...")
            console.log(action.payload)
        }
    }
})

export default sideBarSlice.reducer
export const { switchSideBarTab, changeSideBarTabsType } = sideBarSlice.actions