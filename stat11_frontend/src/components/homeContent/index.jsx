import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Button, Divider, Icon, IconButton, Typography } from '@mui/material'
import { getAllMatchAndTeams, openCreateMatchDialog } from '../../features/match/matchSlice';
import MatchSection from './matchSection';
import { IoIosAddCircle } from 'react-icons/io'
import HomeHeader from '../header/homeHeader';
import CreateMatchDialog from '../dialog/createMatchDialog';
import { getDistinctTeamOptions, openCreateTeamDialog } from '../../features/team/teamSlice';
import CreateTeamDialog from '../dialog/createTeamDialog';

function HomeContent() {
    const matchState = useSelector(state =>state.match)
    const dispatch = useDispatch()

    const createButtonClickHandler = () => {
        dispatch(
            openCreateMatchDialog(true)
        )
        dispatch(
            getDistinctTeamOptions()
        )
    }

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
            onClick={createButtonClickHandler}
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
            <CreateMatchDialog />
            <CreateTeamDialog />
    </>
    );
}

export default HomeContent