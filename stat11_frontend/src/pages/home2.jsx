import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MediaCard from '../components/cards/card';
import { teamData } from '../features/matchCard/matchCardSlice'

function Home2() {
    const t1Runs = useSelector(state => state.matchCard.team1runs)
    const t2Runs = useSelector(state => state.matchCard.team2runs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(teamData())
    },[dispatch])


    return(<div>
        <Typography component='box'
        sx={{
            fontSize:'32px',
            float:'left',
            paddingLeft:'30px',
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
            padding:'20px',
            color:'#848484',
        }}
        >Today</Box><br/><br/>
        <Box component='div' 
        sx={{
            paddingLeft:'-20px'
        }}>
        <Box component='span' 
        sx={{
            display:'flex',
            flexWrap: 'wrap'
        }}>

        {[...Array(10)].map((_, index) => (
        <Box>
            <MediaCard team1 = "Blue" team2="Purple" 
            team1runs = {t1Runs.totalRuns} team2runs = {t2Runs.totalRuns}
            team1college = "IIT Roorkee" team2college="IIT Kharagpur"
            toss = "1" matchover = "1" winner ="Blue"
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
      }}j
    >+</Button>

    </Box>
    
</div>
    );
}

export default Home2