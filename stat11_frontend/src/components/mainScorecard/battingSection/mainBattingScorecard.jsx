import React, { useState } from "react";
import { Box, Grid, Typography, colors } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BattingScorecardHeading from "./battingScorecardHeading";
import BattingTable from "./battingTable";
import DisplayTotalScore from "./displayTotalScore";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllMatchAndTeamsDetails } from "../../../features/match/matchSlice";

function MainBattingScorecard(props) {

  return ( 
    <Box sx = {{width: "80vw", position: "sticky", mt: "8vh"}}>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 0px",
          paddingRight: "5%",
          paddingLeft: "5%", //360px after nav bar
          backgroundColor: "background.default"
        }}
      >
        <CardContent>
          <BattingScorecardHeading obj={props.obj}/>
          <BattingTable hasInningsEnded={true} obj={props.obj} bat={props.bat}/>
          <DisplayTotalScore 
          
            byes={props.obj.bye}
            legByes={props.obj.legbye}
            noBalls={props.obj.no_ball}
            wide={props.obj.wide}
            totalExtras={props.obj.bye+props.obj.legbye+props.obj.no_ball+props.obj.wide}
            teamRuns={props.obj.runs+props.obj.bye+props.obj.legbye+props.obj.no_ball+props.obj.wide}
            teamWickets={props.obj.wickets}
            // overs={new_obj.team_current_overs}
            // ballsInCurrentOver={new_obj.team_current_over_balls}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default MainBattingScorecard;
