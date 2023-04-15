import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BattingScorecardHeading from "./battingScorecardHeading";
import BattingTable from "./battingTable";
import DisplayTotalScore from "./displayTotalScore";

function MainBattingScorecard(props) {
  return (
    <Box>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 0px",
          paddingRight: "116px",
          paddingLeft: "116px", //360px after nav bar
          backgroundColor: "#E5E5E5"
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
            totalExtras="12"
            wides="4"
            byes="0"
            legByes="8"
            noBalls="0"
            teamRuns="212"
            teamWickets="2"
            overs="20"
            ballsInCurrentOver="0"
            totalBatter="4"
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default MainBattingScorecard;
