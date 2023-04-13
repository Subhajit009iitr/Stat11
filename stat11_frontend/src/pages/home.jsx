import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logoutUser, userIsAuthenticated } from '../features/auth/authSlice'
import { whoAmI } from '../features/user/userSlice'
import SideBar from '../components/sideBar/sideBar'
import { Box } from '@mui/material'

function Home() {
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // if(authState.isAuthenticated){
    //     return (
    //         <div>Home</div>
    //     )
    // }else{
    //     return <Navigate to={`/auth`} replace={true} />
    // }

    // alert("Reached home!")
    // useEffect(() => {
    //     if(authState.isAuthenticated===false) navigate('/auth')
    // },[authState.isAuthenticated])

    useEffect(() => {
        dispatch(userIsAuthenticated())
        dispatch(whoAmI())
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
        <button 
        onClick={() => dispatch(logoutUser())}
        >
            Logout
        </button>
        <button 
        onClick={() => navigate('/auth')}
        >
            Auth
        </button>
        </Box>
    )
}

export default Home