import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
// import MediaCard from '../components/cards/card';
// import { TeamData, getMatchTeams } from '../features/match/matchSlice'
import { getAllMatchAndTeams } from '../../features/match/matchSlice';
import MatchCard from '../cards/matchCard';
import MatchSection from './matchSection';

function HomeContent() {
    // const t1Runs = useSelector(state => state.match.team1runs)
    // const t2Runs = useSelector(state => state.match.team2runs)
    
    // const team1Name = useSelector(state => state.match.team1)
    // // console.log(team1Name)
    // const team2Name = useSelector(state => state.match.team2)
    // const team1college = useSelector(state => state.match.team1college)
    // const team2college = useSelector(state => state.match.team2college)
    // const tosss = useSelector(state => state.match.toss)
    const matchState = useSelector(state =>state.match)
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

    // let date = new Date().toJSON().slice(0,10)
    // let matchList = []
    const matchCards = matchState.dateWiseMatchAndTeamsList.length>0 ?
    (
        matchState.dateWiseMatchAndTeamsList.map((dateWiseMatchData,index) => (
            // matchList.push(matchData)
            // console.log(date)
            // console.log(matchData['match']['date'])
            // let returnComponent = <></>
            // if(matchData['match']['date']!==date || index===matchState.matchAndTeamsList.length-1){
            //     console.log("Hello....date")
            //     console.log(date)
            //     console.log(matchData['match']['date'])
            //     console.log(matchList)
            //     const matchSection = (
            //         <MatchSection 
            //         date={date}
            //         matchList={matchList}
            //         />
            //     )
            //     console.log("Added one section")
            //     date = matchData['match']['date']
            //     matchList = [matchData]
            //     console.log("new date...")
            //     console.log(date)
            //     console.log("New list")
            //     console.log(matchList)
            //     return matchSection
            // }
            // // console.log("Adding match to list")
            // matchList.push(matchData)
            // // console.log(matchList)
            // return 
            // matchList.push(matchData)
            // return <MatchSection date={matchData['match']['date']} matchList={matchList}/>
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

            {/* <Box
            sx={{
                float:'left',     
                fontSize: '20px',
                paddingLeft:'25%',
                //paddingTop:"20px",
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
                no_of_overs = {Matchdetails[0].match.overs_no}
                team1 ={Matchdetails[0].name} 
                team2 = {Matchdetails[1].name} 
                team1runs = {Matchdetails[0].team_runs} 
                team2runs = {Matchdetails[1].team_runs}
            
                // team1college = {team1college.college} team2college= {team2college.college}
                team1college = "IIT Roorkee" team2college= "IIT Roorkee"
                toss = {Matchdetails[0].toss} matchover = "1" winner ="Blue"
                team1wickets = "02" team2wickets = "03"
                />
            {(index + 1) % 3 == 0 ? <br /> : null}
            </Box>
            ))}
            
            </Box> */}
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

        {/* </Box>     */}
    </>
    );
}

export default HomeContent