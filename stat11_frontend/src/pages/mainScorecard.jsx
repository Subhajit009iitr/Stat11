import React from "react";
import Header from "../components/header";
import MainBattingScorecard from "../components/mainScorecard/battingSection/mainBattingScorecard";
import { Box } from "@mui/material";
import MainBowlingScorecard from "../components/mainScorecard/bowlingSection/mainBowlingScorecard";


export default function MainScorecard() {
  return (
    <Box sx = {{backgroundColor: "#E5E5E5"}}>
      <Header
        team1Name="Royal Challengers Bangalore"
        team2Name="Lucknow Super Giants"
        location="M. Chinnaswamy Stadium, Bengaluru"
        numberOfOvers="20"
        teamWhichWonTheToss="Lucknow Super Giants"
      />
      <MainBattingScorecard />
      <MainBowlingScorecard/>
      <br/>
      <br/>
    </Box>
  );
}
