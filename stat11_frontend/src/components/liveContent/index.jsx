import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Header from "../components/header";
// import BattingScorecard from "../../components/updateScorePage/battingScorecard";
// import BowlingScorecard from "../../components/updateScorePage/bowlingScorecard";
// import playerList from "../../constants/playerList";
import { Typography } from "@mui/material";
// import ScorerButtonGrid from "../../components/updateScorePage/scorerButtonGrid";
// import { selectFormFieldGenerator } from "../components/genericComponent/genericFormFieldGenerators";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { selectFormFieldGenerator } from "../genericComponent/genericFormFieldGenerators";
import dismissalModes from "../../constants/modeOfDismissalList";
import BattingScorecard from "../updateScorePage/battingScorecard";
import BowlingScorecard from "../updateScorePage/bowlingScorecard";
import ScorerButtonGrid from "../updateScorePage/scorerButtonGrid";
import { openTossWinDialog } from "../../features/team/teamSlice";
import MatchHeader from "../header/matchHeader";
import { getCurrentBatters, getMatchBatters, getTeamBatters, openChooseBatterDialog } from "../../features/scoreboard/batterScoreboardSlice";
import { getCurrentBowlers, getMatchBowlers, openChooseBowlerDialog } from "../../features/scoreboard/bowlerScoreboardSlice";
import ChooseBatterDialog from "../dialog/chooseBattersDialog";
import ChooseBowlerDialog from "../dialog/chooseBowlerDialog";
// import dismissalModes from "../constants/modeOfDismissalList";
// import SideBar from "../components/sideBar/sideBar";

function LiveContent(props) {
    const { matchId } = props
    const dispatch = useDispatch();

    const teamState = useSelector(state => state.team)
    const matchState = useSelector(state => state.match)
    const batterScoreboardState = useSelector(state => state.batterScoreboard)
    const bowlerScoreboardState = useSelector(state => state.bowlerScoreboard)

    const [newBowler, setNewBowler] = useState("");
    const [newBatsman, setNewBatsman] = useState("");
    const [wicket, setWicket] = useState("");
    const [isOverComplete, setIsOverComplete] = useState(true);
    const [hasWicketFallen, setHasWicketFallen] = useState(true);
    const selectBowler = isOverComplete ? (
        selectFormFieldGenerator(
        "Select New Bowler",
        // playerList,
        [],
        newBowler,
        setNewBowler
        )
    ) : (
        <></>
    );
    const selectBatsman = hasWicketFallen ? (
        selectFormFieldGenerator(
        "Select Next Batter",
        // playerList,
        [],
        newBatsman,
        setNewBatsman
        )
    ) : (
        <></>
    );
    const modeOfDismissal = hasWicketFallen ? (
        selectFormFieldGenerator(
        "Select mode of Dismissal",
        dismissalModes,
        wicket,
        setWicket
        )
    ) : (
        <></>
    );

    useEffect(() => {
        // dispatch(
        //     getMatchBatters(matchId)
        // )
        // dispatch(
        //     getMatchBowlers(matchId)
        // )
        // dispatch(
        //     getCurrentBatters()
        // )
    },[])

    useEffect(() => {

        if(teamState.turnTeam===''){
            dispatch(
                openTossWinDialog(true)
            )
        }else {
            dispatch(
                openTossWinDialog(false)
            )
        }

        dispatch(
            getCurrentBatters(
                teamState.turnTeam!=='' ? 
                teamState.turnTeam['id'] :
                0
            )
        )
        dispatch(
            getCurrentBowlers(
                teamState.turnTeam!=='' ?
                (
                    teamState.turnTeam['id']===teamState.team1['id'] ?
                    teamState.team2['id']:
                    teamState.turnTeam['id']
                ) :
                0
            )
        )
    },[teamState.turnTeam])

    // useEffect(() => {
    //     if(batterScoreboardState.currentBatters.length===0) {
    //         dispatch(
    //             openChooseBatterDialog(true)
    //         )
    //     }else {
    //         dispatch(
    //             openChooseBatterDialog(false)
    //         )
    //     }       
    // },[teamState.turnTeam, batterScoreboardState.currentBatters])

    // useEffect(() => {
    //     if(bowlerScoreboardState.currentBowlers.length===0) {
    //         dispatch(
    //             openChooseBowlerDialog(true)
    //         )
    //     }else {
    //         dispatch(
    //             openChooseBowlerDialog(false)
    //         )
    //     }       
    // },[teamState.turnTeam, bowlerScoreboardState.currentBatters])
    
    return (
        <>
        <MatchHeader 
        primaryText={`${teamState.team1['name']} v/s ${teamState.team2['name']}`}
        secondaryText={`${matchState.match['location']}`}
        tossText={`${teamState.turnTeam['name']}`}
        />
        <Box
        sx={{

        }}
        >
            <BattingScorecard />
        </Box>
        <ChooseBatterDialog />
        <ChooseBowlerDialog />
        
        
        {/* <Box sx={{ width: "60%", ml: "30%", mt: "1%" }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
            <Grid item xs={4}>
                {selectBowler}
            </Grid>
            <Grid item xs={4}>
                {modeOfDismissal}
            </Grid>
            <Grid item xs={4}>
                {selectBatsman}
            </Grid>
            </Grid>
        </Box>
        <BowlingScorecard />
        <Typography variant="h3" sx = {{textAlign: "left", ml: "30%"}}>Update Score</Typography>
        <ScorerButtonGrid />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        </>
    );
}

export default LiveContent