import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import MediaCard from '../components/cards/card';
import { TeamData, getMatchTeams } from '../features/match/matchSlice'
import { getAllMatchAndTeams } from '../features/match/matchSlice';

function HomeContent() {
    const t1Runs = useSelector(state => state.match.team1runs)
    const t2Runs = useSelector(state => state.match.team2runs)
    
    const team1Name = useSelector(state => state.match.team1)
    // console.log(team1Name)
    const team2Name = useSelector(state => state.match.team2)
    const team1college = useSelector(state => state.match.team1college)
    const team2college = useSelector(state => state.match.team2college)
    const tosss = useSelector(state => state.match.toss)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(
        //     teamScoreData()
        // )
        // dispatch(
        //     getMatchTeams()
        // )
        dispatch(
            getAllMatchAndTeams()
        )
    },[])


    return(<div>
        <Typography component='box'
        sx={{
            fontSize:'32px',
            float:'left',
            paddingLeft:'25%',
            paddingTop:'80px',
            paddingBottom:'10px',
        }}>
             Welcome Back!   
        </Typography>

        <Typography component='box'>
            <hr style={{width: '96vw'}}/>
        </Typography>
        <Box component='div'
        sx={{
            float:'left',     
            fontSize: '20px',
            paddingLeft:'25%',
            color:'#848484',
        }}
        >Today</Box><br/><br/>
        <Box component='div' 
        sx={{
            paddingLeft:'25%'
        }}>
        <Box component='span' 
        sx={{
            display:'flex',
            flexWrap: 'wrap'
        }}>

        {[...Array(10)].map((_, index) => (
        <Box>
            <MediaCard 
            team1 ={team1Name.teamName} 
            team2={team2Name.teamName} 
            team1runs = {t1Runs.totalRuns} 
            team2runs = {t2Runs.totalRuns}
            // team1college = {team1college.college} team2college= {team2college.college}
            team1college = "IIT Roorkee" team2college= "IIT Roorkee"
            toss = {tosss.toss} matchover = "1" winner ="Blue"
            team1wickets = "02" team2wickets = "03"
            />
        {(index + 1) % 3 == 0 ? <br /> : null}
        </Box>
        ))}
        
        </Box>

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

    </Box>
    
</div>
    );
}

export default HomeContent