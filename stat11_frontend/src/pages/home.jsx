import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

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

    alert("Reached home!")
    useEffect(() => {
        navigate('/auth')
    })
    return (
        <div>Home</div>
    )
}

export default Home