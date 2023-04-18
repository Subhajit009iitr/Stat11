import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Button, Divider, Icon, IconButton, Typography } from '@mui/material'
import { getAllMatchAndTeams } from '../../features/match/matchSlice';
import MatchSection from './matchSection';
import { IoIosAddCircle } from 'react-icons/io'
import HomeHeader from '../header/homeHeader';

function HomeContent() {
    const matchState = useSelector(state =>state.match)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            getAllMatchAndTeams()
        )
    },[])

    const matchCards = matchState.dateWiseMatchAndTeamsList.length>0 ?
    (
        matchState.dateWiseMatchAndTeamsList.map(dateWiseMatchData => (
            <MatchSection 
            date={dateWiseMatchData[0]['match']['date']}
            matchList={dateWiseMatchData}
            />
        ))
    ) :
    []

    return(
        <>
            <HomeHeader 
            headingText='Welcome Back!'
            />
            {matchCards}
            <IconButton
            color='primary'
            onClick={() => console.log("Button clciked!")}
            sx={{
                position: 'fixed',
                right: 0,
                bottom: 0,
                mr: 16,
                mb: 16,
                p: 0
            }}
            >
                <IoIosAddCircle 
                size={72}
                />
            </IconButton>
    </>
    );
}

export default HomeContent