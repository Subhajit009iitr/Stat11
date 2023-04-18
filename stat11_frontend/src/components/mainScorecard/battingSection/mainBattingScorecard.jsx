import React, { useState } from "react";
import { Box, Grid, Typography, colors } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BattingScorecardHeading from "./battingScorecardHeading";
import BattingTable from "./battingTable";
import DisplayTotalScore from "./displayTotalScore";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllMatchAndTeams } from "../../../features/match/matchSlice";

function MainBattingScorecard() {
  const Matchdetails = useSelector(state =>state.match.matchAndTeamsList)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(
      getAllMatchAndTeams()
      )
  },[])
  return (
    <Box sx = {{width: "80%", ml: "20%", position: "sticky"}}>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 0px",
          paddingRight: "116px",
          paddingLeft: "116px", //360px after nav bar
          //backgroundColor: "theme.pallete.background.default",
          backgroundColor: "#F8F8F8"
        }}
      >
        <CardContent>
          <BattingScorecardHeading
            battingTeamName="Royal Challengers Bangalore"
            teamRuns="212"
            teamWickets="2"
            overs="20"
            ballsInCurrentOver="0"
            hasInningsEnded={true}
          />
          <BattingTable hasInningsEnded={true} />
          <DisplayTotalScore 
            totalExtras={Matchdetails[0].team_extras}
            wides={Matchdetails[0].wide}
            byes={Matchdetails[0].bye}
            legByes={Matchdetails[0].legbye}
            noBalls={Matchdetails[0].noball}
            teamRuns={Matchdetails[0].team_runs}
            teamWickets={Matchdetails[0].team_wickets}
            overs={Matchdetails[0].team_extras}
            ballsInCurrentOver={Matchdetails[0].team_current_overs}
            totalBatter={Matchdetails[0].team_current_over_balls}
          />
          {/* The index in MatchDetais will change according to which team is displayed */}
        </CardContent>
      </Card>
    </Box>
  );
}

export default MainBattingScorecard;
