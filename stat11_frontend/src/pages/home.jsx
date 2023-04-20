import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logoutUser, userIsAuthenticated } from '../features/auth/authSlice'
import { whoAmI } from '../features/user/userSlice'
import SideBar from '../components/sideBar/sideBar'
import { Box } from '@mui/material'
import { changeSideBarTabsType } from '../features/sideBar/sideBarSlice'
import HomeContent from '../components/homeContent'
import HelpContent from '../components/helpContent'
import { pageSideBarAppender } from '../components/genericComponent/genericSideBarAppender'

function Home() {
    const sideBarState = useSelector(state => state.sideBar)
    const dispatch = useDispatch()

    const content = sideBarState.tabsType==='home' ?
    (
        sideBarState.currentTab==='Home' ?
        <HomeContent /> :
        (
            sideBarState.currentTab==='Help' ?
            <HelpContent /> :
            <></>
        )
    ) :
    <></>

    useEffect(() => {
        dispatch(
            userIsAuthenticated()
        )
        dispatch(
            whoAmI()
        )
        dispatch(
            changeSideBarTabsType('home')
        )
    },[])

    return (
        pageSideBarAppender(
            content
        )
    )
}

export default Home