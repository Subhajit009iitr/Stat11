import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Home() {
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()

    if(authState.isAuthenticated){
        return (
            <div>Home</div>
        )
    }else{
        return <Navigate to={`/auth`} replace={true} />
    }
}

export default Home