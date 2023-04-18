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
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "background.default",
            backgroundAttachment: 'fixed',
            height: "100vh"
        }}
        >
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
        >
            <Box>
                <SideBar />
            </Box>
            <Box
            sx={{
                flexGrow: 1,
                marginLeft: '20%'
            }}
            >
                {content}
            </Box>
        </Box>
        </Box>
    )
}

export default Home