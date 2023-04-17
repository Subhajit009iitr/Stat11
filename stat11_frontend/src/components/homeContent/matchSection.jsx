import { Box, Typography } from '@mui/material'
import React from 'react'
import MatchCard from '../cards/matchCard'

function MatchSection(props) {

    const { date, matchList } = props

    // console.log(date)
    // console.log(matchList)

    const todayDate = new Date().toJSON().slice(0,10)
    let yesterdayDate = new Date()
    yesterdayDate.setDate(yesterdayDate.getDate() - 1)
    const dateHeading = todayDate===date ?
    'Today' :
    (
        yesterdayDate===date ?
        'Yesterday' :
        date
    )

    const matchCards = matchList.length>0 ?
    (
        matchList.map((matchData,index) => (
            <MatchCard 
            no_of_overs = {4}
            team1 ={'name'} 
            team2 = {'name'} 
            team1runs = {'runs'} 
            team2runs = {'runs'}
            team1college = "IIT Roorkee" 
            team2college= "IIT Roorkee"
            toss = {true}
            matchover = "1" 
            winner ="Blue"
            team1wickets = "02" 
            team2wickets = "03"
            />
        ))
    ) :
    []

    return (
        <Box>
            <Typography
            variant='h6'
            color='hint.dark'
            >
                {dateHeading}
            </Typography>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
            >
                {matchCards}
            </Box>
        </Box>
    )
}

export default MatchSection