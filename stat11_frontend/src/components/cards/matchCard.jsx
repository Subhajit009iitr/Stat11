import React from 'react'
import tossCoin from '../../assets/Coin.svg'
import { Box, Button, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSideBarTabsType } from '../../features/sideBar/sideBarSlice';
import { chooseMatch } from '../../features/match/matchSlice';

function MatchCard(props) {
    const { match, oversNo, teams, matchOver } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const matchCardClickHandler = (match) => {
        console.log("hello")
        dispatch(
            changeSideBarTabsType('match')
        )
        dispatch(
            chooseMatch(match)
        )
        navigate(`/match/${match['id']}`)
    }

    const winteam = teams[0]['runs']>teams[1]['runs'] ? teams[0]['name'] : teams[1]['name'];
    const winner = (
        <Typography
        variant='body2'
        color='hint.main'
        >
            Winner: {winteam}
        </Typography>    
    )
    
    const liveButton = (
        <CardActions 
        style={{
            float: 'right'
        }}
        >
            <Box
            sx={{
                backgroundColor:'#C0392B', 
                borderRadius: 5
            }}
            >
                <Button 
                disabled
                size="small" 
                >
                    <Typography
                    variant='body2'
                    color='background.paper'
                    >
                        LIVE
                    </Typography>
                </Button>
            </Box>
        </CardActions> 
    )
    
    const matchResult = (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignContent: 'flex-start'
        }}
        >
            {matchOver ? winner : liveButton}
        </Box>
    )

    const coin = teams[0]['toss']!=teams[1]['toss'] ? 
    (
        <Box 
        component="img" 
        src={tossCoin} 
        sx={{
            width: '20px', 
            height: '20px'
        }}
        />
    ) :
    <></>

    const teamStatusBox = (team) => {
        return (
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 4
            }}
            >
                <Box
                sx={{
                    display: 'flex'
                }}
                >
                    <Box
                    sx={{
                        width: 28,
                        height: 20,
                        backgroundColor: 'blue',
                        mr: 2
                    }}/>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                    >
                        <Typography
                        variant='body2'
                        >
                            {team['name']}
                        </Typography>
                        <Typography
                        variant='small1'
                        color='hint.light'
                        >
                            {
                            `(${team['college']===null || team['college']==='' ? 
                            'No-College' : 
                            team['college']})`
                            }
                        </Typography>
                    </Box>
                    {team['toss'] ? coin : <></>}
                </Box>
                <Box>
                    <Typography
                    variant='body1'
                    >
                        {team['runs']} - {team['wickets']}
                    </Typography>
                </Box>
            </Box>
        )
    }

    const teamsStatus = teams.length>0 ?
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        pl: 1,
        pr: 4,
        mb: 4
    }}
    >
        {teams.map(team => teamStatusBox(team))}
    </Box> :
    <></>

    return (
        <Card 
        onClick={() => matchCardClickHandler(match)}
        sx={{ 
            width: '320px', 
            height: '240px',
            boxShadow:"4px 4px 4px 4px #D9D9D9", 
            borderRadius: 4, 
            m: 2
        }}>
            <CardContent>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mr: 4,
                    mb: 4,
                }}
                >
                    <Typography
                    variant='body2'
                    color='hint.main' 
                    >
                        {oversNo} overs
                    </Typography>
                </Box>
                {teamsStatus}
                {matchResult}
            </CardContent>
            
        </Card>
  );
}

export default MatchCard