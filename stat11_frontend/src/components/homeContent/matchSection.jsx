import { Box, Typography } from '@mui/material'
import React from 'react'
import MatchCard from '../cards/matchCard'

function MatchSection(props) {
    const { date, matchList } = props

    const today = new Date()

    const todayDate = today.toJSON().slice(0,10)

    let yesterdayDate = new Date()
    yesterdayDate.setDate(today.getDate() - 1)
    yesterdayDate = yesterdayDate.toJSON().slice(0,10)

    let tomorrowDate = new Date()
    tomorrowDate.setDate(today.getDate() + 1)
    tomorrowDate = tomorrowDate.toJSON().slice(0,10)

    const dateHeading = todayDate===date ?
    'Today' :
    (
        yesterdayDate===date ?
        'Yesterday' :
        (
            tomorrowDate===date ?
            'Tomorrow' :
            date
        ) 
    )

    const matchCards = matchList.length>0 ?
    (
        matchList.map((matchData,index) => {
            const teams = matchData['teams'].length>0 ?
            (
                matchData['teams'].map(team => {
                    return {
                        name: team['name'],
                        runs: team['runs'],
                        college: team['college'],
                        toss: team['toss'],
                        wickets: team['wickets']
                    }
                })
            ) :
            []

            return (
                <MatchCard 
                match = {matchData['match']}
                oversNo = {matchData['match']['overs_no']}
                teams = {teams}
                matchOver = {false}
            />
            )
        })
    ) :
    []

    return (
        <Box
        sx={{
            mt: 3,
            ml: 10,
            mr: 20,
            mb: 7
        }}
        >
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                ml: 3
            }}
            >
                <Typography
                variant='h6'
                color='hint.dark'
                >
                    {dateHeading}
                </Typography>
            </Box>
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