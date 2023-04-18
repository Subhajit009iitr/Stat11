import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { getAllMatchAndTeams } from '../../features/match/matchSlice';
import MatchSection from './matchSection';

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
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                height: '120px',
                mt: 5,
                ml: 12
            }}
            >
                <Typography
                variant='h3'
                sx={{
                    mb: 9
                }}
                >
                    Welcome Back!   
                </Typography>
            </Box>
            <Divider
                sx={{
                backgroundColor: "hint",
                marginBottom: 3,
                marginLeft: 6,
                marginRight: 12
                }}
            />
            {matchCards}

            <Button
            label="Add a Match"
            buttonStyle={{ borderRadius: 240 }}
            style={{ borderRadius: 240 }}
            
            sx={{
                height: "64px",
                width:"64px",
                color:'white',
                position:'sticky',  
                float:'right',
                bottom : '88px',
                right: '88px',
                zIndex:2,   
                fontSize:60,
                paddingTop:'10px',
                paddingRight:'8px',
                backgroundColor:'#448791',
                ":hover": {
                    bgcolor: '#387078', 
                    color: '#D9D9D9',
                },
            }}
            >+</Button>
    </>
    );
}

export default HomeContent