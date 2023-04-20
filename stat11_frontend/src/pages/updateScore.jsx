import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/header";
import BattingScorecard from "../components/updateScorePage/battingScorecard";
import BowlingScorecard from "../components/updateScorePage/bowlingScorecard";
import playerList from "../constants/playerList";
import { Typography } from "@mui/material";
import ScorerButtonGrid from "../components/updateScorePage/scorerButtonGrid";
import TeamScore from "../components/updateScorePage/teamScore";
import { selectFormFieldGenerator } from "../components/genericComponent/genericFormFieldGenerators";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import dismissalModes from "../constants/modeOfDismissalList";
import SideBar from "../components/sideBar/sideBar";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";
import BattingScorecardHeading from "../components/mainScorecard/battingSection/battingScorecardHeading";

export default function UpdateScore() {
  const dispatch = useDispatch();
  const [newBowler, setNewBowler] = useState("");
  const [newBatsman, setNewBatsman] = useState("");
  const [wicket, setWicket] = useState("");
  const [isOverComplete, setIsOverComplete] = useState(true);
  const [hasWicketFallen, setHasWicketFallen] = useState(true);
  const selectBowler = isOverComplete ? (
    selectFormFieldGenerator(
      "Select New Bowler",
      playerList,
      newBowler,
      setNewBowler
    )
  ) : (
    <></>
  );
  const selectBatsman = hasWicketFallen ? (
    selectFormFieldGenerator(
      "Select Next Batter",
      playerList,
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
  // useEffect(() => {
  //   dispatch(changeSideBarTabsType("home"));
  // }, []);
  return (
    <Box sx ={{backgroundColor: "background.default"}}>
      <Header
        team1Name="Royal Challengers Bangalore"
        team2Name="Lucknow Super Giants"
        location="M. Chinnaswamy Stadium, Bengaluru"
        numberOfOvers="20"
        teamWhichWonTheToss="Lucknow Super Giants"
      />
      <SideBar />
      {/* <TeamScore
        teamName="Mumbai Indians"
        teamRuns="185"
        wicketsFallen="3"
        oversBowled="14"
        ballsInCurrentOver="3"
        teamNetRunRate="14.3"
      /> */}
      
      <BattingScorecard />
      <Box sx={{ width: "60%", ml: "30%", mt: "1%" }}>
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
      <br />
    </Box>
  );
}
