import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logoutUser, userIsAuthenticated } from '../features/auth/authSlice'
import { whoAmI } from '../features/user/userSlice'
import SideBar from '../components/sideBar/sideBar'
import { Box } from '@mui/material'
import { changeSideBarTabsType } from '../features/sideBar/sideBarSlice'
import HomeContent from '../components/homeContent'

function Home() {
    const authState = useSelector(state => state.auth)
    const matchCardState = useSelector(state => state.matchCard)
    const dispatch = useDispatch()

    useEffect(() => {
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
        }}
        >
            <SideBar />
            <Box>
                {/* <HomeContent /> */}
            </Box>
        </Box>
        </Box>
    )
}

export default Home