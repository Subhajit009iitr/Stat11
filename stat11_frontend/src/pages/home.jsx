import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logoutUser, userIsAuthenticated } from '../features/auth/authSlice'
import { whoAmI } from '../features/user/userSlice'
import SideBar from '../components/sideBar/sideBar'
import { Box } from '@mui/material'
import { changeSideBarTabsType } from '../features/sideBar/sideBarSlice'

function Home() {
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
                Home
            </Box>
        </Box>
        </Box>
    )
}

export default Home