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
    const authState = useSelector(state => state.auth)
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

    const createMatchButton = authState.isAuthenticated===true ?
    (
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
    ) :
    <></>

    return(
        <>
            <HomeHeader 
            headingText='Welcome Back!'
            />
            {matchCards}
            {createMatchButton}
            <CreateMatchDialog />
            <CreateTeamDialog />
    </>
    );
}

export default HomeContent