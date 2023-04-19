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

function MainBattingScorecard(i) {
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
          backgroundColor: "background.default"
        }}
      >
        <CardContent>
          <BattingScorecardHeading/>
          <BattingTable hasInningsEnded={true} />
          <DisplayTotalScore 
            totalExtras={Matchdetails[i.in].team_extras}
            wides={Matchdetails[i.in].wide}
            byes={Matchdetails[i.in].bye}
            legByes={Matchdetails[i.in].legbye}
            noBalls={Matchdetails[i.in].noball}
            teamRuns={Matchdetails[i.in].team_runs}
            teamWickets={Matchdetails[i.in].team_wickets}
            overs={Matchdetails[i.in].team_extras}
            ballsInCurrentOver={Matchdetails[i.in].team_current_overs}
            totalBatter={Matchdetails[i.in].team_current_over_balls}
          />
          {/* The index in MatchDetais will change according to which team is displayed */}
        </CardContent>
      </Card>
    </Box>
  );
}

export default MainBattingScorecard;
